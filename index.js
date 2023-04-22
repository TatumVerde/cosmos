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
  const buttonId = event.target.id;
  buttonId = '.' + buttonId;
  const editableText = document.querySelector(buttonId);
  editableText.contentEditable = true;

  editableText.focus();
}


document.getElementById("btn").addEventListener("click", function () {
  const planetName = "Назва планети";
  const planetDescription = "Опис планети";
  addPlanetToRow(planetName, planetDescription);
});



function addPlanetToRow(planetName, planetDescription) {
  const rows = document.querySelectorAll('.newRow');
  const lastRow = rows[rows.length - 1];
  const card = document.createElement('div');
  card.classList.add('col-lg-4');
  const uniqueId = Math.floor(Math.random() * 1000000);
  card.innerHTML = `
    <div  class="card">
    <div id="myImg${uniqueId}" class="card-img-top">
    <input type="file" id="myFileInput${uniqueId}"  >
    <button id="myBtnId${uniqueId}" onclick="uploadFile(${uniqueId})" onchange="hideButtons(${uniqueId})">Завантажити</button>
    </div>
    <div class="card-body"><h5>${planetName}</h5>
    <p>${planetDescription}</p></div>
    </div>
  `;
  lastRow.appendChild(card);
  card.contentEditable = true;
}



function uploadFile(uniqueId) {
  const fileInput = document.getElementById(`myFileInput${uniqueId}`);
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.readAsDataURL(file);
  reader.onload = function () {
    const image = new Image();
    const myImg = document.getElementById(`myImg${uniqueId}`);
    const myCard = myImg.parentElement;

    image.onload = function () {
      hideButtons(uniqueId);
      const cardWidth = myCard.offsetWidth;
      const cardHeight = myCard.offsetHeight;
      const aspectRatio = 1; // встановлюємо аспектне співвідношення 1:1
      if (cardWidth < cardHeight) {
        image.style.width = cardWidth + "px";
        image.style.height = cardWidth / aspectRatio + "px";
      } else {
        image.style.width = cardHeight * aspectRatio + "px";
        image.style.height = cardHeight + "px";
      }
    };

    image.src = reader.result;
    myImg.appendChild(image);
  };
}



function hideButtons(uniqueId) {
  var inputButton = document.getElementById(`myFileInput${uniqueId}`);
  var uploadButton = document.getElementById(`myBtnId${uniqueId}`);

  if (inputButton.value) {
    inputButton.style.display = "none";
    uploadButton.style.display = "none";
  }
}