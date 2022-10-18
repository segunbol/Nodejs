/*const namk = 'namd'

console.log(namk)

function add(a,b){
    var d = a+ b;
    console.log(d)
}

add(4,5)

var gadd = (a,b) => {
    var d = a + b;
    console.log(d)
}

gadd(5,5)

const score = (w) => {
    var value = "";
    switch (w){
        case 100:
        case 90:
        case 80:
            value = "a";
            break;
        case 70:
        case 60:
            value = "b";
            break;
        case 50:
            value = "c";
            break;
        case 40:
            value = "d";
        case 30:
            value = "e"
        case 20:
            value = "f"
    }
    return value
}
setTimeout(() => {
    console.log("E don happen");
}, 5000);
var t = 0;

const int = setInterval(() => {
    if (t>8){
        clearInterval(int)
    }
    console.log(`${t}`)
        t++    
})

console.log(__dirname)
console.log(__filename)
*/
const customers = [
    {"name":{
        "first name":"Samson",
        "last name":"Agboola"
    },
    "age": 34,
    "location": "Lagos",
    "book balance": 4500100.65,
    "available balance":4300000.32,
    "recent operations": [
        "debit",
        "debit",
        "debit"
    ],
    "account type": "current"

},
    
    {"name":{
        "first name":"James",
        "last name":"Williams"
    },
    "age": 44,
    "location": "Abuja",
    "book balance": 9500100.65,
    "available balance":9800000.32,
    "recent operations": [
        "debit",
        "credit",
        "debit"
    ],
    "account type": "savings"
}
    
]

var customer = {
    "name":"Salam James",
    "age": 44,
    "location": "Abuja", 
    "book balance": 9500100.65,
    "available balance":9800000.32,
    "recent operations": [
        "debit",
        "credit",
        "debit"
    ],
    "account type": "savings"
};

function multiplyAll(arr) {
    var product = 1 ;
    for (var i = 0; i < arr.length; i++ ) {
       for (var j = 0; j < arr[i].length; j++) {
        product *= arr[i][j]
       }  
    }
    return product

}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);

var myList = [];
var q = 10;

do {
    myList.push(q);
    q++;
    if (q === -11){break};
} while (q<10)

contacts = [
    {
        "firstName":"",
        "lastName":"",
        "number":"",
        "likes":["","",""]
    },
    {
        "firstName":"Boluwatife",
        "lastName":"Adeniyi",
        "number":"080494849494",
        "likes":["running","reading","football"]
    },
    {
        "firstName":"Simisola",
        "lastName":"Awe",
        "number":"08097979695",
        "likes":["cooking","sex","sleeping"]
    },
    {
        "firstName":"Noir",
        "lastName":"Kira",
        "number":"08965453533",
        "likes":["cowgirl","reverve","doggy"]
    }
]

const lookUpProfile = (names, prop) => {
    for (var i = 0; i < contacts.length; i++){
        if(contacts[i].firstName === names  ){
            return contacts[i][prop] || "Non Existing";
        }
    }
    return "Non existing";
}

var data = lookUpProfile("Simisol","lastName");

const convertToInteger = (str) => {
    return parseInt(str, 2)
};

console.log(convertToInteger(11111111111111111111));
/*1 = 1
10 = 2
11 = 3
100 = 4
101 = 5
110 = 6
111 = 7
1000 = 8
1001 = 9 
1010 = 10
1011 = 11
1100 = 12
1101 = 13
1110 = 14
1111 = 15
10000 = 16
10001 = 17
10010 = 18
10011 = 19
10100 = 20
10101 = 21
10110 = 22
10111 = 23
11000 = 24
11001 = 25
11010 = 26
11011 = 27
11100 = 28
11101 = 29
11110 = 30
11111 = 31
100000 = 32
100001 = 33
100010 = 34
100011 = 35
100100 = 36
100101 = 37
100110 = 38
100111 = 39
101000 = 40
101001 = 41
101010 = 42
101011 = 43
101100 = 44
101101 = 45
101110 = 46
101111 = 47
110000 = 48
110001 = 49
110010 = 50
110011 = 51
110100 = 52
110101 = 53
110110 = 54
110111 = 55
111000 = 56
111001 = 57
111010 = 58
111011 = 59
111100 = 60
111101 = 61
111110 = 62
111111 = 63
1000000 = 64*/