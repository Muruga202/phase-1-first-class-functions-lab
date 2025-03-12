// Code your solution in this file!
// 1. Return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
return drivers.slice(0, 2);
};

// 2. Return the last two drivers
const returnLastTwoDrivers = function(drivers) {
return drivers.slice(-2);
};

// 3. Array containing the two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. Higher-order function that creates a fare multiplier
const createFareMultiplier = function(multiplier) {
return function(fare) {
return fare * multiplier;
};
};

// 5. Function that doubles a fare
const fareDoubler = createFareMultiplier(2);

// 6. Function that triples a fare
const fareTripler = createFareMultiplier(3);

// 7. Function that selects drivers using one of the two driver functions
const selectDifferentDrivers = function(drivers, driverSelector) {
return driverSelector(drivers);
};