# Assemble Template
- Changelog:  View the [CHANGELOG](./CHANGELOG.md)
- - - -


## Requirements
The following are required to develop and build.

##### Node Dependencies
`npm`, `grunt` are required.

##### Ruby Dependencies
`compass` & `sass-globbing` Ruby gems are required.

### Node Modules
Run `npm install` after clone to download grunt build tasks.

### Grunt Tasks
Run `grunt` to build static html project to `/www/` folder. This task will just build once and not watch for changes. If you would like to continue watching for changes, use the following tasks.

- Run `grunt watch` to watch for changes in handlebars & js files.
- Run `grunt compass:watch` to watch for changes in sass files.

- - - -

## Development

### Server
Point your local server to the built `/www/` folder. This is where the viewable HTML will be compiled too.

### Hierarchy
Below is the general file hierarchy used in the source code.
```
.
├── gruntfile.js
├── package.json
├── readme.md
├── changelog.md
├── src/
|   ├── data/
|   |   └── site.yml
|   ├── layouts/
|   |   └── default.hbs
|   |   └── style-guide.hbs
|   ├── pages/
|   |   └── index.hbs
|   ├── partials/
|   └── style-guide/
├── www/
|   └── assets/
|       ├── css/
|       ├── img/
|       ├── fonts/
|       ├── js/
|       └── sass/
|           ├── main.scss
|           └── style-guide.scss
└── helpers/
```

### HTML (Handlebars & Assemble)
All page templates are build using [Assemble.io](http://assemble.io). Assemble is a static site generator build on top of handlebars.
Pages in Assemble are composed of 3 parts. `Layouts`, `Pages` & `Partials`. `Layouts` define the global structure to a page. `Pages` are the content which are inserted into the `layout` during the build. `Partials` are small reusable includes which can be used anywhere in a `Layout` or `Page`. All of these types of files are in the Handlebars `.hbs` format. Compiled `html` gets copied to the root of the `/www/` folder.

  - Layouts are located in `/src/layouts/`
  - Page Templates are located in `/src/pages/`
  - Partials are located in `/src/partials/`
    - Partials are included as such `{{> navigation}}`. The text matches the name of the partial file.

#### Style Guide (Docs)
The style guide is located in the `/src/style-guide/` folder.

##### YAML Front Matter
Pages can include custom variables in the form of **YAML Front Matter**. The format of the YAML front matter is shown below.
```
---
title : "Page Title"
heading : "The Page"
---
```
Site wide variables are located in `/src/data/site.yml`

### Styles
`Sass` preprocessor is used for developing stylesheets along with `compass`, a ruby framework for `sass`.

- Sass source files are located in `/www/assets/sass/`.
- Sass is compiled to the `/www/assets/css/` folder upon build.
- Thirs party css is located in `/www/assets/css/vendor/`

### Scripts
All scripts are loaded through [Require JS](http://requirejs.org) Modules. Source files are located in `/www/assets/js/app/`

### Images
Images are located in `/www/assets/img/`

### Fonts
Fonts are located in `/www/assets/fonts/`
