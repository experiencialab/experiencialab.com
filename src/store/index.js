import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    bajada: 'Acompañamos a las organizaciones a adaptarse al entorno,  ser ágiles, acelerar su transformación digital y desarrollar productos digitales utilizando tecnologías emergentes en el ámbito de la creación de nuevas y valiosas formas en que personas y empresas se relacionan, trabajan y experimentan compras & servicios.',
    creemos: 'Las Organizaciones  tendrán éxito si tienen un enfoque implacable en torno al cuidado/reparación del medioambiente, adaptación al cambio climático y en el uso de la tecnología: para aumentar el valor agregado a usuarios/clientes y crear nuevos productos y/o  plataformas digitales que respondan a nuevos contextos y necesidades emergentes.',
    metodologia: [
      'Nuestra metodología de trabajo se centra en el diseño y facilitación de labs/talleres que combinan valores, herramientas y técnicas del design thinking, diseño centrado en el usuario, agile, y desarrollo de productos/plataformas digitales usando marco de trabajo scrum.',
      'Nuestro proceso de trabajo se desarrolla en ciclos de tiempo incrementales, generalmente  comienza con un ciclo de exploración  y descubrimiento que facilita la vinculación estrecha con usuarios y sus necesidades latentes en el contexto de la organización que asesoramos.',
      'Luego damos vida a nuevas e impensables soluciones digitales  que se validan de forma rápida a través de distintos experimentos y testeos con usuarios que desafían la categoría  en el ciclo de prototipado.',
      'Posteriormente emprendemos un viaje de co-creación para refinar nuevos productos o plataformas digitales caracterizados por funcionalidades sorprendentes y una experiencia digital simple, inteligible y atesorable para los usuarios.',
      'Finalmente entramos a un ciclo de desarrollo de software ágil para hacer realidad de manera incremental nuevas y maravillosas soluciones digitales.'
    ],
    dream: [
      'Creemos que las person@s y su talento son el mayor activo de cualquier organización.',
      'Trabajamos y potenciamos equipos diversos, multiculturales que se desafían día a día  para hacer realidad nuevas y sorprendentes realidades digitales.',
      'Las socias y consultor@s asociad@s a experiencia LAB se identifican con el género femenino, participamos de una cruzada por más talento digital femenino en el mundo.'
    ],
    ciclo: [
      'Tanto para el desarrollo de software como proyectos de negocios nuestra aproximación y metodología esta basada en  agilidad.',
      'Para nosotros Agilidad es un conjunto de principios, valores y ceremonias que al articularse y ser vividas de manera consciente, contribuyen a tomar mejores decisiones respecto al desafío que tenemos en frente  y facilitar a los equipos el descubrimiento continuo de mejores formas de hacer.'
    ],
    historia: [
      'Inquietos  por la lentitud del desarrollo de productos digitales,  frustrados del desarrollo de cascada,  cansados de que las organizaciones no incorporen a sus usuarios en el diseño y desarrollo de software....en marzo de 2017 nos propusimos cambiar la realidad:  nace experienciaLAB  impulsado la aceleración digital, desarrollo  ágil de ecosistemas digitales en base a tecnología emergente centrado en las necesidades de usuarios, orientando la  toma de decisiones en torno a datos y fomentando la adopción de metodologías ágiles al servicio de las organizaciones.' ,
      '<span>Somos un equipo  100% ágil y digital</span>.' ,
      'Trabajamos como un solo equipo con nuestros clientes, combinando nuestras capacidades, experiencia y conocimiento experto para co-crear el futuro de cualquier organización, habilitar el alineamiento organizacional, acelerar el  desarrollo de ecosistemas y productos digitales con funcionalidades atesoradas por sus usuarios.'
    ],
    titulares: [
      "Desarrollar <span>productos digitales</span> es nuestro arte.",
      "Generamos delivery <span>siempre y antes</span> que cualquier competidor.",
      "Desarrollamos proyectos nivel Big Four + <span>agilidad y delivery</span>."
    ],
    testimonios: [
      {
        cita: "Estoy más que agradecido por lo que hemos hecho en conjunto, el desafío y la apuesta era gigante, después de 6 meses de arduo trabajo puedo decir que las soluciones digitales de i-Construye y Toc Toc se trabajan en agilidad, y lo más importante: la organización tiene una cultura digital donde los equipos y clientes están felices, nuestro time to market nos tiene optimistas y motivados",
        autor: "Nicolas Errázuriz",
        cargo: "Director Ejecutivo i-Construye - Toc Toc"
      },
      {
        cita: "El equipo de LAB nos desafió a reconocer una nueva realidad, desafió al management y nos indujo a considerar soluciones radicales",
        autor: "Pablo Turner",
        cargo: "Presidente Directorio AD Retail"
      },
      {
        cita: "Trabajar con Experiencia LAB nos empujó a tomar decisiones, desafiarnos y pensar definitivamente fuera de la caja.... Hemos logrado avances reales y poner sobre los productos que diseñamos en conjunto, experiencias superadoras para nuestros clientes.",
        autor: "Andrés Pérez Algarra",
        cargo: "Director Comercial Corporativo Cementos Polpaico"
      },
      {
        cita: "Agradezco con todo mi corazón el aprendizaje que he tenido, la compañía y el apoyo de todo el equipo de experiencia LAB en este proyecto",
        autor: "Marcos Kulka",
        cargo: "Gerente general Fundación Chile"
      },
      {
        cita: "Gracias a  experienciaLAB conocí una nueva forma de trabajar y desarrollar  proyectos! Lo que más valoro es lo muchísimo que aprendí en muy poco tiempo! Esta es una nueva forma de trabajar, de hacer las cosas, y de crear profesionales enfocados a proyectos 5.0 que son los que cambian la industria.",
        autor: "Dunia Alangua",
        cargo: "Gerente servicio al cliente Polpaico"
      },
      {
        cita: "Agradecidos del aporte profesional y humano, el cual se tradujo en un plan de acción que funcionó",
        autor: "César Oyarzo Mansilla",
        cargo: "Gerente Áreas Ambulatorias UC-Christus"
      }
    ],
    servicios: [
      {
        index: 0,
        titulo: 'Estrategia Aceleración Digital',
        foto: 'fotos/aceleracion-digital.jpg',
        letra: 'a.',
        texto: 'Acompañamos a las organizaciones en la identificación de líneas de desarrollo estratégicas y oportunidades digitales en que se juega la relación futura con sus usuaries & Clientes. Facilitamos la co-creación y desarrollo del backlog de iniciativas estratégicas para activar y/o acelerar el proceso de transformación digital y uso de tecnología emergente. Desarrollamos la estrategia de plataforma para ecosistemas digitales orientados a facilitar que las organizaciones  prioricen la construcción de capacidades valiosas de una manera escalable e incremental para enfrentar desafíos tecnológicos presentes y futuros.'
      },
      {
        index: 1,
        titulo: 'Desarrollo de productos y ecosistemas digitales',
        foto: 'fotos/desarrollo-agil-de-productos.jpg',
        letra: 'b.',
        texto: 'Diseñamos y desarrollamos  productos digitales centrados en los usuaries y sus necesidades latentes asegurando usabilidad, simpleza y base intuitiva en cada interacción. Nos hacemos cargo de la facilitación en el ciclo de desarrollo de  iniciativas digitales con equipos de desarrollo interno, externos o partnership tomando la dirección, gestión y foco de trabajo diario a las células/squads involucradas.'
      },
      {
        index: 2,
        titulo: 'Agilidad',
        foto: 'fotos/agilidad.jpg',
        letra: 'c.',
        texto: '¿Quieres más delivery, mejor time to market, productos digitales más centrados en tus usuarios? Nos especializamos en hacer que equipos de desarrollo digital adopten metodologías ágiles a través de entrenamiento y acompañamiento por 4 sprints (8 semanas), logrando desarrollo de productos digitales sorprendentes!'
      }
    ],
    equipo: [
      {
        index: 1,
        nombre: 'Vivi Ponce',
        cargo: 'CEO and CTO: Chief technology officer',
        bio: ['Consultora experta en la concepción de la próxima generación de features en la experiencia digital de usuarios para ecosistemas y productos digitales basados en tecnología emergente. Agilista articuladora de procesos de co-creación e intervenciones de shock en organizaciones.',
        'Gluten free, vegetariana, bike lover, inmigrante italiana en Chile, hacer que las cosas pasen y honestidad brutal son mis superpoderes.',
        'Profesora para Diplomado Equipos Ágiles, eclass. Profesora Invitada Diplomado desarrollo y gestión ágil de proyectos.',
        'Ingeniero Civil Industrial, Universidad de Concepción, Chile<br>Transformación Digital de Negocios a Gran Escala, executive degree, MIT, USA<br>Master en Marketing in a Digital Environment, Universidad Ramon Lull, Barcelona, España<br>Agile Coach, scrum master, product owner, scrum.org certificated<br>Profesora de Yoga, YogaShala Chile<br>Profesora para Diplomado Equipos Ágiles, eclass<br>Profesora Invitada Diplomado desarrollo y gestión ágil de proyectos'
        ],
        foto: 'fotos/LAB_profile_01.webp',
        nick: 'Vivi',
        twitter: '@vivirlove',
        twitterlink: 'https://twitter.com/VivirLove',
        instagram: 'https://www.instagram.com/vivirlove/?hl=en',
        linkedin: 'https://www.linkedin.com/in/vivi-ponce-serri-88210015/'
      },
      {
        index: 2,
        nombre: 'Ana de Lara',
        cargo: 'CDO: Chief Digital Officer',
        bio: [
          'Consultora experta en la concepción e incubación de experiencias digitales atesorables a través de la identificación de las necesidades actuales y futuras de los usuario & clientes  y el uso de metodologías de diseño participativo. Desarrollo acelerado de productos con y para el usuario.',
          'Camaleónica, resiliente, ciudadana del mundo, dance lover, obsesionada con todas las ramas del diseño.',
          'Superpoder: “tangibilizar las experiencias, hacerlas realidad”.',
          'Master en Diseño Avanzado, Pontificia Universidad Católica de Chile<br>Abogada, Universidad de Buenos Aires<br>Diseñadora Fashion & Textile,  Escuela Argentina de Moda<br>Product owner, scrum.org certificated'
        ],
        foto: 'fotos/LAB_profile_02.webp',
        nick: 'Ana',
        twitter: '',
        twitterlink: '',
        instagram: 'https://www.instagram.com/anadelara/?hl=en',
        linkedin: 'https://www.linkedin.com/in/anavdelara/'
      },
      {
        index: 3,
        nombre: 'Taira Sedini Viancos',
        cargo: 'Consultora Diseño de experiencia digital Senior Asociado',
        bio: [
          'Vegana, feminista, amante de los gatos, la naturaleza y la literatura . Fanática del movimiento, la agilidad y el deporte. ',
          '',
          '',
          'Cofundadora de Autoras Librería Digital<br>Diseñadora estratégica, Pontificia Universidad Católica de Chile<br>Master en diseño gráfico, Elisava, Barcelona<br>Diplomada en creatividad e innovación en el diseño y los negocios, Pontificia Universidad Católica de Chile<br>Profesora de vinyasa yoga'
        ],
        foto: 'fotos/LAB_profile_03.webp',
        nick: 'Tai',
        twitter: '',
        twitterlink: '',
        instagram: 'https://instagram.com/tairasedini?utm_medium=copy_link',
        linkedin: 'https://www.linkedin.com/in/taira-sedini-6b6a8b69'
      },
      {
        index: 4,
        nombre: 'Laura Brenes',
        cargo: 'Consultora Diseño de experiencia digital Senior Asociado',
        bio: [
          'Costaricense en Chile, aficionada de la cocina, emprendedora en diseño Interno y mobiliario, fan de caminatas citadinas y un buen té.',
          '',
          '',
          'Profesora Diseño Espacios y Servicios, Universidad de Los Andes<br>Arquitecta, Universidad Veristas, Costa Rica<br>Magister en Diseño Avanzado, Pontificia Universidad Católica de Chile<br>Diplomado Docencia Arquitectura, Universidad de Chile'
        ],
        foto: 'fotos/LAB_profile_04.webp',
        nick: 'Lau',
        twitter: '',
        twitterlink: '',
        instagram: 'https://www.instagram.com/laubrenes3/?hl=en',
        linkedin: 'https://cl.linkedin.com/in/laurabrenes'
      },
      {
        index: 5,
        nombre: 'Solange Morello',
        cargo: 'Diseñadora UX/UI Trainee',
        bio: [
          'Observadora, comprometida y entusiasta | Dog lover 🖤 | Aficionada a la cocina y las plantas.',
          'Fan de disciplinas orientales como el Kintsugi y Katazome.',
          'Reto diario: entender el mundo desde distintas perspectivas.',
          'Egresada del Bootcamp de Diseño UX/UI por Talento Digital para Chile<br>Graduada en Arte y Diseño, Escuela Massana, Universidad Autónoma de Barcelona, España<br>Bachiller en Diseño Universidad Mayor'
        ],
        foto: 'fotos/LAB_profile_06.webp',
        nick: 'Sol',
        twitter: '',
        twitterlink: '',
        instagram: '',
        linkedin: ''
      },
      {
        index: 6,
        nombre: 'María-José Valenzuela',
        cargo: 'Data Scientist',
        bio: [
          'Gen Z, dog lover, scout, feminista e intento de chef vegetariana. Apasionada por los datos y las soluciones tecnológicas que tienen el poder de responder a los desafíos actuales y generar un impacto en el día a día de las personas.',
          'Consultora experta en ciencia de datos, agilidad e incubación de startups y spin-offs.',
          '',
          'Ingeniera Civil Industrial Universidad Adolfo Ibáñez<br>Magister en Data Science Universidad Adolfo Ibañez<br>Profesora Ayudante en Diplomado Liderazgo Ágil/ Equipos Ágiles Eclass'
        ],
        foto: 'fotos/LAB_profile_05.webp',
        nick: 'Cote',
        twitter: '',
        twitterlink: '',
        instagram: '',
        linkedin: ''
      }

      // {
      //   index: 1,
      //   nombre: 'Daniel Barrientos',
      //   cargo: 'Head of Futures',
      //   bio: [
      //     'Experto en diseño e implementación de estrategias de digitalización y aceleración en equipos tecnológicos. Acompañamiento a directivos y equipos digitales en la visualización de escenarios futuros, co-construcción de modelos de negocio disruptivos y rutas de desarrollo digital evolutivas y escalables.',
      //     'Sibarita, parrillero, ciclista furioso y nerd orgulloso.',
      //     'Superpoder: “Impulsar a las organizaciones a mirar el futuro y llevarlo a cabo”.',
      //     'Lego® Serious Play ® certified facilitator<br>Lean Startup ® certified<br>Design-thinker<br>Customer-Driven Innovation<br>Business Model Canvas ® expert'
      //   ],
      //   foto: 'fotos/daniel_barrientos.jpg',
      //   nick: 'Dani',
      //   twitter: '',
      //   twitterlink: '',
      //   instagram: 'https://www.instagram.com/daniel_bl/?hl=en',
      //   linkedin: 'https://www.linkedin.com/in/dbarrientos/'
      // }
    ],
    experiencias: [
      {
        index: 0,
        nombre: 'iConstruye',
        logo: 'logos/iconstruye.png',
        mock: 'mocks/iconstruye.webp',
        text: [
          'Step 1',
          '<br>Frente al desafío de lograr mayor impacto en las soluciones digitales a mercado en menor tiempo, hemos articulado y desarrollado la estrategia de adopción de agilidad para i-construye otorgando una base metodológica e instalando prácticas que sustentan la forma en que los equipos colaboran, interactúan y articulan su trabajo diario para responder a los desafíos de desarrollo digital para sus usuarios. <br><br>Acompañamos a los equipos durante 4 sprints en su adherencia a SCRUM, desde la preparación de los desafíos, entrenamiento, staffing de las células, shadow & prácticas hand on en todas las ceremonias del framework y coaching agile.',
          '<br><br>Step 2',
          '<br><br>Acompañamos a los equipos durante 12 sprints en su adherencia a SCRUM, desde la preparación de los desafíos, entrenamiento, staffing de las células, shadow & prácticas hand on en todas las ceremonias del framework, desarrollo escalable:<br><br>Producto digital marketplace.<br><br>Producto digital automatización procesos interacción clientes.<br><br>Arquitectura e Integraciones.<br><br>En esta asesoría orquestamos alrededor de 50 personas y usuarios.'
        ],
        extend: false
      },
      {
        index: 1,
        nombre: 'TocToc.com',
        logo: 'logos/tictoc.png',
        mock: 'mocks/toctoc.webp',
        web: "https://www.retasalo.com",
        text: [
          'Frente al desafío de lograr mayor impacto en las soluciones digitales a mercado en menor tiempo, hemos articulado y desarrollado la estrategia de adopción de agilidad para Toc-Toc otorgando una base metodológica e instalando prácticas que sustentan la forma en que los equipos colaboran, interactúan y articulan su trabajo diario para responder a los desafíos de desarrollo digital de cara a sus usuarios generando delivery continuo constituyéndose en un lab digital.<br><br>',
          'Acompañamos a los equipos durante 4 sprints en su adherencia a SCRUM, desde la preparación de los desafíos, entrenamiento, staffing de las células, shadow & prácticas hand on en todas las ceremonias del framework y coaching agile, para el desarrollo de:<br><br>',
          'Primer mínimo producto viable digital para tasación on-line en base inteligencia artificial.<br><br>',
          'En esta asesoría orquestamos alrededor de 40 personas y usuarios.'
        ],
        extend: false
      },
      {
        index: 2,
        nombre: 'elecmetal',
        logo: 'logos/Elecmental.png',
        mock: 'mocks/elecmetal.webp',
        text: [
          'Frente al desafío de digitalizar la interacción sus principales usuarios de la Minería , en un ejercicio de co-creación bajo metodología ágil, desarrollamos los prototipos del primer portafolio digital de Elecmetal para su oferta be to be hacia el sector industrial minería.'
        ],
        extend: false
      },
      {
        index: 3,
        nombre: 'vtr',
        logo: 'logos/vtrcom.png',
        mock: 'mocks/vtr.webp',
        text: [
          'Enfrentados a un players predominante como Netflix, asumimos el desafío de conectar a VTR las expectativas emergentes de su nueva generación de usuarios, articulando un proceso de diseño colaborativo de su plataforma digital legacy para televisión, resultando en un prototipo que captura todas las tendencias e insights de usuarios con una evolución sustantiva en su usabilidad, interacción, sorpresa en contenidos y funcionalidades. <br><br>En esta asesoría orquestámos el trabajo colaborativo alrededor de 40 personas y usuarios.'
        ],
        extend: false
      },
      {
        index: 4,
        nombre: 'talento',
        logo: 'logos/talento digital.png',
        mock: 'mocks/talentodigital.webp',
        text: [
          'Frente al desafío de visibilizar los nuevos talentos digitales productos de procesos de reconversión a campos de la tecnología. Hemos desarrollado los productos digitales para empresas usuarias de la iniciativa Talento Digital, a través de un proceso de co-creación ágil que incorpora a más de 50 organizaciones (empresas core tech, no core tech, empresas estatales), cuyo resultado da lugar a la oferta soportada en plataformas digitales que incorporan atributos, aspectos y diferenciadores claves en una lógica de mínimos productos viables.<br><br>En esta asesoría orquestamos alrededor de 300 personas y usuarios.'
        ],
        extend: false
      },
      {
        index: 5,
        nombre: 'polpaico',
        logo: 'logos/polpaico.png',
        mock: 'mocks/LAB_polpaico.webp',
        web: "https://www.comprapolpaico.cl/ecommerce/home",
        text: [
          '<br>Step 1:<br><br>Frente al desafio de digitalizar la interacción con clientes B2B Y B2C de la compañia, en un ejercicio de co-creación bajo metodología ágil:',
          '<br>Desarrollamos en tecnología ágil el portafolio de los principales productos digitales de Polpaico.<br>Desarrollamos en 7 sprints el primer ecommerce para la venta de Hormigón.<br><br>Desarrollamos en 8 sprints la primera webapp para la atención de las interacciones más relevantes con clientes B2B.',
          '<br>Step 2:',
          '<br>Frente al desafío de acelerar la transformación digital y del negocio hemos orquestado un ejercicio de co-creación y diseño digital que involucró c-level, segundas líneas, clientes, no clientes, maestros y ferreteros, el cual permitió: Visualizar futuros y realidades de evolución posibles para Polpaico, que se tradujeron en líneas de desarrollo digital centrados en sus usuarios actuales y potenciales, alineados a su evolución estratégica y priorizadas en términos de importancia para el negocio.',
          '<br>En esta asesoría orquestamos alrededor de 60 personas y usuarios.',
        ],
        extend: false
      },
      {
        index: 6,
        nombre: 'teatroamil',
        logo: 'logos/TeatroamilTV.png',
        mock: 'mocks/teatroamiltv.webp',
        text: [
          'Frente al desafío de digitalizar la interacción con los usuarios y clientes del festival de teatro Santiago a Mil, en un ejercicio de co-creación bajo metodología ágil:<br><br>Dirigimos el desarrollo de una solución digital web y sus aplicativos para la transmisión de contenido en vivo, y sistema de suscripción tipo Netfilx en base a una estrategia de white label con Vimeo OTT.'
        ],
        extend: false
      },
      {
        index: 7,
        nombre: 'sumate',
        logo: 'logos/sumate-logo.png',
        mock: 'mocks/LAB_sumate.webp',
        web: "https://xd.adobe.com/view/25cb9544-9638-4234-88da-c8f251e718da-7098/?fullscreen",
        text: [
          '<br>En plena pandemia, durante el año 2021, trabajamos con jóvenes en vulnerabilidad social que estudian en escuelas de la red Sumate, con la finalidad de co-diseñar junto a ellos la plataforma digital que les facilite adquirir habilidades requeridas para acceder a trabajos o estudios de continuidad.',
          '<br>Tuvimos la maravillosa oportunidad de co-crear con más de 50 jóvenes distintas realidades de vulnerabilidad social.',
          '<br>El resultado es una plataforma digital  que  a través de una dinámica de gaming prepara a los jóvenes para su siguiente paso y pone a su disposición información y oportunidades concretas en base a sus intereses y habilidades : trabajos, continuación de estudios, becas, etc.'
        ],
        extend: false
      },
      {
        index: 8,
        nombre: 'kodea',
        logo: "logos/kodea_logo.webp",
        mock: 'mocks/LAB-kodea.webp',
        text: [
          'Desde Diciembre de 2021 a Marzo de 2022, trabajamos con alrededor de 100 microemprendedoras de subsistencia para co-crear la plataforma digital que les facilitará: colaborar, adquirir destrezas, manejar herramientas digitales y metodologías de trabajo que eleven el nivel de rentabilidad de sus negocios y potencien nuevos negocios conjuntos entre emprendedores de la comunidad.'
        ],
        extend: false
      }
    ],
    trabaja: "En LAB queremos más talento digital! Quieres ser parte?<br>Preséntanos los tres productos digitales más atesorables en que hayas participado. Por favor especifica tu rol y el desafío que enfrentaron.",
    logos: [
      "logos/claro.png",
      "logos/ADretail.png",
      "logos/copeuch.png",
      "logos/despegar.png",
      "logos/Elecmental.png",
      "logos/eocean.png",
      "logos/fundacion chile.png",
      "logos/sumate-logo.png",
      "logos/iconstruye.png",
      "logos/polpaico.png",
      "logos/uc.png",
      "logos/redsalud.png",
      "logos/ripley.png",
      "logos/talento digital.png",
      "logos/TeatroamilTV.png",
      "logos/tictoc.png",
      "logos/tranoceanica.png",
      "logos/kodea_logo.webp",
      "logos/vtrcom.png"
    ]
  },
  mutations: {
    loading(state, mode){
      state.loading = mode;
    },
    extending(state, index){
      state.experiencias[index].extend = !state.experiencias[index].extend
    }
  },
  actions: {
  },
  modules: {
  }
})
