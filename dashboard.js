let currentUser = JSON.parse(localStorage.getItem("currentUser"))

let donors = JSON.parse(localStorage.getItem("donors")) || []

let requests = JSON.parse(localStorage.getItem("requests")) || []


if(!currentUser){
window.location="index.html"
}


document.getElementById("profileName").innerText="Name: "+currentUser.name
document.getElementById("profileEmail").innerText="Email: "+currentUser.email
document.getElementById("profileCity").innerText="City: "+currentUser.city



function logout(){

localStorage.removeItem("currentUser")

window.location="index.html"

}



function registerDonor(){

let blood=document.getElementById("bloodGroup").value

let availability=document.getElementById("availability").value


let duplicate=donors.some(d => d.email===currentUser.email)


if(duplicate){

alert("You are already registered as donor")

return

}


let donor={

name:currentUser.name,
email:currentUser.email,
city:currentUser.city,
blood:blood,
availability:availability,
phone:currentUser.phone

}


donors.push(donor)

localStorage.setItem("donors",JSON.stringify(donors))


alert("Donor registered successfully")

}



function searchDonor(){

let blood=document.getElementById("searchBlood").value

let city=document.getElementById("searchCity").value.toLowerCase()

let results=donors.filter(d =>

d.blood===blood && d.city.toLowerCase().includes(city)

)


let container=document.getElementById("donorResults")

container.innerHTML=""


results.forEach(d => {

let div=document.createElement("div")

div.className="card"

div.innerHTML=`

<h3>${d.name}</h3>
<p>Blood: ${d.blood}</p>
<p>City: ${d.city}</p>
<p>Phone: ${d.phone}</p>

<a href="https://www.google.com/maps/dir/?api=1&destination=${d.city}" target="_blank">

<button>Directions</button>

</a>

`

container.appendChild(div)

})

}



function createRequest(){

let patient=document.getElementById("patientName").value

let hospital=document.getElementById("hospital").value

let blood=document.getElementById("requestBlood").value

let urgency=document.getElementById("urgency").value


let req={

patient,
hospital,
blood,
urgency,
city:currentUser.city

}


requests.push(req)

localStorage.setItem("requests",JSON.stringify(requests))


alert("Emergency request submitted")

}