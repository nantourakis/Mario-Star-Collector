$(document).ready(function(){
    var randomNumber;
    var win = 0;
    var lose = 0;
    var incrementation = 0;

    var images = [
        'http://image.blingee.com/images18/content/output/000/000/000/78d/746967961_324309.gif',
        'http://image.blingee.com/images18/content/output/000/000/000/78d/746967961_324309.gif',
        'http://image.blingee.com/images18/content/output/000/000/000/78d/746967961_324309.gif',
        'http://image.blingee.com/images18/content/output/000/000/000/78d/746967961_324309.gif'];

    var resetAndStartGame = function () {

        $(".shells").empty();

        incrementation = 0;

        randomNumber = Math.floor(Math.random() * 90) + 30;

        $("#result").html('Score to match: ' + randomNumber);
        for (var i = 0; i < 4; i++) {

            var random = Math.floor(Math.random() * 11) + 1;
            
            var starImg = $("<img>");
            starImg.addClass("star");
            starImg.attr("data-random",random);
            starImg.attr("src", images[i]);

            // starImg.appendTo(".shells");

            // var turtleShells = $("<div>");
            //     turtleShells.attr({
            //         "class": 'turtleShells',
            //         "data-random": random
            //     });
            //     turtleShells.css({
            //         "background-image":"url('" + (images[i]) + "')",
            //         "backgrond-size":"cover"
            //     });

            $(".shells").append(starImg);
        

            $("#incrementation").html("Shells collected so far: " + incrementation);
        }
    }

    resetAndStartGame();

    $(document).on('click', ".star", function() {

        var num = parseInt($(this).attr('data-random'));

        incrementation += num;

        $("#incrementation").html("Shells collected so far: " + incrementation);

        console.log(incrementation);

        if (incrementation > randomNumber) {
            lose++;
            $("#lose").html("Loss Count = " + lose);

            incrementation = 0;

            alert("You Lost!");

            resetAndStartGame();
        }

        else if (incrementation === randomNumber){
            win++;
            $("#win").html("Win Count = " + win);

            incrementation = 0;

            alert("You saved the day!");

            resetAndStartGame();
        }
    });

});