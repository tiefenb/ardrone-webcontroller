# AR Drone Webcontroller

This is a browser based controller for the [Parrot AR Drone 2.0](http://ardrone2.parrot.com/), using [NodeJS](http://nodejs.org/), [node-ar-drone](https://github.com/felixge/node-ar-drone), [socket.io](https://github.com/LearnBoost/socket.io) and the draggable() feature from [jQuery UI](https://github.com/jquery/jquery-ui).
Inspired by the original App for iPhone/Android.

## Usage

1. Connect to your drone's wifi.
2. $ node drone.js
3. open the index.html, click takeoff
4. navigate with the circle joytick

## Current features

* takeoff
* land
* move forward/backward
* move left/right
* recover emergency mode

## Coming soon

* turning clockwise / counter clockwise
* moving up/down

## Prototype Screenshot

![Prototype](ardrone-webcontroller/screenshoot.jpg)

## Warning: This project is in early development and experimental - Usage on your own risk!

## License (MIT)

Copyright (C) 2012 Markus Tiefenbacher

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
