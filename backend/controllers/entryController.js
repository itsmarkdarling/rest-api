const asyncHandler = require("express-async-handler");

const Entry = require("../models/entryModel");
const User = require("../models/userModel");

// description: Get entries
// route: GET /api/entries
// access: Private
const getEntries = asyncHandler(async (req, res) => {
  const entries = await Entry.find({ user: req.user.id });

  res.status(200).json(entries);
});

// description: Set entries
// route: POST /api/entries
// access: Private
const setEntry = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text field");
  }

  const entries = await Entry.create({
    text: req.body.text,
    user: req.user.id,
  });
  res.status(200).json(entries);
});

// description: Update entries
// route: PUT /api/entries/:id
// access: Private
const updateEntry = asyncHandler(async (req, res) => {
  const entry = await Entry.findById(req.params.id);

  if (!entry) {
    res.status(400);
    throw new Error("Entry not found");
  }

  const user = await User.findById(req.user.id);

  // Check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Ensure logged in user matches entry user
  if (entry.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedEntry = await Entry.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedEntry);
});

// description: Delete entries
// route: DELETE /api/entries/:id
// access: Private
const deleteEntry = asyncHandler(async (req, res) => {
  const entry = await Entry.findById(req.params.id);
  const user = await User.findById(req.user.id);

  if (!entry) {
    res.status(400);
    throw new Error("Entry not found");
  }

   // Check for user
   if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Ensure logged in user matches entry user
  if (entry.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await entry.deleteOne()

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getEntries,
  setEntry,
  updateEntry,
  deleteEntry,
};
