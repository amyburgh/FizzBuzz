const nbr = document.querySelector("p");
const slider = document.querySelector("#rangeSlider");
const list = document.querySelector("ol");

let update = () => nbr.textContent = slider.value;
slider.addEventListener('input', update);
update();

const button = document.querySelector("button");
button.addEventListener("click", () => {
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
})
button.addEventListener('click', () => fizzbuzz(slider.value));

function fizzbuzz(num) {
    let s = "";
    let n3 = 0;
    let n5 = 0;
    for (let i = 1; i <= num; i++) {
        n3++;
        n5++;
        if (n3 == 3) {
            s += "Fizz";
            n3 = 0;
        }
        if (n5 == 5) {
            s += "Buzz";
            n5 = 0;
        }
        if (!s) s += i;
        addToList(s);
        s = "";
    }
}

function addToList(s) {
    const listItem = document.createElement("li");
    list.appendChild(listItem);
    listItem.textContent = s;
}