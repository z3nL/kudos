const { PrismaClient } = require('./generated/prisma');
const express = require('express');
const cors = require('cors');

const prisma = new PrismaClient();
const app = express();
    app.use(express.json());
    app.use(cors());

const PORT = 3000;

// GET (Root)
// Returns list of all existing boards in database.
// If no boards exist, a JSON containing a boolean and message indicating as such is returned
app.get('/', async (req, res) => {
    try {
        const foundBoards = await prisma.board.findMany();   

        if (foundBoards.length > 0)
            return res.status(200).json(foundBoards);

        else
            return res.status(200).send({ empty: true, message : 'No boards here! Try making one.' });
    } 
    
    catch (error) {
        console.error(error);
        return res.status(500).json({ error : error });
    }
});

// POST /boards
// Uploads a new board to the databse
// Returns JSON containing the newly created board's info
app.post('/boards', async (req, res) => {
    const { title, category, author, desc } = req.body

    try {
        const newBoard = await prisma.board.create({
            data: {
                title, category, author, desc
            }
        });
        
        return res.status(201).json(newBoard);
    } 
    
    catch (error) {
        console.error(error);
        return res.status(500).json({ error : error });
    }
});

// DELETE /boards/:boardID
// Deletes a board in the database corresponding to the provided boardID
// Also deletes any kudo linked to it by boardID
// Returns JSON containing the removed board's info
app.delete('/boards/:boardID', async (req, res) => { 
    const { boardID } = req.params;

    try {
        const deletedBoard = await prisma.board.delete({
            where: { boardID : parseInt(boardID) }
        });

        await prisma.kudo.deleteMany({
            where: { boardID : parseInt(boardID) }
        })

        return res.status(200).json(deletedBoard);
    } 
    
    catch (error) {
        console.error(error);
        return res.status(500).json({ error : error });
    }
});

// GET /boards/:boardID
// Returns list of all existing kudos in database that correspond to the provided boardID
// If no kudos exist, a JSON containing a boolean and message indicating as such is returned
app.get('/boards/:boardID', async (req, res) => {
    const { boardID } = req.params;
    
    try {
        const foundKudos = await prisma.kudo.findMany({
            where: { boardID : parseInt(boardID) }
        });
        
        if (foundKudos.length > 0)
            return res.status(200).json(foundKudos);
        
        else
            return res.status(200).json({ empty : true, message : 'No kudos here! Try making one.'});
    } 
    
    catch (error) {
        console.error(error);
        return res.status(500).json({ error : error });
    }
});

// POST /boards/:boardID
// Links a new kudo to its corresponding board and uploads it to the database
// Returns a JSON containing the newly created kudo's info
app.post('/boards/:boardID', async (req, res) => {
    const { boardID } = req.params;
    const { title, description, gifSource, owner } = req.body;

    try {
        const newKudo = await prisma.kudo.create({
            data : {
                boardID : parseInt(boardID), 
                title, description, gifSource, owner
            }
        });

        return res.status(201).json(newKudo);
    }

    catch (error) {
        console.error(error);
        return res.status(500).json({ error : error });
    }
});

// DELETE /boards/:boardID/:kudoID
// Deletes a kudo from the database corresponding to the provided corresponding boardID and kudoID
// Returns a JSON containing the removed kudo's info
app.delete('/boards/:boardID/:kudoID', async (req, res) => {
    const { boardID, kudoID } = req.params;

    try {
        const deletedKudo = await prisma.kudo.delete({
            where : { boardID : parseInt(boardID), kudoID : parseInt(kudoID) }
        });

        res.status(200).json(deletedKudo);
    }

    catch (error) {
        console.error(error);
        return res.status(500).json({ error : error });
    }
});

// PUT /boards/:boardID/:kudoID
// Increments the voteCount of a specified kudo by 1, provided the corresponding boardID and kudoID
// Returns a JSON containing the updated kudo's info
app.put('/boards/:boardID/:kudoID', async (req, res) => {
    const { boardID, kudoID } = req.params;
    
    try {
        const kudoToUpdate = await prisma.kudo.findFirst({
            where : { boardID : parseInt(boardID), kudoID : parseInt(kudoID) }
        });

        const updatedKudo = await prisma.kudo.update({
            where : { boardID : parseInt(boardID), kudoID : parseInt(kudoID) },
            data : {
                voteCount : kudoToUpdate.voteCount + 1
            }
        });

        res.status(200).json(updatedKudo);
    }

    catch (error) {
        console.error(error);
        return res.status(500).json({ error : error });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});