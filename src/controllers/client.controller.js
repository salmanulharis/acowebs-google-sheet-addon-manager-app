import prisma from '../config/db.config.js';

export const clientController = {
    // Create client
    async create(req, res) {
        try {
            const clients = await prisma.clients.create({
                data: req.body,
            });
            res.status(201).json(clients);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    // Get all users
    async findAll(req, res) {
        try {
            const clients = await prisma.clients.findMany();
            res.json(clients);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Update client
    async update(req, res) {
        const { id } = req.params;
        try {
            const updatedClient = await prisma.clients.update({
                where: { id: parseInt(id, 10) },
                data: req.body,
            });
            res.json(updatedClient);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    // Delete client
    async delete(req, res) {
        const { id } = req.params;
        try {
            await prisma.clients.delete({
                where: { id: parseInt(id, 10) },
            });
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
};
