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
  moneda = Math.round(Math.random()*1)
  switch (moneda) {
    case 0:
      imgMoneda.src = "./IMG/Cara.png"
      if (Eleccion == 0) {
        winned++
        all += Apuesta
        Resultado.textContent = "Ganaste!!"
        Resultado.style.color = "green"
      }
      else{
        losed++
        all -= Apuesta
        Resultado.textContent = "Perdiste"
        Resultado.style.color = "red"
      }
      break;
    case 1:
      imgMoneda.src = "./IMG/Sello.png"
      if (Eleccion == 1) {
        winned++
        all += Apuesta
        Resultado.textContent = "Ganaste!!"
        Resultado.style.color = "green"
      }
      else {
        losed++
        all -= Apuesta
        Resultado.textContent = "Perdiste"
        Resultado.style.color = "red"
      }
      break;
  }
  info()
}