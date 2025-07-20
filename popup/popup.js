const toggle = document.getElementById("darkToggle");

document.addEventListener("DOMContentLoaded", () => {
  if (toggle.checked) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
});

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", toggle.checked);
});

function formatToApiName(label) {
  return label
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/gi, "_")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/_+/g, "_");
}

const labelInput = document.getElementById("labelInput");
const outputInput = document.getElementById("output");

labelInput.addEventListener("keyup", () => {
  const formatted = formatToApiName(labelInput.value);
  outputInput.value = formatted;
});

labelInput.addEventListener("blur", () => {
  const formatted = formatToApiName(labelInput.value);
  outputInput.value = formatted;
});

// Función para manejar el copiado y cambio de icono
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
