System.config({
    map: {
         'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
         'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
         'systemjs': 'node_modules/systemjs/dist/system.js',
         'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
         'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js',
         "xmlschema.js" : "dist/xmlschema-all.js",
         "axios" : "node_modules/axios/dist/axios.min.js",
         "jquery": "node_modules/jquery/dist/jquery.js"
    },

    transpiler: 'plugin-babel'
});
