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
