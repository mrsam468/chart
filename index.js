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
        <p >name:${chart.title}</p><div>
        <div><button class="chart-button">add to chart</button></div>${addEventListener("click",function(e){
            this.sessionStorage.setItem("title",JSON.stringify(chart))
        })}`
        document.querySelector("#search-result").appendChild(div)
    });
}
async function category() {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const result=await res.json()
  result.forEach(char=>{
    
       if(search.value===char.category){
        const category={char}
        const div=document.createElement("div")
        div.classList.add("the-image-div")
        div.innerHTML=`<div class="card"><img class="the-image" src="${char.image}" alt="the majot city"></div>
        <div class="title"><h2>price:${char.price}</h2>
        <p>name:${char.title}</p>
        </div>`
        document.querySelector("#body").appendChild(div)
       }
       
    }
)
search.value=""
}



const search=document.querySelector("#search-bar");


switch(global.page){
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


}
function getfromlocal(){
    const session =JSON.parse(sessionStorage.getItem("title"))
    const div =document.createElement('div');
    div.classList.add("the-image-div");
    div.innerHTML=`<div class="card"><img class="the-image" src="${session.image}" alt="the majot city"></div>
        <div class="title"><h2>price:${session.price}</h2>
        <p>title:${session.title}</p>
        </div>`
    document.querySelector("#james").appendChild(div)
}


    
    

  

