const mockMails = [
  {
    subject: 'This is a Mock Mail',
    receiver: 'someone@some.some',
    content: 'Hello world!',
  },
  {
    subject: 'This is a second Mock Mail',
    receiver: 'someone@some.some',
    content: 'Hello world 2!',
  },
  {
    subject: 'This is a third Mock Mail',
    receiver: 'someone@some.some',
    content: 'Hello world 3!',
  },
];


const resolvers = { 
  Query: {
    mails: () => mockMails,
  },
}

module.exports = resolvers;