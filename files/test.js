// Your code here
const  Employee  = require('./employee');

const jwick = new Employee('John Wick', 'Dog Lover');

 const boundJwikc = jwick.sayName;
 const sayNamejwick = boundJwikc.bind(jwick);
 setTimeout(sayNamejwick, 2000);

const jwicksOcc = jwick.sayOccupation;
const boundOcc = jwicksOcc.bind(jwick);
setTimeout(boundOcc, 3000);