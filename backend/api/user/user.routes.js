const express = require('express')
const {requireAuth, requireAdmin} = require('../middlewares/requireAuth.middleware')
const {getUser, getUsers, deleteUser} = require('./user.controller')
const router = express.Router()

router.get('/', requireAuth, getUsers)
router.get('/:id', getUser)
router.delete('/:id',  requireAuth, requireAdmin, deleteUser)

module.exports = router