# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Workcenter.destroy_all

User.create(name: "Gavrilchik", role: "Admin", password: "Rhfcrjnthrf1980!", email: "gerogy.gavrilchik@gmail.com")

Workcenter.create(group: "O3", code: "302", average_setup: 67 ,average_speed: 11500)
Workcenter.create(group: "O3", code: "304", average_setup: 74 ,average_speed: 8100)
Workcenter.create(group: "O3", code: "305", average_setup: 66 ,average_speed: 10100)
Workcenter.create(group: "O3", code: "306", average_setup: 65 ,average_speed: 11500)
Workcenter.create(group: "O3", code: "307", average_setup: 84 ,average_speed: 10200)
Workcenter.create(group: "O3", code: "308", average_setup: 74 ,average_speed: 12000)
Workcenter.create(group: "FLX", code: "325", average_setup: 521 ,average_speed: 8400)
Workcenter.create(group: "Dc3", code: "501", average_setup: 111 ,average_speed: 5700)
Workcenter.create(group: "Dc3", code: "502", average_setup: 108 ,average_speed: 4500)
Workcenter.create(group: "Dc3", code: "503", average_setup: 112 ,average_speed: 5200)
Workcenter.create(group: "Dc3", code: "504", average_setup: 136 ,average_speed: 5400)
Workcenter.create(group: "Hf", code: "505", average_setup: 133 ,average_speed: 4600)
Workcenter.create(group: "Hf", code: "506", average_setup: 137 ,average_speed: 4700)
Workcenter.create(group: "Dc3", code: "507", average_setup: 96 ,average_speed: 5000)
Workcenter.create(group: "Dc3", code: "520", average_setup: 108 ,average_speed: 4000)
Workcenter.create(group: "Dc3", code: "533", average_setup: 99 ,average_speed: 6000)
Workcenter.create(group: "Dc3", code: "534", average_setup: 122 ,average_speed: 5700)
Workcenter.create(group: "Hf", code: "535", average_setup: 176 ,average_speed: 4000)
Workcenter.create(group: "Dc3", code: "536", average_setup: 88 ,average_speed: 8100)
Workcenter.create(group: "F", code: "609", average_setup: 2880 ,average_speed: 416.666666666667)
Workcenter.create(group: "F", code: "610", average_setup: 2880 ,average_speed: 1416.66666666667)
Workcenter.create(group: "Wp", code: "615", average_setup: 270 ,average_speed: 12400)
Workcenter.create(group: "G", code: "619", average_setup: 349 ,average_speed: 18100)
Workcenter.create(group: "Sorting", code: "620", average_setup: 60 ,average_speed: 25000)
Workcenter.create(group: "G", code: "625", average_setup: 300 ,average_speed: 14800)
Workcenter.create(group: "G", code: "626", average_setup: 207 ,average_speed: 29300)
Workcenter.create(group: "G", code: "627", average_setup: 296 ,average_speed: 54200)
Workcenter.create(group: "G", code: "630", average_setup: 284 ,average_speed: 19600)
Workcenter.create(group: "G", code: "644", average_setup: 355 ,average_speed: 73800)
Workcenter.create(group: "Tf", code: "675", average_setup: 15 ,average_speed: 4166.66666666667)
Workcenter.create(group: "Tf", code: "685", average_setup: 360 ,average_speed: 10000)
Workcenter.create(group: "Ma", code: "618", average_setup: 60 ,average_speed: 25000)