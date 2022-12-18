var data=JSON.parse(localStorage.getItem("product"));
console.log(data);
document.querySelector("#product-name").innerText=data.name;
let image=document.createElement("img");
image.setAttribute("src",data.image);
document.querySelector("#image").append(image);
document.querySelector("#details").innerText=data.details;
document.querySelector("#desc").innerText=data.description;
let price=document.createElement("h2");
price.innerText=data.price;
let pname=document.createElement("h3");
pname.innerText=data.name;
pname.style.color="grey";
let desc=document.createElement("h4");
desc.innerText=data.description;
desc.style.color="grey";
let more= document.createElement("div");
let loc=document.createElement("p");
loc.innerText=data.location;
loc.style.color="grey";
let day=document.createElement("p");
day.innerText=data.uploaded;
day.style.color="grey";
more.append(loc,day);
document.querySelector("#price").append(price,pname,desc,more);

let seller=document.createElement("h2");
seller.innerText="Seller Description";
let sname=document.createElement("h3");
sname.innerText=data.seller;
let sdesc=document.createElement("h4");
sdesc.innerText=data.description;
let chat=document.createElement("button");
chat.innerText="Chat with Seller";
document.querySelector("#seller").append(seller,sname,sdesc,chat);

document.querySelector("#sell").addEventListener("click",()=>{
    window.location.href="./postAd.html";
})

let fetchedData=[];
document.querySelector("#location").addEventListener("change", ()=>{
    let filtered = fetchedData.filter((element) =>{
        if(element.location === document.querySelector("#location").value){
            return true;
        }else{
            return false;
        }
    })
    displayProducts(filtered);
})
document.querySelector("#category").addEventListener("change", ()=>{
    let filtered = fetchedData.filter((element) =>{
        if(element.category === document.querySelector("#category").value){
            return true;
        }else{
            return false;
        }
    })
    displayProducts(filtered);
})
fetch("https://6399cde016b0fdad7749cc55.mockapi.io/products")
.then((responseObject) =>{
    return responseObject.json();
})
.then((acctualData) =>{
    fetchedData = acctualData;
})
.catch((error) =>{
    console.log(error);
})

document.querySelector("#search-btn").addEventListener("click",()=>{
    let q = document.querySelector("#search").value;
    console.log(q);
    let newData = fetchedData.filter((el) =>
        el.name.toLowerCase().includes(q.toLowerCase())
    );
    displayProducts(newData);
})

function displayProducts(data){
    document.querySelector("#container").innerHTML=null;
    let pro_container=document.createElement("div");
    document.querySelector("#container").append(pro_container)
    data.forEach((element) => {
        let card=document.createElement("div");
        let image=document.createElement("img");
        image.setAttribute("src",element.image);
        let price=document.createElement("h2");
        price.innerText=element.price;
        let name=document.createElement("h3");
        name.innerText=element.name;
        name.style.color="grey";
        let desc=document.createElement("h4");
        desc.innerText=element.description;
        desc.style.color="grey";
        let more= document.createElement("div");
        let location=document.createElement("p");
        location.innerText=element.location;
        location.style.color="grey";
        let day=document.createElement("p");
        day.innerText=element.uploaded;
        day.style.color="grey";
        more.append(location,day);
        card.append(image,price,name,desc,more);
        pro_container.append(card);

        card.addEventListener("click",()=>{
            localStorage.setItem("product",JSON.stringify(element));
            window.location.href="./product.html";
        })
    })
}
