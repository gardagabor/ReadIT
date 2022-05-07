System.config({
    paths: {
        'npm:': 'node_modules/',
        'angular:': 'node_modules/@angular/'
    },
    map: {
        // angular bundles
        '@angular/core': 'angular:core/bundles/core.umd.js',
        '@angular/common': 'angular:common/bundles/common.umd.js',
        '@angular/compiler': 'angular:compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'angular:platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'angular:platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http': 'angular:http/bundles/http.umd.js',
        '@angular/router': 'angular:router/bundles/router.umd.js',
        '@angular/router/upgrade': 'angular:router/bundles/router-upgrade.umd.js',
        '@angular/forms': 'angular:forms/bundles/forms.umd.js',

        // other libraries
        'rxjs': 'npm:rxjs',
        'ng2-bootstrap': 'npm:ng2-bootstrap/bundles/ng2-bootstrap.umd.js',
        'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
        'lodash': 'npm:lodash/lodash.js'
    },
    packages: {
        app: {
            main: './main.js',
            defaultExtension: 'js',
            meta: {
                './*.js': {
                    loader: 'systemjs-angular-loader.js'
                }
            }

        },
        rxjs: {
            defaultExtension: 'js'
        },
        "ng2-bootstrap": {
            defaultExtension: 'js'
        }
    }
});
System.import('main.js').catch(console.error);