define([
    'jquery',
    'paths/smooth-line'],

function($, Line) {

    return function() {

        return {
            Chart: Line,
            xaccessor: function(d) { return d[0] },
            yaccessor: function(d) { return d[1] },
            width: 500,
            height: 380
        }
    }
});