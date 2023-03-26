const express = require('express');
const { allUsers, getUser, checkUser, createUser } = require('../controllers/userController');
const router = express.Router()

router.get('/', allUsers);
router.get('/:id', getUser);
router.get('/check/:email', checkUser)
router.post('/', createUser)

//router.get('/fake', fakeUser);
// router.get('/fake/delete', fakeUserDeleteAll);



module.exports = router