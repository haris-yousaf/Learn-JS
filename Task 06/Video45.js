// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}-hjd87yd87fgdb`
//     }

//     usernameCaps(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const haris = new User("Haris", "harisy260@gmail.com", "password")

// console.log(haris.encryptPassword());
// console.log(haris.usernameCaps());



// function User(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}-dfdf6gd7fggd`
// }

// User.prototype.usernameCaps = function(){
//     return `${this.username.toUpperCase()}`
// }


// const haris2 = new User("haris 02", "haris2@gmail.com", "password2")

// console.log(haris2.encryptPassword());
// console.log(haris2.usernameCaps());


                        //                       INHERITANCE                         //

// class User {
//     constructor(username){
//         this.username = username
//     }

//     logMe(){
//         console.log(`Username is ${this.username}`);
//     }
// }

// class Teacher extends User{
//     constructor(username, email, password){
//         super(username)
//         this.email = email
//         this.password = password
//     }

//     addCourse(){
//         console.log(`A new course was added by ${this.username}`);
//     }
// }

// const teacherHaris = new Teacher("Haris", "haris@teacher.com", "password")

// teacherHaris.logMe()

// const newTeacher = new User("New Teacher")

// newTeacher.logMe()

// console.log(teacherHaris instanceof User);



                        //                       STATIC                         //



class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());