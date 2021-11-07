const container = document.querySelector('.container');

let limit = 4;
let pageCount = 1;
let postCount = 1;

const getPost = async() => {
const response = await fetch(`https://fakestoreapi.com/products`);  
const data = await response.json();

data.map((curElm, index)=> {
    const htmlData =`
    <div class="products">
       <p class="products_id">${postCount++}</p>
       <h2 class="title">${curElm.title}</h2>
       <img class ="image">
           <img src=${curElm.image} alt="Image"/><img/>
       <h2 class="price" style="color:green">Cost : $ ${curElm.price}</h2>
       <p class ="description"style="color:#3F5C9A">${curElm.description}</p>
       <p class ="category">Category : ${curElm.category}</p>
       
        <h2 class="rating">Rating :<b style="color:red"> 4.2 / 5</b>
       <Rating =${curElm.rating} rate=${curElm.rate} count=${curElm.count}</Rating>
       <a class="cart" href="cart.html">
       <button onclick="button">Add to Cart</button>
       </a>
    </div>`;
    

    container.insertAdjacentHTML(`beforeend`, htmlData);
})
};

getPost();

const showData =() => {
    setTimeout(() =>{
        pageCount++;
        getPost();
    },300)
};

window.addEventListener(`scroll`,() => {
    const {scrollHeight,scrollTop ,clientHeight} = document.documentElement;

    if(scrollTop + clientHeight >= scrollHeight) {
        showData();
    }
})


