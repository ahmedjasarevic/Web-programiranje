$(document).ready(function() {
    $('#submit-button').click(function(e) {
      e.preventDefault();  // prevent the form from being submitted
  
      var formData = $('#form').serialize();  // get the form data as a string
  
      // make an AJAX POST request to the server
      $.ajax({
        type: 'POST',
        url: 'http://localhost:8085',
        data: formData,
        success: function(response) {
          // display the response on the page
          $('#response').html(response);
        }
      });
    });
  });
  