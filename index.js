import express from 'express';
import { mongoConnect } from './database.js';
import { PetModel } from './model/pet.model.js';
import { config } from 'dotenv';
import cors from 'cors';

config();
mongoConnect();

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(400).send('Hallo Welt')
});

app.get('/pet', async (req, res) => {
    const pets = await PetModel.find({});
    return res.send(pets);
});

app.post('/pet', async (req, res) => {
    const data = req.body;
    console.log(data);
    try {
        const pet = await PetModel.create(data);
        return res.send({
            message: 'Hinzugefügt',
            data: pet,
        });
    } catch (error) {
        // if (error instanceof ValidationError) {}
        return res.status(400).send({
            error: error.message
        });
    }
});

const PORT = 4000;
app.listen(PORT, () => {
    console.info('Server gestartet http://localhost:'+PORT);
});