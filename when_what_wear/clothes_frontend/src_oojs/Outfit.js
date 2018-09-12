//Outfit class should include properties or methods related to a single instance of an Outfit object
class Outfit {
  constructor(id, name, description, category, image_url, min_temperature, max_temperature, is_rainy) {
    this.id = id
    this.name = name
    this.description = description
    this.category = category
    this.image_url = image_url
    this.min_temperature = min_temperature
    this.max_temperature = max_temperature
    this.is_rainy = is_rainy
  }

//every Outfit obj instantiated should be able to render itself on the page
  renderOutfit() {
    let mainContainer = document.querySelector('#outfits-container')
    //images
    let outfitContainer = document.createElement('div')
    outfitContainer.classList.add('polaroid')
    outfitContainer.id = `outfit-${this.id}`
    mainContainer.appendChild(outfitContainer)
    let img = document.createElement('img')
    img.src = `${this.image_url}`
    img.classList.add('outfit-img')
    outfitContainer.appendChild(img)
    //outfit info
    let infoDiv = document.createElement('div')
    infoDiv.classList.add('container-info')
    infoDiv.id = `info-${this.id}`
    outfitContainer.appendChild(infoDiv)
    let infoTitle = document.createElement('h4')
    infoTitle.innerText = `${this.name}`
    infoDiv.appendChild(infoTitle)
    let info = document.createElement('p')
    info.innerText = `Category: ${this.category} | Description: ${this.description}`
    infoDiv.appendChild(info)
    let info2 = document.createElement('p')
    info2.innerText = `Min. Temperature: ${this.min_temperature}℉ | Max. Temperature: ${this.max_temperature}℉`
    infoDiv.appendChild(info2)
    let infoRainy = document.createElement('p')
      if (this.is_rainy === true) {
        infoRainy.innerText = `Can be worn in rainy weather: Yes`
      } else {
        infoRainy.innerText = `Can be worn in rainy weather: No`
      }
    infoDiv.appendChild(infoRainy)
    let editButton = document.createElement('button')
    editButton.innerText = 'Edit Item'
    editButton.classList.add('edit-button')
    infoDiv.appendChild(editButton)
    editButton.addEventListener('click', this.editClickHandler.bind(this))
    let deleteButton = document.createElement('button')
    deleteButton.innerText = 'Remove from Closet'
    deleteButton.classList.add('delete-button')
    infoDiv.appendChild(deleteButton)
    //first this is the Outfit object, need bind to take this to deleteOutfit
    deleteButton.addEventListener('click', this.deleteOutfit.bind(this))
  }

  editClickHandler() {
    debugger
    // let outfitName = event.target.parentElement.querySelector('h4').innerText
    // let outfitCategory = event.target.parentElement.querySelector('p').innerText.split('|')[0].split(':')[1]
    // let outfitDescription = event.target.parentElement.querySelector('p').innerText.split('|')[1].split(':')[1]
    // let outfitImg = event.target.parentElement.parentElement.querySelector('img').src
    // let outfitMinTemp =
    // let outfitMaxTemp =
    // let outfitRainy =
    // let outfitId = event.target.parentElement.id.split('-')[1]
    // document.querySelector().value = outfitName
    // document.querySelector().value = outfitCategory
    // document.querySelector().value = outfitDescription
    // document.querySelector().value = outfitImg


  }

  editPatchFetch() {

  }

  deleteOutfit() {
    fetch(`http://localhost:3000/outfits/${this.id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(outfit => {
      //remove selected outfit
      let div = document.getElementById(`outfit-${this.id}`)
      div.remove()
    })
  }

}
