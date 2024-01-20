let counters = document.querySelectorAll(".counter");

function counter_increase(nb_max, cpt) {
    let cpt_increment = () => {
        let nb_to_increase = +cpt.innerText;
        let incrementator = Math.ceil(nb_max / 200); // More we divide the value by something higher = more slowly will be the increment and math.ceil output : smth entier like 5 , 8 never 5.2 or 6.32

        if (nb_to_increase < nb_max) {
            let new_value = Math.min(nb_max, Math.ceil(nb_to_increase + incrementator));
            cpt.innerText = `${new_value}`
            // cpt.innerText = `${Math.ceil(nb_to_increase + incrementator)}`;
            setTimeout(cpt_increment, 1); // recurrence with setTimeOut
        }
    }
    cpt_increment(); // recurrence of cpt_increment
}

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");

    for (let index = 0; index < counters.length; index++) {

        counters[index].innerText = '0';
        
        if (index == 0) {
            counter_increase(12000, counters[index])
        }
        else if (index == 1) {
            counter_increase(5000, counters[index])
        }
        else if (index == counters.length -1) {
            counter_increase(7500, counters[index])
        }
    }
  });