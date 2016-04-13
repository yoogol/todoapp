import { Router } from 'express';
import db from '../db.js';
import { ObjectID } from 'mongodb';

export default function() {
  const api = Router();
  const collection = db.get().collection('todos');

  api.get('/todos', (req, res) => {
    collection.find().toArray((err, docs) => {
      res.json({ todos : docs });
    });
  });

  api.post('/todos/new', (req, res) => {
    collection.insert([req.body], (err, result) => {
      res.json(result);
    });
  });

  api.put('/todos/:name', (req, res) => {
    console.log(req.params.name);
    console.log(req.body);
    collection.update({"content": req.params.name}, {$set:req.body}, {w:1}, (err, result) => {
      res.json(result);
    });
  });

  api.delete('/todos/delete/:_id', (req, res) => {
    console.log(req.params._id);
    collection.remove({"_id": ObjectID(req.params._id)}, (err, result) => {
      res.json(result);
    });
  });

  return api;
}
