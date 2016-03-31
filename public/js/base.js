$.wispiring = {message: {}};
$.wispiring.dateselect = {
    options: {
        "language": "zh-CN",
        "autoclose": true,
        "todayBtn": true,
        "todayHighlight": true
    },
    render: function() {
        var date = $('input[type="date"], .dateselect').not('[readonly="readlonly"]'), datetime = $('input[type="datetime"], .datetimeselect').not('[readonly="readlonly"]');
//        datetime.attr('type', 'text').datetimepicker(this.options);
        this.options.minView = 'month';
        this.options.format = 'yyyy-mm-dd';
        date.attr('type', 'text').datetimepicker(this.options);
    }
};

$(document).ready(function() {
    $('.delete-btn, .delete-button').click(function(event) {
        var message = $(this).data('message') || $.wispiring.message.ays;
        if (!confirm(message)) {
            event.preventDefault();
        }
    });

});
