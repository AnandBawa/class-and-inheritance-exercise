// Creating shapes as classes and placing on the grid

class Point {
  //point defines the coordinates where a shape is on the (x,y) grid
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    console.log("Current coordinates are (", this.x, ",", this.y, ")");
  }
}

class Shape {
  constructor() {
    this.type = this.constructor.name; //displays the type of shape
  }

  //any shape can be placed or moved on the grid using x, y values inputted. when placed on the grid a position property is assigned to the object
  addToPlane(x, y) {
    this.position = new Point(x, y);
    console.log("Added to coordinates (", this.position.x, ",", this.position.y, ")");
  }

  //move the shape to a new point on the grid using x, y values inputted. if the shape is not on the grid it gets added
  move(x, y) {
    if (Object.keys(this).includes("position")) {
      //Object.hasOwn(this, "position") also works
      this.position.x += x;
      this.position.y += y;
      console.log("Moved to coordinates (", this.position.x, ",", this.position.y, ")");
    } else {
      this.addToPlane(x, y);
    }
  }
}

class Circle extends Shape {
  //circle is a shape with no sides
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    console.log("Area of circle is:", Math.PI * this.radius ** 2);
  }

  circumference() {
    console.log("Circumference of circle is:", 2 * Math.PI * this.radius);
  }
}

class Side {
  //any polygon has 3 or more sides. Each side has a value we assign to length property of side object
  constructor(len) {
    this.length = len;
  }
}

class Polygon extends Shape {
  //polygon requires an array of 'side' objects depending on the number of sides of the polygon
  constructor(arr) {
    super();
    this.sides = arr;
  }

  //this method will output the number of sides a polygon has
  numberOfSides() {
    console.log("The number of sides is:", this.sides.length);
  }

  //perimeter is sum of all sides of a polygon
  perimeter() {
    let sum = this.sides.reduce((acc, side) => acc + side.length, 0);
    // let sum = 0;
    // this.sides.forEach(function (side) {
    //   sum += side.length;
    // });

    console.log("Perimiter is:", sum);
  }
}

class Triangle extends Polygon {
  //triangle object is created using 3 integer values that each make up a 'side' object which is then returned to Polygon parent class as array of 'side' objects
  constructor(a, b, c) {
    let s1 = new Side(a);
    let s2 = new Side(b);
    let s3 = new Side(c);
    super([s1, s2, s3]);
  }
}

class Quadrilateral extends Polygon {
  //quadrilateral object is created using 4 integer values that each make up a 'side' object which is then returned to Polygon parent class as an array of 'side' objects
  constructor(a, b, c, d) {
    let s1 = new Side(a);
    let s2 = new Side(b);
    let s3 = new Side(c);
    let s4 = new Side(d);
    super([s1, s2, s3, s4]);
  }
}

class Rectangle extends Quadrilateral {
  //since rectangle is a type of quadrilateral its only needs 2 integer values, width and height. we send two of each to its parent class of Quadilateral
  constructor(a, b) {
    super(a, b, a, b);
    this.width = a;
    this.height = b;
  }

  area() {
    console.log("Area is:", this.width * this.height);
  }
}

class Square extends Rectangle {
  //since square is a quadrilateral with all sides equal, we only need 1 integer value of side length and send 2 of the same to its parent class Rectangle, which further sends 4 of same to Quadilateral class
  constructor(a) {
    super(a, a);
    this.length = a;
  }

  listProperties() {
    //   let str = [];
    //   for (let key of Object.keys(this)) {
    //     if (Object.hasOwn(this, key)) {
    //       str.push(key);
    //     }
    //   }
    console.log("Unique properties are:", Object.keys(this).join(", "));
  }
}

let sq = new Square(5);
let rec = new Rectangle(5, 7);
let quad = new Quadrilateral(1, 2, 3, 4);
let tri = new Triangle(1, 2, 3);

let side = new Side(8);
let poly = new Polygon([new Side(1), new Side(2), new Side(3)]);

let cir = new Circle(6);

let shape = new Shape();

console.log(sq.type);
sq.addToPlane(1, 2);
sq.move(2, 3);
sq.position.toString();
console.log(sq.sides);
sq.numberOfSides();
sq.perimeter();
sq.width;
sq.height;
sq.area();
sq.length;
sq.listProperties();
console.log(sq);
