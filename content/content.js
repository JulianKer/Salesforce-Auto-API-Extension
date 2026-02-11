function formatToApiName(label, camelCase = false) {
  const normalized = label
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/gi, "_")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "");

  if (camelCase) {
    return normalized
      .split("_")
      .map((word, index) =>
        index === 0
          ? word
          : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join("");
  }

  return normalized;
}


console.log("[Extensión SF] Script cargado.");

let toggleInner = `<div style="display: flex; align-items: center; gap: 10px; user-select: none; font-size: 14px; color: #444;" class="autocompletar">
  <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; transform: scale(0.75); transform-origin: left;">
    <input 
      type="checkbox" 
      id="autoToggle" 
      checked 
      style="display: none;" 
      onchange="this.nextElementSibling.style.backgroundColor = this.checked ? '#0B9BE8' : '#ccc'; this.nextElementSibling.firstElementChild.style.transform = this.checked ? 'translateX(20px)' : 'translateX(0)';"
    />
    <span 
      class="toggle-slider" 
      style="position: relative; width: 40px; height: 20px; background-color: #0B9BE8; border-radius: 12px; transition: background-color 0.3s ease; cursor: pointer; display: inline-block;"
    >
      <span 
        style="content: ''; position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; background-color: white; border-radius: 50%; transition: transform 0.3s ease; transform: translateX(20px);"
      ></span>
    </span>
    Auto completar
  </label>
</div>`;

let camelToggleInner = `<div style="display: flex; align-items: center; gap: 10px; user-select: none; font-size: 14px; color: #444;" class="camelCaseToggle">
  <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; transform: scale(0.75); transform-origin: left;">
    <input 
      type="checkbox" 
      id="camelToggle" 
      style="display: none;" 
      onchange="this.nextElementSibling.style.backgroundColor = this.checked ? '#0B9BE8' : '#ccc'; this.nextElementSibling.firstElementChild.style.transform = this.checked ? 'translateX(20px)' : 'translateX(0)';"
    />
    <span 
      class="toggle-slider" 
      style="position: relative; width: 40px; height: 20px; background-color: #ccc; border-radius: 12px; transition: background-color 0.3s ease; cursor: pointer; display: inline-block;"
    >
      <span 
        style="content: ''; position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; background-color: white; border-radius: 50%; transition: transform 0.3s ease;"
      ></span>
    </span>
    Camel Case
  </label>
</div>`;


const intervalo = setInterval(() => {
  let labelInput = null;
  let apiNameInput = null;

  let rellenarBool = true;
  let rellenarElement = null;
  let camelElement = null;

  const frames = [window, ...Array.from(window.frames)]; //recorro los iframe x si encontré muchos pq por lo que vi, SF carga bastantes iframes xd

  for (const frame of frames) {
      try {
        const doc = frame.document;
        labelInput = doc.getElementById("MasterLabel"); // estos tengo q ver pq capaz para los flows u otros procesos, no se llaman así los ids
        apiNameInput = doc.getElementById("DeveloperName"); // idem que para el labelinput

        if (labelInput && apiNameInput) {
            console.log("[Extensión SF] Inputs encontrados");

            const safeLabelInput = labelInput;
            const safeApiNameInput = apiNameInput;

            rellenarElement = doc.getElementById("autoToggle");
            camelElement = doc.getElementById("camelToggle");

            if (!rellenarElement) {
              apiNameInput.parentElement.insertAdjacentHTML("beforeend", toggleInner);
            }

            if (!camelElement) {
              apiNameInput.parentElement.insertAdjacentHTML("beforeend", camelToggleInner);
            }

            rellenarElement = doc.getElementById("autoToggle");
            camelElement = doc.getElementById("camelToggle");

            if (rellenarElement) {
              rellenarElement.addEventListener("change", () => {
                rellenarBool = rellenarElement.checked ?? false;
                console.log(rellenarBool);
              });
            }

            if (camelElement) {
              camelElement.addEventListener("change", () => {

                if (rellenarBool) {
                  const useCamel = camelElement.checked ?? false;
                  const valorFormateado = formatToApiName(safeLabelInput.value, useCamel);
                  safeApiNameInput.value = valorFormateado;
                  console.log("[Extensión SF] API Name recalculado por cambio de Camel Case:", valorFormateado);
                }
              });
            }
            safeLabelInput.addEventListener("keyup", () => {

               if (rellenarBool) {
                 const useCamel = camelElement?.checked ?? false;
                 const valorFormateado = formatToApiName(safeLabelInput.value, useCamel);
                 safeApiNameInput.value = valorFormateado;
              
                 console.log("[Extensión SF] API Name formateado:", valorFormateado);  
               }else{
                 console.log("Valor no formateado porque el auto completado está desactivado")
               }
             });

            clearInterval(intervalo);
            break;
      }
    } catch (e) {
      /* no voy a mostrarningun error, solo lo dejo para que no rompa*/
    }
  }
}, 500);
