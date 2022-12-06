const asyncHandler = require('express-async-handler')

const Entries = require('../models/entriesModel')

// description: Get entries
// route: GET /api/entries
// access: Private
const getEntries = asyncHandler(async (req, res) => {
    const entries = await Entries.find()

    res.status(200).json(entries)
})

// description: Set entries
// route: POST /api/entries
// access: Private
const setEntry = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add text field')
    }

    const entries = await Entries.create({
        text: req.body.text
    })
    res.status(200).json(entries)
})

// description: Update entries
// route: PUT /api/entries/:id
// access: Private
const updateEntry = asyncHandler(async (req, res) => {
    const entry = await Entries.findById(req.params.id)

    if (!entry) {
        res.status(400)
        throw new Error('Entry not found')
    }

    const updatedEntry = await Entries.findByIdAndUpdate(req.params.id, req.body, {new: true,})

    res.status(200).json(updatedEntry)
})

// description: Delete entries
// route: DELETE /api/entries/:id
// access: Private
const deleteEntry = asyncHandler(async (req, res) => {
    const entry = await Entries.findByIdAndDelete(req.params.id)

    if (!entry) {
        res.status(400)
        throw new Error('Entry not found')
    }

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getEntries,
    setEntry,
    updateEntry,
    deleteEntry,
}