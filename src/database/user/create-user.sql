INSERT INTO Users (
  id, 
  type, 
  username, 
  email, 
  password, 
  genre, 
  profile_image, 
  phone_number, 
  code_area, 
  verified, 
  visibility, 
  is_banned, 
  location, 
  createdAt, 
  updatedAt
) 
VALUES (
  UUID(),  -- Genera un UUID automáticamente
  'professional',  -- ENUM: 'professional' o 'company'
  'user1234',  -- Username
  'user1234@example.com',  -- Email
  'securePassword123',  -- Contraseña
  'male',  -- ENUM: 'masculino', 'femenino', 'otro'
  'https://example.com/image.png',  -- Imagen de perfil
  '12345678910',  -- Número de teléfono
  '123',  -- Código de área
  0,  -- verified: false (no verificado)
  1,  -- visibility: true (visible)
  0,  -- is_banned: false (no baneado)
  JSON_OBJECT(
    'address', JSON_OBJECT(
      'address_name', 'Calle Falsa',
      'address_number', true
    ),
    'city', 'Ciudad Ejemplo',
    'state', 'Estado Ejemplo',
    'country', 'País Ejemplo'
  ),  -- Campo JSON para la ubicación
  NOW(),  -- createdAt: Fecha y hora actuales
  NOW()   -- updatedAt: Fecha y hora actuales
);

