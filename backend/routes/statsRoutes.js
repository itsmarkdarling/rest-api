const express = require('express')
const router = express.Router()
const { getStats, setStats, updateStats, deleteStats } = require('../controllers/statController')

router.route('/').get(getStats).post(setStats)

router.route('/:id').delete(deleteStats).put(updateStats)


module.exports = router