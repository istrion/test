'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var BackboneGenerator = yeoman.generators.Base.extend({
    promptUser: function() {
        var done = this.async();

        // have Yeoman greet the user
        console.log(this.yeoman);

        var prompts = [{
            name: 'modName',
            message: 'Quel est le nom de votre module ?'
        },{
            type: 'confirm',
            name: 'addDemoSection',
            message: 'Voulez vous générer une section de démo ?',
            default: true
        }];

        this.prompt(prompts, function (answers) {
            this.modName = answers.modName;
            this.addDemoSection = answers.addDemoSection;

            done();
        }.bind(this));
    },
    scaffoldFolders: function(){
        this.mkdir(this.modName);
        this.mkdir(this.modName+ "/collections");
        this.mkdir(this.modName+ "/lib");
        this.mkdir(this.modName+ "/models");
        this.mkdir(this.modName+ "/routers");
        this.mkdir(this.modName+ "/views");
        this.mkdir(this.modName+ "/test");
    },
    initFilesModule: function(){
        var upperCaseModuleName = this.modName.charAt(0).toUpperCase() + this.modName.slice(1);

        var context = {
            module_name: this.modName,
            upperCaseModuleName: upperCaseModuleName
        };

        this.template("_main.js",this.modName+ "/" + this.modName + '.js', context);
        this.template("_model.js",this.modName+ "/models/" + this.modName + '.js', context);
        this.template("_collection.js",this.modName+ "/collections/" + this.modName + '.js', context);
        this.template("_view.js",this.modName+ "/views/" + this.modName + '-view.js', context);
        this.template("_router.js",this.modName+ "/routers/" + this.modName + '.js', context);
    }
});

module.exports = BackboneGenerator;