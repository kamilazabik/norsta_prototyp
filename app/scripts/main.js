$(document).ready(function(){

    $('#a1').click(function(e) {
        e.preventDefault();
        $('#content').load('./jade/projects.html');

        // window.history.pushState(
        //     {page: 'projects'},
        //     'Projekty',
        //     '/components/projects.html'
        // );
    });

  $('#a2').click(function(e) {
    e.preventDefault();
    $('#panel-content').load('./jade/panel-content.html');
  });

  $('#a3').click(function(e) {
    e.preventDefault();
    $('#content').load('./jade/projects.html');
    $('#sidebar-wrapper').load('./jade/includes/nav-project.html');
  });

  $('.claim').click(function(e) {
    e.preventDefault();
    $('#content').load('./jade/panel-content.html');
    $('#main-panel').addClass("fixed");
  });


    $( '.panels' ).click(function() {
        // $('#list-of-claims').toggleClass('hidden show');
      $(this).siblings(':last').children($(this)).first().toggleClass('hidden show');
      console.log($(this).siblings(':last'));
        // if($("#list-of-claims").is(".hidden")){
        //   $("#list-of-claims" ).removeClass( "hidden" );
        // }else{
        //   ("#list-of-claims").addClass( "hidden" );
        // }
    });

  $('.panel-fixed, .claim').click(function() {
    $('#main-panel').addClass("fixed");
    // console.log($('.panel-fixed'));
  });



    $('.collapse.in').prev('.panel-heading').addClass('active');
    $('#accordion, #bs-collapse')
      .on('show.bs.collapse', function(a) {
        $(a.target).prev('.panel-heading').addClass('active');
      })
      .on('hide.bs.collapse', function(a) {
        $(a.target).prev('.panel-heading').removeClass('active');
      });

});


