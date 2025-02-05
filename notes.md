Things i learnt: 
1. Why we use “16777215" when generating random hex colors:
     1. Hex colors use the RGB model, where each color is represented as #RRGGBB, with Red, Green, and Blue values ranging from 00 to FF (0 to 255 in decimal).

      2. The total number of possible colors in the RGB model is 256 × 256 × 256 = 16,777,216, meaning the color range in decimal is from 0 (#000000) to 16,777,215 (#FFFFFF).

      3. The number 16,777,215 is used in Math.random() because Math.random() generates a decimal between 0 and 1. Multiplying by 16,777,215 ensures the generated number falls within the valid color range.

      4. The .toString(16) conversion turns the decimal number into a hexadecimal string, representing the color in hex format.

      5. The .padStart(6, '0') method ensures that the hex code always has exactly 6 characters, preventing shorter values from appearing.

    This method guarantees that every randomly generated color is valid and properly formatted in the #RRGGBB format.

2. Adding <script src="script.js"></script> at the end of html file, not in start.
     The issue is that  JavaScript file (script.js) is loaded before the HTML content is fully rendered. Since the <script> tag is placed in the <head> section,    when the script executes, it tries to select elements (#colour and #flip) before they exist in the DOM. This results in null values, and the event listener does not get attached properly.

Step by Step Algorithm:
> Tutorial link : https://www.webdevmonk.com/projects/flip-color-project.html
1. Create an HTML file and include the provided code.

2. In the CSS file, define styles for the h1 and button elements. You may also want to define styles for the container element or any other elements you wish to style.

3. Create a JavaScript file and link it to the HTML file using the script element at the bottom of the body element.

4. In the JavaScript file, define a function that will be called when the button is clicked. This function should change the text of the h1 element to a random color in the hexadecimal format (e.g. "#ff00ff").

5. To generate a random color, you can use the JavaScript Math.random() function to generate a random number between 0 and 1, then convert it to a hexadecimal value using the toString(16) method. You may also want to add a # symbol at the beginning of the color value.

6. In the JavaScript file, add an event listener to the button element that listens for a "click" event and calls the function you defined in step 5 when the event is triggered.


