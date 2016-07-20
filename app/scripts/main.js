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

    $( '#panel' ).click(function() {
        $('#list-of-claims').toggleClass('hidden show');
        // if($("#list-of-claims").is(".hidden")){
        //   $("#list-of-claims" ).removeClass( "hidden" );
        // }else{
        //   ("#list-of-claims").addClass( "hidden" );
        // }
    });




});
