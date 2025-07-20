const colorSelect = document.getElementById("colorSelect");
const boxes = ["record_triggered_flows", "screen_flows", "autolaunched_flows", "schedule_triggered_flows"];

colorSelect.addEventListener("change", () => {
  boxes.forEach(color => {
    document.getElementById(color).classList.add("hidden");
  });

  const selected = colorSelect.value;
  if (boxes.includes(selected)) {
    document.getElementById(selected).classList.remove("hidden");
  }
});





function formatToApiName(label) {
  return label
     .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\(([^)]+)\)-\(([^)]+)\)/g, "$1_$2")
    .replace(/[^\w\s]/gi, "_")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_") 
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function setupCopyButton(buttonId, inputId) {
    const button = document.getElementById(buttonId);
    const input = document.getElementById(inputId);
    const originalIconClass = "bx bxs-copy";
    const checkIconClass = "bx bx-check";

    button.addEventListener("click", () => {
      navigator.clipboard.writeText(input.value).then(() => {
        const icon = button.querySelector("i");
        icon.className = checkIconClass;

        setTimeout(() => {
          icon.className = originalIconClass;
        }, 1500);
      }).catch(() => {
        alert("Error al copiar");
      });
    });
  }

  setupCopyButton("copyBtnOutputLabelRTF", "label");
  setupCopyButton("copyBtnOutputApiRTF", "apiName");


// --------------------------- RTF -----------------------------------------

  function generarLabelYApiNameRTF() {
    const labelElement = document.getElementById("label");
    const apinameElement = document.getElementById("apiName");

    const objeto = document.getElementById("objeto").value.trim();
    const trigger = document.getElementById("trigger").value;
    const optimizacion = document.getElementById("optimizacion").value;
    const accion = document.getElementById("accion").value.trim();

    // Checkboxes
    const checkboxes = document.querySelectorAll('input[name="tipoEjecucion"]:checked');
    const tiposSeleccionados = Array.from(checkboxes).map(cb => cb.value.toUpperCase());

    if (!objeto || !trigger || !optimizacion || !accion || tiposSeleccionados.length === 0) {
      labelElement.value = "Debe completar todos los campos.";
      apinameElement.value = "Debe completar todos los campos.";
      return;
    }

    const optimizacionMap = {
      "actions_and_related_records": "COU",
      "fast_field_updates": "FFU"
    };

    const triggerMap = {
      "created": "CRE",
      "updated": "UPD",
      "created_or_updated": "ARR",
      "deleted": "DEL"
    };

    const optimCode = optimizacionMap[optimizacion] || "OPT";
    const triggerCode = triggerMap[trigger] || "TRG";
    const tipoTexto = `[${tiposSeleccionados.join(", ")}]`;

    const label = `${objeto} [RTF] | (${optimCode})-(${triggerCode}) | - ${accion} | ${tipoTexto}`;
    apiName = formatToApiName(label)

    if (label.length > 80) {
        labelElement.value = "Label too long... Max length 80.  ";
        apinameElement.value = "Label too long... Max length 80. ";
    }else{
        labelElement.value = label;
        apinameElement.value = apiName;
    }
  }

  document.getElementById("objeto").addEventListener("input", generarLabelYApiNameRTF);
  document.getElementById("trigger").addEventListener("change", generarLabelYApiNameRTF);
  document.getElementById("optimizacion").addEventListener("change", generarLabelYApiNameRTF);
  document.getElementById("accion").addEventListener("input", generarLabelYApiNameRTF);

  document.querySelectorAll('input[name="tipoEjecucion"]').forEach(checkbox => {
    checkbox.addEventListener("change", generarLabelYApiNameRTF);
  });

// --------------------------- -----------------------------------------




//------------------- Screenflows --------------------------------------
function generarLabelYApiNameSCF() {
  const labelElement = document.getElementById("label_scf");
  const apinameElement = document.getElementById("apiName_scf");

  const objeto = document.getElementById("objeto_scf").value.trim();
  const accion = document.getElementById("accion_scf").value.trim();

  if (!objeto || !accion) {
    labelElement.value = "Debe completar todos los campos.";
    apinameElement.value = "Debe completar todos los campos.";
    return;
  }

  const label = `${objeto} [SCF] - ${accion}`;
  const apiName = formatToApiName(label);

  if (label.length > 80) {
    labelElement.value = "Label too long... Max length 80.";
    apinameElement.value = "Label too long... Max length 80.";
  } else {
    labelElement.value = label;
    apinameElement.value = apiName;
  }
}

document.getElementById("objeto_scf").addEventListener("input", generarLabelYApiNameSCF);
document.getElementById("accion_scf").addEventListener("input", generarLabelYApiNameSCF);
setupCopyButton("copyBtnOutputLabelSCF", "label_scf");
setupCopyButton("copyBtnOutputApiSCF", "apiName_scf");

//--------------------------------------------------------------------