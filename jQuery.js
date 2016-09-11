$(document).ready(function () {
    $('#guess').animate({
        opacity: '1'
    }, 3000);
});

$(document).ready(function () {
    $('#hintButton').hover(
        function () {
            $(this).animate({
                opacity: '.6'
            }, 40);
        },
        function () {
            $(this).animate({
                opacity: '1'
            }, 40);
        }
        );
});

$(document).ready(function () {
    $('#playAgainButton').hover(
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