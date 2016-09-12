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
            // console.log('prawda');
            // console.log($(value));
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


  $(".slider").rangeslider();

  $('.filter-select').on('change', function (e) {

    var filterGroup = $('.filter-group');
    filterGroup.find('.hseq').removeClass('hide');

    $('.filter-select').each(function(){
      applyFilter(filterGroup, $(this).data('filter-name'), $(this).val());
      console.log($(this).data('filter-name'));
    })


    function applyFilter(filterGroup, filterName, filterValue) {
      filterGroup.find('.hseq').each(function(index, element){
        // console.log(index);
        console.log(element);
        var testValue = $(element).data(filterName).toString();
        console.log(testValue);
        if (filterValue !== 'All' && testValue !== filterValue) {
          $(element).addClass('hide');
        }
      })
    }


  })


});

var slidersMemo;

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
  obj.attr("oninput", "updateSlider(this)");
  updateSlider(this, slidersMemo);
  return obj;
};

function updateSlider(passObj, memo) {

  var obj = $(passObj);
  var value = obj.val();
  var min = obj.attr("min");
  var max = obj.attr("max");
  // var settingValue = $(".settingValue").val();
  // var max = settingValue;
  // console.log("settingValue: " + settingValue);
  var t = 100/max;
  // var max2 = max;
  // obj.attr("max", max2);

  var range = Math.round(max - min)
  // console.log("t: " + t);
  // console.log("max: " + max);
  // console.log("max2: " + max);
  // console.log("range: " + range);
  console.log("value: " + value);
  var percentage = Math.round((value - min) * 100 / range);
  // console.log("percentage:"  + percentage)
  var nextObj = obj.next();
  nextObj.find("span.bar-btn").css("left", percentage + "%");
  nextObj.find("span.bar > span.pasek1").css("width", percentage + "%");
  nextObj.find("span.bar > span.pasek").css("width", max * t - percentage + '%' );

  var nn = obj[0].name.replace("rangeslider","");
  if(memo)
  {
    $.each(passObj, function (idx, val) {
      var memVal = memo[obj[idx].name];
      if(!memVal)
      {
        memVal=0;
      }
      console.log("idx" + idx);
      console.log(memo[obj[idx].name]);
      $(passObj[idx]).val(memVal);
      updateSlider(passObj[idx], null);
    });

    return;
  }
  $('#numberValue'+nn).text(percentage / t + "/" + max);

  if(!slidersMemo)
  {
    slidersMemo={};
  }
  // slidersMemo[obj[0].name] = value;
  slidersMemo[obj[0].name] = value;

  // console.log("slidersMemo: " + slidersMemo);

};






