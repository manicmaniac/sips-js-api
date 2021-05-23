# sips-js-api

An unofficial documentation of `sips`'s JavaScript API.

## What's sips?

If you are using macOS, you already have it in `/usr/bin/sips`.

`sips` is a command-line image processing tool bundled in macOS.

## What's JavaScript interface of sips?

Since Big Sur, `sips` has been shipped with the new feature *JavaScript interface*, that makes `sips` the most powerful ever.
Like ImageMagick, `sips` can compose an arbitrary images as you like, with JavaScript.

However, as far as I know, there's no announcement from Apple about this upgrade and no detailed documentation is provided.
So I investigate the binary of `sips` and expose the hidden APIs I could find.

## License

This document is licensed under CC0 license.
See `LICENSE` for detailed information.
