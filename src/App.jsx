import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <body>
  <header class="navbar">
    <div class="container">
      <h1>Portafolio</h1>
      <nav class="nav-links">
        <a href="#bio">Biografía</a>
        <a href="#herramientas">Herramientas</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </div>
  </header>

  <section id="bio" class="seccion">
    <h2>Biografía</h2>
    <div class="bio-container">
      <img src="assets/img/yo.jpg" alt="Tu foto"></img>
      <p>
        ¡Hola! Soy <strong>Javi Junior Mejia Camacho</strong>, un apasionado del desarrollo web y la tecnología. Desde que descubrí el mundo de la programación, he estado aprendiendo y creando proyectos que me permiten expresar mi creatividad y resolver problemas reales. Me encanta trabajar con HTML, CSS y JavaScript, y siempre estoy buscando nuevas herramientas y tecnologías para mejorar mis habilidades. Eso es en el entorno de trabajo pero la mayor parte del tiempo me gusta disfrutar de la musica y los juegos de video, tambien ago deportes como ser futbol, basquetbol, boleivol, boxeo y natacion.
      </p>
    </div>
  </section>

  <section id="herramientas" class="seccion fondo-claro">
    <h2>🛠️ Herramientas y Tecnologías</h2>
    <div class="tags">
      <span>HTML / CSS / JS</span>
      <span>Tailwind CSS</span>
      <span>React / Vue</span>
      <span>Python / Flask</span>
      <span>Git / GitHub</span>
      <span>Figma</span>
    </div>
  </section>

  <section id="proyectos" class="seccion">
    <h2>📂 Proyectos</h2>
    <div class="proyectos-grid">
      <div class="proyecto">
        <img src="https://via.placeholder.com/300x180" alt="Proyecto 1"></img>
        <h3>App de Tareas</h3>
        <p>App web para organizar tareas personales. Creada con React y Firebase.</p>
        <div class="tags">
          <span>React</span><span>Firebase</span>
        </div>
        <a href="#">Ver proyecto</a>
      </div>
      <div class="proyecto">
        <img src="https://via.placeholder.com/300x180" alt="Proyecto 2"></img>
        <h3>Portafolio Web</h3>
        <p>Sitio personal moderno hecho con HTML y CSS puro.</p>
        <div class="tags">
          <span>HTML</span><span>CSS</span>
        </div>
        <a href="#">Ver proyecto</a>
      </div>
    </div>
  </section>
  <section id="contacto" class="seccion fondo-claro">
    <h2>📫 Contacto</h2>
    <form onsubmit="return validarFormulario()">
      <input type="text" id="nombre" placeholder="Tu nombre" required></input>
      <input type="email" id="correo" placeholder="Tu correo" required></input>
      <textarea id="mensaje" placeholder="Tu mensaje" rows="4" required></textarea>
      <button type="submit">Enviar mensaje</button>
    </form>
  </section>

  <footer>
    <div class="redes">
      <a href="#" title="GitHub"><i data-lucide="github"></i></a>
      <a href="#" title="LinkedIn"><i data-lucide="linkedin"></i></a>
      <a href="#" title="Email"><i data-lucide="mail"></i></a>
    </div>
    <p>© 2025 Javi Junior Mejia Camacho. Todos los derechos reservados.</p>
  </footer>
</body>
    </>
  )
}

export default App
