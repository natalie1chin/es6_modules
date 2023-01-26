import Wishlist from "./wishlist";

//selection statements

const submitForm=document.getElementById("submitForm");
const makeInput = document.querySelector("#makeInput");
const modelInput = document.querySelector("#modelInput");
const yearInput = document.querySelector("#yearInput");
const carMake = document.querySelector("#car-make");
const carModel = document.querySelector("#car-model");
const carYear = document.querySelector("#car-year");
const removeBtn = document.querySelector(".removeBtn");
const wishlistUl = document.querySelector("#wishListContainer > ul");

// Ex6
function showCarDetails(car){
    carMake.textContent = car.make;
    carModel.textContent=car.model;
    carYear.textContent=car.year;
    removeBtn.disabled=false;
    removeBtn.setAttribute("data-carId", car.id);
    removeBtn.addEventListener("click", removeCar);

}

//Ex7
function updateDOMList(){
    wishlistUl.innerHTML="";
    myWishList.list.forEach((car)=>{
        const newLi=document.createElement("li");
        newLi.textContent=`${car.make} ${car.model}`;
        newLi.addEventListener("click", ()=>{
            showCarDetails(car);
        });
        wishlistUl.appendChild(newLi);
    })
}


//Ex8

function addCar(event){
    event.preventDefault();
    myWishList.add(makeInput.value, modelInput.value, yearInput.value);
    updateDOMList();
}

//Ex 9
function removeCar(){
    const carId = Number(removeBtn.getAttribute("data-carId"));
    myWishList.remove(carId);
    updateDOMList();
    carMake.textContent="";
    carModel.textContent="";
    carYear.textContent="";
    removeBtn.disabled=true;
}





//construction
const myWishList = new Wishlist();
submitForm.addEventListener("submit", addCar);




myWishList.add("Ford", "Mustang", 2020);
myWishList.add("Chevy", "Cavalier", 1999);
myWishList.add("Ford", "Mustang", 2020);
myWishList.add("Chevy", "Cavalier", 1999);

console.log(JSON.parse(JSON.stringify(myWishList)));

myWishList.remove(2);

updateDOMList();

console.log(myWishList);