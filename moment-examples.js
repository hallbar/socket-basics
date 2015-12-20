var moment = require('moment');
var now = moment();

// 2015-12-20T10:47:47-5:00
// console.log(now.format());
// Dec 20th 2015, 10:47 AM
// console.log(now.format('MMM Do YYYY, h:mm A'));

var timestamp = 1450629348425;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('h:mm a'));