const asyncHandler = require('express-async-handler')

// description: Get stats
// route: GET /api/stats
// access: Private
const getStats = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get stats'})
})

// description: Set stats
// route: POST /api/stats
// access: Private
const setStats = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add text field')
    }
    res.status(200).json({message: 'Set stats'})
})

// description: Update stats
// route: PUT /api/stats/:id
// access: Private
const updateStats = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update stats ${req.params.id}`})
})

// description: Delete stats
// route: DELETE /api/stats/:id
// access: Private
const deleteStats = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete stats ${req.params.id}`})
})

module.exports = {
    getStats,
    setStats,
    updateStats,
    deleteStats,
}