var saying ='Lorem dd';
var msg = "<h1>"+saying+"</h1>"+"<h2 class='text-success'>Length</h2><p class='text-white'>"+saying.length+"</p>";

msg+= "<h2 class='text-success'>Substring</h2><p class='text-white'>"+saying.substring(0,saying.length-1)+"</p>";
msg+="<h2 class='text-success'>Split</h2><p class='text-white'>"+saying.split(' ')+"</p>";

var el=document.getElementById('info');
el.innerHTML=msg;