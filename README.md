# PWATextEditor

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](#license)

Just another text editor!

## Description

This project is about learning to use Progressive Web Applications (PWA). The code for the application was already provided to me, my task was to make this application into a progressive web application using various technologies such as webpack, workbox, babel and IndexDB. This application is a text editor for Javascript. It is designed to add JavaScript code and that whatever is typed into the editor will persist into until changed. The application saves information typed into the editor to LocalStorage then transfers the information to IndexDB when the application loses focus or is closed. When the application is opened again, the information that was there previously appears again where the user left off. The user can install the application to their desktop and use the application offline as if though the application was still connected to the internet. The application makes use of Service Workers and Manifest.json and also uses Babel to transcribe newer Javascript into older js if the user's browser does not support it. A challenging learning project!

## Usage

Below is a screenshot of the deployed site.
![Screenshot of the completed PWA Text Editor](/pwatexteditor.onrender.com_.png)

This is the link to the deployed application: https://pwatexteditor.onrender.com/

## Credits

Most of the code was provided to me. The main requirement was to add the install methods, IndexDB Get/Put, and create the service worker and manifest.json files.  
With that, I would like to acknowledge the following resources that helped me on my journey:

- Favicons - https://www.w3schools.com/html/html_favicon.asp
- PWA - https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps
- Workbox Strategies - https://developer.chrome.com/docs/workbox/
- Caching - https://developer.mozilla.org/en-US/docs/Web/API/Cache
- Module 19 UNB Coding Bootcamp Exercises and Examples

## License

MIT License

Copyright (c) 2023 Matthew Tingley

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
