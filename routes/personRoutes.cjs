const express = require('express');
const router = express.Router();
const Person = require('../models/person.cjs');


router.post('/', async (req, res) => {

    try {
        const newPerson = new Person(req.body);

        const response = await newPerson.save();
        console.log("response:", response);
        res.status(200).json({ message: 'Person created successfully', person: response });
    } catch (err) {
        console.error("Error creating person:", err);
        res.status(500).json({ error: err.message });
    }

});

// newPerson.save()
//     .then(person => res.status(200).json(person))
//     .catch(err => res.status(400).json({ error: err.message }));

router.get('/', (req, res) => {
    Person.find()
        .then(persons => res.json(persons))
        .catch(err => res.status(500).json({ error: err.message }));
});

router.get('/:workType', async(req, res) => {

    try{
    const workType = req.params.workType;
    console.log(workType);
    if(workType == 'chef' || workType == 'waiter' || workType == 'manager'){
            const response = await Person.find({work: workType});
            console.log("Response fetched");
            res.status(200).json(response);
        }
        else {
res.status(500).json({error: "invalid workType"})
    }
    
}catch(err){
res.status(500).json({error: err})
    }
})


router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const updatedData = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatedData, { new: true });
        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }
        res.status(200).json({ message: 'Person updated successfully', person: response });
    } catch (err) {
        console.error("Error updating person:", err);
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id;

        const response = await Person.findByIdAndDelete(personId);
        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }
        res.status(200).json({ message: 'Person deleted successfully', person: response });
    } catch (err) {
        console.error("Error deleting person:", err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;