class VeiculoModel {
    constructor() {
        this.veiculos = [];
        this.nextId = 1;
    }

    listarTodos() {
        return this.veiculos;
    }

    adicionar(veiculo) {
        veiculo.id = this.nextId++;
        this.veiculos.push(veiculo);
    }

    excluir(id) {
        this.veiculos = this.veiculos.filter(v => v.id != id);
    }

    editar(id, dadosAtualizados) {
        const index = this.veiculos.findIndex(v => v.id == id);
        if (index !== -1) {
            this.veiculos[index] = { ...this.veiculos[index], ...dadosAtualizados };
        }
    }

    buscarPorId(id) {
        return this.veiculos.find(v => v.id == id);
    }
}

module.exports = new VeiculoModel();
