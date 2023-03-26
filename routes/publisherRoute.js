const express = require('express');
const router = express.Router()
const { allPublisher, getPublisher, updatePublisher  } = require( '../controllers/publisherController')

router.get('/', allPublisher);
router.get('/:id', getPublisher);
// router.get('/:slug', getbook);
// router.post('/add', addbook);
// router.delete('/delete/:id', deletebook);
router.patch('/:id', updatePublisher);

// router.get('/data/fake', fakebooks);
// router.get('/data/delete', fakeDeleteAll)



module.exports = router