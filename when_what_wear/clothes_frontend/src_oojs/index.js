document.addEventListener('DOMContentLoaded', function() {
  let controller = new Controller()
  document.querySelector('.add_outfit_button').addEventListener('click', controller.toggleForm.bind(controller))
  controller.fetchOutfits()

})
