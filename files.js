const fs = require('fs');

// Asynchronous approach to reading and writing files

fs.readFile('./docs/blog1.txt', (err, data) =>{
    if (err){
        console.log(err);
    }
    console.log(data.toString());
});

console.log('last line');

// writing files

fs.writeFile('./docs/blog1.txt','Aye Capptain',{flag:'a'}, (err, data) =>{
    if (err){
        console.log(err);
    }
    console.log(data)
});


//directories

//deleting files



