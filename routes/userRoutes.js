const express = require('express');
const { allUsers, getUser, fakeUser, fakeUserDeleteAll } = require('../controllers/userController');
const router = express.Router()

router.get('/', allUsers);
router.get('/:id', getUser);

router.get('/fake', fakeUser);
// router.get('/fake/delete', fakeUserDeleteAll);



module.exports = router