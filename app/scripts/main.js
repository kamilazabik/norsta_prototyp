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

  $('.claim-hseq-4-1-1-3').click(function(e) {
    e.preventDefault();
    $('#content').load('./jade/main-panel.html', function(){
      $('#content').append('<div id="panel-content" />');
      $('#panel-content').load('./jade/4-1-1-3-panel-content.html', function(){
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
var sum;
var per;

console.log(slidersMemo);

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
  console.log(obj);
  var value = obj.val();
  console.log("value: " + value);
  var min = obj.attr("min");
  var max = obj.attr("max");
  var t = 100/max;

  var range = Math.round(max - min);
  var percentage = Math.round((value - min) * 100 / range);
  var nextObj = obj.next();
  nextObj.find("span.bar-btn").css("left", percentage + "%");
  nextObj.find("span.bar > span.pasek1").css("width", percentage + "%");
  nextObj.find("span.bar > span.pasek").css("width", max * t - percentage + '%' );

  var nn = obj[0].name.replace("rangeslider","");
  var nn1 = obj[0].name.replace("slider","");
  var nn2 = obj[0].name.replace("allRating","");
  console.log("nn2: "  + nn2);


  if(memo){
    if(obj.attr('data-children') != null){

      console.log("mam attr children");

      $.each(passObj, function (idx, val) {
        // var memVal = memo[obj[idx].name];
        var memVal = sum;
        if(!memVal)
        {
          memVal=0;
        }
        $(passObj[idx]).val(memVal);
        updateSlider(passObj[idx], sum);
        // obj.disabled = true;
      });
    }else {
      $.each(passObj, function (idx, val) {
        var memVal = memo[obj[idx].name];
        console.log("memValue: " + memVal );
        if(!memVal)
        {
          memVal=0;
        }
        $(passObj[idx]).val(memVal);
        updateSlider(passObj[idx], null);
      });
      return;
      }
  }

  // if(obj.attr('data-children') != null){
  //
  //   console.log("mam attr children");
  //
  //   $.each(passObj, function (idx, val) {
  //     // var memVal = memo[obj[idx].name];
  //     var memVal = sum;
  //     if(!memVal)
  //     {
  //       memVal=0;
  //     }
  //     $(passObj[idx]).val(memVal);
  //     updateSlider(passObj[idx], sum);
  //     // obj.disabled = true;
  //   });
  // }
  //
  // else if(memo){
  //   $.each(passObj, function (idx, val) {
  //     var memVal = memo[obj[idx].name];
  //     console.log("memValue: " + memVal )
  //     if(!memVal)
  //     {
  //       memVal=0;
  //     }
  //     $(passObj[idx]).val(memVal);
  //     updateSlider(passObj[idx], sum);
  //   });
  //   return;
  // }

  $('.numberValue-4-1-'+ nn).text(percentage / t + "/" + max);
  $('.numberValue-4-1-1-'+ nn1).text(percentage / t + "/" + max);
  $('.numberValue-all-4-1-1'+ nn2).text(percentage / t + "/" + max);

  // $('.numberValue-per-4-1-'+ nn).text(percentage + '%');
  per = percentage + '%';
  console.log('per: ' + per)



  if(!slidersMemo)
  {
    slidersMemo={};
  }
  slidersMemo[obj[0].name] = value;


  // console.log("slidersMemo: " + slidersMemo);
 sum = Object.keys(slidersMemo)
    .filter(function (key) {
      if (key.length == 7)  {
        return slidersMemo[key];
    }
  }).map(function (key) {
    return parseInt(slidersMemo[key]);
  }).reduce(function(a, b, index) {
    return a + b; }, 0);

  console.log("sum: " + sum);


};



// var vals = Object.keys(slidersMemo).map(function (key) {
//   return slidersMemo[key];
// });
//
// console.log(vals);

function $$(selector, context) {
  context = context || document;
  var elements = context.querySelectorAll(selector);
  return Array.prototype.slice.call(elements);
}

$$('.pie').forEach(function(pie) {
  // var p = parseFloat(pie.textContent);
  var p = per;
  console.log('per: '+ per);
  var NS = 'http://www.w3.org/2000/svg';
  var svg = document.createElementNS(NS, 'svg');
  var circle = document.createElementNS(NS, 'circle');
  var title = document.createElementNS(NS, 'title');
  circle.setAttribute('r', 16);
  circle.setAttribute('cx', 16);
  circle.setAttribute('cy', 16);
  circle.setAttribute('stroke-dasharray', p + ' 100');
  svg.setAttribute('viewBox', '0 0 32 32');
  title.textContent = pie.textContent;
  pie.textContent = '';
  svg.appendChild(title);
  svg.appendChild(circle);
  pie.appendChild(svg);
});

