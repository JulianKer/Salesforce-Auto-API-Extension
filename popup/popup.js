import { formatToApiName, guardarLS, cargarFechaYVersion} from "../utils/utils.js";

const toggle = document.getElementById("darkToggle");
const camelToggle = document.getElementById("camelToggle");

document.addEventListener("DOMContentLoaded", () => {

  cargarFechaYVersion();

  //---- darkmode
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  toggle.checked = isDarkMode;
  document.body.classList.toggle("dark-mode", isDarkMode);

  //-- camelCase tiggle
  camelToggle.checked = localStorage.getItem("camelCase") === "true";

  //---- label y api que guardé en el localstorage 
  const valorformateadoDelLC = localStorage.getItem("valorFormateado")
  const labelDelLC = localStorage.getItem("valorLabel")

  let label = document.getElementById("labelInput");
  let formateado = document.getElementById("output");

  if (label && formateado) {
    label.value = labelDelLC
    formateado.value = valorformateadoDelLC
  }

  // si hay un label, ejecuto el update para q calcule en snakeCase o viceversa pero si no hay un valor, que no haga nada pq sino pisa con vacíos el local stoage
  if (labelDelLC.trim() !== "") updateApiName();
});

toggle.addEventListener("change", () => {
  localStorage.setItem("darkMode", toggle.checked);
  document.body.classList.toggle("dark-mode", toggle.checked);
});

camelToggle.addEventListener("change", () => {
  localStorage.setItem("camelCase", camelToggle.checked);
});

const labelInput = document.getElementById("labelInput");
const outputInput = document.getElementById("output");
const trash = document.getElementById("trash");

function updateApiName() {
  const useCamel = camelToggle.checked;
  const formatted = formatToApiName(labelInput.value, useCamel);

  outputInput.value = formatted;
  guardarLS(labelInput.value, formatted);
}

labelInput.addEventListener("keyup", updateApiName);
labelInput.addEventListener("blur", updateApiName);

camelToggle.addEventListener("change", () => {
  localStorage.setItem("camelCase", camelToggle.checked);
  updateApiName();
});

trash.addEventListener("click", ()=>{
  labelInput.value = "";
  outputInput.value = "";
  guardarLS("", "");
})

function setupCopyButton(buttonId, inputElement) {
  const button = document.getElementById(buttonId);
  const originalIconClass = "bx bxs-copy";
  const checkIconClass = "bx bx-check";

  button.addEventListener("click", () => {
    navigator.clipboard.writeText(inputElement.value).then(() => {
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

setupCopyButton("copyBtnLabel", labelInput);
setupCopyButton("copyBtnOutput", outputInput);




// ---Tabs
document.querySelectorAll(".tab-button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const tab = btn.dataset.tab;

    document.querySelectorAll(".tab-button").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(tab).classList.add("active");
  });
});