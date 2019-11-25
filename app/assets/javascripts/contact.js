$(document).on('turbolinks:load', function () {

    var invalidResponse = function(){
      $('.errorContent').fadeIn(1000);
      $('.successContent').fadeOut(10);
    };
    var validResponse = function(){
      $('.successContent').fadeIn(1000);
      $('.errorContent').fadeOut(10);
      $('#new_contact')[0].reset();
    };

    $("#new_contact").validate({
      ignore: []
    });

    $('#contact_email').rules('add', {
      email: true
    });

    $('#new_contact').on('ajax:complete', function(data, status, xhr){
      var status = xhr;
      if(status == 'success'){
        validResponse();
      }else{
        invalidResponse();
      }
    }).on('ajax:error', function(e, xhr, status, error){
      invalidResponse();
    });
});