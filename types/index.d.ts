class Canvas {
    constructor(width: number, height: number)

    fillStyle: string
    strokeStyle: string
    shadowColor: string
    shadowBlur: number
    shadowOffsetX: number
    shadowOffsetY: number
    lineCap: 'round' | 'square'
    lineJoin: 'round' | 'miter'
    lineWidth: number
    miterLimit: number
    globalAlpha: number
    globalCompositeOperation: 'source-atop' | 'source-in' | 'source-out' | 'destination-over' | 'destination-atop' | 'destination-in' | 'destination-out' | 'lighter' | 'copy' | 'xor'
    lineDash: string
    font: string
    textAlign: 'left' | 'right' | 'center' | 'start' | 'end'
    textbaseLine: 'top' | 'hanging' | 'middle' | 'alphabetic' | 'ideographic' | 'bottom'
    fontName: string
    fontSize: number
    
    getContext(): this
    rect(x: number, y: number, width: number, height: number): void
    fillRect(x: number, y: number, width: number, height: number): void
    strokeRect(x: number, y: number, width: number, height: number): void
    clearRect(x: number, y: number, width: number, height: number): void
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): Gradient
    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): Gradient
    createPattern(image: Image, style: 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat'): PatternObject
    drawImage(image: Image, dx: number, dy: number): void
    drawImage(image: Image, dx: number, dy: number, dWidth: number, dHeight: number): void
    drawImage(image: Image, sx?: number, sy?: number, sWidth?: number, sHeight?: number, dx?: number, dy?: number, dWidth?: number, dHeight?: number): void
    beginPath(): void
    closePath(): void
    stroke(): void
    fill(): void
    clip(): void
    moveTo(x: number, y: number): void
    lineTo(x: number, y: number): void
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void
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
    readonly name: string
    readonly size: SizeObject
    readonly aspectRatio: number
    properties: any[]
    modifiedProperties: string[]

    getProperty(key: string): any
    setProperty(key: string, value: any): void
    scaledSizeWithLongestEdge(longestEdge: number): SizeObject
    sizeToFitLongestEdge(longestEdge: number): SizeObject
    keysInPath(path: string): string[]
}

class Gradient {
    type: number
    startPt: PointObject
    endPt: PointObject
    startRadius: number
    endRadius: number
    stops: any[]

    addColorStop(offset: number, color: string): void
}

class PatternObject {
    image: Image
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
    constructor(context: Canvas, name: string)
    constructor(context: Canvas, name: string, type?: string)

    canvas: Canvas
    name: string
    image: Image
    readonly outputDir: string

    addToQueue(): void
    write(): void
}

class Configuration {
    arguments: string[]
    images: Image[]
    size: SizeObject
    longestEdge: number
    outputDir: string
    outputPath: string

    requestedSizeForSize(size: SizeObject): SizeObject
}

class Console {
    handler: unknown

    log(text: string): void
}

var sips: Configuration
