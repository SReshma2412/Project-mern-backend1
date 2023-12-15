const express = require("express")
const studentRoute = express.Router();
const schema = require("../model/schema")
const mongoose = require("mongoose")

studentRoute.post("/create-student", (req, res) => {
  schema.create(req.body, (err, data) => {
    if (err) {
      return err;
    }
    else {
      res.json(data)
    }
  })
})
studentRoute.get("/", (req, res) => {
  schema.find((err, data) => {
    if (err) {
      return err;
    }
    else {
      res.json(data)
    }
  })
})

studentRoute.route("/update-student/:id")
  .get((req, res) => {
    schema.findById(mongoose.Types.ObjectId(req.params.id), (err, data) => {
      if (err) {
        return err;
      }
      else {
        res.json(data)
      }
    })
  })

  .put((req, res) => {
    schema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), { $set: req.body },
      (err, data) => {
        if (err) {
          return err;
        }
        else {
          res.json(data)
        }
      })


  })


studentRoute.delete("/delete-student/:id", (req, res) => {
  schema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id), (err, data) => {
    if (err) {
      return err;
    }
    else {
      res.json(data)
    }
  })
})
module.exports = studentRoute;
