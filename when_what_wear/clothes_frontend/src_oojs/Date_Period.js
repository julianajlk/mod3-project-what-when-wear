class DatePeriod {
  constructor(id, date, weather_id) {
    this.id = id
    this.date = date
    this.weather_id = weather_id
  }

  fetchDates() {
    fetch(`http://localhost:3000/date_periods`)
    .then(response => response.json())
    .then(dateData => {
      addDatesToDropwdown(dateData)})
    }
  }

  addDatesToDropwdown() {

  }
