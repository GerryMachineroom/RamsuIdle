var ramsus = 0
var automaticRamsusPerSecond = 0
var ramsuFamilies = 0
var ramsuRooms = 0
var ramsuFarms = 0
var costPerRamsuFamily = 5
//start of game
function startOfGame() {
  document.getElementById('ramsuFamily').style.display = 'none'
  document.getElementById('ramsuFamily2').style.display = 'none'
  document.getElementById('ramsuRoom').style.display = 'none'
  document.getElementById('ramsuRoom2').style.display = 'none'
  document.getElementById('ramsuFarm').style.display = 'none'
  document.getElementById('ramsuFarm2').style.display = 'none'
}
startOfGame()
//---------------------------------------------------------------------------------------
//ramsus are declared, printing 0 ramsus to the screen with HTML
function amountOfRamsus() {
  document.getElementById('ramsu').innerHTML = 'Ramsus: ' + ramsus
}
amountOfRamsus()
//declares a function that spawns ramsus when the button 'Spawn Ramsu Family' is pressed automatically, depending on how much ramsu families you have
//the parameter 'ramsusSpawned' is assigned to the variable automaticRamsusPerSecond
function spawnRamsus(ramsusSpawned) {
  ramsus += ramsusSpawned
  document.getElementById('ramsu').innerHTML = 'Ramsus: ' + ramsus
}
//---------------------------------------------------------------------------------------
//constantly checks whether you reached the goal for ramsu families
function familyCheck() {
  if (ramsus >= 10) {
    document.getElementById('ramsuFamily').style.display = 'block'
    document.getElementById('ramsuFamily2').style.display = 'block'
  }
}
setInterval(familyCheck, 500)
//simply prints 0 ramsu families to the screen as soon as you unlock them
function amountOfRamsuFamilies() {
  document.getElementById('ramsuFamily').innerHTML = 'Ramsu Families: ' + ramsuFamilies
}
amountOfRamsuFamilies()
//Increases automaticRamsusPerSecond by 1, therefore ramsus automatically go up by one each time the button 'Spawn Ramsu Family' is clicked.
//Also prints the new value of ramsuFamilies onto the screen
function spawnRamsuFamily() {
  if (ramsus < costPerRamsuFamily) {
    confirm('You no have enoughs ramsus')
  } else {
    ramsuFamilies++
    document.getElementById('ramsuFamily').innerHTML = 'Ramsu Families: ' + ramsuFamilies
    ramsus -= 5
    automaticRamsusPerSecond++
  }
}
//----------------------------------------------------------------------------------------
//constantly checks whether you reached the goal for ramsu rooms
function roomCheck() {
  if (ramsuFamilies >= 100) {
    document.getElementById('ramsuRoom').style.display = 'block'
    document.getElementById('ramsuRoom2').style.display = 'block'
  }
}
setInterval(roomCheck, 500)
function amountOfRamsuRooms() {
  document.getElementById('ramsuRoom').innerHTML = 'Ramsu Rooms: ' + ramsuRooms
}
amountOfRamsuRooms()
function spawnRamsuRoom() {
  ramsuRooms++
  document.getElementById('ramsuRoom').innerHTML = 'Ramsu Rooms: ' + ramsuRooms
  automaticRamsusPerSecond += 5
}
//----------------------------------------------------------------------------------------
function farmCheck() {
  if (ramsuRooms >= 2500) {
    document.getElementById('ramsuFarm').style.display = 'block'
    document.getElementById('ramsuFarm2').style.display = 'block'
  }
}
setInterval(farmCheck, 500)
function amountOfRamsuFarms() {
  document.getElementById('ramsuFarm').innerHTML = 'Ramsu Farms: ' + ramsuFarms
}
amountOfRamsuFarms()
function spawnRamsuFarm() {
  ramsuFarms++
  document.getElementById('ramsuFarm').innerHTML = 'Ramsu Farms: ' + ramsuFarms
  automaticRamsusPerSecond += 20
}
//----------------------------------------------------------------------------------------
function secondPassed() {
  spawnRamsus(automaticRamsusPerSecond)
}
setInterval(secondPassed, 1000)