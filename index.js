let length = 5;
let height = 10; 

class Rectangle {

    constructor(length,height) {
        this.length = length;
        this.height = height;
    };
    calculateArea(length, height) {
        return this.length * this.height;
    };
};
document.getElementById('result').innerHTML = rectangle;


