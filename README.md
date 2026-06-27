# Mi Biblia — App de lectura bíblica

App personal de lectura de la Biblia (Reina-Valera 1960), offline, con plan de lectura, resaltado de texto, notas personales, búsqueda y seguimiento de avance. Funciona como aplicación instalable en el celular (PWA).

---

## Qué incluye

- **Biblia completa** RVR1960 (66 libros, 1189 capítulos) para leer sin conexión.
- **Plan temático** de 14 días con explicación completa (contexto, mensaje, palabras clave, conexiones, reflexión).
- **Plan anual** de 395 lecturas que recorre toda la Biblia en un año, con resumen por día.
- **Resaltado de texto**: selecciona cualquier frase y guárdala en Destacados.
- **Notas personales** por pasaje.
- **Buscador** de palabras y citas (ej. "amor" o "Juan 3:16").
- **Ajustes**: tamaño de letra, modo noche, y respaldo de datos (exportar/importar).
- **Continuar leyendo**: retoma la última lectura con un toque.
- Todo el avance, destacados y notas se guardan en el propio dispositivo.

---

## Cómo subirla al celular (Android) con GitHub Pages

### 1. Crear el repositorio
1. Entra a github.com e inicia sesión.
2. Crea un repositorio nuevo, por ejemplo `mi-biblia`.
3. Márcalo como **Public** (GitHub Pages gratuito requiere repositorio público).
4. Créalo vacío (sin README, para no mezclar).

### 2. Subir los archivos
Sube **el contenido** de la carpeta `biblia-app` a la raíz del repositorio.
Importante: `index.html` debe quedar en la raíz del repo, no dentro de una subcarpeta.

Opción terminal:
```bash
cd biblia-app
git init
git add .
git commit -m "Mi Biblia app"
git branch -M main
git remote add origin https://github.com/TUUSUARIO/mi-biblia.git
git push -u origin main
```
(reemplaza `TUUSUARIO` por tu usuario de GitHub)

O bien, en la web del repo: **Add file → Upload files**, arrastra todos los archivos y confirma.

### 3. Activar GitHub Pages
1. En el repositorio ve a **Settings → Pages**.
2. En "Source" elige la rama `main` y la carpeta `/ (root)`.
3. Guarda. En 1–2 minutos verás un enlace tipo:
   `https://TUUSUARIO.github.io/mi-biblia/`

### 4. Instalar en el celular
1. Abre ese enlace en **Chrome en tu Android**.
2. Espera a que cargue del todo la primera vez (descarga la Biblia completa, unos segundos).
3. Toca el menú de tres puntos (arriba a la derecha) y elige **Agregar a la pantalla principal** / **Instalar aplicación**.
4. El ícono aparece en tu pantalla de inicio. Al abrirlo se ve a pantalla completa, como una app.
5. Después de esa primera carga, funciona **sin internet**.

---

## Respaldo de tus datos

Tus destacados, notas y avance se guardan solo en el dispositivo.
- Apenas la instales en el celular, entra a **Ajustes (engranaje) → Exportar mis datos** para tener tu primer respaldo.
- Si cambias de teléfono o limpias el navegador, usa **Importar datos** para restaurarlo.

---

## Actualizar la app más adelante

Si haces cambios:
1. Vuelve a subir los archivos modificados a GitHub.
2. Sube el número de versión del cache en `sw.js` (la línea `const CACHE='mibiblia-vXX'`).
3. Abre la app en el celular; se actualizará sola al detectar la nueva versión.

En el computador, para forzar la actualización mientras pruebas: `Ctrl+Shift+R`.

---

## Estructura de archivos

- `index.html` — La app completa (interfaz y lógica).
- `bible.json` — Texto bíblico RVR1960 completo.
- `bible_index.json` — Índice de los 66 libros y sus capítulos.
- `plan.js` — Plan temático de 14 días con contenido completo.
- `plan_full_a/b/c.js` — Plan anual de 395 días (AT histórico, poéticos/proféticos, NT).
- `manifest.json` — Configuración de la app instalable (nombre, ícono, colores).
- `sw.js` — Service worker: hace que funcione offline.
- `icon-192.png`, `icon-512.png` — Íconos de la app.

---

## Llevarla a la Play Store (opcional, más adelante)

"Agregar a la pantalla principal" ya la instala como app. Si más adelante quieres publicarla
de verdad en Google Play, se empaqueta como APK usando **Bubblewrap** (la convierte en una app
Android nativa que envuelve esta PWA). Es un paso aparte que se puede hacer cuando quieras.

---

Mi Biblia · Reina-Valera 1960 · Uso personal.
