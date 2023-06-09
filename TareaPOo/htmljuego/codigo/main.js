//Estetica de los botones (piedra, papel, tijera)//
const armas = document.querySelectorAll('.arma');

setInterval(() => {
  armas.forEach(arma => {
    const color = getRandomColor();
    arma.style.backgroundColor = color;
  });
}, 1000);

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//jUEGO//

class Juego{
    constructor(){
        this.puntoUsuario=0;
        this.puntoPc=0;
        this.instrucciones=document.querySelector("#instrucciones");
        this.contenedorPuntoUsuario=document.querySelector("#user-score");
        this.contenedorPuntoPc=document.querySelector("#pc-score");
        this.mensaje=document.querySelector("#mensaje");
        this.contenedorGanador=document.querySelector("#win");
        this.eleccionUsuario=document.querySelector("#jugador-eleccion");
        this.eleccionPc=document.querySelector("#pc-eleccion");
        this.user=""
        this.pc=0
        this.arma=document.querySelector("#elegir-arma");
        this.botones=document.querySelectorAll(".arma");
        this.reiniciar=document.querySelector("#reiniciar");
        //Estadistica//
        this.salir = document.querySelector("#salir");
        this.contenedorEstadisticas = document.querySelector("#estadisticas");
        this.estadisticasJugador = document.querySelector("#ganajugador");
        this.estadisticasComputadora = document.querySelector("#ganacomputador");
        this.partidasGanadasJugador = 0;
        this.partidasGanadasComputadora = 0;
        this.salir.addEventListener("click", this.salirPartida.bind(this));
  
    }
    //Metodos
    Iniciarturno(e){
        this.pc= Math.floor(Math.random()*3);
        this.user=e.currentTarget.id
        //piedra =0
        //papel=1
        //tijera=2
        switch(this.pc){
            case 0:
                this.pc="piedra";
                break
            case 1:
                this.pc="papel";
                break
            case 2:
                this.pc="tijera";
                break
        }
        if (this.user === "piedra" && this.pc === "tijera" || this.user === "papel" && this.pc === "piedra"
        || this.user === "tijera" && this.pc === "papel"){
            obj.ganaUser()
        }else if (this.pc === "piedra" && this.user === "tijera"|| this.pc==="papel" && this.user === "piedra"
        || this.pc=== "tijera" && this.user === "papel"){
            obj.ganaPc()
        }else{
            obj.empate()
        }
        obj.mensaje.classList.remove("disabled");
        obj.eleccionPc.innerText = this.pc;
        obj.eleccionUsuario.innerText=this.user;
        obj.finPartida();
    }
    ganaUser(){
        this.puntoUsuario=this.puntoUsuario+1;
        this.contenedorPuntoUsuario.innerText=this.puntoUsuario;
        this.contenedorGanador.innerText="Ganaste un punto 🔥"
    
    }
    ganaPc(){
        this.puntoPc=this.puntoPc+1;
        this.contenedorPuntoPc.innerText=this.puntoPc;
        this.contenedorGanador.innerText="La computadora ganó un punto 🔥"
    }
    empate(){
        this.contenedorGanador.innerText="Nadie ganó 😱"
    }
    finPartida(){
        if (this.puntoUsuario ===5){
            obj.instrucciones.innerText="🔥 Ganaste el juego 🔥"
            obj.reiniciar.classList.remove("disabled");
            obj.arma.classList.add("disabled");
            //estadistica//
            this.partidasGanadasJugador = this.partidasGanadasJugador + 1;
            this.estadisticasJugador.innerText = this.partidasGanadasJugador;
        }else if(this.puntoPc ===5){
            obj.instrucciones.innerText="😱 La computadora ganó 😱"
            obj.reiniciar.classList.remove("disabled");
            obj.arma.classList.add("disabled");
            //Estadistica
            this.partidasGanadasComputadora = this.partidasGanadasComputadora + 1;
            this.estadisticasComputadora.innerText = this.partidasGanadasComputadora;
            
         }
    }
    reiniciarJuego(){
        obj.reiniciar.classList.add("disabled")
        obj.mensaje.classList.add("disabled")
        obj.arma.classList.remove("disabled");
        obj.instrucciones.innerText="Gana el primero en llegar a 5 puntos"
        obj.puntoPc=0;
        obj.puntoUsuario=0;
        obj.contenedorPuntoPc.innerText=obj.puntoPc;
        obj.contenedorPuntoUsuario.innerText=obj.puntoUsuario;
        //estadisticas
        obj.contenedorEstadisticas.classList.add("disabled");
    }    

    //Estadistica//
    salirPartida() {
        this.contenedorEstadisticas.classList.remove("disabled");
        this.reiniciar.classList.remove("disabled");
      }
      
}

const obj= new Juego()
obj.botones.forEach(boton => { boton.addEventListener("click",obj.Iniciarturno)})
obj.reiniciar.addEventListener("click",obj.reiniciarJuego);