"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
// Rota inicial
app.get("/", (req, res) => {
    res.json({
        mensagem: "Bem-vindo à API de Cadastro de Produtos!"
    });
});
// Rota sobre o projeto
app.get("/sobre", (req, res) => {
    res.json({
        projeto: "Cadastro de Produtos",
        tecnologia: "Node.js, TypeScript e Express",
        finalidade: "Projeto didático de desenvolvimento back-end"
    });
});
app.get("/estados", (req, res) => {
    const estados = [
        "SP",
        "RJ",
        "MG",
        "BA",
        "AM",
        "DF"
    ];
    res.json({
        estados: estados.map(estado => estado.toUpperCase())
    });
});
app.get("/estados/:capitais", (req, res) => {
    const capitais = {
        ["SP".toUpperCase()]: "São Paulo",
        ["RJ".toUpperCase()]: "Rio de Janeiro",
        ["MG".toUpperCase()]: "Belo Horizonte",
        ["BA".toUpperCase()]: "Salvador",
        ["AM".toUpperCase()]: "Manaus",
        ["DF".toUpperCase()]: "Brasília"
    };
    res.json({
        capitais: capitais
    });
});
// Demonstração do método POST
app.post("/exemplo", (req, res) => {
    res.status(201).json({
        mensagem: "Exemplo de rota POST.",
        status: "Recurso criado (simulação)"
    });
});
// Demonstração do método PUT
app.put("/exemplo/:id", (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        mensagem: "Exemplo de rota PUT.",
        identificador: id,
        status: "Recurso atualizado (simulação)"
    });
});
// Demonstração do método DELETE
app.delete("/exemplo/:id", (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        mensagem: "Exemplo de rota DELETE.",
        identificador: id,
        status: "Recurso excluído (simulação)"
    });
});
