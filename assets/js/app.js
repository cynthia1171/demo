$(document).ready(() => {
    $('#valid').hide();
  /* se le da el formato mm/aaaa a la fecha al momento de escribirla */
  $('#exp').mask('00/0000');

/*
*validación tarjeta utilizando api
*/
  $('#cn').keyup(function(){
    if (CARD.validLuhn($('#cn').val()) === true && CARD.validTypeCard($('#cn').val()) === 'mastercard' && CARD.validateLength($('#cn').val()) === 'mastercard'){
      $('#mastercard').show();
      $('#visa').hide();
      $('#amex').hide();
      $('#cn').attr('class', 'valid');
      $('#statusCard').attr('data-success', 'Número de tarjeta Válido');
    } if (CARD.validLuhn($('#cn').val()) === true && CARD.validTypeCard($('#cn').val()) === 'visa'){
      $('#mastercard').hide();
      $('#visa').show();
      $('#amex').hide();
      $('#cn').attr('class', 'valid');
      $('#statusCard').attr('data-success', 'Número de tarjeta Válido');
    } if(CARD.validLuhn($('#cn').val()) === true && CARD.validTypeCard($('#cn').val()) === 'amex' && CARD.validateLength($('#cn').val()) === 'amex'){
      $('#mastercard').hide();
      $('#visa').hide();
      $('#amex').show();
      $('#cn').attr('class', 'valid');
      $('#statusCard').attr('data-success', 'Número de tarjeta Válido');
    } if (CARD.validLuhn($('#cn').val()) !== true){
      $('#cn').attr('class', 'invalid');
      $('#statusCard').attr('data-error', 'tarjeta NO válida');
    } if ($('#cn').val() == "") {
      $('#cn').removeAttr('class', 'valid');
      $('#statusCard').removeAttr('data-success', 'Número de tarjeta Válido');
      $('#mastercard').show();
      $('#visa').show();
      $('#amex').show();

    }
  });

  $('#cvv').keyup(function(){
    if (CARD.validTypeCard($('#cn').val()) === 'mastercard' && CARD.LengthCvv($('#cvv').val()) === 'visa/mastercard'){
      $('#cvv').attr('class', 'valid');
      $('#statusCVV').attr('data-success', 'CVV Válido');
    } if (CARD.validTypeCard($('#cn').val()) === 'visa' && CARD.LengthCvv($('#cvv').val()) === 'visa/mastercard'){
      $('#cvv').attr('class', 'valid');
      $('#statusCVV').attr('data-success', 'CVV Válido');
    } if (CARD.validTypeCard($('#cn').val()) === 'amex' && CARD.LengthCvv($('#cvv').val()) === 'amex'){
      $('#cvv').attr('class', 'valid');
      $('#statusCVV').attr('data-success', 'CVV Válido');
    } if ($('#cvv').val()==='') {
      $('#cvv').removeAttr('class', 'valid');
      $('#cvv').removeAttr('class', 'invalid');
      $('#statusCVV').removeAttr('data-success', 'CVV Válido');
      $('#statusCVV').removeAttr('data-error', 'CVV NO Válido');
    } if(CARD.LengthCvv($('#cvv').val()) === 'cvv inválido') {
      $('#cvv').attr('class', 'invalid');
      $('#statusCVV').attr('data-error', 'CVV NO Válido');
    }
  })
 });

/*
  $('#validar').click(() => {

    let num = $('#cn').val();
    let cvv = $('#cvv').val();
    let date = $('#exp').val();
    let name = $('#name').val();

    if (CARD.validTypeCard(num) === 'mastercard' && CARD.LengthCvv(cvv) === 'visa/mastercard' && CARD.validateDate(date) === true && CARD.validateName(name) === true || CARD.validTypeCard(num) === 'visa' && CARD.LengthCvv(cvv) === 'visa/mastercard' && CARD.validateDate(date) === true && CARD.validateName(name) === true || CARD.validTypeCard(num) === 'amex' && CARD.LengthCvv(cvv) === 'visa/mastercard' && CARD.validateDate(date) === true && CARD.validateName(name) === true){
      $('#valid').show();
    }

    /* Validación de campos
    if(CARD.validateData(num) === false || CARD.validateCvv(cvv) === false || CARD.validTypeDataDate(date) === false || CARD.validateName(name) === false){
      Materialize.toast('Ningún campo deber estar vacío o contener datos erróneos', 3000);
      $('#valid').hide();
    }

    /* Validación de la fecha de expiración 
    if (CARD.validateDate(date) === false) {
      Materialize.toast('Fecha inválida', 3000);
    }

     Validación del número de la tarjeta 
    if (CARD.validLuhn(num) === false) {
      Materialize.toast('Tarjeta inválida', 3000);
    }      

   /* Validaciones según el tipo de tarjeta */
   /*
    if (CARD.validTypeCard(num) === 'visa') {
      if(CARD.validateLength(num) === 'visa'){
        $('#visa').show();
        $('#mastercard').hide();
        $('#amex').hide();
        if (CARD.LengthCvv(cvv) !== 'visa/mastercard') {
          Materialize.toast('El CVV no corresponde a la tarjeta ingresada', 4000);
        }
      }
    }

    if (CARD.validTypeCard(num) === 'mastercard') {
      if (CARD.validateLength(num) === 'mastercard') {
        $('#visa').hide();
        $('#mastercard').show();
        $('#amex').hide();
        if (CARD.LengthCvv(cvv) !== 'visa/mastercard') {
          Materialize.toast('El CVV no corresponde a la tarjeta ingresada', 4000);
        }
      }
    }

    if (CARD.validTypeCard(num) === 'amex') {
      if (CARD.validateLength(num) === 'amex') {
        $('#visa').hide();
        $('#mastercard').hide();
        $('#amex').show();
        if (CARD.LengthCvv(cvv) !== 'amex') {
          Materialize.toast('El CVV no corresponde a la tarjeta ingresada', 4000);
        }
      }
    }
  });

});
*/