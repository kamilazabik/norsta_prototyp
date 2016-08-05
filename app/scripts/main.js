$(document).ready(function(){

    $('#logo').click(function(e) {
      e.preventDefault();
      $('#content').load('./jade/main-page.html');
    });

    $('#menu-projects').click(function(e) {
        e.preventDefault();
      $('#content').load('./jade/main-panel.html', function(){
        $('#content').append('<div id="panel-content" />');
        $('#panel-content').load('./jade/main-panel-content.html', function(){
        });
      });
    });


  $('.claim-hseq-3').click(function(e) {
    e.preventDefault();
    $('#content').load('./jade/main-panel.html', function(){
      $('#content').append('<div id="panel-content" />');
      $('#panel-content').load('./jade/1-panel-content.html', function(){
      });
    });
    $('#main-panel').addClass('fixed');

  });

  $('.claim-hseq-4').click(function(e) {
    e.preventDefault();
  $('#content').load('./jade/main-panel.html', function(){
      $('#content').append('<div id="panel-content" />');
      $('#panel-content').load('./jade/4-panel-content.html', function(){
    });//end second load
  });// end first load
});


  $(function () {
    var linksContent = $('div#content div.col-md-6 > a');
    var u = $('div#content div.col-md-6').find('a');
    console.log(u);

    var linksSidebar = $('div#sidebar-wrapper ul:has(a)');
    // console.log(linksSidebar);

    $(linksContent).on('click', function (e) {

      var y = $(linksSidebar).find('a').addClass('cl');

      // console.log(y);



    });

  //   $(linksContent).on('click', function (e) {
  //
  //
  //     var clickedLink = ($(this));
  //     var arr = $.merge(clickedLink, linksSidebar);
  //     // console.log(arr);
  //     var first = clickedLink[0].className;
  //     console.log(first);
  //     var g = linksSidebar[0].className;
  //     console.log(g);
  //
  //
  //
  //
  //
  //     // function compare(){
  //       $.each(linksSidebar, function (index, value) {
  //
  //         if(value.className == !first) {
  //           value.className.substring(0, value.className.length - 6);
  //           console.log(value.className);
  //         }
  //
  //         else if(value.className == first){
  //           value.className = first + ' cl';
  //           // value.addClass('cl');
  //           console.log('ok');
  //           console.log(value.className);
  //         // }else{
  //         //   console.log('nie działa');
  //         }
  //       });
  //     // }
  //     // compare(linksSidebar);
  //
  //
  //     // function uniqueInOrder(arr) {
  //     //       var result = [];
  //     //       var first = arr[0];
  //     //       console.log(first);
  //     //
  //     //       for (var i = 0; i < arr.length; i++) {
  //     //         if (arr[i] == first) {
  //     //           console.log(arr[i]);
  //     //
  //     //
  //     //           result.push(arr[i]);
  //     //           // var u = result.splice(' ')
  //     //           result[0].className = arr[0].className + ' cl'
  //     //           var u = result[0].className;
  //     //
  //     //         }
  //     //       }
  //     //
  //     //       return u
  //     //
  //     // }
  //
  //      // console.log(uniqueInOrder(arr));
  //
  //     // var t = arr.map(function (i, v) {
  //     //   var a = [];
  //     //   if(v == v){
  //     //     a.push(v);
  //     //   }
  //     //   return a;
  //     // });
  //
  //
  //
  //
  //
  // });

      // $.each(arr, function (index, value) {
      //   console.log(value);
      //
      //   if(value == first){
      //     console.log('coś');
      //   }else{
      //     console.log('nie działa');
      //   }
      //
      // })




    //        function uniqueInOrder(arr) {
    //     var result = [];
    //     var last = arr[0];
    //     console.log(last);
    //
    //     for (var i = 0; i < arr.length; i++) {
    //       if (arr[i] !== last) {
    //         result.push(last = arr[i])
    //       }
    //     }
    //
    //     return result
    //   }
    //   var a = function uniqueInOrder(arr)
    //   console.log(a);
    //
    });


    // addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');



    // // $('div#sidebar-wrapper li ul > li').hide();
    // $('div#sidebar-wrapper li.parent_li > span').on('click', function (e) {
    //   var children = $(this).parent('li.parent_li').find(' > ul > li');
    //   // console.log(children);
    //   if (children.is(':visible')) {
    //     children.hide('fast');
    //     $(this).attr('title', 'Expand this branch').find(' > i').toggleClass('glyphicon-chevron-down glyphicon-chevron-right');
    //     // console.log($(this));
    //   } else {
    //     children.show('fast');
    //     $(this).attr('title', 'Collapse this branch').find(' > i').toggleClass('glyphicon-chevron-right glyphicon-chevron-down');
    //   }
    //   e.stopPropagation();
    // });
  // });











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


});
