var Player = function(button, score, record){
  var my = this;
  var score = score;
  var record = record;
  my.button = button;
  my.incrementScore = function(){
    if(!victoryAcheived){
      record.innerHTML = ++score;
    }
    return score;
  };
  my.resetScore = function(){
    score = 0;
    record.innerHTML = score;
    if(record.classList.contains('victory')){
      record.classList.remove('victory');
    }
  };
  my.victory = function(){
    if(!record.classList.contains('victory')){
      record.classList.add('victory');
      victoryAcheived = true;
    }
  };
  return my;
};

var players = [];
players[0] = new Player(document.querySelector('button[name="p1"]'), 0, document.querySelector('.p1'));
players[1] = new Player(document.querySelector('button[name="p2"]'), 0, document.querySelector('.p2'));

var resetButton = document.querySelector('button[name="reset"]');
var limitInput = document.querySelector('input[name="limit"]');
var limitDisplay = document.querySelector('.limit');
limitDisplay.innerHTML = limitInput.value;
var limit = Number(limitInput.value);
var victoryAcheived = false;

resetButton.addEventListener('click', function(){
  victoryAcheived = false;
  players.forEach(function(player){
    player.resetScore();
  });
});

limitInput.addEventListener('change', function(){
  if(!victoryAcheived){
    limit = limitInput.value;
    limitDisplay.innerHTML = limit;
    players.forEach(function(player){
      player.resetScore();
    });
  }else{
    limitInput.value = limit;
    alert('Please reset the game to change the limit.');
  }
});

players.forEach(function(player){
  player.button.addEventListener('click', function(){
    if(player.incrementScore() >= limit && !victoryAcheived){
      player.victory();
    }
  });
});
