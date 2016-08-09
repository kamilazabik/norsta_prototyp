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
    });
  });
});

  $('.claim-hseq-4-1').click(function(e) {
    e.preventDefault();
    $('#content').load('./jade/main-panel.html', function(){
      $('#content').append('<div id="panel-content" />');
      $('#panel-content').load('./jade/4.1-panel-content.html', function(){
      });
    });
  });

  $('.claim-hseq-4-1-1').click(function(e) {
    e.preventDefault();
    $('#content').load('./jade/main-panel.html', function(){
      $('#content').append('<div id="panel-content" />');
      $('#panel-content').load('./jade/4-1-1-panel-content.html', function(){
      });
    });
  });

  $('.claim-hseq-4-1-1-1').click(function(e) {
    e.preventDefault();
    $('#content').load('./jade/main-panel.html', function(){
      $('#content').append('<div id="panel-content" />');
      $('#panel-content').load('./jade/4-1-1-1-panel-content.html', function(){
      });
    });
  });

  $(function () {
    var linksContent = $('div#content div.col-md-6').find('a');
    var linksSidebar = $('div#sidebar-wrapper ul').find('a');

    $(linksContent).on('click', function (e) {
      console.log('1');
      $(linksSidebar).removeClass('red');
      var clickedLink = $(this);
      $.each(linksSidebar, function (index, value) {
        // console.log(value);
        if($(value).text().indexOf(clickedLink.text().trim())>=0){
          $(value).addClass('red');
        }
      });
      e.stopPropagation();
    });

    $('#menu-projects').on('click', function (e) {
      console.log('2');
      $(linksSidebar).removeClass('red');
      e.stopPropagation();
    });

    $(linksSidebar).on('click', function (e) {
      console.log('3');
      console.log(linksSidebar);
      console.log($(this));
      $(linksSidebar).removeClass('red');
      $(this).addClass('red');
      e.stopPropagation();
    })

  });

  function ratingEnable() {
    var barRating = $('#example-movie');
    $(barRating).barrating('show', {
      theme: 'bars-movie'
    });

    $(barRating).barrating('set', '2');
    //
    // var minVal = 1;
    // var maxVal = 10;
    // console.log(barRating);
    // // var barElements = $('#example-movie');
    // // $(barRating).empty();
    // for(var i=minVal; i<=maxVal; i++)
    // {
    //   $(barRating).append($("<option>").attr('value',i).text(i));
    // }
    // // $(barRating + ' option:eq(0)').prop('selected', true);
    // // function setValue


    function build() {

      var minVal = 1;
      var maxVal = 10;
      console.log(barRating);
      // var barElements = $('#example-movie');
      // $(barRating).empty();
      for(var i=minVal; i<=maxVal; i++)
      {
        $(barRating).append($("<option>").attr('value',i).text(i));
      }
      // $(barRating + ' option:eq(0)').prop('selected', true);
      // function setValue


      var $w = $('<div />', { 'class': 'br-widget' });

      // create A elements that will replace OPTIONs
      $(barRating).find('option').each(function() {
        var val, text, html, $a;

        // val = $(this).val();
        val = $(this).val();

        // create ratings - but only if val is defined
        if (val) {
          text = $(this).text();
          html = $(this).data('html');
          if (html) { text = html; }

          $a = $('<a />', {
            'href': '#',
            'data-rating-value': val,
            'data-rating-text': text,
            'html': ($(barRating).showValues) ? text : ''
          });

          $w.append($a);
        }
      });
    }
    build();

  }


  ratingEnable();

  $(function(){

    var minVal = 1;
    var maxVal = 10;
    var barElements = $('#example-movie');


    $('.spinner .btn:first-of-type').on('click', function() {
      var btn = $(this);
      var input = btn.closest('.spinner').find('input');
      $(barElements).empty();
      if (input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max'))) {
        input.val(parseInt(input.val(), 10) + 1);
      } else {
        btn.next("disabled", true);
      }
    });
    $('.spinner .btn:last-of-type').on('click', function() {
      var btn = $(this);
      var input = btn.closest('.spinner').find('input');
      if (input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min'))) {
        input.val(parseInt(input.val(), 10) - 1);
      } else {
        btn.prev("disabled", true);
      }
    });

  });




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
