const user = {
    username: "Haris",

    welcomeMessage: function() {
        console.log(`Welcome to website ${this.username}`);
    }

}

user.welcomeMessage()

const arrowFunction = () => {                  // Arrow Function
    let username = "Haris"
    return username
}

console.log(arrowFunction())