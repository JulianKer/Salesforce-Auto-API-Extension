function formatToApiName(label) {
  return label
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/gi, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_");
}

document.getElementById("formatBtn").addEventListener("click", () => {
  const label = document.getElementById("labelInput").value;
  const formatted = formatToApiName(label);
  document.getElementById("output").textContent = formatted;
});
