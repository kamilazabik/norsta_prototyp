$(document).ready(function(){
$('#menu-toggle').click(function(e) {
  e.preventDefault();
  $('#wrapper').toggleClass('toggled');
});
$('#menu-toggle-2').click(function(e) {
  e.preventDefault();
  $('#wrapper').toggleClass('toggled-2');
  // $('#menu ul').hide();
});



// function initMenu() {
//   $('#menu ul').hide();
//   $('#menu ul').children('.current').parent().show();
//   //$('#menu ul:first').show();
//   $('#menu li a').click(
//     function() {
//       var checkElement = $(this).next();
//       if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
//         return false;
//       }
//       if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
//         $('#menu ul:visible').slideUp('normal');
//         checkElement.slideDown('normal');
//         return false;
//       }
//     }
//   );
// }

    $(function () {
        $('div#sidebar-wrapper li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
        $('div#sidebar-wrapper li.parent_li > span').on('click', function (e) {
            var children = $(this).parent('li.parent_li').find(' > ul > li');
            if (children.is(':visible')) {
                children.hide('fast');
                $(this).attr('title', 'Expand this branch').find(' > i').toggleClass('glyphicon-chevron-down glyphicon-chevron-right');
            } else if(!children.is(':visible')) {
                children.show('fast');
                $(this).attr('title', 'Collapse this branch').find(' > i').toggleClass('glyphicon-chevron-right glyphicon-chevron-down');
            }
            e.stopPropagation();
        });
    });




// $(document).ready(function() {initMenu();});
});
