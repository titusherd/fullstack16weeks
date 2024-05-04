const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// blueprint / schema
// const noteSchema = new Schema({
//     title: String,
//     content: String
// });

const userSchema = new Schema({
    name: String,
    username: String,
    password: String
});

const productSchema = new Schema({
    name: String,
    desc: String,
    price: Number,
    sellerId: Number
});

const orderSchema = new Schema({
    productId: Number,
    buyerId: Number,
});

// model
// const Note = mongoose.model('Note', noteSchema);

const User = mongoose.model('User', userSchema);
const Product = mongoose.model('Product', productSchema);
const Order = mongoose.model('Order', orderSchema);

// module.exports = { Note };
module.exports = { User, Product, Order };