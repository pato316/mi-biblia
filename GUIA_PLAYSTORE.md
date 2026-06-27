# Guía: Publicar Mi Biblia en Google Play Store

Esta guía te lleva de tu PWA (ya en GitHub Pages) a una app publicada en Google Play,
usando Bubblewrap (TWA). Todo lo que dice "EN TU COMPUTADOR" lo corres tú localmente.

---

## Resumen del proceso

1. Tener la app en GitHub Pages con HTTPS (ya está ✓)
2. Instalar Bubblewrap en tu computador
3. Generar la app Android (AAB) con Bubblewrap
4. Subir el archivo `assetlinks.json` a tu sitio (lo verifica con la app)
5. Crear cuenta de desarrollador de Google Play (25 USD, una vez)
6. Subir el AAB y publicar

---

## Requisitos previos (EN TU COMPUTADOR)

- **Node.js 18+** instalado. Verifica con: `node --version`
- **Java JDK 17** (Bubblewrap lo necesita para firmar). Bubblewrap puede instalar
  el SDK de Android automáticamente la primera vez.
- Tu URL pública, por ejemplo: `https://TUUSUARIO.github.io/mi-biblia/`

---

## Paso 1 — Instalar Bubblewrap

```bash
npm install -g @bubblewrap/cli
```

La primera vez que lo uses, te preguntará si quieres que instale el JDK y el Android SDK.
Acepta (responde Yes). Descarga varios cientos de MB; es normal.

---

## Paso 2 — Inicializar el proyecto

En una carpeta nueva y vacía (no dentro del repo de la app):

```bash
bubblewrap init --manifest https://TUUSUARIO.github.io/mi-biblia/manifest.json
```

Te hará preguntas. Valores recomendados:
- **Domain**: TUUSUARIO.github.io
- **URL path**: /mi-biblia/
- **Application name**: Mi Biblia
- **Short name**: Mi Biblia
- **Application ID** (package): algo único como `com.tunombre.mibiblia`
  (NO se puede cambiar después de publicar; elígelo bien)
- **Display mode**: standalone
- **Orientation**: portrait
- **Status bar color**: #b8893a
- **Icon**: confirma que toma el de tu manifest
- **Signing key**: deja que cree una nueva (te pedirá una contraseña)

### ⚠️ IMPORTANTE — La clave de firma
Bubblewrap crea un archivo `android.keystore` y te pide contraseñas.
**Guarda ese archivo y las contraseñas en un lugar muy seguro y respaldado.**
Si los pierdes, NO podrás volver a actualizar tu app en Play Store nunca más.
Hazte una copia (por ejemplo, súbelo a tu gestor de contraseñas o nube privada).

---

## Paso 3 — Construir la app

```bash
bubblewrap build
```

Esto genera:
- `app-release-bundle.aab` — esto es lo que subes a Google Play
- `app-release-signed.apk` — para probar en tu propio celular antes (opcional)

Para probarlo en tu Android conectado por USB:
```bash
bubblewrap install
```

---

## Paso 4 — Verificar la propiedad del sitio (assetlinks.json)

Para que la app abra a pantalla completa (sin barra de navegador), Google verifica
que tú eres dueño del sitio. Bubblewrap te muestra el contenido de un archivo
`assetlinks.json` con la huella (SHA-256) de tu clave.

1. Bubblewrap imprime ese archivo, o lo obtienes con:
   ```bash
   bubblewrap fingerprint
   ```
2. Crea en tu repo la carpeta `.well-known` y dentro el archivo `assetlinks.json`.
   Debe quedar accesible en:
   `https://TUUSUARIO.github.io/mi-biblia/.well-known/assetlinks.json`
3. Sube ese cambio a GitHub.

(En este proyecto te dejo una **plantilla** de assetlinks.json lista; solo
reemplazas la huella SHA-256 que te da Bubblewrap y el package name.)

---

## Paso 5 — Cuenta de Google Play Console

1. Entra a https://play.google.com/console
2. Crea tu cuenta de desarrollador. Pago único de **25 USD**.
3. Google pedirá **verificación de identidad** (documento). Puede tardar días en aprobarse.
4. Una vez aprobada, crea una nueva aplicación.

---

## Paso 6 — Subir y publicar

En Play Console, con tu app creada:
1. Sube el archivo `app-release-bundle.aab`.
2. Completa las fichas obligatorias:
   - Descripción corta y larga
   - Capturas de pantalla (mínimo 2, del teléfono)
   - Ícono de 512x512 (usa `icon-512.png`)
   - Gráfico destacado (1024x500)
   - Política de privacidad (necesitas una URL; al guardar solo datos en el
     dispositivo, es una política simple; se puede alojar gratis)
   - Clasificación de contenido (cuestionario)
   - País y precio (gratis)
3. Envía a revisión. Google revisa en horas o días.
4. Cuando aprueben, queda publicada.

---

## Notas y consejos

- **Actualizar la app luego**: si cambias el contenido web (en GitHub Pages), la app
  TWA muestra los cambios automáticamente, porque solo "envuelve" tu sitio. Solo necesitas
  volver a generar el AAB si cambias el ícono, nombre o configuración nativa.
- **Para subir una nueva versión nativa**: incrementa `appVersion` y `appVersionCode`
  en `twa-manifest.json`, vuelve a `bubblewrap build`, y sube el nuevo AAB.
- **Política de privacidad**: como la app no recoge datos (todo se guarda en el teléfono),
  basta una página simple. Se puede alojar en el mismo GitHub Pages.
- **Alternativa más fácil**: si el proceso de Play Console se hace pesado, recuerda que
  "Agregar a la pantalla principal" en Chrome ya te da la app instalada sin nada de esto.

---

Mi Biblia · Guía de publicación · Uso personal.
