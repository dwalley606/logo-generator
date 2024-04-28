const { Shape, Triangle, Circle, Square } = require('./index');

describe('Shape class', () => {
  test('render method should return SVG string with color', () => {
    const shape = new Shape('red');
    expect(shape.render()).toBe('<svg>...</svg>');
  });
});

describe('Triangle class', () => {
  test('render method should return SVG string with color', () => {
    const triangle = new Triangle('blue');
    expect(triangle.render()).toBe('<svg>...</svg>');
  });
});

describe('Circle class', () => {
  test('render method should return SVG string with color', () => {
    const circle = new Circle('green');
    expect(circle.render()).toBe('<svg>...</svg>');
  });
});

describe('Square class', () => {
  test('render method should return SVG string with color', () => {
    const square = new Square('yellow');
    expect(square.render()).toBe('<svg>...</svg>');
  });
});