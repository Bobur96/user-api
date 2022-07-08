const express = require("express");
const router = require("./routes");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const app = express();
app.use(express.json());
app.use(router);
app.use(cors());

const urlForSwagger = process.env.NODE_ENV
  ? "https://user-api-for-node.herokuapp.com/"
  : "http://localhost:8080/";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "express knex contact server project",
      version: "1.0.0",
    },
    servers: [
      {
        url: urlForSwagger,
      },
    ],
  },
  apis: ["./routes/index.js"],
};
const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.listen(process.env.PORT || 4000, () => {
  console.log(`listening at port ${process.env.PORT || 4000}`);
});
