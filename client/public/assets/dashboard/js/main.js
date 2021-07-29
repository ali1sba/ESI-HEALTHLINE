(function($) {

    "use strict";

    var fullHeight = function() {

        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function() {
            $('.js-fullheight').css('height', $(window).height());
        });

    };
    fullHeight();

    $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');


    });

})(jQuery);
/*navbar dm */
// function sortList(main) {
//     var main= document.getElementById(patientlist);
  
//     Array.from(main.getElementsByClassName("leaderboard__name"))
//       .sort((a, b) => a.textContent.localeCompare(b.textContent))
//       .forEach( => ul.appendChild(li));
//   }
  
//   sortList("patientlist");
  
