# Deployment & Server Context

> Written 2026-05-28. Future-AI handoff doc for the nagare-mc Astro site
> hosted on Hetzner. Skim the **Current State** and **Pending Maintenance**
> sections first to understand where things are.

## Current State

- **Site:** Astro 5.x static build, no SSR, no API routes
- **Local repo:** `C:\Users\crypt\Documents\_1_WORK\___CLAUDE_COWORK_MC\nagare-mc`
- **Public URL:** `https://new.merlincarter.com/` (staging subdomain — apex not cut over yet)
- **Server:** Hetzner Cloud, `docker-ce-ubuntu-4gb-nbg1-2`, IPv4 `91.98.77.228`, location `nbg1` (Nuremberg)
- **hcloud context:** `linkedout` (mis-typed as "linkedon" in casual chat — actual name is `linkedout`)

## Architecture

```
laptop ── (rsync over ssh) ──> /var/www/nagare/ ──[bind mount]──> Caddy container
                                                                  │
                                                                  └── HTTPS (Let's Encrypt auto)
                                                                  └── http://* redirect to https://
```

- **Caddy** runs as a container at `/root/nagare/` on the server, owns ports 80 + 443
- Caddy bind-mounts host `/var/www/` as `/srv/` and serves `new.merlincarter.com` from `/srv/nagare`
- Static files only — no Node runtime needed on the server

## Deploy Workflow

From WSL/Git Bash on the laptop:

```bash
cd /c/Users/crypt/Documents/_1_WORK/___CLAUDE_COWORK_MC/nagare-mc
npm run build
rsync -avz --delete dist/ hetzner:/var/www/nagare/
```

`hetzner` is an SSH alias defined in `~/.ssh/config` (see Local Tooling below).

## Server Files

| Path | What |
|---|---|
| `/root/nagare/docker-compose.yml` | Caddy service definition |
| `/root/nagare/Caddyfile` | Routes hostname → web root |
| `/var/www/nagare/` | Site content, rsync target |
| `/root/linkedout-mc/` | Legacy n8n + PocketBase + Next.js stack (see Pending) |
| `/root/arcane/` | Arcane Docker management UI (running, port 3000) |

Compose for Caddy (`/root/nagare/docker-compose.yml`):

```yaml
services:
  caddy:
    image: caddy:2-alpine
    container_name: nagare-caddy
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile
      - /var/www:/srv
      - caddy_data:/data
      - caddy_config:/config

volumes:
  caddy_data:
  caddy_config:
```

Current Caddyfile:

```
new.merlincarter.com {
    root * /srv/nagare
    file_server
    encode gzip zstd
}
```

When apex is cut over (see Pending), this becomes:

```
new.merlincarter.com, merlincarter.com, www.merlincarter.com {
    root * /srv/nagare
    file_server
    encode gzip zstd
}
```

Caddy reload after editing Caddyfile: `cd /root/nagare && docker compose restart caddy`
(or `docker compose exec caddy caddy reload --config /etc/caddy/Caddyfile` for zero-downtime).

## Domain & DNS (1&1 Ionos)

- Domain `merlincarter.com` registered + DNS-managed at 1&1 Ionos
- Authoritative nameservers: `ns1071.ui-dns.{org,biz,com,de}`
- **Email is hosted at Ionos** — `merlin@merlincarter.com` is active. **Never touch MX, TXT (SPF/DKIM), DMARC records.**
- TTLs lowered to 1 min (the Ionos minimum) to make the apex cutover fast

**Current records (May 2026):**
- `new.merlincarter.com` A → `91.98.77.228`, AAAA → `2a01:4f8:1c1e:7c8d::1` (our server) ✅
- `merlincarter.com` (apex) → Squarespace (still hosts the current public site)
- `www.merlincarter.com` → Squarespace

**Server IPv6 confirmed:** `2a01:4f8:1c1e:7c8d::1` (from `ip -6 addr` on the box, not just the /64 prefix shown in hcloud). Caddy already listens on `:::443`.

**Ionos UI quirks to remember:**
- Ionos has TWO concepts: "Subdomains" (their managed routing with parking pages) vs raw "DNS records". Always use the **DNS records** view. Adding a "Subdomain" auto-points it to Ionos's parking IPs.
- "Deactivated" records in their UI are NOT reliably gone — they can come back unprompted. The only durable fix is an explicit DNS record that overrides them.
- Their parking pages live at IPv4 `217.160.122.167` and IPv6 `2001:8d8:1001:1019:...` — if you see those, it means a Subdomain entry at Ionos is in play.
- If a Subdomain is deleted, it nukes both A and AAAA. Re-add via DNS records view, not Subdomains.
- After fixing DNS, Cloudflare/8.8.8.8/etc may serve stale NXDOMAIN for a few minutes (SOA negative cache, ~84s). Authoritative NS (`ns1071.ui-dns.com`) is the source of truth during this window.

## Hetzner Firewall (`firewall-1`)

Inbound rules currently allowed:

| Port | Source | Description |
|---|---|---|
| 22 | 0.0.0.0/0, ::/0 | SSH (open, key auth) |
| 80 | 0.0.0.0/0, ::/0 | HTTP |
| 443 | 0.0.0.0/0, ::/0 | HTTPS |
| 3000 | 0.0.0.0/0, ::/0 | Arcane Docker UI |

SSH was originally locked to Merlin's home IP `92.116.228.251/32`, but he switches networks (travels, mobile tethering, CGNAT) frequently enough that single-IP whitelisting kept breaking. Opened to the world 2026-06-22; password auth is disabled on the box so key-only auth is the gate. To re-lock at any point: `hcloud firewall replace-rules firewall-1 --rules-file <new rules>`.

`hcloud` CLI: context is `linkedout`. Skill `hcloud-cli` is registered globally (junction at `~/.claude/skills/hcloud-cli/`).

## Local Tooling

Built up in this session, currently on Merlin's Windows machine:

### rsync via MSYS2 packages into Git Bash

rsync isn't shipped with Git for Windows. We dropped MSYS2 binaries into Git's `usr/bin` so `rsync` "just works" in Git Bash sessions.

Files copied into `C:\Program Files\Git\usr\bin\`:
- `rsync.exe` (from `rsync-3.4.2-2-x86_64.pkg.tar.zst`)
- `msys-popt-0.dll` (from `popt-1.19-1-x86_64.pkg.tar.zst`)
- `msys-xxhash-0.dll` (from `libxxhash-0.8.3-1-x86_64.pkg.tar.zst`)

Other DLL deps (`msys-2.0`, `msys-crypto-3`, `msys-iconv-2`, `msys-intl-8`, `msys-lz4-1`, `msys-z`, `msys-zstd-1`) were already present in Git Bash.

Source: `https://repo.msys2.org/msys/x86_64/`. To update: download latest versions, extract with `tar -xf` (Windows native tar handles .zst), copy `rsync.exe` + DLLs to Git/usr/bin (UAC required). If a new MSYS2 rsync depends on a new DLL, it'll error out with `error while loading shared libraries: msys-FOO.dll` — search MSYS2 repo for the matching package.

### SSH key

PuTTY `.ppk` at `C:\Users\crypt\Documents\_3_PERSONAL\_HETZNER\SSH\priv.ppk` was converted via PuTTYgen GUI (Conversions → Export OpenSSH Key) to:

- Private: `C:\Users\crypt\.ssh\hetzner` (locked to user only via icacls)
- ACLs: `icacls hetzner /inheritance:r /grant:r "USERNAME:(R)"`

**Gotcha:** PuTTYgen 0.83 on Windows is a GUI app — `-O` CLI flag works in theory but our attempts via PowerShell silently failed (likely a UAC or console-attach issue). GUI export is the reliable path.

### SSH config

`C:\Users\crypt\.ssh\config`:

```
Host hetzner
    HostName 91.98.77.228
    User root
    IdentityFile ~/.ssh/hetzner
```

So `ssh hetzner` and `rsync ... hetzner:/path/` both Just Work.

## Pending Maintenance Tasks

Listed in rough priority order. Future AI: don't do these without explicit user confirmation — they involve DNS changes and tearing down a long-running stack.

### 1. Apex cutover (`merlincarter.com` → Hetzner)

Currently `https://merlincarter.com/` points to Squarespace. Once the user is happy with the new Astro site on `new.merlincarter.com`, the cutover steps are:

1. At Ionos DNS: change apex `@` A record from Squarespace IPs to `91.98.77.228`
2. At Ionos DNS: change `www` CNAME/A to point to apex or `91.98.77.228`
3. **Do not touch MX, TXT, DMARC** — email stays at Ionos
4. SSH in, edit `/root/nagare/Caddyfile` to include `merlincarter.com, www.merlincarter.com` alongside `new.merlincarter.com`
5. `docker compose exec caddy caddy reload --config /etc/caddy/Caddyfile`
6. Caddy auto-provisions Let's Encrypt certs for the new hostnames
7. Wait ~48h, confirm everything works, then user can cancel Squarespace

DNS propagation should be fast (~1 min) due to the lowered TTLs.

### 2. Decommission `linkedout-mc` stack

`/root/linkedout-mc/` runs:
- `linkedout-mc-frontend-1` (Next.js, port 3001)
- `linkedout-mc-pocketbase-1` (PocketBase, port 8090)
- `linkedout-mc-n8n-1` (n8n, port 5678)

These were left running from an old n8n project Merlin no longer needs. Frees ~1-2GB RAM when torn down.

Steps (do NOT run without confirmation; PocketBase may have data Merlin wants):

```bash
ssh hetzner
cd /root/linkedout-mc
# Back up pb_data first in case
tar czf /root/pb_data_backup_$(date +%Y%m%d).tar.gz backend/pb_data/
docker compose down -v       # -v removes volumes (n8n_data, pb_data)
# Optionally: rm -rf /root/linkedout-mc
```

There's also a commented-out ngrok service in their compose — irrelevant.

### 3. ~~Dynamic IP rule for SSH~~ (resolved 2026-06-22)

Resolved by opening port 22 to `0.0.0.0/0` — Merlin is travelling and switching networks too often for IP-pinning to be practical. SSH key-only auth is the security gate. If you want to tighten this later (e.g. back home on a stable IP), use `hcloud firewall replace-rules` with a narrower CIDR.

## Gotchas Discovered

- **Caddy ACME failures during initial provisioning** show as `ERR_SSL_PROTOCOL_ERROR` in browsers that hit the domain during the failure window. State sticks until browser restart or socket pool flush. Curl/openssl will work fine.
- **Windows DNS cache** doesn't honor record-level TTL changes for already-cached entries — `Clear-DnsClientCache` after a DNS change avoids surprises.
- **Browser DNS** is independent from OS DNS. Chrome's `chrome://net-internals/#dns` has its own cache.
- **rsync over WSL path translation**: rsync run from Git Bash works fine with `/c/Users/...` paths; no path mangling.
- **Plink (PuTTY's CLI ssh)** uses `.ppk` directly, useful as a fallback if the OpenSSH setup ever breaks. Binary at `C:\Program Files\PuTTY\plink.exe`.

## Quick Reference

```bash
# Deploy
cd /c/Users/crypt/Documents/_1_WORK/___CLAUDE_COWORK_MC/nagare-mc
npm run build && rsync -avz --delete dist/ hetzner:/var/www/nagare/

# Server inspection
ssh hetzner "docker ps"
ssh hetzner "docker logs nagare-caddy --tail 50"
ssh hetzner "ls /var/www/nagare/"

# Caddy reload after Caddyfile edit
ssh hetzner "cd /root/nagare && docker compose exec caddy caddy reload --config /etc/caddy/Caddyfile"

# DNS sanity check from local
nslookup new.merlincarter.com 1.1.1.1
Clear-DnsClientCache    # in PowerShell

# hcloud quick checks
hcloud server list
hcloud firewall describe firewall-1
```
