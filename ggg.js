addPlanetBtn.addEventListener("click", function() {
 
    const newPlanetCard = document.createElement("div");
    newPlanetCard.classList.add("planet-card");
    
    newPlanetCard.innerHTML = `
      <div class="newImg">
      <input type="file" id="myFileInput" >
      <button onclick="uploadFile()">Завантажити</button>
      </div>
      <h5>Назва планети</h5>
      <p>Опис планети</p>
    `;
  
    
    newPlanetCard.contentEditable = true;
  
    const section = document.querySelector('.col')
    section.append(newPlanetCard)
  
  });