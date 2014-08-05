//https://github.com/gruntjs/grunt-contrib-sass

module.exports = {
   dist: {
     options: {
         style: 'compressed'
     },
       files: [{
           expand: true,
           cwd: '<%= paths.src %>/scss',
           src: ['*.scss'],
           dest: '<%= paths.dist %>/css',
           ext: '.css'
       }]
   },
   styleguide: {
      options: {
          style: 'expanded'
      },
       files: [{
           expand: true,
           cwd: '<%= paths.styleguide %>/scss',
           src: ['*.scss'],
           dest: '<%= paths.www %>/css',
           ext: '.css'
       }]
   },
   www: {
       options: {
           style: 'expanded'
       },
       files: [{
           expand: true,
           cwd: '<%= paths.src %>/scss',
           src: ['*.scss'],
           dest: '<%= paths.www %>/css',
           ext: '.css'
       }]
   }
};