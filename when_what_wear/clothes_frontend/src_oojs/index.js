//make controller global so that it can be called inside Outfit.js
const controller = new Controller()

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.add-outfit-button').addEventListener('click', controller.toggleAddForm.bind(controller))
  controller.fetchOutfits()


})
