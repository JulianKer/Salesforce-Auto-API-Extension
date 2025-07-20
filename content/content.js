console.log("[Extensión SF] Script cargado.");

const intervalo = setInterval(() => {
  let labelInput = null;
  let apiNameInput = null;

  const frames = [window, ...Array.from(window.frames)]; //recorro los iframe x si encontré muchos pq por lo que vi, SF carga vastantes iframes xd

  for (const frame of frames) {
    try {
      const doc = frame.document;
      labelInput = doc.getElementById("MasterLabel"); // estos tengo q ver pq capaz para los flows u otros procesos, no se llaman así los ids
      apiNameInput = doc.getElementById("DeveloperName"); // idem que para el labelinput

      if (labelInput && apiNameInput) {
        console.log("[Extensión SF] Inputs encontrados");

        labelInput.addEventListener("keyup", () => {
          const valorFormateado = labelInput.value
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")  
                  .replace(/[^\w\s]/gi, "_")     
                  .trim()
                  .toLowerCase()
                  .replace(/\s+/g, "_")            
                  .replace(/_+/g, "_");            

          apiNameInput.value = valorFormateado;
          console.log("[Extensión SF] API Name formateado:", valorFormateado);
        });

        clearInterval(intervalo);
        break;
      }
    } catch (e) {
      // no voy a mostrarningun error, solo lo dejo para que no rompa
    }
  }

  // if (!labelInput || !apiNameInput) {
  //   console.log("[Extensión SF] Inputs NO encontrados todavía...");
  // }
}, 500);
