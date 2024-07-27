// // // // // // function add(a, b) {
// // // // // //     return a + b;
// // // // // // }
// // // // // // var result = add(2, 6);
// // // // // // console.log(result);
// // // // // // var add = function (a, b) {
// // // // // //     return a + b;
// // // // // // }
// // // // // // var add = (a, b) => { return a + b; }
// // // // // var add = (a, b) => a + b;
// // // // // var result = add(2, 90);
// // // // // console.log(result);
// // // // // function callback() {
// // // // //     console.log('prince is calling a callback function');
// // // // // }
// // // // const add = function (a, b, prince) {
// // // //     var result = a + b;
// // // //     console.log('result: ' + result);
// // // //     prince();
// // // // }
// // // // add(2, 3, () => console.log('add completed'));

// // // const { log } = require('console');
// // // var fs = require('fs');
// // // var os = require('os');
// // // var user = os.userInfo();
// // // console.log(user.username);
// // // fs.appendFile('greeting.txt', 'HI' + user.username + '!', () => {
// // //     console.log('successfully done');
// // // })
// // // console.log(fs);
// // const notes = require('./notes');
// // var age = notes.age;
// // console.log(age);
// // var result = notes.addNumber(age + 18, 90);
// // console.log(result);

// // var _ = require('loadsh');
// // var data = ["person", "person", 1, 2, 2, 3, 3, 'name', 'age', '2'];
// // var filter = _.uniq(data);
// // console.log(filter);
// // const jsonString = '{"name": "John","age":30,"city" :"New York"}';
// // const jsonObject = JSON.parse(jsonString);//
// // console.log(jsonObject.name);
// // const objectToConvert = {
// //     name: "Alice", age: 25
// // };
// // const json = JSON.stringify(objectToConvert);
// // console.log(json);
// // console.log(typeof (json));
const express = require('express')
const app = express();
const db = require('./db');

const Person = require('./models/Person');
const MenuItem = require('./models/MenuItem');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.send('welcome to mynhotel...How i ca help you')
})
// app.get('/chicken', (req, res) => {
//     res.send('sure sir,i would love to serve chicken')
// })
// app.get('/idli', (req, res) => {
//     var custom_idli = {
//         name: 'rava idli',
//         size: '10 cm ',
//         is_sambhar: 'yes'
//     }
//     res.send(custom_idli)
// })
// app.post('/person', (req, res) => {
//     console.log('data is saved');
//     res.send('data is saved')
// })
// app.post('/person', async (req, res) => {
//     try {
//         const data = req.body;
//         // // create a new person document using mongoose model
//         const newPerson = new Person(data);
//         // // newPerson.name = data.name;
//         // // newPerson.age = data.age;
//         // // newPerson.mobile = data.mobile;
//         // // newPerson.email = data.email;
//         // // newPerson.address = data.address;
//         // //save the new person  to the database
//         const response = await newPerson.save();
//         console.log('data saved');
//         res.status(200).json(response);

//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'Internal server error' });

//     }
// })
// app.get('/person', async (req, res) => {
//     try {
//         const data = await Person.find()
//         console.log('data fetched');
//         res.status(200).json(data);

//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'Internal server error' });
//     }

// }
// )
// app.post('/menu', async (req, res) => {
//     try {
//         const data = req.body;
//         const newMenu = new MenuItem(data);
//         const response = await newMenu.save();
//         res.status(200).json(response);
//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'Internal Server Error' })
//     }
// })
// app.get('/menu', async (req, res) => {
//     try {
//         const data = await MenuItem.find();
//         console.log('data fetched ');
//         res.status(200).json(data);
//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// })
// app.get('/person/:workType', async (req, res) => {

//     try {
//         const workType = req.params.workType;
//         if (workType == 'Chef' || workType == 'manager' || workType == 'waiter') {
//             const response = await Person.find({ work: workType });
//             console.log('response fetched');
//             res.status(200).json(response);

//         }
//         else {
//             res.status(404).json({ error: 'invalid work type ' })
//         }

//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'Internal server error ' });


//     }
const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);
const menuitemsRoutes = require('./routes/menuitemsRoutes');
// app.use('/menu', menuitemsRoutes);





app.listen(3000, () => console.log('listenint on port 30000'))//represents port 
