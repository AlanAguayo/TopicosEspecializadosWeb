const express = require("express");
const conn =  require('../libs/Connection');
const router = express.Router();

conn.open();

router.get('/orders', async (req, res) => {
    const orders = await conn.db.collection("orders").find().toArray();
    res.send(orders);
});

router.get('/orders/:status', async (req, res) => {
    const order = await conn.db.collection("orders").find({ "status": req.params.status }).toArray();
    res.send(order);
});

router.post('/orders', async (req, res) => {
    try {
        const order = conn.db.collection("orders");
        let numOrder = await conn.db.collection("orders").count();
        const newOrder = req.body;
        newOrder.order_no = numOrder++;

        const result = await order.insertOne(newOrder);
        res.send(result);
    } catch {
        console.log(error);
    }
});

router.put('/orders', async (req, res) => {
    try {
        const result = await conn.db.collection('orders').findOneAndUpdate(
            { "order_no": parseInt(req.body.order_no) },
            { $set: req.body },
            { upsert: true, returnDocument: 'after' }
        );
        res.send(result)
    } catch (e) {
        console.log(e)
    }
});

router.patch('/orders', async (req, res) => {
    try {
        const order = conn.db.collection("orders")
        const result = await order.findOneAndUpdate({ "order_no": parseInt(req.body.order_no) }, { $set: req.body });
        if (result) {order
            res.send(result)
        } else {
            res.send("Order"+req.body.cve_emp+ "not found." );
        }
    } catch (e) {
        console.log(e)
    }

});

router.delete('/orders/:order_no', async (req, res) => {
    try {
        const emp = conn.db.collection("orders")
        const result = await emp.findOneAndDelete({ "order_no": parseInt(req.params.order_no) });
        if (result)
            res.send("Order deleted.")
        else
            res.send("Order not found.")
    } catch (error) {
        console.log(error)
    }

});

module.exports = router;