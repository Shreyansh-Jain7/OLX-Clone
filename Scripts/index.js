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
    displayProducts(fetchedData);

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
    document.querySelector("#product-container").innerHTML=null;
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
        document.querySelector("#product-container").append(card);

        card.addEventListener("click",()=>{
            localStorage.setItem("product",JSON.stringify(element));
            window.location.href="./product.html";
        })
    })
}

document.querySelector("#sell").addEventListener("click",()=>{
    window.location.href="./postAd.html";
})

var ad=JSON.parse(localStorage.getItem("Ad"));
if (ad!==null){
    displayAd(ad);
}

function displayAd(data){
    document.querySelector("#Ad-container").innerHTML=null;
    let adHeading=document.createElement("h2");
    adHeading.innerText="Your Ad";
    document.querySelector("#Ad-container").append(adHeading);
    let Ad=document.createElement("div");
    document.querySelector("#Ad-container").append(Ad);
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
        Ad.append(card);

        card.addEventListener("click",()=>{
            localStorage.setItem("product",JSON.stringify(element));
            window.location.href="./product.html";
        })
    })
}

