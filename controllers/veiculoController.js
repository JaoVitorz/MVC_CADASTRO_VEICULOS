const veiculoModel = require("../models/veiculoModel");

exports.listar = (req, res) => {
    res.render("listarVeiculos", { veiculos: veiculoModel.listarTodos() });
};

exports.cadastrarView = (req, res) => {
    res.render("cadastrarVeiculo", { veiculo: null });
};

exports.cadastrar = (req, res) => {
    const { marca, modelo, ano } = req.body;
    veiculoModel.adicionar({ marca, modelo, ano });
    res.redirect("/veiculos");
};

exports.excluir = (req, res) => {
    const { id } = req.params;
    veiculoModel.excluir(id);
    res.redirect("/veiculos");
};

exports.editarView = (req, res) => {
    const { id } = req.params;
    const veiculo = veiculoModel.buscarPorId(id);
    res.render("cadastrarVeiculo", { veiculo });
};

exports.editar = (req, res) => {
    const { id } = req.params;
    const { marca, modelo, ano } = req.body;
    veiculoModel.editar(id, { marca, modelo, ano });
    res.redirect("/veiculos");
};
