document.querySelector("#submit").addEventListener("click",()=>{
    let data=[];
    let obj={
        uploaded:"Today",
        name:document.querySelector("#name").value,
        category:document.querySelector("#category").value,
        price:document.querySelector("#price").value,
        description:document.querySelector("#desc").value,
        details:document.querySelector("#details").value,
        location:document.querySelector("#location").value,
        image:document.querySelector("#image").value,
        seller:document.querySelector("#seller").value,
        id:"51",
    }
    data.push(obj);
    localStorage.setItem("Ad",JSON.stringify(data));
    window.location.href="./index.html";
    alert("Your add has been posted");
})
