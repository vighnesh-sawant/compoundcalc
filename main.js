document.querySelector("#calc").addEventListener("click", calc);

function calc() {
    const c = document.querySelector("#c").value;
    const y = document.querySelector("#y").value;
    const i = document.querySelector("#i").value;
    const fi = document.querySelector("#fi");
    const a = document.querySelector("#am");
    let r = 1+(i/100);
    let amount = c*(Math.pow(r,y));
    let fina = (Math.round(amount*100))/100
    a.innerHTML = fina;
    fi.innerHTML= fina-c;
}
