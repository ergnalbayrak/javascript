document.getElementById("change").addEventListener("click", change);

function change() {

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.exchangeratesapi.io/latest");

    xhr.onload = function () {
        if (this.status) {
            const response = JSON.parse(this.responseText);
            // console.log(this.responseText);
            // console.log(response.rates.TRY);

            const rate = response.rates.TRY
            const amount = document.getElementById("amount").value;
            document.getElementById("tl").value = amount * rate;

        }
    }

    xhr.send();

}