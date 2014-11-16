$(document).ready(function(){
    $('.check-filter').change(function(e){
        var curLabel = $(e.target).parent();

        if(curLabel.hasClass('bg-label_js')) {
            curLabel.removeClass('bg-label_js');
        }
        else if (!curLabel.hasClass('bg-label_js')) {
            curLabel.addClass('bg-label_js');
        }
    });

    $('.check-filter-radio').change(function(e){
        $(e.target).parent().parent().parent().find('label').removeClass('bg-label_js');
        var curLabel = $(e.target).parent();

        if(curLabel.hasClass('bg-label_js')) {
            curLabel.removeClass('bg-label_js');
        }
        else if (!curLabel.hasClass('bg-label_js')) {
            curLabel.addClass('bg-label_js');
        }
    });

    /*popup function*/
    function popupWindow(targetClick, showCurrentForm) {
        targetClick.on('click', function (e) {
            e.preventDefault();

            var bgPopup = $('#bg-popup'),
                fotoPopup = $('#wrap-popup');

            bgPopup.addClass('show_js');
            fotoPopup.animate({'opacity': 1}, 500);
            showCurrentForm.addClass('show_js');

            bgPopup.height($(document).height());

            var fotoInPopupW = fotoPopup.width(),
                scrollTop = window.pageYOffset;

            fotoPopup.css({
                'top': scrollTop,
                'left': '50%',
                'margin-left': - (fotoInPopupW / 2)
            });

            $('.btn-close, #bg-popup').on('click', function() {
                bgPopup.removeClass('show_js');
                showCurrentForm.removeClass('show_js');

                $(showCurrentForm).find('.show_js').removeClass('show_js');

                fotoPopup.css({
                    'opacity' : 0,
                    'top': 0,
                    'left': 0,
                    'margin-left': 0
                });
            });

            $("#wrap-popup").click(function(e) {
                e.stopPropagation();
            });
        });
    }
    /*end*/

    var curLinkAuthorization = $('.box-authorization a'),
        curBlockShow = $('.reg-popup');

    popupWindow(curLinkAuthorization, curBlockShow);
});