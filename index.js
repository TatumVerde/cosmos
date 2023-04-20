const theme = document.querySelector("#theme");
const body = document.querySelector("body");
const addPlanetBtn = document.querySelector("#btn");


theme.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
  }
})

function editText(event) {
  var buttonId = event.target.id;

  buttonId = '.' + buttonId;

  var editableText = document.querySelector(buttonId);

  editableText.contentEditable = true;

  editableText.focus();
}



function addPlanetToRow(planetName, planetDescription) {
  const rows = document.querySelectorAll('.row');
  const lastRow = rows[rows.length - 1];
  const card = document.createElement('div');
  card.classList.add('col-lg-4');
  card.innerHTML = `
    <div  class="card">
    <div id="myImg" class="card-img-top">
    <input type="file" id="myFileInput" >
    <button onclick="uploadFile()">Завантажити</button>
    </div>
    <div class="card-body"><h5>${planetName}</h5>
    <p>${planetDescription}</p></div>
    </div>
  `;
  lastRow.appendChild(card);
  card.contentEditable = true;
}

document.getElementById("btn").addEventListener("click", function() {
  const planetName = "Назва планети";
  const planetDescription = "Опис планети";
  addPlanetToRow(planetName, planetDescription);
}); 



function uploadFile() {
  const fileInput = document.getElementById('myFileInput');
  const file = fileInput.files[0];
  const reader = new FileReader();
  
  reader.readAsDataURL(file);
  reader.onload = function() {
    const image = new Image();
    const myImg = document.getElementById('myImg')
    const myCard = document.querySelector(".card-img-top");

    image.src = reader.result;
    myImg.appendChild(image);
    
    const cardWidth = myCard.offsetWidth;
    const cardHeight = myCard.offsetHeight;
    image.style.width = cardWidth + "px";
    image.style.height = cardHeight + "px";
  };

}


