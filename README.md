# sips-js-api

An unofficial documentation of `sips`'s JavaScript API.

This documentation is written based on the specification of macOS Monterey.

## What's sips?

If you are using macOS, you already have it in `/usr/bin/sips`.

`sips` is a command-line image processing tool bundled in macOS.

## What's JavaScript interface of sips?

Since Big Sur, `sips` has been shipped with the new feature *JavaScript interface*, that makes `sips` the most powerful ever.
Like ImageMagick, `sips` can compose an arbitrary images as you like, with JavaScript.

However, as far as I know, there's no announcement from Apple about this upgrade and no detailed documentation is provided.
So I investigate the binary of `sips` and expose the hidden APIs I could find.

## Basic usage

#### Hello world

Save the following script as `hello.js`.

```js
console.log('Hello, world!')
```

Then run:

```sh
$ sips -j hello.js
Hello, world!
```

#### Drawing with path

Save the following script as `smile.js`.

```js
const canvas = new Canvas(150, 150)

canvas.strokeStyle = 'black'
canvas.lineWidth = 2

canvas.fillStyle = 'yellow'
canvas.beginPath()
canvas.arc(75, 75, 50, 0, Math.PI * 2, true)
canvas.fill()
canvas.stroke()

canvas.fillStyle = 'black'
canvas.beginPath()
canvas.arc(60, 65, 5, 0, Math.PI * 2, true)
canvas.arc(90, 65, 5, 0, Math.PI * 2, true)
canvas.fill()

canvas.beginPath()
canvas.arc(75, 75, 35, 0, Math.PI, false)
canvas.stroke()

const output = new Output(canvas, sips.outputPath)
output.addToQueue()
```

Then run:

```sh
$ sips -j smile.js -o smile.png
```

Output `smile.png` will be:

![smile.png](assets/smile.png)

## License

This document is licensed under CC0 license.
See `LICENSE` for detailed information.
