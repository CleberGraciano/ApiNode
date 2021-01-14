const sql = require("./db.js");

// constructor
const Produto = function(produto) {
  this.categoria = produto.categoria;
  this.descricao = produto.descricao;
  this.preco = produto.preco;
  this.preco_venda = produto.preco_venda;
  this.imagem = produto.imagem;
  this.nome_produto = produto.nome_produto;
};

Produto.create = (newProduto, result) => {
  sql.query("INSERT INTO Produtos SET ?", newProduto, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Produto: ", { id: res.insertId, ...newProduto });
    result(null, { id: res.insertId, ...newProduto });
  });
};

Produto.findById = (produtoId, result) => {
  sql.query(`SELECT * FROM produtos WHERE id = ${produtoId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("Produto encontrado: ", res[0]);
      result(null, res[0]);
      return;
    }

    // Produto não encontrado com o id
    result({ kind: "Não encontrado" }, null);
  });
};

Produto.getAll = result => {
  sql.query("SELECT * FROM produtos", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Produtos: ", res);
    result(null, res);
  });
};

Produto.updateById = (id, produto, result) => {
  sql.query(
    "UPDATE produtos SET categoria = ?, descricao = ?, preco = ?, preco_venda = ?, imagem = ?, nome_produto = ? WHERE id = ?",
    [produto.categoria, produto.descricao, produto.preco, produto.preco_venda, produto.imagem, produto.nome_produto, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // Produto não encontrado com o id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("produto atualizado: ", { id: id, ...produto });
      result(null, { id: id, ...produto });
    }
  );
};

Produto.remove = (id, result) => {
  sql.query("DELETE FROM produtos WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // produto não encontrado com o Id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("Produto excluído com id: ", id);
    result(null, res);
  });
};

Produto.removeAll = result => {
  sql.query("DELETE FROM produtos", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} produtos`);
    result(null, res);
  });
};

module.exports = Produto;
