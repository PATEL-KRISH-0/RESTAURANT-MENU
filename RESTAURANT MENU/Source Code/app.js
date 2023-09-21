const ditils = [
    {
        "src": "1.jpeg",
        "dis": "Lobster Bisque",
        "price": 339.55,
        "description": "Tasty and satisfying",
        "type": "dinner"
    },
    {
        "src": "1.jpeg",
        "dis": "Caesar Salad",
        "price": 445.48,
        "description": "Exquisite and aromatic",
        "type": "dinner"
    },
    {
        "src": "1.jpeg",
        "dis": "Caesar Salad",
        "price": 51.97,
        "description": "Exquisite and aromatic",
        "type": "dinner"
    },
    {
        "src": "1.jpeg",
        "dis": "Lobster Bisque",
        "price": 652.99,
        "description": "Exquisite and aromatic",
        "type": "lunch"
    },
    {
        "src": "1.jpeg",
        "dis": "Spaghetti Bolognese",
        "price": 878.12,
        "description": "Rich and indulgent",
        "type": "breakfast"
    },
    {
        "src": "1.jpeg",
        "dis": "Sushi Rolls",
        "price": 34.14,
        "description": "Tasty and satisfying",
        "type": "breakfast"
    },
    {
        "src": "1.jpeg",
        "dis": "Fish Tacos",
        "price": 971.77,
        "description": "Exquisite and aromatic",
        "type": "breakfast"
    },
    {
        "src": "1.jpeg",
        "dis": "Margherita Pizza",
        "price": 235.6,
        "description": "Mouthwatering and flavorful",
        "type": "lunch"
    },
    {
        "src": "1.jpeg",
        "dis": "Sushi Rolls",
        "price": 819.21,
        "description": "Mouthwatering and flavorful",
        "type": "breakfast"
    },
    {
        "src": "1.jpeg",
        "dis": "Beef Stir Fry",
        "price": 460.15,
        "description": "Delicious and savory",
        "type": "lunch"
    }
]

const all = document.querySelector(".all");
const dinner = document.querySelector(".dinner");
const lunch = document.querySelector(".lunch");
const breakfust = document.querySelector(".breakfust");



const itomsContenar = document.querySelector(".itoms-Contenar");

const cardReplaceFun = (ele, inde) => {
    itomsContenar.insertAdjacentHTML('beforeend', `<div class="card">
    <div class="photo">
        <img src="${ele.src}" alt="">
    </div>
    <div class="detils">
        <div class="h-And-P">
            <h3 class="heding">
                ${ele.dis}
            </h3>
            <div class="price">${ele.price}$</div>
        </div>
        <div class="discripstion">
            ${ele.dis}
        </div>
    </div>
</div>`);

}

// const butnsFuncs = (ele, inde) => {

// }
ditils.forEach((ele, inde) => {
    cardReplaceFun(ele, inde);
});

all.addEventListener("click", () => {

    itomsContenar.innerHTML = ""
    ditils.map((ele, inde) => {
        const itomsContenar = document.querySelector(".itoms-Contenar");
        cardReplaceFun(ele, inde);
        console.log("done");
    });
});
dinner.addEventListener("click", () => {

    itomsContenar.innerHTML = ""
    ditils.map((ele, inde) => {
        if (ele.type == "dinner") {
            const itomsContenar = document.querySelector(".itoms-Contenar");
            cardReplaceFun(ele, inde);
        }
    });
});

lunch.addEventListener("click", () => {

    itomsContenar.innerHTML = ""
    ditils.map((ele, inde) => {
        if (ele.type == "lunch") {
            const itomsContenar = document.querySelector(".itoms-Contenar");
            cardReplaceFun(ele, inde);
        }
    });
});

breakfust.addEventListener("click", () => {

    itomsContenar.innerHTML = ""
    ditils.map((ele, inde) => {
        if (ele.type == "breakfast") {
            const itomsContenar = document.querySelector(".itoms-Contenar");
            cardReplaceFun(ele, inde);
            console.log(ele);
        }
    });
});

