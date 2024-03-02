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

    // Calcular el área de riego (hectáreas)
    const areaRiego = (distanciaFilas * distanciaGoteros) / 10000;

    // Calcular el tiempo de riego (horas)
    const tiempoRiego = (volumenRiego * 1000) / (caudalGoteros * areaRiego);

    // Mostrar el resultado en el contenedor de resultado
    resultContainer.innerHTML = `Tiempo de riego: ${tiempoRiego.toFixed(2)} horas`;
  });
});
