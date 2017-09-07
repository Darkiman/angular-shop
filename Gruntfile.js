module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    // destination file and source file
                    'assets/styles/main.css': 'assets/styles/main.less'
                }
            }
        },
        watch: {
            styles: {
                files: ['assets/styles/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        },
        //browserSync: {
        //        bsFiles: {
        //            src: [
        //                'assets/styles/*.css',
        //                'app/*.html'
        //            ]
        //        },
        //        options: {
        //            watchTask: true,
        //            server: {
        //                baseDir: "./"
        //            }
        //        }   
        //}
    });

    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'watch']);
};