
exports.min = function min (array) {
    if (array == undefined){
        return 0;
    }
    if (array.length == 0){
        return 0;
    }
    array.sort(function (a, b) {
        return a - b;
    });
    return array[0];
}

exports.max = function max (array) {
    if (array == undefined){
        return 0;
    }
    if (array.length == 0){
        return 0;
    }
    array.sort(function (a, b) {
        return a - b;
    });
    return array[array.length -1];
}

exports.avg = function avg (array) {
    if (array == undefined){
        return 0;
    }
    if (array.length == 0){
        return 0;
    }
    return array.reduce((x, y) => x + y, 0)/array.length;
}

// console.log(max([2,-24,13,-11,16,-12,-16,24,13,-38,19,-16,19,3,2,32,0,-10,-19,-27]));
// console.log(max([]));
// console.log(max());
