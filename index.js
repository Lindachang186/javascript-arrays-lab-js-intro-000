const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
   kittens.push("Ralph")
}

function destructivelyPrependKitten(name){
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop()
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift()
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return[name, ...kittens]
}

function removeLastKitten(){
  var kitten = kittens.slice(0, kittens.length - 1);
  return kitten
}

function removeFirstKitten() {
  var kitten = kittens.slice(1);
  return kitten
}
