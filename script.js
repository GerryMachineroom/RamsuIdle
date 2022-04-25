var ramsus = 0
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
function spawnARamsu() {
  document.getElementById('ramsu').innerHTML = 'Ramsus: ' + ramsus++
}
spawnARamsu()
function familyCheck() {
  if (ramsus >= 10) {
    document.getElementById('ramsuFamily').styles.display = 'block'
    document.getElementById('ramsuFamily2').style.display = 'block'
  }
}
setInterval(familyCheck, 500)
function spawnRamsuFamily() {
  document.getElementById('ramsuFamily').innerHTML = 'Ramsu Families: ' + ramsuFamilies
}