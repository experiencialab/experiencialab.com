import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bajada: 'Acompañamos a las organizaciones a adaptarse al entorno,  ser ágiles, acelerar su transformación digital y desarrollar productos digitales utilizando tecnologías emergentes en el ámbito de la creación de nuevas y valiosas formas en que personas y empresas se relacionan, trabajan y experimentan compras & servicios.',
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
  },
  actions: {
  },
  modules: {
  }
})
