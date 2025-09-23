const express = require("express");
const router = express.Router();
const veiculoController = require("../controllers/veiculoController");

router.get("/", veiculoController.listar);
router.get("/cadastrar", veiculoController.cadastrarView);
router.post("/cadastrar", veiculoController.cadastrar);
router.get("/excluir/:id", veiculoController.excluir);
router.get("/editar/:id", veiculoController.editarView);
router.post("/editar/:id", veiculoController.editar);

module.exports = router;
