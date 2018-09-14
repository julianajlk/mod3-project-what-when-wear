class DatePeriod {
  constructor(id, date, weather_id) {
    this.id = id
    this.date = date
    this.weather_id = weather_id
  }

  renderDatesToDropwdown(date) {
    let dateDropdown = document.querySelector('.date-options')
    let option = document.createElement('option')
    option.id = `option-${date.id}`
    option.innerText = `${date.date}`
    dateDropdown.appendChild(option)
  }
}
