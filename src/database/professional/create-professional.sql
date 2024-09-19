INSERT INTO professional (
  id,
  first_name,
  last_name,
  about_me,
  hourly_rate,
  contact,
  profession,
  status,
  portfolio,
  createdAt,
  updatedAt
)
VALUES (
  UUID(),  -- Genera un UUID automáticamente
  'Juan',  -- Nombre del profesional
  'Pérez',  -- Apellido del profesional
  'Soy un profesional con más de 10 años de experiencia en ventas y gestión de equipos...',  -- Descripción breve
  50.00,  -- Tarifa por hora
  'juan.perez@example.com',  -- Contacto
  'Comercial, Ventas',  -- Profesión
  'Disponible',  -- Estado actual
  'https://portfolio.com/juan-perez',  -- Portafolio
  NOW(),  -- Fecha de creación
  NOW()   -- Fecha de actualización
);
