const mongoose = require('mongoose');
const Joi = require('joi');

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email : {
        type: String,
        required: true
    }
})

const Contact = mongoose.model('Contact', ContactSchema);

const validateContact = contact => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required()
    })
    return schema.validate(contact)
};

exports.Contact = Contact;
exports.validateContact = validateContact;
exports.ContactSchema = ContactSchema;