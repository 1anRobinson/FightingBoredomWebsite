function toggleDiv(divid) {
  var overall = document.getElementById('overall');
  var sketch = document.getElementById('sketch');
  var paint = document.getElementById('paint');
  var anim = document.getElementById('anim');

  overall.style.display = 'none';
  sketch.style.display = 'none';
  paint.style.display = 'none';
  anim.style.display = 'none';

  if(overall.style.display == 'block') {
    document.getElementById(divid).style.display = 'none';
  }
  else {
    document.getElementById(divid).style.display = 'block';
  }
} 