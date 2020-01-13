<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Les 4 Jquery</title>
    <link rel="stylesheet" href="style.css" type="text/css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>


<!--    Small gamble game made to practice Jquery functions. -->

    <script>
        $(document).ready(function(){

            var clrArray = ["blue", "green", "cyan", "purple"];
            // var clrArray2 = ["blue", "green", "red", "magenta", "yellow", "cyan", "lime", "orange", "purple"];

            // add css to button:
            // Gets the number of elements with class yourClass
            var numItems = $('.colorBlocks').length;
            var comparisonArray = [];

            for (var i = 0; i <= numItems; i++) {
                // return the idx of the key int between 1 and clrArray.length
                var randomValue = clrArray[Math.floor(Math.random()*clrArray.length)];
                if(i === 0){}
                else{
                    $("#block" + i).css("background-color", randomValue);
                    $("#block" + i).append("Your color is " + randomValue);
                    comparisonArray.push(randomValue);
                }
            }

            // when submitButton is clicked:
            $("#submitColors").click(function(){
                $("#block1").fadeIn();
                $("#submitColors").hide();
                $("#block2").fadeIn("slow");
                $("#block3").fadeIn(3000);
                $("#retryButton").fadeIn(4000);

                // check for winner:
                    let firstEntry = comparisonArray[0];
                    console.log(firstEntry);

                    if((firstEntry == comparisonArray[1]) && (firstEntry == comparisonArray[comparisonArray.length-1])){
                        $("#win-message").show();
                        document.getElementById("retryButton").innerHTML = "Congratulations! try again.";
                    }
                    else{
                        document.getElementById("retryButton").innerHTML = "Bad luck! try again.";
                    }


            });
            // if retrybutton is clicked:
            $("#retryButton").click(function(){
                location.reload();
            });
        });

    </script>
</head>
<body>

<p>
<div class="heading">
    <h3 class="colortitle"> Test your luck try to get 3 of the same colors </h3>
    <button type="submit" id="submitColors">Submit colors</button>
    <button type="submit" id="retryButton">Try again!</button>
</div>
</p>

<div id="colorList">
    <div id="block1" class="colorBlocks"><p></p></div>
    <div  id="block2" class="colorBlocks"><p></p></div>
    <div  id="block3" class="colorBlocks"><p></p></div>
</div>

<h1 id="win-message">You win! 🤑 </h1>

</body>
</html>