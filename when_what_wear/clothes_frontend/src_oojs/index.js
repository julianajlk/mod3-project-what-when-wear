document.addEventListener('DOMContentLoaded', function() {
  let controller = new Controller()
  document.querySelector('.add_outfit_button').addEventListener('click', controller.toggleAddForm.bind(controller))
  controller.fetchOutfits()
  

})
