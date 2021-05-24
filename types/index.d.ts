class Canvas {
  /**
   * Initialize Canvas object.
   *
   * @param width - A width of the canvas. Must be positive. Float value will be truncated to integer.
   * @param height - A height of the canvas. Must be positive. Float value will be truncated to integer.
   */
  constructor(width: number, height: number)

  /**
   * The width of the canvas.
   */
  readonly width: number

  /**
   * The height of the canvas.
   */
  readonly height: number

  /**
   * The color, gradient, or pattern to use inside shapes.
   *
   * @defaultValue `#000` (black)
   * @example
   * ```
   * canvas.fillStyle = 'cyan' // Named colors
   * canvas.fillStyle = '#0ff' // Hex colors
   * canvas.fillStyle = 'rgb(0, 255, 255)' // RGB colors
   * canvas.fillStyle = 'rgba(0, 255, 255, 1)' // RGBA colors
   * canvas.fillStyle = (() => { // Gradient
   *   const gradient = canvas.createLinearGradient(20, 70, 70, 70)
   *   gradient.addColorStop(0, 'rgb(255,0,0)')
   *   gradient.addColorStop(0.5, 'rgb(0,255,0)')
   *   gradient.addColorStop(1, 'rgb(0,0,255)')
   *   return gradient
   * })()
   * ```
   */
  fillStyle: string

  /**
   * The color, gradient, or pattern to use for the strokes (outlines) around shapes.
   *
   * @defaultValue `#000` (black)
   */
  strokeStyle: string

  /**
   * The color of shadows.
   *
   * @defaultValue `undefined`
   */
  shadowColor?: string

  /**
   * The amount of blur applied to shadows.
   *
   * @defaultValue `0` (no blur)
   */
  shadowBlur: number

  /**
   * The distance that shadows will be offset horizontally.
   *
   * @defaultValue `0` (no horizontal offset)
   */
  shadowOffsetX: number

  /**
   * The distance that shadows will be offset vertically..
   *
   * @defaultValue `0` (no vertical offset)
   */
  shadowOffsetY: number

  /**
   * The shape used to draw the end points of lines.
   *
   * @defaultValue `"butt"`
   */
  lineCap: 'butt' | 'round' | 'square'

  /**
   * The shape used to join two line segments where they meet.
   *
   * @defaultValue `"miter"`
   */
  lineJoin: 'bevel' | 'round' | 'miter'

  /**
   * The thickness of lines.
   *
   * @defaultValue `1.0`
   */
  lineWidth: number

  /**
   * The miter limit ratio.
   *
   * @defaultValue `0`
   */
  miterLimit: number

  /**
   * The alpha (transparency) value that is applied to shapes and images before they are drawn onto the canvas.
   *
   * @defaultValue `1.0`
   */
  globalAlpha: number

  /**
   * The type of compositing operation to apply when drawing new shapes.
   *
   * @defaultValue `"source-over"`
   */
  globalCompositeOperation: 'source-over' | 'source-atop' | 'source-in' | 'source-out' | 'destination-over' | 'destination-atop' | 'destination-in' | 'destination-out' | 'lighter' | 'copy' | 'xor'

  /**
   * The current line dash pattern.
   *
   * @defaultValue `[]`
   */
  lineDash: number[]

  /**
   * The current text style to use when drawing text. This string uses the same syntax as the CSS font specifier.
   *
   * @defaultValue `"12pt Helvetica"`
   */
  font: string

  /**
   * The current text alignment used when drawing text.
   *
   * @defaultValue `"left"`
   */
  textAlign: 'left' | 'right' | 'center' | 'start' | 'end'

  /**
   * The current text baseline used when drawing text.
   *
   * @defaultValue `undefined`
   */
  textbaseLine?: 'top' | 'middle' | 'alphabetic' | 'bottom'

  /**
   * A drawing context on the canvas.
   *
   * Contrary to DOM API, `Context` object is identical to `Canvas` object.
   * It always returns itself.
   */
  getContext(): this

  /**
   * Adds a rectangle to the current path.
   *
   * Like other methods that modify the current path, this method does not directly render anything.
   * To draw the rectangle onto a canvas, you can use the `fill()` or `stroke()` methods.
   *
   * @example
   * ```
   * const canvas = new Canvas(100, 100)
   * canvas.rect(0, 0, 50, 50)
   * canvas.fillStyle = 'green'
   * canvas.fill()
   * const output = new Output(canvas, 'rect.png')
   * output.addToQueue()
   * ```
   */
  rect(x: number, y: number, width: number, height: number): void

  /**
   * Draws a rectangle that is filled according to the current `fillStyle`.
   */
  fillRect(x: number, y: number, width: number, height: number): void

  /**
   * Draws a rectangle that is stroked (outlined) according to the current `strokeStyle` and other context settings.
   */
  strokeRect(x: number, y: number, width: number, height: number): void

  /**
   * Erases the pixels in a rectangular area by setting them to transparent black.
   */
  clearRect(x: number, y: number, width: number, height: number): void

  /**
   * Creates a gradient along the line connecting two given coordinates.
   *
   * @param x0 - The x-axis coordinate of the start point.
   * @param y0 - The y-axis coordinate of the start point.
   * @param x1 - The x-axis coordinate of the end point.
   * @param y1 - The y-axis coordinate of the end point.
   *
   * @example
   * ```
   * const canvas = new Canvas(150, 150)
   * const gradient = canvas.createLinearGradient(0, 0, 150, 150)
   * gradient.addColorStop(0, 'red')
   * gradient.addColorStop(0.5, 'green')
   * gradient.addColorStop(1, 'blue')
   * canvas.fillStyle = gradient
   * canvas.fillRect(0, 0, 150, 150)
   * const output = new Output(canvas, 'linearGradient.png')
   * output.addToQueue()
   * ```
   */
  createLinearGradient(x0: number, y0: number, x1: number, y1: number): Gradient

  /**
   * Creates a radial gradient using the size and coordinates of two circles.
   *
   * @param x0 - The x-axis coordinate of the start circle.
   * @param y0 - The y-axis coordinate of the start circle.
   * @param r0 - The radius of the start circle. Must be non-negative and finite.
   * @param x1 - The x-axis coordinate of the end circle.
   * @param y1 - The y-axis coordinate of the end circle.
   * @param r1 - The radius of the end circle. Must be non-negative and finite.
   *
   * @example
   * ```
   * const canvas = new Canvas(150, 150)
   * const gradient = canvas.createRadialGradient(75, 75, 10, 75, 75, 150)
   * gradient.addColorStop(0, 'red')
   * gradient.addColorStop(0.5, 'green')
   * gradient.addColorStop(1, 'blue')
   * canvas.fillStyle = gradient
   * canvas.fillRect(0, 0, 150, 150)
   * const output = new Output(canvas, 'radialGradient.png')
   * output.addToQueue()
   * ```
   */
  createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): Gradient

  /**
   * Creates a pattern using the specified image and repetition.
   *
   * This method works but it seems that the use of `PatternObject` is still in-development.
   * Neither of `fillStyle` and `strokeStyle` accept `PatternObject` as a value.
   */
  createPattern(image: Image, style: 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat'): PatternObject

  /**
   * Provides different ways to draw an image onto the canvas.
   *
   * @example
   * ```
   * // sips -j draw.js image.png
   * const canvas = new Canvas(100, 100)
   * canvas.drawImage(sips.images.pop())
   * const output = new Output(canvas, 'draw.png')
   * output.addToQueue()
   * ```
   */
  drawImage(image: Image, dx: number, dy: number): void
  drawImage(image: Image, dx: number, dy: number, dWidth: number, dHeight: number): void
  drawImage(image: Image, sx?: number, sy?: number, sWidth?: number, sHeight?: number, dx?: number, dy?: number, dWidth?: number, dHeight?: number): void

  /**
   * Starts a new path by emptying the list of sub-paths.
   * Call this method when you want to create a new path.
   */
  beginPath(): void

  /**
   * Attempts to add a straight line from the current point to the start of the current sub-path.
   * If the shape has already been closed or has only one point, this function does nothing.
   */
  closePath(): void

  /**
   * Strokes (outlines) the current or given path with the current `strokeStyle`.
   */
  stroke(): void

  /**
   * Fills the current or given path with the current `fillStyle`.
   */
  fill(): void

  /**
   * Turns the current or given path into the current clipping region.
   * The previous clipping region, if any, is intersected with the current or given path to create the new clipping region.
   */
  clip(): void

  /**
   * Begins a new sub-path at the point specified by the given `(x, y)` coordinates.
   */
  moveTo(x: number, y: number): void

  /**
   * Adds a straight line to the current sub-path by connecting the sub-path's last point to the specified `(x, y)` coordinates.
   */
  lineTo(x: number, y: number): void

  /**
   * Adds a quadratic Bézier curve to the current sub-path.
   * It requires two points: the first one is a control point and the second one is the end point.
   * The starting point is the latest point in the current path, which can be changed using `moveTo()` before creating the quadratic Bézier curve.
   */
  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void

  /**
   * Adds a cubic Bézier curve to the current sub-path.
   * It requires three points: the first two are control points and the third one is the end point.
   * The starting point is the latest point in the current path, which can be changed using `moveTo()` before creating the Bézier curve.
   */
  bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void

  /**
   * Adds a circular arc to the current sub-path.
   */
  arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void

  /**
   * Reports whether or not the specified point is contained in the current path.
   */
  isPointInPath(x: number, y: number): boolean

  /**
   * Adds a scaling transformation to the canvas units horizontally and/or vertically.
   */
  scale(x: number, y: number): void

  /**
   * Adds a rotation to the transformation matrix.
   */
  rotate(angle: number): void

  /**
   * Adds a translation transformation to the current matrix.
   */
  translate(x: number, y: number): void

  /**
   * Multiplies the current transformation with the matrix described by the arguments of this method. This lets you scale, rotate, translate (move), and skew the context.
   *
   * The transformation matrix is described by:
   *
   * ```
   * [ a c e
   *   b d f
   *   0 0 1 ]
   * ```
   */
  transform(a: number, b: number, c: number, d: number, e: number, f: number): void

  /**
   * Resets (overrides) the current transformation to the identity matrix, and then invokes a transformation described by the arguments of this method.
   * This lets you scale, rotate, translate (move), and skew the context.
   *
   * ```
   * [ a c e
   *   b d f
   *   0 0 1 ]
   * ```
   */
  setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void

  /**
   * Draws a text string at the specified coordinates, filling the string's characters with the current fillStyle.
   * An optional parameter allows specifying a maximum width for the rendered text, which the user agent will achieve by condensing the text or by using a lower font size.
   *
   * @param text - The text string to render into canvas.
   * @param x - The x-axis coordinate of the point at which to begin drawing text, in pixels.
   * @param y - The y-axis coordinate of the point at which to begin drawing text, in pixels.
   * @param maxWidth - The maximum number of pixels wide the text may be once rendered.
   *
   * @example
   * ```
   * const canvas = new Canvas(100, 50)
   * canvas.font = '42pt Futura'
   * canvas.fillStyle = 'blue'
   * canvas.fillText('Hello', 0, 42)
   * const output = new Output(canvas, 'fillText.png')
   * output.addToQueue()
   * ```
   */
  fillText(text: string, x: number, y: number, maxWidth?: number): void

  /**
   * Draws the outlines of the characters of a text string at the specified coordinates.
   *
   * @param text - The text string to render into canvas.
   * @param x - The x-axis coordinate of the point at which to begin drawing text, in pixels.
   * @param y - The y-axis coordinate of the point at which to begin drawing text, in pixels.
   *
   * @example
   * ```
   * const canvas = new Canvas(100, 50)
   * canvas.font = '42pt Futura'
   * canvas.strokeStyle = 'blue'
   * canvas.strokeText('Hello', 0, 42)
   * const output = new Output(canvas, 'strokeText.png')
   * output.addToQueue()
   * ```
   */
  strokeText(text: string, x: number, y: number): void

  /**
   * Returns an object that contains size information about the measured text.
   *
   * @param text - The text string to measure.
   */
  measureText(text: string): SizeObject

  /**
   * Creates a new, blank `ImageData` object with the specified dimensions.
   * All of the pixels in the new object are transparent black.
   *
   * @param imageData - An existing ImageData object from which to copy the width and height. The image itself is not copied.
   */
  createImageData(imageData: ImageData): ImageData

  /**
   * Creates a new, blank `ImageData` object with the specified dimensions.
   * All of the pixels in the new object are transparent black.
   *
   * @param width - The width to give the new `ImageData` object. A negative value flips the rectangle around the vertical axis.
   * @param height - The height to give the new `ImageData` object. A negative value flips the rectangle around the horizontal axis.
   */
  createImageData(width: number, height: number): ImageData
  createImageData(ImageDataOrWidth: ImageData | number, height?: number): ImageData

  /**
   * Returns an ImageData object representing the underlying pixel data for a specified portion of the canvas.
   *
   * @param sx - The x-axis coordinate of the top-left corner of the rectangle from which the `ImageData` will be extracted.
   * @param sy - The y-axis coordinate of the top-left corner of the rectangle from which the `ImageData` will be extracted.
   * @param sw - The width of the rectangle from which the `ImageData` will be extracted. Positive values are to the right, and negative to the left.
   * @param sh - The height of the rectangle from which the `ImageData` will be extracted. Positive values are down, and negative are up.
   */
  getImageData(sx?: number, sy?: number, sw?: number, sh?: number): ImageData

  /**
   * Paints data from the given ImageData object onto the canvas.
   * If a dirty rectangle is provided, only the pixels from that rectangle are painted.
   * This method is not affected by the canvas transformation matrix.
   *
   * @param imageData - An `ImageData` object containing the array of pixel values.
   * @param dx - Horizontal position (x coordinate) at which to place the image data in the destination canvas.
   * @param dy - Vertical position (y coordinate) at which to place the image data in the destination canvas.
   */
  putImageData(imageData: ImageData, dx: number, dy: number): void

  /**
   * Saves the entire state of the canvas by pushing the current state onto a stack.
   */
  save(): void

  /**
   * Restores the most recently saved canvas state by popping the top entry in the drawing state stack.
   * If there is no saved state, this method does nothing.
   */
  restore(): void
}

interface Image {
  /**
   * Name of image.
   */
  readonly name: string

  /**
   * Size of image (pixels).
   */
  readonly size: SizeObject

  /**
   * @internal
   */
  readonly aspectRatio: number

  /**
   * Image properties.
   */
  properties: Map<string, any>

  /**
   * Return the image property for name, if any.
   */
  getProperty(key: string): any

  /**
   * @internal
   */
  setProperty(key: string, value: any): void

  /**
   * @internal
   */
  scaledSizeWithLongestEdge(longestEdge: number): SizeObject

  /**
   * Return the size that will contain the image with the longest edge set to length.
   * Maintains aspect ratio.
   */
  sizeToFitLongestEdge(length: number): SizeObject
}

interface Gradient {
  /**
   * Adds a new color stop, defined by an `offset` and a `color`, to a given canvas gradient.
   *
   * @param offset - A number between 0 and 1, inclusive, representing the position of the color stop. 0 represents the start of the gradient and 1 represents the end.
   * @param color - A CSS color value representing the color of the stop.
   */
  addColorStop(offset: number, color: string): void
}

interface PatternObject {
  /**
   * @internal
   */
  image: Image

  /**
   * @internal
   */
  style: unknown
}

interface SizeObject {
  x: number
  y: number
}

interface ImageData {
  /**
   * Represents a one-dimensional array containing the data in the RGBA order, with integer values between 0 and 255 (inclusive).
   */
  readonly data: number[]

  /**
   * An `unsigned long` representing the actual width, in pixels.
   */
  readonly width: number

  /**
   * An `unsigned long` representing the actual height, in pixels.
   */
  readonly height: number
}

class Output {
  /**
   * Output the context to disk with name and optional type (extension or UTI).
   */
  constructor(context: Canvas, name: string)
  constructor(context: Canvas, name: string, type?: string)

  /**
   * @internal
   */
  canvas: Canvas

  /**
   * @internal
   */
  name: string

  /**
   * @internal
   */
  UTI: string

  /**
   * Adds the output to the queue to be written to disk.
   */
  addToQueue(): void
}

interface Configuration {
  /**
   * Arguments passed into the program as an array of strings.
   */
  arguments: string[]

  /**
   * Valid images passed as arguments converted into an array of Image objects.
   */
  readonly images: Image[]

  /**
   * Recommended size for output. Setting the crop or resample flags will set this value.
   */
  readonly size: SizeObject

  /**
   * If specified, the value of the -Z/--resampleHeightWidthMax option. [default: 0]
   */
  readonly longestEdge: number

  /**
   * The full path of the output directory specified with `-o` or `--out` option.
   *
   * @defaultValue undefined
   */
  outputPath: string

  /**
   * @internal
   */
  requestedSizeForSize(size: SizeObject): SizeObject
}

interface Console {
  /**
   * Output to standard output.
   *
   * @param str - The text string to write to standard output.
   */
  log(str: string): void
}

var sips: Configuration
var console: Console

/**
 * Output to standard output. Equivalent to console.log(str).
 *
 * @param str - The text string to write to standard output.
 */
function print(str: string): void
