import $ from 'jquery';
import "./body.css"
const _ = require('lodash');

$("<button>Click here to get started</button>").appendTo($("body"));
$("<p id='count'></p>").appendTo("body");

let counter = 0;
const debouncedCounter = _.debounce(() => {
    counter++;
    $("#count").text(`${counter} clicks on the button`);
});
$('button').on('click', debouncedCounter);
