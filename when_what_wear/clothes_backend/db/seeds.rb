# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(name: "Nancy", city: "DC", email: "nancy@email.com")

Outfit.create(name: "White Jeans", description: "White J.Brand Skinny Jeans", category: "Bottoms", image_url: "https://i.s-madewell.com/is/image/madewell/H5893_WT8315_ld?$MW_480x610$", min_temperature: 40, max_temperature: 95, is_rainy: false, user_id: 1)

Outfit.create(name: "Denim Shorts", description: "Denim Cut Off Shorts", category: "Bottoms", image_url: "https://i.s-madewell.com/is/image/madewell/J0526_DM2177_ld?$MW_1007x1280$", min_temperature: 75, max_temperature: 110, is_rainy: false, user_id: 1)

Outfit.create(name: "Chambray BD", description: "Chambray Button Down", category: "Tops", image_url: "https://i.s-madewell.com/is/image/madewell/H4605_DM1969_ld?$MW_480x610$", min_temperature: 32, max_temperature: 100, is_rainy: true, user_id: 1)

Outfit.create(name: "Striped Tee", description: "Striped Ciao Tee", category: "Tops", image_url: "https://i.s-madewell.com/is/image/madewell/J9107_KA4036_ld?$MW_320x407$", min_temperature: 65, max_temperature: 110, is_rainy: true, user_id: 1)

Outfit.create(name: "Parka", description: "Green Parka with Hood", category: "Outerwear", image_url: "https://i.s-madewell.com/is/image/madewell/K1400_EG9870_ld?$MW_320x407$", min_temperature: 32, max_temperature: 55, is_rainy: true, user_id: 1)

Outfit.create(name: "Chelsea Boots", description: "Black Leather Ankle Boots", category: "Shoes", image_url: "https://i.s-madewell.com/is/image/madewell/J8295_BK5229_ld?$MW_1007x1280$", min_temperature: 32, max_temperature: 70, is_rainy: true, user_id: 1)

Outfit.create(name: "Loafer Mule", description: "Pink Velvet Loafer Mule", category: "Shoes", image_url: "https://i.s-madewell.com/is/image/madewell/J8431_PK5439_ld?$MW_1007x1280$", min_temperature: 70, max_temperature: 90, is_rainy: false,  user_id: 1)

Outfit.create(name: "Summer Sandals", description: "Nude Multistrap Sandal", category: "Shoes", image_url: "https://i.s-madewell.com/is/image/madewell/G2006_NA6633_ld?$MW_1007x1280$", min_temperature: 70, max_temperature: 110, is_rainy: false, user_id: 1)

Weather.create(temperature_avg: 100, precipitation: 10)
Weather.create(temperature_avg: 85, precipitation: 55)
Weather.create(temperature_avg: 75, precipitation: 80)
Weather.create(temperature_avg: 70, precipitation: 20)
Weather.create(temperature_avg: 65, precipitation: 70)
Weather.create(temperature_avg: 50, precipitation: 20)
Weather.create(temperature_avg: 45, precipitation: 65)
Weather.create(temperature_avg: 32, precipitation: 0)

DatePeriod.create(date: "09/10/2018", weather_id: 1)
DatePeriod.create(date: "11/25/2018", weather_id: 2)
DatePeriod.create(date: "12/30/2018", weather_id: 3)
DatePeriod.create(date: "02/15/2019", weather_id: 4)
DatePeriod.create(date: "04/28/2019", weather_id: 5)

puts "seeded"
