import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

const users = [];

import bcrypt from 'bcrypt';

app.post('/usuarios', async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age,
            password: hashedPassword, 
        },
    });

    res.status(201).json({ message: 'Usuário criado com sucesso!' });
});

app.get("/usuarios", async (req, res) => {
    let users = []

    if(req.query){
        users = await prisma.user.findMany({
            where: {
                name: req.query.name,
                email: req.query.email,
                age: req.query.age
            }
        })
    } else {
        users = await prisma.user.findMany()
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

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({message: "usuario deletados"})
})

app.listen(3000);

/*
BANCO DE DADOS

USUARIO: projetoRede-social
SENHA: UBY5C9b9jtRn9GmV
 
*/
