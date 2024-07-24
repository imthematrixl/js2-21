//type conversion

let age = window.prompt("how old are you?")
age = Number(age)
age += 1

console.log(age)


//const = variable that cant be changed
let pi = 3.1415
let radius
let circumference 

radius = window.prompt('Enter the radius of a circle')
radius = Number(radius)
circumference = 2 * pi * radius;

console.log(circumference);