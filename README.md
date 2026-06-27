# Mi Biblia — App de lectura guiada (PWA)

App web instalable (PWA) de lectura bíblica con plan guiado, resaltado, progreso y resumen.
Texto: Reina-Valera 1960 completa (66 libros, 1189 capítulos), offline.

## Archivos
- `index.html` — la app completa (HTML/CSS/JS vanilla)
- `bible.json` — texto RVR1960 completo {libro:{capitulo:{versiculo:texto}}}
- `bible_index.json` — índice canónico de libros con conteo de capítulos
- `plan.js` — plan de lectura de 14 días + resumen de la Biblia (contenido pre-generado)
- `manifest.json`, `sw.js`, `icon-*.png` — soporte PWA / offline

## Probar en tu computador
    cd biblia-app
    python3 -m http.server 8000
Abre http://localhost:8000 en el navegador.
(No funciona con doble-clic file:// por seguridad del navegador; necesita un servidor.)

## Instalar en tu celular (rápido, sin Play Store)
1. Sube esta carpeta a un hosting gratis con HTTPS:
   - GitHub Pages (gratis): crea un repo, sube los archivos, activa Pages.
   - O Netlify / Vercel: arrastra la carpeta.
2. Abre la URL en Chrome (Android) o Safari (iPhone).
3. Menú del navegador → "Agregar a pantalla de inicio".
   Queda como app, funciona offline, con tu progreso guardado en el teléfono.

## Empaquetar como APK para Google Play (opcional, más adelante)
Con la PWA publicada en HTTPS, usa Bubblewrap (de Google):
    npm i -g @bubblewrap/cli
    bubblewrap init --manifest https://TU-URL/manifest.json
    bubblewrap build
Genera un APK/AAB que puedes instalar directo o subir a Play Console.

## Próximos pasos sugeridos
- Ampliar el plan más allá de 14 días (agregar objetos a PLAN en plan.js).
- Lectura libre por libro/capítulo (los datos ya están todos en bible.json).
- Sincronización entre dispositivos (requiere backend; v2).
