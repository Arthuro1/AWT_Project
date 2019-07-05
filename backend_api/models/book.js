const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Comment = require('./comment');

const bookSchema = new Schema({
    title: {
        type: String,
    },
    subtitle: {
        type: String,
    },

    authors: [

    ],

    publisher:{
        type: String,
    },

    publishedDate:{
        type: String,
    },

    description: {
        type: String,
    },

    pageCount: {
        type: Number,
    },

    link: {
        type: String,
    },

    id: {
        type: String,
    },

    thumbnail: {
        type: String,
    },

    rating: {

        average:{
            type: Number,
        },

        sum:{
            type: Number,
        },

        idsOfVoter:[

        ],
    },

    language: {
        type: String,
    },

    commentIds: [

     ],

    creationDate: {
        type: Date,
        default: Date.now
    },
});

bookSchema.pre('save', async function(next){
    try{
        next();
    }catch (e) {
        next(e);
    }
});

const Book = mongoose.model("book", bookSchema);

module.exports = Book;
