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
  renderOutfit(outfitContainer) {
    // let mainContainer = document.querySelector('#outfits-container')
    // //images
    // let outfitContainer = document.createElement('div')
    // outfitContainer.classList.add('polaroid')
    // outfitContainer.id = `outfit-${this.id}`
    // mainContainer.appendChild(outfitContainer)

    //clear out polaroid when rendering updated (otherwise it would append new render onto old polaroid)
    outfitContainer.innerHTML = ''

    let img = document.createElement('img')
    img.src = `${this.image_url}`
    img.classList.add('outfit-img')
    outfitContainer.appendChild(img)
    //outfit info
    let infoDiv = document.createElement('div')
    infoDiv.classList.add('container-info')
    infoDiv.id = `info-${this.id}`
    outfitContainer.appendChild(infoDiv)
    let infoName = document.createElement('h4')
    infoName.innerText = `${this.name}`
    infoDiv.appendChild(infoName)
    let info = document.createElement('p')
    info.innerText = `Category: ${this.category} | Description: ${this.description}`
    infoDiv.appendChild(info)
    let infoTemp = document.createElement('p')
    infoTemp.id = 'info-temperature'
    infoTemp.innerText = `Min. Temperature: ${this.min_temperature}F | Max. Temperature: ${this.max_temperature}F`
    infoDiv.appendChild(infoTemp)
    let infoRainy = document.createElement('p')
    infoRainy.id = 'info-rainy'
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
    //first 'this' is the Outfit object, need bind to take 'this' to deleteOutfit
    deleteButton.addEventListener('click', this.deleteOutfit.bind(this))
  }


  editClickHandler() {
    let outfitName = event.target.parentElement.querySelector('h4').innerText
    let outfitCategory = event.target.parentElement.querySelector('p').innerText.split('|')[0].split(': ')[1]
    let outfitDescription = event.target.parentElement.querySelector('p').innerText.split('|')[1].split(': ')[1]
    let outfitImg = event.target.parentElement.parentElement.querySelector('img').src
    let outfitMinTemp = parseInt(event.target.parentElement.querySelector('#info-temperature').innerText.split('|')[0].split(':')[1].split('F')[0])
    let outfitMaxTemp = parseInt(event.target.parentElement.querySelector('#info-temperature').innerText.split('|')[1].split(':')[1].split('F')[0])
    let outfitRainy = event.target.parentElement.querySelector('#info-rainy').innerText.split(':')[1]
    if (outfitRainy === " No") {
      outfitRainy = false
    } else {
      outfitRainy = true
    }
    let outfitId = event.target.parentElement.id.split('-')[1]

    document.querySelector('#name-edit').value = outfitName
    document.querySelector('#category-edit').value = outfitCategory
    document.querySelector('#description-edit').value = outfitDescription
    document.querySelector('#image-edit').value = outfitImg
    document.querySelector('#editTempValueMin').innerText = outfitMinTemp
    document.querySelector('#editTempValueMax').innerText = outfitMaxTemp
    document.querySelector('#rainy-edit').checked = outfitRainy

    this.submitFormData()
  }

  submitFormData() {
    //add event listener to form, not to submit button
    let submitEdit = document.querySelector('.edit-outfit')
    submitEdit.addEventListener('submit', this.editPatchFetch.bind(this))
  }


  editPatchFetch(event) {
    let outfitName = document.querySelector('#name-edit').value
    let outfitCategory = document.querySelector('#category-edit').value
    let outfitDescription = document.querySelector('#description-edit').value
    let outfitImg = document.querySelector('#image-edit').value
    let outfitMinTemp = document.querySelector('#editTempValueMin').innerText
    let outfitMaxTemp = document.querySelector('#editTempValueMax').innerText
    let outfitRainy = document.querySelector('#rainy-edit').checked
    let data = {name: outfitName, category: outfitCategory, description: outfitDescription, image_url: outfitImg, min_temperature: outfitMinTemp, max_temperature: outfitMaxTemp, is_rainy: outfitRainy}
    fetch(`http://localhost:3000/outfits/${this.id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(response => response.json())
    .then(outfit => {
      let outfitObj = new Outfit(outfit.id, outfit.name, outfit.description, outfit.category, outfit.image_url, outfit.min_temperature, outfit.max_temperature, outfit.is_rainy)

      //can have querySelectors as arguments!
      outfitObj.renderOutfit(document.querySelector(`#outfit-${outfit.id}`))
      //document.querySelector(`#info-${jsonData.id}`).querySelector('h4').innerText = jsonData.name

    })
    event.preventDefault()
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
