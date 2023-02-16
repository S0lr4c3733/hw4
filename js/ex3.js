const r = Number(prompt("Enter the circle radius:"));

const circle = {
  radius: r,
  circumference() {
    return 2 * Math.PI * this.radius;
  },
  area() {
    return 3.14 * Math.pow(this.radius, 2);
  },
};

alert(`Its circumference is ${circle.circumference()} and its area is ${circle.area()}`)

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
