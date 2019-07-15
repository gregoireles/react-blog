const express = require("express");
const router = new express.Router();
const Tag = require("../models/Tag");

const getAll = () => Tag.find();
const getOne = id => Tag.findById(id);
const updateOne = (id, data) => Tag.findByIdAndUpdate(id, data, {new: true});
const deleteOne = id => Tag.findByIdAndDelete(id);
const create = data => Tag.create(data);

router.get("/", (req, res) => {
  getAll()
    .then(tags => {
      res.status(200).send(tags);
    })
    .catch(error => res.status(500).send("Something went wrong"));
});

router.get("/:id", (req, res) => {
  getOne(req.params.id)
    .then(tag => {
      res.status(200).send(tag);
    })
    .catch(error => res.status(500).send("Something went wrong"));
});

router.post("/", (req, res) => {
  create(req.body)
    .then(tag => res.status(200).send(tag))
    .catch(err => res.status(500).send("Something went wrong"));
});

router.delete("/:id", (req, res) => {
  deleteOne(req.params.id)
    .then(deletedTag => {
      res.status(200).send(deletedTag);
    })
    .catch(error => res.status(500).send("Something went wrong"));
});

router.patch("/:id", (req, res) => {
  updateOne(req.params.id, req.body).then(updatedTag => res.status(200).send(updatedTag));
});

//TODO Validation ??

module.exports = {
  router,
  getAll,
  getOne,
  deleteOne,
  updateOne,
  create
};
