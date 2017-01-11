'use strict';

$(function () {
  $("input").not("[type=submit]").jqBootstrapValidation({
    preventSubmit: true
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
                                "data-dismiss":'modal',
                                "data-toggle":"modal",
                                "data-target":"#confirmation",
                                form:"call-back-form"
                              });
  }
};
$('#call-back input#phone').focus(function(){
  if (!$('#call-back input#phone').val()){
    $('#call-back input#phone').val(380);
  };
});

$("#call-back input#name").focusout(validateInput)
                          .keyup(validateInput);
$('#call-back input#phone').keyup(validateInput);
