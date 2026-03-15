let currentUser = JSON.parse(localStorage.getItem("currentUser"))

if(!currentUser || currentUser.role !== "admin"){
window.location = "index.html"
}

let donors = JSON.parse(localStorage.getItem("donors")) || []
let requests = JSON.parse(localStorage.getItem("requests")) || []
let users = JSON.parse(localStorage.getItem("users")) || []


document.getElementById("totalUsers").innerText = users.length
document.getElementById("totalDonors").innerText = donors.length
document.getElementById("totalRequests").innerText = requests.length


function displayDonors(){

let container = document.getElementById("donorList")

container.innerHTML = ""

donors.forEach((d,index)=>{

let div = document.createElement("div")

div.className="card"

div.innerHTML = `
<h3>${d.name}</h3>
<p>Blood: ${d.blood}</p>
<p>City: ${d.city}</p>
<p>Phone: ${d.phone}</p>

<button onclick="deleteDonor(${index})">Delete</button>
`

container.appendChild(div)

})

}


function displayRequests(){

let container = document.getElementById("requestList")

container.innerHTML = ""

requests.forEach((r,index)=>{

let div = document.createElement("div")

div.className="card"

div.innerHTML = `
<h3>${r.patient}</h3>
<p>Blood Needed: ${r.blood}</p>
<p>Hospital: ${r.hospital}</p>
<p>Urgency: ${r.urgency}</p>

<button onclick="deleteRequest(${index})">Delete</button>
`

container.appendChild(div)

})

}


function deleteDonor(index){

donors.splice(index,1)

localStorage.setItem("donors",JSON.stringify(donors))

displayDonors()

}


function deleteRequest(index){

requests.splice(index,1)

localStorage.setItem("requests",JSON.stringify(requests))

displayRequests()

}


function resetSystem(){

if(confirm("Are you sure you want to reset system?")){

localStorage.clear()

alert("System reset complete")

window.location="index.html"

}

}


function logout(){

localStorage.removeItem("currentUser")

window.location="index.html"

}


displayDonors()
displayRequests()