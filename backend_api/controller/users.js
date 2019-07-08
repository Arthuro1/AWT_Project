const JWT = require('jsonwebtoken');
const Pusher = require('pusher');

const Comment = require('../models/comment');
const User = require('../models/user');
const {JWT_SECRET} = require('../config/keys');
const keys = require('../config/keys');

 const signToken = user => {
    return JWT.sign({
        iss: user.name,
        sub: user._id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1) // current date + 1 day ahead
    }, JWT_SECRET);
};

const pusher = new Pusher({
    appId: keys.pusher.appId,
    key: keys.pusher.key,
    secret: keys.pusher.secret,
    cluster: 'eu',
    encrypted: true
});



module.exports = {
    register: async (req, res, next) => {
        const {name, email, password} = req.value.body;
        const foundUser = await User.findOne({'local.email': email});

        if(foundUser){
            return res.status(403).json({error: 'Email is already in use.'})
        }

        const newUser = new User({method:'local', local: {name, email, password}, imageUrl: "", commentIds: []});
        await newUser.save();

        const token = signToken(newUser);

        res.status(200).json({token, user:newUser});
    },

    logIn: async (req, res, next) => {
        const user = {
            name: req.user.local.name,
            email: req.user.local.email,
        };
        const token = signToken(req.user);
        res.status(200).json({token, user});
    },

    googleOAuth: async (req, res, next) => {
        console.log('google function called');

        const token = signToken(req.user);
        res.status(200).json({token})
    },

    facebookOAuth: async (req, res, next) => {
        console.log('facebook function called');

        const token = signToken(req.user);
        res.status(200).json({token})
    },

    secret: async (req, res, next) => {
        console.log('secret function called');
        res.json({secret: "ressource"})
    },

    postComment: async (req, res, next) => {
        console.log('post comment function called');
        const {authorID, message, bookID} = req.body;
        const newComment = new Comment({
            message,
            authorID,
            commentedBookId:bookID,
            likes:0,
            commentIds:[]
        });

        await newComment.save();

        pusher.trigger(bookID, 'comment', { authorID, message});
    },

    getComment: async (req, res, next) => {
        console.log('post comment function called');
        try{
            const comments = await Comment.find({commentedBookId: req.body.bookID}).sort({'creationDate': -1});
            if(comments){
                res.status(200).json(comments);
            }
        }catch (e) {
            res.status(400).json(e.message);
        }

    },
};
