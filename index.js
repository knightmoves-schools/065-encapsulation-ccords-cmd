
let length = 5;
let height = 10;
class rectangle {
    constructor(length,height) {
        this.length = length;
        this.height = height;
    };
    calculateArea() {
        return this.length * this.height;
    };
};
document.getElementById('result').innerHTML = rectangle;

