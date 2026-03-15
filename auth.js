// Load users from localStorage
let users = JSON.parse(localStorage.getItem("users")) || []


// ======================
// REGISTER FUNCTION
// ======================

function register(){

let name = document.getElementById("name").value.trim()
let email = document.getElementById("email").value.trim()
let phone = document.getElementById("phone").value.trim()
let city = document.getElementById("city").value.trim()
let blood = document.getElementById("blood").value
let password = document.getElementById("password").value.trim()

// Validation
if(name=="" || email=="" || phone=="" || city=="" || password==""){
alert("Please fill all fields")
return
}

// Email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

if(!emailRegex.test(email)){
alert("Enter valid email address")
return
}

// Phone validation
const phoneRegex = /^[0-9]{10}$/

if(!phoneRegex.test(phone)){
alert("Enter valid 10 digit phone number")
return
}

// Check duplicate users
let exists = users.some(u => 
u.email === email || u.phone === phone
)

if(exists){
alert("User already exists with this email or phone")
return
}


// Create new user
let user = {

name: name,
email: email,
phone: phone,
city: city,
blood: blood,
password: password,
role: "user"

}


// Save user
users.push(user)

localStorage.setItem("users", JSON.stringify(users))

alert("Registration successful")

// Redirect to login
window.location = "index.html"

}



// ======================
// LOGIN FUNCTION
// ======================

function login(){

let email = document.getElementById("email").value.trim()
let password = document.getElementById("password").value.trim()

let user = users.find(u => 
u.email === email && u.password === password
)

if(!user){

alert("Invalid email or password")

return

}

// Save session
localStorage.setItem("currentUser", JSON.stringify(user))


// Redirect based on role
if(user.role === "admin"){

window.location = "admin.html"

}else{

window.location = "dashboard.html"

}

}