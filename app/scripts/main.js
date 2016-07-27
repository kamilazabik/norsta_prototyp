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
    // window.history.pushState(
    //     {page: 'projects'},
    //     'Projekty',
    //     '/components/projects.html'
    // );
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





});


