define([
    'jquery',
    'paths/bar',
    'paths/smooth-line'],

function($, Bar, Line) {

    return function() {

        var self = this,
            min = self.get('min'),
            max = self.get('max');

        return {
            Bar: Bar,
            Line: Line,
            xaccessor: function(d) { return d[0] },
            yaccessor: function(d) { return d[1] },
            width: 500,
            height: 380,
            compute: {
                grad_id: function(seriesNum, item, itemNum) {
                    return 'grad-' + seriesNum + itemNum + '-' + parseInt(Math.random() * 100000)
                },
                hue: function(seriesNum, item, itemNum) {
                    return parseInt(120 + 120 * (item[1] / max))
                }
            }
        }
    }
});