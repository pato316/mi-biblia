// Parte C: Mateo a Apocalipsis (días 309-395) — Nuevo Testamento
const PLAN_FULL_C = [
["Mateo",1,3,"La genealogía y el nacimiento de Jesús; los magos lo buscan, la familia huye a Egipto, y Juan el Bautista prepara su camino."],
["Mateo",4,6,"Jesús es tentado y comienza a predicar el reino; en el Sermón del Monte enseña las bienaventuranzas y una justicia del corazón."],
["Mateo",7,9,"Termina el Sermón del Monte; Jesús sana enfermos, calma la tormenta, perdona pecados y llama a Mateo, mostrando su autoridad."],
["Mateo",10,12,"Jesús envía a los doce, responde a las dudas de Juan, y enfrenta a los fariseos enseñando sobre el descanso y la misericordia."],
["Mateo",13,15,"Las parábolas del reino; Jesús alimenta a multitudes, camina sobre el agua y enseña que lo que contamina sale del corazón."],
["Mateo",16,18,"Pedro confiesa que Jesús es el Cristo; la transfiguración, el anuncio de la cruz y enseñanzas sobre la humildad y el perdón."],
["Mateo",19,21,"Sobre el matrimonio, las riquezas y el servicio; Jesús entra en Jerusalén aclamado y purifica el templo con autoridad."],
["Mateo",22,24,"Jesús responde a las trampas de sus opositores, denuncia la hipocresía religiosa y anuncia los sucesos del fin de los tiempos."],
["Mateo",25,28,"Parábolas sobre estar preparados; la última cena, el arresto, la crucifixión y la gloriosa resurrección de Jesús, que envía a los suyos."],

["Marcos",1,3,"Marcos presenta a Jesús en acción: bautizado, tentado, predicando el reino, sanando, perdonando y llamando a sus discípulos."],
["Marcos",4,6,"Parábolas del reino y milagros: calma la tormenta, sana, resucita, es rechazado en Nazaret y alimenta a cinco mil."],
["Marcos",7,9,"Jesús enseña sobre la verdadera pureza, sana a más personas, es confesado como el Cristo, y se transfigura ante sus discípulos."],
["Marcos",10,12,"Camino a Jerusalén enseña sobre el servicio; entra en la ciudad, purifica el templo y confronta a los líderes religiosos."],
["Marcos",13,16,"Jesús anuncia el fin, celebra la última cena, es arrestado, crucificado y sepultado, y resucita, enviando a predicar el evangelio."],

["Lucas",1,3,"Lucas relata los anuncios y nacimientos de Juan y de Jesús; Juan prepara el camino y se presenta la genealogía de Jesús."],
["Lucas",4,6,"Jesús es tentado, predica en Nazaret, llama a sus discípulos, sana, y enseña el amor a los enemigos en el sermón del llano."],
["Lucas",7,9,"Milagros y enseñanzas: sana, perdona a una pecadora, calma la tormenta, alimenta a cinco mil y anuncia su muerte."],
["Lucas",10,12,"El buen samaritano y la oración; Jesús enseña a confiar en el Padre, denuncia la hipocresía y llama a estar atentos."],
["Lucas",13,15,"Llamados al arrepentimiento; parábolas de la oveja, la moneda y el hijo pródigo, que revelan el corazón de Dios que busca al perdido."],
["Lucas",16,18,"Parábolas sobre la riqueza y la oración; Jesús enseña sobre el reino, sana, y bendice a los niños, recibiendo a los humildes."],
["Lucas",19,21,"Zaqueo es transformado; Jesús entra en Jerusalén, purifica el templo, responde a sus opositores y anuncia el futuro."],
["Lucas",22,24,"La última cena, el arresto, el juicio y la crucifixión; Jesús resucita, camina con los de Emaús y asciende al cielo."],

["Juan",1,3,"El Verbo se hizo carne; Juan da testimonio, Jesús hace su primer milagro, purifica el templo, y habla con Nicodemo del nuevo nacimiento."],
["Juan",4,6,"Jesús habla con la samaritana, sana a distancia, se declara Señor del sábado, alimenta a cinco mil y se presenta como pan de vida."],
["Juan",7,9,"Enseña en la fiesta y divide opiniones; se declara la luz del mundo, libera con la verdad y sana a un ciego de nacimiento."],
["Juan",10,12,"El buen pastor da su vida; resucita a Lázaro, es ungido en Betania y entra en Jerusalén, mientras se acerca su hora."],
["Juan",13,15,"Jesús lava los pies de los discípulos, da el mandamiento de amar, promete el Espíritu y se presenta como la vid verdadera."],
["Juan",16,18,"Promesa del Consolador y la oración de Jesús por los suyos; luego es arrestado, y Pedro lo niega mientras Jesús es juzgado."],
["Juan",19,21,"La crucifixión, muerte y sepultura de Jesús; resucita, se aparece a los discípulos y restaura a Pedro con amor."],

["Hechos",1,3,"Jesús asciende y envía el Espíritu en Pentecostés; Pedro predica, la iglesia nace y crece, y se sana a un cojo en el templo."],
["Hechos",4,6,"Los apóstoles predican con valentía pese a la oposición; la iglesia comparte sus bienes y elige a siete para servir."],
["Hechos",7,9,"Esteban es martirizado, el evangelio se extiende a Samaria y Etiopía, y Saulo se convierte camino a Damasco."],
["Hechos",10,12,"El evangelio llega a los gentiles con Cornelio; la iglesia de Antioquía crece, y Pedro es librado de la cárcel."],
["Hechos",13,15,"Pablo y Bernabé inician su misión; el concilio de Jerusalén afirma que la salvación es por gracia, no por la ley."],
["Hechos",16,18,"Pablo viaja por Macedonia y Grecia; predica en Filipos, Tesalónica, Atenas y Corinto, fundando iglesias entre dificultades."],
["Hechos",19,21,"El ministerio en Éfeso y el alboroto allí; Pablo se despide de los ancianos y sube a Jerusalén pese al peligro."],
["Hechos",22,24,"Pablo es arrestado, da su testimonio y defiende su fe ante las autoridades judías y el gobernador Félix."],
["Hechos",25,28,"Pablo apela al César, testifica ante Agripa, naufraga camino a Roma, y allí predica el reino con libertad."],

["Romanos",1,3,"Todos, judíos y gentiles, están bajo pecado; Pablo muestra que nadie es justo por sí mismo y que se necesita la justicia de Dios."],
["Romanos",4,6,"Abraham fue justificado por fe; por Cristo tenemos paz con Dios, y muertos al pecado vivimos una vida nueva en él."],
["Romanos",7,9,"La lucha con el pecado y la ley; no hay condenación en Cristo, y Pablo reflexiona sobre el propósito de Dios con Israel."],
["Romanos",10,12,"La salvación es por fe para todos; Dios no ha rechazado a Israel, y los creyentes se ofrecen como sacrificio vivo y santo."],
["Romanos",13,16,"Sobre la sujeción a las autoridades y el amor que cumple la ley; Pablo exhorta a recibirse unos a otros y envía sus saludos."],

["1 Corintios",1,3,"Pablo aborda las divisiones en la iglesia; la cruz parece locura, pero es el poder y la sabiduría de Dios para los salvos."],
["1 Corintios",4,6,"Sobre los ministros, la disciplina, los pleitos y la inmoralidad; el cuerpo del creyente es templo del Espíritu Santo."],
["1 Corintios",7,9,"Consejos sobre el matrimonio, la libertad cristiana y los derechos del apóstol, que Pablo cede por amor al evangelio."],
["1 Corintios",10,12,"Advertencias del pasado de Israel, el orden en la cena del Señor, y la diversidad de dones en un solo cuerpo."],
["1 Corintios",13,16,"El amor como el camino supremo; el orden en la adoración, y la realidad central de la resurrección de Cristo y de los muertos."],

["2 Corintios",1,3,"Pablo consuela y explica sus planes; el evangelio del nuevo pacto es una gloria mayor, escrita no en piedra sino en corazones."],
["2 Corintios",4,6,"Llevamos un tesoro en vasos de barro; con esperanza eterna, Pablo ejerce el ministerio de la reconciliación con integridad."],
["2 Corintios",7,9,"El gozo del arrepentimiento de los corintios y la exhortación a la generosidad: Dios ama al dador alegre."],
["2 Corintios",10,13,"Pablo defiende su apostolado con humildad; se gloría en sus debilidades, porque el poder de Dios se perfecciona en ellas."],

["Gálatas",1,3,"Pablo defiende el evangelio de la gracia frente a quienes añaden la ley; somos justificados por fe, no por obras."],
["Gálatas",4,6,"Ya no somos esclavos sino hijos; llamados a la libertad, andemos en el Espíritu y produzcamos su fruto en amor."],

["Efesios",1,3,"Bendecidos con toda bendición en Cristo; por gracia somos salvos, y judíos y gentiles forman un solo pueblo de Dios."],
["Efesios",4,6,"Llamados a vivir dignos de la vocación, en unidad y santidad; instrucciones para la familia y la armadura de Dios."],

["Filipenses",1,4,"Pablo escribe con gozo desde la prisión; exhorta a la humildad de Cristo, a regocijarse siempre y a confiar en la paz de Dios."],

["Colosenses",1,4,"Cristo es supremo sobre todo y suficiente para la salvación; los creyentes deben buscar lo de arriba y vivir la nueva vida en él."],

["1 Tesalonicenses",1,3,"Pablo elogia la fe de los tesalonicenses, recuerda su ministerio entre ellos y se alegra de su firmeza ante las pruebas."],
["1 Tesalonicenses",4,5,"Llamado a la santidad y al amor fraternal; enseñanza sobre la venida del Señor y la esperanza de los que han muerto en Cristo."],

["2 Tesalonicenses",1,3,"Pablo anima ante la persecución, aclara que el día del Señor aún no llega, y exhorta a trabajar y no desfallecer en el bien."],

["1 Timoteo",1,3,"Pablo instruye a Timoteo contra las falsas enseñanzas, sobre la oración, y los requisitos de los líderes de la iglesia."],
["1 Timoteo",4,6,"Consejos para un buen ministro; cómo tratar a los distintos grupos, y advertencia sobre el amor al dinero y la fe verdadera."],

["2 Timoteo",1,4,"Pablo, cerca del fin, anima a Timoteo a guardar la fe, sufrir por el evangelio y predicar la Palabra con fidelidad."],

["Tito",1,3,"Pablo instruye a Tito sobre los líderes, la sana doctrina y la buena conducta que adorna el evangelio de la gracia de Dios."],

["Filemón",1,1,"Pablo intercede por Onésimo, un esclavo fugitivo ahora hermano en Cristo, pidiendo a Filemón que lo reciba con amor."],

["Hebreos",1,3,"Cristo es superior a los ángeles y a Moisés; siendo Dios e hijo perfecto, llama a no endurecer el corazón ante su voz."],
["Hebreos",4,6,"Cristo es el gran sumo sacerdote que comprende nuestras debilidades; el llamado a entrar en el reposo y a madurar en la fe."],
["Hebreos",7,9,"Cristo, sacerdote según el orden de Melquisedec, ofrece un mejor pacto y un sacrificio único que limpia para siempre."],
["Hebreos",10,13,"Por el sacrificio de Cristo nos acercamos a Dios con fe; ejemplos de fe, la disciplina del Padre, y vivir agradando a Dios."],

["Santiago",1,3,"La fe se prueba en la práctica: oír y hacer la palabra, no hacer acepción de personas, y dominar la lengua."],
["Santiago",4,5,"Llamado a la humildad ante Dios, a no juzgar, a la paciencia ante el sufrimiento y al poder de la oración de fe."],

["1 Pedro",1,3,"Pedro anima a los creyentes ante el sufrimiento: nacidos a una esperanza viva, llamados a la santidad y a una buena conducta."],
["1 Pedro",4,5,"Sufrir como cristiano sin avergonzarse; los ancianos pastoreen con humildad, y todos confíen sus cargas en Dios que cuida de ellos."],

["2 Pedro",1,3,"Pedro exhorta a crecer en la fe, advierte contra los falsos maestros y recuerda que el Señor vendrá; vivamos en santidad."],

["1 Juan",1,3,"Dios es luz y amor; quien anda con él confiesa su pecado, guarda sus mandamientos y ama a los hermanos como hijos de Dios."],
["1 Juan",4,5,"Amémonos porque Dios es amor y nos amó primero; la fe en el Hijo da la victoria y la certeza de la vida eterna."],

["2 Juan",1,1,"Juan exhorta a andar en la verdad y el amor, y a cuidarse de los engañadores que niegan a Cristo."],

["3 Juan",1,1,"Juan elogia la hospitalidad de Gayo, reprende el orgullo de Diótrefes y anima a imitar el bien."],

["Judas",1,1,"Judas llama a contender por la fe frente a los falsos maestros, recordando el juicio de Dios y animando a perseverar en su amor."],

["Apocalipsis",1,3,"Juan ve a Cristo glorificado y transmite sus mensajes a las siete iglesias, llamándolas al arrepentimiento y la fidelidad."],
["Apocalipsis",4,6,"Visión del trono celestial y del Cordero digno de abrir el libro; comienzan a abrirse los sellos del juicio."],
["Apocalipsis",7,9,"Los sellados de Dios y la multitud que adora; las trompetas anuncian juicios sobre la tierra en medio de la rebeldía."],
["Apocalipsis",10,12,"El librito, los dos testigos, y la mujer y el dragón: el conflicto entre el pueblo de Dios y las fuerzas del mal."],
["Apocalipsis",13,15,"Las bestias y la marca; el Cordero y los redimidos, el anuncio del evangelio eterno y la preparación de las últimas plagas."],
["Apocalipsis",16,18,"Las copas de la ira de Dios y la caída de Babilonia, símbolo del sistema mundano opuesto a Dios que es finalmente juzgado."],
["Apocalipsis",19,22,"Las bodas del Cordero, la victoria final sobre el mal, el juicio, y el cielo nuevo y la tierra nueva donde Dios habita con los suyos."]
];

// Unir las tres partes en el plan completo
const PLAN_FULL = [].concat(
  typeof PLAN_FULL_A!=='undefined'?PLAN_FULL_A:[],
  typeof PLAN_FULL_B!=='undefined'?PLAN_FULL_B:[],
  PLAN_FULL_C
);
