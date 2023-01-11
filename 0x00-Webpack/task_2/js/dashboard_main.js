import $ from "jquery";
import _ from 'lodash';
import "../css/main.css";

$("<div id='logo'></div>")["$('body').append"];
$("<p>Holberton Dashboard</p>")["$('body').append"];
$("<p>Dashboard data for the students</p>")["$('body').append"];
$('body').append('<button>Click here to get started</button>');
$("<p id='count'></p>")["$('body').append"];
$("<p>Copyright - Holberton School</p>")["$('body').append"];

let counter = 0;
const updateCounter = _.debounce(() => {
    counter++;
    $("#count").text(`${counter} clicks on the button`);
});
$('button').on('click', _.debounce(updateCounter, 500, { 'leading': true }));
