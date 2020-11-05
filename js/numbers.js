let nbrs = [
    106,    573,    204,    804,    482,
    457,    769,    889,    860,    399,
    599,    824,    346,    851,    450,
    590,    520,    321,    341,    619,
    505,    769,    532,    764,    101
]

const maxnumber = () => {
    var tbody = document.getElementById ("max")
    max= 0;
    let len = [nbrs].length;
    for (let i=0; i<len; i++) {
        if  (max > nbrs [i]) {
            max = nbrs [i];
            console.log(max);
        }
    }
    return max;
}
const minnumber = () => {
    var nummin = document.getElementById ("min")
    
    let len = [nbrs].length;
    for (let i=0; i<len; i++) {
        if  (numin < nbrs [i]) {
            nummin = nbrs [i];
        }
    }
    return nummin;
}
