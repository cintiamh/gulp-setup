var dest = './build';
var src = './src';

module.exports = {
    browserSync: {
        server: {
            baseDir: dest
        }
    },
    sass: {
        src: src +'/sass/**/*.{sass,scss}',
        dest: dest + '/css',
        settings: {
            indentedSyntax: false,
            imagePath: 'images'
        }
    },
    images: {
        src: src + '/images/**',
        dest: dest + '/images'
    },
    browserify: {
        bundleConfigs: [{
            entries: src + '/js/main.js',
            dest: dest,
            outputName: 'app.js'
            // list of externally available modules to exclude from the bundle
            // external: ['jquery','underscore']
        }]
    },
    production: {
        cssSrc: dest + '/css/*.css',
        jsSrc: dest + '/js/*.js',
        dest: dest
    }
};