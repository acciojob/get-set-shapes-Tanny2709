// Rectangle class
class Rectangle {
  constructor(width, height) {
    if (width <= 0 || height <= 0) {
      throw new Error("Width and height must be positive integers");
    }
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate area
  getArea() {
    return this._width * this._height;
  }
}

// Square class
class Square extends Rectangle {
  constructor(side) {
    if (side <= 0) {
      throw new Error("Side must be a positive integer");
    }
    // Call parent constructor with width and height as side
    super(side, side);
  }

  // Method to calculate perimeter
  getPerimeter() {
    return 4 * this._width;
  }
}

// Example usage:
const rectangle = new Rectangle(5, 10);
console.log(rectangle.width);     // 5
console.log(rectangle.height);    // 10
console.log(rectangle.getArea()); // 50

const square = new Square(7);
console.log(square.width);        // 7
console.log(square.height);       // 7
console.log(square.getArea());    // 49
console.log(square.getPerimeter());// 28

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
