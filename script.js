// const cart = [];

const manageSpinner = (status) =>{
   if(status == true){
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("show-tree").classList.add("hidden");
   }else{
    document.getElementById("show-tree").classList.remove("hidden");
    document.getElementById("spinner").classList.add("hidden");
   }
};

const loadData = () => {
  const url = "https://openapi.programming-hero.com/api/categories";
  fetch(url)
    .then((res) => (res.json()))
    .then((data) => {
      displayData(data.categories);
    })
}

const removeActive=()=>{
  const btnClick = document.querySelectorAll('.click-btn');
   btnClick.forEach((btn) => btn.classList.remove("active"));
};


const clickPost = (id) => {
  manageSpinner(true);
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeActive();
       const clickBtn = document.getElementById(`click-${id}`);
      clickBtn.classList.add("active");
      displayTree(data.plants);
    });

};

const treeData = () => {
  const url = `https://openapi.programming-hero.com/api/plants`;
  fetch(url)
    .then((res) => (res.json()))
    .then((data) => {
      displayTree(data.plants)
    })
}

const displayData = (posts) => {
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";

  posts.forEach((post) => {
    const postData = document.createElement("div");
    postData.innerHTML =
      `
     <button 
   id="click-${post.id}"  
 onclick="clickPost(${post.id})" 
  class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-[#F0FDF4] hover:bg-[#15993D] w-full border-none text-[#1F2937] click-btn">
  ${post.category_name}
</button> 
    `;
    postContainer.append(postData);
  });

};

const showTreeDetails = async(id) =>{

  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  const res = await fetch(url);
  const details = await res.json();
  displayTreeDetails(details.plants);
  console.log(details.plants)
}

const displayTreeDetails = (word) => {
console.log(word);
const detailsBox = document.getElementById("details-container");
detailsBox.innerHTML=
`
 <div class="space-y-4">
            <h1 class="text-2xl font-bold">${word.name}</h1>
             <img src="${word.image}" alt="${word.image}" 
             class="rounded-lg bg-[#EDEDED] w-full h-50 object-cover
              mx-auto">
            <h2 ><span class="font-bold font-xl">Category: </span>${word.category}</h2>
            <p><span class="font-bold font-xl text-black"> Price:</span>  <i class="fa-solid fa-bangladeshi-taka-sign"></i>${word.price}</p>
            <p><span class="font-bold font-xl">Description: </span>${word.description}</p>
        </div>

`;
document.getElementById('tree_modal').showModal();
}
const cart = []; 
let count = 0;   

const displayTree = (posts) => {
  const showTree = document.getElementById("show-tree");
  showTree.innerHTML = "";

  posts.forEach((post) => {
    const showData = document.createElement("div");
    showData.innerHTML = `
      <div class="bg-white p-5 rounded-lg justify space-y-3">
        <img src="${post.image}" alt="${post.image}" 
             class="rounded-lg bg-[#EDEDED] w-full h-48 object-cover
              mx-auto">
        <h2 onclick="showTreeDetails(${post.id})" class="text-lg font-medium">${post.name}</h2>
        <p class="text-sm font-semibold text-[#8C8C8C]">${post.description}</p>
        <div class="flex justify-between items-center">
          <button  class="btn btn-xs rounded-xl text-[#15803D] bg-[#CFF0DC] text-sm font-semibold">${post.category}</button>
          <p class="text-lg font-semibold "><i class="fa-solid fa-bangladeshi-taka-sign"></i> <span>${post.price}</span></p> 
        </div>
        <button id="add-cart-${post.id}" 
                class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-[#15803D] text-[#ffffff] rounded-lg w-full">
          Add to Cart
        </button>
      </div>
    `;
    showTree.append(showData);
manageSpinner(false);  
    document
      .getElementById(`add-cart-${post.id}`)
      .addEventListener("click", () => {
        cartClick(post);
        alert(post.name + " has been added to the cart");
      });
  });
};

const cartClick = (post) => {
  cart.push(post);   
  count++;        
  displayCart();
};

const displayCart = () => {
  const showCart = document.getElementById("show-cart");
  showCart.innerHTML = "";

  let totalPrice = 0; 
 

  cart.forEach((item, index) => {
    totalPrice += item.price; 
    const cartDiv = document.createElement("div");
    cartDiv.innerHTML = `
      <div class="flex justify-between items-center bg-[#F0FDF4] p-4 m-4 rounded-lg">
        <div>
          <h1 class="font-medium text-lg">${item.name}</h1>
          <p class="font-medium text-lg text-[#8C8C8C]">৳${item.price}X 1</p>
        </div>
        <div class="text-[#8C8C8C]">
          <i class="fa-solid fa-xmark cursor-pointer" onclick="removeFromCart(${index})"></i>
        </div>
      </div>
    `;
    showCart.appendChild(cartDiv);
  });


  const totalDiv = document.createElement("div");
   totalDiv.innerHTML=
   `
   <div class="flex justify-between items-center p-4 m-4">
                    <p class="text-lg font-medium">Total:</p>
                    <div class="flex items-center">
                        <i class="fa-solid fa-bangladeshi-taka-sign"></i>
                        <p class="text-lg font-medium">${totalPrice}</p>
                    </div>
                </div>
   `
  showCart.appendChild(totalDiv);
};

const removeFromCart = (index) => {
  cart.splice(index, 1);  // remove product
  count--;                // decrease counter
  displayCart();          // refresh UI
};


loadData();
treeData();


