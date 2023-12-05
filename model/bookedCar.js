class bookedCar {
    constructor(name, model, productionYear, milliage, price, payment, user) {
        this.name = name;
        this.model = model;
        this.productionYear = productionYear;
        this.milliage = milliage;
        this.price = price;
        this.payment = payment;
        this.user = user;
    };

    generateBookingDate (){
        this.bookingDate = new Date();
        return this.bookingDate;
    }

    toString() {
        return `Name: ${this.name}\nModel: ${this.model}\nManufacturer: ${this.manufacturer}\nProduction Year: ${this.productionYear}\nMilliage: ${this.milliage}\nPrice: ${this.price}\nDoors: ${this.doors}\n`;
    }
}

module.exports = bookedCar;