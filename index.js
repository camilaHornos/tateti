

let turno = 0;
const tablero = [];

const btnPulsado = (e,pos) =>{
    turno ++;
    const btn = e.target;
    const color = turno % 2 ? 'blue' : 'red'
    btn.style.backgroundColor = color
    tablero[pos]=color
if (Ganaste())alert('ganador el ' + color)
}

const Ganaste = ()=> {
    if(tablero[0]== tablero [1] && tablero[0]== tablero [2]&& tablero[0])
    return true ;
}


document.querySelectorAll('.bt').forEach(
(obj,i) =>
 obj.addEventListener("click",(e)=>btnPulsado(e,i)));

 
 