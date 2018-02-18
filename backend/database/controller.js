const Chain = require('./model.js');

const controller = {};

controller.saveHistory = (req, res, next) => {
  if (!req.body) {
    res.status(404).send('Error')
  }
  else {
    Chain.create({item: JSON.stringify(req.body)}, (err, result) => {
      console.log("req.body: ", req.body)
      // if (result) {
      //   return res.json(result)
      // }
    })
  }
}

controller.getHistory = (req, res, next) => {
  Chain.find({}, (err, result) => {
    if (result) {
      console.log("getHistory: ", result)
      return res.json(result)
    }
    else {
      res.status(404).send('Error!')
    }
  })
}

module.exports = controller; 