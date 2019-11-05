# Kirby Dev Env

A development environment for Kirby using BrowserSync. It runs a PHP browser locally and reloads when you make any changes to your code.

 - Run a server locally from your command line
 - Upload your page with FTP from your command line


## Installation

Download the necessary node modules:
`npm install`

Download [Kirby](http://getkirby.com) and put it in the same directory.


## Dev environment

`gulp dev`

Opens a browser with the website for local development. Browsersync automatically reloads if you make changes.

## Deploy

`gulp publish`

Uploads the site to your FTP server. Settings are in `.env` (duplicate and rename `.env.template` to enter your FTP server settings)