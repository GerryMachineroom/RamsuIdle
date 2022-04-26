var ramsus = 0
var automaticRamsusPerSecond = 0
var ramsuFamilies = 0
function startOfGame() {
  document.getElementById('ramsuFamily').style.display = 'none'
  document.getElementById('ramsuFamily2').style.display = 'none'
}
startOfGame()
function amountOfRamsus() {
  document.getElementById('ramsu').innerHTML = 'Ramsus: ' + ramsus
}
amountOfRamsus()
function spawnRamsus(ramsusSpawned) {
  ramsus += ramsusSpawned
  document.getElementById('ramsu').innerHTML = 'Ramsus: ' + ramsus
}
function familyCheck() {
  if (ramsus >= 10) {
    document.getElementById('ramsuFamily').style.display = 'block'
    document.getElementById('ramsuFamily2').style.display = 'block'
  }
}
setInterval(familyCheck, 500)
function amountOfRamsuFamilies() {
  document.getElementById('ramsuFamily').innerHTML = 'Ramsu Families: ' + ramsuFamilies
}
amountOfRamsuFamilies()
function spawnRamsuFamily() {
  ramsuFamilies++
  document.getElementById('ramsuFamily').innerHTML = 'Ramsu Families: ' + ramsuFamilies
  automaticRamsusPerSecond++
}
function secondPassed() {
  spawnRamsus(automaticRamsusPerSecond)
}
setInterval(secondPassed, 1000)