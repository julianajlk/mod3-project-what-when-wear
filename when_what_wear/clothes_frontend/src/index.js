// const outfitContainer = document.querySelector('#outfits')
// const weatherContainer = document.querySelector('#weathers')
const mainContainer = document.querySelector('#outfits-container')
const addBtn = document.querySelector('#new-outfit-btn')
const outfitForm = document.querySelector('.add-outfit')
let addOutfit = false

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addOutfit = !addOutfit
  if (addOutfit) {
    outfitForm.style.display = 'block'
    document.querySelector('.add-outfit').addEventListener('submit', handleCreate)
  } else {
    outfitForm.style.display = 'none'
  }
})

document.addEventListener("DOMContentLoaded", function() {
  fetchOutfits()
  fetchWeather()
  // document.querySelector('.add-outfit').addEventListener('submit', function() {
  //
  //   handleCreate(event)
  // })

})

function fetchOutfits() {
  fetch(`http://localhost:3000/users/1`)
  .then(response => response.json())
  .then(userData => {
    userData.outfits.forEach(outfit => {
      renderOutfit(outfit)
    })
    let user = document.querySelector('#user')
    user.innerText = `User: ${userData.name}`
  })
}

function renderOutfit(outfit) {
  //images
  let outfitContainer = document.createElement('div')
  outfitContainer.classList.add('polaroid')
  mainContainer.appendChild(outfitContainer)
  let img = document.createElement('img')
  img.src = `${outfit.image_url}`
  img.classList.add('outfit-img')
  outfitContainer.appendChild(img)
  //outfit info
  let infoDiv = document.createElement('div')
  infoDiv.classList.add('container-info')
  outfitContainer.appendChild(infoDiv)
  let infoTitle = document.createElement('h4')
  infoTitle.innerText = `${outfit.name}`
  infoDiv.appendChild(infoTitle)
  let info = document.createElement('p')
  info.innerText = `Category: ${outfit.category} | Description: ${outfit.description}`
  infoDiv.appendChild(info)
  let deleteButton = document.createElement('button')
  deleteButton.innerText = 'Remove from Closet'
  infoDiv.appendChild(deleteButton)
  deleteButton.addEventListener('click', deleteOutfit)
}

function handleCreate() {
  event.preventDefault()
  createPostFetch()
  event.target.reset()
}

function createPostFetch(){
  // let user = event.target.parentElement.previousElementSibling.querySelector('#user').innerText.split(': ')[1]
  let outfitName = document.getElementById('name-input').value
  let outfitCategory = document.getElementById('category-input').value
  let outfitDescription = document.getElementById('description-input').value
  let outfitImage = document.getElementById('image-input').value
  let outfitTemp = document.getElementById('addTempRange').value
  let outfitRainy = document.getElementById('rainy').checked
  let data = {name: outfitName, category: outfitCategory, description: outfitDescription, image_url: outfitImage, max_temperature: outfitTemp, "is_rainy": outfitRainy, user_id: 1}
  debugger
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
    debugger
    renderOutfit(outfit)
  })
}

function updateOutfit(id, category) {
  let data = {id: id, category: category}
  fetch(`http://localhost:3000/outfits/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
}

function deleteOutfit(id) {
  fetch(`http://localhost:3000/outfits/${id}`, {
    method: 'DELETE'
  })
  .then(response => response.json())
  .then(jsonData => {
    console.log(jsonData)
  })
}

function fetchWeather() {
  let ulElement = document.querySelector('#weathers')
  fetch(`http://localhost:3000/weathers`)
  .then(response => response.json())
  .then(weatherData => {
    weatherData.forEach(weather => {
      let li = document.createElement('li')
      li.innerText = `${weather.temperature_avg} ${weather.precipitation}`
      mainContainer.appendChild(li)
    })
  })
}
