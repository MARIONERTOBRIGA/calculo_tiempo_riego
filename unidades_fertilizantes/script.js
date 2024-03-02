document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('calculator-form');
  const resultContainer = document.getElementById('result');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores de entrada del formulario
    const porcentajeNitrogeno = parseFloat(document.getElementById('porcentaje-nitrogeno').value);
    const porcentajeFosforo = parseFloat(document.getElementById('porcentaje-fosforo').value);
    const porcentajePotasio = parseFloat(document.getElementById('porcentaje-potasio').value);
    const kgHectarea = parseFloat(document.getElementById('kg-hectarea').value);

    // Calcular las unidades de nitrógeno, fósforo y potasio
    const unidadesNitrogeno = porcentajeNitrogeno * kgHectarea / 100;
    const unidadesFosforo = porcentajeFosforo * kgHectarea / 100;
    const unidadesPotasio = porcentajePotasio * kgHectarea / 100;

    // Mostrar el resultado en el contenedor de resultado
    resultContainer.innerHTML = `
      <p>Unidades de nitrógeno: ${unidadesNitrogeno.toFixed(2)}</p>
      <p>Unidades de fósforo: ${unidadesFosforo.toFixed(2)}</p>
      <p>Unidades de potasio: ${unidadesPotasio.toFixed(2)}</p>
    `;
  });
});
