class Canvas {
  /**
   * Initialize Canvas object.
   *
   * @param width - unsigned integer
   * @param height - unsigned integer
   */
  constructor(width: number, height: number)

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
   * @internal
   * @defaultValue `undefined`
   */
  fontName?: string

  /**
   * @internal
   * @defaultValue `undefined`
   */
  fontSize?: number
  
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
   */
  createLinearGradient(x0: number, y0: number, x1: number, y1: number): Gradient

  /**
   * Creates a radial gradient using the size and coordinates of two circles.
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
  arc(x: number, y: number, radius: number, startAngle: number, endAngle: number): void
  arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void
  isPointInPath(x: number, y: number): boolean
  scale(x: number, y: number): void
  rotate(angle: number): void
  translate(x: number, y: number): void
  transform(a: number, b: number, c: number, d: number, e: number, f: number): void
  setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void
  drawText(text: string, x: number, y: number, attrs: string): void
  fillText(text: string, x: number, y: number, maxWidth: number): void
  strokeText(text: string, x: number, y: number): void
  measureText(text: string): Map<string, any>
  save(): void
  restore(): void
  applyOriginTransform(): void
}

class Image {
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
   * @internal
   */
  modifiedProperties?: unknown

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

class Gradient {
  /**
   * @internal
   */
  type: number

  /**
   * @internal
   */
  startPt: PointObject

  /**
   * @internal
   */
  endPt: PointObject

  /**
   * @internal
   */
  startRadius: number

  /**
   * @internal
   */
  endRadius: number

  /**
   * @internal
   */
  stops: GradientStop[]

  addColorStop(offset: number, color: string): void
}

class GradientStop {
  /**
   * @internal
   */
  location: number

  /**
   * @internal
   */
  colorStyle: string
}

class PatternObject {
  /**
   * @internal
   */
  image: Image

  /**
   * @internal
   */
  style: unknown
}

class RectObject { 
  constructor(x: number, y: number, width: number, height: number)

  origin: PointObject
  size: SizeObject
  x: number
  y: number
  width: number
  height: number
}

class PointObject {
  width: number
  height: number
}

class SizeObject {
  x: number
  y: number
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
  image: Image

  /**
   * @internal
   */
  readonly outputDir: string

  /**
   * Adds the output to the queue to be written to disk.
   */
  addToQueue(): void

  /**
   * @internal
   */
  write(): void
}

class Configuration {
  /**
   * Arguments passed into the program as an array of strings.
   */
  arguments: string[]

  /**
   * Valid images passed as arguments converted into an array of Image objects.
   */
  images: Image[]

  /**
   * Recommended size for output. Setting the crop or resample flags will set this value.
   */
  size: SizeObject

  /**
   * If specified, the value of the -Z/--resampleHeightWidthMax option. [default: 0]
   *
   * @defaultValue 0
   */
  longestEdge: number

  /**
   * Output directory
   *
   * @defaultValue currentDirectory
   */
  outputPath: string

  /**
   * @internal
   */
  outputDir: string

  /**
   * @internal
   */
  requestedSizeForSize(size: SizeObject): SizeObject
}

class Console {
  /**
   * @internal
   */
  handler: unknown

  /**
  * Output to standard output.
  */
  log(str: string): void
}

var sips: Configuration

/**
 * Output to standard output. Equivalent to console.log(str).
 */
function print(str: string): void
