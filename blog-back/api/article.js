const express = require("express");
const router = new express.Router();
const Article = require("../models/Article");
const cloudinaryUpload = require("../config/cloudinary")
const getAll = () => Article.find();
const getOne = id => Article.findById(id);
const updateOne = (id, data) => Article.findByIdAndUpdate(id, data);
const deleteOne = id => Article.findByIdAndDelete(id);
const create = data => Article.create(data);

router.get("/", (req, res) => {
  getAll()
    .then(articles => {
      res.status(200).send(articles);
    })
    .catch(error => res.status(500).send("Something went wrong"));
});

router.get("/:id", (req, res) => {
  getOne(req.params.id)
    .then(article => {
      res.status(200).send(article);
    })
    .catch(error => res.status(500).send("Something went wrong"));
});

router.post("/", cloudinaryUpload.single("photo"),(req, res) => {
  console.log(req.file)
  create(req.body)
    .then(article => res.status(200).send(article))
    .catch(err => res.status(500).send("Something went wrong"));
});

router.delete("/:id", (req, res) => {
  deleteOne(req.params.id)
    .then(articles => {
      res.status(200).send(articles);
    })
    .catch(error => res.status(500).send("Something went wrong"));
});

router.patch("/:id", (req, res) => {
  updateOne(req.params.id, req.body).then(updatedDocument =>
    res.status(200).send(updatedDocument)
  );
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
