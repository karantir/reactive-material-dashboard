define([
    'jquery',
    'moment'],

function($, moment) {

    function getChartData(ops) {
        var data = [],
            value = ops.valueStart,
            label = ops.timeStart.split(':');
        label = moment().hours(label[0]).minutes(label[1]);
        for (var i=0, l=ops.count; i<l; i++) {
            data.push([label.unix(), value]);
            label.add(ops.timeStep, 'minutes');
            value = parseFloat((
                value + (Math.random() * (ops.valueMax-ops.valueMin)) + ops.valueMin
            ).toFixed(2))
        }
        console.log(data)
        return data;
    }

    function getGaugeValue(min, max) {
        var value = Math.random() * (max-min) + min;
        return value
    }

    return {
        widgets: [
            {
                type: 'chart',
                title: 'Temperature chart',
                min: 10,
                max: 50,
                data: [
                    getChartData({
                        timeStart: '9:30',
                        timeStep: 15,
                        valueStart: 19.3,
                        valueMin: -1.5,
                        valueMax: 2,
                        count: 60
                    })
                ]
            },
            {
                type: 'chart',
                title: 'Humiduty chart',
                min: 0,
                max: 100,
                data: [
                    getChartData({
                        timeStart: '9:30',
                        timeStep: 15,
                        valueStart: 90,
                        valueMin: -3,
                        valueMax: 1.1,
                        count: 60
                    })
                ]
            }
        ]
    };
});