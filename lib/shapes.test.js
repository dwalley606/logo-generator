const { Shape, Triangle, Circle, Square } = require('./shapes');

describe('Shape class', () => {
  test('constructor should set color property', () => {
    const shape = new Shape('red');
    expect(shape.color).toBe('red');
  });

  test('render method should return SVG string', () => {
    const shape = new Shape('blue');
    expect(shape.render()).toBe('<svg>...</svg>');
  });
});

describe('Triangle class', () => {
  test('render method should return SVG string with color', () => {
    const triangle = new Triangle('blue');
    expect(triangle.render()).toContain('<polygon');
  });
});

describe('Circle class', () => {
  test('render method should return SVG string with color', () => {
    const circle = new Circle('green');
    expect(circle.render()).toContain('<circle');
  });
});

describe('Square class', () => {
  test('render method should return SVG string with color', () => {
    const square = new Square('yellow');
    expect(square.render()).toContain('<polygon');
  });
});