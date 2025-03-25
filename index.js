function distanceFromHqInBlocks (blocks) {
    if (blocks > 42) {
        return blocks - 42;
    } else {
        return 42 - blocks;
    }
}
console.log(distanceFromHqInBlocks(43));

console.log(distanceFromHqInBlocks(50));

console.log(distanceFromHqInBlocks(34));

function distanceFromHqInFeet (blocks) {
    return distanceFromHqInBlocks(blocks)*264;
}
console.log(distanceFromHqInFeet(43));
console.log(distanceFromHqInFeet(50));
console.log(distanceFromHqInFeet(34));

function distanceTravelledInFeet (start, destination) {
    if (start < destination) {
        return (destination - start)*264;
    } else {
        return (start - destination)*264;
    }
}
console.log(distanceTravelledInFeet(43, 48));
console.log(distanceTravelledInFeet(50, 60));
console.log(distanceTravelledInFeet(34, 28));

function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000){
        return 0.02*(distance - 400);
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}