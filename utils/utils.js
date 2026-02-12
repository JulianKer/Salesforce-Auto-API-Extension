export function formatToApiName(label) {
  const normalized = label
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/gi, "_")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "");

    const camelCase = localStorage.getItem("camelCase") === "true";
    if (camelCase) {
    return normalized
      .split("_")
      .map((word, index) =>
        index === 0
          ? word
          : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join("");
  } else {
    return normalized;
  }
}

export function setLabelAndApiFirstTab(label, api){
  let mainInput = document.getElementById("labelInput");
  let mainOutput =  document.getElementById("output");

  if(mainInput && mainOutput){
    mainInput.value = label ?? "";
    mainOutput.value = api ?? "";
  }
}

// genero opciones de horario (cada 30 mins)
function generarOpcionesHorario(selectElementId) {
  const select = document.getElementById(selectElementId);
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 15) {
      const hora = String(h).padStart(2, '0');
      const minuto = String(m).padStart(2, '0');
      const option = document.createElement("option");
      option.value = `${hora}_${minuto}`;
      option.textContent = `(${hora}:${minuto})`;
      select.appendChild(option);
    }
  }
}
generarOpcionesHorario("selectHorarioSTF");

export function guardarLS(label, api) {
  localStorage.setItem("valorLabel", label)
  localStorage.setItem("valorFormateado", api)
  console.log("Guardado en local:", label, api);
}
