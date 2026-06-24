window.FactionEngine={

data:null,

async init(){

let r=

await fetch(

"./templates/factions.json"

);

this.data=

await r
.json();

},

pick(){

return this.data
.clans[

Math.floor(

Math.random()
*
this.data
.clans
.length

)

];

}

};
