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
            indentedSyntax: true,
            imagePath: 'images'
        }
    },
    images: {
        src: src + '/images/**',
        dest: dest + '/images'
    },
    markup: {
        src: src + '/htdocs/**',
        dest: dest
    }
}