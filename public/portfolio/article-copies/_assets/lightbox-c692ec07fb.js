var chainlink_lightbox;
(function ($) {
    chainlink_lightbox = {
        options: {
            container: '.post-editor-content',
            selector: 'img'
        },
        init: function () {
            var $container = $(this.options.container);
            $container.on('click', this.options.selector, this.handler)
            $('.w-lightbox-backdrop').on('click', chainlink_lightbox.closeHandler);
            $(document).keydown(function(e) {
                if (e.key == "Escape") {
                    chainlink_lightbox.close();
                }
            });
            this.init_video();
        },
        init_video: function () {
            $('.post-card-href.video-link').off('click').on('click', chainlink_lightbox.video_handler);
        },
        handler: function(container, event) {
            var $element = $(this);
            if (chainlink_lightbox.valid($element)) {
                chainlink_lightbox.open($element);
            }
        },
        video_handler: function(event) {
            event.preventDefault();
            const $link = $(event.currentTarget);

            if (typeof $link.attr('href') == 'undefined') {
                return;
            }
            const href = $link.attr('href'),
                id = chainlink_lightbox.extract_video_id(href);

            if (!id) {
                return;
            }
            const $iframe = $('<iframe>', {
                src: 'https://www.youtube.com/embed/' + id + '?autoplay=1',
                allow: 'autoplay; fullscreen',
            });

            chainlink_lightbox.open($iframe);
        },
        extract_video_id: function(url){
            var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
            var match = url.match(regExp);
            return (match&&match[7].length==11)? match[7] : false;
        },
        valid: function($element) {
            if ($element.parent('a').length) {
                return false;
            }
            if ($element.parent('.w-lightbox-frame').length) {
                return false;
            }
            return true;
        },
        open: function($element) {
            $('body').addClass('w-lightbox-noscroll');
            $('.w-lightbox-backdrop').removeClass('w-lightbox-hide');
            $element.clone().appendTo('.w-lightbox-frame');
            setTimeout(function(){
                $('.w-lightbox-backdrop').css('opacity', 1);
            }, 1);
        },
        closeHandler: function(e) {
            if (e.target.tagName != 'IMG') {
                chainlink_lightbox.close();
            }
        },
        close: function() {
            $('.w-lightbox-backdrop').css('opacity', 0);
            setTimeout(function(){
                $('.w-lightbox-backdrop').addClass('w-lightbox-hide');
                $('.w-lightbox-frame').empty();
            }, 500);
            $('body').removeClass('w-lightbox-noscroll');
        }
    };

    $(document).ready(function () {
        chainlink_lightbox.init();
    });

    $(window).load(function () {
        chainlink_lightbox.init_video();
    });
})(jQuery);