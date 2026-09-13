const rows = [
  [
    "F",
    "Functionality",
    "Funcionalidad",
    "Características y capacidades del programa",
    "¿Telegram incluye las capacidades necesarias para mensajería, llamadas, grupos, canales, archivos y bots?",
    "Integra estas funciones para comunicación personal, académica y comunitaria.",
    4,
    10,
  ],
  [
    "F",
    "Functionality",
    "Funcionalidad",
    "Generalidad de las funciones",
    "¿Las funciones atienden distintos tipos de usuarios y escenarios?",
    "Permite chats personales, trabajo en equipo, difusión, comunidades y automatización.",
    4,
    10,
  ],
  [
    "F",
    "Functionality",
    "Funcionalidad",
    "Seguridad del sistema",
    "¿Protege adecuadamente cuentas, datos y conversaciones?",
    "Ofrece privacidad, verificación en dos pasos y chats secretos; el cifrado E2E no es predeterminado en chats en nube.",
    3,
    10,
  ],
  [
    "U",
    "Usability",
    "Facilidad de uso",
    "Capacidad de prueba",
    "¿El usuario puede comprobar y ajustar las funciones antes de utilizarlas?",
    "Gran parte de los ajustes son visibles y configurables, con acciones reversibles en varios flujos.",
    4,
    5,
  ],
  [
    "U",
    "Usability",
    "Facilidad de uso",
    "Capacidad de configuración",
    "¿Permite configurar privacidad, notificaciones y permisos?",
    "Dispone de controles extensos para privacidad, sesiones, grupos, canales y notificaciones.",
    4,
    5,
  ],
  [
    "U",
    "Usability",
    "Facilidad de uso",
    "Compatibilidad",
    "¿Puede utilizarse en los dispositivos y sistemas comunes?",
    "Tiene clientes para Android, iOS, Windows, macOS, Linux y versión web.",
    4,
    5,
  ],
  [
    "U",
    "Usability",
    "Facilidad de uso",
    "Requisitos de instalación",
    "¿Es sencillo instalar o acceder a la aplicación?",
    "Se distribuye en tiendas oficiales, descarga de escritorio y acceso web.",
    4,
    5,
  ],
  [
    "R",
    "Reliability",
    "Confiabilidad",
    "Frecuencia y severidad de fallos",
    "¿Los fallos son poco frecuentes y de impacto controlado?",
    "La experiencia ordinaria es estable, aunque depende de conectividad y disponibilidad regional.",
    3,
    5,
  ],
  [
    "R",
    "Reliability",
    "Confiabilidad",
    "Exactitud de las salidas",
    "¿La aplicación comunica con precisión el resultado de sus acciones?",
    "Estados de envío, lectura, permisos y administración permiten verificar las operaciones principales.",
    3,
    5,
  ],
  [
    "R",
    "Reliability",
    "Confiabilidad",
    "Capacidad de predicción",
    "¿El usuario puede anticipar el efecto de acciones y configuraciones?",
    "Las funciones básicas son previsibles; privacidad y difusión requieren lectura cuidadosa.",
    3,
    5,
  ],
  [
    "P",
    "Performance",
    "Rendimiento",
    "Factores humanos",
    "¿El diseño considera tareas y necesidades frecuentes de las personas?",
    "Incluye respuestas, menciones, carpetas, búsqueda y control de notificaciones.",
    4,
    5,
  ],
  [
    "P",
    "Performance",
    "Rendimiento",
    "Factores estéticos",
    "¿La interfaz presenta una apariencia clara y ordenada?",
    "La interfaz es sobria, personalizable y mantiene jerarquía visual consistente.",
    4,
    5,
  ],
  [
    "P",
    "Performance",
    "Rendimiento",
    "Consistencia de la interfaz",
    "¿Los elementos mantienen patrones entre pantallas y plataformas?",
    "La navegación, chats y controles principales conservan patrones reconocibles.",
    4,
    5,
  ],
  [
    "P",
    "Performance",
    "Rendimiento",
    "Documentación",
    "¿Existe documentación para usuarios y desarrolladores?",
    "La FAQ, la documentación de API y las guías de uso aportan soporte documental.",
    4,
    5,
  ],
  [
    "S",
    "Supportability",
    "Soporte",
    "Velocidad de procesamiento",
    "¿Procesa acciones de comunicación con rapidez?",
    "La mensajería y sincronización suelen responder con agilidad en una conexión estable.",
    4,
    3,
  ],
  [
    "S",
    "Supportability",
    "Soporte",
    "Tiempo de respuesta",
    "¿El sistema responde oportunamente a las acciones del usuario?",
    "Las acciones habituales responden rápido; la calidad de red puede afectar la respuesta.",
    3,
    3,
  ],
  [
    "S",
    "Supportability",
    "Soporte",
    "Consumo de recursos",
    "¿Controla razonablemente almacenamiento y recursos del dispositivo?",
    "La caché se administra, aunque multimedia y comunidades grandes aumentan consumo.",
    3,
    3,
  ],
  [
    "S",
    "Supportability",
    "Soporte",
    "Rendimiento efectivo total",
    "¿Mantiene rendimiento al combinar varias funciones?",
    "El uso de nube y clientes nativos mantiene una experiencia generalmente fluida.",
    4,
    3,
  ],
  [
    "S",
    "Supportability",
    "Soporte",
    "Eficacia",
    "¿Permite completar eficazmente las tareas de comunicación?",
    "Los flujos de chat, llamadas y compartición permiten alcanzar el propósito central.",
    4,
    3,
  ],
];
const titles = {
  inicio: ["Modelo FURPS", "Aplicación de plantilla a Telegram"],
  proceso: ["Proceso de aplicación", "Metodología y escala definida"],
  plantilla: ["Plantilla FURPS", "Características y factores del modelo"],
  cuestionario: ["Cuestionario aplicado", "19 preguntas diligenciadas"],
  resultados: ["Resultados", "Consolidación de puntajes"],
  conclusiones: ["Conclusiones", "Hallazgos y recomendaciones"],
  referencias: ["Referencias", "Fuentes consultadas"],
};
const level = (n) =>
  n === 4 ? "Excelente" : n === 3 ? "Bueno" : n === 2 ? "Regular" : "Malo";
const obtain = (r) => (r[6] / 4) * r[7];
const total = rows.reduce((a, r) => a + obtain(r), 0).toFixed(1);
function msg(x, out = false) {
  return `<article class="message ${out ? "out" : ""}">${x}<div class="meta">Modelo FURPS &nbsp; ✓✓</div></article>`;
}
function table(type) {
  let head =
    type === "factors"
      ? "<th>Sigla</th><th>Característica</th><th>Puntaje</th><th>Factor</th><th>Puntaje factor</th>"
      : "<th>Sigla</th><th>Característica</th><th>Factor</th><th>Pregunta del cuestionario</th><th>Evidencia en Telegram</th><th>Esperado</th><th>Obtenido</th>";
  return `<div class="table"><table><thead><tr>${head}</tr></thead><tbody>${rows.map((r) => (type === "factors" ? `<tr><td class="score">${r[0]}</td><td>${r[2]}</td><td class="score">${r[0] === "F" ? 30 : r[0] === "U" ? 20 : r[0] === "R" ? 15 : r[0] === "P" ? 20 : 15}</td><td><b>${r[3]}</b></td><td class="score">${r[7]}</td></tr>` : `<tr><td class="score">${r[0]}</td><td>${r[2]}</td><td><b>${r[3]}</b></td><td>${r[4]}</td><td>${r[5]}</td><td class="score">4</td><td class="score">${r[6]} · ${level(r[6])}</td></tr>`)).join("")}</tbody></table></div>`;
}
function totals() {
  let g = {};
  rows.forEach((r) => {
    let x = (g[r[2]] ??= { n: r[2], points: 0, max: 0 });
    x.points += obtain(r);
    x.max += r[7];
    g[r[2]] = x;
  });
  return `<div class="table"><table><thead><tr><th>Característica</th><th>Puntaje obtenido</th><th>Puntaje máximo</th><th>Cumplimiento</th></tr></thead><tbody>${Object.values(
    g,
  )
    .map(
      (x) =>
        `<tr><td>${x.n}</td><td class="score">${x.points.toFixed(1)}</td><td class="score">${x.max}</td><td class="score">${((x.points / x.max) * 100).toFixed(1)}%</td></tr>`,
    )
    .join("")}</tbody></table></div>`;
}
function render(v) {
  document.querySelector("#head").textContent = titles[v][0];
  document.querySelector("#sub").textContent = titles[v][1];
  let h = "";
  if (v === "inicio")
    h =
      msg(
        `<span class="tag">INFORME PRINCIPAL</span><h1>Evaluación de calidad de Telegram</h1><p><b>Ingeniería de Software II · Grupo B1</b><br>Universidad de La Guajira</p><p>Aplicación de la <b>plantilla FURPS</b> suministrada para evaluar Telegram como software de mensajería.</p><div class="grid"><div class="box"><b>Recurso</b>Telegram Messenger</div><div class="box"><b>Plantilla</b>FURPS</div><div class="box"><b>Resultado</b>${total}/100</div></div>`,
      ) +
      msg(
        `<h2>Justificación del modelo elegido</h2><p>FURPS es la plantilla más pertinente para Telegram: valora <b>Functionality, Usability, Reliability, Performance y Supportability</b>, es decir, lo que la aplicación hace, qué tan fácil es usarla, su confiabilidad, rendimiento y soporte.</p><p><b>Alcance:</b> evaluación académica basada en funciones públicas y documentación. No es una auditoría de seguridad ni una inspección del código del servidor.</p>`,
        true,
      );
  if (v === "proceso")
    h =
      msg(
        `<span class="tag">METODOLOGÍA</span><h2>Aplicación de la plantilla de evaluación</h2><ol><li>Se seleccionó Telegram como aplicación a evaluar.</li><li>Se eligió la plantilla FURPS contenida en el documento entregado.</li><li>Se conservan sus cinco características, diecinueve factores y ponderaciones.</li><li>Se formuló una pregunta para cada factor y se aplicó la escala definida.</li><li>Se calculó cada factor: (puntaje obtenido / 4) × peso del factor.</li><li>Se consolidaron los resultados por característica y el total sobre 100.</li></ol>`,
      ) +
      msg(
        `<h3>Escala valorativa definida</h3><div class="scale"><span><b>4</b>Excelente</span><span><b>3</b>Bueno</span><span><b>2</b>Regular</span><span><b>1</b>Malo</span></div><p>Ejemplo: Seguridad del sistema obtiene 3; por tanto, (3/4) × 10 = <b>7,5 puntos</b>.</p>`,
        true,
      );
  if (v === "plantilla")
    h = msg(
      `<span class="tag">TABLA DE LA PLANTILLA</span><h2>Modelo FURPS y sus factores</h2><p>Se reproduce la estructura de la tabla FURPS de la plantilla: características, factores y pesos. Total: 100 puntos.</p>${table("factors")}`,
    );
  if (v === "cuestionario")
    h = msg(
      `<span class="tag">CUESTIONARIO DILIGENCIADO</span><h2>Aplicación de preguntas a Telegram</h2><p>Las 19 preguntas se aplican de acuerdo con la escala definida; el puntaje esperado es excelente (4) y el obtenido recoge la evidencia observada.</p>${table("questions")}`,
    );
  if (v === "resultados")
    h =
      msg(
        `<span class="tag">CONSOLIDACIÓN</span><h2>Resultados de la evaluación FURPS</h2><p>Los puntajes fueron normalizados según el peso de cada factor de la plantilla.</p>${totals()}`,
      ) +
      msg(
        `<h3>Resultado final</h3><div class="summary"><div class="result"><b>Puntaje FURPS</b><div class="big">${total} / 100</div><div class="bar"><i style="width:${total}%"></i></div>${total}% de cumplimiento</div><div class="result"><b>Interpretación</b><p>Telegram obtiene un nivel alto. Los valores menores aparecen en seguridad del sistema, fiabilidad y consumo de recursos, debido a límites propios de los chats en nube, conectividad y multimedia.</p></div></div>`,
        true,
      );
  if (v === "conclusiones")
    h = msg(
      `<span class="tag">CIERRE</span><h2>Conclusiones</h2><p><b>1.</b> Telegram obtiene <b>${total}/100</b> en la plantilla FURPS, lo que indica una calidad alta para mensajería digital.</p><p><b>2.</b> Funcionalidad, facilidad de uso y rendimiento son sus puntos más fuertes por la variedad de funciones y disponibilidad multiplataforma.</p><p><b>3.</b> Seguridad obtiene 3/4: los chats secretos tienen cifrado de extremo a extremo, pero no es el modo predeterminado de los chats en nube.</p><p><b>4.</b> Se recomienda activar verificación en dos pasos, revisar privacidad, permisos de grupo y sesiones activas.</p>`,
    );
  if (v === "referencias")
    h = msg(
      `<span class="tag">FUENTES</span><h2>Referencias bibliográficas</h2><ol><li>Grady, R. B. (1992). <i>Practical software metrics for project management and process improvement</i>. Prentice Hall.</li><li>Rey, A. (2015). <i>Evaluación de la Calidad de la Tecnología Educativa, Capítulo II: Modelos de Calidad</i>. CVUDES. Documento suministrado para la actividad.</li><li>Telegram. (2026). <a href="https://telegram.org/faq" target="_blank">Telegram FAQ</a>.</li><li>Telegram. (2026). <a href="https://telegram.org/privacy" target="_blank">Privacy Policy</a> y <a href="https://core.telegram.org/api/end-to-end" target="_blank">Secret Chats and End-to-End Encryption</a>.</li></ol>`,
    );
  document.querySelector("#messages").innerHTML = h;
  document.querySelector("#messages").scrollTop = 0;
}
document.querySelectorAll(".chat").forEach(
  (b) =>
    (b.onclick = () => {
      document.querySelector(".active").classList.remove("active");
      b.classList.add("active");
      render(b.dataset.view);
    }),
);
document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("open");
});
document.querySelector(".chats").addEventListener("click", () => {
  if (innerWidth <= 760) document.querySelector(".sidebar").classList.remove("open");
});
let swipeStart = null;
const app = document.querySelector(".app");
app.addEventListener(
  "pointerdown",
  (e) => (swipeStart = { x: e.clientX, y: e.clientY }),
);
app.addEventListener("pointerup", (e) => {
  if (!swipeStart) return;
  const dx = e.clientX - swipeStart.x,
    dy = e.clientY - swipeStart.y;
  if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) && innerWidth <= 760)
    document.querySelector(".sidebar").classList.toggle("open", dx > 0);
  swipeStart = null;
});
render("inicio");
