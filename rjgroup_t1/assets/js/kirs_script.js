'use strict';

/**
 * validateInput - this function just validates that the input fields are
 *              not empty. Afte they are filled with information it makes
 *              the submit button active;
 *
 */
function validateInput(){
  if ($("#call-back input#name").val().trim().length === 0){
    $('#incorrect-data').text("You must type in Your name")
                        .removeClass('hidden');
                        return;
  } else if ($("#call-back input#phone").val().length<9) {
    $('#incorrect-data').text('You must type in Your phone number')
                        .removeClass('hidden');
                        return;
  } else {
    // hide the error message
    $('#incorrect-data').text('')
                        .addClass('hidden');
    // this makes the button usable
    $("#call-back button").attr({
                                "data-dismiss":'modal',
                                "data-toggle":"modal",
                                "data-target":"#confirmation",
                                form:"call-back-form"
                              });
  }
};

$("#call-back input#name").focusout(validateInput)
                          .keyup(validateInput);
$('#call-back input#phone').keyup(validateInput);
