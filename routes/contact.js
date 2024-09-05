const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// CREATE CONTACT
router.post("/contact", async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        const savedContact = await newContact.save();
        console.log(savedContact);
        res.status(201).json(savedContact); // Send response after saving contact
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Unable to save contact" });
    }
});

// READ ALL CONTACTS
router.get("/contacts", async (req, res) => {
    try {
        const contacts = await Contact.find();
        console.log(contacts);
        res.status(200).json(contacts); // Send response with all contacts
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Unable to get contacts" });
    }
});

// READ SINGLE CONTACT
router.get("/contact/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const contact = await Contact.findById(id);
        console.log(contact);
        if (contact) {
            res.status(200).json(contact); // Send response with the single contact
        } else {
            res.status(404).json({ msg: "Contact not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Unable to get contact" });
    }
});

// DELETE CONTACT
router.delete("/contact/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const deletedContact = await Contact.findByIdAndDelete(id);
        console.log(deletedContact);
        if (deletedContact) {
            res.status(200).json({ msg: "Contact deleted successfully" }); // Confirm deletion
        } else {
            res.status(404).json({ msg: "Contact not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Unable to delete contact" });
    }
});

module.exports = router;
