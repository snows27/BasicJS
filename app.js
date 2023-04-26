const divuser = document.createElement("div");
const divalbum = document.createElement("div");
const divImage = document.createElement("div");
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
function displayImage(){
    Body.appendChild(divImage)
}
function clearData(){
    divuser.remove()
    divalbum.remove()
    divImage.remove()
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


fetch('https://jsonplaceholder.typicode.com/photos')
.then(res => res.json())
.then(photos => {
    photos.map((x) => {
        console.log(x)
        const p = document.createElement("p")
        const img = document.createElement("img")
        img.src = x.thumbnailUrl  
        p.innerText = `${x.id}: ${x.title}`
        divImage.append(p)
        divImage.append(img)

    })
})
