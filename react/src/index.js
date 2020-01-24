import $ from 'jquery'

const sum = (a, b) => a + b;

$(document).ready(function() {
    $("#main-content").html('<h1>'+sum(2,4)+'</h1>')
});
