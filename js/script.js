console.log("connected");



$(document).ready(function () {
    // hide and show of sideNav icons
    $('#openNav').click(function () {
        $('#openNav').hide();
        $('#closeNav').show();
    });
    $('#closeNav').click(function () {
        $('#closeNav').hide();
        $('#openNav').show();
    });





    // ---------- side navigation

    function openNav() {
        document.getElementById('myNav').style.width = '200px';
    }

    function closeNav() {
        document.getElementById('myNav').style.width = '0';
    }


    document.getElementById('openNav').addEventListener("click", function () {
        openNav();
    });

    document.getElementById('closeNav').addEventListener("click", function () {
        closeNav();
    });




    // ----------- Countdown Timer 

    // Set the date we're counting down to
    var countDownDate = new Date("July 4, 2019 00:00:00").getTime();

    // Update the count down every 1 second
    var countdownfunction = setInterval(function () {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById('countdown').innerHTML = days + 'd ' + hours + 'h '
            + minutes + 'm ' + seconds + 's ';

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(countdownfunction);
            document.getElementById('countdown').innerHTML = 'Showing Now on Netflix!';
        }
    }, 1000);




    // ------------  back to top button

    // When the user scrolls down 20px from the top of the document, show the button
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 20) {
            $('.myBtn').fadeIn(200);
        } else {
            $('.myBtn').fadeOut(200);
        }
    });


    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        //window.scrollBy(0, 20);
    }

    document.getElementById('topFunction').addEventListener('click', function () {
        topFunction();
    });


}); // end of document.ready
