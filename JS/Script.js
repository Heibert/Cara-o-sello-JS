/* Alerta */
winned = 0
losed = 0
all = 0

function Inicio () {
  document.getElementById("desaparecer").style.display = "none"
  document.getElementById("juego").style.display = "contents"
  Resultado = document.getElementById("Resultado")
  imgMoneda = document.getElementById("moneda")
  swal({
    title: '¿Cuánto deseas apostar?',
    input: 'number',
    inputAttributes: {
      min: 0,
      value: 0
    },
    confirmButtonText: 'Aceptar',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
  }).then((result) =>{
    Apuesta = parseInt(result.value)
    info()
  })
}
function info(){
  document.getElementById("apuesta").textContent = "Apuesta actual: "+ Apuesta
  document.getElementById("win").textContent = "Rondas ganadas: " + winned
  document.getElementById("lose").textContent = "Rondas perdidas: " + losed
  document.getElementById("total").textContent = "Balance total: " + all
}
function Cara(){
  Eleccion = 0
  Juego(Eleccion)
}
function Sello(){
  Eleccion = 1
  Juego(Eleccion)
}
function Juego(Eleccion) {
  imgMoneda.src = "./IMG/Girando.gif"
  Resultado.textContent = "Girando..."
  Resultado.style.color = "white"
  moneda = Math.round(Math.random()*1)
  switch (moneda) {
    case 0:
      setTimeout(() => {imgMoneda.src = "./IMG/Cara.png"},1200)
      if (Eleccion == 0) {
        setTimeout(() => {
        winned++
        all += Apuesta
        Resultado.textContent = "Ganaste!!"
        Resultado.style.color = "green"
        info()
        }, 1200);
      }
      else{
        setTimeout(() => {
        losed++
        all -= Apuesta
        Resultado.textContent = "Perdiste"
        Resultado.style.color = "red"
        info()
        }, 1200);
      }
      break;
    case 1:
      
      setTimeout(()=>{imgMoneda.src = "./IMG/Sello.png"},1200)
      if (Eleccion == 1) {
        setTimeout(() => {
        winned++
        all += Apuesta
        Resultado.textContent = "Ganaste!!"
        Resultado.style.color = "green"
        info()
        }, 1200);
      }
      else {
        setTimeout(() => {
        losed++
        all -= Apuesta
        Resultado.textContent = "Perdiste"
        Resultado.style.color = "red"
        info()
        }, 1200);
      }
      break;
  }
}