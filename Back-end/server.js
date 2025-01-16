import express from "express";
import { PrismaClient } from "@prisma/client";
import { ObjectId } from "mongodb";
import bcrypt from "bcrypt";
import cors from "cors";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors());

app.post("/usuarios", async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age,
            password: hashedPassword,
        },
    });

    res.status(201).json({ message: "Usuário criado com sucesso!" });
});

app.get("/usuarios", async (req, res) => {
    let users = [];

    if (req.query) {
        users = await prisma.user.findMany({
            where: {
                name: req.query.name,
                email: req.query.email,
                age: req.query.age,
            },
        });
    } else {
        users = await prisma.user.findMany();
    }

    res.status(200).json(users);
});

app.put("/usuarios/:id", async (req, res) => {
    console.log(req);
    await prisma.user.update({
        where: {
            id: req.params.id,
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age,
        },
    });

    res.status(201).json(req.body);
});

app.delete("/usuarios/:id", async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id,
        },
    });

    res.status(200).json({ message: "Usuário deletado" });
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
        return res.status(401).json({ error: "Senha incorreta" });
    }

    res.status(200).json({
        message: "Login bem-sucedido",
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
        },
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

app.get("/usuarios/:id", async (req, res) => {
    const { id } = req.params;

    try {
        if (!ObjectId.isValid(id)) {
            return res
                .status(400)
                .json({
                    error: "ID inválido. O ID deve ser um ObjectId válido (24 caracteres hexadecimais).",
                });
        }
        const user = await prisma.user.findUnique({
            where: { id: id },
        });

        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado." });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error("Erro ao buscar usuário:", error);
        res.status(500).json({
            error: "Erro no servidor ao buscar o usuário.",
        });
    }
});
/*
BANCO DE DADOS

USUARIO: projetoRede-social
SENHA: UBY5C9b9jtRn9GmV
 
*/
