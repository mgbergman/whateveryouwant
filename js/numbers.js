let nbrs = [
    106,    573,    204,    804,    482,
    457,    769,    889,    860,    399,
    599,    824,    346,    851,    450,
    590,    520,    321,    341,    619,
    505,    769,    532,    764,    101
]

const maxnumber = () => {
    let high = 0;
    for (let n of nbrs) {
        if(n > high) 
            high=n;  
    }
    document.getElementById("high").value = high;
};
