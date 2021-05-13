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
        cargo: 'CEO & Founder',
        bio: ['Consultora senior experta en la concepción de la próxima generación de features para experiencia de usuarios y clientes , agilidad organizacional, aceleración digital y habilitadores tecnológicos. Articuladora de procesos de co-creación y diálogo organizacional.',
        'Glutenfree, vegetariana, bike lover, inmigrante italiana en chile, hacer que las cosas pasen es mi súper poder.',
        'Ingeniero Civil Industrial<br>Magister en Marketing<br>Design Thinker<br>Fundadora<br>Agile Coach<br>Scrum Master<br>Product Owner Senior certificated<br>Devops Certificated'
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
          'Consultora, experta  en incubación, desarrollo acelerado de productos & nuevos negocios digitales.',
          '',
          'Diseñadora<br>Abogado<br>Máster en Diseño Avanzado<br>UX/UI Senior<br>Scrum Master / Product Owner Certificated.'
        ],
        foto: 'fotos/ana_de_lara.jpg',
        nick: 'Ana',
        twitter: '',
        twitterlink: '',
        instagram: 'https://www.instagram.com/anadelara/?hl=en',
        linkedin: 'https://www.linkedin.com/in/anavdelara/'
      },
      {
        index: 2,
        nombre: 'Daniel Barrientos',
        cargo: 'Head of Futures',
        bio: [
          'Consultor senior experto en diseño de productos digitales de futuro y modelos de negocio disruptivos.',
          '',
          'Lego® Serious Play ® certified facilitator<br>Lean Startup ® certified<br>Design-thinker<br>Customer-Driven Innovation<br>Business Model Canvas ® expert'
        ],
        foto: 'fotos/daniel_barrientos.jpg',
        nick: 'Dani',
        twitter: '',
        twitterlink: '',
        instagram: 'https://www.instagram.com/daniel_bl/?hl=en',
        linkedin: 'https://www.linkedin.com/in/dbarrientos/'
      }
    ],
    experiencias: [
      {
        index: 0,
        nombre: 'iConstruye',
        logo: 'logos/iconstruye.png',
        mock: 'mocks/iconstruye.jpg',
        text: 'Frente al desafío de lograr mayor impacto en las soluciones digitales a mercado en menor tiempo, hemos articulado y desarrollado la estrategia de adopción de agilidad para i-construye otorgando una base metodológica e instalando prácticas que sustentan la forma en que los equipos colaboran, interactúan y articulan su trabajo diario para responder a los desafíos de desarrollo digital para sus usuarios. Acompañamos a los equipos durante 4 sprints en su adherencia a SCRUM, desde la preparación de los desafíos, entrenamiento, staffing de las células, shadow & prácticas hand on en todas las ceremonias del framework y coaching agile.'
      },
      {
        index: 1,
        nombre: 'TocToc.com',
        logo: 'logos/tictoc.png',
        mock: 'mocks/toctoc.jpg',
        text: ''
      }
    ],
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
    }
  },
  actions: {
  },
  modules: {
  }
})
