module.exports = function(grunt){

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),

        browserify: {
          options: {
            debug: true
          },
          compile: {
            files: {
              "dist/remarked.js": ["reMarked.js"],
            }
          }
        },

        uglify: {
          minify: {
            files: {
              "dist/remarked.min.js": ["dist/remarked.js"]
            }
          }
        }

    });

    grunt.registerTask("build", ["browserify", "uglify"]);

    grunt.registerTask("default", ["build"]);
};
