const express = require("express");
const conn =  require('../libs/Connection');
const router = express.Router();

conn.open();

router.get('/users', async (req, res) => {
    const users = await conn.db.collection("users").find().toArray();
    res.send(users);
});

router.get('/users/:email', async (req, res) => {
    const user = await conn.db.collection("users").find({ "email": req.params.email }).toArray();
    res.send(user);
});

router.post('/users', async (req, res) => {
    try {
        const user = await conn.db.collection("users");
        const resultFind = await user.find({ "email": req.body.email }).toArray();

        if(resultFind.length==0){
            const newUser = req.body;
    
            const result = await user.insertOne(newUser);
            res.send('Register succesfuly');
        }else{

            res.send('Already registered.');
        }
    } catch {
        console.log(error);
    }
});

router.put('/users', async (req, res) => {
    try {
        const result = await conn.db.collection('users').findOneAndUpdate(
            { "email": req.body.email },
            { $set: req.body },
            { upsert: true, returnDocument: 'after' }
        );
        res.send(result)
    } catch (e) {
        console.log(e)
    }
});

router.patch('/users', async (req, res) => {
    try {
        const emp = conn.db.collection("users")
        const result = await emp.findOneAndUpdate({ "email": req.body.email }, { $set: req.body });
        if (result) {
            res.send(result)
        } else {
            res.send("Employee not found..." + req.body.cve_emp)
        }
    } catch (e) {
        console.log(e)
    }

});

router.delete('/users/:email', async (req, res) => {
    try {
        const emp = conn.db.collection("users")
        const result = await emp.findOneAndDelete({ "email": req.params.email });
        if (result)
            res.send("User deleted...")
        else
            res.send("User not found...")
    } catch (error) {
        console.log(error)
    }

});

module.exports = router;