const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;
let c = 0 ; // counter

function handleCheck(e) {
    let inBetween = false;

    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('Starting to check them in between!');
                c++;
            }

            if (inBetween && c > 1) {
                checkbox.checked = true;
            }
        });
    }

    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));