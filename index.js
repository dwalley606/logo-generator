const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { Shape, Triangle, Circle, Square } = require('./lib/shapes');

//Array of questions to prompt user with inquirer
const questions = [
    {
        type: 'input',
        name: 'logoText',
        message: 'Enter logo text (3 letters only):',
        validate: function(value) {
            const isValid = /^[a-zA-Z]{3}$/.test(value);
            return isValid ? true : 'Please enter 3 letters only.';
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape do you want to draw?',
        choices: ['Triangle', 'Circle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color:',
    },
];

//Initiate inquirer prompts and save user input
inquirer.prompt(questions).then((answers) => {
    const { shape, shapeColor, logoText, textColor } = answers;
    let selectedShape;

    switch (shape) {
        case 'Triangle':
            selectedShape = new Triangle(shapeColor);
            break;
        case 'Circle':
            selectedShape = new Circle(shapeColor);
            break;
        case 'Square':
            selectedShape = new Square(shapeColor);
            break;
        default:
            console.log('Invalid shape selected');
            return;
    }

    //Render SVG image
    const svgContent = selectedShape.render();
    const svgTemplate = `<svg width="300" height="200">
        ${svgContent}
        <text x="150" y="110" fill="${textColor}" text-anchor="middle" font-size="40">${logoText}</text>
    </svg>`;

    const timestamp = new Date().getTime();
    const fileName = `newImage_${timestamp}.svg`;
    const filePath = path.join(__dirname, 'examples', fileName);

    fs.writeFile(filePath, svgTemplate, (err) => {
        if (err) {
            console.error('Error writing SVG file:', err);
        } else {
            console.log('SVG file created successfully at:', filePath);
        }
    });
});

