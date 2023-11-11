const express = require("express");
const conn =  require('../libs/Connection');
const router = express.Router(); 

conn.open();

router.get("/hello", (req, res) => {
    console.log("Hello");
    res.send("Hello");
})

router.get('/employees', async (req, res) => {
    const employees = await conn.db.collection("employees").find().toArray();
    res.send(employees);
});

router.get('/employees/:emp_no', async (req, res) => {
    const emp = await conn.db.collection("employees").find({ "emp_no": parseInt(req.params.emp_no) }).toArray();
    res.send(emp);
});

router.post('/employees', async (req, res) => {

    /*  const emp = {
        "emp_no": req.body.emp_no,
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "email": req.body.email,
        "gender": req.body.gender,
        "birth_day": req.body.birth_day,
        "hire_day": req.body.hire_day,
        "salary": req.body.salary,
        "department": req.body.department
      };

      const result = await db.collection("employees").insertOne(emp);
      res.send(result);
    */
    ///
    try {
        const emp = conn.db.collection("employees");
        let numEmp = await conn.db.collection("employees").count();
        const newEmp = req.body;
        newEmp.cve_emp = numEmp++;

        const result = await emp.insertOne(newEmp);
        res.send(result);
    } catch {
        console.log(error);
    }
});

router.post('/employees', async function (req, res) {
    /*newEmp = {
        "emp_no": req.body.emp_no,
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "email": req.body.email,
        "gender": req.body.gender,
        "birth_date": req.body.birth_date,
        "hire_date": req.body.hire_date,
        "salary": req.body.salary,
        "department": req.body.department
    }
    result = await db.collection("employees").insertOne(emp)*/
    try {
        const emp = conn.db.collection("employees")
        let numEmp = await conn.db.collection('employees').count({})
        const newEmp = req.body;
        newEmp.emp_no = numEmp++

        const result = await emp.insertOne(newEmp)
        res.send(result)
    } catch (error) {
        console.log(error)
    }

});

router.put('/employees', async (req, res) => {
    try {
        const result = await conn.db.collection('employees').findOneAndUpdate(
            { "emp_no": req.body.emp_no },
            { $set: req.body },
            { upsert: true, returnDocument: 'after' }
        );
        res.send(result)
    } catch (e) {
        console.log(e)
    }
});

router.patch('/employees', async (req, res) => {
    try {
        const emp = conn.db.collection("employees")
        const result = await emp.findOneAndUpdate({ "emp_no": req.body.emp_no }, { $set: req.body });
        if (result) {
            //res.send("Employee patched...")
            res.send(result)
        } else {
            res.send("Employee not found..." + req.body.cve_emp)
        }
    } catch (e) {
        console.log(e)
    }

});

router.delete('/employees/:emp_no', async (req, res) => {
    try {
        const emp = conn.db.collection("employees")
        const result = await emp.findOneAndDelete({ "emp_no": parseInt(req.params.emp_no) });
        if (result)
            res.send("Employee deleted...")
        else
            res.send("Employee not found...")
    } catch (error) {
        console.log(error)
    }

});


module.exports = router;