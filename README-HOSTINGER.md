# GESTIONSOFTDEV — Landing page

Proyecto: React + TypeScript + Vite + Tailwind CSS.

## 1. Requisitos
- Node.js 20 LTS recomendado.
- npm.
- Editor como Visual Studio Code.

## 2. Instalar y ejecutar localmente

Abre una terminal en la carpeta del proyecto:

```bash
npm install
npm run dev
```

Vite mostrará una dirección local, normalmente http://localhost:5173.

## 3. Configuración obligatoria antes de publicar

Edita `src/config.ts`:

```ts
export const SITE_CONFIG = {
  brand: 'GESTIONSOFTDEV',
  domain: 'https://gestionsoftdev.com',
  whatsappNumber: '573001234567', // reemplazar por el número real
  email: 'contacto@gestionsoftdev.com', // configurar buzón real
  city: 'Colombia',
  instagramUrl: '',
  facebookUrl: '',
  linkedinUrl: '',
}
```

El número de WhatsApp debe llevar código de país y solo números. Para Colombia empieza por 57. Reemplaza el número de ejemplo antes de publicar. Configura también el correo y las redes reales.

Revisa los textos y funcionalidades de cada producto. Las funciones marcadas con asterisco son ejemplos sujetos a disponibilidad; elimina lo que el software no tenga.

## 4. Crear versión de producción

```bash
npm run build
```

El resultado se genera en la carpeta `dist/`. Esa carpeta es la que se publica en el hosting.

## 5. Publicar en Hostinger

Para un plan de hosting compartido con Administrador de archivos:

1. Ejecuta `npm install` y `npm run build` en tu computador.
2. Abre `dist/` y comprueba que contiene `index.html`, `assets/`, `favicon.svg`, `robots.txt` y `sitemap.xml`.
3. Comprime el CONTENIDO de `dist/` en un ZIP. No comprimas la carpeta `dist` como carpeta contenedora.
4. Entra a hPanel → Archivos → Administrador de archivos.
5. Abre `public_html` del dominio.
6. Haz copia de seguridad de los archivos que ya existan.
7. Sube el ZIP y extráelo dentro de `public_html`.
8. Comprueba que `index.html` quede directamente en `public_html/index.html`.
9. Activa SSL/HTTPS desde hPanel y prueba la página en celular y computador.

Si el dominio usa una carpeta raíz distinta, publica en el directorio asignado por Hostinger.

## 6. Formulario y WhatsApp

El formulario valida los campos en el navegador y abre WhatsApp con el mensaje preparado. No guarda datos en una base de datos ni envía correos automáticamente.

Para capturar prospectos sin depender de que el usuario termine de enviar el WhatsApp, conecta un backend o un proveedor de formularios/CRM (por ejemplo, Formspree, HubSpot o un endpoint propio). Configura protección antispam y consentimiento de tratamiento de datos.

## 7. Antes de salir a producción

- Sustituir número, correo y redes sociales.
- Publicar política de tratamiento de datos y enlazarla desde el formulario/footer.
- Verificar que las funcionalidades anunciadas existan en cada producto.
- Revisar que el nombre y dominio puedan utilizarse comercialmente.
- Configurar Google Analytics 4 y Meta Pixel solo con sus identificadores reales y respetando consentimiento/cookies aplicables.
- Crear correo empresarial y probar recepción.
- Verificar títulos, descripción, favicon, sitemap y Search Console.
- Probar formulario, WhatsApp, enlaces, responsive y velocidad.
- Confirmar que el servicio de facturación electrónica, si se ofrece, cumple los requisitos DIAN.

## 8. Nota de despliegue

Este proyecto se compila como sitio estático. No requiere Node.js ejecutándose en Hostinger después de generar `dist/`. Si en el futuro se incorpora un backend, base de datos o CRM, esos servicios deben desplegarse y asegurarse por separado.


## 9. Documentos legales incorporados (borradores para completar)

Se agregaron `public/terminos-condiciones.html` y `public/politica-tratamiento-datos.html`. Sus enlaces aparecen en el footer y la autorización del formulario enlaza la política de datos.

**No publiques estos documentos sin completar todos los campos entre corchetes.** Debes definir quién opera legalmente la marca, identificación, domicilio y dirección de notificación judicial, correo y teléfono reales, fecha de adopción, canales de consultas y reclamaciones, proveedores/encargados reales y periodos de conservación.

El formulario actual abre WhatsApp; no almacena datos en una base de datos ni conserva evidencia técnica duradera de la autorización. Para trazabilidad implementa backend o CRM que registre versión de política, fecha/hora y evidencia de autorización. No actives analítica publicitaria ni píxeles hasta configurar el aviso y las opciones de cookies aplicables.

Estos textos son una base general, no una certificación de cumplimiento ni un concepto jurídico individual. Deben revisarse con abogado colombiano según la identidad, procesos y contratos reales, especialmente antes de vender software por suscripción, alojar datos de clientes o contratar desarrollos a medida.
