$(document).ready(function(){
  $('.question').hide();
  $('.stop-record').hide();


  $('.record-button').click(function(){
    $(this).hide();
    $('.stop-record').show();
    $('.caption').children('p').html('<strong>RECORDING</strong>');
  });

  $('.stop-record').click(function(){
    $(this).hide();
    $('.record-button').show();
    $('.caption').children('p').html(
      '<h2 style="color: #a5d395;"><strong>SUCCESS!</strong></h2>' +
      '<p><strong>YOUR COUGH HAS BEEN RECORDED. CAN YOU GIVE US A FEW MORE DETAILS?</strong></p>' +
      '<br><div class="big-btn show-questions">OK ></div>'
    );
    $('.caption').addClass('caption-dark');
    $('.screen').css('background-color', '#f2f2f2');
    $('#defaultCanvas').hide();
  });

  $( ".show-questions" ).bind( "click", function(){
    $('.question').show();
    $('.question').css('z-index', 200);
  });

  $('.question-frequency').change(function(){
    $('#cough_frequency').val($(this).val());
    console.log('frequency is' + $('#cough_frequency').val());
  });




});
