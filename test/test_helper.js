const mongoose = require('mongoose');

//method 1 to connect
mongoose.connect('mongodb://localhost/users_test');
mongoose.connection
  .once('open', () => console.log('good to go!'))
  .on('error', (err) => {
    console.warn('warning! ', err);
  });

//method 2 to connect
// async function main() {
//   await mongoose
//     .connect(
//       'mongodb://localhost:27017/test_users?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'
//     )
//     .then(() => console.log('connection succed!'))
//     .catch((err) => console.log('cannot connect!! ', err));
// }
// main();
