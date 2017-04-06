// Check off a specific todo by clicking
$('ul').on('click', 'li', function(){
  $(this).toggleClass('completed');
});

// Click on delete button to remove todo
$('ul').on('click', 'span', function(ev){
  ev.stopPropagation();
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
});

// Create a new todo on enter of the input
$('input[type="text"]').keypress(function(ev){
  if(ev.which === 13){
    var todoText = $(this).val();
    // create new li
    $('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + todoText + '</li>');
    $(this).val('');
  }
});

// Toggle input visibility
$('.fa-plus').click(function(){
  $('input[type="text"]').fadeToggle();
});
