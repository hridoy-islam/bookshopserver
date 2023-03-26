const express = require('express');
const router = express.Router()
const { allbooks, fakeDeleteAll, fakebooks, getbook, addbook, deletebook, updatebook } = require( '../controllers/bookController')

router.get('/', allbooks);
router.get('/:id', getbook);
router.post('/add', addbook);
router.delete('/delete/:id', deletebook);
router.patch('/update/:id', updatebook);

router.get('/data/fake', fakebooks);
router.get('/data/delete', fakeDeleteAll)



module.exports = router