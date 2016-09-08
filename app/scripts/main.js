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
      // console.log('1');
      $(linksSidebar).removeClass('red');
      var clickedLink = $(this);
      $.each(linksSidebar, function (index, value) {
        // console.log(value);
        if($(value).text().indexOf(clickedLink.text().trim())>=0){
          $(value).addClass('red');
          if($(value).is(':hidden')){
            // var children = $(value).parents();
            // var siblings2 = $(value).parent('li').nextAll().prevAll();
            var siblings = $(value).parents('li').nextAll().prevAll();

            // children.show('fast');
            // siblings2.show('fast');
            siblings.show('fast');
            // $(value).show(fast);
            console.log('prawda');
            console.log($(value));
          }else {
            // children.hide('fast');
          }
          // console.log(value);
          // $(value).show();
        }

      });
      e.stopPropagation();
    });

    $('#menu-projects').on('click', function (e) {
      // console.log('2');
      $(linksSidebar).removeClass('red');
      e.stopPropagation();
    });

    $(linksSidebar).on('click', function (e) {
      // console.log('3');
      // console.log(linksSidebar);
      // console.log($(this));
      $(linksSidebar).removeClass('red');
      $(this).addClass('red');
      e.stopPropagation();
    })

  });




//   A WAY TO GRAPHICALLY REPRESENT A RATING VARIABLE (AN INTEGER, FROM 0 TO 100).
// JUST USE LIKE SO:  updateIt(startValue);   WHERE 'startValue' IS A VALID INTEGER

//     var startValue = 50;
//     // $('#starsBar2').css('width', '0px');
//
//     var fullWidth = $('#starWrapper').css('width').replace('px', '');
//
//     function updateIt(updateval) {
//       if (updateval) {
//         $('.numValue').val(updateval);
//         // console.log(parseInt(fullWidth) * (updateval / 5000));
//         // $('#starsBar2').css('width', parseInt(fullWidth) * (updateval / 5000) * 20 + '%');
//       };
//
//       // $('#starsBar2').css('background-size', fullWidth + ' 100%');
//       updateval = '';
//     };
//
//
//     $('input[type=range]').mousemove(function () {
//       updateIt($(this).val());
//     });
//
//     $('.numValue').keyup(function () {
//       updateIt($('.numValue').val());
//     });
//
//     $('input[type=range]').change(function () {
//       $('.numValue').val($(this).val());
//       updateIt($('.numValue').val());
//     });
//
//     updateIt(startValue);
//
//
//
});



$("document").ready(function() {
  $(".slider").rangeslider();
});

$.fn.rangeslider = function(options) {
  var obj = this;
  var defautValue = obj.attr("value");
  obj.wrap("<span class='range-slider'></span>");
  obj.after("<span class='slider-container'>" +
    "<span class='bar'>" +
    "<span class='pasek1'></span>" +
      "<span class ='pasek'></span>" +
    "</span><span class='bar-btn'>" +
    // "<span>0</span>" +
    "</span></span>");
  // obj.after("<span class='slider-container'><span class='bar'><span></span></span><span class='bar-btn'><span>0</span></span></span>");
  obj.attr("oninput", "updateSlider(this)");
  updateSlider(this);
  return obj;
};


function updateSlider(passObj) {
  var obj = $(passObj);

  var min = obj.attr("min");
  var max = obj.attr("max");
  var t = 100/max;
  var max2 = max * t;
  obj.attr("max", max2);
  var value = obj.val() * t;
  var range = Math.round(max - min) * t;
  console.log("t: " + t);
  console.log("max: " + max);
  console.log("max2: " + max);
  console.log("range: " + range);
  console.log("value: " + value);
  // var percentage = Math.round((value - min) * 100 / range);
  var percentage = Math.round((value - min));
  console.log("percentage:"  + percentage)
  var nextObj = obj.next();
  nextObj.find("span.bar-btn").css("left", percentage + "%");
  // nextObj.find("span.pasek").css("right", max);
  // nextObj.find("span.pasek").css("left", value);
  // $('span.pasek').css("left", value + "%").
  // console.log(t);

  nextObj.find("span.bar > span.pasek1").css("width", percentage + "%");
  nextObj.find("span.bar > span.pasek").css("width", max - percentage + '%' );
  // nextObj.find("span.bar > span.pasek2").css("width", value + "%");
  // nextObj.find("span.bar-btn > span").text(percentage);
  $('.numValue').val(percentage);
  $('.numberValue').text(percentage);
};



