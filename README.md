# Fullstack evaluation template

## How to use
This project is a React based app, and requires a few commonly used tools to run locally.  If you do not have either of the following installed you will need to follow the instructions below to install them.

- NodeJS
- PHP (with curl enabled)

### Installing PHP
The simplest tutorial I've found is [this guy](https://youtu.be/iW0B9NTId2g), he cuts right to the point on how to install PHP for Windows if you don't have it already.  If you're working from a Mac machine you'll have to find your own installation instructions, but it should be fairly simple.

Most importantly, in the php.ini file make sure that you have the curl extension enabled (search for the line that contains `extension=curl` and remove the semicolon to uncomment that line and enable the extension).

### Installing NodeJS
NodeJs can be downloaded [here](https://nodejs.org/en/download/).  Simnply download the installer and execute it to install NodeJs globally.  The installer will enable Node globally.

## Running the site
Before running the site, you will need to use node to install the dependent packages required to run this site.  To do so, simply open a terminal window to the root folder of this project and run `npm install` (assuming you have already installed NodeJS).

To run the site you will need to open two terminal windows in the project root to run a mini PHP server as well as the Node server (in a real environment you would configure these on the same server assigned to different ports, but that was more setup that I wanted to put anyone through).

There are two NPM commands you can run to quickly get the site running
- `npm run start-api` (starts the PHP endpoint)
- `npm start` (starts the UI project)
