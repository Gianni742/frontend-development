/*
* Shorthand:
*  $ = document.querySelector
*  $$ = document.querySelectorAll
 */


// Shorthand for $( document ).ready()
$(function() {
    console.log( "ready!" );

    // disable image dragging:
    $("img").mousedown(function(e){
        e.preventDefault();
    });

    const hamburgerIcon = document.querySelector('#hb_menu');
    const navMenu = document.querySelector('.nav-container');
    const navItems = document.getElementsByClassName("nav-link");

    $(hamburgerIcon).click(function() {
        $(this).toggleClass(function(){
            return $(this).is('.rotateRight') ? 'rotateLeft' : 'rotateRight';
        })

        $(navMenu).slideToggle('medium', function() {
            if ($(this).is(':visible'))
                $(this).css('display','flex');
        });
    });

    function scrollToSection(id){
        // get the hash of the selected nav item and set the scrollposition to that item.
        // @param example: hash:  "#my-work"
        let section_id = $(navItems[id].hash);
        // ease the speed for #contact div:
        let speed = (navItems[id].hash !== "#contact") ? "slow" : 1100;
        $('html,body').animate({scrollTop: section_id.offset().top}, speed);
    }

    $(navItems).click(function() {
        // Jquery index: returns the id the of the clicked item.
        let clickedItem = $(navItems).index(this);
        console.log(clickedItem);
        scrollToSection(clickedItem);
    });

    var header_expand_toggler = document.querySelector('.section-header__expander');
    $('.section-body').addClass("hide");
    var isExpanded = false;

    $(header_expand_toggler).on('click',function() {
        // https://api.jquery.com/toggle/
        $('.section-body').slideToggle(1000, false, function() {
                if (isExpanded) {
                    $('.section-body').addClass("hide");
                    $(header_expand_toggler).removeClass("flip-vertical");
                    isExpanded = false;
                }
                else {
                    $( ".section-body" ).fadeTo( "slow" , 1, function() {
                        $('.section-body').removeClass("hide");
                        $(".section-body").css("display", "grid");
                        $(header_expand_toggler).addClass("flip-vertical");
                        isExpanded = true;
                    });
                }
        });
    });
});

