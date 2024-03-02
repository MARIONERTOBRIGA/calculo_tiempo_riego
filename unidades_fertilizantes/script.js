document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('calculator-form');
  const resultContainer = document.getElementById('result');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores de entrada del formulario
    const porcentajeNitrogeno = parseFloat(document.getElementById('porcentaje-nitrogeno').value);
    const porcentajeFosforo = parseFloat(document.getElementById('porcentaje-fosforo').value);
    const porcentajePotasio = parseFloat(document.getElementById('porcentaje-potasio').value);
    const kilogramosFertilizante = parseFloat(document.getElementById('kilogramos-fertilizante').value);
    const superficieHectareas = parseFloat(document.getElementById('superficie-hectareas').value);

    // Calcular las unidades de nitrógeno, fósforo y potasio
    const unidadesNitrogeno = (kilogramosFertilizante / superficieHectareas) * (porcentajeNitrogeno / 100);
    const unidadesFosforo = (kilogramosFertilizante / superficieHectareas) * (porcentajeFosforo / 100);
    const unidadesPotasio = (kilogramosFertilizante / superficieHectareas) * (porcentajePotasio / 100);

    // Mostrar el resultado en el contenedor de resultado
    resultContainer.innerHTML = `
      <p>Unidades de nitrógeno: ${unidadesNitrogeno.toFixed(2)}</p>
      <p>Unidades de fósforo: ${unidadesFosforo.toFixed(2)}</p>
      <p>Unidades de potasio: ${unidadesPotasio.toFixed(2)}</p>
    `;
  });
});
