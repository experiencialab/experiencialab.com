import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    bajada: 'Acompañamos a las organizaciones a adaptarse al entorno,  ser ágiles, acelerar su transformación digital y desarrollar productos digitales utilizando tecnologías emergentes en el ámbito de la creación de nuevas y valiosas formas en que personas y empresas se relacionan, trabajan y experimentan compras & servicios.',
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
        index: 0,
        nombre: 'Vivi Ponce',
        cargo: 'CEO, CTO & Founder',
        bio: ['Consultora experta en la concepción de la próxima generación de features en la experiencia digital de usuarios para ecosistemas y productos digitales basados en tecnología emergente. Agilista articuladora de procesos de co-creación e intervenciones de shock en organizaciones.',
        'Gluten free, vegetariana, bike lover, inmigrante italiana en Chile, hacer que las cosas pasen y honestidad brutal son mis superpoderes.',
        '',
        'Ingeniero Civil Industrial<br>Marketing in a Digital Environment<br>Agile Coach<br>Scrum Master certificated<br>Product Owner certificated<br>Devops Certificated<br>Yoga teacher'
        ],
        foto: 'fotos/vivi_ponce.jpg',
        nick: 'Vivi',
        twitter: '@vivirlove',
        twitterlink: 'https://twitter.com/VivirLove',
        instagram: 'https://www.instagram.com/vivirlove/?hl=en',
        linkedin: 'https://www.linkedin.com/in/vivi-ponce-serri-88210015/'
      },
      {
        index: 1,
        nombre: 'Ana de Lara',
        cargo: 'Head UX/UI',
        bio: [
          'Consultora experta en la concepción e incubación de experiencias digitales atesorables a través de la identificación de las necesidades actuales y futuras de los usuario & clientes  y el uso de metodologías de diseño participativo. Desarrollo acelerado de productos con y para el usuario.',
          'Camaleónica, resiliente, ciudadana del mundo, dance lover, obsesionada con todas las ramas del diseño.',
          'Superpoder: “tangibilizar las experiencias, hacerlas realidad”.',
          'Diseñadora<br>Abogado<br>Máster en Diseño Avanzado<br>UX/UI Senior<br>Scrum Master / Product Owner Certificated'
        ],
        foto: 'fotos/ana_de_lara.jpg',
        nick: 'Ana',
        twitter: '',
        twitterlink: '',
        instagram: 'https://www.instagram.com/anadelara/?hl=en',
        linkedin: 'https://www.linkedin.com/in/anavdelara/'
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
        mock: 'mocks/iconstruye.jpg',
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
        mock: 'mocks/toctoc.jpg',
        text: [
          'Frente al desafío de lograr mayor impacto en las soluciones digitales a mercado en menor tiempo, hemos articulado y desarrollado la estrategia de adopción de agilidad para Toc-Toc otorgando una base metodológica e instalando prácticas que sustentan la forma en que los equipos colaboran, interactúan y articulan su trabajo diario para responder a los desafíos de desarrollo digital de cara a sus usuarios generando delivery continuo constituyéndose en un lab digital.<br><br>',
          'Acompañamos a los equipos durante 4 sprints en su adherencia a SCRUM, desde la preparación de los desafíos, entrenamiento, staffing de las células, shadow & prácticas hand on en todas las ceremonias del framework y coaching agile, para el desarrollo de:<br><br>',
          'Primer mínimo producto viable digital para tasación on-line en base inteligencia artificial.<br><br>',
          '<a href="https://www.retasalo.com" target="_blank">www.retasalo.com</a><br><br>',
          'En esta asesoría orquestamos alrededor de 40 personas y usuarios.'
        ],
        extend: false
      },
      {
        index: 2,
        nombre: 'elecmetal',
        logo: 'logos/Elecmental.png',
        mock: 'mocks/elecmetal.jpg',
        text: [
          'Frente al desafío de digitalizar la interacción sus principales usuarios de la Minería , en un ejercicio de co-creación bajo metodología ágil, desarrollamos los prototipos del primer portafolio digital de Elecmetal para su oferta be to be hacia el sector industrial minería.'
        ],
        extend: false
      },
      {
        index: 3,
        nombre: 'vtr',
        logo: 'logos/vtrcom.png',
        mock: 'mocks/vtr.jpg',
        text: [
          'Enfrentados a un players predominante como Netflix, asumimos el desafío de conectar a VTR las expectativas emergentes de su nueva generación de usuarios, articulando un proceso de diseño colaborativo de su plataforma digital legacy para televisión, resultando en un prototipo que captura todas las tendencias e insights de usuarios con una evolución sustantiva en su usabilidad, interacción, sorpresa en contenidos y funcionalidades. <br><br>En esta asesoría orquestámos el trabajo colaborativo alrededor de 40 personas y usuarios.'
        ],
        extend: false
      },
      {
        index: 4,
        nombre: 'talento',
        logo: 'logos/talento digital.png',
        mock: 'mocks/talentodigital.jpg',
        text: [
          'Frente al desafío de visibilizar los nuevos talentos digitales productos de procesos de reconversión a campos de la tecnología. Hemos desarrollado los productos digitales para empresas usuarias de la iniciativa Talento Digital, a través de un proceso de co-creación ágil que incorpora a más de 50 organizaciones (empresas core tech, no core tech, empresas estatales), cuyo resultado da lugar a la oferta soportada en plataformas digitales que incorporan atributos, aspectos y diferenciadores claves en una lógica de mínimos productos viables.<br><br>En esta asesoría orquestamos alrededor de 300 personas y usuarios.'
        ],
        extend: false
      },
      {
        index: 5,
        nombre: 'polpaico',
        logo: 'logos/polpaico.png',
        mock: 'mocks/polpaico.jpg',
        text: [
          'Step 1:',
          '<br>Frente al desafío de acelerar la transformación digital y del negocio hemos orquestado un ejercicio de co-creación y diseño digital que involucró c-level, segundas líneas, clientes, no clientes, maestros y ferreteros, el cual permitió: Visualizar futuros y realidades de evolución posibles para Polpaico, que se tradujeron en líneas de desarrollo digital centrados en sus usuarios actuales y potenciales, alineados a su evolución estratégica y priorizadas en términos de importancia para el negocio.',
          '<br>En esta asesoría orquestamos alrededor de 60 personas y usuarios.',
          '<br>Step 2:',
          '<br>Frente al desafio de digitalizar la interacción con clientes B2B Y B2C de la compañia, en un ejercicio de co-creación bajo metodología ágil:',
          '<br>Desarrollamos el portafolio de los principales productos digitales de Polpaico.<br><br>Generamos en 7 sprints el primer ecommerce para la venta de Hormigón.<br><br>Generamos en 8 sprints la primera webapp para la atención de las interacciones más relevantes con clientes B2B.'
        ],
        extend: false
      },
      {
        index: 6,
        nombre: 'teatroamil',
        logo: 'logos/TeatroamilTV.png',
        mock: 'mocks/teatroamiltv.jpg',
        text: [
          'Frente al desafío de digitalizar la interacción con los usuarios y clientes del festival de teatro Santiago a Mil, en un ejercicio de co-creación bajo metodología ágil:<br><br>Dirigimos el desarrollo de una solución digital web y sus aplicativos para la transmisión de contenido en vivo, y sistema de suscripción tipo Netfilx en base a una estrategia de white label con Vimeo OTT.'
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
      "logos/hogar de cristo.png",
      "logos/iconstruye.png",
      "logos/polpaico.png",
      "logos/uc.png",
      "logos/redsalud.png",
      "logos/ripley.png",
      "logos/talento digital.png",
      "logos/TeatroamilTV.png",
      "logos/tictoc.png",
      "logos/tranoceanica.png",
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
