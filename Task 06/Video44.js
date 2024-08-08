function SetUsername(username){

    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const haris = new createUser("Haris", "harisy260@gmail.com", "1234")
console.log(haris);