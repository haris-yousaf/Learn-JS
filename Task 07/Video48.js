class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}-dfgf7gdfg7g`
    }

    set password(value){
        this._password = value
    }
}

const haris = new User("haris@yousaf.com", "password")
console.log(haris.password);