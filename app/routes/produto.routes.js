module.exports = app => {
  const produtos = require("../controllers/produto.controller.js");

  // Criando um novo Produto
  app.post("/produtos", produtos.create);

  // Buscando todos os produtos
  app.get("/produtos", produtos.findAll);

  // Buscando produto por id do produto
  app.get("/produtos/:produtoId", produtos.findOne);

  // Atualizando produto por com base no Id do Produto
  app.put("/produtos/:produtoId", produtos.update);

  // Deletando um Produto por Id do mesmo
  app.delete("/produtos/:produtoId", produtos.delete);

  // Deletando todos os produtos
  app.delete("/produtos", produtos.deleteAll);
};
