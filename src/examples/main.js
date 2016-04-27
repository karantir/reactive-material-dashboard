require([
    'jquery',
    'ractive',
    'components/board/main',
    'examples/random_data_adapter',

    'text!examples/template.html',
    'css!examples/styles.css'],

function($, Ractive, Board, data, template) {

    new Ractive({
        el: 'body',
        template: template,
        data: data
    })
});