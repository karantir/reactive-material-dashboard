define([
    'jquery',
    'ractive',
    'module',

    'text!./main.html',
     'css!./main.css'],

function($, Ractive, module, outerTemplate) {


    Ractive.components.widget = Ractive.extend({
        template: outerTemplate,
        oninit: function() {
            var self = this,
                type =  self.get('type'),
                path = module.id.split('/');
            path.splice(-1, 1, type);
            path = path.join('/');
            require([
                path,
                'text!' + path + '.html',
                'css!'  + path + '.css'
            ], function(innerWidget, innerTemplate) {
                new innerWidget(self);
                self.partials.innerTemplate = innerTemplate;
                self.set('innerWidget', true);
            });
        }
    });

    return Ractive.components.widget;
});