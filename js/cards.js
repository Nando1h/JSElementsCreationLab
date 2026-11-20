const body  = document.getElementById("mainBody");
let count   = 1;

function createCard(innerText = count) {
    // <div class="col...">
    const divCol = document.createElement("div");
    divCol.classList.add("col-12", "col-md-4", "col-xl-3");

    // <div class="card">
    const divCard = document.createElement("div");
    divCard.classList.add("card", "mb-4");

    // <div class="card-body">
    const divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body");

    // <h5 class="card-title">
    const h5CardTitle = document.createElement("h5");
    h5CardTitle.classList.add("card-title");
    h5CardTitle.innerText = innerText;            // 👈 usa el parámetro

    // <button>
    const buttonBtn = document.createElement("button");
    buttonBtn.classList.add("btn", "btn-outline-success");
    buttonBtn.innerText = "Add new";

    // <label> e <input> (Paso 4)
    const labelFormLabel = document.createElement("label");
    labelFormLabel.classList.add("form-label");
    labelFormLabel.innerText = "new item title";

    const inputFormControl = document.createElement("input");
    inputFormControl.classList.add("form-control", "mb-4");
    inputFormControl.type = "text";

    // Listener CORREGIDO (Paso 3 + Paso 4)
    buttonBtn.addEventListener("click", function (e) {
        createCard(inputFormControl.value || "Card title"); // 👈 pasa el valor
        e.target.disabled = true;
        e.target.classList.remove("btn-outline-success");
        e.target.classList.add("btn-outline-danger");
        e.target.innerText = "Clicked";
        console.log(e); // Paso 3.3
    });

    // Ensamblado
    divCardBody.appendChild(h5CardTitle);
    divCardBody.appendChild(labelFormLabel);
    divCardBody.appendChild(inputFormControl);
    divCardBody.appendChild(buttonBtn);           // 👈 solo UNA vez

    divCard.appendChild(divCardBody);
    divCol.appendChild(divCard);
    body.appendChild(divCol);

    count++;
}

createCard();