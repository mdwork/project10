$(document).ready(function(){
    $('.sidebar').height($('.wrapper').height());

    $('input.check-filter').change('click', function(e){
        var curLabel = $(e.target).parent();

        if(curLabel.hasClass('bg-label_js')) {
            curLabel.removeClass('bg-label_js');
        }
        else if (!curLabel.hasClass('bg-label_js')) {
            curLabel.addClass('bg-label_js');
        }
    });
});