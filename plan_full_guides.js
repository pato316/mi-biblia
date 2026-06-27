// Guías completas opcionales para el plan anual.
// Clave: índice de PLAN_FULL (0-based). Ejemplo: 313 = Mateo 16-18.
// Si una lectura no tiene guía aquí, la app muestra solo el resumen breve.

const PLAN_FULL_GUIDES = {
  313: {
    textTitle: "Texto bíblico",
    text: [
      "Jesús lleva a Pedro, Jacobo y Juan a un monte alto. Allí se transfigura delante de ellos:",
      "\"Resplandeció su rostro como el sol, y sus vestidos se hicieron blancos como la luz\".",
      "Aparecen Moisés y Elías hablando con Jesús. Pedro propone hacer tres enramadas: una para Jesús, otra para Moisés y otra para Elías.",
      "Mientras habla, una nube luminosa los cubre y se oye una voz:",
      "\"Este es mi Hijo amado, en quien tengo complacencia; a él oíd\".",
      "Los discípulos caen con gran temor, pero Jesús se acerca, los toca y les dice:",
      "\"Levantaos, y no temáis\".",
      "Cuando levantan la vista, ya no ven a nadie sino a Jesús solo. Al bajar del monte, Jesús les ordena no contar la visión hasta que el Hijo del Hombre resucite. Luego explica que Elías ya vino, y los discípulos comprenden que se refiere a Juan el Bautista."
    ],
    summary: "Después de anunciar su sufrimiento y muerte, Jesús muestra a tres discípulos una visión anticipada de su gloria. La transfiguración confirma que el camino de la cruz no contradice su identidad. Jesús es el Hijo amado del Padre, superior a Moisés y Elías, y debe ser escuchado.",
    context: [
      "La lectura anterior presentó a Jesús anunciando su muerte y llamando a sus discípulos a tomar la cruz.",
      "Ahora, antes de seguir hacia Jerusalén, tres discípulos contemplan su gloria. Mateo une dos verdades que deben mantenerse juntas: Jesús sufrirá y morirá; Jesús es el Hijo glorioso de Dios.",
      "Moisés representa la ley; Elías representa a los profetas. Su presencia muestra que la historia de Israel apunta hacia Jesús."
    ],
    message: "Jesús es el Hijo amado de Dios, cumplimiento de la ley y los profetas; por eso, aun cuando su camino pase por la cruz, sus discípulos deben escucharlo y confiar en él.",
    explanation: [
      ["Jesús se transfigura - versículos 1-2", "Transfigurarse significa cambiar de apariencia. Jesús no deja de ser humano, pero su gloria queda visible por un momento. El rostro resplandeciente y las vestiduras blancas comunican pureza, gloria y cercanía con Dios."],
      ["Moisés y Elías - versículo 3", "Moisés recuerda la ley, el éxodo y el pacto del Sinaí. Elías recuerda a los profetas y la esperanza de restauración. Ambos son figuras enormes, pero la voz del Padre no dice: escuchen a los tres por igual. Dice: a él oíd. Jesús es el centro."],
      ["Pedro quiere quedarse en la gloria - versículo 4", "Pedro propone hacer enramadas. Puede expresar reverencia, deseo de permanecer allí o confusión sobre lo que está ocurriendo. Pero Jesús no ha terminado su misión: debe bajar del monte y seguir hacia Jerusalén."],
      ["La voz del Padre - versículo 5", "La voz repite ideas ya escuchadas en el bautismo de Jesús: él es el Hijo amado en quien el Padre se complace. Pero ahora añade algo muy importante: a él oíd."],
      ["Temor y consuelo - versículos 6-8", "Los discípulos caen llenos de miedo. Jesús se acerca, los toca y les dice que no teman. Cuando levantan la vista, ven a Jesús solo. Esa imagen resume el centro del discipulado: mirar y escuchar a Cristo."],
      ["Elías y Juan el Bautista - versículos 9-13", "Los escribas enseñaban que Elías debía venir antes del Mesías. Jesús confirma esa expectativa, pero explica que Elías ya vino en la misión de Juan el Bautista. Juan preparó el camino, pero fue rechazado. De la misma manera, el Hijo del Hombre también padecerá."]
    ],
    words: [
      ["Transfiguración", "manifestación visible de la gloria de Jesús."],
      ["Moisés", "mediador de la ley y figura central del Antiguo Testamento."],
      ["Elías", "profeta asociado con la restauración esperada antes del día del Señor."],
      ["Enramadas", "refugios o tiendas temporales hechas con ramas."],
      ["Nube luminosa", "señal de la presencia de Dios, como en varios momentos del Antiguo Testamento."],
      ["Hijo del Hombre", "título que Jesús usa para hablar de su misión, sufrimiento y autoridad."]
    ],
    connectionPrev: [
      "En Mateo 16, Pedro confesó que Jesús es el Cristo, pero no entendió el camino de la cruz. La transfiguración confirma que Jesús sí es glorioso, aunque su gloria pase por sufrimiento.",
      "En Éxodo, Moisés se asocia con el monte, la nube y la revelación de Dios. Aquí Jesús aparece como alguien mayor: el Hijo a quien se debe escuchar.",
      "En Mateo 11, Jesús ya había relacionado a Juan el Bautista con Elías. Aquí esa relación se confirma nuevamente."
    ],
    connectionJesus: [
      "La transfiguración anticipa la gloria de la resurrección y de la venida futura de Cristo.",
      "También enseña que Jesús no es simplemente un maestro más dentro de la historia bíblica. La ley y los profetas encuentran su centro en él.",
      "La voz del Padre corrige una fe que quiere gloria sin cruz: el Hijo amado debe ser escuchado incluso cuando su camino parece difícil."
    ],
    practical: [
      "A veces queremos quedarnos en los momentos de claridad, consuelo o monte, pero Jesús también nos llama a bajar y seguirlo en obediencia diaria.",
      "La fe madura no solo busca experiencias intensas. Aprende a escuchar a Jesús cuando habla de cruz, servicio, paciencia y entrega."
    ],
    reflection: "¿Qué palabra de Jesús necesitas escuchar con más obediencia, aunque no coincida con lo que preferirías?"
  }
};

function gospelGuide(title, summary, movements, message, words, practical, reflection){
  return {
    textTitle: "Texto bíblico",
    text: "Esta lectura recorre " + title + ". Lee el pasaje completo y observa cómo Jesús revela el reino de Dios con palabras, señales, autoridad, compasión y obediencia al Padre.",
    summary,
    context: [
      "Esta sección pertenece a los Evangelios, los relatos que anuncian quién es Jesús, qué hizo, qué enseñó y por qué su muerte y resurrección son el centro de la fe cristiana.",
      "Los Evangelios no son solo biografías modernas. Están escritos para formar fe, mostrar el cumplimiento de las Escrituras y llamar al lector a seguir a Jesús.",
      "Lee cada escena preguntando: qué revela esto sobre Jesús, qué respuesta produce en las personas y cómo avanza el camino hacia la cruz y la resurrección."
    ],
    message,
    explanation: movements,
    words,
    connectionPrev: [
      "Esta fase continúa la historia central: el Dios creador y fiel a sus pactos actúa ahora de manera decisiva en Jesús.",
      "Muchas promesas, imágenes y esperanzas del Antiguo Testamento llegan aquí a un punto de cumplimiento: reino, templo, ley, profetas, perdón y nueva creación."
    ],
    connectionJesus: [
      "La conexión principal no es simbólica sino directa: el texto presenta a Jesús mismo, su identidad, su misión y la respuesta que pide.",
      "Cada lectura ayuda a ver una faceta de Cristo: Hijo, Rey, Siervo, Maestro, Cordero, Pastor, Señor resucitado."
    ],
    practical,
    reflection
  };
}

Object.assign(PLAN_FULL_GUIDES, {
  308: gospelGuide(
    "Mateo 1-3",
    "Mateo presenta a Jesús como el Mesías prometido: hijo de David, hijo de Abraham, nacido por obra de Dios, protegido en medio del conflicto y anunciado por Juan el Bautista.",
    [
      ["Genealogía y nacimiento", "Mateo conecta a Jesús con Abraham y David. Su origen muestra continuidad con las promesas de Israel y, al mismo tiempo, una intervención única de Dios."],
      ["Los magos y Herodes", "Desde el inicio aparecen dos respuestas opuestas: adoración humilde y resistencia violenta. Jesús nace como Rey, pero no según los patrones del poder humano."],
      ["Juan el Bautista", "Juan prepara el camino llamando al arrepentimiento. El bautismo de Jesús lo presenta como el Hijo amado que se identifica con su pueblo."]
    ],
    "Jesús entra en la historia como el Rey prometido y el Hijo amado; su venida cumple la esperanza de Israel y exige una respuesta de fe y arrepentimiento.",
    [["Mesías","rey ungido esperado por Israel."],["Hijo de David","título que conecta a Jesús con la promesa real."],["Arrepentimiento","cambio de dirección ante Dios."]],
    "Recibir a Jesús no es solo admirar su historia; es reconocer su autoridad y preparar el corazón para seguirlo.",
    "¿Qué respuesta ves en ti ante Jesús: búsqueda humilde, indiferencia o resistencia?"
  ),
  309: gospelGuide(
    "Mateo 4-6",
    "Jesús vence la tentación, anuncia el reino y comienza a enseñar una justicia del corazón en el Sermón del Monte.",
    [
      ["Tentación en el desierto", "Jesús responde con la Escritura y permanece fiel donde Israel había fallado. Su obediencia revela confianza plena en el Padre."],
      ["Llamado de discípulos", "El reino no es una idea abstracta; reúne personas que dejan redes, rutinas y seguridades para aprender de Jesús."],
      ["Sermón del Monte", "Las bienaventuranzas y las enseñanzas sobre oración, dinero y relaciones muestran una vida transformada desde dentro."]
    ],
    "El reino de Dios comienza con Jesús y forma personas cuya justicia nace de un corazón rendido al Padre.",
    [["Reino de los cielos","gobierno de Dios llegando por medio de Jesús."],["Bienaventurados","personas verdaderamente bendecidas según Dios."],["Hipocresía","apariencia religiosa sin corazón sincero."]],
    "La fe madura no se queda en conducta externa; permite que Jesús transforme deseos, prioridades y confianza.",
    "¿Qué área de tu vida necesita pasar de apariencia externa a obediencia del corazón?"
  ),
  310: gospelGuide(
    "Mateo 7-9",
    "Jesús concluye el Sermón del Monte y luego muestra su autoridad sanando, perdonando pecados, calmando la tormenta y llamando a Mateo.",
    [
      ["Oír y hacer", "La casa sobre la roca enseña que escuchar a Jesús sin obedecerlo deja la vida vulnerable."],
      ["Autoridad de Jesús", "Las sanidades, el perdón y el dominio sobre la creación revelan que Jesús tiene autoridad sobre enfermedad, pecado, naturaleza y fuerzas espirituales."],
      ["Misericordia", "Al llamar a Mateo y comer con pecadores, Jesús muestra que vino a buscar enfermos, no a confirmar a quienes se creen sanos."]
    ],
    "Jesús enseña con autoridad y actúa con misericordia; la respuesta adecuada es confiar en él y construir la vida sobre su palabra.",
    [["Autoridad","derecho y poder legítimo para enseñar y actuar."],["Misericordia","compasión activa hacia quien necesita gracia."],["Fe","confianza que se acerca a Jesús."]],
    "No basta admirar la enseñanza de Jesús; el llamado es ponerla en práctica y acercarse a él con necesidad real.",
    "¿En qué decisión concreta necesitas construir sobre la roca y no solo escuchar?"
  ),
  311: gospelGuide(
    "Mateo 10-12",
    "Jesús envía a los doce, responde dudas, llama a descansar en él y confronta una religiosidad que pierde de vista la misericordia.",
    [
      ["Misión de los doce", "Los discípulos participan en la obra de Jesús, pero también aprenden que la misión trae oposición y dependencia de Dios."],
      ["Dudas de Juan", "Jesús responde señalando sus obras: los signos del reino confirman que Dios está actuando."],
      ["Descanso y sábado", "Jesús no destruye la ley; revela su intención profunda. La misericordia importa más que una religiosidad dura."]
    ],
    "Seguir a Jesús implica misión, confianza en medio de dudas y descanso bajo su señorío misericordioso.",
    [["Apóstol","enviado con una misión."],["Yugo","imagen de aprendizaje, dirección y carga compartida."],["Sábado","día de descanso que apuntaba al cuidado de Dios."]],
    "Cuando la fe se vuelve carga pesada o juicio frío, vuelve a escuchar la invitación de Jesús: venid a mí.",
    "¿Dónde necesitas recibir el descanso de Jesús en vez de cargar solo?"
  ),
  312: gospelGuide(
    "Mateo 13-15",
    "Jesús enseña con parábolas, revela el valor del reino, alimenta multitudes, camina sobre el agua y redefine la pureza desde el corazón.",
    [
      ["Parábolas del reino", "Las parábolas revelan y también confrontan. El reino puede parecer pequeño, pero crece con poder y tiene valor incomparable."],
      ["Señales de provisión", "La alimentación de multitudes muestra compasión y recuerda que Dios pastorea y sostiene a su pueblo."],
      ["Pureza del corazón", "Jesús enseña que el problema humano no se resuelve solo con rituales externos; lo que contamina sale del corazón."]
    ],
    "El reino de Jesús transforma la comprensión de valor, provisión y pureza: Dios busca un corazón que escucha y confía.",
    [["Parábola","historia que revela una verdad del reino."],["Pureza","condición de vida orientada a Dios."],["Tradición","práctica recibida que debe someterse a la palabra de Dios."]],
    "La pregunta no es solo qué prácticas religiosas mantengo, sino qué está formando mi corazón.",
    "¿Qué revela tu manera de hablar, desear o reaccionar sobre el estado de tu corazón?"
  ),
  314: gospelGuide(
    "Mateo 19-21",
    "Jesús enseña sobre matrimonio, riqueza, humildad y servicio; luego entra en Jerusalén como Rey y purifica el templo.",
    [
      ["Relaciones y riqueza", "Jesús lleva las preguntas éticas a la intención de Dios y muestra que las riquezas pueden competir con el reino."],
      ["Grandeza como servicio", "El Hijo del Hombre no vino para ser servido, sino para servir. La grandeza se redefine desde la entrega."],
      ["Entrada en Jerusalén", "Jesús entra como Rey humilde y confronta un templo lleno de apariencia, pero falto de fruto."]
    ],
    "El Rey que llega a Jerusalén llama a una vida de fidelidad, desprendimiento, humildad y fruto verdadero.",
    [["Hijo del Hombre","título usado por Jesús para su autoridad y sufrimiento."],["Templo","lugar central de adoración en Israel."],["Fruto","evidencia visible de una vida orientada a Dios."]],
    "Jesús no busca apariencia religiosa sino fruto, servicio y una confianza que no esté dominada por posesiones.",
    "¿Qué cosa buena podría estar ocupando el lugar que solo corresponde a Dios?"
  ),
  315: gospelGuide(
    "Mateo 22-24",
    "Jesús responde preguntas tramposas, resume la ley en amor, denuncia la hipocresía y llama a velar ante el futuro.",
    [
      ["Preguntas y respuestas", "Los líderes intentan atrapar a Jesús, pero sus respuestas revelan sabiduría, autoridad y fidelidad a Dios."],
      ["El mayor mandamiento", "Amar a Dios y al prójimo resume la intención de la ley. La obediencia bíblica nunca debe separarse del amor."],
      ["Hipocresía y vigilancia", "Jesús denuncia una religión de apariencia y prepara a sus discípulos para perseverar con discernimiento."]
    ],
    "La verdadera fidelidad une amor a Dios, amor al prójimo, humildad y vigilancia esperanzada.",
    [["Hipocresía","aparentar devoción sin obediencia real."],["Mandamiento","instrucción de Dios para la vida."],["Velar","vivir atentos y fieles ante la venida del Señor."]],
    "La ortodoxia sin amor y la religiosidad sin humildad se vuelven vacías. Jesús llama a una fidelidad íntegra.",
    "¿Tu obediencia está creciendo también en amor y humildad?"
  ),
  316: gospelGuide(
    "Mateo 25-28",
    "Jesús enseña a estar preparados, comparte la última cena, es arrestado y crucificado, resucita y envía a sus discípulos a hacer discípulos.",
    [
      ["Preparación y juicio", "Las parábolas llaman a una espera activa: fidelidad, responsabilidad y amor concreto hacia los pequeños."],
      ["Pasión de Jesús", "La cruz no es accidente. Jesús entrega su vida en obediencia, cargando rechazo, injusticia y sufrimiento."],
      ["Resurrección y misión", "El crucificado resucita y envía a los suyos con autoridad para hacer discípulos de todas las naciones."]
    ],
    "La muerte y resurrección de Jesús son el centro de Mateo: el Rey crucificado vive y envía a su pueblo en misión.",
    [["Pascua","fiesta judía en cuyo contexto Jesús entrega su vida."],["Resurrección","victoria de Dios sobre la muerte."],["Gran Comisión","envío de Jesús a hacer discípulos."]],
    "Vivir la fe cristiana es esperar con fidelidad, recibir la gracia de la cruz y participar en la misión de Jesús.",
    "¿Qué significa para ti seguir a un Rey que venció sirviendo y entregándose?"
  ),
  317: gospelGuide(
    "Marcos 1-3",
    "Marcos presenta a Jesús de manera rápida y poderosa: anuncia el reino, llama discípulos, sana, libera, perdona y confronta oposición.",
    [
      ["Comienzo del evangelio", "Jesús aparece como el cumplimiento esperado: el reino se ha acercado y pide arrepentimiento y fe."],
      ["Autoridad en acción", "Marcos enfatiza hechos: Jesús enseña, sana y libera con autoridad inmediata."],
      ["Oposición temprana", "La misericordia de Jesús hacia necesitados provoca conflicto con quienes priorizan control religioso."]
    ],
    "Jesús trae el reino con autoridad compasiva; seguirlo exige responder con fe, no solo observar sus señales.",
    [["Evangelio","buena noticia de Dios centrada en Jesús."],["Reino","gobierno salvador de Dios."],["Discípulo","aprendiz que sigue a Jesús."]],
    "La autoridad de Jesús no aplasta al necesitado; lo restaura. Acércate a él con honestidad.",
    "¿Qué área de necesidad te cuesta presentar a Jesús?"
  ),
  318: gospelGuide(
    "Marcos 4-6",
    "Jesús enseña parábolas del reino, calma la tormenta, libera, sana, resucita, enfrenta rechazo y alimenta a una multitud.",
    [
      ["Semilla y escucha", "La parábola del sembrador pregunta qué clase de corazón recibe la palabra."],
      ["Poder sobre caos y muerte", "La tormenta, los demonios, la enfermedad y la muerte muestran límites humanos que Jesús atraviesa con autoridad."],
      ["Rechazo y provisión", "Incluso rechazado, Jesús sigue pastoreando a la multitud con enseñanza y alimento."]
    ],
    "El reino crece por la palabra de Jesús y revela su poder sobre todo lo que amenaza la vida.",
    [["Parábola","enseñanza narrativa que revela el reino."],["Fe","confianza en Jesús aun con miedo."],["Compasión","amor que se mueve hacia la necesidad."]],
    "El miedo pregunta si Jesús se preocupa; el evangelio muestra que está presente incluso en la tormenta.",
    "¿Qué tormenta necesitas mirar desde la presencia de Jesús?"
  ),
  319: gospelGuide(
    "Marcos 7-9",
    "Jesús enseña sobre pureza, sana a gentiles y necesitados, es confesado como el Cristo, anuncia la cruz y se transfigura.",
    [
      ["Pureza verdadera", "El problema central no es lo externo sino el corazón. Jesús confronta tradiciones que tapan la intención de Dios."],
      ["Apertura a los gentiles", "Las sanidades fuera de Israel anticipan el alcance amplio de la gracia."],
      ["Cristo y cruz", "Pedro confiesa correctamente, pero debe aprender que el Mesías camina hacia sufrimiento, muerte y resurrección."]
    ],
    "Jesús redefine pureza, fe y mesianismo: seguir al Cristo implica escucharle y tomar el camino de la cruz.",
    [["Gentiles","personas de las naciones no judías."],["Cristo","Mesías, ungido de Dios."],["Transfiguración","manifestación visible de la gloria de Jesús."]],
    "Confesar a Jesús como Cristo debe moldear nuestras expectativas sobre poder, sufrimiento y servicio.",
    "¿Hay alguna idea de éxito que Jesús necesita corregir en ti?"
  ),
  320: gospelGuide(
    "Marcos 10-12",
    "Jesús enseña sobre servicio y discipulado camino a Jerusalén; entra como Rey, purifica el templo y responde a sus opositores.",
    [
      ["Camino de servicio", "Jesús corrige ambiciones de poder: la grandeza del reino se expresa sirviendo."],
      ["Jerusalén y templo", "La entrada y la purificación del templo muestran autoridad real y juicio contra una religión sin fruto."],
      ["Debates finales", "Jesús responde con sabiduría y centra la ley en amar a Dios y al prójimo."]
    ],
    "El Rey que llega a Jerusalén revela una autoridad humilde que llama a servicio, fe y amor íntegro.",
    [["Rescate","liberación mediante un precio; Jesús aplica esta imagen a su muerte."],["Hosanna","clamor de salvación y alabanza."],["Mandamiento","instrucción divina para la vida."]],
    "El discipulado se mide menos por posición y más por servicio, amor y dependencia de Dios.",
    "¿Dónde puedes servir sin buscar reconocimiento?"
  ),
  321: gospelGuide(
    "Marcos 13-16",
    "Jesús llama a perseverar, celebra la cena, es arrestado, crucificado y sepultado; luego resucita y envía a anunciar el evangelio.",
    [
      ["Vigilancia", "Jesús prepara a sus discípulos para tiempos difíciles con una esperanza sobria y fiel."],
      ["Cruz", "Marcos muestra el abandono, la burla y la muerte de Jesús, pero también señales de que su entrega abre acceso a Dios."],
      ["Resurrección", "El sepulcro vacío anuncia que la historia no termina en la cruz. El miedo debe convertirse en testimonio."]
    ],
    "El Hijo de Dios vence no evitando la cruz, sino atravesándola en obediencia y resucitando para abrir camino de vida.",
    [["Pacto","relación establecida por Dios con su pueblo."],["Velo del templo","símbolo de separación que se rasga en la muerte de Jesús."],["Resurrección","victoria sobre la muerte."]],
    "La esperanza cristiana no niega el sufrimiento; nace de un Señor que murió y resucitó.",
    "¿Qué temor necesitas llevar a la luz de la resurrección?"
  ),
  322: gospelGuide(
    "Lucas 1-3",
    "Lucas relata los anuncios y nacimientos de Juan y Jesús, el gozo de los humildes, el comienzo de Juan y la genealogía de Jesús.",
    [
      ["Anuncios de nacimiento", "Dios actúa en lo imposible y prepara tanto al precursor como al Mesías."],
      ["Cánticos y alegría", "María, Zacarías y otros interpretan los hechos como cumplimiento de promesas y misericordia para los humildes."],
      ["Preparación pública", "Juan llama al arrepentimiento y Jesús es presentado como Hijo en quien Dios se complace."]
    ],
    "Dios cumple sus promesas levantando salvación desde lo pequeño, lo humilde y lo inesperado.",
    [["Precursor","quien prepara el camino."],["Magnificat","cántico de María que celebra la misericordia de Dios."],["Genealogía","lista familiar que ubica a Jesús en la historia humana."]],
    "Dios suele iniciar sus obras de maneras que parecen pequeñas. La fe aprende a reconocer su misericordia allí.",
    "¿Qué obra pequeña de Dios podrías estar pasando por alto?"
  ),
  323: gospelGuide(
    "Lucas 4-6",
    "Jesús vence la tentación, anuncia buenas nuevas a los pobres, llama discípulos, sana y enseña el amor a los enemigos.",
    [
      ["Nazaret", "Jesús lee Isaías y presenta su misión: buenas nuevas, libertad, vista y favor de Dios."],
      ["Llamado y sanidad", "Jesús llama a personas comunes y muestra compasión hacia enfermos y excluidos."],
      ["Sermón del llano", "Lucas destaca una ética del reino marcada por misericordia, generosidad y amor incluso al enemigo."]
    ],
    "Jesús anuncia una salvación que alcanza a necesitados y forma una comunidad de misericordia radical.",
    [["Buenas nuevas","anuncio de salvación y favor de Dios."],["Pobres","necesitados materiales y espirituales a quienes Dios mira con misericordia."],["Misericordia","compasión que actúa."]],
    "Seguir a Jesús cambia cómo tratamos al débil, al enemigo y al que no puede devolvernos el favor.",
    "¿A quién te llama Jesús a tratar con misericordia concreta?"
  ),
  324: gospelGuide(
    "Lucas 7-9",
    "Jesús sana, perdona, enseña, calma la tormenta, libera, alimenta a cinco mil y anuncia su muerte.",
    [
      ["Fe y perdón", "El centurión, la viuda y la mujer pecadora muestran distintas formas de necesidad que Jesús recibe con autoridad y gracia."],
      ["Palabra y poder", "Jesús enseña a escuchar bien y revela poder sobre naturaleza, demonios, enfermedad y muerte."],
      ["Confesión y cruz", "La identidad de Jesús como Cristo se une inmediatamente al anuncio de sufrimiento y llamado al discipulado."]
    ],
    "La gracia de Jesús restaura a quienes se acercan con fe, pero también llama a seguirlo por el camino de la cruz.",
    [["Perdón","cancelación de culpa por gracia."],["Fe del centurión","confianza humilde en la autoridad de Jesús."],["Tomar la cruz","seguir a Jesús con entrega y obediencia."]],
    "La gracia que perdona también reordena la vida: recibir a Jesús lleva a seguirlo.",
    "¿Quieres solo ayuda de Jesús o también aprender su camino?"
  ),
  325: gospelGuide(
    "Lucas 10-12",
    "Jesús enseña sobre misión, prójimo, oración, confianza en el Padre, hipocresía y vigilancia.",
    [
      ["Misión y gozo", "Los enviados regresan con alegría, pero Jesús centra su gozo en pertenecer a Dios."],
      ["Buen samaritano", "El amor al prójimo se muestra en misericordia práctica, cruzando barreras sociales."],
      ["Oración y vigilancia", "Jesús enseña a pedir, confiar y vivir libres de ansiedad y codicia."]
    ],
    "El discípulo aprende a amar, orar, confiar y vivir despierto ante Dios.",
    [["Prójimo","persona a quien debo amar con misericordia concreta."],["Padre nuestro","modelo de oración confiada."],["Codicia","deseo desordenado de poseer."]],
    "La espiritualidad de Jesús une contemplación, oración y misericordia práctica.",
    "¿Qué paso concreto convertiría tu compasión en acción?"
  ),
  326: gospelGuide(
    "Lucas 13-15",
    "Jesús llama al arrepentimiento y cuenta parábolas de búsqueda y gozo: la oveja, la moneda y el hijo perdido.",
    [
      ["Arrepentimiento", "Jesús no permite usar tragedias para juzgar a otros; llama a todos a volver a Dios."],
      ["Reino y mesa", "El reino incluye sorpresas: últimos que entran, humildes recibidos y excusas que revelan prioridades."],
      ["Lo perdido hallado", "Las parábolas de Lucas 15 revelan el gozo de Dios al recuperar al perdido."]
    ],
    "Dios llama al arrepentimiento y revela su corazón misericordioso buscando a quienes están perdidos.",
    [["Arrepentimiento","volver a Dios con cambio real."],["Parábola","relato que revela una verdad espiritual."],["Gracia","favor inmerecido de Dios."]],
    "El corazón del Padre corrige tanto la rebeldía visible como la dureza religiosa.",
    "¿Te identificas más con el hijo que se fue o con el hermano que no quería celebrar?"
  ),
  327: gospelGuide(
    "Lucas 16-18",
    "Jesús enseña sobre riqueza, justicia, oración persistente, humildad, fe y recibe a los niños.",
    [
      ["Riqueza y eternidad", "Las parábolas advierten que el uso del dinero revela el corazón y tiene peso espiritual."],
      ["Oración y humildad", "La viuda persistente y el publicano enseñan dependencia, perseverancia y humildad ante Dios."],
      ["Recibir el reino", "Jesús bendice a los niños y muestra que el reino se recibe con humildad, no con mérito."]
    ],
    "El reino reordena la relación con dinero, justicia, oración y estatus: Dios exalta al humilde.",
    [["Mayordomía","administrar lo recibido delante de Dios."],["Justificación","ser declarado justo por Dios."],["Humildad","reconocer necesidad ante Dios."]],
    "La oración cristiana no presume; persevera con confianza y se acerca con humildad.",
    "¿En qué área necesitas dejar de justificarte y simplemente pedir misericordia?"
  ),
  328: gospelGuide(
    "Lucas 19-21",
    "Zaqueo es transformado, Jesús entra en Jerusalén, purifica el templo, confronta opositores y anuncia tiempos difíciles.",
    [
      ["Zaqueo", "La salvación llega a una casa despreciada y produce frutos concretos de restitución y generosidad."],
      ["Jerusalén", "Jesús entra como Rey, pero llora por una ciudad que no reconoce el camino de paz."],
      ["Conflicto y vigilancia", "En el templo, Jesús enseña con autoridad y prepara a los discípulos para perseverar."]
    ],
    "Jesús trae salvación que transforma vidas concretas y llama a reconocer el tiempo de Dios.",
    [["Salvación","rescate y restauración de Dios."],["Restitución","reparar el daño cometido."],["Paz","plenitud y reconciliación según Dios."]],
    "La gracia recibida se vuelve visible en decisiones prácticas, especialmente con dinero, justicia y reparación.",
    "¿Qué fruto concreto mostraría que Jesús ha entrado en tu casa?"
  ),
  329: gospelGuide(
    "Lucas 22-24",
    "Jesús celebra la cena, es arrestado, juzgado y crucificado; resucita, explica las Escrituras en Emaús y asciende.",
    [
      ["Cena y prueba", "Jesús entrega una señal de nuevo pacto mientras sus discípulos muestran debilidad y necesidad de gracia."],
      ["Cruz", "Lucas destaca la inocencia de Jesús, su perdón y la esperanza ofrecida incluso al criminal arrepentido."],
      ["Emaús y ascensión", "El resucitado abre las Escrituras y envía testigos con promesa de poder de lo alto."]
    ],
    "La muerte y resurrección de Jesús cumplen las Escrituras y convierten a discípulos confundidos en testigos.",
    [["Nuevo pacto","relación renovada con Dios por la entrega de Jesús."],["Emaús","camino donde Jesús resucitado explica las Escrituras."],["Testigo","persona que anuncia lo que ha visto y recibido."]],
    "Jesús puede transformar confusión en comprensión cuando aprendemos a leer la Escritura desde su muerte y resurrección.",
    "¿Qué parte de tu historia necesitas volver a mirar a la luz de la resurrección?"
  ),
  330: gospelGuide(
    "Juan 1-3",
    "Juan presenta a Jesús como el Verbo hecho carne, el Cordero de Dios, el nuevo templo y quien ofrece nuevo nacimiento.",
    [
      ["El Verbo", "Jesús no aparece solo como enviado humano; Juan lo presenta como la Palabra eterna que revela a Dios."],
      ["Primeras señales", "El agua en vino y la purificación del templo anuncian transformación y una nueva forma de encuentro con Dios."],
      ["Nicodemo", "La necesidad del nuevo nacimiento muestra que la salvación requiere obra de Dios, no solo conocimiento religioso."]
    ],
    "Jesús revela a Dios plenamente y ofrece vida nueva a quienes creen en él.",
    [["Verbo","Palabra eterna de Dios revelada en Jesús."],["Cordero de Dios","imagen de sacrificio y liberación."],["Nuevo nacimiento","vida espiritual dada por Dios."]],
    "La fe cristiana no es solo mejora moral; es recibir vida nueva de Dios por medio de Jesús.",
    "¿Estás intentando solo mejorar o estás abierto a nacer de nuevo?"
  ),
  331: gospelGuide(
    "Juan 4-6",
    "Jesús habla con la samaritana, sana, confronta oposición, alimenta a cinco mil y se presenta como el pan de vida.",
    [
      ["Agua viva", "Jesús cruza barreras étnicas y morales para ofrecer una vida que sacia la sed profunda."],
      ["Autoridad del Hijo", "Juan muestra la unidad de Jesús con el Padre y la controversia que esto provoca."],
      ["Pan de vida", "La señal del alimento apunta a una necesidad mayor: recibir a Jesús mismo como vida."]
    ],
    "Jesús ofrece vida verdadera: agua viva y pan del cielo para quienes creen.",
    [["Agua viva","vida que Dios da por medio de Jesús."],["Señal","milagro que apunta a la identidad de Jesús."],["Pan de vida","imagen de Jesús como sustento espiritual."]],
    "Podemos buscar en Jesús solo soluciones inmediatas, pero él se ofrece a sí mismo como nuestra vida.",
    "¿Qué sed o hambre profunda estás intentando saciar fuera de Jesús?"
  ),
  332: gospelGuide(
    "Juan 7-9",
    "Jesús enseña en la fiesta, llama a beber de él, se declara luz del mundo y sana a un ciego de nacimiento.",
    [
      ["División ante Jesús", "Sus palabras generan preguntas, resistencia y fe. Juan muestra que no se puede permanecer neutral fácilmente."],
      ["Luz y verdad", "Jesús invita a permanecer en su palabra para conocer la verdad que libera."],
      ["Ciego sanado", "La sanidad física revela una ceguera espiritual más profunda en quienes rechazan a Jesús."]
    ],
    "Jesús es luz y verdad; recibirlo abre los ojos, rechazarlo profundiza la ceguera.",
    [["Luz del mundo","Jesús como revelación y guía de Dios."],["Verdad","realidad revelada por Dios que libera."],["Ceguera espiritual","incapacidad de reconocer a Dios aun teniendo religión."]],
    "La verdadera visión comienza cuando dejamos que Jesús cuestione nuestras certezas.",
    "¿Dónde necesitas que Jesús te dé luz, aunque eso incomode tus seguridades?"
  ),
  333: gospelGuide(
    "Juan 10-12",
    "Jesús se presenta como el buen pastor, resucita a Lázaro, es ungido en Betania y entra en Jerusalén mientras llega su hora.",
    [
      ["Buen pastor", "Jesús conoce, guía y da su vida por sus ovejas. Su liderazgo es sacrificial."],
      ["Lázaro", "La resurrección de Lázaro revela a Jesús como la resurrección y la vida, y acelera la oposición contra él."],
      ["La hora", "La entrada en Jerusalén y la imagen del grano que muere muestran que la gloria de Jesús pasa por entrega."]
    ],
    "Jesús da vida entregando la suya; su gloria se revela en amor sacrificial.",
    [["Buen pastor","Jesús como guía que cuida y entrega su vida."],["Resurrección","vida que vence la muerte."],["Hora","momento decisivo de muerte y glorificación de Jesús."]],
    "Seguir al buen pastor implica aprender una gloria distinta: vida que se entrega por amor.",
    "¿Qué te cuesta confiar al cuidado del buen pastor?"
  ),
  334: gospelGuide(
    "Juan 13-15",
    "Jesús lava los pies, da el mandamiento de amar, consuela a sus discípulos, promete el Espíritu y se presenta como la vid verdadera.",
    [
      ["Lavatorio de pies", "El Señor toma lugar de siervo y muestra el patrón de amor para sus discípulos."],
      ["Despedida y promesa", "Jesús prepara a los suyos para su partida, prometiendo presencia, camino al Padre y el Espíritu."],
      ["Vid verdadera", "La vida fructífera depende de permanecer en Jesús, no de esfuerzo separado de él."]
    ],
    "El amor de Jesús forma una comunidad que sirve, permanece en él y da fruto por el Espíritu.",
    [["Mandamiento nuevo","amar como Jesús amó."],["Consolador","el Espíritu Santo como presencia y ayuda de Dios."],["Permanecer","vivir unidos a Jesús en confianza y obediencia."]],
    "El fruto cristiano nace de permanecer en Jesús y dejar que su amor marque nuestras relaciones.",
    "¿Qué relación necesita ser tocada por el amor humilde de Jesús?"
  ),
  335: gospelGuide(
    "Juan 16-18",
    "Jesús promete el Espíritu, habla de tristeza convertida en gozo, ora por sus discípulos y luego es arrestado y juzgado.",
    [
      ["Obra del Espíritu", "El Espíritu convencerá, guiará a la verdad y sostendrá a los discípulos en ausencia visible de Jesús."],
      ["Oración de Jesús", "Jesús ora por unidad, santificación y misión. Sus discípulos pertenecen al Padre y son enviados al mundo."],
      ["Arresto y juicio", "Aun arrestado, Jesús aparece sereno y soberano; su reino no funciona según violencia humana."]
    ],
    "Jesús prepara a los suyos para vivir en el mundo sostenidos por el Espíritu, unidos al Padre y enviados con verdad.",
    [["Espíritu Santo","presencia activa de Dios en los creyentes."],["Santificar","apartar y formar para Dios."],["Reino no de este mundo","autoridad de Jesús distinta del poder político violento."]],
    "La oración de Jesús da identidad: perteneces a Dios, eres formado por su verdad y enviado al mundo.",
    "¿Qué parte de la oración de Jesús necesitas recibir como palabra para ti?"
  ),
  336: gospelGuide(
    "Juan 19-21",
    "Jesús es crucificado, muere y es sepultado; resucita, se aparece a sus discípulos y restaura a Pedro.",
    [
      ["Cruz consumada", "Juan presenta la muerte de Jesús como cumplimiento: el Cordero entrega su vida y declara consumada su obra."],
      ["Encuentros con el resucitado", "María, Tomás y los discípulos reciben señales personales que transforman dolor, duda y miedo."],
      ["Restauración de Pedro", "Jesús no solo perdona; vuelve a llamar al discípulo caído a amar y pastorear."]
    ],
    "El crucificado resucitado completa la obra de salvación y restaura a sus discípulos para amar y servir.",
    [["Consumado es","declaración de Jesús de que su obra ha llegado a cumplimiento."],["Tomás","discípulo cuya duda es encontrada por la gracia de Jesús."],["Apacentar","cuidar y pastorear al pueblo de Jesús."]],
    "El fracaso no tiene la última palabra cuando el resucitado restaura y vuelve a llamar.",
    "¿Qué fracaso necesitas poner delante de Jesús para escuchar de nuevo su llamado?"
  )
});
