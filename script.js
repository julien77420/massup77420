function showPage(pageId) {
    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");
}
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker.register("sw.js");
    });
}
const foodCheckboxes = document.querySelectorAll(".food input");

foodCheckboxes.forEach((checkbox, index) => {

    const saved = localStorage.getItem("massup_food_" + index);

    if (saved === "true") {
        checkbox.checked = true;
    }

    checkbox.addEventListener("change", function() {
        localStorage.setItem(
            "massup_food_" + index,
            checkbox.checked
        );
    });
});
function showShoppingList() {
    const foods = document.querySelectorAll(".food");
    const shoppingList = document.getElementById("shoppingList");

    shoppingList.innerHTML = "";

    foods.forEach(function(food) {
        const checkbox = food.querySelector("input");

        if (checkbox.checked) {
            const item = document.createElement("p");
            item.textContent = "🛒 " + food.textContent.trim();
            shoppingList.appendChild(item);
        }
    });

    if (shoppingList.innerHTML === "") {
        shoppingList.innerHTML = "<p>Aucun aliment sélectionné.</p>";
    }
}