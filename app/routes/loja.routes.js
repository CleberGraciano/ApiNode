module.exports = app => {
  const lojas = require("../controllers/loja.controller.js");

  // Criando uma nova Loja
  app.post("/lojas", lojas.create);

  // Buscando todas as lojas
  app.get("/lojas", lojas.findAll);

  // Buscando loja por id
  app.get("/lojas/:lojaId", lojas.findOne);

  // Atualizando loja com base no Id do Produto
  app.put("/lojas/:lojaId", lojas.update);

  // Deletando Loja por Id
  app.delete("/lojas/:lojaId", lojas.delete);

  // Deletando todas as lojas
  app.delete("/lojas", lojas.deleteAll);
};
