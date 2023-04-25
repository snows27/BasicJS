const divuser = document.createElement("div");
const divalbum = document.createElement("div");
const Body = document.getElementById("showdata");
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(user => {
    user.map((x) => {
        const p = document.createElement("p");
        p.innerText = `${x.id}: ${x.username}`
        divuser.append(p)
        console.log(divuser);
    }) 
    console.log(user) 
})

function displayData(){
   
   Body.appendChild(divuser)
}
function displayTitle(){
   Body.appendChild(divalbum)
}
function clearData(){
    divuser.remove()
    divalbum.remove()
}


fetch('https://jsonplaceholder.typicode.com/albums')
.then(res => res.json())
.then(albums => {
    albums.map((y) => {
        const p = document.createElement("p")
        p.innerText = `${y.userId}: ${y.title}`
        divalbum.append(p)
        console.log(y);
    })
})
