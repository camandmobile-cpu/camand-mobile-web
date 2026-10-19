/* ===================== DATA ===================== */
const SISTECREDITO_LOGO = "img/sistecredito-logo.png";
const CAMAND_LOGO = "img/camand-logo.png";

/* ===================== ÍCONOS SVG (reemplazan los emojis del diseño) ===================== */
// Set pequeño de íconos vectoriales reutilizables — 16x16, trazo currentColor —
// para no depender de emojis en el carrito ni en el resto de la interfaz.
// Los emojis que SÍ se dejan intactos son los que vienen dentro de datos reales
// del catálogo (colores/promos escritos en la Hoja de Google o en el respaldo
// sin conexión), porque son contenido de producto, no diseño de la página.
const ICON_TRUCK = `<svg class="icon-inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 6h11v9H2z"/><path d="M13 10h4l4 3.2V15h-8z"/><circle cx="6.5" cy="17.5" r="1.6"/><circle cx="16.5" cy="17.5" r="1.6"/></svg>`;
const ICON_SHIELD = `<svg class="icon-inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/></svg>`;
const ICON_LOCK = `<svg class="icon-inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="10.5" width="14" height="9" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/></svg>`;
const ICON_GIFT = `<svg class="icon-inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="8.5" width="18" height="12" rx="1.5"/><path d="M3 12.5h18M12 8.5v12"/><path d="M12 8.5C9 8.5 7.5 7 7.5 5.3 7.5 4 8.5 3 9.8 3 11.6 3 12 5.5 12 8.5ZM12 8.5c3 0 4.5-1.5 4.5-3.2C16.5 4 15.5 3 14.2 3 12.4 3 12 5.5 12 8.5Z"/></svg>`;
const ICON_CARD = `<svg class="icon-inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2.5" y="5.5" width="19" height="13" rx="2"/><path d="M2.5 10h19"/></svg>`;
const ICON_BOX = `<svg class="icon-inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 8l9-4.5L21 8v8l-9 4.5L3 16Z"/><path d="M3 8l9 4.5L21 8M12 12.5V21"/></svg>`;
const ICON_ZAP = `<svg class="icon-inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 2 4 14h6l-1 8 9-12h-6z"/></svg>`;
const ICON_CHECK = `<svg class="icon-inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="9.5"/><path d="M8 12.3l2.6 2.6L16.2 9"/></svg>`;
const ICON_SPARKLE = `<svg class="icon-inline" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l1.8 5.6L19.5 9l-5.7 1.4L12 16l-1.8-5.6L4.5 9l5.7-1.4Z"/></svg>`;
const ICON_PHOTO = `<svg class="icon-inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4.5" width="18" height="15" rx="2"/><circle cx="9" cy="10" r="1.8"/><path d="M21 16l-5.5-5-4 4-2.5-2L3 18"/></svg>`;
const ICON_HEART = `<svg class="icon-inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 20s-6.5-4-8.5-7.7C1.7 9 3 5.8 6 5.2c1.8-.35 3.4.5 4.4 1.9C11.4 5.7 13 4.85 14.8 5.2c3 .6 4.3 3.8 2.5 7.1C15.3 16 12 20 12 20Z"/></svg>`;
// Misma versión del ícono de caja, pero con comillas simples escapadas (\')
// para poder incrustarla dentro de un atributo onerror="...innerHTML='...'"
// sin romper el HTML — se usa solo en los 3 marcadores de "sin foto" del carrito.
const ICON_BOX_ESC = `<svg width=\\'18\\' height=\\'18\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'1.6\\'><path d=\\'M3 8l9-4.5L21 8v8l-9 4.5L3 16Z\\'/><path d=\\'M3 8l9 4.5L21 8M12 12.5V21\\'/></svg>`;
const IPHONE_CATALOG = [{n:"iPhone 13 ▫️128 GB • SIM física • Seminuevo • Equipo de exhibición 🎨 Rosa • Negro • Azul • Blanco",p:1198890,notes:"Pantalla Super Retina XDR 6,1”; chip A15 Bionic; doble cámara 12 MP; Face ID; 5G; MagSafe."},{n:"iPhone 13 Pro ▫️128 GB • SIM física • Seminuevo • Equipo de exhibición",p:1623990,notes:"Pantalla Super Retina XDR 6,1”; chip A15 Bionic; doble cámara 12 MP; Face ID; 5G; MagSafe."},{n:"iPhone 13 Pro ▫️256 GB • SIM física • Seminuevo • Equipo de exhibición",p:1791990,notes:"Pantalla Super Retina XDR 6,1”; chip A15 Bionic; doble cámara 12 MP; Face ID; 5G; MagSafe."},{n:"iPhone 13 Pro ▫️1 TB • SIM física • Seminuevo • Equipo de exhibición ⚪ Blanco",p:2015990,notes:"Pantalla Super Retina XDR 6,1”; chip A15 Bionic; doble cámara 12 MP; Face ID; 5G; MagSafe."},{n:"iPhone 13 Pro Max ▫️128 GB • Seminuevo • Equipo de exhibición",p:1903990,notes:"Pantalla Super Retina XDR 6,1”; chip A15 Bionic; doble cámara 12 MP; Face ID; 5G; MagSafe."},{n:"iPhone 13 Pro Max ▫️512 GB • SIM física • Seminuevo • Equipo de exhibición",p:2127990,notes:"Pantalla Super Retina XDR 6,1”; chip A15 Bionic; doble cámara 12 MP; Face ID; 5G; MagSafe."},{n:"iPhone 14 ▫️128 GB • eSIM • Seminuevo • Equipo de exhibición",p:1419990,notes:"Pantalla Super Retina XDR OLED 6,1”; chip A15 Bionic; doble cámara 12 MP; detección de accidentes; 5G; MagSafe."},{n:"iPhone 14 Pro ▫️128 GB • eSIM • Seminuevo • Equipo de exhibición ⚫ Negro • 💜 Morado",p:1860990,notes:"Pantalla Super Retina XDR OLED 6,1”; chip A15 Bionic; doble cámara 12 MP; detección de accidentes; 5G; MagSafe."},{n:"iPhone 14 Pro ▫️128 GB • eSIM • Seminuevo • Equipo de exhibición 🟡 Dorado • ⚪ Blanco",p:1860990,notes:"Pantalla Super Retina XDR OLED 6,1”; chip A15 Bionic; doble cámara 12 MP; detección de accidentes; 5G; MagSafe."},{n:"iPhone 14 Pro ▫️256 GB • eSIM • Seminuevo • Equipo de exhibición ⚫ Negro • 💜 Morado",p:1889990,notes:"Pantalla Super Retina XDR OLED 6,1”; chip A15 Bionic; doble cámara 12 MP; detección de accidentes; 5G; MagSafe."},{n:"iPhone 14 Pro ▫️512 GB • eSIM • Seminuevo • Equipo de exhibición",p:2127990,notes:"Pantalla Super Retina XDR OLED 6,1”; chip A15 Bionic; doble cámara 12 MP; detección de accidentes; 5G; MagSafe."},{n:"iPhone 14 Pro ▫️1 TB • eSIM • Seminuevo • Equipo de exhibición",p:2239990,notes:"Pantalla Super Retina XDR OLED 6,1”; chip A15 Bionic; doble cámara 12 MP; detección de accidentes; 5G; MagSafe."},{n:"iPhone 14 Pro Max ▫️128 GB • eSIM • Seminuevo • Equipo de exhibición ⚫ Negro • 💜 Morado",p:2105990,notes:"Pantalla Super Retina XDR OLED 6,1”; chip A15 Bionic; doble cámara 12 MP; detección de accidentes; 5G; MagSafe."},{n:"iPhone 14 Pro Max ▫️128 GB • eSIM • Seminuevo • Equipo de exhibición 🟡 Dorado • ⚪ Blanco",p:2148890,notes:"Pantalla Super Retina XDR OLED 6,1”; chip A15 Bionic; doble cámara 12 MP; detección de accidentes; 5G; MagSafe."},{n:"iPhone 14 Pro Max ▫️256 GB • eSIM • Seminuevo • Equipo de exhibición ⚫ Negro • 💜 Morado",p:2148890,notes:"Pantalla Super Retina XDR OLED 6,1”; chip A15 Bionic; doble cámara 12 MP; detección de accidentes; 5G; MagSafe."},{n:"iPhone 14 Pro Max ▫️256 GB • eSIM • Seminuevo • Equipo de exhibición 🟡 Dorado • ⚪ Blanco",p:2407990,notes:"Pantalla Super Retina XDR OLED 6,1”; chip A15 Bionic; doble cámara 12 MP; detección de accidentes; 5G; MagSafe."},{n:"iPhone 15 ▫️128 GB • eSIM • Seminuevo • Equipo de exhibición 🩷 Rosa",p:1781990,notes:"Pantalla Super Retina XDR OLED 6,1”; Dynamic Island; chip A16 Bionic; cámara principal 48 MP; USB-C; 5G."},{n:"iPhone 15 ▫️128 GB • eSIM • Seminuevo • Equipo de exhibición ⚫ Negro • 🔵 Azul",p:1762990,notes:"Pantalla Super Retina XDR OLED 6,1”; Dynamic Island; chip A16 Bionic; cámara principal 48 MP; USB-C; 5G."},{n:"iPhone 15 Pro ▫️128 GB • eSIM • Seminuevo • Equipo de exhibición",p:2248890,notes:"Pantalla Super Retina XDR OLED 6,1”; Dynamic Island; chip A16 Bionic; cámara principal 48 MP; USB-C; 5G."},{n:"iPhone 15 Pro ▫️256 GB • eSIM • Seminuevo • Equipo de exhibición",p:2248890,notes:"Pantalla Super Retina XDR OLED 6,1”; Dynamic Island; chip A16 Bionic; cámara principal 48 MP; USB-C; 5G."},{n:"iPhone 15 Pro ▫️512 GB • eSIM • Seminuevo • Equipo de exhibición ⚪ Titanio Natural",p:2575990,notes:"Pantalla Super Retina XDR OLED 6,1”; Dynamic Island; chip A16 Bionic; cámara principal 48 MP; USB-C; 5G."},{n:"iPhone 15 Pro Max ▫️256 GB • eSIM • Seminuevo • Equipo de exhibición",p:2693990,notes:"Pantalla Super Retina XDR OLED 6,1”; Dynamic Island; chip A16 Bionic; cámara principal 48 MP; USB-C; 5G."},{n:"iPhone 16 ▫️128 GB • eSIM • Seminuevo ⚫ Negro 🔋 Batería 89%",p:2301990,notes:"Pantalla Super Retina XDR OLED 6,1”; chip A18; cámara principal 48 MP; Control de Cámara; Apple Intelligence; USB-C; 5G."},{n:"iPhone 16 Plus ▫️128 GB • eSIM • Seminuevo • Equipo de exhibición 🔵 Azul 🔋 Batería 92%",p:2348890,notes:"Pantalla Super Retina XDR OLED 6,1”; chip A18; cámara principal 48 MP; Control de Cámara; Apple Intelligence; USB-C; 5G."},{n:"iPhone 16 Pro ▫️256 GB • eSIM • Seminuevo • Equipo de exhibición",p:2898890,notes:"Pantalla Super Retina XDR OLED 6,1”; chip A18; cámara principal 48 MP; Control de Cámara; Apple Intelligence; USB-C; 5G."},{n:"iPhone 16 Pro Max ▫️256 GB • eSIM • Seminuevo • Equipo de exhibición 🔋 Batería inferior al 100%",p:3330990,notes:"Pantalla Super Retina XDR OLED 6,1”; chip A18; cámara principal 48 MP; Control de Cámara; Apple Intelligence; USB-C; 5G."},{n:"iPhone 17 ▫️256 GB • SIM física • Nuevo",p:3281990,notes:"Pantalla Super Retina XDR; chip de nueva generación; cámara principal de alta resolución; USB-C; 5G; Apple Intelligence. Especificaciones exactas según versión."},{n:"iPhone 17 Pro Max ▫️256 GB • eSIM • Nuevo ⚪ Silver",p:4506990,notes:"Pantalla Super Retina XDR; chip de nueva generación; cámara principal de alta resolución; USB-C; 5G; Apple Intelligence. Especificaciones exactas según versión."}];

const ANDROID_BRANDS_DATA = [
  {name:"Samsung", models:[{n:"A07 64",p:347990,notes:"Referencia comercial del proveedor. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"A07 128/4 Dual",p:391090,notes:"128 GB almacenamiento / 4 GB RAM • Dual SIM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"A07 128/6",p:425890,notes:"128 GB almacenamiento / 6 GB RAM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"A17 128 4G Dual",p:509990,notes:"Conectividad 4G • Dual SIM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"A17 256/8 4G Dual",p:754490,notes:"256 GB almacenamiento / 8 GB RAM • Conectividad 4G • Dual SIM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"A17 256/8 5G 1 SIM",p:754490,notes:"256 GB almacenamiento / 8 GB RAM • Conectividad 5G. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"A37 5G 128",p:1018790,notes:"Conectividad 5G. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"A37 5G 256",p:1299990,notes:"Conectividad 5G. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"A56 5G 256/8",p:1399990,notes:"256 GB almacenamiento / 8 GB RAM • Conectividad 5G. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"A57 5G 256/8",p:1665890,notes:"256 GB almacenamiento / 8 GB RAM • Conectividad 5G. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"S26 ULTRA 5G 25612",p:3831690,notes:"Pantalla Dynamic AMOLED 2X 6,9” QHD+ 120 Hz; Snapdragon 8 Elite Gen 5 for Galaxy; 200 MP + 50 MP + 50 MP + 10 MP; S Pen; 5G; batería 5000 mAh."}]},
  {name:"Xiaomi / Redmi / POCO", models:[{n:"A7 64/4",p:356390,notes:"64 GB almacenamiento / 4 GB RAM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"A7 Pro 64/4",p:371990,notes:"64 GB almacenamiento / 4 GB RAM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"A7 Pro 128/4",p:413890,notes:"128 GB almacenamiento / 4 GB RAM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"REDMI 17 128/4",p:617990,notes:"128 GB almacenamiento / 4 GB RAM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"REDMI 17 256/4",p:731990,notes:"256 GB almacenamiento / 4 GB RAM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"REDMI 17 256/6",p:797990,notes:"256 GB almacenamiento / 6 GB RAM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"15C 128/4",p:473990,notes:"128 GB almacenamiento / 4 GB RAM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"15C 256/4",p:533990,notes:"256 GB almacenamiento / 4 GB RAM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"15C 256/8",p:605990,notes:"256 GB almacenamiento / 8 GB RAM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"Redmi 15 256/8",p:666290,notes:"256 GB almacenamiento / 8 GB RAM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"Note 15 512/8",p:881990,notes:"512 GB almacenamiento / 8 GB RAM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"Note 15 Pro 512/12",p:1198790,notes:"512 GB almacenamiento / 12 GB RAM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"Note 15 Pro plus 5G 512/12",p:1724690,notes:"512 GB almacenamiento / 12 GB RAM • Conectividad 5G. Datos técnicos detallados: por confirmar según referencia exacta."}]},
  {name:"Motorola", models:[{n:"G06 128/4",p:455990,notes:"128 GB almacenamiento / 4 GB RAM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"G06 256/4+8",p:491990,notes:"256 GB almacenamiento / 4 GB RAM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"G17 256/4",p:605990,notes:"256 GB almacenamiento / 4 GB RAM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"G67 4G 256/8",p:887990,notes:"256 GB almacenamiento / 8 GB RAM • Conectividad 4G. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"edge 50 fusión 256",p:899990,notes:"Referencia comercial del proveedor. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"edge 50 fusión 512",p:1103990,notes:"Referencia comercial del proveedor. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"G77 4G 256/8 +⚽ original",p:911990,notes:"256 GB almacenamiento / 8 GB RAM • Conectividad 4G. Datos técnicos detallados: por confirmar según referencia exacta."}]},
  {name:"Honor", models:[{n:"play 10 64/3+3",p:368390,notes:"64 GB almacenamiento / 3 GB RAM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"play 10 128/4",p:431990,notes:"128 GB almacenamiento / 4 GB RAM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"X7D 256/8",p:875990,notes:"256 GB almacenamiento / 8 GB RAM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"X8D 512/8",p:1163990,notes:"512 GB almacenamiento / 8 GB RAM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"X9D 256/8",p:1187990,notes:"256 GB almacenamiento / 8 GB RAM. Datos técnicos detallados: por confirmar según referencia exacta."}]},
  {name:"Tecno / itel", models:[{n:"itel A100c S 64GB",p:311990,notes:"Almacenamiento: 64 GB • Conectividad 4G. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"itel A100c 128",p:359990,notes:"Referencia comercial del proveedor. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"spark Go3 64/4",p:395890,notes:"64 GB almacenamiento / 4 GB RAM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"spark Go3 128/4",p:443890,notes:"128 GB almacenamiento / 4 GB RAM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"pova 6 256/16 5G(termo)",p:641990,notes:"256 GB almacenamiento / 16 GB RAM • Conectividad 5G. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"spark 50 5G 258",p:965990,notes:"Conectividad 5G. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"pova slim 5G 258GB",p:1049990,notes:"Almacenamiento: 258 GB • Conectividad 5G. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"pova curve 2 5G 258/8+8",p:1085990,notes:"258 GB almacenamiento / 8 GB RAM • Conectividad 5G. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"CAMON 50 ULTRA 5G 258/8+8+ obsequio 🎁",p:1399990,notes:"258 GB almacenamiento / 8 GB RAM • Conectividad 5G. Datos técnicos detallados: por confirmar según referencia exacta."}]},
  {name:"ZTE", models:[{n:"A35e 64/3",p:321590,notes:"64 GB almacenamiento / 3 GB RAM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"A56 128/12",p:395990,notes:"128 GB almacenamiento / 12 GB RAM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"A56 PRO 128/12",p:413990,notes:"128 GB almacenamiento / 12 GB RAM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"V70 MAX 256/20",p:473990,notes:"256 GB almacenamiento / 20 GB RAM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"V80 MAX 256/20",p:499990,notes:"256 GB almacenamiento / 20 GB RAM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"V80 PRO 256/20",p:719990,notes:"256 GB almacenamiento / 20 GB RAM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"nubia air slim 5G 256",p:899990,notes:"Conectividad 5G. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"nubia focus 2ultra 5G 256/20",p:971990,notes:"256 GB almacenamiento / 20 GB RAM • Conectividad 5G. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"nubia neo 5 5G 256/20",p:1121990,notes:"256 GB almacenamiento / 20 GB RAM • Conectividad 5G. Datos técnicos detallados: por confirmar según referencia exacta."}]},
  {name:"OPPO", models:[{n:"A5 5G 256 GB 8 ram 5G",p:1013990,notes:"Almacenamiento: 256 GB • RAM: 8 GB • Conectividad 5G. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"A6C 64/4",p:779990,notes:"64 GB almacenamiento / 4 GB RAM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"A6C 128/4",p:863990,notes:"128 GB almacenamiento / 4 GB RAM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"A6K 256/4",p:1115990,notes:"256 GB almacenamiento / 4 GB RAM. Datos técnicos detallados: por confirmar según referencia exacta."}]},
  {name:"Infinix", models:[{n:"Hot 70 256/4+4",p:719990,notes:"256 GB almacenamiento / 4 GB RAM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"Hot 60 pro + 256/16",p:941990,notes:"256 GB almacenamiento / 16 GB RAM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"note edge 5G curvó 256/8+8",p:1091990,notes:"256 GB almacenamiento / 8 GB RAM • Conectividad 5G. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"NOTE 60 pro 256/16",p:1599990,notes:"256 GB almacenamiento / 16 GB RAM. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"note 60 ultra PIRIFARINA super edición",p:3599990,notes:"Referencia comercial del proveedor. Datos técnicos detallados: por confirmar según referencia exacta."}]},
  {name:"Otras marcas", models:[{n:"rompe muros DIKEY D8 5g",p:117590,notes:"Conectividad 5G. Datos técnicos detallados: por confirmar según referencia exacta."}]},
];

const TABLET_MODELS = [{n:"iPad A16 ▫️128 GB • Wi-Fi • Nuevo 🔵 Azul • 🟡 Amarillo",p:1651990,notes:"Pantalla Liquid Retina 11”; chip A16; almacenamiento 128 GB; Wi‑Fi; USB-C; compatible con accesorios seleccionados de iPad."},{n:"TAB A11 Wi-Fi 8\" 128/8",p:525090,notes:"128 GB almacenamiento / 8 GB RAM • Tablet. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"pad 2 9.7\" 64/4 wifi",p:631290,notes:"64 GB almacenamiento / 4 GB RAM • Wi‑Fi • Tablet. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"honor pad x8D 128/4 wifi",p:637190,notes:"128 GB almacenamiento / 4 GB RAM • Wi‑Fi • Tablet. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"tablet megapad wifi",p:589990,notes:"Wi‑Fi • Tablet. Datos técnicos detallados: por confirmar según referencia exacta."}];
const COMPUTADOR_MODELS = [{n:"macbook neo 256gb/8",p:2799990,notes:"Almacenamiento: 256 GB • Computador portátil. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"HP 14 N100",p:1199990,notes:"Computador portátil. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"HP 15 N305",p:1399990,notes:"Computador portátil. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"COMPUMAX ÓNIX 16/512",p:1499990,notes:"16 GB almacenamiento / 512 GB RAM • Computador portátil. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"LENOVO V14 G5",p:1499990,notes:"Computador portátil. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"HP 245 G10 RYZEN 3",p:1699990,notes:"Computador portátil. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"LENOVO SLIM 3 RYZEN 3",p:1599990,notes:"Computador portátil. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"ACER GO15",p:1799990,notes:"Computador portátil. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"HP 15 RYZEN 5",p:1699990,notes:"Computador portátil. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"ACER ASPIRE LITE 15 RYZEN 3",p:1499990,notes:"Computador portátil. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"HP 255R ATHLON 7120U",p:1299990,notes:"Computador portátil. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"LENOVO SLIM 3 15AHP10 RYZEN 5",p:1899990,notes:"Computador portátil. Datos técnicos detallados: por confirmar según referencia exacta."}];
const IMPRESORA_MODELS = [{n:"BROTHER DCP-T430",p:706790,notes:"Impresora. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"EPSON L3210",p:725690,notes:"Impresora. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"EPSON L3251",p:861390,notes:"Impresora. Datos técnicos detallados: por confirmar según referencia exacta."}];

const ACCESORIO_BRANDS_DATA = [
  {name:"Cargadores y cables", models:[{n:"Cubo Galaxy",p:33590,notes:"Accesorio de carga. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"cubo Apple 20w",p:53990,notes:"Accesorio de carga. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"powerbank magnétic 5.000/15w",p:296990,notes:"000 GB almacenamiento / 15 GB RAM • Batería portátil. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"ADATA cable cto 100w 2 metros",p:29690,notes:"Cable de carga/datos. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"power bank",p:60790,notes:"Batería portátil. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"cables de carga",p:10790,notes:"Cable de carga/datos. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"cargador completo",p:20190,notes:"Accesorio de carga. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"cubo de carga",p:20190,notes:"Accesorio de carga. Datos técnicos detallados: por confirmar según referencia exacta."}]},
  {name:"Audio", models:[{n:"Xiaomi Buds 6 Play",p:175490,notes:"Audio inalámbrico / audífonos • Audio Bluetooth. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"BT Speaker 5W",p:80990,notes:"Audio Bluetooth. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"BT Speaker 30W",p:209190,notes:"Audio Bluetooth. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"honor Earbuds X7e",p:94490,notes:"Audio inalámbrico / audífonos. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"honor Earbuds clip",p:244390,notes:"Audio inalámbrico / audífonos. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"free buds se 2",p:155190,notes:"Audio inalámbrico / audífonos. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"audifono cable fino",p:20190,notes:"Audio inalámbrico / audífonos • Cable de carga/datos. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"audifono sencillo",p:10790,notes:"Audio inalámbrico / audífonos. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"audifono BT mando táctil",p:47190,notes:"Audio inalámbrico / audífonos • Audio Bluetooth. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"BT Xiaomi",p:59990,notes:"Audio Bluetooth. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"honor choise headphone",p:203990,notes:"Audio inalámbrico / audífonos. Datos técnicos detallados: por confirmar según referencia exacta."}]},
  {name:"Wearables", models:[{n:"WATCH 5 ACTIVE",p:155990,notes:"Wearable inteligente. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"Band 9 Active",p:110490,notes:"Wearable inteligente. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"Band 10",p:207990,notes:"Wearable inteligente. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"honor WATCH 2i",p:144290,notes:"Wearable inteligente. Datos técnicos detallados: por confirmar según referencia exacta."},{n:"watch fit 3",p:630490,notes:"Wearable inteligente. Datos técnicos detallados: por confirmar según referencia exacta."}]},
  {name:"Cómputo", models:[{n:"MOUSE LENOVO",p:70190,notes:"Mouse. Datos técnicos detallados: por confirmar según referencia exacta."}]},
];

// Red de seguridad: productos cuya columna "categoria" en la Hoja de Google
// no coincide con ninguna palabra clave conocida (celular/tablet/computador/
// impresora/accesorio), o llegó vacía/mal escrita. En vez de perderse en
// silencio, caen aquí — así ningún producto de la Hoja queda invisible o
// sin vender. El nombre de "marca" que se les da es el texto exacto que
// llegó en la columna categoria, para que sea fácil ver en el sitio qué hay
// que corregir en la Hoja. Se llena solo desde aplicarFilasCatalogo().
const OTROS_BRANDS_DATA = [];

const CATALOG = {
  apple: {
    label:"Celulares Apple", count:"28 modelos seminuevos y nuevos", photo:null,
    icon:'<path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.3c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.51-3.74 4.25z"/>',
    brands:[{name:"iPhone", models:IPHONE_CATALOG}]
  },
  android: {
    label:"Celulares Android", count:"64 modelos — Samsung, Xiaomi, Motorola y más", photo:null,
    icon:'<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
    brands: ANDROID_BRANDS_DATA
  },
  tablets: {
    label:"Tablets", count:"iPad, Samsung, Xiaomi, Lenovo", photo:null,
    icon:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M10 19h4"/>',
    brands:[{name:"Tablets disponibles", models:TABLET_MODELS}]
  },
  computadores: {
    label:"Computadores", count:"MacBook, HP, Lenovo, Acer", photo:null,
    icon:'<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M2 20h20"/>',
    brands:[{name:"Portátiles disponibles", models:COMPUTADOR_MODELS}]
  },
  impresoras: {
    label:"Impresoras", count:"Brother, Epson", photo:null,
    icon:'<rect x="5" y="8" width="14" height="8" rx="1.5"/><path d="M7 8V4h10v4M7 16v4h10v-4"/>',
    brands:[{name:"Impresoras disponibles", models:IMPRESORA_MODELS}]
  },
  accesorios: {
    label:"Accesorios", count:"Cargadores, audio, wearables", photo:null,
    icon:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
    brands: ACCESORIO_BRANDS_DATA
  },
  // Solo aparece en "Tecnología" cuando de verdad hay algo sin categorizar
  // (ver renderCatGrid) — así no se ve un tile vacío el resto del tiempo.
  otros: {
    label:"Otros productos", count:"Revisa la columna \"categoria\" de tu Hoja para ubicarlos bien", photo:null,
    icon:'<circle cx="12" cy="12" r="9.5"/><path d="M12 7.5v5M12 16.2h.01"/>',
    brands: OTROS_BRANDS_DATA
  }
};

/* Tus 15 fotos reales de estuches entregados a clientes. */
const GALLERY_PHOTOS = [
  "img/galeria/estuche-01.jpg",
  "img/galeria/estuche-02.jpg",
  "img/galeria/estuche-03.jpg",
  "img/galeria/estuche-04.jpg",
  "img/galeria/estuche-05.jpg",
  "img/galeria/estuche-06.jpg",
  "img/galeria/estuche-07.jpg",
  "img/galeria/estuche-08.jpg",
  "img/galeria/estuche-09.jpg",
  "img/galeria/estuche-10.jpg",
  "img/galeria/estuche-11.jpg",
  "img/galeria/estuche-12.jpg",
  "img/galeria/estuche-13.jpg",
  "img/galeria/estuche-14.jpg",
  "img/galeria/estuche-15.jpg",
  "img/galeria/estuche-16.jpg"
];

/* ===================== RENDER ===================== */
function waLink(text){ return "https://wa.me/573122265799?text=" + encodeURIComponent(text); }

/* ===================== TARJETAS DE PRODUCTO + FILTROS ===================== */
// La imagen del producto ocupa toda la tarjeta (object-fit:contain, sin recorte).
// Si "imagen" no es una URL real (http/https) o falla al cargar, se muestra un
// ícono de cámara en su lugar — nunca se rompe el diseño.
// Si la foto viene de Cloudinary, le pedimos una versión ya redimensionada y
// comprimida (el ancho real de la tarjeta es ~190px) en vez de la foto original
// completa — así cada producto pesa unos KB en lugar de varios MB. Con otros
// servicios de imágenes (ImgBB, Postimages, etc.) esto no aplica y se usa la
// URL tal cual, porque esos no ofrecen esta opción.
function optimizeImageUrl(url, width){
  const w = width || 400;
  if(/^https?:\/\/res\.cloudinary\.com\/.+\/upload\//i.test(url)){
    // Si la URL ya trae capas (textos o parches encima, ej. el banner de estuches
    // con "LÍNEA CLÁSICA"), el tamaño se pide AL FINAL para no mover las capas.
    if(/fl_layer_apply/.test(url) && /\/v\d+\//.test(url)){
      return url.replace(/\/(v\d+\/)/, `/w_${w},q_auto,f_auto,c_limit/$1`);
    }
    return url.replace(/\/upload\//i, `/upload/w_${w},q_auto,f_auto,c_limit/`);
  }
  return url;
}

// El campo IMAGEN de la Hoja normalmente trae una sola URL, pero admite
// varias fotos separadas por coma "," o barra "|" (ej. frente, espalda,
// detalle de pantalla) — así la galería de la página de producto muestra
// varias fotos en cuanto se agreguen, sin cambiar la estructura de la Hoja.
function productImageList(m){
  if(!m.img) return [];
  return String(m.img).split(/[,|]/).map(s => s.trim()).filter(s => /^https?:\/\//i.test(s));
}

function productMediaHTML(m){
  const primera = productImageList(m)[0];
  if(primera){
    const src = optimizeImageUrl(primera);
    const alt = String(m.n || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
    // Cloudinary: tamaño justo para cada pantalla (nítida en iPhone, liviana en gama baja).
    const srcset = optimizeImageUrl(primera, 800) !== src ? ` srcset="${src} 400w, ${optimizeImageUrl(primera, 800)} 800w" sizes="(max-width:700px) 46vw, 260px"` : '';
    return `<img class="img-fade" src="${src}"${srcset} alt="${alt}" loading="lazy" decoding="async" onerror="this.parentElement.innerHTML='<span class=\\'pc-noimg\\'><svg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'1.6\\'><rect x=\\'3\\' y=\\'4.5\\' width=\\'18\\' height=\\'15\\' rx=\\'2\\'/><circle cx=\\'9\\' cy=\\'10\\' r=\\'1.8\\'/><path d=\\'M21 16l-5.5-5-4 4-2.5-2L3 18\\'/></svg></span>'">`;
  }
  return `<span class="pc-noimg">${ICON_PHOTO}</span>`;
}

// Identificador estable del producto para el carrito — no depende de dónde
// se agregó (categoría o buscador), así el mismo producto siempre suma
// cantidad en vez de crear una línea duplicada.
function productId(marca, m){
  return (marca+'|'+m.n+'|'+m.p).replace(/[^a-zA-Z0-9]+/g,'_').slice(0,140);
}

function productCardHTML(catLabel, marca, m){
  const id = productId(marca, m);
  // Comparación EXACTA (no "contiene"): antes /nuevo/i.test(...) también
  // hacía match con "Seminuevo" (contiene la palabra "nuevo" adentro), así
  // que un producto Seminuevo se mostraba con la insignia y el color de
  // "Nuevo" por error.
  const esNuevo = (m.cond || '').trim().toLowerCase() === 'nuevo';
  const specs = [m.alm, m.ram ? m.ram+' RAM' : '', m.cam || '', m.bat || ''].filter(Boolean);
  const idJs = id.replace(/'/g, "\\'");
  const nJs = m.n.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '&quot;');
  const imgJs = (m.img || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  const catJs = catLabel.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  const tieneDescuento = m.pAntes && m.pAntes > m.p;
  const pctDescuento = tieneDescuento ? Math.round((1 - m.p / m.pAntes) * 100) : 0;
  return `
    <div class="product-card reveal">
      <div class="pc-media" onclick="openProduct('${idJs}')" style="cursor:pointer;" role="button" tabindex="0" onkeydown="if(event.key==='Enter')openProduct('${idJs}')" aria-label="Ver detalle de ${nJs}">
        ${m.cond ? `<span class="pc-badge${esNuevo ? ' nuevo' : ''}">${m.cond}</span>` : ''}
        ${m.tag ? `<span class="pc-tag">${m.tag}</span>` : ''}
        ${productMediaHTML(m)}
        <button type="button" class="pc-fav${isFavorite(id) ? ' is-fav' : ''}" onclick="event.stopPropagation();toggleFavorite('${idJs}','${nJs}',${m.p},'${imgJs}','${catJs}',this)" aria-label="Guardar en favoritos">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-4.35-9.5-8.5C.5 8 2 4.5 5.5 4c2-.3 3.7.7 4.7 2.2C11.2 4.7 12.9 3.7 14.9 4c3.5.5 5 4 3 8.5C19 16.65 12 21 12 21Z"/></svg>
        </button>
        <label class="pc-compare${isInCompare(id) ? ' is-active' : ''}" onclick="event.stopPropagation();" title="Agregar a comparar">
          <input type="checkbox" ${isInCompare(id) ? 'checked' : ''} onchange="toggleCompare('${idJs}')">
          <span>Comparar</span>
        </label>
      </div>
      <div class="pc-body">
        <span class="pc-name" onclick="openProduct('${idJs}')" style="cursor:pointer;">${m.n}</span>
        ${specs.length ? `<div class="pc-specs">${specs.map(s => `<span>${s}</span>`).join('')}</div>` : ''}
        <div class="pc-price-row">
          ${tieneDescuento ? `<span class="pc-price-old">${formatCOP(m.pAntes)}</span><span class="pc-discount-badge">-${pctDescuento}%</span>` : ''}
          <span class="pc-price">${formatCOP(m.p)}</span>
        </div>
        <div class="pc-actions">
          <button type="button" class="pc-add" onclick="addToCart('${idJs}','${nJs}',${m.p},'${imgJs}','${catJs}',this)">Agregar al carrito</button>
          <a class="pc-ask" href="${waLink('Hola, quiero preguntar por: '+catLabel+' - '+marca+' - '+m.n+' ('+formatCOP(m.p)+')')}" target="_blank" rel="noopener" aria-label="Preguntar por WhatsApp" title="Preguntar por WhatsApp">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 11.5a8.5 8.5 0 0 1-12.36 7.57L3 20l1.02-5.4A8.5 8.5 0 1 1 21 11.5Z"/></svg>
          </a>
        </div>
      </div>
    </div>`;
}

function uniqueSorted(values){
  return [...new Set(values.filter(v => v && String(v).trim()))].sort((a,b) => String(a).localeCompare(String(b), 'es'));
}

// Estado de filtros por panel (uno por categoría abierta + accesorios).
const FILTER_STATE = {};
// Últimos productos mostrados por panel, para poder re-filtrar sin recalcular todo.
const PANEL_SOURCE = {};

function flattenItems(cat){
  const items = [];
  cat.brands.forEach(b => b.models.forEach(m => items.push({ marca: b.name, m })));
  return items;
}

function filteredItems(panelKey, items){
  const f = FILTER_STATE[panelKey] || {};
  return items.filter(({marca, m}) => {
    if(f.marca && marca !== f.marca) return false;
    if(f.cond && m.cond !== f.cond) return false;
    if(f.alm && m.alm !== f.alm) return false;
    if(f.ram && m.ram !== f.ram) return false;
    if(f.cam && m.cam !== f.cam) return false;
    if(f.bat && m.bat !== f.bat) return false;
    if(f.min && m.p < Number(f.min)) return false;
    if(f.max && m.p > Number(f.max)) return false;
    // "q" (opcional): búsqueda de texto libre por nombre — la usa el
    // mega-menú del header para llevar a un modelo específico (ej. "iPhone
    // 15") sin necesitar un campo de filtro visible en la barra.
    if(f.q && !String(m.n).toLowerCase().includes(f.q.toLowerCase())) return false;
    return true;
  });
}

function filterSelectHTML(panelKey, field, label, options){
  if(options.length < 2) return '';
  const current = (FILTER_STATE[panelKey] && FILTER_STATE[panelKey][field]) || '';
  return `
    <div class="filter-field">
      <label>${label}</label>
      <select onchange="onFilterChange('${panelKey}','${field}',this.value)">
        <option value="">Todos</option>
        ${options.map(o => `<option value="${o}" ${o === current ? 'selected' : ''}>${o}</option>`).join('')}
      </select>
    </div>`;
}

// Solo se muestran los filtros que realmente varían en la categoría — si todos
// los productos son "Nuevo" no aparece el filtro de condición, por ejemplo.
function renderFilterBar(panelKey, items){
  if(items.length < 2) return '';
  const f = FILTER_STATE[panelKey] || {};
  const marcas = uniqueSorted(items.map(i => i.marca));
  const camposMarca = marcas.length > 1 ? filterSelectHTML(panelKey, 'marca', 'Marca', marcas) : '';
  const camposCond = filterSelectHTML(panelKey, 'cond', 'Condición', uniqueSorted(items.map(i => i.m.cond)));
  const camposAlm = filterSelectHTML(panelKey, 'alm', 'Almacenamiento', uniqueSorted(items.map(i => i.m.alm)));
  const camposRam = filterSelectHTML(panelKey, 'ram', 'RAM', uniqueSorted(items.map(i => i.m.ram)));
  const camposCam = filterSelectHTML(panelKey, 'cam', 'Cámara', uniqueSorted(items.map(i => i.m.cam)));
  const camposBat = filterSelectHTML(panelKey, 'bat', 'Batería', uniqueSorted(items.map(i => i.m.bat)));

  return `
    <div class="filters-bar">
      ${camposMarca}${camposCond}${camposAlm}${camposRam}${camposCam}${camposBat}
      <div class="filter-field">
        <label>Precio</label>
        <div class="filter-price">
          <input type="number" inputmode="numeric" placeholder="Desde" value="${f.min || ''}" onchange="onFilterChange('${panelKey}','min',this.value)">
          <input type="number" inputmode="numeric" placeholder="Hasta" value="${f.max || ''}" onchange="onFilterChange('${panelKey}','max',this.value)">
        </div>
      </div>
      <button type="button" class="filters-clear" onclick="clearFilters('${panelKey}')">Limpiar filtros</button>
    </div>`;
}

function onFilterChange(panelKey, field, value){
  if(!FILTER_STATE[panelKey]) FILTER_STATE[panelKey] = {};
  FILTER_STATE[panelKey][field] = value;
  refreshPanelGrid(panelKey);
}

function clearFilters(panelKey){
  FILTER_STATE[panelKey] = {};
  if(panelKey === 'accesorios'){ renderAccesoriosGrid(); return; }
  if(panelKey === 'celulares'){ renderCelularesGrid(); return; }
  if(panelKey === 'tablets'){ renderTabletsGrid(); return; }
  if(panelKey === 'computadores'){ renderComputadoresGrid(); return; }
  if(panelKey === 'relojes'){ renderRelojesGrid(); return; }
  if(panelKey === 'audifonos'){ renderAudifonosGrid(); return; }
  if(panelKey === 'techoficina'){ renderTechOficinaGrid(); return; }
  const panel = document.getElementById('panel-'+panelKey);
  if(panel){ panel.innerHTML = buildCatPanelHTML(panelKey); initScrollReveal(); }
}

// Solo vuelve a pintar la grilla de productos (no el panel de filtros), para
// que el usuario no pierda el foco del campo que acaba de cambiar.
function refreshPanelGrid(panelKey){
  const gridEl = document.getElementById('grid-'+panelKey);
  const source = PANEL_SOURCE[panelKey];
  if(!gridEl || !source) return;
  const items = filteredItems(panelKey, source.items);
  gridEl.innerHTML = items.length
    ? items.map(({marca, m}) => productCardHTML(source.label, marca, m)).join('')
    : `<p class="grid-empty">Ningún producto coincide con estos filtros — prueba con otro rango o pregúntanos por WhatsApp.</p>`;
  const countEl = document.getElementById('count-'+panelKey);
  if(countEl) countEl.textContent = `${items.length} de ${source.items.length} producto${source.items.length===1?'':'s'}`;
  // BUG corregido: cada tarjeta se crea con class="reveal" (fade-in al
  // hacer scroll), pero esa animación solo se "activa" cuando algo la
  // observa con IntersectionObserver — initScrollReveal() es lo que hace
  // esa conexión. Como esta función solo repinta la grilla (no pasa por
  // renderTodo(), que es donde antes se llamaba), las tarjetas nuevas se
  // quedaban con opacity:0 PARA SIEMPRE (nunca nadie las "activaba") —
  // el filtro funcionaba bien por dentro (el contador de arriba mostraba
  // el número correcto) pero no se veía ninguna tarjeta debajo. Por eso
  // cualquier cambio de filtro (marca, condición, almacenamiento, precio)
  // dejaba la grilla en blanco.
  initScrollReveal();
}

function buildCatPanelHTML(key){
  const cat = CATALOG[key];
  const items = flattenItems(cat);
  PANEL_SOURCE[key] = { items, label: cat.label };
  const filtered = filteredItems(key, items);
  return `
    <p class="note">Nuevos y usados revisados según disponibilidad. Agrega al carrito o pregúntanos por WhatsApp.</p>
    ${renderFilterBar(key, items)}
    ${items.length ? `<p class="filters-count" id="count-${key}">${filtered.length} de ${items.length} producto${items.length===1?'':'s'}</p>` : ''}
    <div class="product-grid" id="grid-${key}">
      ${filtered.length ? filtered.map(({marca, m}) => productCardHTML(cat.label, marca, m)).join('') : `<p class="grid-empty">No hay productos disponibles en esta categoría por ahora.</p>`}
    </div>`;
}

/* ===================== ESTADO — PÁGINA DE PRODUCTO ===================== */
const DEFAULT_TITLE = document.title;
let CURRENT_PRODUCT_ID = null;
let PDP_IMAGES = [];
let PDP_ACTIVE_IMG = 0;

/* ===================== ESTADO — BANNER PUBLICITARIO ===================== */
let PROMO_BANNERS = [];
let PROMO_BANNER_TIMER = null;

/* ===================== DIAGNÓSTICO — DESTACADO / GOOGLE SHEETS ===================== */
// Guarda, de la última lectura de la Hoja, una fila de diagnóstico por CADA
// producto (se muestre o no en el sitio) con su DESTACADO tal cual se
// escribió, cómo se interpretó, su ORDEN_DESTACADO, DISPONIBLE y CATEGORIA.
// Para revisarlo: abre la consola del navegador (F12) y escribe
// camandDebugDestacados() — imprime una tabla con todo esto.
let LAST_SHEET_DEBUG_ROWS = [];
function camandDebugDestacados(){
  if(!LAST_SHEET_DEBUG_ROWS.length){
    console.warn("[Camand] Todavía no se ha leído ningún dato de Google Sheets en esta visita — espera a que cargue el catálogo e inténtalo de nuevo.");
    return;
  }
  console.table(LAST_SHEET_DEBUG_ROWS);
}

/* ===================== CARRITO DE COMPRAS ===================== */
// Meta de "envío gratis" que se muestra arriba del carrito (estilo Apple:
// "Te faltan $X para envío gratis"). Valor de partida razonable para una
// tienda de celulares (casi cualquier compra de equipo ya la supera; sirve
// sobre todo para animar a sumar accesorios). Andrés: cambia solo este
// número si quieres otro monto — se recalcula solo en toda la página.
const FREE_SHIPPING_THRESHOLD = 200000;
const CART_KEY = 'camand_cart_v1';
let CART = [];
try {
  const saved = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
  if(Array.isArray(saved)) CART = saved;
} catch(e){ CART = []; }

function saveCart(){
  try { localStorage.setItem(CART_KEY, JSON.stringify(CART)); } catch(e){}
  renderCartUI();
}

// Nota de entrega y código de descuento del carrito — se guardan igual que
// el carrito (en este navegador), para que no se pierdan si la persona
// cierra la pestaña antes de finalizar el pedido.
const CART_NOTE_KEY = 'camand_cart_nota_v1';
const CART_DISCOUNT_KEY = 'camand_cart_descuento_v1';
let CART_NOTE = '';
try { CART_NOTE = localStorage.getItem(CART_NOTE_KEY) || ''; } catch(e){ CART_NOTE = ''; }
let CART_DISCOUNT_CODE = null;
try { CART_DISCOUNT_CODE = JSON.parse(localStorage.getItem(CART_DISCOUNT_KEY) || 'null'); } catch(e){ CART_DISCOUNT_CODE = null; }


// Caché entre visitas (localStorage, máx. 24 h): la tienda pinta al instante lo
// último que vio el visitante y en segundo plano confirma con la Hoja (precios,
// banners, fotos). Si pasaron más de 24 h, se espera a la Hoja como antes.
const CACHE_MAX_MS = 24 * 60 * 60 * 1000;
function cacheLeer(key){
  try{
    const c = JSON.parse(localStorage.getItem(key) || sessionStorage.getItem(key) || 'null');
    if(c && c.ts && Date.now() - c.ts > CACHE_MAX_MS) return null;
    return c;
  }catch(e){ return null; }
}
function cacheGuardar(key, obj){
  try{ localStorage.setItem(key, JSON.stringify(obj)); }catch(e){
    try{ sessionStorage.setItem(key, JSON.stringify(obj)); }catch(e2){}
  }
}

// ===================== CÓDIGOS DE DESCUENTO =====================
// Andrés: hay DOS formas de manejar los códigos.
//
// 1) Desde la Hoja (recomendado): crea una pestaña "CODIGOS PAGINA" con estas
//    columnas y publícala como CSV (Archivo → Compartir → Publicar en la web →
//    esa pestaña → CSV). Pega ese link en CODIGOS_CSV_URL, aquí abajo.
//      CODIGO      ej. CAMAND10 (mayúsculas o minúsculas, da igual)
//      PORCENTAJE  ej. 10
//      ALCANCE     "accesorios" = solo Accesorios + Personalización
//                  (estuches, skins, hidrogel); "todo" = todo el carrito
//      TOPE        opcional: descuento máximo en pesos, ej. 50000
//      MINIMO      opcional: compra mínima en pesos para que aplique
//      VENCE       opcional: último día válido, AAAA-MM-DD (ej. 2026-12-31)
//      ACTIVO      si / no
//    Lo que pongas en la Hoja reemplaza a los códigos escritos aquí abajo.
//
// 2) Directo aquí, en DISCOUNT_CODES (mismo formato).
const CODIGOS_CSV_URL = '';
let DISCOUNT_CODES = {
  CAMAND10: { pct: 10, alcance: 'accesorios', tope: 0, minimo: 0, vence: '' }
};
const DESCUENTO_CATS = ['Accesorios', 'Personalización'];

function codigoInfo(code){
  const c = DISCOUNT_CODES[String(code || '').toUpperCase()];
  if(!c) return null;
  return typeof c === 'number' ? { pct: c, alcance: 'todo', tope: 0, minimo: 0, vence: '' } : c;
}
function codigoVencido(c){
  if(!c || !c.vence) return false;
  const fin = new Date(c.vence + 'T23:59:59');
  return !isNaN(fin) && Date.now() > fin.getTime();
}
// Base sobre la que se calcula el descuento del código (según su alcance).
function codigoBase(c){
  if(c.alcance === 'accesorios'){
    let base = CART.filter(it => DESCUENTO_CATS.includes(it.cat) || String(it.id).indexOf('est_') === 0)
      .reduce((s, it) => s + it.p * it.qty, 0);
    return Math.max(0, base - cartPromoEstuches()); // no se descuenta dos veces lo mismo
  }
  return Math.max(0, cartTotal() - cartPromoEstuches());
}
// Estado del código escrito: { ok, monto, msg }
function codigoEstado(code){
  const c = codigoInfo(code);
  if(!c) return { ok: false, monto: 0, msg: 'Ese código no existe.' };
  if(codigoVencido(c)) return { ok: false, monto: 0, msg: 'Ese código ya venció.' };
  if(c.minimo && cartTotal() < c.minimo) return { ok: false, monto: 0, msg: `Este código aplica en compras desde ${formatCOP(c.minimo)}.` };
  const base = codigoBase(c);
  if(!base) return { ok: false, monto: 0, msg: c.alcance === 'accesorios'
    ? 'Este código aplica a accesorios, estuches, skins e hidrogel. Agrega uno a tu pedido.'
    : 'Agrega productos para usar el código.' };
  let monto = Math.round(base * (Number(c.pct) || 0) / 100);
  if(c.tope && monto > c.tope) monto = c.tope;
  const donde = c.alcance === 'accesorios' ? ' en accesorios y personalizados' : '';
  const tope = c.tope ? ` (máx. ${formatCOP(c.tope)})` : '';
  return { ok: true, monto, msg: `Código aplicado: -${c.pct}%${donde}${tope}.` };
}

function cartCodeDiscount(){
  if(!CART_DISCOUNT_CODE) return 0;
  const e = codigoEstado(CART_DISCOUNT_CODE.code);
  return e.ok ? e.monto : 0;
}

// "$50.000", "50000" o "50,000" → 50000 (sin decimales).
function pesosSimples(v){
  let t = String(v || '').replace(/[^\d.,]/g, '');
  const m = t.match(/[.,]\d{1,2}$/); if(m) t = t.slice(0, -m[0].length);
  return Number(t.replace(/\D/g, '')) || 0;
}

async function cargarCodigosDesdeSheet(){
  if(!/^https?:\/\//i.test(CODIGOS_CSV_URL) || !window.Papa) return;
  try{
    const res = await fetch(CODIGOS_CSV_URL, { cache: 'no-store' });
    if(!res.ok) throw new Error('HTTP ' + res.status);
    const filas = window.Papa.parse(await res.text(), { header: true, skipEmptyLines: true }).data;
    const nuevos = {};
    filas.forEach(f => {
      const n = {};
      Object.keys(f).forEach(k => { n[k.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '')] = String(f[k] || '').trim(); });
      const code = (n.codigo || '').toUpperCase().replace(/\s+/g, '');
      if(!code || /^no$/i.test(n.activo || 'si')) return;
      nuevos[code] = {
        pct: Number(String(n.porcentaje || n.pct || '0').replace(/[^\d.]/g, '')) || 0,
        alcance: /acces|personal/i.test(n.alcance || '') ? 'accesorios' : 'todo',
        tope: pesosSimples(n.tope),
        minimo: pesosSimples(n.minimo),
        vence: (n.vence || '').slice(0, 10)
      };
    });
    DISCOUNT_CODES = nuevos;
    if(typeof renderCartUI === 'function') renderCartUI();
  }catch(e){ console.warn('[Camand] No se pudo leer CODIGOS PAGINA; se usan los códigos del código.', e.message); }
}
window.addEventListener('load', cargarCodigosDesdeSheet);

// Promo de estuches personalizados (antes solo existía en el editor viejo):
// al llevar 2 o más estuches, el 2º tiene 10% de descuento y van 2 vidrios
// de regalo. Se aplica a la 2ª unidad más cara.
function cartEstucheUnits(){
  const u = [];
  CART.forEach(it => { if(String(it.id).indexOf('est_') === 0) for(let i = 0; i < it.qty; i++) u.push(it.p); });
  return u.sort((a, b) => b - a);
}
function cartPromoEstuches(){
  const u = cartEstucheUnits();
  return u.length >= 2 ? Math.round(u[1] * 0.10) : 0;
}
function cartDiscountAmount(){ return cartCodeDiscount() + cartPromoEstuches(); }

// Muestra/oculta "Notas para entrega" y "Descuento" como pestañas
// exclusivas (abrir una cierra la otra) para que el pie del carrito se
// mantenga compacto la mayor parte del tiempo.
function toggleCartExtra(kind){
  const panels = { nota: 'cartNotaPanel', descuento: 'cartDescuentoPanel' };
  Object.entries(panels).forEach(([k, id]) => {
    const el = document.getElementById(id);
    if(!el) return;
    el.hidden = (k === kind) ? !el.hidden : true;
  });
}

function onCartNotaChange(value){
  CART_NOTE = value;
  try { localStorage.setItem(CART_NOTE_KEY, value); } catch(e){}
}

function applyDiscountCode(){
  const input = document.getElementById('cartDescuentoInput');
  const msgEl = document.getElementById('cartDescuentoMsg');
  if(!input || !msgEl) return;
  const code = input.value.trim().toUpperCase();
  if(!code){
    CART_DISCOUNT_CODE = null;
    msgEl.textContent = '';
    msgEl.className = 'cart-discount-msg';
  } else if(!codigoInfo(code) || codigoVencido(codigoInfo(code))){
    CART_DISCOUNT_CODE = null;
    msgEl.textContent = codigoInfo(code) ? 'Ese código ya venció.' : 'Ese código no existe.';
    msgEl.className = 'cart-discount-msg is-error';
  } else {
    // El código queda guardado aunque todavía no aplique (ej. falta un
    // accesorio); el mensaje explica qué falta y se recalcula con el carrito.
    CART_DISCOUNT_CODE = { code };
    if(typeof camandTrack === 'function') camandTrack('usar_codigo', { codigo: code });
  }
  try { localStorage.setItem(CART_DISCOUNT_KEY, JSON.stringify(CART_DISCOUNT_CODE)); } catch(e){}
  renderCartUI();
}

// Deja el campo de nota y el de código de descuento con lo que la persona
// ya había escrito antes (si cerró y volvió a abrir el sitio), y muestra
// el mensaje de "código aplicado" si ya tenía uno activo.
// Mensaje bajo el campo del código, siempre al día con lo que hay en el carrito.
function renderCodigoMsg(){
  const msgEl = document.getElementById('cartDescuentoMsg');
  if(!msgEl || !CART_DISCOUNT_CODE) return;
  const e = codigoEstado(CART_DISCOUNT_CODE.code);
  msgEl.textContent = e.msg;
  msgEl.className = 'cart-discount-msg ' + (e.ok ? 'is-ok' : 'is-error');
}

function initCartExtras(){
  const notaInput = document.getElementById('cartNotaInput');
  if(notaInput && CART_NOTE) notaInput.value = CART_NOTE;
  const descInput = document.getElementById('cartDescuentoInput');
  const msgEl = document.getElementById('cartDescuentoMsg');
  if(CART_DISCOUNT_CODE && codigoInfo(CART_DISCOUNT_CODE.code)){
    if(descInput) descInput.value = CART_DISCOUNT_CODE.code;
  }
  renderCodigoMsg();
}

// Separa un nombre de producto compuesto (ej. "iPhone 17 Pro Max ▫️256 GB •
// eSIM • Nuevo ⚪ Silver") en un título limpio + su almacenamiento, solo
// cuando el nombre sigue ese patrón (la mayoría de los Android, escritos
// más simples como "A07 128/6", no lo tienen y se muestran tal cual — no
// se inventa una variante que no se pueda leer con certeza).
function splitCartItemVariant(n){
  const idx = n.indexOf('▫️');
  if(idx === -1) return { title: n, variant: '' };
  const title = n.slice(0, idx).trim();
  const resto = n.slice(idx + 2);
  const m = resto.match(/(\d+\s?(?:GB|TB))/i);
  return { title, variant: m ? m[1].replace(/\s+/g, ' ').toUpperCase() : '' };
}

function addToCart(id, n, p, img, cat, btn){
  const existing = CART.find(it => it.id === id);
  if(existing){ existing.qty += 1; }
  else { CART.push({ id, n, p: Number(p) || 0, img: img || '', qty: 1, cat: cat || '' }); }
  saveCart();
  openCart(true);
  if(btn){
    const original = btn.textContent;
    btn.textContent = '✓ Agregado';
    btn.classList.add('added');
    setTimeout(() => { btn.textContent = original; btn.classList.remove('added'); }, 1400);
  }
  const fab = document.querySelector('.cart-fab');
  if(fab){
    fab.classList.remove('bump');
    void fab.offsetWidth; // reinicia la animación aunque se agregue varias veces seguidas
    fab.classList.add('bump');
    setTimeout(() => fab.classList.remove('bump'), 450);
  }
}

function changeQty(id, delta){
  const it = CART.find(x => x.id === id);
  if(!it) return;
  it.qty += delta;
  if(it.qty <= 0) CART = CART.filter(x => x.id !== id);
  saveCart();
}

function removeFromCart(id){
  CART = CART.filter(x => x.id !== id);
  saveCart();
}

function cartTotal(){ return CART.reduce((sum, it) => sum + it.p*it.qty, 0); }
function cartCount(){ return CART.reduce((sum, it) => sum + it.qty, 0); }

/* ===================== FAVORITOS (WISHLIST) ===================== */
// Se guardan en este mismo navegador (localStorage), igual que el carrito —
// no requieren cuenta ni login, solo para que el cliente marque lo que le
// interesa y vuelva a verlo después, o lo pase directo al carrito.
const FAV_KEY = 'camand_favoritos_v1';
let FAVORITES = [];
try {
  const savedFav = JSON.parse(localStorage.getItem(FAV_KEY) || '[]');
  if(Array.isArray(savedFav)) FAVORITES = savedFav;
} catch(e){ FAVORITES = []; }

function isFavorite(id){ return FAVORITES.some(f => f.id === id); }
function favCount(){ return FAVORITES.length; }

function saveFavorites(){
  try { localStorage.setItem(FAV_KEY, JSON.stringify(FAVORITES)); } catch(e){}
  renderFavUI();
}

function toggleFavorite(id, n, p, img, cat, btn){
  const idx = FAVORITES.findIndex(f => f.id === id);
  let nowFav;
  if(idx >= 0){ FAVORITES.splice(idx, 1); nowFav = false; }
  else { FAVORITES.push({ id, n, p: Number(p) || 0, img: img || '', cat: cat || '' }); nowFav = true; }
  saveFavorites();
  if(btn){
    btn.classList.toggle('is-fav', nowFav);
    btn.classList.remove('bump');
    void btn.offsetWidth;
    btn.classList.add('bump');
    setTimeout(() => btn.classList.remove('bump'), 400);
  }
  // Si el mismo producto aparece repetido en pantalla (ej. en destacados y en
  // el catálogo a la vez), refleja el cambio en todas sus tarjetas.
  document.querySelectorAll('.pc-fav').forEach(b => {
    if(b === btn) return;
    const onclickAttr = b.getAttribute('onclick') || '';
    if(onclickAttr.includes(`'${id}'`)) b.classList.toggle('is-fav', nowFav);
  });
}

function removeFavorite(id){
  FAVORITES = FAVORITES.filter(f => f.id !== id);
  saveFavorites();
  document.querySelectorAll('.pc-fav').forEach(b => {
    const onclickAttr = b.getAttribute('onclick') || '';
    if(onclickAttr.includes(`'${id}'`)) b.classList.remove('is-fav');
  });
}

function renderFavUI(){
  const badge = document.getElementById('favBadge');
  if(badge){
    const n = favCount();
    badge.textContent = n;
    badge.style.display = n > 0 ? 'flex' : 'none';
  }
  const body = document.getElementById('favBody');
  if(body){
    body.innerHTML = FAVORITES.length ? FAVORITES.map(it => {
      const nJs = it.n.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '&quot;');
      const imgJs = (it.img || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
      return `
      <div class="cart-item">
        ${it.img ? `<img src="${it.img}" alt="" loading="lazy" onerror="this.outerHTML='<div class=\\'cart-item-noimg\\'>${ICON_BOX_ESC}</div>'">` : `<div class="cart-item-noimg">${ICON_BOX}</div>`}
        <div class="cart-item-info">
          <span class="cart-item-name">${it.n}</span>
          <span class="cart-item-price">${formatCOP(it.p)}</span>
          <div class="fav-item-actions">
            <button type="button" class="fav-add-btn" onclick="addToCart('${it.id}','${nJs}',${it.p},'${imgJs}','${it.cat}',this)">Agregar al carrito</button>
            <button type="button" class="cart-item-remove" onclick="removeFavorite('${it.id}')">Quitar</button>
          </div>
        </div>
      </div>`;
    }).join('') : `<p class="cart-empty">Aún no has guardado favoritos. Toca el ícono de corazón en cualquier producto.</p>`;
  }
}

function openFav(open){
  const drawer = document.getElementById('favDrawer');
  const overlay = document.getElementById('favOverlay');
  if(!drawer || !overlay) return;
  drawer.classList.toggle('open', open);
  overlay.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
}

/* ===================== COMPARTIR PRODUCTO ===================== */
// Usa el selector nativo para compartir del celular (WhatsApp, Instagram,
// etc.) cuando existe; en computador, la mayoría de navegadores no lo
// tienen, así que copia el enlace directo al producto al portapapeles.
function shareProduct(id, n, p){
  const url = productShareUrl(id);
  const text = `Mira este producto en Camand Mobile: ${n} — ${formatCOP(Number(p))}`;
  if(navigator.share){
    navigator.share({ title: n, text, url }).catch(() => {});
    return;
  }
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(url)
      .then(() => showToast('Enlace copiado — pégalo donde quieras compartirlo'))
      .catch(() => window.open(waLink(text + ' ' + url), '_blank', 'noopener'));
  } else {
    window.open(waLink(text + ' ' + url), '_blank', 'noopener');
  }
}

/* ===================== AVISO FLOTANTE (TOAST) ===================== */
function showToast(msg){
  const t = document.getElementById('toast');
  if(!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2800);
}

/* ===================== COMPARADOR DE PRODUCTOS ===================== */
// Permite marcar hasta 3 productos (pensado sobre todo para comparar
// celulares entre sí) y verlos lado a lado en una tabla. Vive solo mientras
// dura la visita (no se guarda entre sesiones), igual que un carrito de
// comparación típico.
let COMPARE = [];

function isInCompare(id){ return COMPARE.includes(id); }

function syncCompareCheckboxes(id, nowIn){
  document.querySelectorAll('.pc-compare').forEach(label => {
    const cb = label.querySelector('input');
    if(!cb) return;
    const onchangeAttr = cb.getAttribute('onchange') || '';
    if(onchangeAttr.includes(`'${id}'`)){
      label.classList.toggle('is-active', nowIn);
      cb.checked = nowIn;
    }
  });
}

function toggleCompare(id){
  const wasIn = COMPARE.includes(id);
  if(wasIn){
    COMPARE = COMPARE.filter(x => x !== id);
  } else {
    if(COMPARE.length >= 3){
      showToast('Puedes comparar máximo 3 productos a la vez — quita uno para agregar otro.');
      syncCompareCheckboxes(id, false);
      return;
    }
    COMPARE.push(id);
  }
  renderCompareBar();
  syncCompareCheckboxes(id, COMPARE.includes(id));
}

function removeFromCompare(id){
  toggleCompare(id);
  if(COMPARE.length < 2) closeCompareModal();
  else openCompareModal();
}

// Botón "Comparar dispositivos" del inicio: baja hasta "Productos más vendidos"
// (ya tiene la casilla "Comparar" en cada tarjeta) y explica cómo usarla,
// en vez de mandar a otra vista donde todavía no hay nada para marcar.
function startCompareFlow(){
  const grid = document.getElementById('homeFeaturedGrid');
  if(grid) grid.scrollIntoView({behavior:'smooth', block:'start'});
  setTimeout(() => showToast('Marca hasta 3 productos con la casilla "Comparar" de cada tarjeta, y toca "Comparar" en la barra que aparece abajo.'), grid ? 500 : 0);
}

function clearCompare(){
  const ids = [...COMPARE];
  COMPARE = [];
  renderCompareBar();
  ids.forEach(id => syncCompareCheckboxes(id, false));
  closeCompareModal();
}

function renderCompareBar(){
  const bar = document.getElementById('compareBar');
  if(!bar) return;
  const n = COMPARE.length;
  bar.classList.toggle('show', n > 0);
  const text = document.getElementById('compareBarText');
  if(text) text.textContent = n === 1 ? '1 producto seleccionado' : `${n} productos seleccionados`;
  const btn = document.getElementById('compareBarBtn');
  if(btn) btn.disabled = n < 2;
}

// ---------- Lectura de especificaciones para el comparador ----------
// Antes el comparador solo mostraba las columnas ALMACENAMIENTO / RAM /
// CAMARA / BATERIA de la Hoja; si estaban vacías (audífonos, relojes,
// accesorios, o celulares sin esas columnas llenas) salía todo en "—".
// Ahora: (1) intenta sacar el dato del nombre ("128/4", "256 GB"),
// (2) lee la columna ESPECIFICACIONES ("Clave: valor; Clave: valor") y
// arma una fila por cada clave, (3) oculta las filas vacías en todos.
function cmpEsc(t){ return String(t == null ? '' : t).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
function cmpNorm(t){ return String(t || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ' ').trim(); }

// Separa el texto de especificaciones en puntos. Acepta ";", "•", "|",
// saltos de línea o ". " (sin romper decimales como "6.1").
function cmpSpecItems(m){
  const texto = String(m.esp || m.notes || '');
  return texto
    .split(/\s*(?:;|•|\||\n|\.(?=\s+[A-ZÁÉÍÓÚÑ¿]))\s*/)
    .map(x => x.replace(/\.$/, '').trim())
    .filter(x => x && !/^datos t[eé]cnicos detallados/i.test(x) && !/^referencia comercial/i.test(x));
}

// Nombres de fila reconocidos → clave interna (para agrupar "Batería",
// "bateria", "Autonomía", etc. en una sola fila).
const CMP_ALIAS = [
  ['alm',  /^(almacenamiento|memoria interna|capacidad)$/],
  ['ram',  /^(ram|memoria ram)$/],
  ['cam',  /^(camara|camaras|camara principal|camara trasera)$/],
  ['bat',  /^(bateria|autonomia|duracion de bateria|duracion)$/],
  ['pant', /^(pantalla|display)$/],
  ['chip', /^(chip|procesador|cpu)$/],
  ['con',  /^(conectividad|red|bluetooth|conexion)$/],
  ['carga',/^(carga|cargador|carga rapida|puerto)$/],
  ['anc',  /^(cancelacion de ruido|anc)$/],
  ['agua', /^(resistencia|resistencia al agua|ip)$/],
  ['gar',  /^(garantia)$/],
];
const CMP_LABELS = { alm:'Almacenamiento', ram:'RAM', cam:'Cámara', bat:'Batería', pant:'Pantalla', chip:'Procesador', con:'Conectividad', carga:'Carga', anc:'Cancelación de ruido', agua:'Resistencia al agua', gar:'Garantía' };
function cmpKeyFor(label){
  const n = cmpNorm(label);
  for(const [k, re] of CMP_ALIAS) if(re.test(n)) return k;
  return 'x:' + n;
}

// Construye un mapa { clave: valor } + lista de características sueltas.
function cmpSpecMap(m){
  const map = {}; const labels = {}; const feats = [];
  const put = (k, v, label) => { if(v && !map[k]){ map[k] = String(v).trim(); if(label) labels[k] = label; } };

  // 1) Columnas dedicadas de la Hoja (tienen prioridad)
  put('alm', m.alm); put('ram', m.ram); put('cam', m.cam); put('bat', m.bat);

  // 2) ESPECIFICACIONES: "Clave: valor" → fila propia; lo demás → característica
  cmpSpecItems(m).forEach(item => {
    const mm = item.match(/^([^:]{2,32}):\s*(.+)$/);
    if(mm){
      const k = cmpKeyFor(mm[1]);
      put(k, mm[2], mm[1].trim().replace(/^./, c => c.toUpperCase()));
      return;
    }
    const n = cmpNorm(item);
    if(/^(nuevo|usado|seminuevo|exhibicion)/.test(n)) return; // ya sale en Condición
    // Datos reconocibles aunque no tengan "Clave:"
    const almRam = item.match(/(\d{2,4})\s*GB almacenamiento\s*\/\s*(\d{1,2})\s*GB RAM/i);
    if(almRam){ put('alm', almRam[1] + ' GB'); put('ram', almRam[2] + ' GB'); return; }
    const soloAlm = item.match(/^almacenamiento:?\s*(\d+\s*(?:GB|TB))/i);
    if(soloAlm){ put('alm', soloAlm[1]); return; }
    if(/^(conectividad\s+)?(4g|5g|wi-?fi|bluetooth)/i.test(item)){ put('con', item.replace(/^conectividad\s+/i, '')); return; }
    if(!map.bat && /(mah|\bhoras?\b|\d+\s*h\b|bateria|autonomia)/.test(n)) { put('bat', item); return; }
    if(!map.cam && /(\d+\s*mp\b|camara)/.test(n)) { put('cam', item); return; }
    if(!map.pant && /(pantalla|pulgadas|\d+[.,]\d+\s*["”])/.test(n)) { put('pant', item); return; }
    if(!map.chip && /(chip|procesador|snapdragon|helio|dimensity|ryzen|intel|\ba1\d\b|bionic)/.test(n)) { put('chip', item); return; }
    feats.push(item);
  });

  // 3) Último recurso: leer el nombre ("A17 256/8", "iPhone 15 128 GB")
  const nombre = m.n || '';
  const par = nombre.match(/\b(\d{2,4})\s*\/\s*(\d{1,2})\b/);
  if(par){ put('alm', par[1] + ' GB'); put('ram', par[2] + ' GB'); }
  const gb = nombre.match(/\b(\d{2,4})\s*(GB|TB)\b/i) || nombre.match(/\b(1)\s*(TB)\b/i);
  if(gb) put('alm', gb[1] + ' ' + gb[2].toUpperCase());
  if(/\b5g\b/i.test(nombre)) put('con', '5G');

  return { map, labels, feats };
}

function openCompareModal(){
  if(COMPARE.length < 2) return;
  const productos = COMPARE.map(id => ({ id, ...findProductById(id) })).filter(p => p.m);
  const wrap = document.getElementById('compareTableWrap');
  if(!wrap) return;

  productos.forEach(p => { p.spec = cmpSpecMap(p.m); });

  // Orden de filas: primero las conocidas, luego las claves libres de la Hoja
  const orden = ['alm','ram','pant','chip','cam','bat','con','carga','anc','agua','gar'];
  const libres = [];
  productos.forEach(p => Object.keys(p.spec.map).forEach(k => {
    if(!orden.includes(k) && !libres.includes(k)) libres.push(k);
  }));
  const specRows = [...orden, ...libres]
    .filter(k => productos.some(p => p.spec.map[k]))
    .map(k => ({
      label: CMP_LABELS[k] || (productos.map(p => p.spec.labels[k]).find(Boolean)) || k.replace(/^x:/, ''),
      vals: productos.map(p => p.spec.map[k] || '')
    }));
  const hayFeats = productos.some(p => p.spec.feats.length);

  // Precio más bajo
  const minP = Math.min(...productos.map(p => p.m.p));
  const hayEmpate = productos.filter(p => p.m.p === minP).length > 1;

  const esMovil = window.innerWidth <= 560;
  const rowHTML = (label, vals, opts = {}) => {
    const limpios = vals.map(v => cmpNorm(String(v).replace(/<[^>]*>/g, '')));
    const distinto = new Set(limpios).size > 1;
    const cls = opts.noDiff ? '' : (distinto ? 'is-diff' : 'is-same');
    return `<tr class="${cls}">
      <td class="compare-row-label">${cmpEsc(esMovil && label === 'Almacenamiento' ? 'Capacidad' : label)}</td>
      ${vals.map(v => `<td>${opts.raw ? (v || '—') : (v ? cmpEsc(v) : '—')}</td>`).join('')}
    </tr>`;
  };
  const cols = productos.length;

  const filas = [];
  // General
  filas.push(rowHTML('Precio', productos.map(p => {
    const antes = p.m.pAntes && p.m.pAntes > p.m.p ? `<span class="compare-old-price">${formatCOP(p.m.pAntes)}</span>` : '';
    const best = (p.m.p === minP && !hayEmpate) ? '<br><span class="compare-best">Mejor precio</span>' : '';
    return `${antes}<strong>${formatCOP(p.m.p)}</strong>${best}`;
  }), { raw: true }));
  filas.push(rowHTML('Categoría', productos.map(p => [p.catLabel, p.marca].filter(Boolean).filter((v, i, a) => a.indexOf(v) === i).join(' · '))));
  if(productos.some(p => p.m.cond)) filas.push(rowHTML('Condición', productos.map(p => p.m.cond || '')));

  // Ficha técnica
  if(specRows.length || hayFeats){
    filas.push(`<tr class="is-section"><td colspan="${cols + 1}">Ficha técnica</td></tr>`);
    specRows.forEach(r => filas.push(rowHTML(r.label, r.vals)));
    if(hayFeats){
      filas.push(rowHTML('Características', productos.map(p => p.spec.feats.length
        ? `<ul class="compare-feat">${p.spec.feats.slice(0, 6).map(f => `<li>${cmpEsc(f)}</li>`).join('')}</ul>` : ''), { raw: true, noDiff: true }));
    }
  }

  // Pago: igual para todos, pero es un argumento de venta clave
  filas.push(`<tr class="is-section"><td colspan="${cols + 1}">Formas de pago</td></tr>`);
  filas.push(rowHTML('Cómo pagar', productos.map(() => 'Contraentrega · Tarjeta de crédito · Sistecrédito'), { noDiff: true }));

  // Botones
  filas.push(`<tr><td class="compare-row-label"></td>${productos.map(p => `<td><a class="fav-add-btn" href="${waLink('Hola, quiero preguntar por: ' + p.m.n + ' (' + formatCOP(p.m.p) + ')')}" target="_blank" rel="noopener">Preguntar →</a></td>`).join('')}</tr>`);

  const faltanDatos = productos.filter(p => !Object.keys(p.spec.map).length && !p.spec.feats.length);
  const aviso = faltanDatos.length ? `
    <p class="compare-empty-note">Aún no tenemos la ficha técnica completa de ${faltanDatos.map(p => '<b>' + cmpEsc(p.m.n) + '</b>').join(', ')}.
    <a href="${waLink('Hola, quiero comparar: ' + productos.map(p => p.m.n).join(' vs ') + '. ¿Me ayudan con las diferencias?')}" target="_blank" rel="noopener">Pregúntanos por WhatsApp</a> y te contamos las diferencias.</p>` : '';

  wrap.innerHTML = `
    <table class="compare-table">
      <thead>
        <tr>
          <th class="compare-row-label"></th>
          ${productos.map(p => `
            <th>
              <div class="compare-col-head">
                <button type="button" class="compare-remove" onclick="removeFromCompare('${p.id.replace(/'/g, "\\'")}')" aria-label="Quitar de la comparación">✕</button>
                <div class="compare-col-media">${productMediaHTML(p.m)}</div>
                <span class="compare-col-name">${p.m.n}</span>
              </div>
            </th>`).join('')}
        </tr>
      </thead>
      <tbody>${filas.join('')}</tbody>
    </table>${aviso}`;

  const modal = document.getElementById('compareModal');
  if(modal){
    const chk = document.getElementById('compareOnlyDiff');
    modal.classList.toggle('only-diff', !!(chk && chk.checked));
    modal.classList.add('open');
  }
  document.body.style.overflow = 'hidden';
}

function closeCompareModal(){
  const modal = document.getElementById('compareModal');
  if(modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

// Elige hasta 3 accesorios para sugerir como venta cruzada: primero los
// marcados DESTACADO="si" en la Hoja, y si no alcanzan, completa con
// cualquier otro accesorio. Nunca repite algo que ya está en el carrito.
function sugerenciasAccesorios(idsEnCarrito){
  const todos = flattenItems(CATALOG.accesorios);
  const destacados = todos.filter(({m}) => m.dest);
  const pool = destacados.length >= 3 ? destacados : todos;
  const vistos = new Set();
  const resultado = [];
  for(const item of pool){
    const id = productId(item.marca, item.m);
    if(idsEnCarrito.has(id) || vistos.has(id)) continue;
    vistos.add(id);
    resultado.push(item);
    if(resultado.length >= 3) break;
  }
  return resultado;
}

// Estuche personalizado e Hidrogel no tienen precio fijo en el catálogo (se
// cotizan según el equipo), así que en vez de "+ Agregar" llevan a diseñar
// o a pedir cotización por WhatsApp — nunca se inventa un precio para ellos.
function crossSellExtrasHTML(){
  const waHidrogel = waLink('Hola, quiero instalar Hidrogel para mi equipo').replace(/'/g, "\\'");
  return [
    {
      media: `<div class="cart-item-noimg">${ICON_SPARKLE}</div>`,
      name: 'Estuche personalizado Acrygel', price: 'Desde $34.990, con tu foto',
      btnLabel: 'Diseñar →', btnAttr: `onclick="openCart(false);pzOpenStudio('clasica')"`
    },
    {
      media: `<div class="cart-item-noimg">${ICON_SHIELD}</div>`,
      name: 'Hidrogel con instalación', price: 'Desde $25.000',
      btnLabel: 'Cotizar →', btnAttr: `onclick="openCart(false);pzOpen('pzHidrogel')"`
    }
  ];
}

function crossSellHTML(){
  if(!CART.length) return '';
  const hayDispositivo = CART.some(it => it.cat !== 'Accesorios');
  const hayAccesorio = CART.some(it => it.cat === 'Accesorios');
  if(!hayDispositivo || hayAccesorio) return '';
  const idsEnCarrito = new Set(CART.map(it => it.id));
  const reales = sugerenciasAccesorios(idsEnCarrito).map(({marca, m}) => {
    const id = productId(marca, m);
    const idJs = id.replace(/'/g, "\\'");
    const nJs = m.n.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '&quot;');
    const imgJs = (m.img || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    return {
      media: m.img ? `<img src="${optimizeImageUrl(m.img)}" alt="" loading="lazy" onerror="this.outerHTML='<div class=\\'cart-item-noimg\\'>${ICON_BOX_ESC}</div>'">` : `<div class="cart-item-noimg">${ICON_BOX}</div>`,
      name: m.n, price: formatCOP(m.p),
      btnLabel: '+ Agregar', btnAttr: `onclick="addToCart('${idJs}','${nJs}',${m.p},'${imgJs}','Accesorios',this)"`
    };
  });
  // Estuche e Hidrogel van primero (son el producto insignia del negocio),
  // y el resto de espacio se llena con accesorios reales agregables.
  const sugeridos = [...crossSellExtrasHTML(), ...reales].slice(0, 3);
  if(!sugeridos.length) return '';
  return `
    <div class="cart-crosssell">
      <span class="cart-crosssell-title">Completa tu compra</span>
      ${sugeridos.map(s => `
        <div class="cart-crosssell-item">
          ${s.media}
          <div class="cart-crosssell-info">
            <span>${s.name}</span>
            <b>${s.price}</b>
          </div>
          <button type="button" ${s.btnAttr}>${s.btnLabel}</button>
        </div>`).join('')}
    </div>`;
}

function renderCartUI(){
  const n = cartCount();
  ['cartBadge','cartBadgeNav'].forEach(id => {
    const badge = document.getElementById(id);
    if(badge){
      badge.textContent = n;
      badge.style.display = n > 0 ? 'flex' : 'none';
    }
  });
  const countEl = document.getElementById('cartHeadCount');
  if(countEl) countEl.textContent = n > 0 ? n : '';
  const body = document.getElementById('cartBody');
  if(body){
    body.innerHTML = CART.length ? CART.map(it => {
      const { title, variant } = splitCartItemVariant(it.n);
      return `
      <div class="cart-item">
        ${it.img ? `<img src="${it.img}" alt="" loading="lazy" onerror="this.outerHTML='<div class=\\'cart-item-noimg\\'>${ICON_BOX_ESC}</div>'">` : `<div class="cart-item-noimg">${ICON_BOX}</div>`}
        <div class="cart-item-info">
          <span class="cart-item-name">${title}</span>
          ${variant ? `<span class="cart-item-variant">${variant}</span>` : ''}
        </div>
        <div class="cart-item-right">
          <span class="cart-item-price">${formatCOP(it.p)}</span>
          <div class="cart-item-stepper">
            <span class="cis-num">${it.qty}</span>
            <div class="cis-arrows">
              <button type="button" onclick="changeQty('${it.id}',1)" aria-label="Sumar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 15l6-6 6 6"/></svg></button>
              <button type="button" onclick="changeQty('${it.id}',-1)" aria-label="Restar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 9l6 6 6-6"/></svg></button>
            </div>
          </div>
          <button type="button" class="cart-item-remove" onclick="removeFromCart('${it.id}')">Quitar</button>
        </div>
      </div>`;
    }).join('') + crossSellHTML() : `<p class="cart-empty">Tu carrito está vacío. Agrega productos desde el catálogo.</p>`;
  }
  const totalsWrap = document.getElementById('cartTotalsWrap');
  if(totalsWrap){
    const subtotal = cartTotal();
    const descuento = cartDiscountAmount();
    const dCodigo = cartCodeDiscount(), dPromo = cartPromoEstuches();
    if(descuento > 0){
      totalsWrap.innerHTML = `
        <div class="cart-total-row is-sub"><span>Subtotal</span><span>${formatCOP(subtotal)} COP</span></div>
        ${dPromo ? `<div class="cart-total-row is-sub is-discount"><span>2º estuche -10% + 2 vidrios gratis</span><span>-${formatCOP(dPromo)}</span></div>` : ''}
        ${dCodigo ? `<div class="cart-total-row is-sub is-discount"><span>Descuento (${CART_DISCOUNT_CODE.code})</span><span>-${formatCOP(dCodigo)}</span></div>` : ''}
        <div class="cart-total-row"><span>Total</span><span>${formatCOP(subtotal - descuento)} COP</span></div>`;
    } else {
      totalsWrap.innerHTML = `<div class="cart-total-row"><span>Subtotal</span><span>${formatCOP(subtotal)} COP</span></div>`;
    }
  }
  const checkoutBtn = document.getElementById('cartCheckoutBtn');
  if(checkoutBtn) checkoutBtn.disabled = CART.length === 0;
  renderShippingBar();
  renderCodigoMsg();
}

// Barra de meta de envío gratis, arriba del carrito. Si el carrito está
// vacío no se muestra (no tiene sentido pedir que "agreguen más" a un
// carrito vacío); en cuanto se supera la meta, cambia a un mensaje de
// confirmación minimalista (sin ícono ni color, solo texto y la barra
// totalmente negra).
function renderShippingBar(){
  const el = document.getElementById('cartShippingBar');
  if(!el) return;
  if(!CART.length){ el.innerHTML = ''; return; }
  const total = cartTotal();
  const falta = FREE_SHIPPING_THRESHOLD - total;
  const pct = Math.min(100, Math.round((total / FREE_SHIPPING_THRESHOLD) * 100));
  if(falta <= 0){
    el.innerHTML = `
      <p class="csb-msg is-done">Has conseguido envío gratis.</p>
      <div class="csb-track"><div class="csb-fill is-done" style="width:100%;"></div></div>`;
  } else {
    el.innerHTML = `
      <p class="csb-msg">Te faltan <b>${formatCOP(falta)}</b> para envío gratis</p>
      <div class="csb-track"><div class="csb-fill" style="width:${pct}%;"></div></div>`;
  }
}

// Mantiene el texto de la barra superior negra ("Envío gratis desde $X")
// sincronizado con la misma constante que usa el carrito — cambiar
// FREE_SHIPPING_THRESHOLD arriba actualiza los dos lugares a la vez.
function applyTopBarMsg(){
  const el = document.getElementById('topBarShippingMsg');
  if(!el) return;
  if(window.TEMPORADA && window.TEMPORADA.barra){
    el.innerHTML = `<a href="${window.TEMPORADA.barraLink || '#/personaliza'}">${window.TEMPORADA.barra}</a>`;
    return;
  }
  el.textContent = `Envío gratis desde ${formatCOP(FREE_SHIPPING_THRESHOLD)}`;
}

function openCart(open){
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if(!drawer || !overlay) return;
  drawer.classList.toggle('open', open);
  overlay.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
}

function checkoutWhatsApp(){
  if(!CART.length) return;
  const lineas = CART.map(it => `• ${it.n} — ${formatCOP(it.p)} x ${it.qty} = ${formatCOP(it.p*it.qty)}`).join('\n');
  const subtotal = cartTotal();
  const descuento = cartDiscountAmount();
  let msg = `Hola Camand Mobile, quiero hacer este pedido:\n\n${lineas}`;
  if(descuento > 0){
    msg += `\n\nSubtotal: ${formatCOP(subtotal)}`;
    if(cartPromoEstuches()) msg += `\nPromo 2º estuche -10%: -${formatCOP(cartPromoEstuches())} (+ 2 vidrios de regalo)`;
    if(cartCodeDiscount()) msg += `\nDescuento (${CART_DISCOUNT_CODE.code}): -${formatCOP(cartCodeDiscount())}`;
    msg += `\nTotal: ${formatCOP(subtotal - descuento)}`;
  } else {
    msg += `\n\nTotal: ${formatCOP(subtotal)}`;
  }
  if(CART_NOTE && CART_NOTE.trim()){
    msg += `\n\nNota para la entrega: ${CART_NOTE.trim()}`;
  }
  // Personalización: la foto de la skin no viaja en el link, así que se le
  // recuerda al cliente enviarla en el chat, junto con la tarifa de envío.
  if(CART.some(it => String(it.id).indexOf('est_') === 0)){
    msg += `\n\nMi diseño de estuche te lo envío por aquí (lo descargué en la página).`;
  }
  if(CART.some(it => String(it.id).indexOf('skin_') === 0)){
    msg += `\n\nMi diseño de skin te lo envío por aquí (lo descargué en la página).`;
    if(typeof PERSONALIZA_CONFIG !== 'undefined' && subtotal - descuento < FREE_SHIPPING_THRESHOLD){
      msg += `\nEnvío: Bogotá ${formatCOP(PERSONALIZA_CONFIG.envioBogota)} · resto del país ${formatCOP(PERSONALIZA_CONFIG.envioNacional)}`;
    }
  }
  if(CART.some(it => String(it.id).indexOf('hidrogel_') === 0)){
    msg += `\n\nIncluye instalación de hidrogel: coordinemos el día.`;
  }
  msg += `\n\n¿Puedo pagar contraentrega o con tarjeta de crédito?`;
  window.open(waLink(msg), '_blank', 'noopener');
}

// Categorías que ya viven en su propia página directa (Apple + Android →
// Celulares; Tablets y Computadores tienen su propia vista; Accesorios
// también) y por lo tanto no se repiten como tile dentro del hub general
// de Tecnología (que ahora solo agrupa Impresoras y, si aplica, "Otros").
const CATGRID_OCULTAS = ['accesorios', 'apple', 'android', 'tablets', 'computadores'];

function renderCatGrid(){
  const grid = document.getElementById('catGrid');
  grid.innerHTML = '';
  Object.entries(CATALOG)
    .filter(([key, cat]) => !CATGRID_OCULTAS.includes(key) && (key !== 'otros' || flattenItems(cat).length))
    .forEach(([key, cat]) => {
    const tile = document.createElement('button');
    tile.className = 'cat-tile' + (cat.photo ? ' has-photo' : '');
    tile.id = 'tile-'+key;
    if(cat.photo){ tile.style.backgroundImage = `url('${cat.photo}')`; }
    tile.innerHTML = `
      <div class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">${cat.icon}</svg></div>
      <h4>${cat.label}</h4>
      <div class="count">${cat.count}</div>
    `;
    tile.onclick = () => toggleCategory(key);
    grid.appendChild(tile);
  });
}

function scrollGallery(dir){
  document.getElementById('galleryGrid').scrollBy({left: dir*220, behavior:'smooth'});
}

function renderGallery(){
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  grid.innerHTML = GALLERY_PHOTOS.map((src, i) =>
    `<button type="button" class="gallery-slot" onclick="openLightbox(${i})" aria-label="Ampliar foto ${i+1}">
      <img src="${src}" alt="Estuche personalizado Camand Mobile ${i+1}" loading="lazy">
    </button>`
  ).join('');
}

function openLightbox(index){
  const overlay = document.getElementById('lightbox');
  document.getElementById('lightboxImg').src = GALLERY_PHOTOS[index];
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox(){
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function formatCOP(n){
  return '$' + Math.round(n).toLocaleString('es-CO');
}

/* ===================== BUSCADOR GLOBAL (con autocompletado) ===================== */
// A diferencia del buscador de la sección "Tecnología" (que solo busca ahí),
// este vive en el menú superior y busca en TODO el catálogo, incluidos
// accesorios, para encontrar cualquier producto desde cualquier página.
function toggleNavSearch(force){
  const panel = document.getElementById('navSearchPanel');
  const overlay = document.getElementById('navSearchOverlay');
  if(!panel) return;
  const show = typeof force === 'boolean' ? force : !panel.classList.contains('is-open');
  panel.classList.toggle('is-open', show);
  if(overlay) overlay.classList.toggle('is-open', show);
  if(show){
    setTimeout(() => { const inp = document.getElementById('navSearchInput'); if(inp) inp.focus(); }, 60);
  } else {
    const inp = document.getElementById('navSearchInput');
    const res = document.getElementById('navSearchResults');
    if(inp) inp.value = '';
    if(res) res.innerHTML = '';
  }
}

function flattenAllProducts(){
  const out = [];
  Object.entries(CATALOG).forEach(([key, cat]) => {
    cat.brands.forEach(b => b.models.forEach(m => out.push({ catLabel: cat.label, marca: b.name, m })));
  });
  return out;
}

function performNavSearch(query){
  const q = query.trim().toLowerCase();
  const resultsEl = document.getElementById('navSearchResults');
  if(!resultsEl) return;
  if(q.length < 2){ resultsEl.innerHTML = ''; return; }
  const matches = flattenAllProducts().filter(({ m }) => m.n.toLowerCase().includes(q)).slice(0, 8);
  if(!matches.length){
    resultsEl.innerHTML = `<p class="nav-search-empty">No encontramos "${query.replace(/</g,'&lt;')}" — pregúntanos por <a href="${waLink('Hola, busco: ' + query)}" target="_blank" rel="noopener" style="color:var(--tech);">WhatsApp</a>, puede que lo tengamos y aún no esté publicado.</p>`;
    return;
  }
  resultsEl.innerHTML = matches.map(({ marca, m }) => {
    const id = productId(marca, m);
    const idJs = id.replace(/'/g, "\\'");
    return `
    <button type="button" class="nav-search-item" onclick="toggleNavSearch(false);openProduct('${idJs}')">
      <span class="nsi-media">${productMediaHTML(m)}</span>
      <span class="nsi-info">
        <span class="nsi-name">${m.n}</span>
        <span class="nsi-price">${formatCOP(m.p)}</span>
      </span>
    </button>`;
  }).join('');
}

function performTechSearch(query){
  const q = query.trim().toLowerCase();
  const catGrid = document.getElementById('catGrid');
  const resultsEl = document.getElementById('searchResults');
  const existingPanel = document.querySelector('.cat-panel');
  if (existingPanel) existingPanel.remove();
  document.querySelectorAll('.cat-tile').forEach(t => t.classList.remove('is-open'));
  openCat = null;

  if (q.length < 2){
    resultsEl.innerHTML = '';
    catGrid.style.display = '';
    return;
  }
  catGrid.style.display = 'none';

  const matches = [];
  Object.entries(CATALOG).filter(([key]) => !CATGRID_OCULTAS.includes(key)).forEach(([key, cat]) => {
    cat.brands.forEach(b => {
      b.models.forEach(m => {
        if (m.n.toLowerCase().includes(q)) matches.push({ cat, brand: b.name, m });
      });
    });
  });

  if (!matches.length){
    resultsEl.innerHTML = `<p class="note">No encontramos modelos con "${query}" — prueba con otra palabra o pregúntanos por WhatsApp.</p>`;
    return;
  }
  resultsEl.innerHTML = `<p class="note">${matches.length} resultado${matches.length===1?'':'s'} para "${query}"</p>
    <div class="product-grid">
      ${matches.map(({cat,brand,m}) => productCardHTML(cat.label, brand, m)).join('')}
    </div>`;
  initScrollReveal();
}

let openCat = null;
function toggleCategory(key){
  document.querySelectorAll('.cat-tile').forEach(t => t.classList.remove('is-open'));
  const oldPanel = document.querySelector('.cat-panel');
  if(oldPanel) oldPanel.remove();

  if(openCat === key){ openCat = null; return; }
  openCat = key;
  document.getElementById('tile-'+key).classList.add('is-open');

  const panel = document.createElement('div');
  panel.className = 'cat-panel';
  panel.id = 'panel-'+key;
  panel.innerHTML = buildCatPanelHTML(key);

  document.getElementById('tile-'+key).insertAdjacentElement('afterend', panel);
  initScrollReveal();
}

function renderAccesoriosGrid(){
  const grid = document.getElementById('accesoriosGrid');
  if (!grid) return;
  const cat = CATALOG.accesorios;
  const items = flattenItems(cat);
  PANEL_SOURCE['accesorios'] = { items, label: cat.label };
  const filtered = filteredItems('accesorios', items);
  grid.innerHTML = `
    <p class="note">Agrega al carrito o pregúntanos por WhatsApp.</p>
    ${renderFilterBar('accesorios', items)}
    ${items.length ? `<p class="filters-count" id="count-accesorios">${filtered.length} de ${items.length} producto${items.length===1?'':'s'}</p>` : ''}
    <div class="product-grid" id="grid-accesorios">
      ${filtered.length ? filtered.map(({marca, m}) => productCardHTML(cat.label, marca, m)).join('') : `<p class="grid-empty">No hay accesorios disponibles por ahora.</p>`}
    </div>`;
  initScrollReveal();
}

/* ===================== SUBCATEGORÍAS DERIVADAS DE ACCESORIOS ===================== */
// Relojes, Audífonos y Tech & Oficina no son datos nuevos: se arman "al vuelo"
// filtrando por el nombre de marca/subcategoría que ya trae cada producto de
// Accesorios (viene de la columna "subcategoria" de tu Hoja de Google:
// "Wearables" = Relojes, "Audio" = Audífonos; el resto + Impresoras = Tech &
// Oficina). No se duplica ningún dato ni se toca CATALOG — si mañana cambias
// nombres o agregas subcategorías nuevas en la Hoja, ajusta las listas de
// abajo (WEARABLE_BRAND_NAMES / AUDIO_BRAND_NAMES) para que sigan cayendo en
// el tile correcto.
// Antes esto se comparaba con IGUALDAD exacta contra la subcategoría de tu
// Hoja de Google — si escribías "Relojes inteligentes" o "Smartwatch"
// (singular) en vez de exactamente "Wearables"/"Relojes"/"Smartwatches",
// no calzaba con NINGUNA palabra de la lista y la categoría quedaba vacía
// en el sitio ("No hay productos disponibles"), sin ningún aviso. Ahora se
// compara por CONTENIDO (igual que categoria/marca en el resto del sitio):
// basta con que el texto de tu Hoja CONTENGA una de estas palabras.
const WEARABLE_BRAND_NAMES = ["wearable", "reloj", "watch", "smartwatch"];
const AUDIO_BRAND_NAMES = ["audio", "audifono", "auricular", "airpod", "earbud"];

function buildHub(label, brands){
  return { label, brands };
}

function getExtraHub(key){
  const accBrands = CATALOG.accesorios.brands;
  const normalizarTexto = s => String(s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const esWearable = b => WEARABLE_BRAND_NAMES.some(n => normalizarTexto(b.name).includes(n));
  const esAudio = b => AUDIO_BRAND_NAMES.some(n => normalizarTexto(b.name).includes(n));
  // "Celulares" unifica Apple (iPhone) y Android en una sola búsqueda/filtro,
  // en vez de dos categorías separadas dentro del hub de Tecnología — así
  // el ícono "Equipos" del inicio lleva directo a un solo lugar con todos
  // los celulares, con la Marca (iPhone, Samsung, Xiaomi...) como filtro.
  if(key === 'celulares'){
    return buildHub('Celulares', [...CATALOG.apple.brands, ...CATALOG.android.brands]);
  }
  // Tablets y Computadores también tienen su propia página directa (antes
  // solo se abrían como panel desplegable dentro de Tecnología, lo que
  // confundía porque el botón parecía no llevar a ningún lado).
  if(key === 'tablets'){
    return buildHub(CATALOG.tablets.label, CATALOG.tablets.brands);
  }
  if(key === 'computadores'){
    return buildHub(CATALOG.computadores.label, CATALOG.computadores.brands);
  }
  if(key === 'relojes'){
    return buildHub('Relojes', accBrands.filter(esWearable));
  }
  if(key === 'audifonos'){
    return buildHub('Audífonos', accBrands.filter(esAudio));
  }
  if(key === 'techoficina'){
    const resto = accBrands.filter(b => !esWearable(b) && !esAudio(b));
    return buildHub('Tech & Oficina', [...CATALOG.impresoras.brands, ...resto]);
  }
  return null;
}

// Igual que renderAccesoriosGrid(), pero para las 3 subcategorías derivadas
// de arriba — reutiliza toda la infraestructura de filtros/carrito existente
// (FILTER_STATE, PANEL_SOURCE, flattenItems, filteredItems, renderFilterBar).
function renderExtraHubGrid(key, gridId){
  const grid = document.getElementById(gridId);
  if(!grid) return;
  const hub = getExtraHub(key);
  const items = flattenItems(hub);
  PANEL_SOURCE[key] = { items, label: hub.label };
  const filtered = filteredItems(key, items);
  const q = (FILTER_STATE[key] || {}).q;
  grid.innerHTML = `
    <p class="note">Agrega al carrito o pregúntanos por WhatsApp.</p>
    ${q ? `<p class="filters-search-hint">Mostrando resultados para “${q}” — <a href="javascript:void(0)" onclick="megaMenuGoFiltered('${key}','${(FILTER_STATE[key].marca||'').replace(/'/g,"\\'")}','')">quitar búsqueda</a></p>` : ''}
    ${renderFilterBar(key, items)}
    ${items.length ? `<p class="filters-count" id="count-${key}">${filtered.length} de ${items.length} producto${items.length===1?'':'s'}</p>` : ''}
    <div class="product-grid" id="grid-${key}">
      ${filtered.length ? filtered.map(({marca, m}) => productCardHTML(hub.label, marca, m)).join('') : `<p class="grid-empty">No hay productos disponibles por ahora en esta categoría.</p>`}
    </div>`;
  initScrollReveal();
}

function renderRelojesGrid(){ renderExtraHubGrid('relojes', 'relojesGrid'); }
function renderAudifonosGrid(){ renderExtraHubGrid('audifonos', 'audifonosGrid'); }
function renderTechOficinaGrid(){ renderExtraHubGrid('techoficina', 'techOficinaGrid'); }
function renderCelularesGrid(){ renderExtraHubGrid('celulares', 'celularesGrid'); }
function renderTabletsGrid(){ renderExtraHubGrid('tablets', 'tabletsGrid'); }
function renderComputadoresGrid(){ renderExtraHubGrid('computadores', 'computadoresGrid'); }

/* ===================== MEGA-MENÚ DEL HEADER (todas las categorías) ===================== */
// Aplica un filtro (marca y/o texto libre "q") a la sección indicada y
// navega ahí — lo usan los enlaces del mega-menú para llevar directo a,
// por ejemplo, "Samsung" dentro de Celulares o "Cargadores" dentro de
// Accesorios, sin tener que entrar primero y filtrar a mano.
const MEGA_HUB_RENDERERS = {
  celulares: renderCelularesGrid, techoficina: renderTechOficinaGrid,
  tablets: renderTabletsGrid, computadores: renderComputadoresGrid,
  relojes: renderRelojesGrid, audifonos: renderAudifonosGrid
};
function megaMenuGoFiltered(hubKey, marca, q){
  FILTER_STATE[hubKey] = {};
  if(marca) FILTER_STATE[hubKey].marca = marca;
  if(q) FILTER_STATE[hubKey].q = q;
  if(MEGA_HUB_RENDERERS[hubKey]) MEGA_HUB_RENDERERS[hubKey]();
  go(hubKey);
}

// Genera UNA columna del mega-menú a partir de las "marcas" reales de una
// categoría (CATALOG[x].brands o getExtraHub(x).brands):
// - Si hay MÁS DE UNA marca con productos (ej. Android: Samsung, Xiaomi...
//   o Accesorios: Cargadores, Cables...), lista cada marca — clic filtra
//   por esa marca.
// - Si solo hay UNA (categorías sin sub-marca en tu Hoja, como Tablets o
//   Computadores, que hoy son una sola lista), lista en cambio los nombres
//   de producto distintos (sin el sufijo de almacenamiento) y filtra por
//   texto en vez de marca.
// Así una sola función arma el mega-menú de cualquier categoría del sitio,
// se actualiza sola con tu catálogo real, y no hay que escribir nada a mano.
function megaMenuColumnHTML(heading, hubKey, brands, cap){
  cap = cap || 6;
  const esc = s => String(s).replace(/'/g, "\\'");
  const conStock = (brands || []).filter(b => b.models && b.models.length);
  if(!conStock.length) return '';

  let itemsHTML;
  if(conStock.length > 1){
    const list = [...conStock].sort((a, b) => b.models.length - a.models.length).slice(0, cap);
    itemsHTML = list.map(b => `<button type="button" onclick="megaMenuGoFiltered('${hubKey}','${esc(b.name)}','')">${b.name}</button>`).join('');
  } else {
    const nombres = [...new Set(conStock[0].models.map(m => (m.n || '').replace(/\s*—\s*[^—]*$/, '')).filter(Boolean))].slice(0, cap);
    if(!nombres.length) return '';
    itemsHTML = nombres.map(n => `<button type="button" onclick="megaMenuGoFiltered('${hubKey}','','${esc(n)}')">${n}</button>`).join('');
  }

  return `<div class="mega-menu-col">
    <span class="mega-menu-heading">${heading}</span>
    ${itemsHTML}
    <button type="button" class="mega-menu-viewall" onclick="megaMenuGoFiltered('${hubKey}','','')">Ver todos →</button>
  </div>`;
}

function renderMegaEquipos(){
  const el = document.getElementById('megaEquipos');
  if(!el) return;
  // CATALOG.apple.brands trae una sola "marca" (iPhone) con todos los
  // modelos adentro → megaMenuColumnHTML lista los nombres de modelo.
  // CATALOG.android.brands trae varias marcas reales → lista las marcas.
  const col1 = megaMenuColumnHTML('iPhone', 'celulares', CATALOG.apple.brands, 6);
  const col2 = megaMenuColumnHTML('Android', 'celulares', CATALOG.android.brands, 6);
  if(!col1 && !col2){ el.innerHTML = ''; return; }
  // A pedido de Andrés: se quitó el recuadro de Sistecrédito que iba al
  // lado de las columnas — el mega-menú ahora solo muestra los productos
  // (iPhone / Android), sin nada promocional adicional.
  el.innerHTML = `${col1}${col2}`;
}

function renderMegaTablets(){
  const el = document.getElementById('megaTablets');
  if(el) el.innerHTML = megaMenuColumnHTML('Tablets', 'tablets', CATALOG.tablets.brands, 8);
}
function renderMegaComputadores(){
  const el = document.getElementById('megaComputadores');
  if(el) el.innerHTML = megaMenuColumnHTML('Computadores', 'computadores', CATALOG.computadores.brands, 8);
}
function renderMegaRelojes(){
  const el = document.getElementById('megaRelojes');
  if(el) el.innerHTML = megaMenuColumnHTML('Relojes', 'relojes', getExtraHub('relojes').brands, 8);
}
function renderMegaAudifonos(){
  const el = document.getElementById('megaAudifonos');
  if(el) el.innerHTML = megaMenuColumnHTML('Audífonos', 'audifonos', getExtraHub('audifonos').brands, 8);
}

function renderMegaAccesorios(){
  const el = document.getElementById('megaAccesorios');
  if(!el) return;
  const hub = getExtraHub('techoficina');
  const brands = [...hub.brands].filter(b => b.models.length).sort((a, b) => b.models.length - a.models.length).slice(0, 8);
  if(!brands.length){ el.innerHTML = ''; return; }

  const esc = s => String(s).replace(/'/g, "\\'");
  // A pedido de Andrés: se quitó el recuadro de "Estuches Acrygel" que iba
  // al lado — el mega-menú de Accesorios ahora solo muestra los productos.
  el.innerHTML = `
    <div class="mega-menu-col mega-menu-col-wide">
      <span class="mega-menu-heading">Accesorios y Tech</span>
      <div class="mega-menu-grid">
        ${brands.map(b => `<button type="button" onclick="megaMenuGoFiltered('techoficina','${esc(b.name)}','')">${b.name}</button>`).join('')}
      </div>
      <button type="button" class="mega-menu-viewall" onclick="megaMenuGoFiltered('techoficina','','')">Ver todo Accesorios →</button>
    </div>`;
}

function renderMegaMenus(){
  renderMegaEquipos();
  renderMegaTablets();
  renderMegaRelojes();
  renderMegaAudifonos();
  renderMegaComputadores();
  renderMegaAccesorios();
}

// Cierra el mega-menú abierto al presionar Escape (quita el foco de
// cualquier elemento adentro, con lo que deja de cumplir :focus-within).
document.addEventListener('keydown', e => {
  if(e.key !== 'Escape') return;
  const abierto = document.activeElement && document.activeElement.closest('.nav-item');
  if(abierto) document.activeElement.blur();
});

// Buscador propio de "Celulares" (igual que performTechSearch, pero acotado
// a Apple + Android) — al escribir, oculta la grilla con filtros y muestra
// los resultados; al borrar, la vuelve a mostrar.
function performCelularesSearch(query){
  const q = query.trim().toLowerCase();
  const panel = document.getElementById('celularesGrid');
  const resultsEl = document.getElementById('celularesSearchResults');
  if(!panel || !resultsEl) return;

  if(q.length < 2){
    resultsEl.innerHTML = '';
    panel.style.display = '';
    return;
  }
  panel.style.display = 'none';

  const hub = getExtraHub('celulares');
  const matches = [];
  hub.brands.forEach(b => b.models.forEach(m => {
    if(m.n.toLowerCase().includes(q)) matches.push({ marca: b.name, m });
  }));

  if(!matches.length){
    resultsEl.innerHTML = `<p class="note">No encontramos modelos con "${query}" — prueba con otra palabra o pregúntanos por WhatsApp.</p>`;
    return;
  }
  resultsEl.innerHTML = `<p class="note">${matches.length} resultado${matches.length===1?'':'s'} para "${query}"</p>
    <div class="product-grid">
      ${matches.map(({marca,m}) => productCardHTML(hub.label, marca, m)).join('')}
    </div>`;
  initScrollReveal();
}

/* ===================== VIEW SWITCH ===================== */
// Vistas con URL propia (hash) para poder compartir o recargar el link
// directamente en esa sección. "product" se maneja aparte en openProduct(),
// porque su hash lleva el id del producto (#/producto/<id>).
const HASH_VIEWS = ['home','personaliza','tech','celulares','tablets','computadores','accesorios','relojes','audifonos','techoficina','cases','faq','privacidad','devoluciones','historias'];

// Contador que identifica la navegación más reciente. Antes, si go() se
// llamaba dos veces seguidas muy rápido (doble clic, o un clic mientras la
// animación anterior no había terminado), podían quedar VARIOS listeners de
// "transitionend" esperando a la vez y la vista terminaba mostrando el
// resultado de la llamada equivocada — o, si ninguno de los dos disparaba
// realmente el evento (ver nota más abajo), la página se quedaba
// "pegada" sin cambiar de sección. Cada llamada a go() recibe un número
// nuevo; si para cuando el cambio de vista se ejecuta ya hay una llamada
// más reciente en curso, esa ejecución se cancela sola.
let _goToken = 0;

function go(view, opts){
  if(view !== 'product') document.body.classList.remove('pdp-sticky-on');
  document.body.classList.toggle('on-product', view === 'product');
  opts = opts || {};
  if(view !== 'product') CURRENT_PRODUCT_ID = null;
  if(view !== 'product') document.title = DEFAULT_TITLE;
  if(view !== 'product') removeProductSchema();

  const app = document.getElementById('app');
  toggleMenu(false);
  // Quita el foco de lo que se haya clicado (un enlace del mega-menú, el
  // botón "Relojes", un resultado de búsqueda...). Sin esto, el elemento
  // clicado se queda enfocado y el mega-menú (que se abre con
  // ":focus-within") sigue visible/pegado encima del contenido nuevo aunque
  // ya hayas navegado a otra sección.
  if(document.activeElement && typeof document.activeElement.blur === 'function'){
    document.activeElement.blur();
  }

  const myToken = ++_goToken;
  const swapView = () => {
    // Si mientras esperábamos la animación se lanzó OTRA navegación más
    // reciente (por ejemplo, un segundo clic), esta ya quedó obsoleta —
    // no pisar lo que la navegación más nueva ya esté mostrando.
    if(myToken !== _goToken) return;
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const target = document.getElementById('view-'+view);
    if(target) target.classList.add('active');
    document.querySelectorAll('nav.links button[data-view]').forEach(b => b.classList.toggle('is-active', b.dataset.view === view));
    window.scrollTo({top:0, behavior:'instant'});
    requestAnimationFrame(() => app.classList.remove('transitioning'));
    // Bug de banners sin imágenes al volver a Inicio (ver promoBannerSyncWithView
    // más abajo, junto al carrusel): el autoplay del banner solo debe correr
    // mientras Inicio está realmente visible.
    promoBannerSyncWithView(view === 'home');
    // Generador de Historias (#/historias): se prepara al abrir la página.
    if(view === 'historias') storyOpen();
    if(view === 'personaliza') document.title = 'Personaliza tu celular — Skins, estuches e hidrogel | Camand Mobile';
  };

  const onTransitionEnd = (e) => {
    // "transitionend" hace bubbling — sin este chequeo, la transición de
    // CUALQUIER hijo (un botón, una foto, el carrito) que termine mientras
    // #app también está en transición dispara el cambio de vista antes de
    // tiempo, o consume el listener "once" sin que #app haya terminado.
    if(e.target !== app) return;
    app.removeEventListener('transitionend', onTransitionEnd);
    clearTimeout(fallbackTimer);
    swapView();
  };
  app.addEventListener('transitionend', onTransitionEnd);
  // Red de seguridad: si por lo que sea el evento "transitionend" nunca
  // llega a disparar en #app (pestaña en segundo plano, el sistema del
  // visitante tiene activado "reducir movimiento", o cualquier otro caso
  // donde el navegador no complete la transición), la vista igual cambia
  // pasado el tiempo que dura la animación en el CSS (.4s) + un margen —
  // así nunca se queda "pegada" sin reaccionar al clic.
  const fallbackTimer = setTimeout(() => {
    app.removeEventListener('transitionend', onTransitionEnd);
    swapView();
  }, 450);

  app.classList.add('transitioning');

  if(!opts.fromHash && HASH_VIEWS.includes(view)){
    const newHash = '#/' + view;
    if(location.hash !== newHash) history.pushState(null, '', newHash);
  }
}

// "Ver todo el catálogo →" (debajo de "Productos más vendidos" en el
// inicio): antes llevaba a go('tech'), el hub genérico de "Tecnología" —
// pero desde que Equipos, Tablets y Computadores pasaron a tener su propia
// página (ver mejoras-web-sep-2026.md, tercera ronda), ese hub quedó casi
// vacío (solo Impresoras, y "Otros productos" si aplica), así que el botón
// ya no llevaba a nada útil como "catálogo completo". Como el sitio no
// tiene una única página con TODO junto, lo que de verdad funciona como
// "ver todo el catálogo" hoy es la cuadrícula de 6 categorías que ya está
// arriba, en el propio inicio — así que este botón sube hasta ahí (o
// primero te lleva al inicio y luego sube, si estabas en otra página).
function goToCatGrid(){
  const scrollToGrid = () => {
    const el = document.getElementById('catGridHome');
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
  };
  const homeView = document.getElementById('view-home');
  if(homeView && homeView.classList.contains('active')){
    scrollToGrid();
  } else {
    go('home');
    setTimeout(scrollToGrid, 500);
  }
}

function toggleFaq(btn){
  btn.parentElement.classList.toggle('open');
}

function toggleMenu(open){
  document.getElementById('mobileMenu').classList.toggle('open', open);
}

function renderHeroShowcase(){
  const el = document.getElementById('heroShowcase');
  if (!el || !GALLERY_PHOTOS.length) return;

  const PAGE_SIZE = 2;
  const pages = [];
  for (let i = 0; i < GALLERY_PHOTOS.length; i += PAGE_SIZE) {
    pages.push(GALLERY_PHOTOS.slice(i, i + PAGE_SIZE));
  }

  el.innerHTML = pages.map((page, pi) =>
    `<div class="showcase-page ${pi === 0 ? 'active' : ''}">` +
      page.map(src => `<img src="${src}" alt="Estuche personalizado Camand Mobile">`).join('') +
    `</div>`
  ).join('');

  if (pages.length <= 1) return;
  const pageEls = el.querySelectorAll('.showcase-page');
  let idx = 0;
  setInterval(() => {
    pageEls[idx].classList.remove('active');
    idx = (idx + 1) % pageEls.length;
    pageEls[idx].classList.add('active');
  }, 4200);
}

function applySistecreditoLogos(){
  document.querySelectorAll('.sc-logo-img').forEach(img => img.src = SISTECREDITO_LOGO);
}

// Logo en vector (SVG): se ve nítido a cualquier tamaño y en pantallas de
// alta densidad. Sobre fondo oscuro (pie de página) se usa la versión blanca.
// El PNG (CAMAND_LOGO) se sigue usando para el generador de Historias.
const CAMAND_LOGO_SVG = "img/camand-logo.svg", CAMAND_LOGO_BLANCO_SVG = "img/camand-logo-blanco.svg";
function applyCamandLogo(){
  document.querySelectorAll('.camand-logo-img').forEach(img => {
    img.src = img.classList.contains('camand-logo-blanco') ? CAMAND_LOGO_BLANCO_SVG : CAMAND_LOGO_SVG;
  });
}

function renderTodo(){
  renderCatGrid();
  renderAccesoriosGrid();
  renderCelularesGrid();
  renderTabletsGrid();
  renderComputadoresGrid();
  renderRelojesGrid();
  renderAudifonosGrid();
  renderTechOficinaGrid();
  renderHomeFeatured();
  renderHomeRails();
  renderCinta();
  if(typeof renderPersonaliza === 'function') renderPersonaliza();
  if(typeof renderCampanas === 'function') renderCampanas();
  if(typeof storyRefresh === 'function' && typeof tmStoryTheme === 'function') tmStoryTheme();
  renderMegaMenus();
  renderPromoBanner();
  renderGallery();
  renderHeroShowcase();
  applySistecreditoLogos();
  applyCamandLogo();
  applyTopBarMsg();
  renderCartUI();
  initCartExtras();
  renderFavUI();
  // Si el catálogo se actualiza (llega la Hoja de Google) mientras alguien
  // tiene abierta la página de un producto, se refresca esa misma ficha
  // con el precio/datos más recientes sin sacarlo de la vista.
  if(CURRENT_PRODUCT_ID){
    const productView = document.getElementById('view-product');
    if(productView && productView.classList.contains('active')) renderProductInto(CURRENT_PRODUCT_ID);
  }
  storyRefresh();
  initScrollReveal();
}

/* ===================== ANIMACIÓN AL HACER SCROLL ===================== */
// Da un efecto de aparición suave (fade + leve desplazamiento) a banners y
// secciones marcadas con class="reveal" cuando entran en la pantalla al
// bajar. Si el navegador no soporta IntersectionObserver, los elementos
// se quedan visibles con normalidad (el CSS solo los oculta si esta
// función alcanza a correr).
let _revealObserver = null;
function initScrollReveal(){
  if(!('IntersectionObserver' in window)) return;
  if(!_revealObserver){
    _revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('in-view');
          _revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
  }
  document.querySelectorAll('.reveal:not(.reveal-bound)').forEach(el => {
    el.classList.add('reveal-bound');
    _revealObserver.observe(el);
  });
}

// Fade-in de fotos de producto (evento "load" no hace bubbling, por eso se
// escucha en fase de captura sobre todo el documento — funciona sin
// importar cuándo ni cómo se creó cada <img class="img-fade">).
document.addEventListener('load', (e) => {
  const t = e.target;
  if(t && t.tagName === 'IMG' && t.classList.contains('img-fade')){
    t.classList.add('img-loaded');
  }
}, true);

// Cierra el buscador global si se hace clic fuera de él (en pantallas
// grandes, donde no hay overlay oscuro cubriendo toda la pantalla).
document.addEventListener('click', (e) => {
  const wrap = document.querySelector('.nav-search');
  const panel = document.getElementById('navSearchPanel');
  if(!wrap || !panel || !panel.classList.contains('is-open')) return;
  if(!wrap.contains(e.target)) toggleNavSearch(false);
});

/* ===================== PÁGINA DE PRODUCTO (PDP) ===================== */

// Link estable de un producto: #/p/<slug> (nombre + almacenamiento + condición),
// el mismo de las páginas /producto/<slug>/ que ve Google. No cambia cuando
// cambia el precio, así que un link compartido sigue funcionando.
function productSlugFromId(id){
  const f = findProductById(id);
  if(!f) return null;
  return String(f.m.n + ' ' + (f.m.cond || '')).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 90) || null;
}
function productHash(id){
  const sl = productSlugFromId(id);
  return sl ? '#/p/' + sl : '#/producto/' + encodeURIComponent(id);
}
function productShareUrl(id){
  return location.origin + location.pathname + productHash(id);
}

function findProductById(id){
  const exacto = findProductByIdExact(id);
  if(exacto) return exacto;
  // Links viejos (#/producto/<marca_nombre_precio>): si el precio cambió en la
  // Hoja, el id ya no coincide. Se busca el mismo producto sin mirar el precio.
  const sinPrecio = String(id || '').replace(/_\d+$/, '');
  if(!sinPrecio || sinPrecio === id) return null;
  for(const catKey of Object.keys(CATALOG)){
    for(const b of CATALOG[catKey].brands){
      for(const m of b.models){
        if(productId(b.name, m).replace(/_\d+$/, '') === sinPrecio) return { catKey, catLabel: CATALOG[catKey].label, marca: b.name, m };
      }
    }
  }
  return null;
}
function findProductByIdExact(id){
  for(const catKey of Object.keys(CATALOG)){
    const cat = CATALOG[catKey];
    for(const b of cat.brands){
      for(const m of b.models){
        if(productId(b.name, m) === id){
          return { catKey, catLabel: cat.label, marca: b.name, m };
        }
      }
    }
  }
  return null;
}

// Nombre "base" de un producto sin su almacenamiento (ej. "Samsung A07 128/6"
// → "Samsung A07"), para poder agrupar variantes de la misma referencia con
// distinta capacidad — igual convención que ya usa la Hoja de Google (mismo
// NOMBRE + distinto ALMACENAMIENTO = fila/variante separada).
function pdpBaseName(m){
  if(m.alm && m.n.endsWith(' — ' + m.alm)) return m.n.slice(0, m.n.length - (' — ' + m.alm).length);
  return m.n;
}

function findSiblingVariants(catKey, marca, m){
  const cat = CATALOG[catKey];
  if(!cat) return [];
  const base = pdpBaseName(m);
  const siblings = [];
  cat.brands.forEach(b => {
    if(b.name !== marca) return;
    b.models.forEach(mm => {
      if(pdpBaseName(mm) === base) siblings.push(mm);
    });
  });
  return siblings.length > 1 ? siblings.sort((a, b) => a.p - b.p) : [];
}

function pdpZoomActive(){
  if(!PDP_IMAGES.length) return;
  openZoom(optimizeImageUrl(PDP_IMAGES[PDP_ACTIVE_IMG] || PDP_IMAGES[0], 1400));
}

function openZoom(url){
  const overlay = document.getElementById('lightbox');
  document.getElementById('lightboxImg').src = url;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function pdpSetActiveImage(i){
  if(!PDP_IMAGES[i]) return;
  PDP_ACTIVE_IMG = i;
  const img = document.getElementById('pdpMainImg');
  if(img){ img.classList.remove('img-loaded'); img.srcset = `${optimizeImageUrl(PDP_IMAGES[i], 700)} 700w, ${optimizeImageUrl(PDP_IMAGES[i], 1200)} 1200w`; img.src = optimizeImageUrl(PDP_IMAGES[i], 1200); }
  document.querySelectorAll('.pdp-thumb').forEach((t, idx) => t.classList.toggle('is-active', idx === i));
}

function switchPdpTab(btn, name){
  const container = btn.closest('.pdp-section-block');
  if(!container) return;
  container.querySelectorAll('.pdp-tab-btn').forEach(b => b.classList.toggle('is-active', b === btn));
  container.querySelectorAll('.pdp-tab-panel').forEach(p => p.classList.toggle('is-active', p.dataset.panel === name));
}

// Corrige tildes frecuentes que vienen sin acento desde la Hoja (solo para mostrar).
function fixSpecTildes(t){
  return t.replace(/\banos\b/g,'años').replace(/\bano\b/g,'año')
    .replace(/\bcamara(s?)\b/gi,(x,pl)=>(x[0]==='C'?'C':'c')+'ámara'+pl)
    .replace(/\bbateria\b/gi,x=>(x[0]==='B'?'B':'b')+'atería')
    .replace(/\bautonomia\b/gi,x=>(x[0]==='A'?'A':'a')+'utonomía')
    .replace(/\bresolucion\b/gi,x=>(x[0]==='R'?'R':'r')+'esolución')
    .replace(/\bactualizacion\b/gi,x=>(x[0]==='A'?'A':'a')+'ctualización');
}

function productDetailHTML(catKey, catLabel, marca, m){
  const id = productId(marca, m);
  const idJs = id.replace(/'/g, "\\'");
  const nJs = m.n.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '&quot;');
  const imgJs = (m.img || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  const catJs = catLabel.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  const esNuevo = (m.cond || '').trim().toLowerCase() === 'nuevo';
  const specs = [m.alm, m.ram ? m.ram + ' RAM' : '', m.cam || '', m.bat || ''].filter(Boolean);
  const tieneDescuento = m.pAntes && m.pAntes > m.p;
  const pctDescuento = tieneDescuento ? Math.round((1 - m.p / m.pAntes) * 100) : 0;

  PDP_IMAGES = productImageList(m);
  PDP_ACTIVE_IMG = 0;
  const hasImgs = PDP_IMAGES.length > 0;

  const mainImgHTML = hasImgs
    ? `<img id="pdpMainImg" class="img-fade" src="${optimizeImageUrl(PDP_IMAGES[0], 1200)}" srcset="${optimizeImageUrl(PDP_IMAGES[0], 700)} 700w, ${optimizeImageUrl(PDP_IMAGES[0], 1200)} 1200w" sizes="(max-width:760px) 92vw, 520px" fetchpriority="high" alt="${nJs}" onerror="this.parentElement.innerHTML='&lt;span class=\\'pc-noimg\\'&gt;&lt;svg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'1.6\\'&gt;&lt;rect x=\\'3\\' y=\\'4.5\\' width=\\'18\\' height=\\'15\\' rx=\\'2\\'/&gt;&lt;circle cx=\\'9\\' cy=\\'10\\' r=\\'1.8\\'/&gt;&lt;path d=\\'M21 16l-5.5-5-4 4-2.5-2L3 18\\'/&gt;&lt;/svg&gt;&lt;/span&gt;'">`
    : `<span class="pc-noimg">${ICON_PHOTO}</span>`;

  const thumbsHTML = PDP_IMAGES.length > 1
    ? `<div class="pdp-thumbs">${PDP_IMAGES.map((src, i) => `
        <button type="button" class="pdp-thumb${i === 0 ? ' is-active' : ''}" onclick="pdpSetActiveImage(${i})" aria-label="Ver foto ${i + 1}">
          <img src="${optimizeImageUrl(src, 160)}" alt="">
        </button>`).join('')}</div>`
    : '';

  const variants = findSiblingVariants(catKey, marca, m);
  const variantsHTML = variants.length ? `
    <div class="pdp-variants">
      <h5>Almacenamiento disponible</h5>
      <div class="pdp-variant-chips">
        ${variants.map(v => {
          const vid = productId(marca, v).replace(/'/g, "\\'");
          const activeCls = v === m ? ' is-active' : '';
          return `<button type="button" class="pdp-variant-chip${activeCls}" onclick="openProduct('${vid}')">${v.alm || v.n}</button>`;
        }).join('')}
      </div>
    </div>` : '';

  // Especificaciones: se separan por ";" (o salto de línea / punto final seguido de mayúscula).
  // Si la fila no usa ";", se separan por coma + espacio. Nunca se corta "6.9''" ni "6,7".
  const notasTxt = (m.notes || '').trim();
  const sepRe = /;|\n/.test(notasTxt) ? /\s*;\s*|\n+|\.\s+(?=[A-ZÁÉÍÓÚÑ])/ : /,\s+|\.\s+(?=[A-ZÁÉÍÓÚÑ])/;
  const specsListHTML = notasTxt.split(sepRe).map(s => fixSpecTildes(s.trim().replace(/\.$/, ''))).filter(Boolean)
    .map(s => s.charAt(0).toUpperCase() + s.slice(1));

  return `
    <div class="pdp-grid">
      <div class="pdp-gallery">
        <div class="pdp-main-img" id="pdpMainImgWrap" onclick="${hasImgs ? 'pdpZoomActive()' : ''}">
          ${mainImgHTML}
          ${hasImgs ? `<span class="pdp-zoom-hint"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" width="13" height="13"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/><path d="M11 8v6M8 11h6"/></svg>Ampliar</span>` : ''}
        </div>
        ${thumbsHTML}
      </div>
      <div class="pdp-body">
        <div class="pdp-badges-row">
          ${m.cond ? `<span class="pc-badge${esNuevo ? ' nuevo' : ''}">${m.cond}</span>` : ''}
          ${m.tag ? `<span class="pc-tag">${m.tag}</span>` : ''}
        </div>
        <h1 class="pdp-title">${m.n}</h1>
        ${specs.length ? `<div class="pdp-specs-mini">${specs.map(s => `<span>${s}</span>`).join('')}</div>` : ''}
        <div class="pdp-price-row">
          ${tieneDescuento ? `<span class="pdp-price-old">${formatCOP(m.pAntes)}</span><span class="pc-discount-badge">-${pctDescuento}%</span>` : ''}
          <span class="pdp-price">${formatCOP(m.p)}</span>
        </div>
        <button type="button" class="pdp-share-btn" onclick="shareProduct('${idJs}','${nJs}',${m.p})">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 10.6l6.8-3.2M8.6 13.4l6.8 3.2"/></svg>
          Compartir este producto
        </button>

        ${variantsHTML}

        <div class="pdp-actions">
          <button type="button" class="pdp-add-btn" onclick="addToCart('${idJs}','${nJs}',${m.p},'${imgJs}','${catJs}',this)">Agregar al carrito</button>
          <a class="pdp-wa-btn" href="${waLink('Hola, quiero comprar: ' + m.n + ' (' + formatCOP(m.p) + '). ¿Sigue disponible?')}" target="_blank" rel="noopener">
            <svg viewBox="0 0 32 32"><path d="M16.001 3C9.096 3 3.5 8.596 3.5 15.5c0 2.42.688 4.68 1.878 6.598L3 29l7.086-2.335A12.44 12.44 0 0 0 16 28c6.905 0 12.5-5.596 12.5-12.5S22.906 3 16.001 3Zm7.29 17.86c-.304.858-1.51 1.57-2.472 1.774-.657.14-1.514.252-4.4-.945-3.693-1.53-6.07-5.28-6.256-5.526-.18-.246-1.5-1.998-1.5-3.812 0-1.814.95-2.706 1.286-3.076.336-.37.732-.462.976-.462.244 0 .488.002.7.013.225.012.526-.086.822.627.304.732 1.033 2.53 1.123 2.714.09.185.15.4.03.646-.12.246-.18.4-.354.615-.174.216-.366.482-.522.647-.174.185-.356.386-.153.756.204.37.905 1.494 1.943 2.42 1.336 1.192 2.462 1.562 2.833 1.738.37.176.588.15.804-.09.216-.24.925-1.078 1.172-1.448.246-.37.492-.308.83-.185.34.123 2.153 1.016 2.523 1.2.37.185.616.277.706.432.09.156.09.902-.213 1.762Z"/></svg>
            Comprar por WhatsApp
          </a>
        </div>

        <div class="pdp-section-block">
          <h5>${ICON_CARD}Métodos de pago aceptados</h5>
          <div class="pdp-pay-grid">
            <div class="pdp-pay-item is-featured"><span class="pdp-pay-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13h11l3 4h4v-4l-3-5H3z"/><circle cx="7.5" cy="18" r="1.6"/><circle cx="17.5" cy="18" r="1.6"/></svg></span>Contraentrega<br><small>paga al recibir</small></div>
            <div class="pdp-pay-item is-featured"><span class="pdp-pay-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/></svg></span>Tarjeta de crédito<br><small>a cuotas · recargo 6%</small></div>
            <div class="pdp-pay-item"><span class="pdp-pay-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.4"/></svg></span>Transferencia<br>/ PSE</div>
            <div class="pdp-pay-item"><span class="pdp-pay-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 7h6M9 11h6M9 15h3"/></svg></span>Nequi</div>
            <div class="pdp-pay-item is-wide"><span class="pdp-pay-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v18M17 7.5c-.8-1.5-2.7-2.5-5-2.5-2.8 0-5 1.4-5 3.5S9.2 11.3 12 12s5 1.4 5 3.5-2.2 3.5-5 3.5c-2.3 0-4.2-1-5-2.5"/></svg></span>Sistecrédito<br><small>cuotas sin tarjeta</small></div>
          </div>
          <p class="pdp-pay-note">Confirmamos el método de pago directamente por <a href="${waLink('Hola, quiero preguntar los métodos de pago disponibles para: ' + m.n)}" target="_blank" rel="noopener">WhatsApp</a>.</p>
        </div>

        <div class="pdp-section-block">
          <h5>${ICON_TRUCK}Tiempos y métodos de envío</h5>
          <div class="pdp-ship-row">
            <div class="pdp-ship-item"><span class="emoji">${ICON_ZAP}</span><div><b>Bogotá: 1–2 días hábiles</b><span class="sub">Entrega local, coordinada por WhatsApp.</span></div></div>
            <div class="pdp-ship-item"><span class="emoji">${ICON_BOX}</span><div><b>Resto del país: 1–2 días hábiles</b><span class="sub">Vía Interrapidísimo, con número de guía para rastreo. Zonas alejadas pueden tardar un poco más.</span></div></div>
            <div class="pdp-ship-item"><span class="emoji">${ICON_GIFT}</span><div><b>Envío gratis en compras desde ${formatCOP(FREE_SHIPPING_THRESHOLD)}</b><span class="sub">Pedidos menores: costo según tu ciudad, confirmado por WhatsApp.</span></div></div>
          </div>
        </div>

        <div class="pdp-section-block">
          <div class="pdp-tabs-nav">
            <button type="button" class="pdp-tab-btn is-active" data-tab="specs" onclick="switchPdpTab(this,'specs')">Especificaciones técnicas</button>
            <button type="button" class="pdp-tab-btn" data-tab="box" onclick="switchPdpTab(this,'box')">Contenido de la caja</button>
            <button type="button" class="pdp-tab-btn" data-tab="warranty" onclick="switchPdpTab(this,'warranty')">Garantía</button>
          </div>
          <div class="pdp-tab-panel is-active" data-panel="specs">
            ${specsListHTML.length ? `<ul>${specsListHTML.map(s => `<li>${s}</li>`).join('')}</ul>` : `<p>Ficha técnica detallada disponible por WhatsApp — pregúntanos por este modelo.</p>`}
          </div>
          <div class="pdp-tab-panel" data-panel="box">
            <p><b>Contenido estándar:</b> el equipo${esNuevo ? ', en su empaque original' : ', revisado y verificado'}. Los accesorios incluidos (cargador, cable, manual, caja) dependen de la disponibilidad del proveedor para este modelo.</p>
            <p>Te confirmamos el contenido exacto de la caja de <b>este</b> producto antes de tu compra — <a href="${waLink('Hola, quiero saber qué incluye la caja de: ' + m.n)}" target="_blank" rel="noopener">pregúntanos por WhatsApp</a>.</p>
          </div>
          <div class="pdp-tab-panel" data-panel="warranty">
            <p>${esNuevo
              ? '<b>Equipo nuevo:</b> cubierto por la garantía legal mínima y, cuando aplica, la garantía del fabricante o importador.'
              : '<b>Equipo seminuevo/remanufacturado:</b> revisado antes de la entrega, con garantía directa de Camand Mobile por funcionamiento.'}</p>
            <p>El tiempo exacto de garantía varía según el modelo y su condición — te lo confirmamos para <b>este</b> producto antes de comprar. Ver también nuestras <a onclick="go('faq');return false;" href="#">políticas generales de garantía y devoluciones</a>.</p>
            <p><a href="${waLink('Hola, quiero saber la garantía de: ' + m.n)}" target="_blank" rel="noopener">Preguntar garantía de este equipo por WhatsApp →</a></p>
          </div>
        </div>

      </div>
    </div>
    <div class="pdp-sticky-buy" id="pdpStickyBuy" aria-hidden="true">
      <div class="pdp-sticky-info"><span class="pdp-sticky-name">${m.n}</span><b>${formatCOP(m.p)}</b></div>
      <button type="button" class="pdp-sticky-btn" onclick="addToCart('${idJs}','${nJs}',${m.p},'${imgJs}','${catJs}',this)">Agregar</button>
    </div>`;
}

function renderProductInto(id){
  const contentEl = document.getElementById('pdpContent');
  const crumbEl = document.getElementById('pdpBreadcrumb');
  if(!contentEl || !crumbEl) return;
  const found = findProductById(id);

  if(!found){
    document.title = DEFAULT_TITLE;
    removeProductSchema();
    crumbEl.innerHTML = `
      <button class="back-btn" onclick="go('home')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M15 6l-6 6 6 6"/></svg>
        Inicio
      </button>`;
    contentEl.innerHTML = `
      <div class="pdp-not-found">
        <h2>No encontramos este producto</h2>
        <p>Es posible que ya no esté disponible o que el precio/almacenamiento haya cambiado. Mira el catálogo actualizado o pregúntanos por WhatsApp.</p>
        <button type="button" class="btn-primary" onclick="go('tech')">Ver catálogo</button>
      </div>`;
    return;
  }

  const { catKey, catLabel, marca, m } = found;
  // A qué página vuelve el botón "Volver" según de dónde es el producto —
  // cada categoría con página propia (Celulares, Tablets, Computadores,
  // Accesorios) regresa a la suya; el resto (Impresoras, Otros) vuelve al
  // hub general de Tecnología.
  const HUB_VIEW_BY_CAT = {
    accesorios: 'accesorios', apple: 'celulares', android: 'celulares',
    tablets: 'tablets', computadores: 'computadores'
  };
  const hubView = HUB_VIEW_BY_CAT[catKey] || 'tech';
  document.title = m.n.split('•')[0].trim() + ' — Camand Mobile';

  crumbEl.innerHTML = `
    <button class="back-btn" onclick="go('${hubView}')">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M15 6l-6 6 6 6"/></svg>
      Volver
    </button>
    <span>/ ${catLabel} / ${marca}</span>`;

  contentEl.innerHTML = productDetailHTML(catKey, catLabel, marca, m);
  updateProductSchema(catLabel, marca, m, hubView, id);
}

// Datos estructurados (schema.org) de la página de producto — Product +
// BreadcrumbList — para que Google pueda mostrar precio/disponibilidad en
// resultados de búsqueda enriquecidos. Se genera e inyecta en <head> solo
// mientras se está viendo un producto, y se quita al salir (removeProductSchema),
// para no dejar datos de un producto viejo pegados en otra página.
function removeProductSchema(){
  const existing = document.getElementById('productSchema');
  if(existing) existing.remove();
}
function updateProductSchema(catLabel, marca, m, hubView, id){
  removeProductSchema();
  const nombre = m.n.split('•')[0].trim();
  const esNuevo = (m.cond || '').trim().toLowerCase() === 'nuevo';
  const primeraImagen = productImageList(m)[0] || (m.img || '');
  const baseUrl = location.origin + location.pathname;
  const slugSchema = productSlugFromId(id);
  const url = slugSchema ? 'https://camandmobile.com/producto/' + slugSchema + '/' : baseUrl + productHash(id);
  const descripcion = String(m.notes || '').replace(/<[^>]*>/g, '').trim();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": nombre,
    "image": primeraImagen ? [primeraImagen] : undefined,
    "description": descripcion || undefined,
    "brand": { "@type": "Brand", "name": marca },
    "offers": {
      "@type": "Offer",
      "url": url,
      "priceCurrency": "COP",
      "price": m.p,
      "availability": "https://schema.org/InStock",
      "itemCondition": esNuevo ? "https://schema.org/NewCondition" : "https://schema.org/UsedCondition"
    }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": baseUrl + "#/home" },
      { "@type": "ListItem", "position": 2, "name": catLabel, "item": baseUrl + "#/" + hubView },
      { "@type": "ListItem", "position": 3, "name": nombre }
    ]
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = 'productSchema';
  script.textContent = JSON.stringify([productSchema, breadcrumbSchema]);
  document.head.appendChild(script);
}

// Barra fija de compra (solo celular): aparece cuando los botones de compra
// de la ficha ya no se ven en pantalla, y se esconde al salir de la ficha.
let PDP_STICKY_OBS = null;
function pdpStickyInit(){
  if(PDP_STICKY_OBS){ PDP_STICKY_OBS.disconnect(); PDP_STICKY_OBS = null; }
  document.body.classList.remove('pdp-sticky-on');
  const bar = document.getElementById('pdpStickyBuy');
  const acciones = document.querySelector('#pdpContent .pdp-actions');
  if(!bar || !acciones || !('IntersectionObserver' in window)) return;
  PDP_STICKY_OBS = new IntersectionObserver(([e]) => {
    const enFicha = document.getElementById('view-product')?.classList.contains('active');
    // Solo cuando los botones quedaron ARRIBA (ya los pasó); no antes de llegar a ellos.
    const mostrar = !!enFicha && !e.isIntersecting && e.boundingClientRect.top < 0;
    bar.classList.toggle('is-visible', mostrar);
    bar.setAttribute('aria-hidden', mostrar ? 'false' : 'true');
    document.body.classList.toggle('pdp-sticky-on', mostrar && innerWidth <= 760);
  });
  PDP_STICKY_OBS.observe(acciones);
}

// Abre la ficha de producto y le da su propia URL compartible
// (#/producto/<id>) sin recargar la página — funciona con el botón
// atrás/adelante del navegador y se puede compartir o abrir directo.
function openProduct(id, opts){
  opts = opts || {};
  CURRENT_PRODUCT_ID = id;
  go('product', opts);
  renderProductInto(id);
  pdpStickyInit();
  const newHash = productHash(id);
  if(!opts.fromHash){
    if(location.hash !== newHash) history.pushState(null, '', newHash);
  } else if(location.hash !== newHash && /^#\/producto\//.test(location.hash) && newHash.startsWith('#/p/')){
    // Link viejo: se cambia por el estable sin crear otra entrada en el historial.
    history.replaceState(null, '', newHash);
  }
}

/* ===================== HOME — PRODUCTOS MÁS VENDIDOS ===================== */
// Límite de tarjetas que se muestran en esta sección del inicio (subido de
// 8 a 10 el 15 sep 2026, a pedido de Andrés, para dar más visibilidad a
// productos marcados DESTACADO=sí).
const HOME_FEATURED_LIMIT = 10;

function renderHomeFeatured(){
  const grid = document.getElementById('homeFeaturedGrid');
  if(!grid) return;

  // Recorre TODAS las categorías del catálogo (incluida "otros", por si
  // algún producto quedó sin categorizar) para no perder ningún producto
  // marcado DESTACADO=sí sin importar en qué categoría esté.
  const todos = Object.keys(CATALOG)
    .flatMap(k => flattenItems(CATALOG[k]).map(item => ({ ...item, catLabel: CATALOG[k].label })));

  // Filtro EXCLUSIVO: solo entra lo marcado DESTACADO=sí en la Hoja. No se
  // usa descuento, PRECIO ANTES, ETIQUETA, categoría ni disponibilidad como
  // sustituto — si no está marcado, no aparece aquí, sin excepción.
  let destacados = todos.filter(({ m }) => m.dest === true);
  // Campaña del mes: si algún producto tiene escrita la campaña activa en la
  // columna CAMPAÑA, esos mandan aquí; si ninguno la tiene, se usan los
  // DESTACADO=sí de siempre (tus "10 principales").
  if(typeof tmProductosCampana === 'function'){
    const deCampana = tmProductosCampana(todos);
    if(deCampana.length) destacados = deCampana;
  }

  if(!destacados.length){ grid.innerHTML = ''; return; }

  // Orden: primero los que tienen ORDEN_DESTACADO (número), de menor a
  // mayor — eso respeta exactamente lo que Andrés escriba en esa columna.
  // Los que la dejan vacía se agregan después, en el mismo orden en que
  // aparecen en la Hoja de Google (idxOriginal). El sort de JS es estable,
  // así que los empates conservan su orden relativo.
  destacados.sort((a, b) => {
    const oa = a.m.ordenDest, ob = b.m.ordenDest;
    if(oa !== null && ob !== null) return oa - ob;
    if(oa !== null) return -1;
    if(ob !== null) return 1;
    return a.m.idxOriginal - b.m.idxOriginal;
  });

  const elegidos = destacados.slice(0, HOME_FEATURED_LIMIT);

  grid.innerHTML = elegidos.map(({ marca, m, catLabel }) => productCardHTML(catLabel, marca, m)).join('');
  initScrollReveal();
}

/* ===================== AVISO DE COOKIES / HABEAS DATA ===================== */
const COOKIE_CONSENT_KEY = 'camand_cookie_consent_v1';

function getCookieConsent(){
  try { return JSON.parse(localStorage.getItem(COOKIE_CONSENT_KEY) || 'null'); }
  catch(e){ return null; }
}

function initCookieBanner(){
  const saved = getCookieConsent();
  const toggle = document.getElementById('cookieAnalyticsToggle');
  if(!saved){
    const banner = document.getElementById('cookieBanner');
    if(banner) banner.classList.add('open');
  } else if(toggle){
    toggle.checked = !!saved.analytics;
  }
}

function applyCookieConsent(analytics){
  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ analytics: !!analytics, ts: Date.now() }));
  } catch(e){}
  if(typeof gtag === 'function'){
    gtag('consent', 'update', { analytics_storage: analytics ? 'granted' : 'denied' });
  }
  const banner = document.getElementById('cookieBanner');
  if(banner) banner.classList.remove('open');
  closeCookieSettings();
}

function setCookieConsent(accepted){
  applyCookieConsent(accepted);
}

function openCookieSettings(){
  const saved = getCookieConsent();
  const toggle = document.getElementById('cookieAnalyticsToggle');
  if(toggle) toggle.checked = saved ? !!saved.analytics : true;
  const overlay = document.getElementById('cookieModalOverlay');
  if(overlay) overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCookieSettings(){
  const overlay = document.getElementById('cookieModalOverlay');
  if(overlay) overlay.classList.remove('open');
  const banner = document.getElementById('cookieBanner');
  if(!banner || !banner.classList.contains('open')) document.body.style.overflow = '';
}

function saveCookieSettings(){
  const toggle = document.getElementById('cookieAnalyticsToggle');
  applyCookieConsent(toggle ? toggle.checked : true);
}

/* ===================== RUTAS POR HASH (#/...) ===================== */
// Permite compartir/recargar un link directo a un producto o a una sección
// (ej. https://.../#/producto/xxx) y que el botón atrás del navegador
// funcione entre vistas.
function routeFromHash(){
  const hash = location.hash || '';
  const productMatch = hash.match(/^#\/producto\/(.+)$/);
  if(productMatch){ openProduct(decodeURIComponent(productMatch[1]), { fromHash: true }); return; }
  // #/p/<slug> lo atiende camandRutaSlug() (js/campanas.js) en su propio 'hashchange'.
  if(/^#\/p\/[a-z0-9-]+$/.test(hash)) return;
  const viewMatch = hash.match(/^#\/(tech|accesorios|cases|personaliza|faq|privacidad|devoluciones|historias)$/);
  if(viewMatch){ go(viewMatch[1], { fromHash: true }); return; }
  // #/skins: link corto para Instagram — abre Personaliza y baja al estudio de skins.
  if(hash === '#/skins'){ go('personaliza', { fromHash: true }); setTimeout(() => { if(typeof pzScrollTo === 'function') pzScrollTo('pzSkinStudio'); }, 700); return; }
  if((hash === '' || hash === '#' || hash === '#/home') && CURRENT_PRODUCT_ID){
    go('home', { fromHash: true });
  }
}
window.addEventListener('hashchange', routeFromHash);
window.addEventListener('popstate', routeFromHash);

const legalDateEl = document.getElementById('legalUpdatedDate');
if(legalDateEl){
  legalDateEl.textContent = new Date().toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' });
}

/* ===================== BANNER PUBLICITARIO ROTATIVO ===================== */

// La columna IMAGEN de la pestaña de banners ahora también admite un VIDEO,
// además de una foto — no hace falta ninguna columna nueva en la Hoja:
// - Un link que termine en .mp4/.webm/.mov/.m4v (por ejemplo, subido a
//   Cloudinary como video, no como imagen) se reproduce como video, en
//   automático, sin sonido y en bucle.
// - Un link de YouTube (youtube.com/watch?v=..., youtu.be/... o ya en
//   formato /embed/...) se incrusta igual, en automático y sin sonido.
// - Cualquier otro link (jpg, png, webp...) sigue funcionando como imagen,
//   exactamente igual que antes.
// Un link de Google Drive NO funciona bien aquí (Drive no deja reproducir
// el video directo desde otra página) — para video, usa Cloudinary (igual
// que las fotos) o sube el video a YouTube como "oculto" y pega ese link.
function isVideoUrl(url){
  return /\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(String(url || ''));
}
function youtubeEmbedUrl(url){
  const s = String(url || '');
  const m = s.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{6,})/i);
  const id = m ? m[1] : null;
  if(!id) return null;
  return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&modestbranding=1&playsinline=1`;
}
// La foto/video ahora llena todo el recuadro del banner (object-fit:cover),
// igual que un carrusel de tienda normal (Artezcom y la enorme mayoría de
// sitios Shopify) — antes se mostraba completa sin recortar y se rellenaban
// los bordes con una copia ampliada/borrosa de la misma foto ("halo"), pero
// esa combinación (transform + overflow:hidden + border-radius + blur)
// falla el recorte de esquinas en Safari de iPhone, que era justo el "se
// sale del borde en móvil" que reportaste. Quitar el halo resuelve eso de
// raíz y de paso simplifica el HTML.
function promoBannerMediaHTML(b, i){
  const altJs = (b.alt || 'Publicidad Camand Mobile').replace(/"/g, '&quot;');
  // Columna VIDEO (opcional): si viene llena, tiene prioridad y se trata
  // siempre como video/YouTube, sin adivinar por la extensión. Si viene
  // vacía, se sigue detectando automáticamente dentro de la columna IMAGEN
  // (foto o video), igual que hasta ahora.
  const mediaUrl = b.vid || b.img;
  const yt = youtubeEmbedUrl(mediaUrl);
  if(yt){
    return `<iframe src="${yt}" title="${altJs}" allow="autoplay; encrypted-media" loading="${i === 0 ? 'eager' : 'lazy'}"></iframe>`;
  }
  if(b.vid || isVideoUrl(mediaUrl)){
    return `<video src="${mediaUrl}" autoplay muted loop playsinline preload="${i === 0 ? 'auto' : 'metadata'}" aria-label="${altJs}"></video>`;
  }
  // Los banners se cargan SIEMPRE de una vez (sin "lazy"): dentro de un carril
  // que se mueve con transform, el modo lazy de Chrome/Safari a veces nunca
  // pedía la imagen hasta recargar la página (banner en blanco).
  const orig = String(mediaUrl).replace(/"/g, '&quot;');
  return `<img class="promo-banner-img" src="${optimizeImageUrl(mediaUrl, 1600)}" data-orig="${orig}" alt="${altJs}" loading="eager" decoding="async"${i === 0 ? ' fetchpriority="high"' : ''}>`;
}

// Muestra cada imagen del banner cuando carga; si falla, reintenta una vez con
// el archivo original (sin capas ni redimensionado) para no dejar el banner vacío.
function promoBannerBindImages(track){
  track.querySelectorAll('img.promo-banner-img').forEach(img => {
    const listo = () => img.classList.add('is-ready');
    if(img.complete && img.naturalWidth > 0){ listo(); return; }
    img.addEventListener('load', listo, { once: true });
    img.addEventListener('error', () => {
      if(img.dataset.retry) { listo(); return; }
      img.dataset.retry = '1';
      const original = (img.dataset.orig || '').replace(/\/upload\/.*?(\/v\d+\/)/, '/upload$1');
      img.src = original !== img.src ? original : img.src + (img.src.includes('?') ? '&' : '?') + 'r=1';
    });
    // Red de seguridad: nunca dejar la imagen invisible más de 3 s.
    setTimeout(listo, 3000);
  });
}

// Arma el HTML de una diapositiva completa (media + texto + CTA si aplica).
// Dos modos, según si la fila de la Hoja trae KICKER/TITULO/SUBTITULO/CTA:
//
// 1) SIN esos campos (como todos tus banners de hoy): se comporta EXACTO
//    igual que siempre — toda la tarjeta es un enlace a LINK.
// 2) CON al menos uno de esos campos: la imagen deja de ser el enlace: se
//    muestra el texto encima y el ÚNICO elemento clicable es un botón CTA
//    explícito, independiente de la imagen, que usa el mismo LINK — así
//    cumple con no depender solo de la foto para poder actuar sobre el
//    banner.
function promoBannerSlideHTML(b, i){
  const altJs = (b.alt || 'Publicidad Camand Mobile').replace(/"/g, '&quot;');
  const media = promoBannerMediaHTML(b, i);
  const tieneTexto = !!(b.kicker || b.titulo || b.subtitulo || b.cta);

  if(!tieneTexto){
    return `
    <a class="promo-banner-slide" href="javascript:void(0)" onclick="promoBannerActivate(${i})" aria-label="${altJs}" role="group" aria-roledescription="diapositiva">
      ${media}
    </a>`;
  }

  const kickerJs = (b.kicker || '').replace(/</g, '&lt;');
  const tituloJs = (b.titulo || '').replace(/</g, '&lt;');
  const subtituloJs = (b.subtitulo || '').replace(/</g, '&lt;');
  const ctaJs = (b.cta || 'Ver más').replace(/</g, '&lt;');
  const tieneLink = !!(b.link || '').trim();

  return `
  <div class="promo-banner-slide has-content" role="group" aria-roledescription="diapositiva" aria-label="${altJs}">
    ${media}
    <div class="promo-banner-copy">
      ${kickerJs ? `<span class="promo-banner-kicker">${kickerJs}</span>` : ''}
      ${tituloJs ? `<h3 class="promo-banner-title">${tituloJs}</h3>` : ''}
      ${subtituloJs ? `<p class="promo-banner-subtitle">${subtituloJs}</p>` : ''}
      ${tieneLink ? `<button type="button" class="promo-banner-cta" onclick="promoBannerActivate(${i})">${ctaJs}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" class="promo-banner-cta-arrow" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>` : ''}
    </div>
  </div>`;
}

/* ===================== CARRUSEL DE BANNERS — LOOP CONTINUO ===================== */
// Técnica estándar de "carrusel infinito": el carril lleva un CLON del
// último banner al principio y un CLON del primero al final. Al llegar al
// último y seguir hacia adelante, el carril desliza hacia ese clon (idéntico
// al primero) y, apenas termina la animación, salta SIN transición a la
// diapositiva real correspondiente. El ojo nunca nota el salto porque la
// imagen es exactamente la misma — el efecto que se siente es de loop
// continuo, nunca de "regresar" al principio.
// PROMO_TRACK_INDEX = posición dentro del carril (contando los clones).
// Con loop activo, la diapositiva real 0 vive en la posición 1 del carril.
let PROMO_TRACK_INDEX = 0;

function renderPromoBanner(){
  const strip = document.getElementById('promoBannerStrip');
  const viewport = document.getElementById('promoBannerViewport');
  const track = document.getElementById('promoBannerTrack');
  const dotsEl = document.getElementById('promoBannerDots');
  if(!strip || !viewport || !track || !dotsEl) return;

  if(PROMO_BANNER_TIMER){ clearInterval(PROMO_BANNER_TIMER); PROMO_BANNER_TIMER = null; }

  if(!PROMO_BANNERS.length){
    strip.style.display = 'none';
    track.innerHTML = '';
    dotsEl.innerHTML = '';
    return;
  }

  strip.style.display = '';
  const n = PROMO_BANNERS.length;
  const loop = n > 1;

  // Con 2+ banners: [clon del último, ...reales, clon del primero], para
  // poder hacer el salto invisible al llegar a cualquiera de las puntas.
  // Con exactamente 1 banner no hay nada que recorrer: sin clones ni loop.
  const slidesHTML = loop
    ? [promoBannerSlideHTML(PROMO_BANNERS[n - 1], n - 1)]
        .concat(PROMO_BANNERS.map((b, i) => promoBannerSlideHTML(b, i)))
        .concat([promoBannerSlideHTML(PROMO_BANNERS[0], 0)])
    : [promoBannerSlideHTML(PROMO_BANNERS[0], 0)];
  track.innerHTML = slidesHTML.join('');
  promoBannerBindImages(track);

  strip.querySelectorAll('.promo-banner-nav').forEach(btn => { btn.style.display = loop ? '' : 'none'; });

  dotsEl.innerHTML = loop ? PROMO_BANNERS.map((_, i) =>
    `<button type="button" class="promo-banner-dot${i === 0 ? ' is-active' : ''}" onclick="promoBannerGoTo(${i})" aria-label="Ir al banner ${i + 1}"></button>`
  ).join('') : '';

  PROMO_TRACK_INDEX = loop ? 1 : 0;
  promoBannerSetPosition(false);
  promoBannerInitDrag(viewport);

  strip.onmouseenter = () => { if(PROMO_BANNER_TIMER){ clearInterval(PROMO_BANNER_TIMER); PROMO_BANNER_TIMER = null; } };
  strip.onmouseleave = () => promoBannerAutoplayStart();

  // renderPromoBanner() también se vuelve a llamar cuando termina de
  // confirmarse en segundo plano la carga de banners desde la Hoja (ver
  // cargarBannersDesdeSheet más abajo) — si para entonces el visitante ya
  // navegó fuera de Inicio, no debe arrancar el autoplay igual (mismo
  // arreglo que promoBannerSyncWithView, ver explicación junto a esa
  // función, más abajo).
  const homeEl = document.getElementById('view-home');
  promoBannerSyncWithView(!homeEl || homeEl.classList.contains('active'));
}

// Mueve el carril a PROMO_TRACK_INDEX. conTransicion=false se usa tanto
// para el posicionamiento inicial como para el "salto" invisible entre un
// clon y su diapositiva real — en esos casos NO debe animarse.
function promoBannerSetPosition(conTransicion){
  const track = document.getElementById('promoBannerTrack');
  if(!track) return;
  track.classList.toggle('no-transition', !conTransicion);
  track.style.transform = `translateX(-${PROMO_TRACK_INDEX * 100}%)`;
  if(!conTransicion){
    // Fuerza al navegador a aplicar el cambio "sin transición" de inmediato
    // — si no, el siguiente movimiento a veces hereda el salto animado.
    void track.offsetWidth;
  }
  promoBannerUpdateDots();
}

function promoBannerRealIndex(){
  const n = PROMO_BANNERS.length;
  if(!n) return 0;
  return ((PROMO_TRACK_INDEX - 1) % n + n) % n;
}

function promoBannerUpdateDots(){
  const real = promoBannerRealIndex();
  document.querySelectorAll('.promo-banner-dot').forEach((d, i) => d.classList.toggle('is-active', i === real));
}

// Cuando termina la animación del carril, si quedamos parados sobre uno de
// los dos clones de las puntas, saltamos sin animar a la diapositiva real
// equivalente (se ve idéntica, así que el salto es imperceptible). Esto es
// lo que hace que ir "siguiente" desde el último banner se sienta como
// continuar hacia el primero, en vez de devolverse de golpe.
document.addEventListener('transitionend', (e) => {
  if(e.target.id !== 'promoBannerTrack' || e.propertyName !== 'transform') return;
  const n = PROMO_BANNERS.length;
  if(n < 2) return;
  if(PROMO_TRACK_INDEX === n + 1){ PROMO_TRACK_INDEX = 1; promoBannerSetPosition(false); }
  else if(PROMO_TRACK_INDEX === 0){ PROMO_TRACK_INDEX = n; promoBannerSetPosition(false); }
});

function promoBannerGoTrack(newTrackIndex){
  PROMO_TRACK_INDEX = newTrackIndex;
  promoBannerSetPosition(true);
  promoBannerAutoplayStart();
}
function promoBannerNext(){ promoBannerGoTrack(PROMO_TRACK_INDEX + 1); }
function promoBannerPrev(){ promoBannerGoTrack(PROMO_TRACK_INDEX - 1); }
// Usada por los puntitos: recibe el índice REAL (0 a n-1), no la posición
// dentro del carril con clones.
function promoBannerGoTo(realIndex){
  if(!PROMO_BANNERS.length) return;
  promoBannerGoTrack(realIndex + 1);
}

// Navegación por teclado del carrusel: funciona con el foco en cualquier
// parte de adentro (la región, una diapositiva enlazada, o el botón CTA),
// porque el evento sube por burbujeo hasta el contenedor que tiene este
// onkeydown. Flechas izquierda/derecha = anterior/siguiente, Inicio/Fin =
// primera/última diapositiva.
function promoBannerKeyNav(e){
  if(PROMO_BANNERS.length < 2) return;
  if(e.key === 'ArrowLeft'){ e.preventDefault(); promoBannerPrev(); }
  else if(e.key === 'ArrowRight'){ e.preventDefault(); promoBannerNext(); }
  else if(e.key === 'Home'){ e.preventDefault(); promoBannerGoTo(0); }
  else if(e.key === 'End'){ e.preventDefault(); promoBannerGoTo(PROMO_BANNERS.length - 1); }
}

let PROMO_STRIP_VISIBLE = true;

// Pausa las animaciones infinitas (cinta, fondos de Personaliza, demo 3D…)
// mientras no están en pantalla: menos trabajo para el celular, más fluidez.
(function pausarAnimacionesFueraDePantalla(){
  if(!('IntersectionObserver' in window)) return;
  const obs = new IntersectionObserver(entries => entries.forEach(e => {
    e.target.classList.toggle('anim-pausada', !e.isIntersecting);
    if(e.target.id === 'promoBannerStrip') PROMO_STRIP_VISIBLE = e.isIntersecting;
  }), { rootMargin: '120px 0px' });
  const vigilar = () => document.querySelectorAll('.cinta-track, .pz-fx, .l3d-demo, .tm-deco, #promoBannerStrip')
    .forEach(el => { if(!el.dataset.animObs){ el.dataset.animObs = '1'; obs.observe(el); } });
  vigilar();
  window.addEventListener('load', vigilar);
  setTimeout(vigilar, 4000);
})();

function promoBannerAutoplayStart(){
  if(PROMO_BANNER_TIMER){ clearInterval(PROMO_BANNER_TIMER); PROMO_BANNER_TIMER = null; }
  if(PROMO_BANNERS.length < 2) return;
  PROMO_BANNER_TIMER = setInterval(() => {
    // No avanza si la pestaña está en segundo plano o el banner no se ve.
    if(document.hidden || !PROMO_STRIP_VISIBLE) return;
    promoBannerNext();
  }, 3800);
}

/* ---------- BUG: banners sin imágenes tras Inicio → categoría → Inicio,
   sin recargar (raíz encontrada, no es un problema de caché ni de carga
   de imágenes) ----------
   El intervalo de autoplay (arriba) NO se detenía al salir de Inicio —
   #view-home simplemente pasa a display:none (go() solo mueve la clase
   .active, nunca destruye ni vuelve a pintar el DOM), pero el temporizador
   seguía llamando a promoBannerNext() cada 3.8s de todas formas mientras el
   visitante navegaba por otra categoría.
   Cada "siguiente" ejecutado así SÍ avanzaba PROMO_TRACK_INDEX y aplicaba el
   nuevo transform, pero con el carril en display:none ningún navegador
   dispara "transitionend" — y es justo ese evento (ver el listener global
   más arriba) el que corrige el salto invisible al pasar por uno de los dos
   clones de las puntas del carril infinito. Sin esa corrección, unos
   cuantos ciclos de autoplay "fantasma" bastan para dejar PROMO_TRACK_INDEX
   bastante fuera del rango real de diapositivas. Al volver a Inicio, el
   carril seguía existiendo y con sus mismas imágenes de siempre — solo que
   trasladado a un transform tan grande que quedaba completamente fuera del
   área visible: de ahí la sensación de "se perdieron las imágenes". F5
   "arreglaba" esto por accidente porque recarga la página entera y
   renderPromoBanner() vuelve a arrancar PROMO_TRACK_INDEX en 1.
   Arreglo de raíz (sin recargar nada): el autoplay se pausa apenas Inicio
   deja de estar visible y solo se reanuda al volver — así el índice nunca
   tiene ocasión de desincronizarse mientras nadie lo ve. Como red de
   seguridad adicional (por si algún caso raro lo desincroniza igual, p.ej.
   soltar un swipe justo al navegar), también se valida el rango al volver
   y se corrige sin animación si hiciera falta. */
function promoBannerSyncWithView(isHomeVisible){
  if(!isHomeVisible){
    if(PROMO_BANNER_TIMER){ clearInterval(PROMO_BANNER_TIMER); PROMO_BANNER_TIMER = null; }
    return;
  }
  const n = PROMO_BANNERS.length;
  const track = document.getElementById('promoBannerTrack');
  if(track && n > 1 && (PROMO_TRACK_INDEX < 1 || PROMO_TRACK_INDEX > n)){
    PROMO_TRACK_INDEX = 1;
    promoBannerSetPosition(false);
  }
  promoBannerAutoplayStart();
}

/* ---------- Deslizar con el dedo (swipe) — antes no existía en celular,
   solo servían las flechas (que además se ocultan en pantallas chicas).
   Ahora el carril responde al dedo en tiempo real mientras se arrastra, y
   al soltar decide si avanza, retrocede o vuelve a acomodarse. ---------- */
let PROMO_DRAG = null;
let PROMO_SUPPRESS_CLICK = false;

function promoBannerInitDrag(viewport){
  // Los listeners se ponen una sola vez (el elemento persiste entre
  // recargas del catálogo/banners; solo cambia su contenido interno).
  if(viewport._dragBound) return;
  viewport._dragBound = true;

  const onStart = (clientX) => {
    if(PROMO_BANNERS.length < 2) return;
    PROMO_SUPPRESS_CLICK = false;
    if(PROMO_BANNER_TIMER){ clearInterval(PROMO_BANNER_TIMER); PROMO_BANNER_TIMER = null; }
    PROMO_DRAG = { startX: clientX, deltaX: 0, width: viewport.clientWidth || 1 };
    const track = document.getElementById('promoBannerTrack');
    if(track) track.classList.add('no-transition');
  };
  const onMove = (clientX) => {
    if(!PROMO_DRAG) return;
    PROMO_DRAG.deltaX = clientX - PROMO_DRAG.startX;
    if(Math.abs(PROMO_DRAG.deltaX) > 10) PROMO_SUPPRESS_CLICK = true;
    const track = document.getElementById('promoBannerTrack');
    if(track){
      const pct = (PROMO_DRAG.deltaX / PROMO_DRAG.width) * 100;
      track.style.transform = `translateX(calc(-${PROMO_TRACK_INDEX * 100}% + ${pct}%))`;
    }
  };
  const onEnd = () => {
    if(!PROMO_DRAG) return;
    const threshold = PROMO_DRAG.width * 0.15;
    const delta = PROMO_DRAG.deltaX;
    PROMO_DRAG = null;
    if(delta > threshold) promoBannerPrev();
    else if(delta < -threshold) promoBannerNext();
    else promoBannerSetPosition(true);
  };

  viewport.addEventListener('touchstart', (e) => onStart(e.touches[0].clientX), { passive: true });
  viewport.addEventListener('touchmove', (e) => onMove(e.touches[0].clientX), { passive: true });
  viewport.addEventListener('touchend', onEnd);
  viewport.addEventListener('touchcancel', onEnd);
}

// La columna LINK de la pestaña de banners admite dos formas:
// - Una palabra clave de sección interna del sitio (home, tech, accesorios,
//   cases, faq, privacidad) para navegar dentro del sitio sin salir de él.
// - Cualquier URL completa (https://wa.me/..., https://instagram.com/...,
//   una promoción externa, etc.), que se abre en una pestaña nueva.
// Si LINK queda vacío, el banner es solo decorativo — no hace nada al tocarlo.
function promoBannerActivate(i){
  // Si la persona acaba de deslizar el dedo (arrastre real, no un simple
  // toque), el "click" que dispara el navegador justo después de soltar no
  // debe abrir el link — si no, cada swipe también activaría el banner.
  if(PROMO_SUPPRESS_CLICK){ PROMO_SUPPRESS_CLICK = false; return; }
  const b = PROMO_BANNERS[i];
  if(!b) return;
  const link = (b.link || '').trim();
  if(!link) return;
  if(HASH_VIEWS.includes(link)){ go(link); return; }
  // El editor viejo (estuche-editor.html) ya no existe: todo se diseña en Personaliza.
  if(/estuche-editor\.html/i.test(link)){ go('personaliza'); return; }
  // Links a la misma tienda (camandmobile.com/#/..., o solo "#/...") se abren
  // aquí mismo, sin pestaña nueva.
  const mismo = link.match(/^(?:https?:\/\/(?:www\.)?camandmobile\.com\/?)?(#\/.+)$/i);
  if(mismo){ location.hash = mismo[1]; return; }
  window.open(link, '_blank', 'noopener');
}

/* ============================================================
   BANNER PUBLICITARIO — DESDE GOOGLE SHEETS
   Mismo mecanismo que el catálogo de productos: crea una pestaña nueva en
   tu Hoja de Google (ej. "BANNERS PAGINA") y publícala como CSV (Archivo →
   Compartir → Publicar en la web → esa pestaña → formato CSV). Columnas:

     IMAGEN     (obligatoria) URL directa de la foto o el video del banner.
                Admite tanto foto como video/YouTube (ver más abajo) — si
                usas la columna VIDEO de abajo, esta puede quedar como
                imagen de referencia o dejarse igual, no importa.
     VIDEO      (opcional) alternativa a poner un video dentro de IMAGEN:
                pega aquí directamente el link del video (Cloudinary o
                YouTube) y se usa ese, sin que el sitio tenga que adivinar
                por la extensión del archivo.
     KICKER     (opcional) texto pequeño arriba del título, ej. "NUEVO".
     TITULO     (opcional) título grande del banner.
     SUBTITULO  (opcional) texto secundario, una línea corta.
     CTA        (opcional) texto del botón, ej. "Comprar ahora". Si dejas
                TITULO/KICKER/SUBTITULO llenos pero CTA vacío, el botón
                aparece igual con el texto "Ver más".
     LINK       (opcional) a dónde lleva al hacer clic — puede ser una
                palabra clave de sección interna (home, tech, accesorios,
                cases, faq, privacidad) o una URL completa (WhatsApp,
                Sistecrédito, producto, promoción externa, etc.).
     ALT        (opcional) nombre corto del banner, solo accesibilidad.
     ACTIVO     (opcional) si / no — vacío se toma como "si".
     ORDEN      (opcional) número para el orden de aparición.

   IMPORTANTE: si dejas KICKER, TITULO, SUBTITULO y CTA vacíos en una fila,
   ese banner se comporta EXACTO igual que siempre (toda la imagen es el
   enlace) — no necesitas cambiar nada en los banners que ya tienes.
   Solo cuando llenes alguno de esos 4 campos, el banner pasa a mostrar
   texto encima con un botón CTA propio (ver promoBannerSlideHTML).

   Mientras BANNERS_CSV_URL quede sin una URL real, el banner simplemente
   no se muestra — el sitio no se rompe por esto.
   ============================================================ */
const BANNERS_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTVTMXRy1SKrWUR512KBjjWJ0__CcP5g19K2QK7YfVSr5FBeH8PZHMxBAeCKdxQuawOgi-IjsfF4Pvp/pub?gid=639175825&single=true&output=csv";

const BANNERS_CACHE_KEY = 'camand_banners_cache_v1';

// (19 oct 2026) El banner de estuches decía "LÍNEA BÁSICA". La línea se llama
// Clásica, así que ese banner se muestra con "LÍNEA CLÁSICA" escrito encima
// (lo hace Cloudinary al vuelo; la foto original no se toca). Si subes un
// banner nuevo con otro nombre de archivo, esto deja de aplicar solo.
const BANNER_ESTUCHES_CLASICA = 'https://res.cloudinary.com/c5sxh1yw/image/upload/'
  + 'l_banner_personalizados/c_crop,w_70,h_80,x_1700,y_168/c_scale,w_700,h_80/fl_layer_apply,g_north_west,x_1760,y_168/'
  + 'l_banner_personalizados/c_crop,w_70,h_80,x_1700,y_515/c_scale,w_700,h_80/fl_layer_apply,g_north_west,x_1760,y_515/'
  + 'co_rgb:111111,l_text:Montserrat_78_bold_letter_spacing_9:L%C3%8DNEA%20CL%C3%81SICA/fl_layer_apply,g_north_west,x_1782,y_166/'
  + 'co_rgb:111111,l_text:Montserrat_78_bold_letter_spacing_9:L%C3%8DNEA%20PRO/fl_layer_apply,g_north_west,x_1782,y_513/'
  + 'v1789401648/banner_personalizados.jpg';
function bannerConLineaClasica(url){
  return /res\.cloudinary\.com\/c5sxh1yw\/image\/upload\/v1789401648\/banner_personalizados\.jpg$/i.test(url) ? BANNER_ESTUCHES_CLASICA : url;
}

async function cargarBannersDesdeSheet(){
  if(!/^https?:\/\//i.test(BANNERS_CSV_URL)) return;
  // Igual que con el catálogo: si esta pestaña ya cargó los banners antes
  // en esta misma visita, se muestran de inmediato mientras se confirma
  // en segundo plano si hay cambios.
  try{
    // Guardado entre visitas (localStorage): el banner aparece al instante
    // desde la segunda visita, mientras se confirma con la Hoja.
    const cache = cacheLeer(BANNERS_CACHE_KEY);
    if(cache && Array.isArray(cache.banners) && cache.banners.length){
      PROMO_BANNERS = cache.banners;
      renderPromoBanner();
      initScrollReveal();
    }
  }catch(e){}
  try{
    const res = await fetch(BANNERS_CSV_URL, { cache: "no-store" });
    if(!res.ok) throw new Error("HTTP " + res.status);
    const texto = await res.text();
    const filasCrudas = window.Papa.parse(texto, { header: true, skipEmptyLines: true }).data;

    const filas = filasCrudas.map(filaCruda => {
      const norm = {};
      Object.keys(filaCruda).forEach(k => {
        const clave = k.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "");
        norm[clave] = filaCruda[k];
      });
      return norm;
    });

    const nuevos = filas
      .filter(f => String(f.activo || "si").trim().toLowerCase() !== "no")
      .filter(f => (f.imagen || "").trim() || (f.video || "").trim())
      .map(f => ({
        img: bannerConLineaClasica((f.imagen || "").trim()),
        vid: (f.video || "").trim(),
        link: (f.link || "").trim(),
        alt: (f.alt || f.nombre || "").trim(),
        kicker: (f.kicker || "").trim(),
        titulo: (f.titulo || "").trim(),
        subtitulo: (f.subtitulo || "").trim(),
        cta: (f.cta || "").trim(),
        orden: Number(f.orden) || 0
      }))
      .sort((a, b) => a.orden - b.orden);

    // Si la Hoja trae exactamente lo mismo que ya se está mostrando, no se
    // vuelve a dibujar (antes se redibujaba y las fotos se recargaban).
    const igual = JSON.stringify(nuevos) === JSON.stringify(PROMO_BANNERS);
    PROMO_BANNERS = nuevos;
    if(!igual){ renderPromoBanner(); initScrollReveal(); }
    try{ localStorage.setItem(BANNERS_CACHE_KEY, JSON.stringify({ banners: nuevos, ts: Date.now() })); }catch(e){}
    console.log("[Camand] Banners publicitarios cargados desde Google Sheets:", nuevos.length);
  }catch(err){
    console.warn("[Camand] No se pudo leer los banners publicitarios desde Google Sheets, el banner queda oculto:", err.message);
  }
}

/* ============================================================
   FOTOS DE LOS 6 BOTONES PRINCIPALES (Equipos, Tablets, Relojes,
   Audífonos, Computadores, Tech & Oficina) — DESDE GOOGLE SHEETS
   Crea una pestaña nueva en tu Hoja (ej. "CATEGORIAS PAGINA") con dos
   columnas: CATEGORIA e IMAGEN. En CATEGORIA escribe exactamente una de
   estas palabras (tal cual, sin tildes ni mayúsculas necesarias):
     equipos, tablets, relojes, audifonos, computadores, techoficina
   y en IMAGEN pega el link de la foto (igual que en el catálogo de
   productos: Cloudinary, ImgBB, etc.). Publica esa pestaña como CSV
   (Archivo → Compartir → Publicar en la web → esa pestaña → formato CSV)
   y pega aquí ese link, reemplazando el texto de abajo.
   Mientras esto quede como está (sin una URL real), cada botón sigue
   mostrando su ícono de siempre — el sitio no se rompe por esto. Si solo
   agregas la foto de una categoría, las demás simplemente conservan su
   ícono normal.
   ============================================================ */
const CATEGORIAS_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTVTMXRy1SKrWUR512KBjjWJ0__CcP5g19K2QK7YfVSr5FBeH8PZHMxBAeCKdxQuawOgi-IjsfF4Pvp/pub?gid=1772621644&single=true&output=csv";

const CATEGORIAS_CACHE_KEY = 'camand_categorias_cache_v1';
let CAT_HOME_PHOTOS = {};

// Reemplaza el ícono de un botón principal por su foto, cuando hay una
// configurada — si no hay foto para esa categoría, el ícono de siempre
// se queda tal cual (nunca se rompe el diseño por una fila vacía).
function applyCatHomePhotos(){
  // Fotos de las tarjetas de Personaliza (skins, estuches, fundas,
  // accesoriosapple, hidrogel, vidrios) salen de esta misma pestaña.
  if(typeof pzRenderCards === 'function') pzRenderCards();
  Object.entries(CAT_HOME_PHOTOS).forEach(([key, url]) => {
    if(!url) return;
    const el = document.getElementById('cchm-' + key);
    if(!el) return;
    el.innerHTML = `<img src="${optimizeImageUrl(url, 200)}" alt="">`;
  });
}

async function cargarCategoriasDesdeSheet(){
  if(!/^https?:\/\//i.test(CATEGORIAS_CSV_URL)) return;
  try{
    const cache = cacheLeer(CATEGORIAS_CACHE_KEY);
    if(cache && cache.fotos && Object.keys(cache.fotos).length){
      CAT_HOME_PHOTOS = cache.fotos;
      applyCatHomePhotos();
    }
  }catch(e){}
  try{
    const res = await fetch(CATEGORIAS_CSV_URL, { cache: "no-store" });
    if(!res.ok) throw new Error("HTTP " + res.status);
    const texto = await res.text();
    const filasCrudas = window.Papa.parse(texto, { header: true, skipEmptyLines: true }).data;

    const filas = filasCrudas.map(filaCruda => {
      const norm = {};
      Object.keys(filaCruda).forEach(k => {
        const clave = k.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "");
        norm[clave] = filaCruda[k];
      });
      return norm;
    });

    const fotos = {};
    filas.forEach(f => {
      const key = String(f.categoria || "").trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const img = String(f.imagen || "").trim();
      if(key && img) fotos[key] = img;
    });

    CAT_HOME_PHOTOS = fotos;
    applyCatHomePhotos();
    try{ cacheGuardar(CATEGORIAS_CACHE_KEY, { fotos, ts: Date.now() }); }catch(e){}
    console.log("[Camand] Fotos de categorías cargadas desde Google Sheets:", Object.keys(fotos).length);
  }catch(err){
    console.warn("[Camand] No se pudo leer las fotos de categorías desde Google Sheets, se muestran los íconos de siempre:", err.message);
  }
}

/* ============================================================
   FOTO DE EJEMPLO POR LÍNEA DE ESTUCHES (Clásica / Pro / 3D) — DESDE
   GOOGLE SHEETS
   Crea una pestaña nueva en tu Hoja (ej. "FOTOS ESTUCHES") con dos
   columnas: LINEA e IMAGEN. En LINEA escribe "Clasica" (o "Basica"),
   "Pro" o "3D" (sin tilde, mayúsculas no importan). En IMAGEN puedes
   pegar una foto o un VIDEO (.mp4 / .webm, o un link de video de
   Cloudinary): el video se reproduce solo, en bucle y sin sonido —
   ideal para mostrar el efecto de la Línea 3D y en IMAGEN pega el link
   directo de la foto (Cloudinary recomendado, igual que el resto del
   catálogo). Publica esa pestaña como CSV (Archivo → Compartir →
   Publicar en la web → esa pestaña → formato CSV) y pega el link aquí
   abajo en LINEA_FOTOS_CSV_URL.

   Mientras esa URL quede como el texto de ejemplo (o si falla la
   lectura), se muestran las 2 fotos de ejemplo guardadas en el código
   (LINEA_FOTOS, más abajo) — el sitio nunca se rompe por esto.
   ============================================================ */
const LINEA_FOTOS_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTVTMXRy1SKrWUR512KBjjWJ0__CcP5g19K2QK7YfVSr5FBeH8PZHMxBAeCKdxQuawOgi-IjsfF4Pvp/pub?gid=208678463&single=true&output=csv";

const LINEA_FOTOS_CACHE_KEY = 'camand_linea_fotos_cache_v1';

let LINEA_FOTOS = {
  basica: "img/estuches-ejemplo/basica.png",
  pro: "img/estuches-ejemplo/pro.png",
  "3d": ""   // vacío = se muestra la animación de ejemplo hasta que pongas tu foto o video
};

const LINEA_NOMBRES = { basica: 'Clásica', pro: 'Pro', '3d': '3D' };
function esVideoUrl(url){
  return /\.(mp4|webm|mov)(\?|#|$)/i.test(url) || /\/video\/upload\//i.test(url);
}

function applyLineaFotos(){
  Object.entries(LINEA_FOTOS).forEach(([key, url]) => {
    if(!url) return;
    const el = document.getElementById('lineFoto_' + key);
    if(!el) return;
    const nombreLinea = LINEA_NOMBRES[key] || key;
    if(esVideoUrl(url)){
      el.innerHTML = `<video src="${url}" autoplay muted loop playsinline preload="metadata" aria-label="Video de ejemplo del estuche Línea ${nombreLinea}"></video>`;
      const v = el.querySelector('video');
      if(v){ v.muted = true; const pr = v.play(); if(pr && pr.catch) pr.catch(()=>{}); }
    } else {
      el.innerHTML = `<img src="${optimizeImageUrl(url, 700)}" alt="Ejemplo de estuche Línea ${nombreLinea}" loading="lazy" onerror="this.closest('.line-photo').style.display='none'">`;
    }
  });
}

async function cargarFotosLineasDesdeSheet(){
  if(!/^https?:\/\//i.test(LINEA_FOTOS_CSV_URL)) return;
  try{
    const cache = cacheLeer(LINEA_FOTOS_CACHE_KEY);
    if(cache && cache.fotos && Object.keys(cache.fotos).length){
      LINEA_FOTOS = Object.assign({}, LINEA_FOTOS, cache.fotos);
      applyLineaFotos();
    }
  }catch(e){}
  try{
    const res = await fetch(LINEA_FOTOS_CSV_URL, { cache: "no-store" });
    if(!res.ok) throw new Error("HTTP " + res.status);
    const texto = await res.text();
    const filasCrudas = window.Papa.parse(texto, { header: true, skipEmptyLines: true }).data;

    const filas = filasCrudas.map(filaCruda => {
      const norm = {};
      Object.keys(filaCruda).forEach(k => {
        const clave = k.trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, "");
        norm[clave] = filaCruda[k];
      });
      return norm;
    });

    const fotos = {};
    filas.forEach(f => {
      let key = String(f.linea || "").trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, "");
      if(key === 'clasica') key = 'basica';
      const img = String(f.imagen || "").trim();
      if(key && img) fotos[key] = img;
    });

    LINEA_FOTOS = Object.assign({}, LINEA_FOTOS, fotos);
    applyLineaFotos();
    try{ cacheGuardar(LINEA_FOTOS_CACHE_KEY, { fotos, ts: Date.now() }); }catch(e){}
    console.log("[Camand] Fotos de línea de estuches cargadas desde Google Sheets:", Object.keys(fotos).length);
  }catch(err){
    console.warn("[Camand] No se pudo leer las fotos de línea desde Google Sheets, se muestran las fotos de ejemplo guardadas en el código:", err.message);
  }
}

/* ============================================================
   CATÁLOGO DESDE GOOGLE SHEETS
   Pega aquí la URL de "Publicar en la Web" (formato CSV) de tu
   pestaña "CATALOGO PAGINA". Si la fila tiene disponible=no, se
   oculta. Si algo falla (sin internet, hoja mal formada, etc.)
   el sitio sigue mostrando los datos guardados abajo en el código,
   así que nunca se rompe por esto.
   ============================================================ */
const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTVTMXRy1SKrWUR512KBjjWJ0__CcP5g19K2QK7YfVSr5FBeH8PZHMxBAeCKdxQuawOgi-IjsfF4Pvp/pub?gid=1802395348&single=true&output=csv";

// Guarda la última copia de la Hoja leída con éxito en esta pestaña
// (sessionStorage) para pintar el catálogo al instante la próxima vez que
// se cargue el sitio en la misma visita, mientras se confirma en segundo
// plano si hubo cambios — reduce la espera de red en navegaciones repetidas.
const SHEET_CACHE_KEY = 'camand_catalogo_cache_v1';

// Aplica un arreglo de filas ya normalizadas (vengan de la red o de la
// caché de esta pestaña) al catálogo en memoria y vuelve a pintar el sitio.
function aplicarFilasCatalogo(filas, origen){
    const parsearPrecio = valor => {
      let t = String(valor || "").trim();
      if(!t) return 0;
      // Se acepta cualquier formato de precio, sea cual sea la configuración
      // regional de la Hoja de Google (Colombia usa coma decimal y punto de
      // miles: "$ 40.000,00" — pero si la Hoja está en formato Estados
      // Unidos, exporta al revés: "40,000.00", con coma de miles y punto
      // decimal). Antes solo se reconocía el formato colombiano, así que un
      // precio en formato "40,000.00" se cortaba en la primera coma y
      // quedaba en "40" en vez de 40000 — o, peor, un precio simple como
      // "40,000" (coma de miles sin decimales) también se cortaba mal.
      // Ahora se detecta cuál de los dos símbolos (, o .) es el separador
      // decimal según cuál aparece más a la derecha y cuántos dígitos le
      // siguen, y el otro símbolo se trata como separador de miles.
      t = t.replace(/[^\d.,]/g, "");
      if(!t) return 0;
      const posComa = t.lastIndexOf(",");
      const posPunto = t.lastIndexOf(".");
      let separadorDecimal = null;
      if(posComa > -1 && posPunto > -1){
        separadorDecimal = posComa > posPunto ? "," : ".";
      } else if(posComa > -1 || posPunto > -1){
        const sep = posComa > -1 ? "," : ".";
        const pos = posComa > -1 ? posComa : posPunto;
        const repetido = t.indexOf(sep) !== t.lastIndexOf(sep);
        const digitosDespues = t.length - pos - 1;
        // Un solo símbolo con 1 o 2 dígitos después ("40000,5" o "40000.99")
        // es decimal; si se repite o le siguen 3 dígitos ("40.000" o
        // "40,000") es separador de miles.
        if(!repetido && digitosDespues > 0 && digitosDespues <= 2) separadorDecimal = sep;
      }
      const entero = separadorDecimal ? t.slice(0, t.lastIndexOf(separadorDecimal)) : t;
      return Number(entero.replace(/[^\d]/g, "")) || 0;
    };

    const nuevoIphone = [], nuevoTablets = [], nuevoComputadores = [], nuevoImpresoras = [];
    const androidPorMarca = new Map();
    const accesoriosPorMarca = new Map();
    // Fila cuya "categoria" no calzó con ninguna palabra clave conocida
    // (vacía, mal escrita, o una categoría nueva que el sitio aún no
    // reconoce) — en vez de perderla en silencio, se guarda aquí.
    const otrosPorMarca = new Map();
    // Filas con nombre pero sin precio válido (columna vacía, texto que no
    // se pudo interpretar como número, etc.) — antes se descartaban en
    // silencio; ahora quedan aquí para avisar por consola cuáles hay que
    // revisar en la Hoja.
    const sinPrecioValido = [];
    // Diagnóstico de DESTACADO/ORDEN_DESTACADO por fila — ver camandDebugDestacados().
    const debugRows = [];
    // Posición original de cada fila en la Hoja (0, 1, 2...) — se usa como
    // orden de respaldo en "Productos más vendidos" cuando ORDEN_DESTACADO
    // viene vacío, sin importar en qué categoría termine el producto.
    let idxOriginal = 0;

    filas.forEach(fila => {
      const disponibleRaw = fila.disponible !== undefined && fila.disponible !== null ? String(fila.disponible) : "";
      const disponible = disponibleRaw.trim().toLowerCase();
      const nombreBase = (fila.nombre || "").trim();

      // DESTACADO="si" hace que el producto aparezca en "Productos más
      // vendidos" del inicio — EXCLUSIVAMENTE por esta columna, nunca por
      // descuento, etiqueta, categoría ni disponibilidad. Se acepta con o
      // sin tilde, en mayúscula/minúscula, y con espacios antes/después
      // ("SI", "Si", "si", "Sí", " SI " cuentan todas igual).
      const destacadoRaw = fila.destacado !== undefined && fila.destacado !== null ? String(fila.destacado) : "";
      const destacado = destacadoRaw.trim().toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") === "si";
      // Si es un accesorio y está destacado, además se sugiere primero
      // como venta cruzada dentro del carrito (esto no cambió).

      // ORDEN_DESTACADO (columna opcional, numérica): controla la posición
      // exacta dentro de "Productos más vendidos" (menor número = primero).
      // Acepta el encabezado escrito como "ORDEN_DESTACADO" o "ORDEN
      // DESTACADO". Vacío o no numérico = sin orden explícito; ese producto
      // se ubica después de los que sí tienen número, respetando el orden
      // en que aparece en la Hoja.
      const ordenDestacadoRaw = (fila.orden_destacado ?? fila.ordendestacado ?? "").toString().trim();
      let ordenDest = null;
      if(ordenDestacadoRaw !== ""){
        const n = Number(ordenDestacadoRaw);
        if(!isNaN(n)) ordenDest = n;
        else console.warn(`[Camand] ORDEN_DESTACADO de "${nombreBase || '(sin nombre)'}" no es un número válido ("${ordenDestacadoRaw}") — se trata como si estuviera vacío.`);
      }

      // Fila de diagnóstico: se guarda de TODA fila de la Hoja, se muestre o
      // no en el sitio, para poder ver de un vistazo por qué un producto no
      // aparece (DISPONIBLE=no, DESTACADO mal escrito, etc.).
      debugRows.push({
        NOMBRE: nombreBase || "(sin nombre)",
        DESTACADO_ORIGINAL: destacadoRaw,
        DESTACADO_NORMALIZADO: destacado,
        ORDEN_DESTACADO: ordenDest === null ? "(vacío)" : ordenDest,
        DISPONIBLE: disponibleRaw || "(vacío = sí)",
        CATEGORIA: (fila.categoria || "").trim() || "(vacía)"
      });

      if(disponible === "no") return;

      const almacenamiento = (fila.almacenamiento || "").trim();
      const condicion = (fila.condicion || "").trim();
      const precio = parsearPrecio(fila.precio);
      if(!nombreBase) return;
      if(!precio){ sinPrecioValido.push(nombreBase + (fila.precio ? ` (precio escrito: "${fila.precio}")` : ' (columna precio vacía)')); return; }

      // El nombre solo (ej. "Samsung Galaxy A07") se repite en varias filas
      // con distinto almacenamiento/precio, así que se le agrega para
      // diferenciarlas en el chip.
      const nombre = almacenamiento ? `${nombreBase} — ${almacenamiento}` : nombreBase;
      // ESPECIFICACIONES (opcional): texto libre de la Hoja (ej. "Pantalla
      // 6.1 pulgadas; Chip A16 Bionic; Cámara 48 MP; Batería 3349 mAh") —
      // se agrega a las notas y aparece como lista en la pestaña
      // "Especificaciones técnicas" de la ficha de producto. Sepára cada
      // punto con ";" o "." en la Hoja para que salgan como líneas separadas.
      const especificaciones = (fila.especificaciones || fila.especificacion || fila.specs || "").trim();
      const notes = [condicion, almacenamiento ? "Almacenamiento: " + almacenamiento : "", especificaciones]
        .filter(Boolean).join(". ");

      const categoria = (fila.categoria || "").trim().toLowerCase();
      const sub = (fila.subcategoria || "").trim();
      const imagen = (fila.imagen || "").trim();
      // Columnas opcionales para los filtros del catálogo — si no existen
      // todavía en la hoja, simplemente quedan vacías y ese filtro no aparece.
      const ram = (fila.ram || "").trim();
      const camara = (fila.camara || fila.resolucioncamara || "").trim();
      const bateria = (fila.bateria || "").trim();
      // PRECIO ANTES (opcional): si es mayor al precio actual, se muestra
      // tachado con el % de descuento — se llena solo en los productos donde
      // se quiera mostrar la rebaja, el resto sigue igual sin tocar nada.
      const precioAntes = parsearPrecio(fila.precioantes);
      // ETIQUETA (opcional): texto libre tipo "Últimas unidades" o "Recién
      // llegado" — se muestra como insignia sobre la foto cuando se llena.
      const etiqueta = (fila.etiqueta || "").trim();
      // dest/ordenDest ya se calcularon arriba (antes del filtro de
      // disponibilidad) para que camandDebugDestacados() los pueda mostrar
      // de toda fila, se muestre o no en el sitio. idxOriginal es la
      // posición de esta fila en la Hoja, usada como orden de respaldo.
      // CAMPAÑA (opcional): nombre de la campaña en la que se destaca el
      // producto (ej. "black", "halloween", "navidad"). Si ningún producto la
      // tiene, la sección de la campaña usa los productos DESTACADO=sí.
      // USO (opcional): para qué sirve (ej. "fotos, juegos, trabajo") —
      // alimenta la sección "¿Qué estás buscando?" del inicio.
      const campana = (fila.campana || "").trim();
      const uso = (fila.uso || fila.usos || "").trim();
      const modelo = { n: nombre, p: precio, notes, esp: especificaciones, img: imagen, cond: condicion, alm: almacenamiento, ram, cam: camara, bat: bateria, pAntes: precioAntes, tag: etiqueta, dest: destacado, ordenDest, campana, uso, idxOriginal: idxOriginal++ };

      const esCelular = categoria.includes("celular");
      const esIphone = /iphone/i.test(nombreBase) || /iphone|apple/i.test(sub);

      if(esCelular && esIphone){
        nuevoIphone.push(modelo);
      } else if(esCelular){
        const marca = sub || "Otras marcas";
        if(!androidPorMarca.has(marca)) androidPorMarca.set(marca, []);
        androidPorMarca.get(marca).push(modelo);
      } else if(categoria.includes("tablet")){
        nuevoTablets.push(modelo);
      } else if(categoria.includes("computador")){
        nuevoComputadores.push(modelo);
      } else if(categoria.includes("impresora")){
        nuevoImpresoras.push(modelo);
      } else if(categoria.includes("accesorio")){
        const marca = sub || "Otros";
        if(!accesoriosPorMarca.has(marca)) accesoriosPorMarca.set(marca, []);
        accesoriosPorMarca.get(marca).push(modelo);
      } else {
        // Ninguna palabra clave calzó (categoria vacía, mal escrita o nueva).
        // Se guarda con el texto exacto que llegó en la columna categoria,
        // para que sea fácil identificar en el sitio (tile "Otros productos"
        // dentro de Tecnología) qué fila hay que corregir en la Hoja.
        const marca = (fila.categoria || "").trim() || "Sin categoría";
        if(!otrosPorMarca.has(marca)) otrosPorMarca.set(marca, []);
        otrosPorMarca.get(marca).push(modelo);
      }
    });

    // Se reemplaza el CONTENIDO de los arreglos que ya existen (no se
    // reasignan), para que CATALOG siga apuntando a los mismos arreglos.
    if(nuevoIphone.length){ IPHONE_CATALOG.length = 0; IPHONE_CATALOG.push(...nuevoIphone); }
    if(nuevoTablets.length){ TABLET_MODELS.length = 0; TABLET_MODELS.push(...nuevoTablets); }
    if(nuevoComputadores.length){ COMPUTADOR_MODELS.length = 0; COMPUTADOR_MODELS.push(...nuevoComputadores); }
    if(nuevoImpresoras.length){ IMPRESORA_MODELS.length = 0; IMPRESORA_MODELS.push(...nuevoImpresoras); }
    if(androidPorMarca.size){
      ANDROID_BRANDS_DATA.length = 0;
      androidPorMarca.forEach((models, name) => ANDROID_BRANDS_DATA.push({ name, models }));
    }
    if(accesoriosPorMarca.size){
      ACCESORIO_BRANDS_DATA.length = 0;
      accesoriosPorMarca.forEach((models, name) => ACCESORIO_BRANDS_DATA.push({ name, models }));
    }
    if(otrosPorMarca.size){
      OTROS_BRANDS_DATA.length = 0;
      otrosPorMarca.forEach((models, name) => OTROS_BRANDS_DATA.push({ name, models }));
    }

    // Guarda el diagnóstico de esta lectura para camandDebugDestacados().
    LAST_SHEET_DEBUG_ROWS = debugRows;

    renderTodo();
    const totalAndroid = [...androidPorMarca.values()].reduce((a,b)=>a+b.length,0);
    const totalAccesorios = [...accesoriosPorMarca.values()].reduce((a,b)=>a+b.length,0);
    const totalOtros = [...otrosPorMarca.values()].reduce((a,b)=>a+b.length,0);
    // Cuenta solo lo que realmente puede llegar a mostrarse en "Productos
    // más vendidos": DESTACADO=sí Y no marcado DISPONIBLE=no (un producto
    // agotado nunca aparece ahí, aunque esté marcado como destacado en la
    // Hoja — mismo criterio que ya aplica en el resto del sitio).
    const totalDestacados = debugRows.filter(r =>
      r.DESTACADO_NORMALIZADO && r.DISPONIBLE.trim().toLowerCase() !== "no"
    ).length;
    console.log(
      "[Camand] Catálogo actualizado desde " + origen + ":", filas.length, "filas leídas —",
      nuevoIphone.length, "iPhone,", totalAndroid, "Android,", nuevoTablets.length, "tablets,",
      nuevoComputadores.length, "computadores,", nuevoImpresoras.length, "impresoras,",
      totalAccesorios, "accesorios."
    );
    console.log(
      "[Camand] " + totalDestacados + " producto(s) con DESTACADO=sí (y disponibles) — se muestran en \"Productos más vendidos\" del inicio (máximo " + HOME_FEATURED_LIMIT + "). " +
      "Escribe camandDebugDestacados() en esta consola para ver el detalle fila por fila."
    );
    if(totalOtros > 0){
      console.warn(
        "[Camand] " + totalOtros + " producto(s) con columna 'categoria' no reconocida — " +
        "quedaron visibles en el tile 'Otros productos' dentro de Tecnología para que no se pierdan, " +
        "pero conviene corregir la columna categoria en la Hoja:", [...otrosPorMarca.keys()]
      );
    }
    if(sinPrecioValido.length){
      console.warn(
        "[Camand] " + sinPrecioValido.length + " producto(s) NO se cargaron por no tener un precio " +
        "válido en la columna 'precio' de la Hoja (revisa que no esté vacía y que sea un número, " +
        "por ejemplo 500000 o $500.000):", sinPrecioValido
      );
    }
}

async function cargarCatalogoDesdeSheet(){
  // 1) Si esta pestaña ya había leído la Hoja antes en esta misma visita,
  // se aplica esa copia de inmediato (más rápido que esperar la red) y
  // luego, si hay internet, se confirma/actualiza en segundo plano.
  let filasYaPintadas = null;
  try{
    const cache = cacheLeer(SHEET_CACHE_KEY);
    if(cache && Array.isArray(cache.filas) && cache.filas.length){
      aplicarFilasCatalogo(cache.filas, 'la caché guardada');
      filasYaPintadas = JSON.stringify(cache.filas);
    }
  }catch(e){}

  try{
    const res = await fetch(SHEET_CSV_URL, { cache: "no-store" });
    if(!res.ok) throw new Error("HTTP " + res.status);
    const texto = await res.text();
    const filasCrudas = window.Papa.parse(texto, { header: true, skipEmptyLines: true }).data;
    if(!filasCrudas.length) throw new Error("La hoja no devolvió filas");

    // Normaliza los encabezados (pueden venir como "NOMBRE", "PRECIO ANTES",
    // "BATERÍA", etc.) a minúscula, sin espacios y sin tildes, para no
    // depender de mayúsculas ni de cómo se escribió el acento.
    const filas = filasCrudas.map(filaCruda => {
      const norm = {};
      Object.keys(filaCruda).forEach(k => {
        const clave = k.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "");
        norm[clave] = filaCruda[k];
      });
      return norm;
    });

    // Si la Hoja no cambió desde lo que ya se pintó, no se vuelve a dibujar
    // todo (evita el "parpadeo" de tarjetas y fotos).
    if(JSON.stringify(filas) !== filasYaPintadas) aplicarFilasCatalogo(filas, 'Google Sheets');
    try{ cacheGuardar(SHEET_CACHE_KEY, { filas, ts: Date.now() }); }catch(e){}
  }catch(err){
    console.warn("[Camand] No se pudo leer Google Sheets, se muestran los datos guardados en el código (o en caché de esta pestaña):", err.message);
  }
}


/* ============================================================
   CINTA DE TEXTO EN MOVIMIENTO (inicio)
   Mensajes que se desplazan solos debajo del banner. Se pausa al pasar
   el mouse. Si alguien tiene activado "reducir movimiento" en su equipo,
   queda quieta y se puede deslizar a mano.

   OPCIONAL — cambiar los mensajes desde la Hoja sin tocar código:
   crea una pestaña "CINTA PAGINA" con las columnas TEXTO, ACTIVO (Sí/No)
   y ORDEN (1, 2, 3...). Publícala como CSV (Archivo → Compartir →
   Publicar en la web → esa pestaña → CSV) y pega el link aquí abajo,
   entre las comillas. Mientras quede vacío, se usan los mensajes base
   de CINTA_MENSAJES_BASE más, automáticamente, hasta 3 productos que
   tengan algo escrito en la columna ETIQUETA de tu catálogo.
   ============================================================ */
const CINTA_CSV_URL = "";
const CINTA_CACHE_KEY = 'camand_cinta_cache_v1';
const CINTA_MENSAJES_BASE = [
  'Envío gratis desde ' + formatCOP(FREE_SHIPPING_THRESHOLD),
  'Paga contraentrega al recibir',
  'Crédito con Sistecrédito',
  'Tarjeta de crédito a cuotas',
  'Skins personalizadas con tu foto a $25.000',
  'Estuches personalizados Acrygel',
  'Hidrogel instalado desde $25.000',
  'iPhone y Android nuevos y seminuevos',
  'Equipos revisados y con garantía',
  'Atención directa por WhatsApp'
];
let CINTA_MENSAJES_SHEET = null;

function cintaMensajes(){
  if(CINTA_MENSAJES_SHEET && CINTA_MENSAJES_SHEET.length){
    return CINTA_MENSAJES_SHEET.map(t => ({ t }));
  }
  const temporada = (window.TEMPORADA && window.TEMPORADA.cinta) ? window.TEMPORADA.cinta : [];
  const base = [...temporada, ...CINTA_MENSAJES_BASE].map(t => ({ t }));
  const conEtiqueta = flattenAllProducts()
    .filter(({ m }) => m.tag)
    .slice(0, 3)
    .map(({ m }) => ({ k: m.tag, t: `${m.n} a ${formatCOP(m.p)}` }));
  // Los productos con etiqueta se intercalan después de los 2 primeros
  // mensajes, para que aparezcan pronto en la cinta.
  return [...base.slice(0, 2), ...conEtiqueta, ...base.slice(2)];
}

function renderCinta(){
  const cinta = document.getElementById('cinta');
  const track = document.getElementById('cintaTrack');
  if(!cinta || !track) return;
  const msgs = cintaMensajes();
  if(!msgs.length){ cinta.style.display = 'none'; return; }
  cinta.style.display = '';
  // El grupo se repite hasta tener texto suficiente para cubrir pantallas
  // anchas — así nunca queda un hueco vacío mientras se desplaza.
  const largo = msgs.reduce((s, x) => s + (x.k ? x.k.length + 1 : 0) + x.t.length + 8, 0);
  const repeticiones = Math.max(1, Math.ceil(260 / Math.max(largo, 1)));
  const items = [];
  for(let i = 0; i < repeticiones; i++) items.push(...msgs);
  const itemsHTML = items.map(x => `<span class="cinta-item">${x.k ? `<b>${cmpEsc(x.k)}</b>` : ''}${cmpEsc(x.t)}</span>`).join('');
  track.innerHTML = `<div class="cinta-group">${itemsHTML}</div><div class="cinta-group" aria-hidden="true">${itemsHTML}</div>`;
  // Velocidad constante (~75 px por segundo) sin importar cuántos mensajes haya.
  const caracteres = largo * repeticiones;
  track.style.setProperty('--cinta-dur', Math.max(14, caracteres * 0.11).toFixed(1) + 's');
  cinta.setAttribute('aria-label', msgs.map(x => (x.k ? x.k + ': ' : '') + x.t).join(' · '));
}

async function cargarCintaDesdeSheet(){
  if(!/^https?:\/\//i.test(CINTA_CSV_URL)) return;
  try{
    const cache = cacheLeer(CINTA_CACHE_KEY);
    if(cache && Array.isArray(cache.msgs) && cache.msgs.length){
      CINTA_MENSAJES_SHEET = cache.msgs;
      renderCinta();
    }
  }catch(e){}
  try{
    const res = await fetch(CINTA_CSV_URL, { cache: "no-store" });
    if(!res.ok) throw new Error("HTTP " + res.status);
    const filas = window.Papa.parse(await res.text(), { header: true, skipEmptyLines: true }).data.map(filaCruda => {
      const norm = {};
      Object.keys(filaCruda).forEach(k => {
        norm[k.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "")] = filaCruda[k];
      });
      return norm;
    });
    const msgs = filas
      .filter(f => String(f.activo || "si").trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") !== "no")
      .map(f => ({ t: String(f.texto || f.mensaje || "").trim(), orden: Number(f.orden) || 0 }))
      .filter(f => f.t)
      .sort((a, b) => a.orden - b.orden)
      .map(f => f.t);
    CINTA_MENSAJES_SHEET = msgs;
    renderCinta();
    try{ cacheGuardar(CINTA_CACHE_KEY, { msgs, ts: Date.now() }); }catch(e){}
    console.log("[Camand] Cinta de texto cargada desde Google Sheets:", msgs.length, "mensajes");
  }catch(err){
    console.warn("[Camand] No se pudo leer la cinta desde Google Sheets, se usan los mensajes base:", err.message);
  }
}

/* ============================================================
   CARRUSELES DE PRODUCTOS (inicio)
   Filas horizontales que avanzan solas (una tarjeta cada ~3 s), se
   deslizan con el dedo en el celular y tienen flechas en el computador.
   Se pausan cuando el cliente las toca o pasa el mouse, y solo se
   mueven mientras están a la vista en el inicio. Se llenan solas con
   tu catálogo — no hay que escribir nada a mano.
   Para cambiar títulos, orden o qué muestra cada fila, edita HOME_RAILS.
   ============================================================ */
const HOME_RAIL_LIMIT = 14;

function railItems(catKey){
  const cat = CATALOG[catKey];
  if(!cat) return [];
  return flattenItems(cat).map(x => ({ ...x, catLabel: cat.label }));
}
// Nuevos primero; dentro de cada grupo, del más caro al más barato
// (así los modelos más recientes quedan al inicio de la fila).
function railOrdenNuevoPrecio(a, b){
  const na = (a.m.cond || '').trim().toLowerCase() === 'nuevo' ? 0 : 1;
  const nb = (b.m.cond || '').trim().toLowerCase() === 'nuevo' ? 0 : 1;
  return na - nb || b.m.p - a.m.p;
}

const HOME_RAILS = [
  // (19 oct 2026) Se quitó la fila "iPhone disponibles": los iPhone ya salen en
  // la selección de la campaña y en "¿Qué estás buscando? → Quiero iPhone".
  // Para volver a mostrarla, reactiva este bloque.
  // { id: 'iphone', titulo: 'iPhone disponibles', sub: 'Nuevos y seminuevos · revisados y con garantía',
  //   items: () => railItems('apple').sort(railOrdenNuevoPrecio), verTodos: "megaMenuGoFiltered('celulares','iPhone','')" },
  {
    id: 'android',
    titulo: 'Lo mejor en Android',
    sub: 'Samsung, Xiaomi, Motorola y más',
    items: () => railItems('android').sort(railOrdenNuevoPrecio),
    verTodos: "go('celulares')"
  },
  {
    // Aparece solo si hay al menos 3 productos con PRECIO ANTES mayor al
    // precio actual, o con algo escrito en ETIQUETA.
    id: 'ofertas',
    titulo: 'Ofertas y últimas unidades',
    sub: 'Precios rebajados y productos con etiqueta especial',
    min: 3,
    items: () => flattenAllProducts()
      .filter(({ m }) => (m.pAntes && m.pAntes > m.p) || m.tag)
      .sort((a, b) => ((b.m.pAntes || b.m.p) - b.m.p) - ((a.m.pAntes || a.m.p) - a.m.p)),
    verTodos: null
  },
  {
    id: 'accesorios',
    titulo: 'Accesorios',
    sub: 'Cargadores, audio y más para tu equipo',
    items: () => railItems('accesorios').sort((a, b) => (b.m.dest === true) - (a.m.dest === true)),
    verTodos: "go('accesorios')"
  }
];

function renderHomeRails(){
  const cont = document.getElementById('homeRails');
  if(!cont) return;
  const html = HOME_RAILS.map(r => {
    let items = [];
    try{ items = r.items() || []; }catch(e){ items = []; }
    items = items.slice(0, HOME_RAIL_LIMIT);
    if(items.length < (r.min || 2)) return '';
    const cards = items
      .map(({ marca, m, catLabel }) => productCardHTML(catLabel, marca, m).replace('class="product-card reveal"', 'class="product-card"'))
      .join('');
    return `
      <div class="home-rail" data-rail="${r.id}">
        <div class="home-rail-head">
          <div>
            <h2>${r.titulo}</h2>
            ${r.sub ? `<p>${r.sub}</p>` : ''}
          </div>
          <div class="home-rail-tools">
            ${r.verTodos ? `<a onclick="${r.verTodos}">Ver todos →</a>` : ''}
            <button type="button" class="home-rail-nav" onclick="railStep('${r.id}',-1)" aria-label="Anterior">‹</button>
            <button type="button" class="home-rail-nav" onclick="railStep('${r.id}',1)" aria-label="Siguiente">›</button>
          </div>
        </div>
        <div class="home-rail-track" id="rail-${r.id}" role="region" aria-roledescription="carrusel" aria-label="${r.titulo}" tabindex="0">${cards}</div>
      </div>`;
  }).join('');
  cont.innerHTML = html;
  const section = document.getElementById('homeRailsSection');
  if(section) section.style.display = html.trim() ? '' : 'none';
  railsBindEvents();
}

const RAIL_PAUSE_UNTIL = {};
let _railTimer = null;
let _railTick = 0;

function railPause(id, ms){ RAIL_PAUSE_UNTIL[id] = Date.now() + (ms || 8000); }

function railStep(id, dir, auto){
  const t = document.getElementById('rail-' + id);
  if(!t) return;
  const card = t.querySelector('.product-card');
  if(!card) return;
  const paso = card.getBoundingClientRect().width + parseFloat(getComputedStyle(t).columnGap || 16);
  const max = t.scrollWidth - t.clientWidth;
  if(max <= 4) return;
  if(dir > 0 && t.scrollLeft >= max - 4) t.scrollTo({ left: 0, behavior: 'smooth' });
  else if(dir < 0 && t.scrollLeft <= 4) t.scrollTo({ left: max, behavior: 'smooth' });
  else t.scrollBy({ left: dir * paso, behavior: 'smooth' });
  if(!auto) railPause(id, 10000);
}

function railsBindEvents(){
  document.querySelectorAll('.home-rail-track:not(.rail-bound)').forEach(t => {
    t.classList.add('rail-bound');
    const id = t.id.replace('rail-', '');
    ['pointerdown', 'touchstart', 'wheel', 'focusin'].forEach(ev =>
      t.addEventListener(ev, () => railPause(id, 10000), { passive: true })
    );
    t.addEventListener('keydown', e => {
      if(e.key === 'ArrowRight'){ e.preventDefault(); railStep(id, 1); }
      if(e.key === 'ArrowLeft'){ e.preventDefault(); railStep(id, -1); }
    });
  });
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!reduce && !_railTimer) _railTimer = setInterval(railsTick, 1600);
}

function railsTick(){
  if(document.hidden) return;
  const home = document.getElementById('view-home');
  if(!home || !home.classList.contains('active')) return;
  _railTick++;
  document.querySelectorAll('.home-rail-track').forEach((t, i) => {
    // Las filas se turnan (una avanza, la siguiente espera) para que no
    // se muevan todas al mismo tiempo — se ve más natural.
    if((_railTick + i) % 2 !== 0) return;
    const id = t.id.replace('rail-', '');
    if((RAIL_PAUSE_UNTIL[id] || 0) > Date.now()) return;
    if(t.matches(':hover')) return;
    const r = t.getBoundingClientRect();
    if(r.bottom < 0 || r.top > window.innerHeight) return;
    railStep(id, 1, true);
  });
}

/* ============================================================
   GENERADOR DE HISTORIAS PARA INSTAGRAM  (#/historias)
   Página interna (no está en el menú). Arma una imagen 1080 × 1920 con
   el logo, la foto, el nombre y el precio actual de los productos que
   elijas, lista para descargar o compartir directo a Instagram.

   IMPORTANTE: para poder exportar la imagen, el navegador exige que la
   foto del producto venga de un servicio que lo permita. Cloudinary sí
   lo permite; Postimages / ImgBB normalmente NO. Si una foto no se puede
   usar, la historia se arma igual con un ícono en su lugar y aparece un
   aviso indicando cuál producto conviene pasar a Cloudinary.
   ============================================================ */
const STORY = { tpl: 'producto', theme: 'claro', sel: [], opened: false };
const STORY_W = 1080, STORY_H = 1920;
const STORY_FONT = '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
const STORY_MAX_SEL = { producto: 1, oferta: 1, comparar: 4 };
const STORY_THEMES = {
  claro: { bg: ['#ffffff', '#e9ebef'], ink: '#1d1d1f', soft: '#6e6e73', price: '#0058b0',
           pillBg: '#0071e3', pillInk: '#ffffff', ctaBg: '#1d1d1f', ctaInk: '#ffffff', card: '#ffffff',
           cardShadow: 'rgba(0,0,0,0.10)', logoWhite: false, hot: '#e11d3c' },
  negro: { bg: ['#1d1d1f', '#000000'], ink: '#ffffff', soft: '#a1a1a6', price: '#ffffff',
           pillBg: '#2997ff', pillInk: '#ffffff', ctaBg: '#ffffff', ctaInk: '#1d1d1f', card: '#f5f5f7',
           cardShadow: 'rgba(0,0,0,0.5)', logoWhite: true, hot: '#ff375f' },
  azul:  { bg: ['#0a84ff', '#003d80'], ink: '#ffffff', soft: 'rgba(255,255,255,0.78)', price: '#ffffff',
           pillBg: '#ffffff', pillInk: '#0058b0', ctaBg: '#ffffff', ctaInk: '#0058b0', card: '#ffffff',
           cardShadow: 'rgba(0,20,60,0.35)', logoWhite: true, hot: '#ff375f' }
};

function storyAllProducts(){
  return flattenAllProducts()
    .filter(x => x.m && x.m.n)
    .map(x => ({ ...x, id: productId(x.marca, x.m) }));
}
function storyFind(id){ return storyAllProducts().find(x => x.id === id) || null; }
function storySelected(){ return STORY.sel.map(storyFind).filter(Boolean); }
function storyIsCloudinary(url){ return /res\.cloudinary\.com\//i.test(url || ''); }
function storyFirstImg(m){ return productImageList(m)[0] || ''; }

function storyOpen(){
  if(!STORY.opened){
    STORY.opened = true;
    if(!STORY.sel.length){
      const primero = railItems('apple').sort(railOrdenNuevoPrecio)[0] || storyAllProducts()[0];
      if(primero) STORY.sel = [productId(primero.marca, primero.m)];
    }
  }
  storySyncSegs();
  storyRenderSelected();
  storyRenderList();
  storyDraw();
}

// Se llama cada vez que se actualiza el catálogo (llega la Hoja): los
// precios de la historia siempre quedan con el valor más reciente.
function storyRefresh(){
  const v = document.getElementById('view-historias');
  if(!v || !v.classList.contains('active')) return;
  storyOpen();
}

function storySet(key, value){
  STORY[key] = value;
  if(key === 'tpl'){
    const max = STORY_MAX_SEL[value] || 1;
    if(STORY.sel.length > max) STORY.sel = STORY.sel.slice(0, max);
  }
  storySyncSegs();
  storyRenderSelected();
  storyRenderList();
  storyDraw();
}

function storySyncSegs(){
  document.querySelectorAll('#storyTplSeg button').forEach(b => b.classList.toggle('is-active', b.dataset.v === STORY.tpl));
  document.querySelectorAll('#storyThemeSeg button').forEach(b => b.classList.toggle('is-active', b.dataset.v === STORY.theme));
  const count = document.getElementById('storySelCount');
  const max = STORY_MAX_SEL[STORY.tpl] || 1;
  if(count) count.textContent = max > 1 ? `(${STORY.sel.length} de ${max})` : '';
}

function storyToggle(id){
  const max = STORY_MAX_SEL[STORY.tpl] || 1;
  if(STORY.sel.includes(id)){
    STORY.sel = STORY.sel.filter(x => x !== id);
  } else if(max === 1){
    STORY.sel = [id];
  } else if(STORY.sel.length < max){
    STORY.sel.push(id);
  } else {
    showToast(`Máximo ${max} productos en esta plantilla`);
    return;
  }
  storySyncSegs();
  storyRenderSelected();
  storyRenderList();
  storyDraw();
}

function storyRenderSelected(){
  const el = document.getElementById('storySelected');
  if(!el) return;
  el.innerHTML = storySelected().map(x =>
    `<span class="story-chip">${cmpEsc(x.m.n)}<button type="button" aria-label="Quitar" onclick="storyToggle('${x.id.replace(/'/g, "\\'")}')">×</button></span>`
  ).join('');
}

function storyRenderList(){
  const el = document.getElementById('storyList');
  if(!el) return;
  const q = cmpNorm((document.getElementById('storySearch') || {}).value || '');
  const tokens = q.split(' ').filter(Boolean);
  let lista = storyAllProducts();
  if(tokens.length){
    lista = lista.filter(x => {
      const txt = cmpNorm(x.m.n + ' ' + x.marca + ' ' + x.catLabel);
      return tokens.every(t => txt.includes(t));
    });
  }
  if(!lista.length){ el.innerHTML = `<p class="story-hint" style="padding:14px;">Sin resultados.</p>`; return; }
  // Todos los productos del catálogo, agrupados por categoría (sin tope).
  let html = '', grupo = null;
  lista.forEach(x => {
    if(x.catLabel !== grupo){
      grupo = x.catLabel;
      const n = lista.filter(y => y.catLabel === grupo).length;
      html += `<div class="story-group">${cmpEsc(grupo)} <span>${n}</span></div>`;
    }
    const img = storyFirstImg(x.m);
    const sel = STORY.sel.includes(x.id);
    const aviso = img && !storyIsCloudinary(img) ? ` · <span class="si-warn">foto fuera de Cloudinary</span>` : (!img ? ` · <span class="si-warn">sin foto</span>` : '');
    html += `<button type="button" class="story-item${sel ? ' is-sel' : ''}" onclick="storyToggle('${x.id.replace(/'/g, "\\'")}')">
      ${img ? `<img src="${optimizeImageUrl(img, 80)}" alt="" loading="lazy">` : `<span class="si-noimg"></span>`}
      <span class="si-txt"><span class="si-name">${cmpEsc(x.m.n)}</span><span class="si-meta">${formatCOP(x.m.p)} · ${cmpEsc(x.m.cond || x.catLabel)}${aviso}</span></span>
      <span class="si-check">${sel ? '✓' : ''}</span>
    </button>`;
  });
  el.innerHTML = html;
}

/* ---------- Carga de imágenes para el lienzo ---------- */
const STORY_IMG_CACHE = new Map();
function storyTryLoad(src){
  return new Promise(resolve => {
    const im = new Image();
    im.crossOrigin = 'anonymous';
    im.decoding = 'async';
    im.onload = () => resolve(im);
    im.onerror = () => resolve(null);
    im.src = src;
  });
}
function storyCloudName(){
  for(const x of flattenAllProducts()){
    const mt = String(x.m.img || '').match(/res\.cloudinary\.com\/([^/]+)\//i);
    if(mt) return mt[1];
  }
  return null;
}
function storyLoadImage(url){
  if(!url) return Promise.resolve(null);
  if(STORY_IMG_CACHE.has(url)) return STORY_IMG_CACHE.get(url);
  const p = (async () => {
    let im = await storyTryLoad(optimizeImageUrl(url, 1100));
    // Si la foto está en otro servicio, se intenta traerla a través de tu
    // cuenta de Cloudinary (funciona solo si tu cuenta tiene habilitada la
    // opción "Fetched URL"; si no, se usa el ícono de reemplazo).
    if(!im && !storyIsCloudinary(url)){
      const cloud = storyCloudName();
      if(cloud) im = await storyTryLoad(`https://res.cloudinary.com/${cloud}/image/fetch/w_1100,q_auto/${encodeURIComponent(url)}`);
    }
    return im;
  })();
  STORY_IMG_CACHE.set(url, p);
  return p;
}
let _storyLogoPromise = null;
function storyLoadLogo(){
  if(_storyLogoPromise) return _storyLogoPromise;
  _storyLogoPromise = storyTryLoad(CAMAND_LOGO).then(im => {
    if(!im) return { dark: null, white: null };
    // Versión blanca del logo para los fondos oscuros (mismo efecto que
    // el logo del pie de página).
    let white = null;
    try{
      const c = document.createElement('canvas');
      c.width = im.naturalWidth; c.height = im.naturalHeight;
      const cx = c.getContext('2d');
      cx.drawImage(im, 0, 0);
      const d = cx.getImageData(0, 0, c.width, c.height);
      for(let i = 0; i < d.data.length; i += 4){ d.data[i] = d.data[i+1] = d.data[i+2] = 255; }
      cx.putImageData(d, 0, 0);
      white = c;
    }catch(e){}
    return { dark: im, white };
  });
  return _storyLogoPromise;
}

/* ---------- Ayudas de dibujo ---------- */
function sRound(ctx, x, y, w, h, r){
  r = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
function sFont(size, weight){ return `${weight || 700} ${size}px ${STORY_FONT}`; }
function sWrap(ctx, text, maxW, maxLines){
  const words = String(text || '').split(/\s+/).filter(Boolean);
  const lines = [];
  let line = '';
  for(const w of words){
    const test = line ? line + ' ' + w : w;
    if(ctx.measureText(test).width <= maxW || !line){ line = test; }
    else { lines.push(line); line = w; }
  }
  if(line) lines.push(line);
  if(lines.length > maxLines){
    const cut = lines.slice(0, maxLines);
    let last = cut[maxLines - 1];
    while(last.length > 1 && ctx.measureText(last + '…').width > maxW) last = last.slice(0, -1);
    cut[maxLines - 1] = last.trim() + '…';
    return cut;
  }
  return lines;
}
// Escribe texto centrado (con ajuste de líneas) y devuelve la nueva altura.
function sText(ctx, text, cx, y, maxW, size, weight, color, maxLines, lineH){
  ctx.font = sFont(size, weight);
  ctx.fillStyle = color;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  const lines = sWrap(ctx, text, maxW, maxLines || 2);
  const lh = lineH || Math.round(size * 1.16);
  lines.forEach((l, i) => ctx.fillText(l, cx, y + size + i * lh));
  return y + size + (lines.length - 1) * lh;
}
function sPill(ctx, text, cx, y, size, bg, ink, padX, h){
  ctx.font = sFont(size, 800);
  const w = ctx.measureText(text).width + (padX || 34) * 2;
  const hh = h || Math.round(size * 1.9);
  ctx.fillStyle = bg;
  sRound(ctx, cx - w / 2, y, w, hh, hh / 2);
  ctx.fill();
  ctx.fillStyle = ink;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, cx, y + hh / 2 + 1);
  ctx.textBaseline = 'alphabetic';
  return y + hh;
}
function sContain(ctx, img, x, y, w, h){
  const r = Math.min(w / img.naturalWidth, h / img.naturalHeight);
  const iw = img.naturalWidth * r, ih = img.naturalHeight * r;
  ctx.drawImage(img, x + (w - iw) / 2, y + (h - ih) / 2, iw, ih);
}
function sCard(ctx, th, x, y, w, h, r){
  ctx.save();
  ctx.shadowColor = th.cardShadow;
  ctx.shadowBlur = 60;
  ctx.shadowOffsetY = 24;
  ctx.fillStyle = th.card;
  sRound(ctx, x, y, w, h, r);
  ctx.fill();
  ctx.restore();
}
function sNoImg(ctx, x, y, w, h){
  ctx.save();
  ctx.strokeStyle = 'rgba(0,0,0,0.18)';
  ctx.lineWidth = 8;
  const s = Math.min(w, h) * 0.28, cx = x + w / 2, cy = y + h / 2;
  sRound(ctx, cx - s / 2, cy - s * 0.4, s, s * 0.8, 18);
  ctx.stroke();
  ctx.beginPath(); ctx.arc(cx, cy, s * 0.2, 0, Math.PI * 2); ctx.stroke();
  ctx.restore();
}
function sBadge(ctx, text, cx, cy, r, bg){
  ctx.save();
  ctx.fillStyle = bg;
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = sFont(Math.round(r * 0.62), 900);
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(text, cx, cy + 2);
  ctx.restore();
}
function sPrice(ctx, th, m, cx, y, size){
  const tieneDesc = m.pAntes && m.pAntes > m.p;
  if(tieneDesc){
    const antes = formatCOP(m.pAntes);
    const fs = Math.round(size * 0.4);
    ctx.font = sFont(fs, 600);
    ctx.fillStyle = th.soft;
    ctx.textAlign = 'center';
    ctx.fillText('Antes ' + antes, cx, y + fs);
    const w = ctx.measureText(antes).width;
    const wTot = ctx.measureText('Antes ' + antes).width;
    const x1 = cx + wTot / 2 - w;
    ctx.fillRect(x1, y + fs * 0.62, w, Math.max(3, fs * 0.08));
    y += fs + 18;
  }
  ctx.font = sFont(size, 800);
  ctx.fillStyle = th.price;
  ctx.textAlign = 'center';
  ctx.fillText(formatCOP(m.p), cx, y + size * 0.9);
  return y + size;
}
function sLogo(ctx, logo, th, cy, h){
  const im = logo && (th.logoWhite ? (logo.white || logo.dark) : logo.dark);
  if(im){
    const iw = im.naturalWidth || im.width, ih = im.naturalHeight || im.height;
    const w = iw * (h / ih);
    ctx.drawImage(im, STORY_W / 2 - w / 2, cy - h / 2, w, h);
  } else {
    sText(ctx, 'Camand Mobile.', STORY_W / 2, cy - 30, 900, 52, 900, th.ink, 1);
  }
}
function sBottom(ctx, th, y){
  const cta = (document.getElementById('storyCta') || {}).value || '';
  const foot = (document.getElementById('storyFoot') || {}).value || '';
  if(cta.trim()) y = sPill(ctx, cta.trim(), STORY_W / 2, y, 40, th.ctaBg, th.ctaInk, 56, 104) + 34;
  if(foot.trim()) sText(ctx, foot.trim(), STORY_W / 2, y, 920, 30, 600, th.soft, 2, 40);
}

/* ---------- Plantillas ---------- */
// Márgenes pensados para Instagram: arriba (~200 px) y abajo (~220 px)
// Instagram pone su barra de perfil y la de "Enviar mensaje", así que
// todo lo importante queda dentro de la zona central.
function storyTplProducto(ctx, th, logo, x, img, oferta){
  const m = x.m;
  const kicker = ((document.getElementById('storyKicker') || {}).value || '').trim()
    || (oferta ? 'OFERTA DE LA SEMANA' : (m.tag || m.cond || ''));
  const titulo = ((document.getElementById('storyTitle') || {}).value || '').trim() || m.n;
  sLogo(ctx, logo, th, 225, 78);
  let y = 305;
  if(oferta){
    y = sText(ctx, kicker.toUpperCase(), STORY_W / 2, y - 10, 960, 84, 900, th.ink, 2, 90) + 34;
  } else if(kicker){
    y = sPill(ctx, kicker.toUpperCase(), STORY_W / 2, y, 30, th.pillBg, th.pillInk) + 30;
  } else {
    y += 20;
  }
  const cardH = oferta ? 1170 - y : 1140 - y;
  const cardW = Math.min(840, cardH + 80);
  const cardX = (STORY_W - cardW) / 2;
  sCard(ctx, th, cardX, y, cardW, cardH, 56);
  if(img) sContain(ctx, img, cardX + 50, y + 50, cardW - 100, cardH - 100);
  else sNoImg(ctx, cardX, y, cardW, cardH);
  if(m.pAntes && m.pAntes > m.p){
    const pct = Math.round((1 - m.p / m.pAntes) * 100);
    sBadge(ctx, `-${pct}%`, cardX + cardW - 60, y + (oferta ? 90 : 60), oferta ? 105 : 88, th.hot);
  }
  y += cardH + 50;
  y = sText(ctx, titulo, STORY_W / 2, y, 920, 64, 800, th.ink, 2, 74) + 18;
  const specs = [m.alm, oferta ? (m.tag || '') : ''].filter(Boolean).join(' · ');
  if(specs && !titulo.includes(specs)) y = sText(ctx, specs, STORY_W / 2, y, 900, 34, 600, th.soft, 1) + 14;
  y = sPrice(ctx, th, m, STORY_W / 2, y + 8, oferta ? 128 : 112) + 44;
  sBottom(ctx, th, Math.max(y, 1540));
}

function storyTplComparar(ctx, th, logo, lista, imgs){
  const nombres = lista.map(x => x.m.n);
  const todosIphone = nombres.length && nombres.every(n => /iphone/i.test(n));
  const todosSamsung = nombres.length && nombres.every(n => /samsung|galaxy/i.test(n));
  const titulo = ((document.getElementById('storyTitle') || {}).value || '').trim()
    || (todosIphone ? 'Elige tu iPhone' : todosSamsung ? 'Elige tu Samsung' : 'Elige tu equipo');
  const kicker = ((document.getElementById('storyKicker') || {}).value || '').trim();
  sLogo(ctx, logo, th, 225, 78);
  let y = 300;
  if(kicker) y = sPill(ctx, kicker.toUpperCase(), STORY_W / 2, y, 28, th.pillBg, th.pillInk) + 22;
  y = sText(ctx, titulo, STORY_W / 2, y, 960, 86, 900, th.ink, 1) + 44;

  const n = lista.length;
  const cols = n === 1 ? 1 : 2;
  const rows = Math.ceil(n / cols);
  const gap = 30;
  const areaW = 960, areaTop = y, areaBottom = 1500;
  const cardW = cols === 1 ? 700 : (areaW - gap) / 2;
  const cardH = Math.min(rows === 1 ? 860 : 560, (areaBottom - areaTop - gap * (rows - 1)) / rows);
  lista.forEach((x, i) => {
    const r = Math.floor(i / cols);
    const enFila = Math.min(cols, n - r * cols);
    const c = i % cols;
    const filaW = enFila * cardW + (enFila - 1) * gap;
    const cx0 = (STORY_W - filaW) / 2 + c * (cardW + gap);
    const cy0 = areaTop + r * (cardH + gap);
    sCard(ctx, th, cx0, cy0, cardW, cardH, 40);
    const imgH = cardH - 200;
    if(imgs[i]) sContain(ctx, imgs[i], cx0 + 30, cy0 + 26, cardW - 60, imgH - 20);
    else sNoImg(ctx, cx0, cy0, cardW, imgH);
    const m = x.m;
    if(m.pAntes && m.pAntes > m.p){
      sBadge(ctx, `-${Math.round((1 - m.p / m.pAntes) * 100)}%`, cx0 + cardW - 58, cy0 + 58, 48, th.hot);
    }
    // El texto de la tarjeta siempre va oscuro (la tarjeta es clara).
    const ty = sText(ctx, m.n, cx0 + cardW / 2, cy0 + imgH + 4, cardW - 40, 34, 700, '#1d1d1f', 2, 40);
    ctx.font = sFont(52, 800);
    ctx.fillStyle = '#0058b0';
    ctx.textAlign = 'center';
    ctx.fillText(formatCOP(m.p), cx0 + cardW / 2, Math.min(ty + 72, cy0 + cardH - 30));
  });
  const fin = areaTop + rows * cardH + (rows - 1) * gap;
  sBottom(ctx, th, Math.max(fin + 50, 1540));
}

let _storyDrawToken = 0;
let _storyDrawTimer = null;
function storyDrawSoon(){
  clearTimeout(_storyDrawTimer);
  _storyDrawTimer = setTimeout(storyDraw, 160);
}

async function storyDraw(){
  const canvas = document.getElementById('storyCanvas');
  if(!canvas) return;
  const token = ++_storyDrawToken;
  const lista = storySelected();
  const th = STORY_THEMES[STORY.theme] || STORY_THEMES.claro;
  const [logo, ...imgs] = await Promise.all([storyLoadLogo(), ...lista.map(x => storyLoadImage(storyFirstImg(x.m)))]);
  if(token !== _storyDrawToken) return;

  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, STORY_W, STORY_H);
  const g = ctx.createLinearGradient(0, 0, 0, STORY_H);
  g.addColorStop(0, th.bg[0]); g.addColorStop(1, th.bg[1]);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, STORY_W, STORY_H);

  if(!lista.length){
    sLogo(ctx, logo, th, 225, 78);
    sText(ctx, 'Elige un producto de la lista', STORY_W / 2, 880, 900, 56, 700, th.soft, 2);
  } else if(STORY.tpl === 'comparar'){
    storyTplComparar(ctx, th, logo, lista, imgs);
  } else {
    storyTplProducto(ctx, th, logo, lista[0], imgs[0], STORY.tpl === 'oferta');
  }

  const warn = document.getElementById('storyWarn');
  if(warn){
    const fallidas = lista.filter((x, i) => !imgs[i]).map(x => x.m.n);
    warn.textContent = fallidas.length
      ? `No se pudo usar la foto de: ${fallidas.join(', ')}. Súbela a Cloudinary y pega ese link en la columna IMAGEN de la Hoja para que aparezca aquí.`
      : '';
  }
}

function storyFileName(){
  const x = storySelected()[0];
  const base = x ? x.m.n : 'camand';
  return 'historia-' + cmpNorm(base).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 50) + '.png';
}
function storyBlob(){
  return new Promise((resolve, reject) => {
    const canvas = document.getElementById('storyCanvas');
    try{ canvas.toBlob(b => b ? resolve(b) : reject(new Error('sin imagen')), 'image/png'); }
    catch(e){ reject(e); }
  });
}
async function storyDownload(){
  try{
    await storyDraw();
    const blob = await storyBlob();
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = storyFileName();
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
    showToast('Imagen descargada');
  }catch(e){
    showToast('No se pudo generar la imagen');
    console.warn('[Camand] Historias:', e);
  }
}
async function storyShare(){
  try{
    await storyDraw();
    const blob = await storyBlob();
    const file = new File([blob], storyFileName(), { type: 'image/png' });
    if(navigator.canShare && navigator.canShare({ files: [file] })){
      await navigator.share({ files: [file] });
    } else {
      showToast('Este navegador no permite compartir directo — se descargará');
      storyDownload();
    }
  }catch(e){
    if(e && e.name === 'AbortError') return;
    showToast('No se pudo compartir la imagen');
  }
}
async function storyCopyLink(){
  const x = storySelected()[0];
  const url = x
    ? productShareUrl(x.id)
    : location.origin + location.pathname;
  try{
    await navigator.clipboard.writeText(url);
    showToast('Link copiado — pégalo en el sticker de enlace');
  }catch(e){
    window.prompt('Copia este link:', url);
  }
}

renderTodo();
cargarCatalogoDesdeSheet();
cargarCintaDesdeSheet();
cargarBannersDesdeSheet();
cargarCategoriasDesdeSheet();
cargarFotosLineasDesdeSheet();
initCookieBanner();
routeFromHash();

// Registra el Service Worker (requisito técnico para que el sitio se pueda
// instalar como app). Si el navegador no lo soporta o falla, el sitio
// sigue funcionando exactamente igual — no depende de esto.
if('serviceWorker' in navigator){
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

/* ===================== PRECARGA AL PASAR EL MOUSE / TOCAR ===================== */
// Al acercar el mouse (o empezar a tocar) una tarjeta, se pide de una vez la
// foto grande de la ficha; así la ficha abre ya con la foto lista.
(function precargarFichas(){
  const hechas = new Set();
  const precargar = e => {
    const card = e.target.closest && e.target.closest('.product-card');
    if(!card) return;
    const img = card.querySelector('.pc-media img');
    const src = img && img.getAttribute('src');
    if(!src || hechas.has(src) || !/res\.cloudinary\.com/.test(src)) return;
    hechas.add(src);
    const grande = src.replace(/\/upload\/w_\d+,/, innerWidth <= 760 ? '/upload/w_700,' : '/upload/w_1200,');
    const pre = new Image(); pre.decoding = 'async'; pre.src = grande;
  };
  document.addEventListener('pointerover', precargar, { passive: true });
  document.addEventListener('touchstart', precargar, { passive: true });
})();
