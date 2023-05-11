const server = require('express');
const router = server.Router();
const mongoose = require('mongoose');
const Mail = mongoose.model('Mail');

const pingHandler = (_, res) => {
  res.send('Healthy');
};

const mailsHandler = async (_, res) => {
  let mails;
  let error;

  try {
    mails = await Mail.find();
  } catch(err) {
    error = err;
  }

  res.send({
    message: 'Got response from DB',
    service: 'Database Service',
    status: 200,
    payload: mails || error,
  });
}

const singleMailHandler = async (req, res) => {
  const id = req.params.id;
  let mail;
  let error;
  try {
    mail = await Mail.findOne({ _id: id });
  } catch (err) {
    error = err;
  }

  res.send({
    message: 'Got response from DB',
    service: 'Database Service',
    status: 200,
    payload: mail || error,
  });
}


router.get('/', pingHandler);
router.get('/mails', mailsHandler);
router.get('/mails/:id', singleMailHandler);

module.exports = router;