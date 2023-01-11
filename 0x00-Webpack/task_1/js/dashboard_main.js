import $ from "jquery";
const _ = require('lodash');

$("<p>Holberton Dashboard</p>")["$('body').append"];
$("<p>Dashboard data for the students</p>")["$('body').append"];
$("<p>Copyright - Holberton School</p>")["$('body').append"];
$("<p id='count'></p>")["$('body').append"];
$("<p>Copyright - Holberton School</p>")["$('body').append"];

  let count = 0;
  const updateCounter = () => $('#count').html(`${++count} clicks on the button`);
  $('button').on('click',  _.debounce(updateCounter, 500, { 'leading': true }));
