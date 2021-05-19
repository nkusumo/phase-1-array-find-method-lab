
const wins = function(array) {
    return array.result === "W";
}

function superbowlWin(array) {
    if (array.find(wins)) {
        return array.find(wins).year;
    } else {
        return undefined;
    }
}