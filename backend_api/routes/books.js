const router = require('express-promise-router')();

const BookController = require('../controller/books');


router.route('/search')
    .post(BookController.search);

router.route('/comment')
    .post(BookController.comment);

router.route('/rating')
    .post(BookController.rating);

router.route('/top-rated-books')
    .get(BookController.topRatedBooks);

router.route('/most-popular-books')
    .get(BookController.mostPopularBooks);

router.route('/search-by-lecture')
    .get(BookController.searchByLecture);

module.exports = router;
