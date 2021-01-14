const Loja = require("../models/loja.model.js");

// Cria e Salva uma nova Loja
exports.create = (req, res) => {
  // Valida a Requisição
  if (!req.body) {
    res.status(400).send({
      message: "Conteudo não pode ser vazio!"
    });
  }
  // Cria uma Loja
  const loja = new Loja({
    cidade: req.body.cidade,
    endereco: req.body.endereco,
    complemento: req.body.complemento,
    bairro: req.body.bairro,
    telefone: req.body.telefone,
  });

  // Salva uma Loja no banco de Dados
  Loja.create(loja, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Ocorreu um erro durante o salvamento da Loja."
      });
    else res.send(data);
  });
};

// Recupere todas as Lojas do banco de dados.
exports.findAll = (req, res) => {
  Loja.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Ocorreu um erro ao recuperar as lojas."
      });
    else res.send(data);
  });
};

// Busca Loja por Id
exports.findOne = (req, res) => {
  Loja.findById(req.params.lojaId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Id da Loja não encontrado ${req.params.lojaId}.`
        });
      } else {
        res.status(500).send({
          message: "Erro ao pesquisar Loja por Id " + req.params.lojaId
        });
      }
    } else res.send(data);
  });
};

// Atualiza uma loja pelo Id da Loja
exports.update = (req, res) => {
  // Valida Requisição
  if (!req.body) {
    res.status(400).send({
      message: "O conteúdo não pode estar vazio!"
    });
  }

  console.log(req.body);

  Loja.updateById(
    req.params.lojaId,
    new Loja(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Id da loja não encontrado ${req.params.lojaId}.`
          });
        } else {
          res.status(500).send({
            message: "Erro ao atualizar Loja com id " + req.params.lojaId
          });
        }
      } else res.send(data);
    }
  );
};

// Excluir Loja com Id 
exports.delete = (req, res) => {
  Loja.remove(req.params.lojaId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Id da Loja não encontrado ${req.params.lojaId}.`
        });
      } else {
        res.status(500).send({
          message: "Não foi Possivél deletar a Loja com o Id " + req.params.produtoId
        });
      }
    } else res.send({ message: `Loja deletada com sucesso!` });
  });
};

// Deletar todas as Lojas do banco de dados.
exports.deleteAll = (req, res) => {
  Loja.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Ocorreu algun erro ao deletar todas as Lojas."
      });
    else res.send({ message: `Todas Lojas foram deletados com sucesso!` });
  });
};
