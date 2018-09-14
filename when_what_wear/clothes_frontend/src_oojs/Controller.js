class Controller {
  constructor() {
    this.addOutfit = false
    this.editOutfit = false
    document.querySelector('.add-outfit').addEventListener('submit', this.createPostFetch.bind(this))
    document.querySelector('.add-outfit').addEventListener('submit', this.toggleAddForm.bind(this))
    document.querySelector('.edit-outfit').addEventListener('submit', this.editPatchFetch.bind(this))
    //added here and not at the end of the editPatchFetch function because toggle was being called twice (hence, form was disapearing but showing up again). Be careful with dependencies and functions inside other functions with event listeners.
    document.querySelector('.edit-outfit').addEventListener('submit', this.toggleEditForm.bind(this))
  }


  toggleAddForm() {
    this.addOutfit = !this.addOutfit
    let outfitForm = document.querySelector('.add-outfit')
    if (this.addOutfit) {
      outfitForm.style.display = 'block'
      // document.querySelector('.add-outfit').addEventListener('submit', this.createPostFetch.bind(this))

    } else {
      outfitForm.style.display = 'none'
    }
  }


    toggleEditForm() {
      this.editOutfit = !this.editOutfit
      let editForm = document.querySelector('.edit-outfit')
      if (this.editOutfit) {
        editForm.style.display = 'block'

      } else {
        editForm.style.display = 'none'
      }
    }
    //
    // //TO BE TESTED
    //   toggleEditForm(outfit) {
    //     this.editOutfit = !this.editOutfit
    //     let editForm = document.querySelector('.edit-outfit')
    //     if (this.editOutfit) {
    //       editForm.style.display = 'block'
    //       document.querySelector('.edit-outfit').addEventListener('submit', outfit.editPatchFetch.bind(outfit))
    //
    //     } else {
    //       editForm.style.display = 'none'
    //     }
    //   }



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
      //show user in navbar
      // let user = document.querySelector('#user')
      // user.innerText = `User: ${userData.name}`
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
      // this.toggleAddForm()

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
    let outfitId = event.target.id.split('-')[2]
    fetch(`http://localhost:3000/outfits/${outfitId}`, {
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


  //DATES
  fetchDates() {
    fetch(`http://localhost:3000/date_periods`)
    .then(response => response.json())
    .then(dateData => {
      dateData.forEach(date => {
        let dateObj = new DatePeriod(date.id, date.date, date.weather_id)
        dateObj.renderDatesToDropwdown(date)
      })
    })
  }


}
