class Car {
    constructor(name, model, manufacturer, productionYear, mileage, price, doors, tires, seats, color) {
        this.name = name;
        this.model = model;
        this.manufacturer = manufacturer;
        this.productionYear = productionYear;
        this.mileage = mileage;
        this.price = price;
        this.doors = doors;
        this.tires = tires;
        this.seats = seats;
        this.color = color;
    }

    toString() {
        return `Name: ${this.name}\nModel: ${this.model}\nManufacturer: ${this.manufacturer}\nProduction Year: ${this.productionYear}\nMileage: ${this.mileage}\nPrice: ${this.price}\nDoors: ${this.doors}\nTires: ${this.tires}\nSeats: ${this.seats}\nColor: ${this.color}\nentryDate: ${this.entryDate}\n`;
    }
}

Car.prototype.entryDate = new Date();

module.exports = Car;

let ford = new Car("Ford", "Ford GT100", "Ford", 2019, 0, 50000.0, 2, 4, 2, "Red");

console.log(ford.toString());