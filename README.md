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
canvas.beginPath()
canvas.arc(75, 75, 50, 0, Math.PI * 2, true)
canvas.moveTo(110, 75)
canvas.arc(75, 75, 35, 0, Math.PI, false)
canvas.moveTo(65, 65)
canvas.arc(60, 65, 5, 0, Math.PI * 2, true)
canvas.moveTo(95, 65)
canvas.arc(90, 65, 5, 0, Math.PI * 2, true)
canvas.stroke()
const output = new Output(canvas, sips.outputPath)
output.addToQueue()
```

Then run:

```sh
$ sips -j smile.js -o smile.png
```

Output `smile.png` will be:

![smile.png](https://camo.qiitausercontent.com/7f06af31822043a9220a176c2061ee3e9e374e44/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f37333432342f61313635346131332d376335302d323336642d353033382d3230643533623337306634312e706e67)

## License

This document is licensed under CC0 license.
See `LICENSE` for detailed information.
