class User {
    constructor(id, fullName, phone, email, nationalId, country, city, state, password) {
        this.id = id;
        this.fullName = fullName; 
        this.phone = phone;
        this.email = email;
        this.nationalId = nationalId;
        this.country = country;
        this.city = city;
        this.state = state;
        this.password = password;
    }

    harshPassword (password) {
        this.password = password+"32n30saf43";
    }
}

User.prototype.createDate = new Date();

module.exports = User;