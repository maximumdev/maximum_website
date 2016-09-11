
var words = ['COW', 'FOOTBALL', 'CEREAL', 'COFFEE', 'SOCCER', 'CHICKEN', 'MILK', 'PIG', 'HORSE', 'CHEESE', 'HOCKEY', 'JELLY', 'ACDC', 'BITE', 'APHID', 'ADAM', 'SOONER', 'BRUMMIE', 'TAMP', 'PLEASE', 'SPA', 'PIC', 'COST', 'SCARS', 'GATE', 'HEN', 'CONTACT', 'ONTARIO', 'ENDIVE', 'TOTO', 'SAUCE', 'AMEN', 'SASS'];
var ran = getRandomInt(0, 32);
var ans = words[ran];
var cutAns = ans.split('');
var keyDn;
var guess = [];
var hints = ['The average weight of this animal is 1,200 lbs', 'It takes 6,000 cows to make one season\'s worth of balls for this sport', 'This food is commonly eaten after being drenched in milk', 'This bean was discovered in Ethiopia circa 800 A.D.', 'This sport is called football in every country except the US and Canada', 'There are 25 billion of these animals in the world', 'This drink does a body good', 'Never trust a ___ farmer', 'This animal has 205 bones in its skeletal system', 'There are 1,777 different types of this food', 'Prior to the 1927-28 season, forward passes were not allowed in this sport', 'Surprisingly, this food doesn\'t wobble underwater', '\"Thunderstruck\" band', 'Mosquito attack', 'Plant pest', 'First person', 'Oklahoma native', 'Birmingham native', 'Pack down', 'The magic word', 'This is where you would go to get a mud bath', 'Snapshot', 'The price of something', 'Surgery souvenirs', 'Fence opening', 'A chick\'s mother', 'To get in touch with', 'Toronto\'s province', 'A salad green', 'Dorothy\'s dog', 'Béchamel and béarnaise', 'Prayer ender', 'Pertness'];
var numOfWrongAnswers = 0;



function main() {
    genInput(ans);
    genHint(ran);
    //dispAnswer();
}

function getRandomInt(min, max) {

    return Math.floor((Math.random() * max) + 1) + min;
}

function genInput(ans) {

    for (var i = 0; i < cutAns.length; i++) {
        guess.push('_');
    }

    document.getElementById('nonAnswer').innerHTML = guess.join("");
}

function genHint(ran) {

    document.getElementById('hint').innerHTML = hints[ran];
}

function dispAnswer() {
    $(document).ready(function () {
        $('#answer').animate({
            opacity: '1'
        }, 1000),
        $('#playAgainButton').animate({
            opacity: '1',
        }, 1000).css({'z-index': '2', 'cursor': 'pointer'})
    });
    var e = document.getElementById('answer').innerHTML = ans;
}

function keyListener(event) {

    var keyDn = event.key.toUpperCase();

    document.getElementById("guess").innerHTML = keyDn;

    for (var i = 0; i < cutAns.length; i++) {
        if (keyDn === cutAns[i]) {
            dispInput(i, keyDn);
            continue;
        }
    }

    if (!ans.includes(keyDn)) {
        numOfWrongAnswers += 1;
        console.log(numOfWrongAnswers);

        switch(numOfWrongAnswers) {
            case 1:
                $(document).ready(function() {
                    $('#draw1').animate({
                    opacity: '1'}, 800);
                });
                break;
            case 2:
                $(document).ready(function () {
                    $('#draw2').animate({
                        opacity: '1'
                    }, 800);
                });
                break;
            case 3:
                $(document).ready(function () {
                    $('#draw3').animate({
                        opacity: '1'
                    }, 800);
                });
                break;
            case 4:
                $(document).ready(function () {
                    $('#draw4').animate({
                        opacity: '1'
                    }, 800);
                });
                break;
            case 5:
                $(document).ready(function () {
                    $('#draw5').animate({
                        opacity: '1'
                    }, 800);
                });
                break;
            case 6:
                $(document).ready(function () {
                    $('#draw6').animate({
                        opacity: '1'
                    }, 800);
                });
                break;
            case 7:
                $(document).ready(function () {
                    $('#draw7').animate({
                        opacity: '1'
                    }, 800);
                });
                break;
            case 8:
                $(document).ready(function () {
                    $('#draw8').animate({
                        opacity: '1'
                    }, 800);
                });
                break;
            case 9:
                $(document).ready(function () {
                    $('#draw9').animate({
                        opacity: '1'
                    }, 800);
                });
                break;
            case 10:
                $(document).ready(function () {
                    $('#draw10').animate({
                        opacity: '1'
                    }, 800);
                });
                $(document).ready(function () {
                    $('#draw10').animate({
                        opacity: '1'
                    }, 800),
                    $('#drawingDiv').animate({
                        opacity: '0'
                    }, 5000);
                });
                // Display PlayAgainButton
                dispAnswer();
                break;
            default:
                console.log('No wrong answers here')
        }

    }
}


function dispInput(pos, keyDn) {
    guess[pos] = keyDn;
    if (guess.join("") === ans)
    {
        dispAnswer();
    }

    document.getElementById('nonAnswer').innerHTML = guess.join("");
}




function correct(pos, keyDn) {

    var guess = [];
    for (var i = 0; i < cutAns.length; i++) {
        guess.push('_');
    }

    guess[pos] = keyDn;

    document.getElementById('nonAnswer').innerHTML = guess.join("");
}

function incorrect(letter) {

}



/// TODO: KeyDown for letter picker

//function detectKeyDown() {
//    document.onkeydown(console.log(this.CharacterData));
//}


    //var para = document.createElement("p");
    //var node = document.createTextNode("This is new.");
    //para.appendChild(node);
    //var element = document.getElementById("div1");
    //element.appendChild(para);

    //switch(expression) {
    //    case 'COW':
    //        code block
    //        break;
    //    case 'FOOTBALL':
    //        code block
    //        break;
    //    case 'CEREAL':
    //        code block
    //        break;
    //    default:
    //    default code block
    //}







/* context = document.getElementById('myCanvas').getContext("2d");


$('#myCanvas').mousedown(function (e) {
    var mouseX = e.pageX - this.offsetLeft;
    var mouseY = e.pageY - this.offsetTop;

    paint = true;
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
    redraw();
});

$('#myCanvas').mousemove(function (e) {
    if (paint) {
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
        redraw();
    }
});

$('#myCanvas').mouseup(function (e) {
    paint = false;
});

$('#myCanvas').mouseleave(function (e) {
    paint = false;
});

var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;

function addClick(x, y, dragging) {
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
}

function redraw() {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

    context.strokeStyle = "#df4b26";
    context.lineJoin = "round";
    context.lineWidth = 5;

    for (var i = 0; i < clickX.length; i++) {
        context.beginPath();
        if (clickDrag[i] && i) {
            context.moveTo(clickX[i - 1], clickY[i - 1]);
        } else {
            context.moveTo(clickX[i] - 1, clickY[i]);
        }
        context.lineTo(clickX[i], clickY[i]);
        context.closePath();
        context.stroke();
    }
}
*/
