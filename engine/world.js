window.WorldEngine={

world:null,

async init(){

this.world={

day:1,
year:1336,

season:"Spring",

weather:"Clear",

population:0,

locations:[],

establishments:[],

factions:[],

events:[],

economy:{},

memory:[]

};

await this.load();

},

async load(){

try{

let r=
await fetch(
"./world/world.json"
);

if(r.ok){

let data=
await r.json();

Object.assign(
this.world,
data
);

}

}catch(e){

console.log(
"No world file."
);

}

},

save(){

localStorage.setItem(

"world",

JSON.stringify(
this.world
)

);

},

nextDay(){

this.world.day++;

Simulation.tick();

this.save();

}

};
