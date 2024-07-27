const express = require('express');
const router = express.Router();
const Person = require("./../models/Person");
const { update } = require('lodash');
router.post('', async (req, res) => {
    try {
        const data = req.body;
        // // create a new person document using mongoose model
        const newPerson = new Person(data);
        // // newPerson.name = data.name;
        // // newPerson.age = data.age;
        // // newPerson.mobile = data.mobile;
        // // newPerson.email = data.email;
        // // newPerson.address = data.address;
        // //save the new person  to the database
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });

    }
})
router.get('/', async (req, res) => {
    try {
        const data = await Person.find()
        console.log('data fetched');
        res.status(200).json(data);

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }

})
router.get('/:workType', async (req, res) => {

    try {
        const workType = req.params.workType;
        if (workType == 'Chef' || workType == 'manager' || workType == 'waiter') {
            const response = await Person.find({ work: workType });
            console.log('response fetched');
            res.status(200).json(response);

        }
        else {
            res.status(404).json({ error: 'invalid work type ' })
        }

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error ' });


    }
})
router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const response = await Person.findByIdAndRemove(personId);
        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }
        console.log('data delete');
        res.status(200).json({ error: 'person not found' });

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error ' });

    }
}
)
router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const updatedPersonData = req.body;
        const response = await Person.findByIdAndUpdate(personId, updatedPersonData,
            {
                new: true,//Return the updated document
                runValidators: true,//Run Mongoose validation


            })
        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }
        console.log('data updated');
        res.status(200).json(response);


    }


    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error ' });
    }
})
module.exports = router;
