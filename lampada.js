const turnOn = document.getElementById ( 'turnOn')
const turnOff = document.getElementById  ('turnOff')
const lamp = document.getElementById ( 'lamp')

function islampBroken () {
    return lamp.src.indexOf ('quebrada') > -1 
}
function isOff () {
    return lamp.src.indexOf ( 'desligada' ) >-1
}
function lampOn () {
    if ( !islampBroken () ) {
        if (isOff())  {
            lamp.src = './img/ligada.jpg';
            turnOn.textContent = 'Desligar'
        }  else {
            lamp.src = './img/desligada.jpg';
            turnOn.textContent = 'Ligar'
        }
    }
}
function lampOff () {
    if ( !islampBroken () ) {
        lamp.src = './img/desligada.jpg';
    }
}
function lampBroken () {
    lamp.src = './img/quebrada.jpg'; 
}

turnOn.addEventListener ( 'click', lampOn)
lamp.addEventListener ( 'mouseover', lampOn);
lamp.addEventListener ( 'mouseleave', lampOff); 
lamp.addEventListener ( 'dblclick', lampBroken);