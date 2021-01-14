const Produto = require("../models/produto.model.js");

// Cria e Salva um novo Produto
exports.create = (req, res) => {
  // Valida a Requisição
  if (!req.body) {
    res.status(400).send({
      message: "Conteudo não pode ser vazio!"
    });
  }

  // Cria um Produto
  const produto = new Produto({
    categoria: req.body.categoria,
    descricao: req.body.descricao,
    preco: req.body.preco,
    preco_venda: req.body.preco_venda,
    imagem: req.body.imagem,
    nome_produto: req.body.nome_produto
  });

  // Salva um Produto no banco de Dados
  Produto.create(produto, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Ocorreu um erro durante o salvamento do Produto."
      });
    else res.send(data);
  });
};

// Recupere todos os produtos do banco de dados.
exports.findAll = (req, res) => {
  Produto.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Ocorreu um erro ao recuperar produtos."
      });
    else res.send(data);
  });
};

// Busca Produto por Id
exports.findOne = (req, res) => {
  Produto.findById(req.params.produtoId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Id do Produto não encontrado ${req.params.produtoId}.`
        });
      } else {
        res.status(500).send({
          message: "Erro ao pesquisar produto por Id " + req.params.produtoId
        });
      }
    } else res.send(data);
  });
};

// Atualiza um produto pelo Id do Produto
exports.update = (req, res) => {
  // Valida Requisição
  if (!req.body) {
    res.status(400).send({
      message: "O conteúdo não pode estar vazio!"
    });
  }

  console.log(req.body);

  Produto.updateById(
    req.params.produtoId,
    new Produto(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Id do Produto não encontrado ${req.params.produtoId}.`
          });
        } else {
          res.status(500).send({
            message: "Erro ao atualizar produto com id " + req.params.produtoId
          });
        }
      } else res.send(data);
    }
  );
};

// Excluir Produto com Id 
exports.delete = (req, res) => {
  Produto.remove(req.params.produtoId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Id do Produto não encontrado ${req.params.produtoId}.`
        });
      } else {
        res.status(500).send({
          message: "Não foi Possivél deletar o Produto com o Id " + req.params.produtoId
        });
      }
    } else res.send({ message: `produto deletado com sucesso!` });
  });
};

// Deletar todos os produtos do banco de dados.
exports.deleteAll = (req, res) => {
  Produto.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Ocorreu algun erro ao deletar todos os Produtos."
      });
    else res.send({ message: `Todos produtos foram deletados com sucesso!` });
  });
};
