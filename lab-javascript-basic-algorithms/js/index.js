// console.log("Iteration 1: Names and Input")

const hacker1 = "Max"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "My Biggest Nemesis"
console.log(`the navigator's name is "${hacker2}"`)

// console.log("Iteration 2: Conditionals")

console.log(`TEST = the length of the "${hacker2}" is ${hacker2.length} characters`)

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length}`)
} else {
    console.log(`the navigator has the longest name, it has ${hacker2.length} symbols, and it's scary X|`)
}


// Iteration 3.1: Loops

let between = " "

let nameCap1 = hacker1.split("").join(between)
let nameCap2 = hacker2.split("").join(between)

console.log(nameCap1)
console.log(nameCap2.toUpperCase())

// Iteration 3.2: Loops

// split - reverse - join

let nameRev1 = hacker1.split("").reverse("").join("")
console.log(nameRev1)

let nameRev2 = hacker2.split("").reverse("").join("")
console.log(nameRev2)

// Iteration 3.3: Loops

// something like hacker1[0] == hacker1[0]

// lexicographical comparison = alpha > beta || alpha < beta

if (hacker1 > hacker2) {
    console.log ("the driver's name goes first ")
} else if (hacker1 < hacker2) {
    console.log ("the navigator's name goes first")
} else {
    console.log ("do you guys have the same name or what???")
}

// bonus 1 - lorem ipsum

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut dapibus sem. Nullam tempus massa sit amet lectus convallis, quis porta lacus tempor. Duis id malesuada odio, sit amet vestibulum ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id urna sed sapien tristique egestas vitae eget lacus. Morbi consequat odio risus, at rhoncus felis scelerisque at. Nullam nunc dui, molestie a rhoncus a, ornare a ligula. Praesent finibus, nisl eu pulvinar ornare, neque ipsum luctus odio, non pharetra ipsum risus eu ex. Morbi sed ipsum metus. Vivamus dictum ipsum eu interdum malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi dapibus tortor dolor, sed lacinia turpis molestie in. Nulla vulputate, sem eget congue dapibus, erat tellus interdum arcu, ac porttitor sapien diam eu lorem."

console.log(lorem)

console.log(lorem.split(" ").length)

// for some reason, i cant put in 3 paragraphs, it gives me an error 

// bonus 2 - palindrome

