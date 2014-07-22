module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-htmlcompressor');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
          options: {
            separator: ';'
          },
          dist: {
            src: ['src/**/*.js'],
            filter: 'isFile',
            dest: 'temp/<%= pkg.name %>.js'
          }
        },
        uglify: {
            debug : {
                options : {
                    beautify : true,
                    mangle : false
                },
                files : {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            },
            release : {
                options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        },
                files : {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
  
},
clean: {
    app: {
        src: ['dist']
    },
    temp:{
        src: ['temp']
    }
},
htmlcompressor: {
    compile: {
        src: 'src/html/**/*',
        filter: 'isFile',
        dest: 'dist/html/*'
    },
    options: {
        processName: function(filename) {
            return filename.replace('src/html', 'dist/html');
                    //.replace('.html','.min.html');
                }
            }
        },
        watchingFiles: {
          files: ['src/**/*.js']
      },
      watch: {
        js: {
            files: ['<%= watchingFiles.files %>'],
            tasks: ['concat-all','uglify:debug']
        }
    }
});

grunt.registerTask('concat-all', ['concat']);

grunt.registerTask('release', ['clean:app', 'concat-all', 'uglify:release', 'htmlcompressor', 'clean:temp']);
grunt.registerTask('default', ['watch']);

};