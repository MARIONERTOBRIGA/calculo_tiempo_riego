document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('calculator-form');
  const resultContainer = document.getElementById('result');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores de entrada del formulario
    const volumenRiego = parseFloat(document.getElementById('volumen-riego').value);
    const distanciaFilas = parseFloat(document.getElementById('distancia-filas').value);
    const distanciaGoteros = parseFloat(document.getElementById('distancia-goteros').value);
    const caudalGoteros = parseFloat(document.getElementById('caudal-goteros').value);

    // Calcular el tiempo de riego (horas)
    const tiempoRiegoHoras = volumenRiego / ((10000 / (distanciaFilas * distanciaGoteros / 100)) * (caudalGoteros / 1000));

    // Calcular las horas y minutos
    const horas = Math.floor(tiempoRiegoHoras);
    const minutos = Math.round((tiempoRiegoHoras - horas) * 60);

    // Generar el mensaje de resultado
    let resultadoMensaje = `Tiempo de riego: ${horas} horas`;
    if (minutos > 0) {
      resultadoMensaje += ` y ${minutos} minutos`;
    }

    // Mostrar el resultado en el contenedor de resultado
    resultContainer.innerHTML = resultadoMensaje;
  });
});
