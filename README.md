# Kirby Dev Env

A development environment for [Kirby](http://getkirby.com) using [BrowserSync](https://www.browsersync.io/). 

 - Run a PHP and Webserver locally for development
 - Website reloads automatically in development mode when you make any changes
 - Upload your page with FTP


## Installation

Just 2 steps:

- Download the necessary node modules:  
Run `npm install` from your command line in the project folder

- Download [Kirby](https://getkirby.com/try) and put it in the same directory.  
:exclamation: There will be one issue: the files `README.md` (this file) and `.gitignore` also exist in the Kirby installation. Don't overwrite these files with the ones from Kirby, as the .gitignore contains everything Kirby needs but also `node_modules` (if anyone knows a better solution, let me know!)

- Ok, 3 steps: rename the file `.env.template` to `.env`. If you can't see it in Finder: it's a hidden file. Press *Command+Shift+Dot* in Finder to show hidden files.


## Dev environment

Run `gulp dev` from your command line in the project folder

Opens a browser with the website for local development. BrowserSync automatically reloads if you make changes to:

 - `/assets` (CSS files, JS files, etc)
 - `/content` (Kirby content files)
 - `/site` (Kirby templates, snippets, plugins, etc)


## Publish

Run `gulp publish` from your command line in the project folder

Uploads the site to your FTP server. FTP settings are stored in `.env`.


## Todo

I'd like to include:

- SASS or LESS to have cleaner CSS code

- Webpack to have bundled code for deployment

- Hot reloading of CSS changes

- Make it easier to install, so you don't have to download Kirby manually

- :bulb: Other ideas?