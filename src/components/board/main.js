define([
    'jquery',
    'ractive',

    'text!./main.html',
     'css!./main.css',

    'components/widget/main'],

function($, Ractive, template) {

    // add/remove widgets
    // layout widgets
    Ractive.components.board = Ractive.extend({
        template: template
    });

    return Ractive.components.board;
});