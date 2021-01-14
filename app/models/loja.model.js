const sql = require("./db.js");

// constructor
const Loja = function(loja) {
  this.cidade = loja.cidade;
  this.endereco = loja.endereco;
  this.complemento = loja.complemento;
  this.bairro = loja.bairro;
  this.telefone = loja.telefone;

};

Loja.create = (newLoja, result) => {
  sql.query("INSERT INTO loja SET ?", newLoja, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Loja: ", { id: res.insertId, ...newLoja });
    result(null, { id: res.insertId, ...newLoja });
  });
};

Loja.findById = (lojaId, result) => {
  sql.query(`SELECT * FROM loja WHERE id = ${lojaId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("loja encontrada: ", res[0]);
      result(null, res[0]);
      return;
    }

    // loja não encontrado com o id
    result({ kind: "Não encontrado" }, null);
  });
};

Loja.getAll = result => {
  sql.query("SELECT * FROM loja", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("lojas: ", res);
    result(null, res);
  });
};

Loja.updateById = (id, loja, result) => {
  sql.query(
    "UPDATE loja SET cidade = ?, endereco = ?, complemento = ?, bairro = ?, telefone = ? WHERE id = ?",
    [loja.cidade,  loja.endereco,  loja.complemento,  loja.bairro,  loja.telefone,  id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // Loja não encontrado com o id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("Loja atualizada: ", { id: id, ...loja });
      result(null, { id: id, ...loja });
    }
  );
};

Loja.remove = (id, result) => {
  sql.query("DELETE FROM loja WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // Loja não encontrado com o Id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("Loja excluída com id: ", id);
    result(null, res);
  });
};

Loja.removeAll = result => {
  sql.query("DELETE FROM loja", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} lojas`);
    result(null, res);
  });
};

module.exports = Loja;
