const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const totalBatteries = [4, 5, 3, 4, 4, 6, 5].reduce((accumulator, currentBatteries) => {
    return accumulator + currentBatteries;
    }, 0);


