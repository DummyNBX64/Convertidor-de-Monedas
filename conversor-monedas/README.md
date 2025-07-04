# 💱 Conversor de Monedas
Proyecto conversor de monedas usando una **API real** (exchangerate.host) para obtener tasas de cambio actualizadas, con Front-End y simulación de almacenamiento local.


## 🚀 Tecnologías utilizadas

- **HTML:** estructura de la interfaz.
- **CSS:** diseño moderno, limpio y con modo oscuro.
- **JavaScript:** lógica de conversión, conexión a la API y almacenamiento del historial.
- **API:** [exchangerate.host](https://exchangerate.host/) o cualquier otra que prefieras.


## Actividades Prioritarias
| Nº | Tarea | Prioridad | Responsable | Estado |
|----|-------|------------|--------------|--------|
| 1 | Estructura base | Alta | Aide | Terminado |
| 2 | Maquetar interfaz | Alta | Erick | Terminado |
| 3 | Estilos base | Media | Erick | Terminado |
| 4 | Modo oscuro | Baja | Erick | Terminado |
| 5 | Lógica JS básica | Alta | Erick | Terminado |
| 6 | Conexión API | Alta | Aide | Terminado |
| 7 | Mostrar resultado | Alta | Aide | Terminado |
| 8 | Validación de errores | Media | Aide | Terminado |
| 9 | Historial local | Baja | Erick | Terminado |
| 10 | Pruebas | Alta | Aide | Terminado |
| 11 | README | Alta | Aide | Terminado |
| 12 | Git | Alta | Erick | Terminado |


## 📌 Funcionalidades

✅ Convertir entre **USD, EUR, MXN, GBP y JPY**.  
✅ El usuario elige **moneda de origen y destino**.  
✅ Llamada a la API para obtener tipo de cambio real.  
✅ Validación de cantidad y monedas iguales.  
✅ Historial guardado en `localStorage`.  
✅ Botón para cambiar a **modo oscuro**.


## ⚙️ Cómo usar

1️⃣ Clona el repositorio o descarga los archivos.  
2️⃣ Si usas una API con clave, pon tu **API key** en el archivo `script.js`.  
3️⃣ Abre `index.html` en un servidor local (XAMPP, Live Server, etc.).  
4️⃣ Ingresa una cantidad, elige las monedas y haz clic en **Convertir**.  
5️⃣ Activa o desactiva el modo oscuro con el botón.


## 🔑 Configurar clave de API

- Si tu API elegida la requiere (ejemplo: `exchangerate-api.com`), reemplaza:
  ```js

  const apiKey = 'TU_API_KEY_AQUI';
