const global = {
    page: window.location.pathname
}
async function fetchproduct(){
    const res = await fetch(`https://fakestoreapi.com/products`);
    const result=await res.json()
    result.forEach(chart=> {
        const div=document.createElement("div")
        div.classList.add('the-image-div')
        div.innerHTML=`<div><img class="the-image" src='${chart.image}' alt="movie.description"></div>
       <div class="title"> <h2>price:$${chart.price}</h2>
        <p >name:${chart.title}</p></div><div class="james">
        <button class="chart-button">add to chart</button></div>
        `
        document.querySelector("#search-result").appendChild(div)
});
     document.querySelectorAll(".chart-button").forEach(button=>{
        button.addEventListener('click',(e)=>{
            const dom = e.target.parentElement.parentElement.innerHTML
            JSON.stringify(sessionStorage.setItem("title",dom))
        })
     })

}      
async function category() {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const result=await res.json()
  result.forEach(char=>{
    
       if(search.value===char.category){
        const category={char}
        console.log(category)
        const div=document.createElement("div")
        div.classList.add("the-image-div")
        div.innerHTML=`<div class="card"><img class="the-image" src="${category.char.image}" alt="the majot city"></div>
        <div class="title"><h2>price:${category.char.price}</h2>
        <p>name:${category.char.title}</p>
        <button class="chart-button">add to chart</button></div>
        </div>`
        document.querySelector("#body").appendChild(div)
       }
       
    }
)
search.value=""
}



const search=document.querySelector("#search-bar");


switch(global.page){
    case "/":
        search.addEventListener("keypress",(e)=>{
    // e.preventDefault()
    if(e.key==="Enter"){
        if(search.value===""){
            alert("search for a category")
        }else{
           category()
        }
    }

}
)
fetchproduct()
break;
    case "/index.html":

search.addEventListener("keypress",(e)=>{
    // e.preventDefault()
    if(e.key==="Enter"){
        if(search.value===""){
            alert("search for a category")
        }else{
           category()
        }
    }

}
)
fetchproduct()
break;
case "/chart.html":
getfromlocal()
clearstorage()

}
function getfromlocal(){
    const session =sessionStorage.getItem("title")
    const div =document.createElement('div');
    div.classList.add("the-image-div");
    div.innerHTML=`${session}`
    
    document.querySelector("#james").appendChild(div).lastElementChild.remove()
}
function clearstorage(){
document.querySelector("#clear").addEventListener("click",()=>{
    sessionStorage.clear()
document.body.innerHTML=""
})
}