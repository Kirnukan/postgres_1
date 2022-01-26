import swaggerJSDoc from 'swagger-jsdoc';

export function Swagger() {
  const swaggerDefinition = {
      openapi: '3.0.0',
      info: {
          title: 'Swagger',
          version: '1.0.0',
      },
      servers: [
          {
            url: 'http://localhost:3000',
            description: 'Swagger documentation',
          },
      ],
  };

  const options = {
      swaggerDefinition,
      apis: ['./**/routes{.js,.ts}'],
  };

  const swaggerSpec = swaggerJSDoc(options);

  return swaggerSpec;
}