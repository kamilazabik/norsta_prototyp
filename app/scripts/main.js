$(document).ready(function(){

    $('#menu-projects').click(function(e) {
        e.preventDefault();
        $('#content').load('./jade/projects.html');

        // window.history.pushState(
        //     {page: 'projects'},
        //     'Projekty',
        //     '/components/projects.html'
        // );
    });

  // $('#nav-left-hseq').click(function(e) {
  //   e.preventDefault();
  //   $('#content').load('./jade/projects.html');
  //   $('#main-panel').addClass('fixed');
  //   // $('#sidebar-wrapper').load('./jade/includes/nav-project.html');
  // });

  $('#3').click(function(e) {
    e.preventDefault();
    // $('#content').load('./jade/main-panel.html');
    $('#panel-content').load('./jade/panel-content.html');
  });

  $('#4').click(function(e) {
    e.preventDefault();
    $('#panel-content').load('./jade/panel-content-1.html');
    $('#main-panel').addClass('fixed');
    // $('#sidebar-wrapper').load('./jade/includes/nav-project.html');
  });


  $('#claim-hseq').click(function(e) {
    e.preventDefault();
    $('#panel-content').load('./jade/projects.html');
    $('#main-panel').addClass('fixed');
  });

  $('#claim-hseq-3').click(function(e) {
    e.preventDefault();
    $('#panel-content').load('./jade/panel-content.html');
    $('#main-panel').addClass('fixed');
  });

  $('#claim-hseq-4').click(function(e) {
    e.preventDefault();
    $('#content').load('./jade/projects.html');
    $('#main-panel').load('./jade/main-panel.html');
    $('#panel-content').load('./jade/panel-content-1.html');

  });


  //   $( '.panels' ).click(function() {
  //       // $('#list-of-claims').toggleClass('hidden show');
  //     $(this).siblings(':last').children($(this)).first().toggleClass('hidden show');
  //     console.log($(this).siblings(':last'));
  //       // if($("#list-of-claims").is(".hidden")){
  //       //   $("#list-of-claims" ).removeClass( "hidden" );
  //       // }else{
  //       //   ("#list-of-claims").addClass( "hidden" );
  //       // }
  //   });
  //
  $('.panel-fixed, .claim').click(function() {
    $('#main-panel').addClass('fixed');
    // console.log($('.panel-fixed'));
  });


  $(function () {
    $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
    $('.tree li.parent_li > span').on('click', function (e) {
      var children = $(this).parent('li.parent_li').find(' > ul > li');
      if (children.is(':visible')) {
        children.hide('fast');
        $(this).attr('title', 'Expand this branch').find(' > i').toggleClass('glyphicon-chevron-down glyphicon-chevron-right');
      } else {
        children.show('fast');
        $(this).attr('title', 'Collapse this branch').find(' > i').toggleClass('glyphicon-chevron-right glyphicon-chevron-down');
      }
      e.stopPropagation();
    });
  });




    // $('.collapse.in').prev('.panel-heading').addClass('active');
    // $('#accordion, #bs-collapse')
    //   .on('show.bs.collapse', function(a) {
    //     $(a.target).prev('.panel-heading').addClass('active');
    //   })
    //   .on('hide.bs.collapse', function(a) {
    //     $(a.target).prev('.panel-heading').removeClass('active');
    //   });


/**
 *  BootTree Treeview plugin for Bootstrap.
 *
 *  Based on BootSnipp TreeView Example by Sean Wessell
 *  URL:	http://bootsnipp.com/snippets/featured/bootstrap-30-treeview
 *
 *	Revised code by Leo "LeoV117" Myers
 *
 */
// $.fn.extend({
//   treeview:	function() {
//     return this.each(function() {
//       // Initialize the top levels;
//       var tree = $(this);
//
//       tree.addClass('treeview-tree');
//       tree.find('li').each(function() {
//         var stick = $(this);
//       });
//       tree.find('li').has('ul').each(function () {
//         var branch = $(this); //li with children ul
//         // console.log(branch);
//
//         branch.prepend('<i class=\'tree-indicator glyphicon glyphicon-chevron-right\'></i>');
//         branch.addClass('tree-branch');
//         branch.on('click', function (e) {
//           if (this == e.target) {
//             var icon = $(this).children('i:first');
//             console.log(icon);
//
//             icon.toggleClass('glyphicon-chevron-down glyphicon-chevron-right');
//             $(this).children().children().toggle();
//             // console.log($(this));
//           }
//         });
//         branch.children().children().toggle();
//
//         /**
//          *	The following snippet of code enables the treeview to
//          *	function when a button, indicator or anchor is clicked.
//          *
//          *	It also prevents the default function of an anchor and
//          *	a button from firing.
//          */
//         branch.children('.tree-indicator, button, a').click(function(e) {
//           branch.click();
//
//           e.preventDefault();
//         });
//       });
//     });
//   }
// });

/**
 *	The following snippet of code automatically converst
 *	any '.treeview' DOM elements into a treeview component.
 */
// $(window).on('load', function () {
//   $('.treeview').each(function () {
//     var tree = $(this);
//     tree.treeview();
//   })
// });


  // $(function () {
  //   $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
  //   $('.tree li.parent_li > span').on('click', function (e) {
  //     var children = $(this).parent('li.parent_li').find(' > ul > li');
  //     if (children.hasClass("hidden")) {
  //       children.removeClass('hidden')
  //       children.show('fast');
  //       $(this).attr('title', 'Collapse this branch').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
  //     } else {
  //       children.addClass('hidden');
  //       // children.hide('fast');
  //       $(this).attr('title', 'Expand this branch').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
  //
  //     }
  //     e.stopPropagation();
  //   });
  // });

});
