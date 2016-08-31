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

  $('.claim-hseq-4-1-2').click(function(e) {
    e.preventDefault();
    $('#content').load('./jade/main-panel.html', function(){
      $('#content').append('<div id="panel-content" />');
      $('#panel-content').load('./jade/4-1-2-panel-content.html', function(){
      });
    });
  });

  $('.claim-hseq-4-1-3').click(function(e) {
    e.preventDefault();
    $('#content').load('./jade/main-panel.html', function(){
      $('#content').append('<div id="panel-content" />');
      $('#panel-content').load('./jade/4-1-3-panel-content.html', function(){
      });
    });
  });

  $('.claim-hseq-4-1-4').click(function(e) {
    e.preventDefault();
    $('#content').load('./jade/main-panel.html', function(){
      $('#content').append('<div id="panel-content" />');
      $('#panel-content').load('./jade/4-1-4-panel-content.html', function(){
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

    console.log(barRating);

    function build() {
      var minVal = 3;
      $('.up').on('click', function () {
        var maxVal = $('.form-control').val();
        console.log(maxVal);
        $('#example-movie').append($("<option>").attr('value', maxVal).text(maxVal));
        var $w = $('<div />', {'class': 'br-widget'});

        // for (var i = minVal; i <= maxVal; i++) {
        //
        //   // var $w = $('<div />', { 'class': 'br-widget' });
        // }

      });
    }
      function buildWidget() {
        var $w = $('<div />', {'class': 'br-widget'});
        console.log($w);

        // create A elements that will replace OPTIONs
        $('#example-movie').find('option').each(function () {
          var val, text, html, $a;




          $('.up').on('click', function () {
            val = $(this).val();
            console.log(val);
            // create ratings - but only if val is defined
            if (val) {
              text = $(this).text();
              html = $(this).data('html');
              if (html) {
                text = html;
              }

              $a = $('<a />', {
                'href': '#',
                'data-rating-value': val,
                'data-rating-text': text,
                'html': text
              });

              $w.append($a);
              // $w.append($('<div />').text('dupa'));
              // $('div.br-widget').append($('<div />').text('dupa'));
              $('div.br-widget').append($a);
            }
          })
        });
      }
    buildWidget();


    build();
  }

  ratingEnable();

  $(function(){

    // var minVal = 1;
    // var maxVal = 10;
    // var barElements = $('#example-movie');


    $('.spinner .btn:first-of-type').on('click', function() {
      // var maxVal = $('.form-control').val();
      // console.log(maxVal);
      // $('select').append($("<option>").attr('value', maxVal).text(maxVal + 'fff'));
      var btn = $(this);
      var input = btn.closest('.spinner').find('input');
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



  // A WAY TO GRAPHICALLY REPRESENT A RATING VARIABLE (AN INTEGER, FROM 0 TO 100).
// JUST USE LIKE SO:  updateIt(startValue);   WHERE 'startValue' IS A VALID INTEGER

    var startValue = 50;
    $('#starsBar2').css('width', '0px');

    var fullWidth = $('#starWrapper').css('width').replace('px', '');

    function updateIt(updateval) {
      if (updateval) {
        $('.numValue').val(updateval);
        console.log(parseInt(fullWidth) * (updateval / 5000));
        $('#starsBar2').css('width', parseInt(fullWidth) * (updateval / 5000) * 20 + '%');
      };

      $('#starsBar2').css('background-size', fullWidth + ' 100%');
      updateval = '';
    };


    $('input[type=range]').mousemove(function () {
      updateIt($(this).val());
    });

    $('.numValue').keyup(function () {
      updateIt($('.numValue').val());
    });

    $('input[type=range]').change(function () {
      $('.numValue').val($(this).val())
      updateIt($('.numValue').val());
    });

    updateIt(startValue);




});
