class Controller {
  constructor() {
    this.addOutfit = false
  }


  toggleForm() {
    this.addOutfit = !this.addOutfit
    let outfitForm = document.querySelector('.add-outfit')
    if (this.addOutfit) {
      outfitForm.style.display = 'block'
      document.querySelector('.add-outfit').addEventListener('submit', this.createPostFetch)
      // document.querySelector('.add-outfit').addEventListener('submit', function(event) {
      //   event.preventDefault()
      //   this.handleCreate
      // })
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
        outfitObj.renderOutfit()
    })
    let user = document.querySelector('#user')
    user.innerText = `User: ${userData.name}`
  })
  }

  //this should be called every time a new outfit is created
  // handleCreate() {
  //   event.preventDefault()
  //   console.log(this)
  //   this.createPostFetch()
  //   event.target.reset()
  // }

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
      let outfitObj = new Outfit(outfit.id, outfit.name, outfit.description, outfit.category, outfit.image_url)
      outfitObj.renderOutfit()
    })
      event.target.reset()

    //bug TO FIX!!! when added outfit, cannot click to add another one without page reload
      event.target.style.display = 'none'

  }




}
