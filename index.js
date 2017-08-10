const app = "I don't do much."

function bumpCounter(){
  let counter = 0;
  function addBump(){
    return counter += 1
  };
  function getBumps(){
    return counter
  };
  return {
    addBump,
    getBumps
  };
}

function createAnimal(animalType){
  return deadlyDevice => {
    return {animalType: animalType, deadlyDevice: deadlyDevice}
  }
}

var sharkCreator = createAnimal('Shark')
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
var sharkWithFrickinCannon = sharkCreator('Cannon')
