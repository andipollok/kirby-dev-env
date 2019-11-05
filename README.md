# Kirby Dev Env

A development environment for [Kirby](http://getkirby.com) using [BrowserSync](https://www.browsersync.io/). It runs a PHP browser locally and reloads when you make any changes to your code.

 - Run a server locally from your command line
 - Upload your page with FTP from your command line


## Installation

Download the necessary node modules:
`npm install`

Download [Kirby](http://getkirby.com) and put it in the same directory.


## Dev environment

`gulp dev`

Opens a browser with the website for local development. BrowserSync automatically reloads if you make changes to:

 - `/assets` (CSS files, JS files, etc)
 - `/content` (Kirby content files)
 - `/site` (Kirby templates, snippets, plugins, etc).


## Publish

`gulp publish`

Uploads the site to your FTP server. FTP settings are in `.env`.