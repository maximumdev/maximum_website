
$(document).ready(function () {
    $('#hangmanBtn').hover(
        function () {
            $(this).animate({
                opacity: '.6'
            }, 40);
        },
        function () {
            $(this).animate({
                opacity: '1'
            }, 40);
    });
});