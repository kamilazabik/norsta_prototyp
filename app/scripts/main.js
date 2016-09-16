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
console.log("slidersMemo")
console.log(slidersMemo)

function sliderSum(theSlider) {
  var childrenIds = theSlider.data('children')
  ,   result = 0;

  if(childrenIds)
  {
    $.each(childrenIds.split(','), function(idx, val) {
      if(slidersMemo) {
          var childValue = slidersMemo["rangeslider"+val];
        console.log("val");
        console.log(val);
        console.log("childValue");
        console.log(childValue);
          if(childValue)
          {
            result = result + parseInt(childValue);
            console.log("result");
            console.log(result)
          }
      }
    });
  }
  return result;

}


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
  console.log('nn ' + nn);
  var nn1 = obj[0].name.replace("allRating","");



  if(memo){ //Inicjalizacja slidera
      $.each(passObj, function (idx, val) {
        var initVal;
        if($(obj[idx]).attr('data-children') != null){
          initVal = sliderSum($(obj[idx]));
          console.log("SUMA");
          console.log(initVal);
        }
        else
        {
          initVal = memo[obj[idx].name];
          console.log(obj[0].name)
        }
        //console.log("initVal: " + initVal );
        if(!initVal)
        {
          initVal=0;
        }
        $(passObj[idx]).val(initVal);
        updateSlider(passObj[idx], null);
      });
      return;
  } else {
    //ruch myszką
    if(obj.attr('data-parent') != null){
      var parentSlider = $('input[name=allRating'+obj.attr('data-parent') +']')
        , parentVal = sliderSum(parentSlider);
          console.log("parentVal")
          console.log(parentVal)
      console.log("parentSlider")
      console.log(parentSlider)
      if(parentVal)
      {
        parentSlider.val(parentVal);
        updateSlider(parentSlider, null);
      }
    }
  }

  $('.numberValue'+nn).text(Math.round(percentage / t) + "/" + max);
  $('.numberValue-per'+nn).text(percentage + '%' );

  $('.numberValue'+ nn1).text(Math.round(percentage / t) + "/" + max);
  $('.numberValue-per'+ nn1).text(percentage + '%');


  if(!slidersMemo)
  {
    slidersMemo={};
  }
  slidersMemo[obj[0].name] = value;


  var pie = document.getElementById("pie4-1-1-1");
  var pie1 = document.getElementById("pie4-1-1-2");
  var pie2 = document.getElementById("pie4-1-1");
  // console.log('pie:' + pie);
  // var pie1 = document.getElementById("pie1");

  // var pie2 = document.getElementById("pie2");
  // console.log("pie1")
  // console.log(pie1)
  // console.log("pie2")
  // console.log(pie2)
  // // updatePie($('#pie' + nn));
  // // updatePie(pie1);
  // updatePie(pie2);
  updatePie(pie);
  updatePie(pie1);
  updatePie(pie2);

  function updatePie(pie) {
    console.log(pie.getAttribute('data-name'))
    console.log(obj[0].name)
    if(obj[0].name == pie.getAttribute('data-name')){
      console.log("tak")
      var p = percentage;
      if(!p)
      {
        p=0;
      }
      console.log('p: '+ p);
      var NS = 'http://www.w3.org/2000/svg';
      var svg = document.createElementNS(NS, 'svg');
      var circle = document.createElementNS(NS, 'circle')
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

    }



    // var p = parseFloat(pie.textContent);

  }




// function $$(selector, context) {
//   context = context || document;
//   var elements = context.querySelectorAll(selector);
//   return Array.prototype.slice.call(elements);
// }
//
//
//   $$('.pie').forEach(function(pie) {
//     console.log(pie)
//     // var p = parseFloat(pie.textContent);
//     var p = percentage;
//     console.log('p: '+ p);
//     var NS = 'http://www.w3.org/2000/svg';
//     var svg = document.createElementNS(NS, 'svg');
//     var circle = document.createElementNS(NS, 'circle')
//     // $(circle).addClass('numberValue-per-4-1-1');
//     var title = document.createElementNS(NS, 'title');
//     circle.setAttribute('r', 16);
//     circle.setAttribute('cx', 16);
//     circle.setAttribute('cy', 16);
//     circle.setAttribute('stroke-dasharray', p + ' 100');
//     svg.setAttribute('viewBox', '0 0 32 32');
//     console.log(pie.textContent);
//     title.textContent = pie.textContent;
//     pie.textContent = '';
//     svg.appendChild(title);
//     svg.appendChild(circle);
//     pie.appendChild(svg);
//   });


};
