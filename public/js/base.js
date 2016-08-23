$.wispiring = {message: {}};
$.wispiring.dateselect = {
    options: {
        "language": "zh-CN",
        "autoclose": true,
        "todayBtn": true,
        "todayHighlight": true
    }
    // render: function() {
    //     var date = $('input[type="date"], .dateselect').not('[readonly="readlonly"]'), datetime = $('input[type="datetime"], .datetimeselect').not('[readonly="readlonly"]');
    //     this.options.minView = 'month';
    //     this.options.format = 'yyyy-mm-dd';
    //     date.attr('type', 'text').datetimepicker(this.options);
    // }
};

$(document).ready(function() {
    // $('.delete-btn, .delete-button').click(function(event) {
    //     var message = $(this).data('message') || $.wispiring.message.ays;
    //     if (!confirm(message)) {
    //         event.preventDefault();
    //     }
    // });
    $('.banner ul li').css('background-size', '100% 100%');
    $('.banner').unslider({
        speed: 500, 
        delay: 4000,
        dots: true,
        fluid: true 
    });
});
