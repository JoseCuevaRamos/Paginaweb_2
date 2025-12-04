import React from 'react';
import styled from 'styled-components';

// --- STYLES ---

const Section = styled.div`
  width: 100%;
  max-width: 1100px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
`;

const Carousel = styled.div`
  width: 100%;
  overflow-x: auto;
  display: flex;
  gap: 16px;
  padding: 8px 4px 12px;
  
  /* CAMBIO IMPORTANTE: Eliminamos scroll-snap para evitar conflictos */
  /* scroll-snap-type: x mandatory; <--- ELIMINADO */

  /* Ocultamos la barra de scroll pero permitimos el desplazamiento */
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.text_secondary + '55'};
    border-radius: 4px;
  }
`;

const Card = styled.a`
  flex: 0 0 auto;
  width: 360px;
  
  /* CAMBIO IMPORTANTE: Eliminamos la alineación forzada */
  /* scroll-snap-align: start; <--- ELIMINADO */
  
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.text_secondary + '22'};
  border-radius: 12px;
  padding: 18px;
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  }
`;

const Thumb = styled.div`
  height: 160px;
  border-radius: 8px;
  background: ${({ theme }) => theme.primary + '22'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  overflow: hidden;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CertTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  white-space: nowrap;      /* Evita que el texto rompa el tamaño de la tarjeta */
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CertIssuer = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 8px;
`;

const NavBtn = styled.button`
  border: 1px solid ${({ theme }) => theme.text_secondary + '33'};
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: ${({ theme }) => theme.primary + '22'}; }
`;

// --- COMPONENT ---

const Certificates = ({ certificates = [] }) => {
  const listRef = React.useRef(null);
  const pausedRef = React.useRef(false);

  // Función para mover con los botones
  const scrollBy = (delta) => {
    const el = listRef.current;
    if (!el) return;
    el.scrollBy({ left: delta, behavior: 'smooth' });
    // Pausamos brevemente el auto-scroll para que no pelee con el clic
    pausedRef.current = true;
    setTimeout(() => { pausedRef.current = false; }, 1000);
  };

  React.useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    // Respetar preferencia de reducción de movimiento del usuario
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const pxPerTick = 1; // Velocidad del scroll
    
    const interval = setInterval(() => {
      // Solo mover si no está pausado y si hay contenido suficiente
      if (!pausedRef.current && el) {
        // Mover 1px a la derecha
        el.scrollLeft += pxPerTick;

        // Lógica del Bucle Infinito
        // scrollWidth es el ancho total del contenido scrolleable
        // clientWidth es lo que el usuario ve
        // Si hemos scrolleado más de un tercio (porque duplicamos la lista 3 veces)
        // reseteamos la posición a 0. Como la lista es idéntica, el usuario no nota el salto.
        if (el.scrollLeft >= (el.scrollWidth / 3)) {
             el.scrollLeft = 0;
        }
      }
    }, 20); // 20ms = movimiento suave (~50fps)

    return () => clearInterval(interval);
  }, [certificates.length]); // Añadida dependencia por si cambian los certificados

  if (!certificates || certificates.length === 0) return null;

  // Duplicamos los items 3 veces para el efecto de bucle infinito
  const infiniteCertificates = [...certificates, ...certificates, ...certificates];

  return (
    <Section>
      <Title>Certificados</Title>
      
      <Row>
        <NavBtn onClick={() => scrollBy(-320)} aria-label="Anterior">◀</NavBtn>
        <NavBtn onClick={() => scrollBy(320)} aria-label="Siguiente">▶</NavBtn>
      </Row>

      <Carousel
        ref={listRef}
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
        // onTouchStart/End para mejor UX en móviles
        onTouchStart={() => (pausedRef.current = true)}
        onTouchEnd={() => (pausedRef.current = false)}
      >
        {infiniteCertificates.map((c, idx) => (
          <Card 
            key={`${c.id}-${idx}`} 
            href={c.link || '#'} 
            target={c.link ? '_blank' : undefined} 
            rel={c.link ? 'noopener noreferrer' : undefined}
          >
            <Thumb>
              {c.image ? 
                <Img src={c.image} alt={c.title} /> : 
                <div style={{fontWeight:600}}>{c.issuer || 'Certificado'}</div>
              }
            </Thumb>
            <Meta>
              <CertTitle title={c.title}>{c.title}</CertTitle>
              <CertIssuer>{c.issuer}{c.date ? ` · ${c.date}` : ''}</CertIssuer>
            </Meta>
          </Card>
        ))}
      </Carousel>
    </Section>
  );
};

export default Certificates;