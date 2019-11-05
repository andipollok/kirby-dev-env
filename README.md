# Kirby Dev Env

A development environment for [Kirby](http://getkirby.com) using [BrowserSync](https://www.browsersync.io/). It runs a PHP browser locally and reloads when you make any changes to your code.

 - Run a server locally from your command line
 - Upload your page with FTP from your command line


## Installation

Just 2 steps:

- Download the necessary node modules:
Run `npm install` from your command line in the project folder

- Download [Kirby](http://getkirby.com) and put it in the same directory. You'll have to rename or replace this README.md, as Kirby has its own. Don't worry.


## Dev environment

Run `gulp dev` from your command line in the project folder

Opens a browser with the website for local development. BrowserSync automatically reloads if you make changes to:

 - `/assets` (CSS files, JS files, etc)
 - `/content` (Kirby content files)
 - `/site` (Kirby templates, snippets, plugins, etc).


## Publish

Run `gulp publish` from your command line in the project folder

Uploads the site to your FTP server. FTP settings are in `.env`.