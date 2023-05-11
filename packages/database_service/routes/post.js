const server = require('express');
const router = server.Router();
const mongoose = require('mongoose');
const Mail = mongoose.model('Mail');


const mailHandler = async (req, res) => {
  let mail;
  let error;
  const body = req.body;
  const { subject, receiver, content } = body;
  const allFieldsAreNotComplete = !subject || !receiver || !content;
  if (allFieldsAreNotComplete) {
    res.sendStatus(400).send({
      message: 'You forgot some important key',
      service: 'Database Service',
      status: 400,
      payload: null,
    })
  }

  mail = new Mail({
    subject,
    receiver,
    content,
  });

  try {
    mail = await mail.save();
  } catch (err) {
    error = err;
  }

  res.send({
    message: 'Got response from db',
    service: 'Database service',
    status: 200,
    payload: mail || error,
  });

}

router.post('/mails', mailHandler);


module.exports = router;