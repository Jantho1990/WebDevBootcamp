var sound = new Howl({
  src: ['sounds/clay.mp3']
});

var circles = [];
function onKeyDown(ev){
  var maxPoint = new Point(view.size.width, view.size.height);
  var randomPoint = Point.random();
  var point = maxPoint * randomPoint;
  var newCircle = new Path.Circle(
    point,
    500
  );
  newCircle.fillColor = 'green';
  circles.push(newCircle);
  sound.play();
  console.log(sound);
}

function onFrame(ev){
  for(var i = 0; i < circles.length; i++){
    circles[i].fillColor.hue += 2;
    circles[i].scale(0.9);
  }
}
