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
  resultados: ["Resultados", "Consolidación de puntajes"],
  conclusiones: ["Conclusiones", "Hallazgos y recomendaciones"],
  referencias: ["Referencias", "Fuentes consultadas"],
};
const obtain = (r) => (r[6] / 4) * r[7];
const total = rows.reduce((a, r) => a + obtain(r), 0).toFixed(1);
function msg(x, out = false) {
  return `<article class="message ${out ? "out" : ""}">${x}<div class="meta">Modelo FURPS &nbsp; ✓✓</div></article>`;
}
function table(type) {
  return `<div class="table template-table"><table><caption>Factores y ponderación de la plantilla FURPS</caption><thead><tr><th>Sigla</th><th>Característica</th><th>Puntaje</th><th>Factor evaluado</th><th>Puntaje factor</th></tr></thead><tbody>${rows.map((r) => `<tr><td class="score">${r[0]}</td><td>${r[2]}</td><td class="score">${r[0] === "F" ? 30 : r[0] === "U" ? 20 : r[0] === "R" ? 15 : r[0] === "P" ? 20 : 15}</td><td><b>${r[3]}</b></td><td class="score">${r[7]}</td></tr>`).join("")}</tbody><tfoot><tr><td colspan="2">TOTAL DEL MODELO</td><td class="score">100</td><td></td><td class="score">100</td></tr></tfoot></table></div>`;
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
function furpsMetrics() {
  const groups = {};
  rows.forEach((r) => {
    const maximum = r[0] === "F" ? 30 : r[0] === "U" ? 20 : r[0] === "R" ? 15 : r[0] === "P" ? 20 : 15;
    groups[r[0]] ??= { name: r[2], points: 0, maximum: 0 };
    groups[r[0]].points += obtain(r);
    groups[r[0]].maximum += r[7];
    groups[r[0]].weight = maximum;
  });
  return Object.entries(groups).map(([key, group]) => ({
    key,
    ...group,
    percentage: (group.points / group.maximum) * 100,
  }));
}
function modelCards() {
  const descriptions = {
    F: "Capacidades y funciones que Telegram ofrece.",
    U: "Facilidad para aprender, configurar y utilizar.",
    R: "Estabilidad, exactitud y comportamiento predecible.",
    P: "Experiencia visual, respuesta y consistencia.",
    S: "Mantenimiento, recursos y soporte del sistema.",
  };
  return furpsMetrics().map((item, index) => `<div class="furps-card" style="--card-delay:${index * 0.08}s"><div class="furps-card-top"><b>${item.key}</b><span>${item.weight} pts</span></div><strong>${item.name}</strong><p>${descriptions[item.key]}</p><div class="mini-bar"><i style="width:${item.percentage.toFixed(1)}%"></i></div><small>${item.percentage.toFixed(1)}% evaluado</small></div>`).join("");
}
function resultsDashboard() {
  const metrics = furpsMetrics();
  const strongest = metrics.reduce((best, item) => item.percentage > best.percentage ? item : best);
  const weakest = metrics.reduce((worst, item) => item.percentage < worst.percentage ? item : worst);
  const level = Number(total) >= 90 ? "Excelente" : Number(total) >= 75 ? "Alto" : "En desarrollo";
  const bars = metrics.map((item, index) => `<div class="result-metric" style="--metric-value:${item.percentage.toFixed(1)}%; --metric-delay:${index * 0.1}s"><div><span><b>${item.key}</b>${item.name}</span><strong>${item.percentage.toFixed(1)}%</strong></div><div class="result-track"><i></i></div></div>`).join("");
  return `<div class="results-hero"><div><small>ÍNDICE GLOBAL FURPS</small><strong>${total}<em>/100</em></strong><span class="status">${level}</span></div><div class="score-ring" style="--score:${total}%"><b>${total}%</b><small>CUMPLIMIENTO</small></div></div><div class="results-facts"><div><b>${metrics.length}</b><span>dimensiones</span></div><div><b>19</b><span>factores</span></div><div><b>4</b><span>escala máxima</span></div></div><div class="results-chart"><div class="result-section-title"><b>Rendimiento por dimensión</b><span>Comparación de cumplimiento</span></div>${bars}</div><div class="result-insights"><div><small>MEJOR DESEMPEÑO</small><b>${strongest.name}</b><span>${strongest.percentage.toFixed(1)}% de cumplimiento</span></div><div><small>PRIORIDAD DE MEJORA</small><b>${weakest.name}</b><span>${weakest.percentage.toFixed(1)}% de cumplimiento</span></div></div>`;
}
function render(v) {
  document.querySelector("#head").textContent = titles[v][0];
  document.querySelector("#sub").textContent = titles[v][1];
  let h = "";
  if (v === "inicio")
    h =
      msg(
        `<div class="intro-kicker"><span class="tag">INFORME PRINCIPAL</span><span class="live-dot">EVALUACIÓN ACTIVA</span></div><h1>Evaluación de calidad de Telegram</h1><p class="intro-lead">Aplicación de la <b>plantilla FURPS</b> para observar, valorar y consolidar la calidad de Telegram como software de mensajería.</p><div class="intro-context"><span><b>Ingeniería de Software II</b><small>Grupo B1</small></span><span><b>Universidad de La Guajira</b><small>Modelo de calidad</small></span></div><div class="grid intro-grid"><div class="box"><b>Recurso</b><strong>Telegram Messenger</strong><small>Aplicación multiplataforma</small></div><div class="box"><b>Plantilla</b><strong>FURPS</strong><small>5 dimensiones · 19 factores</small></div><div class="box result-box"><b>Resultado</b><strong>${total}<small>/100</small></strong><small>Calidad global</small></div></div>`,
      ) +
      msg(
        `<h2>Justificación del modelo elegido</h2><p>FURPS es la plantilla más pertinente para Telegram: valora <b>Functionality, Usability, Reliability, Performance y Supportability</b>, es decir, lo que la aplicación hace, qué tan fácil es usarla, su confiabilidad, rendimiento y soporte.</p><p><b>Alcance:</b> evaluación académica basada en funciones públicas y documentación. No es una auditoría de seguridad ni una inspección del código del servidor.</p>`,
        true,
      );
  if (v === "proceso")
    h = msg(`<span class="tag">METODOLOGÍA · 6 ETAPAS</span><h2>Cómo se construyó la evaluación</h2><p>El análisis sigue una ruta reproducible: cada etapa transforma la observación en un resultado medible.</p><div class="process"><div class="process-step"><b>01</b><div><strong>Seleccionar</strong><span>Telegram como RED o aplicación web.</span></div></div><div class="process-step"><b>02</b><div><strong>Elegir el modelo</strong><span>FURPS para cubrir calidad funcional y técnica.</span></div></div><div class="process-step"><b>03</b><div><strong>Definir factores</strong><span>19 factores agrupados en 5 dimensiones.</span></div></div><div class="process-step"><b>04</b><div><strong>Valorar</strong><span>Escala de 1 a 4 con evidencia observable.</span></div></div><div class="process-step"><b>05</b><div><strong>Convertir</strong><span>Cada valoración se lleva a su peso porcentual.</span></div></div><div class="process-step"><b>06</b><div><strong>Consolidar</strong><span>Se suman los factores para obtener el total.</span></div></div></div><div class="formula"><small>FÓRMULA APLICADA</small><strong>(Puntaje obtenido ÷ 4) × peso del factor</strong><span>Ejemplo: Seguridad del sistema = (3 ÷ 4) × 10 = 7,5 puntos.</span></div>`, true) + msg(`<h3>Escala valorativa definida</h3><div class="scale scale-enhanced"><span><b>4</b>Excelente<small>100% del criterio</small></span><span><b>3</b>Bueno<small>75% del criterio</small></span><span><b>2</b>Regular<small>50% del criterio</small></span><span><b>1</b>Malo<small>25% del criterio</small></span></div>`, true);
  if (v === "plantilla")
    h = msg(
      `<span class="tag">MODELO · FURPS</span><h2>Las cinco dimensiones de calidad</h2><p>FURPS organiza la evaluación en cinco características y asigna 100 puntos según su importancia. Las tarjetas muestran el peso y el cumplimiento calculado con las valoraciones actuales.</p><div class="furps-cards">${modelCards()}</div><div class="model-total"><span>Peso total del modelo</span><strong>100 puntos</strong></div><div class="table-heading"><b>Tabla completa de factores</b><span>Desplaza horizontalmente en móvil para consultar todas las columnas.</span></div>${table("factors")}`,
    );
  if (v === "resultados")
    h =
      msg(
        `<span class="tag">CONSOLIDACIÓN</span><h2>Resultados de la evaluación FURPS</h2><p>Los puntajes fueron normalizados según el peso de cada factor de la plantilla.</p>${totals()}`,
      ) +
      msg(
        `<span class="tag">PANEL DINÁMICO</span><h2>Lectura visual del resultado</h2><p>El tablero resume el desempeño por dimensión y convierte la tabla de valoración en señales fáciles de comparar.</p>${resultsDashboard()}<div class="result-interpretation"><b>Interpretación</b><p>Telegram alcanza un nivel ${Number(total) >= 90 ? "excelente" : "alto"}. La confiabilidad concentra la principal oportunidad de mejora, mientras que facilidad de uso y rendimiento alcanzan el máximo de su escala.</p></div>`,
        true,
      );
  if (v === "conclusiones")
    {
      const metrics = furpsMetrics();
      const strongest = metrics.reduce((best, item) => item.percentage > best.percentage ? item : best);
      const weakest = metrics.reduce((worst, item) => item.percentage < worst.percentage ? item : worst);
      const level = Number(total) >= 90 ? "Excelente" : Number(total) >= 75 ? "Alto" : "En desarrollo";
      h = msg(`<span class="tag">CIERRE · DECISIÓN</span><h2>Conclusión general</h2><div class="verdict"><div class="verdict-mark">✓</div><div><small>VEREDICTO DE LA EVALUACIÓN</small><strong>Telegram presenta una calidad ${level.toLowerCase()}</strong><span>Resultado final: ${total}/100</span></div></div><p>Con base en la plantilla FURPS, Telegram cumple de forma sólida su propósito de comunicación multiplataforma. La evaluación respalda su uso académico, personal y colaborativo, con oportunidades concretas para fortalecer la confiabilidad.</p><div class="conclusion-findings"><div class="finding"><span>01</span><div><b>Fortaleza observada</b><strong>${strongest.name}</strong><p>Es la dimensión mejor valorada, con ${strongest.percentage.toFixed(1)}% de cumplimiento, lo que confirma una experiencia consistente para el usuario.</p></div></div><div class="finding"><span>02</span><div><b>Aspecto a vigilar</b><strong>${weakest.name}</strong><p>Con ${weakest.percentage.toFixed(1)}%, requiere seguimiento sobre estabilidad, conectividad y comportamiento predecible.</p></div></div><div class="finding"><span>03</span><div><b>Alcance del análisis</b><strong>Evidencia funcional</strong><p>El resultado se basa en funciones públicas y documentación; no sustituye una auditoría del código ni una prueba de seguridad profunda.</p></div></div></div><div class="action-plan"><div><small>PRÓXIMOS PASOS RECOMENDADOS</small><b>01</b><span>Revisar sesiones activas y permisos.</span><b>02</b><span>Activar verificación en dos pasos.</span><b>03</b><span>Repetir la valoración tras observar nuevos escenarios.</span></div></div>`, true);
    }
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
  (e) => {
    if (e.target.closest(".sidebar, button, a")) {
      swipeStart = null;
      return;
    }
    swipeStart = { x: e.clientX, y: e.clientY };
  },
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
