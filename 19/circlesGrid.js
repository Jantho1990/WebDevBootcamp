(function(){
  var circles = [];
  var circle, polygon;
  var color, ca;
  var x = 0, y = 0, r = 7, a = 5;
  for(var i = 0; i < 100; i++){
    x = i * 10;
    y = ((i % r) + 1) * 50;
    // Create a polygon every a iterations.
    if(i % a === 0){
      polygon = new Path.RegularPolygon(
        new Point(x, y),
        (Math.floor(Math.random() * a) + 3),
        (r * 2)
      );
      polygon.fillColor = '#0F0';
    }
    ca = [x % 256, y % 256, (x * y) % 256];
    color = 'rgb(' + ca[0] + ',' + ca[1] + ',' + ca[2] + ')';
    circle = new Path.Circle(new Point(x, y), r);
    circle.fillColor = color;
    circles.push(circle);
  }
})();
