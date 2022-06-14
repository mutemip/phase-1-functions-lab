// Code your solution in this file!
function distanceFromHqInBlocks(bNumber) {
    if (bNumber > 42){
        return bNumber - 42;
    } else{
        return 42 - bNumber;
    }
}
function distanceFromHqInFeet(bNumber) {
    return distanceFromHqInBlocks(bNumber) * 264;
}

function distanceTravelledInFeet(pointA, pointB) {
    if (pointA > pointB){
        return (pointA - pointB) * 264;
    } else {
        return (pointB - pointA) * 264;
    }
}


function calculatesFarePrice (pointA, pointB) {
    const distance = distanceTravelledInFeet(pointA, pointB);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }