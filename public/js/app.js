let counters = document.querySelectorAll(".counter");
console.log(counters);

function increase_cpt(nb_max, counter) {
    

    while ( parseInt(counter.innerText ) < nb_max) {
        parseInt(counter.innerText) += 50;
    }
}

const content =  counters[0].innerText;
console.log(content);
let t = counters[0].innerText;
console.log(typeof parseInt (t) );

// element.innerHTML = htmlString

console.log(counters[0].innerText+10);

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");

  });