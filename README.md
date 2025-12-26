
<img src="https://github.com/JulianKer/Salesforce-Auto-API-Extension/blob/main/icon_logo.png" alt="CRYPTO" width="50" />

# Salesforce Auto-API 


Salesforce Auto-API es una extensión para Google Chrome que convierte automáticamente los nombres de campos ingresados en Salesforce en **API Names válidos**, siguiendo el formato `snake_case`, con el objetivo de agilizar la configuración y evitar errores manuales.

## 🚀 Características

- Conversión automática de labels a API Names en Salesforce.
- Funcionamiento directo dentro de la interfaz de Salesforce (Setup).
- Popup manual para convertir valores labels y API Names tanto de campos/objetos como de Flows.
- Persistencia del último valor ingresado mediante almacenamiento local del navegador.
- No requiere configuración adicional.
- Procesamiento 100% local (sin envío de datos externos).
- Modo claro & oscuro.

## 🧠 ¿Cómo funciona?

La extensión ofrece **dos formas de uso**:

1. **Automática dentro de Salesforce**  
   - Detecta cuando el usuario escribe un label en algunos de los formularios estándar de Salesforce y genera automáticamente el API Name correspondiente.
   - Opci+on de desactivar el Auto-completado para evitar la conversión automática (ideal para realizar cambios de labels sin afectar el API Name actual).

2. **Mediante el popup de la extensión**  
   - El usuario puede abrir el popup, ingresar un texto y obtener su versión en API Name.  
   - El último valor ingresado se guarda localmente para facilitar su reutilización.
   - Construye intuitivamente el label y API Name de los diferentes tipos de flujos más utilizados de Salesforce.
     
## 🧩 Ejemplo de conversión

- Campos/Objetos u otras configuraciones:

| Label ingresado        | API Name generado        |
|------------------------|--------------------------|
| Nombre del Cliente     | `nombre_del_cliente` |
| N° de Teléfono / Móvil         | `n_de_telefono_movil`      |
| Código Producto SF     | `codigo_producto_sf` |

- Flows

| Tipo de Flow         | Label generado        |API Name generado        |
|------------------------|--------------------------|--------------------------|
| Record-Triggered Flow     | `Account [RTF]  \| (CRT)-(ARR)  \| - Update Status  \| [SYN]` | `account_rtf_crt_arr_update_status_syn` |
| Screen Flow         | `Case [SCF] - Create new record`      | `case_scf_create_new_record` |
| Autolaunched Flow     | `Send Email [ALF] - (Notify Case Owner) \| [F]` | `send_email_alf_notify_case_owner_f` |
| Schedule-Triggered Flow     | `Opportunity [STF] \| (W)-(22:30) \| - Send CSV File` | `opportunity_stf_w_22_30_send_csv_file` |

## 🔐 Privacidad y seguridad

- La extensión **no recopila datos personales**.
- No se envía información a servidores externos.
- Todo el procesamiento se realiza localmente en el navegador.
- El almacenamiento local se utiliza únicamente para guardar el último valor ingresado en el popup.

## 🌐 Dominios compatibles

La extensión se ejecuta exclusivamente en los siguientes dominios:

- `*.salesforce.com`
- `*.salesforce-setup.com`
- `*.lightning.force.com`
______________________________________________

![Readme by:](https://img.shields.io/badge/Readme%20by:-00A1E0?style=for-the-badge&logo=account&logoColor=white)
[![JulianKer](https://img.shields.io/badge/JulianKer-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/JulianKer)
