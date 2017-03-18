var lis = document.querySelectorAll('li');
Object.keys(lis).forEach(function(l){
  lis[l].addEventListener('mouseover', function(){
    this.classList.add('selected');
  });
  lis[l].addEventListener('mouseout', function(){
    this.classList.remove('selected');
  });
  lis[l].addEventListener('click', function(){
    this.classList.toggle('done');
  });
});
