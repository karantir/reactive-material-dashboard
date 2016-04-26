require.config({
    baseUrl: '/',
    paths: {
        'jquery':       'bower_components/jquery/dist/jquery.min',
        'ractive':      'bower_components/ractive/ractive.min',
        'lodash':       'bower_components/lodash/lodash.min',
        'moment':       'bower_components/moment/min/moment.min',
        'paths':        'bower_components/paths-js/dist/amd',

        'ractive-transitions-fade': 'bower_components/ractive-transitions-fade/dist/ractive-transitions-fade.min',
        'daemonite-material':       'bower_components/daemonite-material/js/base.min'
    },
    shim: {
        'ractive-transitions-fade': ['ractive'],
        'daemonite-material':       ['jquery',
                                     'css!bower_components/daemonite-material/css/base.min']
    },
    map: {
        '*': {
            'text': 'bower_components/requirejs-text/text',
            'css':  'bower_components/require-css/css.min'
        }
    }
});