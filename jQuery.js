$(document).ready(function () {
    $('#guess').animate({
        opacity: '1'
    }, 1000);
});

$(document).ready(function () {
    $('#hintButton').hover(
        function () {
            $('#hintButton').animate({
                opacity: '.6'
            }, 200);
        },
        function () {
            $('#hintButton').animate({
                opacity: '1'
            }, 200);
        }
        );
});

$(document).ready(function () {
    $('#playAgainButton').hover(
        function () {
            $('#playAgainButton').animate({
                opacity: '.6'
            }, 200);
        },
        function () {
            $('#playAgainButton').animate({
                opacity: '1'
            }, 200);
        }
        );
});

$(document).ready(function () {
    $('#hintButton').click(function () {
        $('#hintButton').animate({
            top: '100px',
            opacity: '0'
        }, 800).fadeOut(),
        $('#hint').animate({
            opacity: '1'
        }, 500);
    });
});

//$('#hint').click(function () {
//    $('#answer').animate({
//        color : 'black'
//    }, 300)
//})