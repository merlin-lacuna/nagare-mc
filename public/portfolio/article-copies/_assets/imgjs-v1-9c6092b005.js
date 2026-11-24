window.imgjs = window.imgjs || {}
// Global IMGJS config defaults (organized under config.forms)
imgjs.config = imgjs.config || {}
imgjs.config.forms = imgjs.config.forms || {}
imgjs.config.forms.country = imgjs.config.forms.country || {
  options: [
    { value: 'Afghanistan', title: 'Afghanistan' },
    { value: 'Albania', title: 'Albania' },
    { value: 'Algeria', title: 'Algeria' },
    { value: 'American Samoa', title: 'American Samoa' },
    { value: 'Andorra', title: 'Andorra' },
    { value: 'Angola', title: 'Angola' },
    { value: 'Anguilla', title: 'Anguilla' },
    { value: 'Antigua and Barbuda', title: 'Antigua and Barbuda' },
    { value: 'Argentina', title: 'Argentina' },
    { value: 'Armenia', title: 'Armenia' },
    { value: 'Aruba', title: 'Aruba' },
    { value: 'Australia', title: 'Australia' },
    { value: 'Austria', title: 'Austria' },
    { value: 'Azerbaijan', title: 'Azerbaijan' },
    { value: 'Bahamas', title: 'Bahamas' },
    { value: 'Bahrain', title: 'Bahrain' },
    { value: 'Bangladesh', title: 'Bangladesh' },
    { value: 'Barbados', title: 'Barbados' },
    { value: 'Belarus', title: 'Belarus' },
    { value: 'Belgium', title: 'Belgium' },
    { value: 'Belize', title: 'Belize' },
    { value: 'Benin', title: 'Benin' },
    { value: 'Bermuda', title: 'Bermuda' },
    { value: 'Bhutan', title: 'Bhutan' },
    { value: 'Bolivia', title: 'Bolivia' },
    { value: 'Bosnia and Herzegovina', title: 'Bosnia and Herzegovina' },
    { value: 'Botswana', title: 'Botswana' },
    { value: 'Brazil', title: 'Brazil' },
    { value: 'Brunei', title: 'Brunei' },
    { value: 'Bulgaria', title: 'Bulgaria' },
    { value: 'Burkina Faso', title: 'Burkina Faso' },
    { value: 'Burundi', title: 'Burundi' },
    { value: 'Cabo Verde', title: 'Cabo Verde' },
    { value: 'Cambodia', title: 'Cambodia' },
    { value: 'Cameroon', title: 'Cameroon' },
    { value: 'Canada', title: 'Canada' },
    { value: 'Cayman Islands', title: 'Cayman Islands' },
    { value: 'Central African Republic', title: 'Central African Republic' },
    { value: 'Chad', title: 'Chad' },
    { value: 'Chile', title: 'Chile' },
    { value: 'China', title: 'China' },
    { value: 'Colombia', title: 'Colombia' },
    { value: 'Comoros', title: 'Comoros' },
    { value: 'Congo', title: 'Congo' },
    { value: 'Congo (Democratic Republic)', title: 'Congo (Democratic Republic)' },
    { value: 'Cook Islands', title: 'Cook Islands' },
    { value: 'Costa Rica', title: 'Costa Rica' },
    { value: 'Côte d’Ivoire', title: 'Côte d’Ivoire' },
    { value: 'Croatia', title: 'Croatia' },
    { value: 'Cuba', title: 'Cuba' },
    { value: 'Curaçao', title: 'Curaçao' },
    { value: 'Cyprus', title: 'Cyprus' },
    { value: 'Czechia', title: 'Czechia' },
    { value: 'Denmark', title: 'Denmark' },
    { value: 'Djibouti', title: 'Djibouti' },
    { value: 'Dominica', title: 'Dominica' },
    { value: 'Dominican Republic', title: 'Dominican Republic' },
    { value: 'Ecuador', title: 'Ecuador' },
    { value: 'Egypt', title: 'Egypt' },
    { value: 'El Salvador', title: 'El Salvador' },
    { value: 'Equatorial Guinea', title: 'Equatorial Guinea' },
    { value: 'Eritrea', title: 'Eritrea' },
    { value: 'Estonia', title: 'Estonia' },
    { value: 'Eswatini', title: 'Eswatini' },
    { value: 'Ethiopia', title: 'Ethiopia' },
    { value: 'Fiji', title: 'Fiji' },
    { value: 'Finland', title: 'Finland' },
    { value: 'France', title: 'France' },
    { value: 'French Guiana', title: 'French Guiana' },
    { value: 'French Polynesia', title: 'French Polynesia' },
    { value: 'Gabon', title: 'Gabon' },
    { value: 'Gambia', title: 'Gambia' },
    { value: 'Georgia', title: 'Georgia' },
    { value: 'Germany', title: 'Germany' },
    { value: 'Ghana', title: 'Ghana' },
    { value: 'Greece', title: 'Greece' },
    { value: 'Greenland', title: 'Greenland' },
    { value: 'Grenada', title: 'Grenada' },
    { value: 'Guadeloupe', title: 'Guadeloupe' },
    { value: 'Guam', title: 'Guam' },
    { value: 'Guatemala', title: 'Guatemala' },
    { value: 'Guernsey', title: 'Guernsey' },
    { value: 'Guinea', title: 'Guinea' },
    { value: 'Guinea-Bissau', title: 'Guinea-Bissau' },
    { value: 'Guyana', title: 'Guyana' },
    { value: 'Haiti', title: 'Haiti' },
    { value: 'Honduras', title: 'Honduras' },
    { value: 'Hong Kong', title: 'Hong Kong' },
    { value: 'Hungary', title: 'Hungary' },
    { value: 'Iceland', title: 'Iceland' },
    { value: 'India', title: 'India' },
    { value: 'Indonesia', title: 'Indonesia' },
    { value: 'Iran', title: 'Iran' },
    { value: 'Iraq', title: 'Iraq' },
    { value: 'Ireland', title: 'Ireland' },
    { value: 'Isle of Man', title: 'Isle of Man' },
    { value: 'Israel', title: 'Israel' },
    { value: 'Italy', title: 'Italy' },
    { value: 'Jamaica', title: 'Jamaica' },
    { value: 'Japan', title: 'Japan' },
    { value: 'Jersey', title: 'Jersey' },
    { value: 'Jordan', title: 'Jordan' },
    { value: 'Kazakhstan', title: 'Kazakhstan' },
    { value: 'Kenya', title: 'Kenya' },
    { value: 'Kiribati', title: 'Kiribati' },
    { value: 'Kuwait', title: 'Kuwait' },
    { value: 'Kyrgyzstan', title: 'Kyrgyzstan' },
    { value: 'Laos', title: 'Laos' },
    { value: 'Latvia', title: 'Latvia' },
    { value: 'Lebanon', title: 'Lebanon' },
    { value: 'Lesotho', title: 'Lesotho' },
    { value: 'Liberia', title: 'Liberia' },
    { value: 'Libya', title: 'Libya' },
    { value: 'Liechtenstein', title: 'Liechtenstein' },
    { value: 'Lithuania', title: 'Lithuania' },
    { value: 'Luxembourg', title: 'Luxembourg' },
    { value: 'Macau', title: 'Macau' },
    { value: 'Madagascar', title: 'Madagascar' },
    { value: 'Malawi', title: 'Malawi' },
    { value: 'Malaysia', title: 'Malaysia' },
    { value: 'Maldives', title: 'Maldives' },
    { value: 'Mali', title: 'Mali' },
    { value: 'Malta', title: 'Malta' },
    { value: 'Marshall Islands', title: 'Marshall Islands' },
    { value: 'Martinique', title: 'Martinique' },
    { value: 'Mauritania', title: 'Mauritania' },
    { value: 'Mauritius', title: 'Mauritius' },
    { value: 'Mexico', title: 'Mexico' },
    { value: 'Micronesia', title: 'Micronesia' },
    { value: 'Moldova', title: 'Moldova' },
    { value: 'Monaco', title: 'Monaco' },
    { value: 'Mongolia', title: 'Mongolia' },
    { value: 'Montenegro', title: 'Montenegro' },
    { value: 'Montserrat', title: 'Montserrat' },
    { value: 'Morocco', title: 'Morocco' },
    { value: 'Mozambique', title: 'Mozambique' },
    { value: 'Myanmar', title: 'Myanmar' },
    { value: 'Namibia', title: 'Namibia' },
    { value: 'Nauru', title: 'Nauru' },
    { value: 'Nepal', title: 'Nepal' },
    { value: 'Netherlands', title: 'Netherlands' },
    { value: 'New Caledonia', title: 'New Caledonia' },
    { value: 'New Zealand', title: 'New Zealand' },
    { value: 'Nicaragua', title: 'Nicaragua' },
    { value: 'Niger', title: 'Niger' },
    { value: 'Nigeria', title: 'Nigeria' },
    { value: 'Niue', title: 'Niue' },
    { value: 'North Macedonia', title: 'North Macedonia' },
    { value: 'Northern Mariana Islands', title: 'Northern Mariana Islands' },
    { value: 'Norway', title: 'Norway' },
    { value: 'Oman', title: 'Oman' },
    { value: 'Pakistan', title: 'Pakistan' },
    { value: 'Palau', title: 'Palau' },
    { value: 'Panama', title: 'Panama' },
    { value: 'Papua New Guinea', title: 'Papua New Guinea' },
    { value: 'Paraguay', title: 'Paraguay' },
    { value: 'Peru', title: 'Peru' },
    { value: 'Philippines', title: 'Philippines' },
    { value: 'Poland', title: 'Poland' },
    { value: 'Portugal', title: 'Portugal' },
    { value: 'Puerto Rico', title: 'Puerto Rico' },
    { value: 'Qatar', title: 'Qatar' },
    { value: 'Réunion', title: 'Réunion' },
    { value: 'Romania', title: 'Romania' },
    { value: 'Russia', title: 'Russia' },
    { value: 'Rwanda', title: 'Rwanda' },
    { value: 'Samoa', title: 'Samoa' },
    { value: 'San Marino', title: 'San Marino' },
    { value: 'Saudi Arabia', title: 'Saudi Arabia' },
    { value: 'Senegal', title: 'Senegal' },
    { value: 'Serbia', title: 'Serbia' },
    { value: 'Seychelles', title: 'Seychelles' },
    { value: 'Sierra Leone', title: 'Sierra Leone' },
    { value: 'Singapore', title: 'Singapore' },
    { value: 'Sint Maarten', title: 'Sint Maarten' },
    { value: 'Slovakia', title: 'Slovakia' },
    { value: 'Slovenia', title: 'Slovenia' },
    { value: 'Solomon Islands', title: 'Solomon Islands' },
    { value: 'Somalia', title: 'Somalia' },
    { value: 'South Africa', title: 'South Africa' },
    { value: 'South Korea', title: 'South Korea' },
    { value: 'Spain', title: 'Spain' },
    { value: 'Sri Lanka', title: 'Sri Lanka' },
    { value: 'Sudan', title: 'Sudan' },
    { value: 'Suriname', title: 'Suriname' },
    { value: 'Sweden', title: 'Sweden' },
    { value: 'Switzerland', title: 'Switzerland' },
    { value: 'Syria', title: 'Syria' },
    { value: 'Taiwan', title: 'Taiwan' },
    { value: 'Tajikistan', title: 'Tajikistan' },
    { value: 'Tanzania', title: 'Tanzania' },
    { value: 'Thailand', title: 'Thailand' },
    { value: 'Timor-Leste', title: 'Timor-Leste' },
    { value: 'Togo', title: 'Togo' },
    { value: 'Tonga', title: 'Tonga' },
    { value: 'Trinidad and Tobago', title: 'Trinidad and Tobago' },
    { value: 'Tunisia', title: 'Tunisia' },
    { value: 'Turkey', title: 'Turkey' },
    { value: 'Turkmenistan', title: 'Turkmenistan' },
    { value: 'Turks and Caicos Islands', title: 'Turks and Caicos Islands' },
    { value: 'Tuvalu', title: 'Tuvalu' },
    { value: 'Uganda', title: 'Uganda' },
    { value: 'Ukraine', title: 'Ukraine' },
    { value: 'United Arab Emirates', title: 'United Arab Emirates' },
    { value: 'United Kingdom', title: 'United Kingdom' },
    { value: 'United States', title: 'United States' },
    { value: 'Uruguay', title: 'Uruguay' },
    { value: 'Uzbekistan', title: 'Uzbekistan' },
    { value: 'Vanuatu', title: 'Vanuatu' },
    { value: 'Venezuela', title: 'Venezuela' },
    { value: 'Vietnam', title: 'Vietnam' },
    { value: 'Virgin Islands (U.S.)', title: 'Virgin Islands (U.S.)' },
    { value: 'Yemen', title: 'Yemen' },
    { value: 'Zambia', title: 'Zambia' },
    { value: 'Zimbabwe', title: 'Zimbabwe' }
  ]
}
// Default Department options (fallback if form.department.options is not provided)
imgjs.config.forms.department = imgjs.config.forms.department || {
  options: [
    { value: 'it__applications__development', title: 'IT - Applications / Development' },
    { value: 'it__business_intelligence', title: 'IT - Business Intelligence' },
    { value: 'it__database', title: 'IT - Database' },
    { value: 'it__desktop__help_desk', title: 'IT - Desktop / Help Desk' },
    { value: 'it__network', title: 'IT - Network' },
    { value: 'it__operations', title: 'IT - Operations' },
    { value: 'it__project_management', title: 'IT - Project Management' },
    { value: 'it__quality__testing', title: 'IT - Quality / Testing' },
    { value: 'it__risk__compliance__security', title: 'IT - Risk / Compliance / Security' },
    { value: 'it__server__storage', title: 'IT - Server / Storage' },
    { value: 'it__telecom', title: 'IT - Telecom' },
    { value: 'it__web', title: 'IT - Web' },
    { value: 'executive_office', title: 'Executive Office' },
    { value: 'finance', title: 'Finance' },
    { value: 'human_resources', title: 'Human Resources' },
    { value: 'legal', title: 'Legal' },
    { value: 'marketing_communications', title: 'Marketing Communications' },
    { value: 'research__development', title: 'Research & Development' },
    { value: 'sales', title: 'Sales' }
  ]
}
imgjs.subscribe = {}
imgjs.subscribe.otc_login_flow_id = null
imgjs.subscribe.user_id = null

imgjs.subscribe.config = {
	subscribe_url: null,
	login_url: null,
	update_url: null,
	read_url: null,
	button_color: null,
	onClose: null,
	onProfileUpdate: null,
	copy: {
		email_slide: {
			heading: {
				subscribe: null,
				login: null,
			},
			cta: {
				subscribe: null,
				login: null,
			},
			button_label: {
				subscribe: null,
				login: null,
			}
		},
		verify_slide: {
			heading: {
				subscribe: null,
				login: null,
			},
			prompt: {
				subscribe: null,
				login: null,
			},
			button_label: {
				subscribe: null,
				login: null,
			}
		},
		profile_slide: {
			heading: {
				subscribe: null,
				login: null,
			},
			cta: {
				subscribe: null,
				login: null,
			},
			button_label: {
				subscribe: null,
				login: null,
			}
		},
		confirm_slide: {
			heading: {
				subscribe: null,
				login: null,
			},
			welcome: {
				subscribe: null,
				login: null,
			},
			whats_next: {
				subscribe: null,
				login: null,
			},
			follow: {
				subscribe: null,
				login: null,
			},
			button_label: {
				subscribe: null,
				login: null,
			}
		}
	},
	images: {
		email_slide: {
			key_image: null
		},
	},
	form: {
		job_role: {
			options: []
		},
		department: {
			options: [
				{ value: 'it__applications__development', title: 'IT - Applications / Development' },
				{ value: 'it__business_intelligence', title: 'IT - Business Intelligence' },
				{ value: 'it__database', title: 'IT - Database' },
				{ value: 'it__desktop__help_desk', title: 'IT - Desktop / Help Desk' },
				{ value: 'it__network', title: 'IT - Network' },
				{ value: 'it__operations', title: 'IT - Operations' },
				{ value: 'it__project_management', title: 'IT - Project Management' },
				{ value: 'it__quality__testing', title: 'IT - Quality / Testing' },
				{ value: 'it__risk__compliance__security', title: 'IT - Risk / Compliance / Security' },
				{ value: 'it__server__storage', title: 'IT - Server / Storage' },
				{ value: 'it__telecom', title: 'IT - Telecom' },
				{ value: 'it__web', title: 'IT - Web' },
				{ value: 'executive_office', title: 'Executive Office' },
				{ value: 'finance', title: 'Finance' },
				{ value: 'human_resources', title: 'Human Resources' },
				{ value: 'legal', title: 'Legal' },
				{ value: 'marketing_communications', title: 'Marketing Communications' },
				{ value: 'research__development', title: 'Research & Development' },
				{ value: 'sales', title: 'Sales' }
			]
		},
		profile_fields: {
			firstname: { enabled: true, required: true },
			lastname: { enabled: true, required: true },
			department: { enabled: false, required: false },
			jobrole: { enabled: true, required: true },
			employer: { enabled: true, required: true },
			industry: { enabled: true, required: true },
			phone: { enabled: true, required: false },
			country: { enabled: false, required: false },
			zip_code: { enabled: false, required: false }
		},
		country: {
			options: [
				{ value: 'Afghanistan', title: 'Afghanistan' },
				{ value: 'Albania', title: 'Albania' },
				{ value: 'Algeria', title: 'Algeria' },
				{ value: 'American Samoa', title: 'American Samoa' },
				{ value: 'Andorra', title: 'Andorra' },
				{ value: 'Angola', title: 'Angola' },
				{ value: 'Anguilla', title: 'Anguilla' },
				{ value: 'Antigua and Barbuda', title: 'Antigua and Barbuda' },
				{ value: 'Argentina', title: 'Argentina' },
				{ value: 'Armenia', title: 'Armenia' },
				{ value: 'Aruba', title: 'Aruba' },
				{ value: 'Australia', title: 'Australia' },
				{ value: 'Austria', title: 'Austria' },
				{ value: 'Azerbaijan', title: 'Azerbaijan' },
				{ value: 'Bahamas', title: 'Bahamas' },
				{ value: 'Bahrain', title: 'Bahrain' },
				{ value: 'Bangladesh', title: 'Bangladesh' },
				{ value: 'Barbados', title: 'Barbados' },
				{ value: 'Belarus', title: 'Belarus' },
				{ value: 'Belgium', title: 'Belgium' },
				{ value: 'Belize', title: 'Belize' },
				{ value: 'Benin', title: 'Benin' },
				{ value: 'Bermuda', title: 'Bermuda' },
				{ value: 'Bhutan', title: 'Bhutan' },
				{ value: 'Bolivia', title: 'Bolivia' },
				{ value: 'Bosnia and Herzegovina', title: 'Bosnia and Herzegovina' },
				{ value: 'Botswana', title: 'Botswana' },
				{ value: 'Brazil', title: 'Brazil' },
				{ value: 'Brunei', title: 'Brunei' },
				{ value: 'Bulgaria', title: 'Bulgaria' },
				{ value: 'Burkina Faso', title: 'Burkina Faso' },
				{ value: 'Burundi', title: 'Burundi' },
				{ value: 'Cabo Verde', title: 'Cabo Verde' },
				{ value: 'Cambodia', title: 'Cambodia' },
				{ value: 'Cameroon', title: 'Cameroon' },
				{ value: 'Canada', title: 'Canada' },
				{ value: 'Cayman Islands', title: 'Cayman Islands' },
				{ value: 'Central African Republic', title: 'Central African Republic' },
				{ value: 'Chad', title: 'Chad' },
				{ value: 'Chile', title: 'Chile' },
				{ value: 'China', title: 'China' },
				{ value: 'Colombia', title: 'Colombia' },
				{ value: 'Comoros', title: 'Comoros' },
				{ value: 'Congo', title: 'Congo' },
				{ value: 'Congo (Democratic Republic)', title: 'Congo (Democratic Republic)' },
				{ value: 'Cook Islands', title: 'Cook Islands' },
				{ value: 'Costa Rica', title: 'Costa Rica' },
				{ value: 'Côte d’Ivoire', title: 'Côte d’Ivoire' },
				{ value: 'Croatia', title: 'Croatia' },
				{ value: 'Cuba', title: 'Cuba' },
				{ value: 'Curaçao', title: 'Curaçao' },
				{ value: 'Cyprus', title: 'Cyprus' },
				{ value: 'Czechia', title: 'Czechia' },
				{ value: 'Denmark', title: 'Denmark' },
				{ value: 'Djibouti', title: 'Djibouti' },
				{ value: 'Dominica', title: 'Dominica' },
				{ value: 'Dominican Republic', title: 'Dominican Republic' },
				{ value: 'Ecuador', title: 'Ecuador' },
				{ value: 'Egypt', title: 'Egypt' },
				{ value: 'El Salvador', title: 'El Salvador' },
				{ value: 'Equatorial Guinea', title: 'Equatorial Guinea' },
				{ value: 'Eritrea', title: 'Eritrea' },
				{ value: 'Estonia', title: 'Estonia' },
				{ value: 'Eswatini', title: 'Eswatini' },
				{ value: 'Ethiopia', title: 'Ethiopia' },
				{ value: 'Fiji', title: 'Fiji' },
				{ value: 'Finland', title: 'Finland' },
				{ value: 'France', title: 'France' },
				{ value: 'French Guiana', title: 'French Guiana' },
				{ value: 'French Polynesia', title: 'French Polynesia' },
				{ value: 'Gabon', title: 'Gabon' },
				{ value: 'Gambia', title: 'Gambia' },
				{ value: 'Georgia', title: 'Georgia' },
				{ value: 'Germany', title: 'Germany' },
				{ value: 'Ghana', title: 'Ghana' },
				{ value: 'Greece', title: 'Greece' },
				{ value: 'Greenland', title: 'Greenland' },
				{ value: 'Grenada', title: 'Grenada' },
				{ value: 'Guadeloupe', title: 'Guadeloupe' },
				{ value: 'Guam', title: 'Guam' },
				{ value: 'Guatemala', title: 'Guatemala' },
				{ value: 'Guernsey', title: 'Guernsey' },
				{ value: 'Guinea', title: 'Guinea' },
				{ value: 'Guinea-Bissau', title: 'Guinea-Bissau' },
				{ value: 'Guyana', title: 'Guyana' },
				{ value: 'Haiti', title: 'Haiti' },
				{ value: 'Honduras', title: 'Honduras' },
				{ value: 'Hong Kong', title: 'Hong Kong' },
				{ value: 'Hungary', title: 'Hungary' },
				{ value: 'Iceland', title: 'Iceland' },
				{ value: 'India', title: 'India' },
				{ value: 'Indonesia', title: 'Indonesia' },
				{ value: 'Iran', title: 'Iran' },
				{ value: 'Iraq', title: 'Iraq' },
				{ value: 'Ireland', title: 'Ireland' },
				{ value: 'Isle of Man', title: 'Isle of Man' },
				{ value: 'Israel', title: 'Israel' },
				{ value: 'Italy', title: 'Italy' },
				{ value: 'Jamaica', title: 'Jamaica' },
				{ value: 'Japan', title: 'Japan' },
				{ value: 'Jersey', title: 'Jersey' },
				{ value: 'Jordan', title: 'Jordan' },
				{ value: 'Kazakhstan', title: 'Kazakhstan' },
				{ value: 'Kenya', title: 'Kenya' },
				{ value: 'Kiribati', title: 'Kiribati' },
				{ value: 'Kuwait', title: 'Kuwait' },
				{ value: 'Kyrgyzstan', title: 'Kyrgyzstan' },
				{ value: 'Laos', title: 'Laos' },
				{ value: 'Latvia', title: 'Latvia' },
				{ value: 'Lebanon', title: 'Lebanon' },
				{ value: 'Lesotho', title: 'Lesotho' },
				{ value: 'Liberia', title: 'Liberia' },
				{ value: 'Libya', title: 'Libya' },
				{ value: 'Liechtenstein', title: 'Liechtenstein' },
				{ value: 'Lithuania', title: 'Lithuania' },
				{ value: 'Luxembourg', title: 'Luxembourg' },
				{ value: 'Macau', title: 'Macau' },
				{ value: 'Madagascar', title: 'Madagascar' },
				{ value: 'Malawi', title: 'Malawi' },
				{ value: 'Malaysia', title: 'Malaysia' },
				{ value: 'Maldives', title: 'Maldives' },
				{ value: 'Mali', title: 'Mali' },
				{ value: 'Malta', title: 'Malta' },
				{ value: 'Marshall Islands', title: 'Marshall Islands' },
				{ value: 'Martinique', title: 'Martinique' },
				{ value: 'Mauritania', title: 'Mauritania' },
				{ value: 'Mauritius', title: 'Mauritius' },
				{ value: 'Mexico', title: 'Mexico' },
				{ value: 'Micronesia', title: 'Micronesia' },
				{ value: 'Moldova', title: 'Moldova' },
				{ value: 'Monaco', title: 'Monaco' },
				{ value: 'Mongolia', title: 'Mongolia' },
				{ value: 'Montenegro', title: 'Montenegro' },
				{ value: 'Montserrat', title: 'Montserrat' },
				{ value: 'Morocco', title: 'Morocco' },
				{ value: 'Mozambique', title: 'Mozambique' },
				{ value: 'Myanmar', title: 'Myanmar' },
				{ value: 'Namibia', title: 'Namibia' },
				{ value: 'Nauru', title: 'Nauru' },
				{ value: 'Nepal', title: 'Nepal' },
				{ value: 'Netherlands', title: 'Netherlands' },
				{ value: 'New Caledonia', title: 'New Caledonia' },
				{ value: 'New Zealand', title: 'New Zealand' },
				{ value: 'Nicaragua', title: 'Nicaragua' },
				{ value: 'Niger', title: 'Niger' },
				{ value: 'Nigeria', title: 'Nigeria' },
				{ value: 'Niue', title: 'Niue' },
				{ value: 'North Macedonia', title: 'North Macedonia' },
				{ value: 'Northern Mariana Islands', title: 'Northern Mariana Islands' },
				{ value: 'Norway', title: 'Norway' },
				{ value: 'Oman', title: 'Oman' },
				{ value: 'Pakistan', title: 'Pakistan' },
				{ value: 'Palau', title: 'Palau' },
				{ value: 'Panama', title: 'Panama' },
				{ value: 'Papua New Guinea', title: 'Papua New Guinea' },
				{ value: 'Paraguay', title: 'Paraguay' },
				{ value: 'Peru', title: 'Peru' },
				{ value: 'Philippines', title: 'Philippines' },
				{ value: 'Poland', title: 'Poland' },
				{ value: 'Portugal', title: 'Portugal' },
				{ value: 'Puerto Rico', title: 'Puerto Rico' },
				{ value: 'Qatar', title: 'Qatar' },
				{ value: 'Réunion', title: 'Réunion' },
				{ value: 'Romania', title: 'Romania' },
				{ value: 'Russia', title: 'Russia' },
				{ value: 'Rwanda', title: 'Rwanda' },
				{ value: 'Samoa', title: 'Samoa' },
				{ value: 'San Marino', title: 'San Marino' },
				{ value: 'Saudi Arabia', title: 'Saudi Arabia' },
				{ value: 'Senegal', title: 'Senegal' },
				{ value: 'Serbia', title: 'Serbia' },
				{ value: 'Seychelles', title: 'Seychelles' },
				{ value: 'Sierra Leone', title: 'Sierra Leone' },
				{ value: 'Singapore', title: 'Singapore' },
				{ value: 'Sint Maarten', title: 'Sint Maarten' },
				{ value: 'Slovakia', title: 'Slovakia' },
				{ value: 'Slovenia', title: 'Slovenia' },
				{ value: 'Solomon Islands', title: 'Solomon Islands' },
				{ value: 'Somalia', title: 'Somalia' },
				{ value: 'South Africa', title: 'South Africa' },
				{ value: 'South Korea', title: 'South Korea' },
				{ value: 'Spain', title: 'Spain' },
				{ value: 'Sri Lanka', title: 'Sri Lanka' },
				{ value: 'Sudan', title: 'Sudan' },
				{ value: 'Suriname', title: 'Suriname' },
				{ value: 'Sweden', title: 'Sweden' },
				{ value: 'Switzerland', title: 'Switzerland' },
				{ value: 'Syria', title: 'Syria' },
				{ value: 'Taiwan', title: 'Taiwan' },
				{ value: 'Tajikistan', title: 'Tajikistan' },
				{ value: 'Tanzania', title: 'Tanzania' },
				{ value: 'Thailand', title: 'Thailand' },
				{ value: 'Timor-Leste', title: 'Timor-Leste' },
				{ value: 'Togo', title: 'Togo' },
				{ value: 'Tonga', title: 'Tonga' },
				{ value: 'Trinidad and Tobago', title: 'Trinidad and Tobago' },
				{ value: 'Tunisia', title: 'Tunisia' },
				{ value: 'Turkey', title: 'Turkey' },
				{ value: 'Turkmenistan', title: 'Turkmenistan' },
				{ value: 'Turks and Caicos Islands', title: 'Turks and Caicos Islands' },
				{ value: 'Tuvalu', title: 'Tuvalu' },
				{ value: 'Uganda', title: 'Uganda' },
				{ value: 'Ukraine', title: 'Ukraine' },
				{ value: 'United Arab Emirates', title: 'United Arab Emirates' },
				{ value: 'United Kingdom', title: 'United Kingdom' },
				{ value: 'United States', title: 'United States' },
				{ value: 'Uruguay', title: 'Uruguay' },
				{ value: 'Uzbekistan', title: 'Uzbekistan' },
				{ value: 'Vanuatu', title: 'Vanuatu' },
				{ value: 'Venezuela', title: 'Venezuela' },
				{ value: 'Vietnam', title: 'Vietnam' },
				{ value: 'Virgin Islands (U.S.)', title: 'Virgin Islands (U.S.)' },
				{ value: 'Yemen', title: 'Yemen' },
				{ value: 'Zambia', title: 'Zambia' },
				{ value: 'Zimbabwe', title: 'Zimbabwe' }
			]
		}
	},
	social_links: {
		mastodon: null,
		bluesky: null,
		threads: null,
		linkedin: null,
		twitter: null,
		facebook: null,
		spotify: null,
		youtube: null
	},
	privacy_url: null,
	terms_url: null
}

// IMGJS Reactions Module
imgjs.reactions = imgjs.reactions || {}
imgjs.reactions.config = imgjs.reactions.config || { url: null }

// Post a reaction to the IMG API
// Expects all required fields in payload:
// { author_id, email, reaction, object_type, object_id, publication }
// Returns the raw fetch Response; does not normalize
imgjs.reactions.postReaction = async function (payload) {
	if (!imgjs.reactions.config.url) {
		console.error('[IMGJS] reactions.config.url is not set')
		return null
	}
	return fetch(imgjs.reactions.config.url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		credentials: 'include',
		body: JSON.stringify(payload)
	})
}

imgjs.subscribe.getAccount = async function() {
	try {
		const meRes = await fetch(imgjs.subscribe.config.read_url, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include'
		})

		if (meRes.status === 200 || meRes.status === 404) {
			if (meRes.status === 200) {
				const userData = await meRes.json()
				imgjs.subscribe.userData = userData
				console.log('[IMGJS] User data:', userData)

				// Store the user object in a normalized format for consistency
				imgjs.subscribe.user = userData.user
				console.log('[IMGJS] Normalized user object:', imgjs.subscribe.user)

				// Populate profile form with user data if user exists
				if (userData.user) {
					imgjs.subscribe.user_id = userData.user.id
					
					// Use specific selectors instead of relying on input order
					const firstName = document.getElementById('imgjs-subscribe-profile-firstname')
					const lastName = document.getElementById('imgjs-subscribe-profile-lastname')
					const jobRole = document.getElementById('imgjs-subscribe-profile-jobrole')
					const employer = document.getElementById('imgjs-subscribe-profile-employer')
					const industry = document.getElementById('imgjs-subscribe-profile-industry')
					const countrySelect = document.getElementById('imgjs-subscribe-profile-country')
					const zipCodeInput = document.getElementById('imgjs-subscribe-profile-zip_code')
					const countryCode = document.getElementById('imgjs-subscribe-profile-countrycode')
					const phone = document.getElementById('imgjs-subscribe-profile-phone')

					// Populate input fields with user data
					if (userData.user.first_name && firstName) firstName.value = userData.user.first_name
					if (userData.user.last_name && lastName) lastName.value = userData.user.last_name
					if (userData.user.job_title && jobRole) jobRole.value = userData.user.job_title
					if (userData.user.organization && employer) employer.value = userData.user.organization
					if (userData.user.organization_industry && industry) industry.value = userData.user.organization_industry
					if (userData.user.country && countrySelect) countrySelect.value = userData.user.country
					if (userData.user.zip_code && zipCodeInput) zipCodeInput.value = userData.user.zip_code
					if (userData.user.phone_number && countryCode && phone) {
						// Parse phone number to separate country code and local number
						const phoneNumber = userData.user.phone_number.trim()
						
						// Get all available country code options from the dropdown
						const countryCodeOptions = Array.from(countryCode.options)
							.map(option => option.value)
							.sort((a, b) => b.length - a.length) // Sort by length descending to match longest first
						
						console.log('[IMGJS] Phone number:', phoneNumber)
						console.log('[IMGJS] Available country codes:', countryCodeOptions)
						
						// Find matching country code by checking if phone number starts with any option
						let matchedCode = null
						let remainingNumber = phoneNumber
						
						for (const code of countryCodeOptions) {
							if (phoneNumber.startsWith(code)) {
								matchedCode = code
								remainingNumber = phoneNumber.substring(code.length).trim()
								console.log('[IMGJS] Matched code:', matchedCode, 'Remaining:', remainingNumber)
								break
							}
						}
						
						// Only populate if we found a matching country code
						if (matchedCode) {
							countryCode.value = matchedCode
							phone.value = remainingNumber
							console.log('[IMGJS] Set countryCode to:', matchedCode, 'Set phone to:', remainingNumber)
						} else {
							console.log('[IMGJS] No matching country code found')
						}
						// If no country code found, do not populate inputs at all
					}

					// Note: Blur event listeners are already added when the profile slide is created
					// No need to add them again here to avoid duplicates
					// Populate email input on email slide if user has email
					const emailSlide = document.querySelector('#imgjs-carousel .imgjs-slide:nth-child(1)')
					if (emailSlide && userData.user.email) {
						const emailInput = document.getElementById('imgjs-subscribe-email-input')
						if (emailInput) {
							emailInput.value = userData.user.email
						}
					}
				}

				return userData
			} else {
				// 404 - user doesn't exist, which is fine
				console.log('[IMGJS] User not found (404)')
				return null
			}
		} else {
			console.error('[IMGJS] Failed to fetch user data:', meRes.status)
			throw new Error(`Failed to fetch user data: ${meRes.status}`)
		}
	} catch (err) {
		console.error('[IMGJS] Error fetching user data:', err)
		throw err
	}
}

imgjs.subscribe.updateAccountField = async function(event) {
	const input = event.target
	let value = input.value.trim()
	const fieldName = input.name || input.id

	// Map input names to API field names
	const fieldMapping = {
		'firstname': 'first_name',
		'lastname': 'last_name',
		'department': 'department',
		'jobrole': 'job_title',
		'employer': 'organization',
		'industry': 'organization_industry',
		'phone': 'phone_number',
		'countrycode': 'phone_number',
		'country': 'country',
		'zip_code': 'zip_code'
	}

	const apiFieldName = fieldMapping[fieldName]
	if (!apiFieldName) return

	// Special handling for phone-related fields - combine country code + phone and strip dashes
	if (fieldName === 'phone' || fieldName === 'countrycode') {
		const profileSlide = input.closest('.imgjs-slide')
		if (profileSlide) {
			const countryCodeSelect = document.getElementById('imgjs-subscribe-profile-countrycode')
			const phoneInput = document.getElementById('imgjs-subscribe-profile-phone')
			if (countryCodeSelect && phoneInput) {
				const countryCode = countryCodeSelect.value
				const phoneDigits = phoneInput.value.trim().replace(/[\s\-\(\)]/g, '')
				value = countryCode + phoneDigits
			}
		}
	}

	// If user_id is not set, try to fetch it
	if (!imgjs.subscribe.user_id) {
		try {
			await imgjs.subscribe.getAccount()
		} catch (e) {
			console.error('[IMGJS] Failed to fetch user in updateAccountField:', e)
			return
		}
		if (!imgjs.subscribe.user_id) return
	}

	try {
		const updateData = { [apiFieldName]: value }

		const response = await fetch(`${imgjs.subscribe.config.update_url}/${imgjs.subscribe.user_id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
			body: JSON.stringify(updateData)
		})

        if (response.ok) {
          console.log(`Successfully updated ${apiFieldName} to:`, value)

			// Update the local user object
			if (imgjs.subscribe.user) {
				imgjs.subscribe.user[apiFieldName] = value
			}

			// Trigger onProfileUpdate callback if provided
          if (imgjs.subscribe.config.onProfileUpdate && typeof imgjs.subscribe.config.onProfileUpdate === 'function') {
            imgjs.subscribe.config.onProfileUpdate({
              field: apiFieldName,
              value: value,
              user: imgjs.subscribe.user,
              status: response.status
            })
          }
		} else {
			console.error(`Failed to update ${apiFieldName}:`, response.statusText)
		}
	} catch (error) {
		console.error(`Error updating ${apiFieldName}:`, error)
	}
}

// Helper to determine if a user satisfies all enabled+required profile fields
imgjs.subscribe.userHasCompleteProfile = function(user) {
	try {
		const profileFieldsConfig = (imgjs.subscribe.config.form && imgjs.subscribe.config.form.profile_fields) ? imgjs.subscribe.config.form.profile_fields : {}

		// Resolve a default config when none is provided by the host
		const isEmptyConfig = !profileFieldsConfig || Object.keys(profileFieldsConfig).length === 0
		const resolvedFieldsConfig = isEmptyConfig
			? {
				// Default: all primary fields enabled; all required except phone
				firstname: { enabled: true, required: true },
				lastname: { enabled: true, required: true },
				jobrole: { enabled: true, required: true },
				employer: { enabled: true, required: true },
				industry: { enabled: true, required: true },
				phone: { enabled: true, required: false },
				// Optional fields disabled by default
				country: { enabled: false, required: false },
				zip_code: { enabled: false, required: false },
				department: { enabled: false, required: false },
			}
			: profileFieldsConfig

		// Completeness for skipping profile: all ENABLED fields must have a value
		const enabledKeys = Object.keys(resolvedFieldsConfig).filter(key => resolvedFieldsConfig[key] && resolvedFieldsConfig[key].enabled)
		if (enabledKeys.length === 0) return true

		const userPropertyMap = {
			firstname: 'first_name',
			lastname: 'last_name',
			jobrole: 'job_title',
			employer: 'organization',
			industry: 'organization_industry',
			phone: 'phone_number',
			country: 'country',
			zip_code: 'zip_code',
			department: 'department'
		}

		for (const key of enabledKeys) {
			const userProp = userPropertyMap[key]
			if (!userProp) continue
			if (!user || !user[userProp]) return false
		}
		return true
	} catch (err) {
		console.error('[IMGJS] userHasCompleteProfile error:', err)
		return false
	}
}

imgjs.subscribe.open = function (email, subscriptions, mode, user, showX = true, autoClickOnEmailPrefill = true) {
    console.log('[IMGJS] imgjs.subscribe.open called with:', { email, subscriptions, mode, user, showX, autoClickOnEmailPrefill })

	// Store parameters for use in subscription flow
	imgjs.subscribe.passedEmail = email
	imgjs.subscribe.passedSubscriptions = subscriptions
	imgjs.subscribe.passedMode = mode
	imgjs.subscribe.passedUser = user
	imgjs.subscribe.oryVerifySuccess = false
    imgjs.subscribe.showX = showX
    const autoClickOnEmailPrefillLocal = autoClickOnEmailPrefill

	// Save the passed user on the config object
	if (user) {
		imgjs.subscribe.config.passedUser = user
		console.log('[IMGJS] Saved passed user to config:', user)
	}

    // Remove existing overlay and restore body scroll before re-opening
    const existingOverlayElement = document.getElementById('imgjs-overlay')
    if (existingOverlayElement) {
      const previousOverflowValue = existingOverlayElement.getAttribute('data-prev-overflow') || ''
      document.body.style.overflow = previousOverflowValue
      existingOverlayElement.remove()
    }

	// Initialize currentIndex early
	let currentIndex = 0

	// Inject scoped CSS
	const style = document.createElement('style')
	style.textContent = `
	  #imgjs-popover * {
		box-sizing: border-box;
		font-family: sans-serif;
	  }
	  #imgjs-popover p, #imgjs-popover .headline {
		font-size: 15px;
		margin: 0 0 12px 0;
	  }
	  #imgjs-popover .headline {
		font-weight: normal;
	  }
	  #imgjs-popover .confirm-welcome {
		font-size: 15px;
		font-weight: bold;
		margin-bottom: 0;
	  }
	  #imgjs-popover button {
		width: 100%;
		background: ${imgjs.subscribe.config.button_color};
		color: white;
		border: none;
		padding: 12px;
		font-size: 14px;
		font-weight: bold;
		text-transform: uppercase;
		border-radius: 4px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 0 !important;
	  }
	  #imgjs-popover .imgjs-spinner {
		border: 2px solid rgba(255,255,255,0.3);
		border-top: 2px solid white;
		border-radius: 50%;
		width: 16px;
		height: 16px;
		animation: imgjs-spin 1s linear infinite;
	  }
	  @keyframes imgjs-spin {
		to { transform: rotate(360deg); }
	  }
	  #imgjs-popover .imgjs-placeholder {
		width: 100%;
		height: 100px;
		background: #eee;
		margin-bottom: 10px;
	  }
	  #imgjs-carousel {
		display: flex;
		width: 100%;
		transition: transform 0.3s ease;
		will-change: transform;
	  }
	  #imgjs-popover .imgjs-slide {
		flex: 0 0 100% !important;
		width: 100% !important;
		min-width: 0 !important;
		height: auto !important;
		padding: 16px;
		box-sizing: border-box;
		padding-bottom: 0 !important;
	  }
	  .send-code-link {
		display: block;
		margin-top: 8px;
		font-size: 12px;
		text-align: center;
		color: #007bff;
		text-decoration: none;
		cursor: pointer;
	  }

	  /* Social links hover states */
	  #imgjs-popover .img-follow-links {
		position: relative;
		margin: 16px 0;
	  }
	  #imgjs-popover .img-follow-links .follow-links {
		position: relative;
	  }
	  #imgjs-popover .img-follow-links .follow-icon {
		width: 30px;
		height: 30px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		margin-right: 8px;
	  }
	  #imgjs-popover .img-follow-links .follow-icon svg {
		height: 19px;
	  }
	  #imgjs-popover .img-follow-links .fill path {
		fill: var(--grey1);
	  }
	  #imgjs-popover .img-follow-links .stroke path {
		stroke: var(--grey1);
		fill: none;
	  }
	  #imgjs-popover .img-follow-links .follow-icon:hover .fill path {
		fill: var(--blue);
	  }
	  #imgjs-popover .img-follow-links .follow-icon-mastadon:hover .fill path {
		fill: #5E54EA;
	  }
	  #imgjs-popover .img-follow-links .follow-icon-mastadon:hover .stroke path {
		stroke: #5E54EA;
	  }
	  #imgjs-popover .img-follow-links .follow-icon-bluesky:hover .fill path {
		fill: #0185FF;
	  }
	  #imgjs-popover .img-follow-links .follow-icon-bluesky:hover .stroke path {
		stroke: #0185FF;
	  }
	  #imgjs-popover .img-follow-links .follow-icon-threads:hover svg,
	  #imgjs-popover .img-follow-links .follow-icon-threads:hover .fill path {
		fill: #FFFFFF;
	  }
	  #imgjs-popover .img-follow-links .follow-icon-twitter:hover .fill path {
		fill: #1C9BF0;
	  }
	  #imgjs-popover .img-follow-links .follow-icon-linkedin:hover .fill path {
		fill: #0A66C2;
	  }
	  #imgjs-popover .img-follow-links .follow-icon-facebook:hover .fill path {
		fill: #3C5998;
	  }
	  #imgjs-popover .img-follow-links .follow-icon-instagram:hover .fill path {
		fill: #66B6FA;
	  }
	  #imgjs-popover .img-follow-links .follow-icon-spotify:hover svg {
		fill: #1CD760;
	  }
	  #imgjs-popover .img-follow-links .follow-icon-youtube svg {
		height: 27px;
	  }
	  #imgjs-popover .img-follow-links .follow-icon-youtube:hover .fill path {
		fill: #F10001;
	  }
	  #imgjs-popover .img-follow-links .follow-icon-youtube:hover .stroke path {
		stroke: #F10001;
	  }
  #imgjs-popover input {
		width: 100%;
		padding: 8px;
		margin-bottom: 4px;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 14px;
		height: 40px;
  }
	  #imgjs-popover input::placeholder {
		color: #999;
		font-size: 14px;
		opacity: 1;
	  }
	  #imgjs-popover input.invalid {
		border: 1px solid lightpink;
	  }
  #imgjs-popover select {
		width: 100%;
		padding: 8px;
		margin-bottom: 4px;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 14px;
		color: #000;
		background-color: white;
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		height: 40px;
		background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
		background-repeat: no-repeat;
		background-position: right 8px center;
		background-size: 16px;
		padding-right: 32px;
  }
	  /* Style the placeholder option text inside the dropdown list */
	  #imgjs-popover select option:first-child { color: #999999; }
	  /* Make the displayed select text grey when the first option is selected (modern browsers) */
	  #imgjs-popover select:has(option:first-child:checked) { color: #999999; }
	  #imgjs-popover select:focus {
		outline: none;
		border: 1px solid #000;
	  }
	  #imgjs-popover select.invalid {
		border: 1px solid lightpink;
	  }

	  /* Social links styling */
	  #imgjs-popover .tns-follow-links {
		position: relative;
		margin: 16px 0;
	  }

	  #imgjs-popover .tns-follow-links .follow-links {
		position: relative;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon {
		width: 30px;
		height: 30px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		vertical-align: middle;
		margin-right: 4px;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon svg {
		height: 19px;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon .fill path {
		fill: #142640;
		stroke-width: 0;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon .stroke path {
		stroke: #142640;
		fill: none;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon:hover .fill path {
		fill: ${imgjs.subscribe.config.button_color};
	  }

	  #imgjs-popover .tns-follow-links .follow-icon:hover .stroke path {
		stroke: ${imgjs.subscribe.config.button_color};
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-mastadon .fill path {
		fill: #5E54EA;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-mastadon .stroke path {
		stroke: #5E54EA;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-mastadon:hover .fill path {
		fill: #5E54EA;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-mastadon:hover .stroke path {
		stroke: #5E54EA;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-bluesky .fill path {
		fill: #0185FF;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-bluesky .stroke path {
		stroke: #0185FF;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-bluesky:hover .fill path {
		fill: #0185FF;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-bluesky:hover .stroke path {
		stroke: #0185FF;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-threads svg {
		fill: #000000;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-threads .fill path {
		fill: #000000;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-threads .stroke path {
		stroke: #000000;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-threads:hover svg {
		fill: #000000;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-threads:hover .fill path {
		fill: #000000;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-threads:hover .stroke path {
		stroke: #000000;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-twitter .fill path {
		fill: #1C9BF0;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-twitter .stroke path {
		stroke: #1C9BF0;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-twitter:hover .fill path {
		fill: #1C9BF0;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-twitter:hover .stroke path {
		stroke: #1C9BF0;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-linkedin .fill path {
		fill: #0A66C2;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-linkedin .stroke path {
		stroke: #0A66C2;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-linkedin:hover .fill path {
		fill: #0A66C2;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-linkedin:hover .stroke path {
		stroke: #0A66C2;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-facebook .fill path {
		fill: #3C5998;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-facebook .stroke path {
		stroke: #3C5998;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-facebook:hover .fill path {
		fill: #3C5998;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-facebook:hover .stroke path {
		stroke: #3C5998;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-spotify svg {
		fill: #1CD760;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-spotify .fill path {
		fill: #1CD760;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-spotify .stroke path {
		stroke: #1CD760;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-spotify:hover svg {
		fill: #1CD760;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-spotify:hover .fill path {
		fill: #1CD760;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-spotify:hover .stroke path {
		stroke: #1CD760;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-youtube {
		vertical-align: top;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-youtube svg {
		height: 27px;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-youtube .fill path {
		fill: #F10001;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-youtube .stroke path {
		stroke: #F10001;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-youtube:hover .fill path {
		fill: #F10001;
	  }

	  #imgjs-popover .tns-follow-links .follow-icon-youtube:hover .stroke path {
		stroke: #F10001;
	  }
	`;
	document.head.appendChild(style)

	// Build overlay & popover
	const overlay = document.createElement('div')
    overlay.id = 'imgjs-overlay'
	Object.assign(overlay.style, {
	  position: 'fixed', top: 0, left: 0,
	  width: '100vw', height: '100vh',
	  backgroundColor: 'rgba(0,0,0,0.5)',
	  zIndex: 33333, display: 'flex',
	  alignItems: 'center', justifyContent: 'center'
	})

	const popover = document.createElement('div')
	popover.id = 'imgjs-popover'
	Object.assign(popover.style, {
	  maxWidth: '375px',
	  width: '90vw',
	  borderRadius: '3px',
	  maxHeight: '500px',
	  overflow: 'hidden'
	})

	// Header
	const header = document.createElement('div')
	Object.assign(header.style, {
	  width: '100%', padding: '12px 16px',
	  display: 'flex', justifyContent: 'space-between',
	  alignItems: 'center', borderBottom: '1px solid #ddd',
	  background: '#fff',
	  borderRadius: '3px 3px 0 0'
	})
	const title = document.createElement('h1')
	const currentMode = imgjs.subscribe.passedMode || 'subscribe'
	title.textContent = imgjs.subscribe.config.copy.email_slide.heading[currentMode] || 'Subscribe'
	Object.assign(title.style, { margin: 0, fontSize: '12px', textTransform: 'uppercase', fontWeight: 'bold' })
	header.appendChild(title)
	const closeBtn = document.createElement('a')
	closeBtn.id = 'imgjs-close-button'
	closeBtn.href = 'javascript:void(0)'
	closeBtn.textContent = '×'
	Object.assign(closeBtn.style, { fontSize: '20px', color: '#000', textDecoration: 'none', cursor: 'pointer' })
	closeBtn.onclick = () => {
	  closePopover()
	}

	// Function to control close button visibility
	function updateCloseButtonVisibility() {
	  console.log('[IMGJS] updateCloseButtonVisibility called:', {
		currentIndex,
		showX: imgjs.subscribe.showX,
		closeBtn: closeBtn
	  })

	  // Behavior:
	  // - If showX is true: show close button on all slides
	  // - If showX is false: only show on Confirm slide (index 3)
	  const shouldShow = imgjs.subscribe.showX ? true : (currentIndex === 3)
	  closeBtn.style.setProperty('display', shouldShow ? 'block' : 'none', 'important')
	  console.log('[IMGJS] Setting close button display to:', shouldShow ? 'block' : 'none', 'with !important')
	}

	header.appendChild(closeBtn)

	// Set initial visibility of close button
	updateCloseButtonVisibility()

	popover.appendChild(header)

	// Carousel container
	const content = document.createElement('div')
	Object.assign(content.style, {
	  flex: '1 1 auto',
	  width: '100%',
	  overflowY: 'auto',
	  overflow: 'hidden',
	  background: '#fff',
	  borderRadius: '0 0 3px 3px',
	  paddingBottom: '10px',
	  position: 'relative'
	})
	const carousel = document.createElement('div')
	carousel.id = 'imgjs-carousel'
	content.appendChild(carousel)
	popover.appendChild(content)
	overlay.appendChild(popover)
	document.body.appendChild(overlay)

	carousel.style.transform = `translateX(0)`

    // Prevent background scroll
    const previousBodyOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    // Persist previous overflow on the overlay so nested opens can restore it
    overlay.setAttribute('data-prev-overflow', previousBodyOverflow)

	content.style.overflowY = 'auto'

	function setPopoverHeight() {
	  const headerHeight = header.offsetHeight
	  const currentSlide = carousel.children[currentIndex]
	  currentSlide.style.height = ''
	  const slideHeight = currentSlide.offsetHeight
	  let contentHeight = slideHeight
	  let popoverHeight = contentHeight + headerHeight
	  if (popoverHeight > 500) {
		popoverHeight = 500
		contentHeight = 500 - headerHeight
	  }
	  content.style.height = contentHeight + 'px'
	  popover.style.height = popoverHeight + 'px'
	  carousel.style.height = slideHeight + 'px'
	}

			// Helper function to populate profile inputs
	function populateProfileInputs() {
	  if (imgjs.subscribe.passedUser) {
		// Use flat structure: user.first_name, user.last_name, etc.
		const user = imgjs.subscribe.passedUser
		console.log('[IMGJS] Populating profile slide inputs with passed user data:', user)

		const profileSlide = carousel.children[2] // Profile slide is at index 2
		if (profileSlide) {
		  const firstName = document.getElementById('imgjs-subscribe-profile-firstname')
		  const lastName = document.getElementById('imgjs-subscribe-profile-lastname')
		  const departmentSelect = document.getElementById('imgjs-subscribe-profile-department')
		  const jobRole = document.getElementById('imgjs-subscribe-profile-jobrole')
		  const employer = document.getElementById('imgjs-subscribe-profile-employer')
		  const industry = document.getElementById('imgjs-subscribe-profile-industry')
		  const countrySelect = document.getElementById('imgjs-subscribe-profile-country')
		  const zipCodeInput = document.getElementById('imgjs-subscribe-profile-zip_code')
		  const countryCode = document.getElementById('imgjs-subscribe-profile-countrycode')
		  const phone = document.getElementById('imgjs-subscribe-profile-phone')

		  if (user.first_name && firstName) firstName.value = user.first_name
		  if (user.last_name && lastName) lastName.value = user.last_name
		  if (user.department && departmentSelect) departmentSelect.value = user.department
		  if (user.job_title && jobRole) jobRole.value = user.job_title
		  if (user.organization && employer) employer.value = user.organization
		  if (user.organization_industry && industry) industry.value = user.organization_industry
		  if (user.country && countrySelect) countrySelect.value = user.country
		  if (user.zip_code && zipCodeInput) zipCodeInput.value = user.zip_code
		  if (user.phone_number && countryCode && phone) {
			const phoneNumber = user.phone_number.trim()
			const countryCodeOptions = Array.from(countryCode.options).map(o => o.value).sort((a,b)=>b.length-a.length)
			let matchedCode = null
			let remainingNumber = phoneNumber
			for (const code of countryCodeOptions) {
			  if (phoneNumber.startsWith(code)) {
				matchedCode = code
				remainingNumber = phoneNumber.substring(code.length).trim()
				break
			  }
			}
			if (matchedCode) {
			  countryCode.value = matchedCode
			  phone.value = remainingNumber
			}
		  }

		  console.log('[IMGJS] Profile slide inputs populated successfully')
		}
	  }
	}

	function goToNext() {
	  if (currentIndex < carousel.children.length - 1) {
		currentIndex++
		// slide by 100% per slide (percentage-based)
		carousel.style.transform = 'translateX(-' + (currentIndex * 100) + '%)'

		// Update header title based on current slide
		const slideHeadings = [
		  imgjs.subscribe.config.copy.email_slide.heading[currentMode],
		  imgjs.subscribe.config.copy.verify_slide.heading[currentMode],
		  imgjs.subscribe.config.copy.profile_slide.heading[currentMode],
		  imgjs.subscribe.config.copy.confirm_slide.heading[currentMode]
		]
		const currentHeading = slideHeadings[currentIndex] || 'Subscribe'
		title.textContent = currentHeading

		// Update close button visibility
		updateCloseButtonVisibility()

		// Scroll content to top
		content.scrollTop = 0

		setTimeout(setPopoverHeight, 10)

		// Get user profile data when transitioning to profile slide
		if (currentIndex === 2) {
		  imgjs.subscribe.getAccount().catch(err => {
			console.error('[IMGJS] Error fetching user data:', err)
		  })

		  // Populate profile inputs with a delay to ensure DOM is ready
		  setTimeout(populateProfileInputs, 50)
		}

		setTimeout(() => {
		  // reset previous button
		  const prevBtn = carousel.children[currentIndex - 1].querySelector('button')
		  prevBtn.style.backgroundColor = imgjs.subscribe.config.button_color
		  prevBtn.textContent = prevBtn.getAttribute('data-label')
		  // focus next input
		  const nextInput = carousel.children[currentIndex].querySelector('input')
		  if (nextInput) nextInput.focus()
		}, 300)

				// If user was passed and has complete profile, set flag to skip profile slide
		if (imgjs.subscribe.passedUser) {
		  // Check if passed user has complete profile (flat structure)
		  const user = imgjs.subscribe.passedUser
		  console.log('[IMGJS] Checking if passed user has complete profile:', user)

		  // Check if all required profile fields are filled (configurable)
		  const hasCompleteProfile = imgjs.subscribe.userHasCompleteProfile(user)

		  console.log('[IMGJS] Passed user has complete profile:', hasCompleteProfile)

		  if (hasCompleteProfile) {
			console.log('[IMGJS] Passed user has complete profile, will skip profile slide')
			imgjs.subscribe.skipProfileSlide = true
		  }
		}
	  } else {
		closePopover()
	  }
	}

  function goToSlide(slideIndex) {
    currentIndex = slideIndex
    carousel.style.transform = 'translateX(-' + (currentIndex * 100) + '%)'

	  // Update header title based on current slide
	  const slideHeadings = [
		imgjs.subscribe.config.copy.email_slide.heading[currentMode],
		imgjs.subscribe.config.copy.verify_slide.heading[currentMode],
		imgjs.subscribe.config.copy.profile_slide.heading[currentMode],
		imgjs.subscribe.config.copy.confirm_slide.heading[currentMode]
	  ]
	  const currentHeading = slideHeadings[currentIndex] || 'Subscribe'
	  title.textContent = currentHeading

	  // Update close button visibility
	  updateCloseButtonVisibility()

	  // Scroll content to top
	  content.scrollTop = 0
    setTimeout(setPopoverHeight, 10)

    setTimeout(() => {
      // focus next input
      const nextInput = carousel.children[currentIndex].querySelector('input')
      if (nextInput) nextInput.focus()

      // If jumping to profile slide and user was passed, populate inputs
      if (currentIndex === 2 && imgjs.subscribe.passedUser) {
        setTimeout(populateProfileInputs, 50)
      }
    }, 300)

    // Hook: onConfirmation (when showing confirm slide, index 3)
    if (currentIndex === 3 && imgjs.subscribe.config.onConfirmation) {
      imgjs.subscribe.config.onConfirmation({
        email: imgjs.subscribe.email,
        user: imgjs.subscribe.user || null,
        context: { mode: currentMode }
      })
    }
  }

	function closePopover() {
		// Restore background scroll
		document.body.style.overflow = previousBodyOverflow
		overlay.remove()

	  // Call onClose callback if defined
	  if (imgjs.subscribe.config.onClose && typeof imgjs.subscribe.config.onClose === 'function') {
		// Determine which user object to pass back
		let userToPass = null

		console.log('[IMGJS] closePopover called, checking available user data:', {
		  oryVerifySuccess: imgjs.subscribe.oryVerifySuccess,
		  user: imgjs.subscribe.user,
		  passedUser: imgjs.subscribe.config.passedUser,
		  passedUserFromOpen: imgjs.subscribe.passedUser
		})

		if (imgjs.subscribe.oryVerifySuccess && imgjs.subscribe.user) {
		  // User completed verification successfully
		  userToPass = imgjs.subscribe.user
		  console.log('[IMGJS] Passing back verified user:', userToPass)
		} else if (imgjs.subscribe.config.passedUser) {
		  // User was passed to open method but verification wasn't completed
		  userToPass = imgjs.subscribe.config.passedUser
		  console.log('[IMGJS] Passing back passed user from config:', userToPass)
		} else if (imgjs.subscribe.passedUser) {
		  // User was passed to open method (alternative location)
		  userToPass = imgjs.subscribe.passedUser
		  console.log('[IMGJS] Passing back passed user from open method:', userToPass)
		} else {
		  console.log('[IMGJS] No user data available to pass back')
		}

		imgjs.subscribe.config.onClose(userToPass)
	  }
	}

	function makeSlide(html, onSubmit) {
	  const slide = document.createElement('div')
	  slide.className = 'imgjs-slide'
	  slide.innerHTML = html

	  // Detect profile slide (configurable requiredness handled separately)
	  const isProfileSlide = !!slide.querySelector('#imgjs-subscribe-profile-firstname, #imgjs-subscribe-profile-lastname, #imgjs-subscribe-profile-jobrole, #imgjs-subscribe-profile-employer')

	  if (!isProfileSlide) {
		// For non-profile slides, preserve existing required behavior
		slide.querySelectorAll('input').forEach(i => {
		  if (i.type === 'email') return
		  if (i.name !== 'phone') {
			i.required = true
		  }
		})
	  }

	  const btn = slide.querySelector('button')
	  btn.setAttribute('data-label', btn.textContent)
	  btn.addEventListener('click', e => {
		e.preventDefault()

		let valid = true
		// For non-profile slides, keep generic validation (email, non-empty inputs)
		if (!isProfileSlide) {
		  slide.querySelectorAll('input').forEach(input => {
			input.classList.remove('invalid')
			const v = input.value.trim()
			if (input.type === 'email') {
			  if (!v || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || /\.con$/i.test(v)) {
				input.classList.add('invalid')
				valid = false
			  }
			} else {
			  if (input.name === 'phone') return
			  if (!v) {
				input.classList.add('invalid')
				valid = false
			  }
			}
		  })
		  if (!valid) return
		}
		btn.innerHTML = '<div class="imgjs-spinner"></div>'
		btn.style.backgroundColor = '#888'
		onSubmit()
	  })
	  slide.querySelectorAll('input').forEach(input => {
		input.addEventListener('keydown', e => {
		  if (e.key === 'Enter') {
			e.preventDefault()
			btn.click()
		  }
		})
	  })
	  return slide
	}

	// Slides definitions...
	let emailHtml = '<div style="position: relative; min-height: 200px;">';
	if (imgjs.subscribe.config.copy.email_slide.cta[currentMode]) {
		emailHtml += `<p class="headline" style="margin-bottom: 10px;">${imgjs.subscribe.config.copy.email_slide.cta[currentMode]}</p>`;
	}
	if (imgjs.subscribe.config.images.email_slide.key_image) {
		emailHtml += `<img src="${imgjs.subscribe.config.images.email_slide.key_image}" alt="Key visual" style="width: 100%; height: 100px; object-fit: cover; margin-bottom: 10px;" />`;
	}
	emailHtml += '<input type="email" id="imgjs-subscribe-email-input" placeholder="Email address" />';
	if (imgjs.subscribe.config.copy.email_slide.button_label[currentMode]) {
		emailHtml += `<button>${imgjs.subscribe.config.copy.email_slide.button_label[currentMode]}</button>`;
	}
  if (currentMode === 'login') {
    emailHtml += `<a href="javascript:void(0)" style="display: block; margin-top: 8px; font-size: 12px; text-align: center; color: #007bff; text-decoration: none; cursor: pointer;" onclick="(function(){ var el = document.getElementById('imgjs-subscribe-email-input'); var v = el ? el.value : imgjs.subscribe.passedEmail; imgjs.subscribe.open(v, imgjs.subscribe.passedSubscriptions, 'subscribe', imgjs.subscribe.passedUser, true, false) })()">Create an account</a>`;
  }
	if (imgjs.subscribe.config.privacy_url || imgjs.subscribe.config.terms_url) {
		emailHtml += '<div style="position: absolute; bottom: -90px; left: 0; right: 0; text-align: center; font-size: 12px;">';
		if (imgjs.subscribe.config.privacy_url) {
			emailHtml += `<a href="${imgjs.subscribe.config.privacy_url}" target="_blank" style="color: #999; text-decoration: none; margin-right: 10px;" onmouseover="this.style.color='#000'" onmouseout="this.style.color='#999'">Privacy Policy</a>`;
		}
		if (imgjs.subscribe.config.terms_url) {
			emailHtml += `<a href="${imgjs.subscribe.config.terms_url}" target="_blank" style="color: #999; text-decoration: none;" onmouseover="this.style.color='#000'" onmouseout="this.style.color='#999'">Terms of Use</a>`;
		}
		emailHtml += '</div>';
	}
	emailHtml += '</div>';
	const emailSlide = makeSlide(emailHtml, async () => {
	  // Prevent duplicate submissions (auto-click + manual click, or double-click)
	  if (emailSlide.getAttribute('data-submitting') === 'true') {
		return
	  }
	  emailSlide.setAttribute('data-submitting', 'true')
	  const submitBtn = emailSlide.querySelector('button')
	  if (submitBtn) submitBtn.disabled = true
	  const emailInput = document.getElementById('imgjs-subscribe-email-input')

	  try {
		const requestBody = { email: emailInput.value.trim() }

		// Add subscriptions to request body if provided
		if (imgjs.subscribe.passedSubscriptions) {
		  requestBody.subscriptions = imgjs.subscribe.passedSubscriptions
		}

		// Add skip_otc parameter if user is passed
		if (imgjs.subscribe.passedUser) {
		  requestBody.skip_otc = true
		  console.log('[IMGJS] Adding skip_otc=true to request body')
		}

		const res = await fetch(imgjs.subscribe.config.subscribe_url, {
		  method: 'POST',
		  headers: { 'Content-Type': 'application/json' },
		  credentials: 'include',
		  body: JSON.stringify(requestBody)
		})

        if (res.ok) {
          const json = await res.json()
          console.log('[IMGJS]', json)
          imgjs.subscribe.otc_login_flow_id = json?.data?.otc_login_flow_id
          imgjs.subscribe.email = emailInput.value.trim()
          console.log('[IMGJS] otc_login_flow_id:', imgjs.subscribe.otc_login_flow_id)

          // Hook: afterIdentityCreated (before OTC verification)
          if (imgjs.subscribe.config.afterIdentityCreated) {
            imgjs.subscribe.config.afterIdentityCreated({
              email: imgjs.subscribe.email,
              flow_id: imgjs.subscribe.otc_login_flow_id,
              status: res.status,
              subscribeResponse: json
            })
          }

		  // Fetch user account to set user_id before showing profile slide
		  try {
			await imgjs.subscribe.getAccount()
		  } catch (e) {
			console.error('[IMGJS] Failed to fetch user after registration:', e)
		  }

		  // If user was passed, skip verify slide and check profile completion
		  if (imgjs.subscribe.passedUser) {
			console.log('[IMGJS] User was passed, skipping verify slide')

			// Check if passed user has complete profile
			const user = imgjs.subscribe.passedUser
			console.log('[IMGJS] Checking if passed user has complete profile:', user)

			// Check if all required profile fields are filled (configurable)
			const hasCompleteProfile = imgjs.subscribe.userHasCompleteProfile(user)

			console.log('[IMGJS] Passed user has complete profile:', hasCompleteProfile)

			if (hasCompleteProfile) {
			  console.log('[IMGJS] Profile slide should be skipped, going to confirm slide')
			  goToSlide(3) // Go directly to confirm slide (index 3)
			} else {
			  console.log('[IMGJS] Profile slide should be shown, going to profile slide')
			  goToSlide(2) // Go to profile slide (index 2)
			}
		  } else {
			goToNext()
		  }
		} else {
		  console.error('[IMGJS] Email submission failed:', res.status, res.statusText)
		  const btn = emailSlide.querySelector('button')
		  btn.style.backgroundColor = imgjs.subscribe.config.button_color
		  btn.textContent = btn.getAttribute('data-label')
		  emailSlide.removeAttribute('data-submitting')
		  if (btn) btn.disabled = false
		}
	  } catch (err) {
		console.error('[IMGJS]', err)
		const btn = emailSlide.querySelector('button')
		btn.style.backgroundColor = imgjs.subscribe.config.button_color
		btn.textContent = btn.getAttribute('data-label')
		emailSlide.removeAttribute('data-submitting')
		if (btn) btn.disabled = false
	  }
	})

  // Populate email input with passed email parameter if provided
  if (imgjs.subscribe.passedEmail) {
    // Defer until slides are appended to the DOM, then set value and optionally submit
    setTimeout(() => {
      const emailInputLater = document.getElementById('imgjs-subscribe-email-input')
      if (emailInputLater) {
        emailInputLater.value = imgjs.subscribe.passedEmail
      }
      const submitButton = emailSlide.querySelector('button')
      if (submitButton && autoClickOnEmailPrefillLocal) {
        submitButton.click()
      }
    }, 250)
  }



	let codeHtml = '<div>';
	if (imgjs.subscribe.config.copy.verify_slide.prompt[currentMode]) {
		codeHtml += `<p class="headline">${imgjs.subscribe.config.copy.verify_slide.prompt[currentMode]}</p>`;
	}
	codeHtml += '<input type="text" id="imgjs-subscribe-code" placeholder="Verification code" />';
	if (imgjs.subscribe.config.copy.verify_slide.button_label[currentMode]) {
		codeHtml += `<button>${imgjs.subscribe.config.copy.verify_slide.button_label[currentMode]}</button>`;
	}
	codeHtml += '</div>';
	const codeSlide = makeSlide(codeHtml, async () => {
	  const codeInput = document.getElementById('imgjs-subscribe-code')
	  const code = codeInput.value.trim()

	  if (!code) {
		codeInput.classList.add('invalid')
		return
	  }

	console.log(imgjs.subscribe.otc_login_flow_id)

	  try {
		const res = await fetch(imgjs.subscribe.config.login_url, {
		  method: 'POST',
		  headers: { 'Content-Type': 'application/json' },
		  credentials: 'include',
		  body: JSON.stringify({
			flow_id: imgjs.subscribe.otc_login_flow_id,
			otc: code,
			email: imgjs.subscribe.email
		  })
		})

        if (res.ok) {
          // Hook: afterOTCVerification (use HTTP status code)
          let verifyJson = null
          try {
            verifyJson = await res.json()
          } catch (parseErr) {
            console.error('[IMGJS] Failed to parse verify response JSON:', parseErr)
          }
          if (imgjs.subscribe.config.afterOTCVerification) {
            imgjs.subscribe.config.afterOTCVerification({
              email: imgjs.subscribe.email,
              flow_id: imgjs.subscribe.otc_login_flow_id,
              status: res.status,
              verifyResponse: verifyJson
            })
          }

          // After successful OTC verification, check if user has complete profile
          imgjs.subscribe.oryVerifySuccess = true
		  try {
			const userData = await imgjs.subscribe.getAccount()
			console.log('[IMGJS] User data after OTC verification:', userData)

			if (userData && userData.user) {
			  const user = userData.user
			  console.log('[IMGJS] User profile fields:', {
				first_name: user.first_name,
				last_name: user.last_name,
				job_title: user.job_title,
				organization: user.organization,
				organization_industry: user.organization_industry,
				phone_number: user.phone_number
			  })

			  // Check if all required profile fields are filled (configurable)
			  const hasCompleteProfile = imgjs.subscribe.userHasCompleteProfile(user)

			  console.log('[IMGJS] Has complete profile:', hasCompleteProfile)

			  if (hasCompleteProfile) {
				// User has complete profile, skip to confirm slide (index 3)
				console.log('[IMGJS] Skipping profile slide, going to confirm slide')
				goToSlide(3)
			  } else {
				// User needs to complete profile, proceed normally
				console.log('[IMGJS] User needs to complete profile, showing profile slide')
				goToNext()
			  }
			} else {
			  // No user data, proceed normally
			  console.log('[IMGJS] No user data, proceeding normally')
			  goToNext()
			}
		  } catch (accountErr) {
			console.error('[IMGJS] Error checking user profile:', accountErr)
			// If there's an error checking the account, proceed normally
			goToNext()
		  }
		} else {
		  console.error('[IMGJS] Verification failed:', res.status, res.statusText)
		  const btn = codeSlide.querySelector('button')
		  btn.style.backgroundColor = imgjs.subscribe.config.button_color
		  btn.textContent = btn.getAttribute('data-label')
		  codeInput.classList.add('invalid')
		}
	  } catch (err) {
		console.error('[IMGJS]', err)
		const btn = codeSlide.querySelector('button')
		btn.style.backgroundColor = imgjs.subscribe.config.button_color
		btn.textContent = btn.getAttribute('data-label')
		codeInput.classList.add('invalid')
	  }
	})

	// Function to build profile HTML with configurable fields
	function buildProfileHtml() {
		let profileHtml = '<div>';
		if (imgjs.subscribe.config.copy.profile_slide.cta[currentMode]) {
			profileHtml += `<p class="headline">${imgjs.subscribe.config.copy.profile_slide.cta[currentMode]}</p>`;
		}

		// Resolve fields config for rendering; if none provided, use defaults
		const rawFieldsConfig = (imgjs.subscribe.config.form && imgjs.subscribe.config.form.profile_fields) ? imgjs.subscribe.config.form.profile_fields : {}
		const renderFieldsConfig = (!rawFieldsConfig || Object.keys(rawFieldsConfig).length === 0)
			? {
				firstname: { enabled: true, required: true },
				lastname: { enabled: true, required: true },
				jobrole: { enabled: true, required: true },
				employer: { enabled: true, required: true },
				industry: { enabled: true, required: true },
				phone: { enabled: true, required: false },
				country: { enabled: false, required: false },
				zip_code: { enabled: false, required: false },
				department: { enabled: false, required: false },
			}
			: rawFieldsConfig

		if (renderFieldsConfig.firstname && renderFieldsConfig.firstname.enabled) {
			profileHtml += `<input type="text" id="imgjs-subscribe-profile-firstname" name="firstname" placeholder="First name" />`;
		}
		if (renderFieldsConfig.lastname && renderFieldsConfig.lastname.enabled) {
			profileHtml += `<input type="text" id="imgjs-subscribe-profile-lastname" name="lastname" placeholder="Last name" />`;
		}

		// Department (before Job Role)
		if (renderFieldsConfig.department && renderFieldsConfig.department.enabled) {
			profileHtml += `<select id="imgjs-subscribe-profile-department" name="department">
		  <option value="">Department ...</option>`;

			let deptOptions = []
			if (imgjs.subscribe.config.form && imgjs.subscribe.config.form.department && imgjs.subscribe.config.form.department.options) {
				deptOptions = imgjs.subscribe.config.form.department.options
			} else if (imgjs.config && imgjs.config.forms && imgjs.config.forms.department && imgjs.config.forms.department.options) {
				deptOptions = imgjs.config.forms.department.options
			}
			deptOptions.forEach(option => {
				profileHtml += `<option value="${option.value}">${option.title}</option>`;
			})
			profileHtml += `</select>`;
		}
		if (renderFieldsConfig.jobrole && renderFieldsConfig.jobrole.enabled) {
			profileHtml += `<select id="imgjs-subscribe-profile-jobrole" name="jobrole">
		  <option value="">Job Role ...</option>`;

			// Add job role options from config - this will be fresh each time open() is called
			if (imgjs.subscribe.config.form && imgjs.subscribe.config.form.job_role && imgjs.subscribe.config.form.job_role.options) {
				imgjs.subscribe.config.form.job_role.options.forEach(option => {
					profileHtml += `<option value="${option.value}">${option.title}</option>`;
				});
			}

			profileHtml += `</select>`;
		}
		if (renderFieldsConfig.employer && renderFieldsConfig.employer.enabled) {
			profileHtml += `<input type="text" id="imgjs-subscribe-profile-employer" name="employer" placeholder="Employer" />`;
		}
		if (renderFieldsConfig.industry && renderFieldsConfig.industry.enabled) {
			profileHtml += `<select id="imgjs-subscribe-profile-industry" name="industry">
		  <option value="">Industry ...</option>
		  <option value="advertising-marketing">Advertising/Marketing</option>
		  <option value="aerospace-aviation">Aerospace/Aviation</option>
		  <option value="agriculture">Agriculture</option>
		  <option value="automotive">Automotive</option>
		  <option value="biotech-pharma">Biotech/Pharmaceutical</option>
		  <option value="business-services">Business Services (accounting, consulting, etc.)</option>
		  <option value="computers-it">Computers/Information Technology</option>
		  <option value="construction">Construction</option>
		  <option value="education">Education</option>
		  <option value="facilities">Facilities/Service Industry</option>
		  <option value="fintech">Finance/Financial Services (banking, insurance, etc.)</option>
		  <option value="government">Government</option>
		  <option value="healthcare">Healthcare</option>
		  <option value="human-resources">Human Resources</option>
		  <option value="legal">Legal</option>
		  <option value="life-sciences">Life sciences (biotech, pharmaceuticals, etc.)</option>
		  <option value="manufacturing">Manufacturing</option>
		  <option value="media">Media</option>
		  <option value="non-profit">Non-profit</option>
		  <option value="real-estate">Real Estate</option>
		  <option value="retail-consumer-goods">Retail/Consumer Goods</option>
		  <option value="telecommunications">Telecommunications</option>
		  <option value="transportation-logistics">Transportation/Logistics</option>
		  <option value="travel-hospitality-entertainment">Travel/Hospitality/Entertainment</option>
		  <option value="utilitiy-energy">Utility/Energy</option>
		</select>`;
		}
		if (renderFieldsConfig.country && renderFieldsConfig.country.enabled) {
			profileHtml += `<select id="imgjs-subscribe-profile-country" name="country">
		  <option value="">Country ...</option>`;
			let countryOptions = []
			if (imgjs.subscribe.config.form && imgjs.subscribe.config.form.country && imgjs.subscribe.config.form.country.options) {
				countryOptions = imgjs.subscribe.config.form.country.options
			} else if (imgjs.config && imgjs.config.forms && imgjs.config.forms.country && imgjs.config.forms.country.options) {
				countryOptions = imgjs.config.forms.country.options
			}
			countryOptions.forEach(option => {
				profileHtml += `<option value="${option.value}">${option.title}</option>`;
			});
			profileHtml += `</select>`;
		}
		if (renderFieldsConfig.zip_code && renderFieldsConfig.zip_code.enabled) {
			profileHtml += `<input type="text" id="imgjs-subscribe-profile-zip_code" name="zip_code" placeholder="ZIP / Postal Code" />`;
		}

		// Country code dropdown and phone number input
		if (renderFieldsConfig.phone && renderFieldsConfig.phone.enabled) {
		profileHtml += `<div style="display: flex; gap: 4px; margin-bottom: 4px;">
		  <select id="imgjs-subscribe-profile-countrycode" name="countrycode" style="flex: 0 0 80px; margin-bottom: 0;">
			<option value="+1">+1</option>
			<option value="+7">+7</option>
			<option value="+20">+20</option>
			<option value="+27">+27</option>
			<option value="+30">+30</option>
			<option value="+31">+31</option>
			<option value="+32">+32</option>
			<option value="+33">+33</option>
			<option value="+34">+34</option>
			<option value="+36">+36</option>
			<option value="+39">+39</option>
			<option value="+40">+40</option>
			<option value="+41">+41</option>
			<option value="+43">+43</option>
			<option value="+44">+44</option>
			<option value="+45">+45</option>
			<option value="+46">+46</option>
			<option value="+47">+47</option>
			<option value="+48">+48</option>
			<option value="+49">+49</option>
			<option value="+51">+51</option>
			<option value="+52">+52</option>
			<option value="+53">+53</option>
			<option value="+54">+54</option>
			<option value="+55">+55</option>
			<option value="+56">+56</option>
			<option value="+57">+57</option>
			<option value="+58">+58</option>
			<option value="+60">+60</option>
			<option value="+61">+61</option>
			<option value="+62">+62</option>
			<option value="+63">+63</option>
			<option value="+64">+64</option>
			<option value="+65">+65</option>
			<option value="+66">+66</option>
			<option value="+81">+81</option>
			<option value="+82">+82</option>
			<option value="+84">+84</option>
			<option value="+86">+86</option>
			<option value="+90">+90</option>
			<option value="+91">+91</option>
			<option value="+92">+92</option>
			<option value="+93">+93</option>
			<option value="+94">+94</option>
			<option value="+95">+95</option>
			<option value="+98">+98</option>
			<option value="+212">+212</option>
			<option value="+213">+213</option>
			<option value="+216">+216</option>
			<option value="+218">+218</option>
			<option value="+220">+220</option>
			<option value="+221">+221</option>
			<option value="+222">+222</option>
			<option value="+223">+223</option>
			<option value="+224">+224</option>
			<option value="+225">+225</option>
			<option value="+226">+226</option>
			<option value="+227">+227</option>
			<option value="+228">+228</option>
			<option value="+229">+229</option>
			<option value="+230">+230</option>
			<option value="+231">+231</option>
			<option value="+232">+232</option>
			<option value="+233">+233</option>
			<option value="+234">+234</option>
			<option value="+235">+235</option>
			<option value="+236">+236</option>
			<option value="+237">+237</option>
			<option value="+238">+238</option>
			<option value="+239">+239</option>
			<option value="+240">+240</option>
			<option value="+241">+241</option>
			<option value="+242">+242</option>
			<option value="+243">+243</option>
			<option value="+244">+244</option>
			<option value="+245">+245</option>
			<option value="+246">+246</option>
			<option value="+247">+247</option>
			<option value="+248">+248</option>
			<option value="+249">+249</option>
			<option value="+250">+250</option>
			<option value="+251">+251</option>
			<option value="+252">+252</option>
			<option value="+253">+253</option>
			<option value="+254">+254</option>
			<option value="+255">+255</option>
			<option value="+256">+256</option>
			<option value="+257">+257</option>
			<option value="+258">+258</option>
			<option value="+260">+260</option>
			<option value="+261">+261</option>
			<option value="+262">+262</option>
			<option value="+263">+263</option>
			<option value="+264">+264</option>
			<option value="+265">+265</option>
			<option value="+266">+266</option>
			<option value="+267">+267</option>
			<option value="+268">+268</option>
			<option value="+269">+269</option>
			<option value="+290">+290</option>
			<option value="+291">+291</option>
			<option value="+297">+297</option>
			<option value="+298">+298</option>
			<option value="+299">+299</option>
			<option value="+350">+350</option>
			<option value="+351">+351</option>
			<option value="+352">+352</option>
			<option value="+353">+353</option>
			<option value="+354">+354</option>
			<option value="+355">+355</option>
			<option value="+356">+356</option>
			<option value="+357">+357</option>
			<option value="+358">+358</option>
			<option value="+359">+359</option>
			<option value="+370">+370</option>
			<option value="+371">+371</option>
			<option value="+372">+372</option>
			<option value="+373">+373</option>
			<option value="+374">+374</option>
			<option value="+375">+375</option>
			<option value="+376">+376</option>
			<option value="+377">+377</option>
			<option value="+378">+378</option>
			<option value="+380">+380</option>
			<option value="+381">+381</option>
			<option value="+382">+382</option>
			<option value="+383">+383</option>
			<option value="+385">+385</option>
			<option value="+386">+386</option>
			<option value="+387">+387</option>
			<option value="+389">+389</option>
			<option value="+420">+420</option>
			<option value="+421">+421</option>
			<option value="+423">+423</option>
			<option value="+500">+500</option>
			<option value="+501">+501</option>
			<option value="+502">+502</option>
			<option value="+503">+503</option>
			<option value="+504">+504</option>
			<option value="+505">+505</option>
			<option value="+506">+506</option>
			<option value="+507">+507</option>
			<option value="+508">+508</option>
			<option value="+509">+509</option>
			<option value="+590">+590</option>
			<option value="+591">+591</option>
			<option value="+592">+592</option>
			<option value="+593">+593</option>
			<option value="+594">+594</option>
			<option value="+595">+595</option>
			<option value="+596">+596</option>
			<option value="+597">+597</option>
			<option value="+598">+598</option>
			<option value="+599">+599</option>
			<option value="+670">+670</option>
			<option value="+672">+672</option>
			<option value="+673">+673</option>
			<option value="+674">+674</option>
			<option value="+675">+675</option>
			<option value="+676">+676</option>
			<option value="+677">+677</option>
			<option value="+678">+678</option>
			<option value="+679">+679</option>
			<option value="+680">+680</option>
			<option value="+681">+681</option>
			<option value="+682">+682</option>
			<option value="+683">+683</option>
			<option value="+684">+684</option>
			<option value="+685">+685</option>
			<option value="+686">+686</option>
			<option value="+687">+687</option>
			<option value="+688">+688</option>
			<option value="+689">+689</option>
			<option value="+690">+690</option>
			<option value="+691">+691</option>
			<option value="+692">+692</option>
			<option value="+850">+850</option>
			<option value="+852">+852</option>
			<option value="+853">+853</option>
			<option value="+855">+855</option>
			<option value="+856">+856</option>
			<option value="+880">+880</option>
			<option value="+886">+886</option>
			<option value="+960">+960</option>
			<option value="+961">+961</option>
			<option value="+962">+962</option>
			<option value="+963">+963</option>
			<option value="+964">+964</option>
			<option value="+965">+965</option>
			<option value="+966">+966</option>
			<option value="+967">+967</option>
			<option value="+968">+968</option>
			<option value="+970">+970</option>
			<option value="+971">+971</option>
			<option value="+972">+972</option>
			<option value="+973">+973</option>
			<option value="+974">+974</option>
			<option value="+975">+975</option>
			<option value="+976">+976</option>
			<option value="+977">+977</option>
			<option value="+992">+992</option>
			<option value="+993">+993</option>
			<option value="+994">+994</option>
			<option value="+995">+995</option>
			<option value="+996">+996</option>
			<option value="+998">+998</option>
		  </select>
		  <input type="tel" id="imgjs-subscribe-profile-phone" name="phone" placeholder="Phone Number" style="flex: 1; margin-bottom: 0;" />
		</div>`;
		}
		if (imgjs.subscribe.config.copy.profile_slide.button_label[currentMode]) {
			profileHtml += `<button style="margin-bottom:0;">${imgjs.subscribe.config.copy.profile_slide.button_label[currentMode]}</button>`;
		}
		profileHtml += '</div>';
		return profileHtml;
	}

const profileHtmlContent = buildProfileHtml();
const profileSlide = makeSlide(profileHtmlContent, async () => {
  const btn = profileSlide.querySelector('button')
  let valid = true

  const rawValidationConfig = (imgjs.subscribe.config.form && imgjs.subscribe.config.form.profile_fields) ? imgjs.subscribe.config.form.profile_fields : {}
  const validationFieldsConfig = (!rawValidationConfig || Object.keys(rawValidationConfig).length === 0)
    ? {
        firstname: { enabled: true, required: true },
        lastname: { enabled: true, required: true },
        jobrole: { enabled: true, required: true },
        employer: { enabled: true, required: true },
        industry: { enabled: true, required: true },
        phone: { enabled: true, required: false },
        country: { enabled: false, required: false },
        zip_code: { enabled: false, required: false },
        department: { enabled: false, required: false },
      }
    : rawValidationConfig

  const fieldElements = {
    firstname: document.getElementById('imgjs-subscribe-profile-firstname'),
    lastname: document.getElementById('imgjs-subscribe-profile-lastname'),
    department: document.getElementById('imgjs-subscribe-profile-department'),
    jobrole: document.getElementById('imgjs-subscribe-profile-jobrole'),
    employer: document.getElementById('imgjs-subscribe-profile-employer'),
    industry: document.getElementById('imgjs-subscribe-profile-industry'),
    country: document.getElementById('imgjs-subscribe-profile-country'),
    zip_code: document.getElementById('imgjs-subscribe-profile-zip_code'),
    countrycode: document.getElementById('imgjs-subscribe-profile-countrycode'),
    phone: document.getElementById('imgjs-subscribe-profile-phone')
  }

  // Clear previous invalid states
  Object.values(fieldElements).forEach(el => { if (el) el.classList.remove('invalid') })

  // Required field validation per config (fallbacks applied)
  Object.keys(validationFieldsConfig).forEach(key => {
    const cfg = validationFieldsConfig[key]
    if (!cfg || !cfg.enabled || !cfg.required) return
    const el = fieldElements[key]
    if (!el) return
    if (!el.value || !el.value.trim()) {
      el.classList.add('invalid')
      valid = false
    }
  })

  // Phone format validation only if value provided
  const phoneEl = fieldElements.phone
  if (phoneEl && phoneEl.value.trim() !== '') {
    const phoneValue = phoneEl.value.trim()
    const cleanPhone = phoneValue.replace(/[^\d\-\s\(\)]/g, '')
    if (cleanPhone !== phoneValue) {
      phoneEl.classList.add('invalid')
      valid = false
    } else {
      const digitsOnly = phoneValue.replace(/[\s\-\(\)]/g, '')
      if (digitsOnly.length < 5 || digitsOnly.length > 15) {
        phoneEl.classList.add('invalid')
        valid = false
      }
    }
  }

  // Basic postal code validation only if value provided
  const zipEl = fieldElements.zip_code
  if (zipEl && zipEl.value.trim() !== '') {
    const zipValue = zipEl.value.trim()
    const cleanZip = zipValue.replace(/[^A-Za-z0-9 \-]/g, '')
    if (cleanZip !== zipValue) {
      zipEl.classList.add('invalid')
      valid = false
    }
  }

  if (!valid) {
    btn.style.backgroundColor = imgjs.subscribe.config.button_color
    btn.textContent = btn.getAttribute('data-label')
    return
  }

  goToNext()
})

	// Always re-attach blur event listeners after rendering profile slide
	function attachProfileBlurListeners() {
	  profileSlide.querySelectorAll('input, select').forEach(input => {
		input.removeEventListener('blur', imgjs.subscribe.updateAccountField) // Remove if already attached
		input.addEventListener('blur', imgjs.subscribe.updateAccountField)
	  })
	}
	attachProfileBlurListeners()

	let confirmHtml = '<div>';
	if (imgjs.subscribe.config.copy.confirm_slide.welcome[currentMode]) {
		confirmHtml += `<p>${imgjs.subscribe.config.copy.confirm_slide.welcome[currentMode]}</p>`;
	}
	if (imgjs.subscribe.config.copy.confirm_slide.whats_next[currentMode]) {
		confirmHtml += `<p style="margin-bottom: 0;"><strong>What's next?</strong></p><p style="margin-top: 0;">${imgjs.subscribe.config.copy.confirm_slide.whats_next[currentMode]}</p>`;
	}
	if (imgjs.subscribe.config.copy.confirm_slide.follow[currentMode]) {
		confirmHtml += `<p>${imgjs.subscribe.config.copy.confirm_slide.follow[currentMode]}</p>`;
	}
	// Social links should always be rendered
	confirmHtml += `
	  <div class="tns-follow-links">
		<div class="follow-links">
		  ${imgjs.subscribe.config.social_links.mastodon ? `
		  <a href="${imgjs.subscribe.config.social_links.mastodon}" class="follow-icon follow-icon-mastadon" data-platform="mastodon" target="_blank">
			<svg class="fill" fill="#000000" viewBox="0 0 25 25" style="width: 25px; height: 25px" xmlns="http://www.w3.org/2000/svg" xml:space="preserve">
			  <path d="M21.327 8.566c0-4.339-2.843-5.61-2.843-5.61-1.433-.658-3.894-.935-6.451-.956h-.063c-2.557.021-5.016.298-6.45.956 0 0-2.843 1.272-2.843 5.61 0 .993-.019 2.181.012 3.441.103 4.243.778 8.425 4.701 9.463 1.809.479 3.362.579 4.612.51 2.268-.126 3.541-.809 3.541-.809l-.075-1.646s-1.621.511-3.441.449c-1.804-.062-3.707-.194-3.999-2.409a4.523 4.523 0 0 1-.04-.621s1.77.433 4.014.536c1.372.063 2.658-.08 3.965-.236 2.506-.299 4.688-1.843 4.962-3.254.434-2.223.398-5.424.398-5.424zm-3.353 5.59h-2.081V9.057c0-1.075-.452-1.62-1.357-1.62-1 0-1.501.647-1.501 1.927v2.791h-2.069V9.364c0-1.28-.501-1.927-1.502-1.927-.905 0-1.357.546-1.357 1.62v5.099H6.026V8.903c0-1.074.273-1.927.823-2.558.566-.631 1.307-.955 2.228-.955 1.065 0 1.872.409 2.405 1.228l.518.869.519-.869c.533-.819 1.34-1.228 2.405-1.228.92 0 1.662.324 2.228.955.549.631.822 1.484.822 2.558v5.253z"/>
			</svg>
		  </a>
		  ` : ''}
		  ${imgjs.subscribe.config.social_links.bluesky ? `
		  <a href="${imgjs.subscribe.config.social_links.bluesky}" class="follow-icon follow-icon-bluesky" data-platform="bluesky" target="_blank">
			<svg class="fill" fill="#000000" viewBox="0 0 64 57" width="24" style="width: 24px">
			  <path fill="#0085ff" d="M13.873 3.805C21.21 9.332 29.103 20.537 32 26.55v15.882c0-.338-.13.044-.41.867-1.512 4.456-7.418 21.847-20.923 7.944-7.111-7.32-3.819-14.64 9.125-16.85-7.405 1.264-15.73-.825-18.014-9.015C1.12 23.022 0 8.51 0 6.55 0-3.268 8.579-.182 13.873 3.805ZM50.127 3.805C42.79 9.332 34.897 20.537 32 26.55v15.882c0-.338.13.044.41.867 1.512 4.456 7.418 21.847 20.923 7.944 7.111-7.32 3.819-14.64-9.125-16.85 7.405 1.264 15.73-.825 18.014-9.015C62.88 23.022 64 8.51 64 6.55c0-9.818-8.578-6.732-13.873-2.745Z"></path>
			</svg>
		  </a>
		  ` : ''}
		  ${imgjs.subscribe.config.social_links.threads ? `
		  <a href="${imgjs.subscribe.config.social_links.threads}" class="follow-icon follow-icon-threads" data-platform="threads" target="_blank">
			<svg fill="#CCCCCC" viewBox="0 0 192 192">
			  <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"></path>
			</svg>
		  </a>
		  ` : ''}
		  ${imgjs.subscribe.config.social_links.linkedin ? `
		  <a href="${imgjs.subscribe.config.social_links.linkedin}" class="follow-icon follow-icon-linkedin" data-platform="linkedin" target="_blank">
			<svg viewBox="0 0 16.927 16.689" class="fill">
			  <path d="M3.833,1.809A1.8,1.8,0,0,0,1.88,3.619,1.783,1.783,0,0,0,0,1.809,1.8,1.8,0,0,0,1.928,0a1.789,1.789,0,0,0,1.9,1.809M.1,5.047H3.714V16.689H.1Z" transform="translate(0 0)"/>
			  <path d="M28.535,27.5c0-1.452-.047-2.666-.095-3.714h3.142l.167,1.619h.071a4.18,4.18,0,0,1,3.6-1.881c2.381,0,4.166,1.6,4.166,5.024V35.43H35.963V28.978c0-1.5-.524-2.523-1.833-2.523a1.987,1.987,0,0,0-1.857,1.357,2.6,2.6,0,0,0-.119.9V35.43H28.535Z" transform="translate(-22.655 -18.741)"/>
			</svg>
		  </a>
		  ` : ''}
		  ${imgjs.subscribe.config.social_links.twitter ? `
		  <a href="${imgjs.subscribe.config.social_links.twitter}" class="follow-icon follow-icon-twitter" data-platform="twitter" target="_blank">
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" width="24px" height="24px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve" class="fill">
			  <path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z"/>
			</svg>
		  </a>
		  ` : ''}
		  ${imgjs.subscribe.config.social_links.facebook ? `
		  <a href="${imgjs.subscribe.config.social_links.facebook}" class="follow-icon follow-icon-facebook" data-platform="facebook" target="_blank">
			<svg viewBox="0 0 17.492 17.492" class="fill">
				<path d="M15.306,0H2.187A2.193,2.193,0,0,0,0,2.187V15.306a2.193,2.193,0,0,0,2.187,2.187H8.822V11.22H6.727V8.488H8.822V7.119a3.621,3.621,0,0,1,3.547-3.763H14.3V6.441H12.572c-.452,0-.585.26-.585.618V8.488H14.3V11.22H11.987v6.272h3.318a2.193,2.193,0,0,0,2.187-2.187V2.187A2.193,2.193,0,0,0,15.306,0"/>
			</svg>
		  </a>
		  ` : ''}
		  ${imgjs.subscribe.config.social_links.spotify ? `
		  <a href="${imgjs.subscribe.config.social_links.spotify}" class="follow-icon follow-icon-spotify" data-platform="spotify" target="_blank">
			<svg fill="#CCCCCC" viewBox="0 0 24 24" height="32">
			  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
			</svg>
		  </a>
		  ` : ''}
		  ${imgjs.subscribe.config.social_links.youtube ? `
		  <a href="${imgjs.subscribe.config.social_links.youtube}" class="follow-icon follow-icon-youtube" data-platform="youtube" target="_blank">
			<svg viewBox="0 0 310 310" class="fill">
			  <g id="XMLID_822_">
				<path id="XMLID_823_" d="M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938
				  C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527
				  C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991
				  c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764
				  c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861
				  C204.394,157.263,202.325,160.684,199.021,162.41z"/>
			  </g>
			</svg>
		  </a>
		  ` : ''}
		</div>
	  </div>
	`;
	if (imgjs.subscribe.config.copy.confirm_slide.button_label[currentMode]) {
		confirmHtml += `<button>${imgjs.subscribe.config.copy.confirm_slide.button_label[currentMode]}</button>`;
	}
	confirmHtml += '</div>';
	const confirmSlide = makeSlide(confirmHtml, () => {
		closePopover();
	});

	carousel.append(emailSlide, codeSlide, profileSlide, confirmSlide)

	// If user is passed, populate email and auto-click button
	if (imgjs.subscribe.passedUser) {
	  console.log('[IMGJS] User passed to open method:', imgjs.subscribe.passedUser)

	  // Check if user has email (flat structure: user.email)
	  if (imgjs.subscribe.passedUser.email) {
		const userEmail = imgjs.subscribe.passedUser.email
		console.log('[IMGJS] Auto-populating email from user data:', userEmail)
		const emailInput = document.getElementById('imgjs-subscribe-email-input')
		if (emailInput) {
		  emailInput.value = userEmail
		  console.log('[IMGJS] Email input populated with:', userEmail)
		} else {
		  console.log('[IMGJS] Email input not found')
		}

		// Auto-click the button after a short delay
		setTimeout(() => {
		  const btn = emailSlide.querySelector('button')
		  if (btn) {
			console.log('[IMGJS] Auto-clicking email submit button')
			btn.click()
		  } else {
			console.log('[IMGJS] Button not found for auto-click')
		  }
		}, 200) // Increased delay to ensure DOM is ready
	  } else {
		console.log('[IMGJS] No email found in passed user object')
	  }
	}

	// Set initial height based on first slide
	setTimeout(setPopoverHeight, 10)
}
