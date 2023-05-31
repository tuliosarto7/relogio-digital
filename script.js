 const horas = document.getElementById('horas');
 const minutos = document.getElementById('minutos');
 const segundos = document.getElementById('segundos');


 const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hours1 = dateToday.getHours();
    let minutes1 = dateToday.getMinutes();
    let seconds1 = dateToday.getSeconds();

    if (hours1 < 10) hours1 = '0' + hours1;
    if (minutes1 < 10) minutes1 = '0' + minutes1;
    if (seconds1 < 10) seconds1 = '0' + seconds1;


    horas.textContent = hours1;
    minutos.textContent = minutes1;
    segundos.textContent = seconds1;
 })
 