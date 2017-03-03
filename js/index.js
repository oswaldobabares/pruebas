$(document).on("ready", init);

var view;
var controller;
var model;

function init() {
    console.log("((Init))");

    model = new Model();
    controller = new Controller();
    view = new View();
}

function View() {
    console.log("((View))");

    var mainbottom = $('#header').offset().top + $('#header').height();
    $(window).on('scroll',function(){
        
        stop = Math.round($(window).scrollTop());
        if (stop > mainbottom) {
        	$('#isotipo').addClass('labelHide');
        	$('#isotipo').removeClass('labelShow');
            $('#isotipoScroll').removeClass('labelHide');
            $('#isotipoScroll').addClass('labelShow');
        } else {
            $('#isotipo').removeClass('labelHide');
            $('#isotipo').addClass('labelShow');
            $('#isotipoScroll').removeClass('labelShow');
            $('#isotipoScroll').addClass('labelHide');
        }
    });
}

function Controller() {
    console.log("((Controller))");

    //..
}

function Model() {
    console.log("((Model))");

    //..
}

