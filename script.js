var i = 0;
var txt = 'Desenvolvedor de Software';
var speed = 150;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    document.body.style.opacity='1';
  }
}


