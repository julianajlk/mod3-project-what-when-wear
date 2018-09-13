class Controller {
  constructor() {
    this.addOutfit = false
  }


  toggleForm() {
    this.addOutfit = !this.addOutfit
    let outfitForm = document.querySelector('.add-outfit')
    if (this.addOutfit) {
      outfitForm.style.display = 'block'
      document.querySelector('.add-outfit').addEventListener('submit', this.createPostFetch.bind(this))

    } else {
      outfitForm.style.display = 'none'
    }
  }

  //this should be called once on load
  fetchOutfits() {
    fetch(`http://localhost:3000/users/1`)
    .then(response => response.json())
    .then(userData => {
      userData.outfits.forEach(outfit => {
        let outfitObj = new Outfit(outfit.id, outfit.name, outfit.description, outfit.category, outfit.image_url, outfit.min_temperature, outfit.max_temperature, outfit.is_rainy)

        //what should not be updated in the outfits container when rendering edited info after patch
        let mainContainer = document.querySelector('#outfits-container')
        let outfitContainer = document.createElement('div')
        outfitContainer.classList.add('polaroid')
        outfitContainer.id = `outfit-${outfit.id}`
        mainContainer.appendChild(outfitContainer)

        //need to pass in outfitContainer as the argument in order for the function renderOutfit at Outfit to know what it is (since it will not be defined there)
        outfitObj.renderOutfit(outfitContainer)

      })
      let user = document.querySelector('#user')
      user.innerText = `User: ${userData.name}`
    })
  }

//creating the outfit for the first time, the outfit doesn't exist yet, so put in controller, not related to one specific outfit, related to the app as a whole
  createPostFetch() {
    event.preventDefault()
    let outfitName = document.getElementById('name-input').value
    let outfitCategory = document.getElementById('category-input').value
    let outfitDescription = document.getElementById('description-input').value
    let outfitImage = document.getElementById('image-input').value
    let outfitMinTemp = document.querySelector('.min-temp').value
    let outfitMaxTemp = document.querySelector('.max-temp').value
    let outfitRainy = document.getElementById('rainy').checked
    let data = {name: outfitName, category: outfitCategory, description: outfitDescription, image_url: outfitImage, min_temperature: outfitMinTemp, max_temperature: outfitMaxTemp, "is_rainy": outfitRainy, user_id: 1}
    fetch(`http://localhost:3000/outfits`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(outfit => {
      let outfitObj = new Outfit(outfit.id, outfit.name, outfit.description, outfit.category, outfit.image_url, outfit.min_temperature, outfit.max_temperature, outfit.is_rainy)

      let mainContainer = document.querySelector('#outfits-container')
      let outfitContainer = document.createElement('div')
      outfitContainer.classList.add('polaroid')
      outfitContainer.id = `outfit-${outfit.id}`
      mainContainer.appendChild(outfitContainer)
      
      outfitObj.renderOutfit(outfitContainer)
    })
      event.target.reset()
      this.toggleForm()
  }

}
