const Book = require('../models/book');
const Comment = require('../models/comment');
const User = require('../models/user');
const books = require('google-books-search');
var ObjectId = require('mongoose').Types.ObjectId;

let options = {
    key: "AIzaSyDdXkxOLErgyh0mWxKbOL07zxTMFbR-9RE",
    field: 'title',
    offset: 0,
    limit: 40,
    type: 'books',
    order: 'relevance',
    lang: 'en'
};

module.exports = {

    search: async (req, res, next) => {
        console.log('search function called');

        books.search(req.body.lecture, options, function(error, results, apiResponse) {
            if ( ! error ) {

               results.forEach( async book =>{
                   const bookFound = await Book.findOne({'id': book.id});

                   if(!bookFound){
                       const newBook = new Book({lecture:req.body.lecture, title: book.title, subtitle: book.subtitle?book.subtitle:"", authors: book.authors, publisher: book.publisher, publishedDate: book.publishedDate, description: book.description?book.description:"", pageCount:book.pageCount, link: book.link, id: book.id, thumbnail: book.thumbnail, language: book.language, rating:{average: 0, sum: 0, idsOfVoter: []}, commentIds: []});
                       await newBook.save();
                   }

               });

                res.status(200).json({apiResponse});

            } else {
                res.status(404).json(error);
            }
        });
    },

    comment: async (req, res, next) => {
        console.log('comment function called');

        const {text, authorId, commentedBookId} = req.body;

        const newComment = new Comment({text, authorId, commentedBookId, likes: 0, commentIds: []});
        await newComment.save();
        const foundUser = await User.findOne({'_id': new ObjectId(authorId)});
        const foundBook = await Book.findOne({'id': commentedBookId});

        if(foundUser){
          foundUser.commentIds.push(newComment._id);
          foundUser.save(function(err) {
              if (err) {console.log(err)}else{console.log("save new comment successfully in user")}
          });
        }
        if(foundBook){
            foundBook.commentIds.push(newComment._id);
            foundBook.save(function(err) {
                if (err) {console.log(err)}else{console.log("save new comment successful in book")}
            });
        }

        res.status(200).json({comment: "added"});
    },

    rating: async (req, res, next) => {
        console.log('rating function called');

        const {value, ratedBookId, voterEmail} = req.body;

           await Book.findOne({'id': ratedBookId},  async function(err, foundBook){
               console.log("callback");
               if(foundBook){
                   console.log("book found");
                   const found = foundBook.rating.idsOfVoter.includes(voterEmail);
                   console.log('array',foundBook.rating.idsOfVoter );
                   console.log('found', found);

                   if(!found){

                       foundBook.rating.idsOfVoter.push(voterEmail);

                       const actualSum = foundBook.rating.sum+value;
                       const averageValue = actualSum/foundBook.rating.idsOfVoter.length;
                       foundBook.rating.average = averageValue;
                       foundBook.rating.sum = actualSum;
                       foundBook.save(function(err) {
                           if (err) {console.log(err)}else{console.log("save rating successfully in book")}
                       });
                       res.status(200).json({newValue: averageValue, numberOfvoter: foundBook.rating.idsOfVoter.length});
                   }else{
                       res.status(200).json({message: "user already voted"});
                   }

               }else{
                   console.log(err);
               }
           });


    },

    topRatedBooks: async (req, res, next) => {
        const topRatedBooks = await Book.find().sort({'rating.average': -1}).limit(6);
        if(topRatedBooks) {
            res.status(200).send(topRatedBooks);
        }else{
            res.status(200).send("no top rated book found");
        }
    },

    searchByLecture: async (req, res, next) => {
        const filter = req.body.filter;
            if (filter === "Best Ratings") {

                await Book.find({lecture: req.body.lecture}).sort({'rating.average': -1}).limit(10).exec(function (err, result) {
                    console.log("filter: Best Ratings");
                    if (!err) res.status(200).send(result);
                    else res.send(err);
                });

            } else if (filter === "Most Rated") {

                Book.aggregate([
                    {
                        $project: {
                            authors: 1,
                            title: 1,
                            description: 1,
                            thumbnail: 1,
                            rating: 1,
                            size: {$size: '$rating.idsOfVoter'}
                        }
                    }
                ]).sort({size: -1}).limit(6).exec(function (err, result) {
                    console.log("filter: Most rated");
                    if (!err) res.status(200).send(result);
                    else res.send(err);
                });

            } else {
                console.log("no filter set");
                await Book.find({lecture: req.body.lecture}).exec(function (err, result) {
                    console.log("no filter set");
                    if (!err) res.status(200).send(result);
                    else res.send(err);
                });
            }

    },

    mostPopularBooks: async (req, res, next) => {
        Book.aggregate([
            { $project: { authors: 1, title: 1, description: 1, thumbnail: 1, rating: 1, size: { $size: '$rating.idsOfVoter' } } }
        ]).sort({size: -1}).limit(6).exec(function(err, result){
                if(!err) res.status(200).send(result);
                else res.send(err);
        });

    }
};
