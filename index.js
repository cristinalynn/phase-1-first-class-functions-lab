const returnFirstTwoDrivers = function(drivers) {
    console.log("drivers", drivers)
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers) {
    console.log('driver', drivers)
    return drivers.slice(-2)
}

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

 function createFareMultiplier(int) {
    return function(fare) {
         return int * fare
    }
 }

 const fareDoubler = createFareMultiplier(2)

 const fareTripler = createFareMultiplier(3)

 function selectDifferentDrivers(drivers, cb){
    return cb(drivers)
 }