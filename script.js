// Rectangle class definition
class Rectangle {
  constructor(width, height) {
    if (width <= 0 || height <= 0) {
      throw new Error("Width and height must be positive integers.");
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

// Square class definition (inherits from Rectangle)
class Square extends Rectangle {
  constructor(side) {
    if (side <= 0) {
      throw new Error("Side must be a positive integer.");
    }
    super(side, side); // Call Rectangle constructor with width = height = side
    this._side = side;
  }

  // Method to calculate perimeter
  getPerimeter() {
    return 4 * this._side;
  }
}

// Expose the classes to window for Cypress tests
window.Rectangle = Rectangle;
window.Square = Square;

// Example usage (can be commented out for tests)
const rectangle = new Rectangle(5, 10);

const square = new Square(7);
