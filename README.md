
# Salesforce Auto-API     <img src="https://github.com/JulianKer/Salesforce-Auto-API-Extension/blob/main/imgs/icon_logo.png" alt="Salesforce Auto-API Logo" title="Salesforce Auto-API Logo" width="60" align="center"/>

Salesforce Auto-API es una extensión para Google Chrome que convierte automáticamente los nombres de campos ingresados en Salesforce en **API Names válidos**, siguiendo el formato `snake_case`, con el objetivo de agilizar la configuración y evitar errores manuales.
<br>
## 💡 Características

- Conversión automática de labels a API Names en Salesforce.
- Funcionamiento directo dentro de la interfaz de Salesforce (Setup).
- Popup manual para convertir valores labels y API Names tanto de campos/objetos como de Flows.
- Persistencia del último valor ingresado mediante almacenamiento local del navegador.
- No requiere configuración adicional.
- Procesamiento 100% local (sin envío de datos externos).
- Modo claro & oscuro.
  
## 🛠️ ¿Cómo funciona?

La extensión ofrece **dos formas de uso**:

1. **Automática dentro de Salesforce**  
   - Detecta cuando el usuario escribe un label en algunos de los formularios estándar de Salesforce y genera automáticamente el API Name correspondiente.
   - Opción para desactivar el Auto-completado para evitar la conversión automática (ideal para realizar cambios de labels sin afectar el API Name actual).

2. **Mediante el popup de la extensión**  
   - El usuario puede abrir el popup, ingresar un texto y obtener su versión en API Name.  
   - El último valor ingresado se guarda localmente para facilitar su reutilización.
   - Construye intuitivamente el label y API Name de los diferentes tipos de flujos más utilizados de Salesforce.
     
> [!TIP]
> También pueden utilizar la extensión directamente desde una web sin necesidad de instalarla en su navegador. Para ello puede consultar la siguiente web: <a href="https://salesforce-extension.vercel.app/" target="_blank"> Salesforce Auto-Api Web</a>.

______________________________________________

## 🔄 Ejemplo de conversión

<img src="https://github.com/JulianKer/Salesforce-Auto-API-Extension/blob/refactor/icons/edit_element.png" width="30" align="center" /> <strong>Campos/Objetos u otras configuraciones: </strong>
  
| Label ingresado        | API Name generado        |
|------------------------|--------------------------|
| Nombre del Cliente     | `nombre_del_cliente` |
| N° de Teléfono / Móvil         | `n_de_telefono_movil`      |
| Código Producto SF     | `codigo_producto_sf` |

<img src="https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/record-triggered-flows/0f2675f8e3c0586be8533c1b39abb7a0_badge.png" alt="Flows Logo" title="Salesforce Auto-API Logo" width="35" align="center"/> <strong> Flows</strong>

| Tipo de Flow         | Label generado        |API Name generado        |
|------------------------|--------------------------|--------------------------|
| Record-Triggered Flow     | `Account [RTF]  \| (CRT)-(ARR)  \| - Update Status  \| [SYN]` | `account_rtf_crt_arr_update_status_syn` |
| Screen Flow         | `Case [SCF] - Create new record`      | `case_scf_create_new_record` |
| Autolaunched Flow     | `Send Email [ALF] - (Notify Case Owner) \| [F]` | `send_email_alf_notify_case_owner_f` |
| Schedule-Triggered Flow     | `Opportunity [STF] \| (W)-(22:30) \| - Send CSV File` | `opportunity_stf_w_22_30_send_csv_file` |

##   Instalación desde Chrome Web Store <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png" alt="Google Chrome" width="35" align="center"/>

La extensión puede instalarse directamente desde la **Chrome Web Store** en pocos pasos.

### Pasos de instalación

1. Accede a la extensión en la **Chrome Web Store** desde este enlace -> <a href="https://chromewebstore.google.com/detail/ipgbaecfammahenbamajlnpglkjjabdp?utm_source=item-share-cb" target="_blank"> Salesforce Auto-Api</a>.
2. Haz clic en el botón **“Añadir a Chrome”**.
3. Confirma la instalación cuando el navegador lo solicite.

Una vez instalada, la extensión quedará disponible en la barra de herramientas de Chrome.

### 📌 Fijar la extensión (opcional)

Para un acceso más rápido:

1. Haz clic en el ícono de **Extensiones** (pieza de rompecabezas) en la barra de Chrome.
2. Busca la extensión en la lista.
3. Haz clic en el ícono de **pin** para fijarla en la barra.

La extensión quedará lista para usarse tanto desde el popup como automáticamente dentro de Salesforce.


## 🔐 Privacidad y seguridad

- La extensión **no recopila datos personales**.
- No se envía información a servidores externos.
- Todo el procesamiento se realiza localmente en el navegador.
- El almacenamiento local se utiliza únicamente para guardar el último valor ingresado en el popup.

## 🌐 Dominios compatibles

La extensión se ejecuta exclusivamente en los siguientes dominios:

- `*.salesforce.com/*`
- `*.salesforce-setup.com/*`
- `*.lightning.force.com/*`

______________________________________________
  
> [!NOTE]
> ## Propósito del Proyecto
> - Estandarizar el nombrado de flows dentro de Salesforce y evitar los API Names mal formados.
> - Facilitar la búsqueda de los diferentes componentes dentro de los Conjuntos de Cambios (Change Sets), Integraciones y otros procesos que requieran la visualización de los API Names.
______________________________________________

![Readme by:](https://img.shields.io/badge/Readme%20by:-00A1E0?style=for-the-badge&logo=account&logoColor=white)
[![JulianKer](https://img.shields.io/badge/JulianKer-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/JulianKer)
