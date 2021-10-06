// Code your solution here
function findMatching(arr, name){
    return arr.filter(e => e.toUpperCase() === name.toUpperCase());
}

function fuzzyMatch(arr, search){
    return arr.filter(e => e.charAt(0) === search.charAt(0));
}

function matchName(arr, search){
    return arr.filter(e => e.name === search);
}