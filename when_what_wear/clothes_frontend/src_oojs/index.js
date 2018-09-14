//make controller global so that it can be called inside Outfit.js
const controller = new Controller()

document.addEventListener('DOMContentLoaded', function() {
  // let controller = new Controller()
  // document.querySelector('.add_outfit_button').addEventListener('click', controller.toggleAddForm.bind(controller))
  document.querySelector('.add-outfit-button').addEventListener('click', controller.toggleAddForm.bind(controller))
  controller.fetchOutfits()
  controller.fetchDates()



})
