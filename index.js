const global = {
  page: window.location.pathname,
};
async function fetchproduct() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const result = await res.json();
  result.forEach((chart) => {
    const div = document.createElement("div");
    div.classList.add("the-image-div");
    div.innerHTML = `<a href="details.html"><div><img class="the-image" src='${chart.image}' alt="movie.description"></div></a><a>
    <div class="james">
     <p >${chart.title}</p>
      <h2>$${chart.price}</h2></div>
     <div class="title"> <button class="chart-button">add to chart</button></div>
        `;

    document.querySelector("#search-result").appendChild(div);
    // document.querySelectorAll("description").style.display="none"
  });
  document.querySelectorAll(".the-image").forEach((image) => {
    image.addEventListener("click", (e) => {
      let dom = e.target.parentElement.parentElement.parentElement.innerHTML;
      console.log(dom);
      localStorage.setItem("details", JSON.stringify(dom));
    });
  });

  // buttons aspect
  document.querySelectorAll(".chart-button").forEach((button) => {
    button.addEventListener("click", (e) => {
      if (button.innerText === "remove from cart") {
       button.innerText = "add to cart ";
        document.body.insertAdjacentHTML(`afterbegin`,
          `<div id="alert"></div>`)
          const toast_container = document.querySelector("#alert")
          toast_container.innerHTML=`<p id="alert-paragraph">item romoved from cart</p>`

          document.querySelector("#alert-paragraph").style.backgroundColor="#ed2849"
      } else {
 let dom = e.target.parentElement.parentElement.parentElement.innerHTML;

        let storedData = localStorage.getItem("myElements");
        let dataArray = [];

        if (storedData) {
          try {
            dataArray = JSON.parse(storedData);
          } catch (error) {
            console.error("Error parsing stored data:", error);
            dataArray = [];
          }
        }
        dataArray.push(dom);
        try {
          localStorage.setItem("myElements", JSON.stringify(dataArray));
        } catch (error) {
          console.error("Error saving data to localStorage:", error);
        }
        button.innerText="remove from cart"

          document.body.insertAdjacentHTML(`afterbegin`,
          `<div id="alert"></div>`)
          const toast_container = document.querySelector("#alert")
          toast_container.innerHTML=`<p id="alert-paragraph">item added to cart</p>`
      }
    });
  });
}

async function category() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const result = await res.json();
  result.forEach((char) => {
    if (search.value === char.category) {
      const category = { char };
      console.log(category);
      const div = document.createElement("div");
      div.classList.add("the-image-div");
      div.innerHTML = `<div class="card"><img class="the-image" src="${category.char.image}" alt="the majot city"></div>
        <div class="title"><h2>price:${category.char.price}</h2>
        <p>name:${category.char.title}</p>
        <button class="chart-button">add to chart</button></div>
        </div>`;
      document.querySelector("#body").appendChild(div);
    }
  });
  search.value = "";
}

const search = document.querySelector("#search-bar");

switch (global.page) {
  case "/":
    search.addEventListener("keypress", (e) => {
      // e.preventDefault()
      if (e.key === "Enter") {
        if (search.value === "") {
          alert("search for a category");
        } else {
          category();
        }
      }
    });
    fetchproduct();
    number();
    break;
  case "/index.html":
    search.addEventListener("keypress", (e) => {
      // e.preventDefault()
      if (e.key === "Enter") {
        if (search.value === "") {
          alert("search for a category");
        } else {
          category();
        }
      }
    });
    fetchproduct();
    number();
    break;
  case "/chart.html":
    getfromlocal();
    clearstorage();
    break;
  case "/details.html":
    details();
    console.log("hello world");
}
function getfromlocal() {
  const session = JSON.parse(localStorage.getItem("myElements"));
  const div = document.createElement("div");
  div.classList.add("chart-image");
  div.innerHTML = `${session}`;
  const dom = document.querySelector("#chart");
  if (dom.innerHTML === null) {
    dom.innerHTML = "please add something to cart";
  }
 
  dom.appendChild(
    div
  )
   div.lastElementChild.remove()

}
function clearstorage() {
  document.querySelector("#clear").addEventListener("click", () => {
    localStorage.clear();
    document.body.innerHTML = "";
  });
}

function number() {
  let count = document.querySelector("#number-of-items");
 
  setInterval(()=>{
 var storedText = JSON.parse(localStorage.getItem("myElements")).length || 0;
 count.innerHTML = storedText ||0;
  },100)
    
}
function details() {
  const get = JSON.parse(localStorage.getItem("details"));
  const div = document.createElement("div");
  div.classList.add("the-image-div");
  div.innerHTML = `${get}`;
  console.log(div);
  document.querySelector("section").appendChild(div);
}
