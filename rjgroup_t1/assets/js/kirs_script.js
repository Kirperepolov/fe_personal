'use strict';

$(function () {
  $("#call-back input").not("[type=submit]").jqBootstrapValidation({
    preventSubmit: true, //prevents form submission before it is validated
    submitSuccess: function ($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var name = $("#call-back input#name").val();
      var phone = $("#call-back input#phone").val();
      // the path to the executable *.php mail script
      let path = "././mail/contact_me_kir.php";

      $.ajax({
            url: path,
            type: "POST",
            data: {
                name: name,
                phone: phone
            },
            cache: false,
            success: function() {
                // hide the form
                $('#call-back').modal('hide');
                //show the confirmation message
                $('#confirmation h4').text('The Callback is successfully requested');
                $('#confirmation').modal('show');

                //clear all fields
                $('#call-back form').trigger("reset");
            },
            error: function() {
                // hide the form
                $('#call-back').modal('hide');
                // show the allert message
                $('#confirmation h4').text('The Callback cannot be requested right now');
                $('#confirmation').modal('show');
                //clear all fields
                $('#call-back form').trigger("reset");
            },
        })
    },
  });
} );

/**
 * validateInput - this function just validates that the input fields are
 *              not empty. Afte they are filled with information it makes
 *              the submit button active;
 *
 */
function validateInput(){
  if (($("#call-back input#name").val().trim().length === 0)||
   ($("#call-back input#phone").val().length<9)) {
                        return;
  } else {
    $("#call-back button").attr({
                                // "data-dismiss":'modal',
                                // "data-toggle":"modal",
                                "data-target":"#confirmation"
                              });
  };
};

$("#call-back input#name").focusout(validateInput)
                          .keyup(validateInput);
$('#call-back input#phone').keyup(validateInput);

// a gint for users to type the phone number correctly
$('#call-back input#phone').focus(function(){
  if (!$('#call-back input#phone').val()){
    $('#call-back input#phone').val(380);
  };
});
