class Shape {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      return `<svg>...</svg>`;
    }
  }
  
  class Triangle extends Shape {
    render() {
        // Calculate the coordinates to center the triangle in a 300x200 SVG
        const centerX = 150;
        const centerY = 100;
        const sideLength = 100; // Adjust the side length as needed

        // Calculate the vertices of the triangle
        const x1 = centerX;
        const y1 = centerY - sideLength / Math.sqrt(3);
        const x2 = centerX - sideLength / 2;
        const y2 = centerY + sideLength / (2 * Math.sqrt(3));
        const x3 = centerX + sideLength / 2;
        const y3 = centerY + sideLength / (2 * Math.sqrt(3));

        // Construct the SVG path for the triangle
        const svgPath = `<polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3}" fill="${this.color}" />`;

        return svgPath;
    }
}
  
  class Circle extends Shape {
    render() {
        // Calculate the center of the circle in a 300x200 SVG
        const centerX = 150;
        const centerY = 100;
        const radius = 50; // Adjust the radius as needed

        // Construct the SVG circle element
        const svgCircle = `<circle cx="${centerX}" cy="${centerY}" r="${radius}" fill="${this.color}" />`;

        return svgCircle;
    }
}
  
  class Square extends Shape {
    render() {
        // Calculate the center of the square in a 300x200 SVG
        const centerX = 150;
        const centerY = 100;
        const sideLength = 100; // Adjust the side length as needed

        // Calculate the coordinates of the square
        const x1 = centerX - sideLength / 2;
        const y1 = centerY - sideLength / 2;
        const x2 = centerX + sideLength / 2;
        const y2 = centerY - sideLength / 2;
        const x3 = centerX + sideLength / 2;
        const y3 = centerY + sideLength / 2;
        const x4 = centerX - sideLength / 2;
        const y4 = centerY + sideLength / 2;

        // Construct the SVG path for the square
        const svgPath = `<polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4}" fill="${this.color}" />`;

        return svgPath;
    }
}
  
  module.exports = { Shape, Triangle, Circle, Square };