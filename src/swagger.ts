import swaggerJsDoc from 'swagger-jsdoc';

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
    apis: ['./routes/*{.ts, .js}', './entities/*{.ts, .js}'],
};

export const swaggerSpec = swaggerJsDoc(options);