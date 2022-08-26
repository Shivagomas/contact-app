const express = require('express');
const router = express.Router();

const {Contact} = require('../models/contact');

router.get("/", async(req,res) => {
    const contact = await Contact.find().sort('name');
    return res.send(contact);
});

router.get("/:id", async (req,res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact) return res.status(404).send("contact not found");
    return res.send(contact);
});

router.post("/", async(req,res) => {
    let contact = new Contact({ name: req.body.name, email: req.body.email })
    await contact.save();
    return res.send(contact);
});

router.put("/:id", async(req,res) => {
    const contact = await Contact.findByIdAndUpdate(req.params.id, {name: req.body.name, email: req.body.email})
    if(!contact) return res.status(404).send('contact not found');
    return res.send(contact);
});

router.delete("/:id", async(req,res) => {
    const contact = await Contact.findByIdAndRemove(req.params.id);
    if(!contact) return res.status(404).send('contact not found');
    return res.send(contact);
})

module.exports = router;