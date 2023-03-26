const express = require('express');
const router = express.Router()
const { allAuthor, getAuthor, updateAuthor } = require( '../controllers/authorController')

router.get('/', allAuthor);
router.get('/:id', getAuthor);
// router.get('/:slug', getbook);
// router.post('/add', addbook);
// router.delete('/delete/:id', deletebook);
router.patch('/:id', updateAuthor);

// router.get('/data/fake', fakebooks);
// router.get('/data/delete', fakeDeleteAll)



module.exports = router