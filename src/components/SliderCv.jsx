import React, { useState } from 'react';

export function SliderCv() {
  // Datos de los estudiantes del equipo
  const estudiantes = [
    {
      id: 1,
      nombre: "Fernando Gabriel",
      rol: "Desarrollo Frontend y Arquitectura de Sistemas",
      descripcion:"Estudiante de Ingeniería de Sistemas especializado en Desarrollo Web (Frontend y Backend) y gestión de infraestructura de redes. Apasionado por la tecnología, con experiencia en tecnologías como React, Java y entornos Cisco, enfocado en crear soluciones de software eficientes y escalables.",
      pdfUrl: "/cvs/cv-Fernando Quispe.pdf" // Recuerda colocar los PDFs en la carpeta public/cvs/
    },
    {
      id: 2,
      nombre: "Angel Huarac",
      rol: "Desarrollo Backend y Gestión de Repositorios",
      descripcion: "Estudiante universitario con sólida experiencia en la gestión operativa de almacenes, control de inventarios y logística de distribución. Se destaca por su eficiencia bajo presión, coordinación con proveedores y optimización de flujos de mercancías, asegurando el cumplimiento estricto de plazos y estándares de calidad.",
      pdfUrl: "/cvs/cv2-Angel.pdf"
    },
    {
      id: 3,
      nombre: "Jhassir León",
      rol: "Diseño UI/UX y Documentación",
      descripcion: "Estudiante de Ingeniería de Sistemas e Informática con especialización en Redes y Comunicaciones, desempeñándose actualmente como Analista de Datos. Combina un fuerte pensamiento analítico con habilidades técnicas para la recopilación, procesamiento e interpretación de datos estadísticos orientados a la toma de decisiones estratégicas.",
      pdfUrl: "/cvs/cv3-Jhassir.pdf"
    },
    {
      id: 4,
      nombre: "David Curo",
      rol: "Diseño UI/UX y Documentación",
      descripcion: "Estudiante de Ingeniería de Sistemas e Informática posicionado en el tercio superior académico. Cuenta con competencias integrales que abarcan desde el análisis de datos (Power BI, SQL) y desarrollo Frontend hasta la gestión de infraestructura de redes (Cisco) y la optimización de procesos logísticos para e-commerce.",
      pdfUrl: "/cvs/cv-David.pdf"
    },
    {
      id: 5,
      nombre: "Abel Moises",
      rol: "Diseño UI/UX y Documentación",
      descripcion: "Estudiante de Ingeniería de Software enfocado en el desarrollo de aplicaciones web y móviles con criterios de escalabilidad horizontal. Cuenta con sólida formación en tecnologías Frontend (React, Next.js) y gestión de persistencia de datos con Spring Web JPA, destacando por su enfoque colaborativo en la integración de arquitecturas lógicas.",
      pdfUrl: "/cvs/cv4-Abel.pdf"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === estudiantes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? estudiantes.length - 1 : prevIndex - 1
    );
  };

  // Estilos inline básicos para asegurar que se vea excelente y profesional
  const styles = {
    section: {
      padding: '4rem 2rem',
      backgroundColor: '#0f172a', // Color oscuro a juego con setups tecnológicos
      color: '#ffffff',
      textAlign: 'center',
      fontFamily: 'system-ui, sans-serif'
    },
    title: {
      fontSize: '2rem',
      marginBottom: '2rem',
      fontWeight: 'bold',
      color: '#38bdf8' // Celeste tecnológico
    },
    sliderContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '600px',
      margin: '0 auto',
      position: 'relative'
    },
    card: {
      backgroundColor: '#1e293b',
      borderRadius: '12px',
      padding: '2.5rem 2rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
      width: '100%',
      minHeight: '250px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      border: '1px solid #334155',
      transition: 'all 0.3s ease'
    },
    nombre: {
      fontSize: '1.5rem',
      margin: '0 0 0.5rem 0',
      color: '#f8fafc'
    },
    rol: {
      fontSize: '1rem',
      color: '#38bdf8',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      marginBottom: '1rem'
    },
    descripcion: {
      fontSize: '0.95rem',
      color: '#94a3b8',
      lineHeight: '1.5',
      marginBottom: '1.5rem'
    },
    buttonLink: {
      display: 'inline-block',
      backgroundColor: '#0284c7',
      color: '#ffffff',
      padding: '0.75rem 1.5rem',
      borderRadius: '6px',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '0.9rem',
      transition: 'background-color 0.2s',
      alignSelf: 'center'
    },
    navBtn: {
      backgroundColor: 'transparent',
      border: 'none',
      color: '#38bdf8',
      fontSize: '2rem',
      cursor: 'pointer',
      padding: '1rem',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 10,
      userSelect: 'none'
    }
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Equipo de Desarrollo - NovaTech</h2>
      
      <div style={styles.sliderContainer}>
        {/* Flecha Izquierda */}
        <button onClick={prevSlide} style={{ ...styles.navBtn, left: '-50px' }}>
          &#10094;
        </button>

        {/* Card del Estudiante Activo */}
        <div style={styles.card}>
          <div>
            <h3 style={styles.nombre}>{estudiantes[currentIndex].nombre}</h3>
            <div style={styles.rol}>{estudiantes[currentIndex].rol}</div>
            <p style={styles.descripcion}>{estudiantes[currentIndex].descripcion}</p>
          </div>
          
          <a 
            href={estudiantes[currentIndex].pdfUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={styles.buttonLink}
            onMouseOver={(e) => e.target.style.backgroundColor = '#0369a1'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#0284c7'}
          >
            Ver Currículum (PDF)
          </a>
        </div>

        {/* Flecha Derecha */}
        <button onClick={nextSlide} style={{ ...styles.navBtn, right: '-50px' }}>
          &#10095;
        </button>
      </div>
    </section>
  );
}
