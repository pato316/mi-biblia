// Plan de lectura — Fase 1: Historia central de la Biblia
// Contenido pre-generado con la estructura del tutor bíblico.
// ref: {book, chapter, vStart, vEnd} para localizar el texto en la Biblia.

const PLAN = [
  {
    day: 1, phase: "1 · Historia central", title: "La creación",
    ref: { book: "Génesis", chapter: 1, vStart: 1, vEnd: 31, label: "Génesis 1:1–2:3", extraChapter: 2, extraEnd: 3 },
    summary: "Dios crea el mundo de forma ordenada y lo declara bueno. El ser humano es creado a su imagen y el séptimo día Dios descansa.",
    context: "Es el primer texto de la Biblia, atribuido tradicionalmente a Moisés. Presenta a Dios como origen de todo. No es un tratado científico, sino una declaración teológica: hay un solo Dios y todo lo creado depende de él.",
    message: "Dios es el Creador soberano y todo lo que hace es bueno. El ser humano tiene un lugar único, hecho a imagen de Dios.",
    explanation: "El relato sigue un ritmo de seis días con la fórmula repetida 'y vio Dios que era bueno'. La luz, el cielo, la tierra, los astros, los seres vivos y finalmente el hombre y la mujer. El día séptimo Dios reposa, estableciendo un patrón de descanso.",
    words: [
      ["Crear (bará)", "verbo hebreo usado solo para la acción creadora de Dios, hacer algo nuevo de la nada."],
      ["Imagen de Dios", "el ser humano refleja a Dios y tiene dignidad y responsabilidad sobre la creación."]
    ],
    connectionPrev: "",
    connectionJesus: "El Nuevo Testamento (Juan 1:1-3) retoma 'En el principio' y presenta a Jesús como aquel por quien todo fue creado. Es una conexión explícita.",
    practical: "Reconocer que todo lo que existe tiene origen y propósito en Dios cambia cómo vemos el mundo y a nosotros mismos.",
    reflection: "¿Qué significa para ti que el ser humano fue creado a imagen de Dios?"
  },
  {
    day: 2, phase: "1 · Historia central", title: "La caída",
    ref: { book: "Génesis", chapter: 3, vStart: 1, vEnd: 24, label: "Génesis 3:1–24" },
    summary: "La serpiente tienta a la mujer, ella y el hombre desobedecen a Dios, y entran la vergüenza, la culpa y la separación. Dios anuncia consecuencias pero también una primera promesa de esperanza.",
    context: "Continúa el relato de los orígenes. Explica por qué el mundo, siendo creado bueno, está marcado por el dolor y la muerte. Es la raíz del concepto bíblico de pecado.",
    message: "El pecado quiebra la relación con Dios, con los demás y con la creación. Pero Dios no abandona al ser humano.",
    explanation: "La tentación empieza distorsionando lo que Dios dijo ('¿Conque Dios os ha dicho...?'). Tras desobedecer, Adán y Eva se esconden. Dios pronuncia consecuencias, pero en 3:15 hay una promesa velada de victoria sobre el mal.",
    words: [
      ["Pecado", "ruptura de la relación con Dios por desconfianza y desobediencia."],
      ["Protoevangelio", "nombre que se da a Génesis 3:15, la primera insinuación del evangelio."]
    ],
    connectionPrev: "Contrasta con Génesis 1-2: la creación buena ahora queda dañada por la desobediencia humana.",
    connectionJesus: "Génesis 3:15 ('te herirá en la cabeza') se interpreta tradicionalmente como anuncio de Cristo venciendo al mal. Es interpretación cristiana clásica, no afirmación explícita del texto.",
    practical: "La tentación suele empezar poniendo en duda lo que Dios dijo. Conocer su palabra ayuda a discernir.",
    reflection: "¿En qué áreas te cuesta confiar en lo que Dios dice?"
  },
  {
    day: 3, phase: "1 · Historia central", title: "El llamado de Abraham",
    ref: { book: "Génesis", chapter: 12, vStart: 1, vEnd: 9, label: "Génesis 12:1–9" },
    summary: "Dios llama a Abram a dejar su tierra y le promete hacer de él una gran nación y bendición para todas las familias de la tierra.",
    context: "Después de la dispersión de Babel, Dios elige a un hombre para iniciar su plan de restauración. Aquí empieza la historia del pueblo de Israel.",
    message: "Dios toma la iniciativa y promete bendecir al mundo a través de Abraham y su descendencia.",
    explanation: "El llamado incluye una orden ('vete de tu tierra') y una promesa séptuple de bendición. Abram obedece y comienza un viaje de fe sin conocer el destino final.",
    words: [
      ["Pacto", "acuerdo solemne iniciado por Dios con compromisos y promesas."],
      ["Bendición", "favor de Dios que da vida, fecundidad y propósito."]
    ],
    connectionPrev: "Responde al desorden de Génesis 3-11: Dios empieza a restaurar lo que el pecado dañó, eligiendo a una familia para bendecir a todas.",
    connectionJesus: "Gálatas 3 conecta esta promesa con Jesús, descendiente de Abraham por quien todas las naciones son bendecidas. Conexión explícita del NT.",
    practical: "La fe a veces significa avanzar sin ver el camino completo, confiando en quien promete.",
    reflection: "¿Hay algún 'paso de fe' que sientes que deberías dar?"
  },
  {
    day: 4, phase: "1 · Historia central", title: "La Pascua",
    ref: { book: "Éxodo", chapter: 12, vStart: 1, vEnd: 14, label: "Éxodo 12:1–14" },
    summary: "Dios instituye la Pascua: cada familia sacrifica un cordero y marca sus puertas con su sangre para ser librada del juicio en Egipto.",
    context: "Israel está esclavo en Egipto. Tras nueve plagas, esta es la décima y decisiva. La Pascua se convierte en la fiesta fundacional del pueblo.",
    message: "Dios libera a su pueblo, y la liberación pasa por la sangre de un cordero que protege de la muerte.",
    explanation: "Las instrucciones son detalladas: cordero sin defecto, sangre en los postes, comer con prisa listos para salir. La sangre es la señal: donde está, la muerte 'pasa de largo'.",
    words: [
      ["Pascua (Pésaj)", "del verbo 'pasar de largo'; la fiesta que recuerda la liberación de Egipto."],
      ["Cordero sin defecto", "víctima perfecta cuya sangre protege al pueblo."]
    ],
    connectionPrev: "Cumple la promesa hecha a Abraham: Dios forma y libera a la nación prometida.",
    connectionJesus: "El NT llama a Jesús 'nuestro Cordero pascual' (1 Corintios 5:7) y Juan el Bautista lo presenta como 'el Cordero de Dios'. Conexión explícita y central.",
    practical: "La liberación que Dios ofrece tiene un costo y una señal; no es algo que nos ganamos, sino que recibimos.",
    reflection: "¿Qué significa para ti la idea de ser 'liberado'?"
  },
  {
    day: 5, phase: "1 · Historia central", title: "Los Diez Mandamientos",
    ref: { book: "Éxodo", chapter: 20, vStart: 1, vEnd: 17, label: "Éxodo 20:1–17" },
    summary: "Dios entrega a Israel los diez mandamientos: cómo relacionarse con él y cómo relacionarse entre ellos.",
    context: "Tras salir de Egipto, Israel llega al monte Sinaí. Dios establece su pacto y da la ley que definirá la vida del pueblo.",
    message: "La ley no es para ganarse a Dios, sino la respuesta de un pueblo ya liberado: vivir distinto porque pertenece a él.",
    explanation: "Los primeros mandamientos tratan la relación con Dios (no otros dioses, no ídolos, su nombre, el sábado). Los siguientes, la relación con el prójimo (honrar padres, no matar, no robar, etc.).",
    words: [
      ["Ley (Torá)", "instrucción o enseñanza; más que reglas, es un camino de vida."],
      ["Pacto del Sinaí", "acuerdo entre Dios e Israel con la ley como su marco."]
    ],
    connectionPrev: "Sigue a la liberación de la Pascua: primero Dios salva, luego enseña a vivir en libertad.",
    connectionJesus: "Jesús resume la ley en amar a Dios y al prójimo (Mateo 22:37-40) y dice que vino a cumplirla, no a abolirla. Conexión explícita.",
    practical: "Las normas de Dios buscan proteger relaciones sanas, no quitar libertad.",
    reflection: "¿Cuál de estos mandamientos te resulta más desafiante hoy?"
  },
  {
    day: 6, phase: "1 · Historia central", title: "El pacto con David",
    ref: { book: "2 Samuel", chapter: 7, vStart: 8, vEnd: 16, label: "2 Samuel 7:8–16" },
    summary: "Dios promete a David que su descendencia y su reino permanecerán para siempre.",
    context: "David, rey de Israel, quiere construir un templo. Dios responde con una promesa mayor: edificará una 'casa' (dinastía) duradera a partir de David.",
    message: "Dios promete un rey eterno de la línea de David, ampliando su plan de salvación.",
    explanation: "El juego de palabras es clave: David quiere hacer una casa (templo) para Dios, pero Dios hará una casa (dinastía) para David. La promesa apunta más allá de Salomón.",
    words: [
      ["Casa", "aquí significa dinastía o linaje, no un edificio."],
      ["Trono eterno", "reino que no terminará, base de la esperanza mesiánica."]
    ],
    connectionPrev: "Continúa la línea de promesas: de Abraham a Israel, ahora a un rey y su reino.",
    connectionJesus: "El NT presenta a Jesús como 'hijo de David' y heredero de este trono eterno (Lucas 1:32-33). Conexión explícita.",
    practical: "Las promesas de Dios suelen ser más grandes que nuestras propias ideas de lo que queremos darle.",
    reflection: "¿Alguna vez Dios respondió a algo tuyo de una forma mayor a la que esperabas?"
  },
  {
    day: 7, phase: "1 · Historia central", title: "El siervo sufriente",
    ref: { book: "Isaías", chapter: 53, vStart: 1, vEnd: 12, label: "Isaías 53:1–12" },
    summary: "Isaías describe a un siervo que sufre y muere cargando el pecado de muchos, y por cuyas heridas vienen sanidad y perdón.",
    context: "Escrito siglos antes de Jesús, en un tiempo de juicio y esperanza para Israel. Es uno de los textos más citados por los primeros cristianos.",
    message: "El sufrimiento de este siervo no es en vano: lleva el castigo de otros para traer paz.",
    explanation: "El texto describe a alguien despreciado, herido 'por nuestras rebeliones', que calla ante la injusticia 'como cordero', y que tras su muerte ve fruto. Es un retrato del sufrimiento redentor.",
    words: [
      ["Siervo", "figura misteriosa en Isaías que sufre por el pueblo."],
      ["Expiación", "acción de cubrir o quitar el pecado para restaurar la relación con Dios."]
    ],
    connectionPrev: "Profundiza la esperanza del rey davídico, mostrando que la salvación pasará por el sufrimiento.",
    connectionJesus: "El NT aplica este pasaje directamente a Jesús (Hechos 8:32-35). Conexión explícita y muy fuerte.",
    practical: "El dolor, cuando se entrega a Dios, puede tener un sentido que no vemos en el momento.",
    reflection: "¿Cómo te impacta la idea de que alguien cargue voluntariamente un peso que no le correspondía?"
  },
  {
    day: 8, phase: "2 · Vida de Jesús", title: "El anuncio a María",
    ref: { book: "Lucas", chapter: 1, vStart: 26, vEnd: 38, label: "Lucas 1:26–38" },
    summary: "El ángel Gabriel anuncia a María que tendrá un hijo, Jesús, que será llamado Hijo del Altísimo y reinará para siempre.",
    context: "Inicio del evangelio de Lucas, dirigido a un público amplio. Marca el paso del Antiguo al Nuevo Testamento.",
    message: "Dios cumple sus promesas de un modo inesperado, a través de una joven dispuesta a confiar.",
    explanation: "Gabriel saluda a María, ella se turba, recibe el anuncio y pregunta cómo será posible. La respuesta apela al poder de Dios. María responde con disponibilidad: 'hágase conmigo conforme a tu palabra'.",
    words: [
      ["Hijo del Altísimo", "título que vincula a Jesús con el rey prometido a David."],
      ["Encarnación", "Dios haciéndose humano en Jesús."]
    ],
    connectionPrev: "Cumple directamente el pacto con David (día 6): el niño recibirá 'el trono de David'.",
    connectionJesus: "Es el comienzo de la vida de Jesús en la tierra. Conexión explícita: aquí empieza el cumplimiento.",
    practical: "La disponibilidad ante Dios no exige entenderlo todo, sino confiar.",
    reflection: "¿Qué te ayudaría a responder con más confianza ante lo que no entiendes?"
  },
  {
    day: 9, phase: "2 · Vida de Jesús", title: "El nacimiento de Jesús",
    ref: { book: "Lucas", chapter: 2, vStart: 1, vEnd: 20, label: "Lucas 2:1–20" },
    summary: "Jesús nace en Belén en circunstancias humildes. Unos pastores reciben el anuncio de los ángeles y van a verlo.",
    context: "Lucas sitúa el nacimiento en un marco histórico concreto (censo de Augusto). Destaca que la noticia llega primero a gente sencilla.",
    message: "El Salvador prometido llega con humildad, y la buena noticia es para todos, empezando por los más humildes.",
    explanation: "El viaje a Belén, el pesebre por falta de lugar, el anuncio angélico a los pastores y su visita. El contraste entre la gloria del anuncio y la humildad del entorno es central.",
    words: [
      ["Belén", "ciudad de David, lugar profetizado del nacimiento del Mesías."],
      ["Pastores", "gente común; los primeros en recibir la noticia."]
    ],
    connectionPrev: "Cumple el anuncio del día 8 y la promesa davídica: nace en la ciudad de David.",
    connectionJesus: "Es el nacimiento de Jesús mismo. Conexión explícita.",
    practical: "Dios suele actuar lejos de los reflectores, en lo sencillo y lo cotidiano.",
    reflection: "¿Dónde podrías estar esperando a Dios solo en lo grande y perdiéndolo en lo pequeño?"
  },
  {
    day: 10, phase: "2 · Vida de Jesús", title: "El comienzo del ministerio",
    ref: { book: "Marcos", chapter: 1, vStart: 1, vEnd: 15, label: "Marcos 1:1–15" },
    summary: "Juan el Bautista prepara el camino, Jesús es bautizado y tentado, y comienza a predicar: el reino de Dios se ha acercado.",
    context: "Marcos es el evangelio más breve y directo. Va al grano: presenta a Jesús en acción desde el primer capítulo.",
    message: "Con Jesús comienza algo nuevo: el reino de Dios llega y llama a un cambio de vida.",
    explanation: "Juan anuncia a uno mayor que él. En el bautismo, una voz del cielo confirma a Jesús. Tras la tentación, Jesús proclama su mensaje central: 'arrepentíos y creed en el evangelio'.",
    words: [
      ["Evangelio", "buena noticia; aquí, que Dios reina y salva en Jesús."],
      ["Arrepentirse", "cambiar de mente y de dirección, volverse a Dios."],
      ["Reino de Dios", "el gobierno de Dios irrumpiendo en el mundo."]
    ],
    connectionPrev: "Conecta con Isaías (día 7) y los profetas: Marcos abre citando la promesa del mensajero.",
    connectionJesus: "Es el inicio del ministerio público de Jesús. Conexión explícita.",
    practical: "Creer la buena noticia incluye una invitación a cambiar de rumbo.",
    reflection: "¿Qué 'cambio de dirección' sientes que Dios podría estar invitándote a dar?"
  },
  {
    day: 11, phase: "2 · Vida de Jesús", title: "El Verbo hecho carne",
    ref: { book: "Juan", chapter: 1, vStart: 1, vEnd: 18, label: "Juan 1:1–18" },
    summary: "Juan presenta a Jesús como el Verbo eterno, que estaba con Dios y era Dios, y que se hizo carne para habitar entre nosotros.",
    context: "El evangelio de Juan abre con un prólogo poético y profundo. Mira a Jesús desde la eternidad, no desde su nacimiento.",
    message: "Jesús no es solo un gran maestro: es Dios mismo hecho humano, la luz que vino al mundo.",
    explanation: "El prólogo retoma 'En el principio' de Génesis. El Verbo (la Palabra) es agente de la creación, fuente de vida y luz, y se hace carne. Quienes lo reciben llegan a ser hijos de Dios.",
    words: [
      ["Verbo (Logos)", "la Palabra de Dios; en Juan, una persona: Jesús."],
      ["Encarnación", "Dios haciéndose carne, viviendo entre los humanos."],
      ["Gracia", "favor inmerecido de Dios."]
    ],
    connectionPrev: "Enlaza directamente con la creación (día 1): 'En el principio' aparece en ambos textos.",
    connectionJesus: "Es una declaración explícita y central sobre la identidad de Jesús.",
    practical: "Acercarse a Jesús es acercarse a Dios mismo; no es una figura lejana.",
    reflection: "¿Qué cambia si piensas que en Jesús Dios quiso acercarse a ti personalmente?"
  },
  {
    day: 12, phase: "2 · Vida de Jesús", title: "¿Quién dicen que soy?",
    ref: { book: "Marcos", chapter: 8, vStart: 27, vEnd: 38, label: "Marcos 8:27–38" },
    summary: "Pedro reconoce a Jesús como el Cristo. Jesús anuncia su muerte y resurrección, y enseña que seguirlo implica tomar la cruz.",
    context: "Punto de giro en Marcos. Hasta aquí Jesús ha mostrado poder; ahora revela que el camino del Mesías pasa por el sufrimiento.",
    message: "Reconocer quién es Jesús lleva a una decisión: seguirlo cuesta, pero da vida verdadera.",
    explanation: "Jesús pregunta quién dicen que es. Pedro responde 'el Cristo'. Jesús empieza a hablar de su muerte; Pedro lo rechaza y es corregido. Luego enseña sobre negarse a sí mismo y seguirlo.",
    words: [
      ["Cristo (Mesías)", "el Ungido, el rey prometido."],
      ["Tomar la cruz", "estar dispuesto a renunciar y sufrir por seguir a Jesús."]
    ],
    connectionPrev: "Une la esperanza del Mesías (días 6-7) con el siervo sufriente: el Cristo reinará por el camino de la cruz.",
    connectionJesus: "Es enseñanza directa de Jesús sobre su propia identidad y misión. Conexión explícita.",
    practical: "Seguir a Jesús no es solo creer ideas, sino una decisión que afecta la vida entera.",
    reflection: "Si te preguntaran '¿quién es Jesús para ti?', ¿qué responderías hoy?"
  },
  {
    day: 13, phase: "2 · Vida de Jesús", title: "El camino a Emaús",
    ref: { book: "Lucas", chapter: 24, vStart: 13, vEnd: 35, label: "Lucas 24:13–35" },
    summary: "Tras la resurrección, Jesús camina con dos discípulos que no lo reconocen y les explica cómo toda la Escritura hablaba de él.",
    context: "Ocurre el mismo día de la resurrección. Los discípulos están desanimados; no entienden lo que ha pasado.",
    message: "Jesús resucitado abre las Escrituras y se da a conocer; toda la historia bíblica apuntaba a él.",
    explanation: "Dos discípulos caminan tristes. Jesús se une, les pregunta, y luego les explica 'en todas las Escrituras lo que de él decían'. Lo reconocen al partir el pan, y vuelven con gozo.",
    words: [
      ["Resurrección", "Jesús vuelto a la vida, corporalmente, tras su muerte."],
      ["Partir el pan", "gesto que evoca la última cena y la comunión."]
    ],
    connectionPrev: "Recoge todo el recorrido: ley, profetas y promesas (días 1-12) hallan su sentido en Jesús.",
    connectionJesus: "Jesús mismo enseña que el AT lo anunciaba. Conexión explícita y clave para todo el plan.",
    practical: "A veces Dios camina con nosotros aunque no lo reconozcamos en el momento.",
    reflection: "¿Hay un momento difícil en el que, mirando atrás, ves que no estabas solo?"
  },
  {
    day: 14, phase: "3 · Iglesia y cartas", title: "Adán y Cristo",
    ref: { book: "Romanos", chapter: 5, vStart: 12, vEnd: 21, label: "Romanos 5:12–21" },
    summary: "Pablo contrasta a Adán, por quien entró el pecado y la muerte, con Cristo, por quien vienen la gracia y la vida para muchos.",
    context: "Carta de Pablo a los cristianos de Roma. Aquí resume la historia de la salvación en dos figuras representativas.",
    message: "Lo que se perdió en Adán se recupera y se supera en Cristo: la gracia abunda más que el pecado.",
    explanation: "Pablo establece un paralelo: por un hombre (Adán) entró el pecado; por un hombre (Cristo) viene la justificación. El énfasis está en que la gracia es mayor que la caída.",
    words: [
      ["Justificación", "ser declarado justo ante Dios por la gracia, no por méritos."],
      ["Gracia", "don gratuito de Dios que da vida y perdón."]
    ],
    connectionPrev: "Cierra el arco: conecta la caída (día 2) con la obra de Jesús (días 8-13). Es el resumen teológico del plan.",
    connectionJesus: "Explica el significado de la muerte y resurrección de Jesús. Conexión explícita.",
    practical: "Nuestra identidad no se define por lo heredado en Adán, sino por lo ofrecido en Cristo.",
    reflection: "¿Qué pesa más en tu vida diaria: la sensación de fallar, o la confianza en la gracia?"
  }
];

// Resumen general de la Biblia (6 actos de la historia)
const OVERVIEW = [
  { act: "Creación", color: "c-teal", desc: "Dios crea un mundo bueno y al ser humano a su imagen.", books: "Génesis 1–2", read:{book:"Génesis",chapter:1,label:"Génesis 1"} },
  { act: "Caída", color: "c-coral", desc: "El pecado quiebra la relación con Dios y daña la creación.", books: "Génesis 3–11", read:{book:"Génesis",chapter:3,label:"Génesis 3"} },
  { act: "Pacto y promesa", color: "c-amber", desc: "Dios elige a Abraham e Israel para bendecir al mundo.", books: "Génesis 12 – Malaquías", read:{book:"Génesis",chapter:12,label:"Génesis 12"} },
  { act: "Reyes y profetas", color: "c-purple", desc: "Israel pide rey; los profetas anuncian un Mesías.", books: "Samuel – Profetas", read:{book:"Isaías",chapter:53,label:"Isaías 53"} },
  { act: "Jesús", color: "c-blue", desc: "Dios se hace humano, muere y resucita para salvar.", books: "Evangelios", read:{book:"Juan",chapter:1,label:"Juan 1"} },
  { act: "Iglesia y nueva creación", color: "c-green", desc: "El pueblo de Dios crece; al final, todo es restaurado.", books: "Hechos – Apocalipsis", read:{book:"Apocalipsis",chapter:21,label:"Apocalipsis 21"} }
];
