System.config({
    map: {
         'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
         'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
         'systemjs': 'node_modules/systemjs/dist/system.js',
         'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
         'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js',
         "xmlschema.js" : "test/node_modules/@jean-andre-gauthier/xmlschema.js/dist/xmlschema-all.min.js"
    },

    transpiler: 'plugin-babel'
});
