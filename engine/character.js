window.CharacterEngine={

classes:[],

async init(){

try{

const r=
await fetch(
"./json/classes/starting_classes.json"
);

const data=
await r.json();

this.classes=
data.classes
||
[];

console.log(
"Classes Loaded"
);

}
catch(e){

console.log(
e
);

this.classes=[];

}

},

async create(){

if(
!window.PlayerEngine
)
return;

if(
PlayerEngine.player
&&
PlayerEngine.player.name
)
return;

const name=

prompt(
"Enter Name"
)

||
"Traveler";

const age=

parseInt(

prompt(
"Enter Age")

||

18

);

const gender=

prompt(
"Enter Gender"
)

||

"Unknown";

let selected=
null;

if(
this.classes.length
){

let msg=

"Choose Class\n\n";

this.classes
.forEach(

(c,i)=>{

msg+=
`${i+1}. ${c.name}\n`;

}

);

let pick=

parseInt(
prompt(msg)
);

if(
isNaN(pick)
)
pick=1;

selected=

this.classes[
pick-1
]

||

this.classes[0];

}

else{

selected={

id:"commoner",

name:"Commoner",

gold:5,

honor:0,

spawn:"village",

items:[]

};

}

PlayerEngine.player={

name,

age,

gender,

clan:

pickClan(),

gold:

selected.gold,

class:

selected.id,

socialClass:

selected.name,

honor:

selected.honor,

inventory:

selected.items,

spawn:

selected.spawn,

spouse:null,

children:[]

};

await PlayerEngine.save();

}

};

function pickClan(){

const clans=[

"Ashikaga",

"Takeda",

"Date",

"Hojo",

"Tokugawa",

"None"

];

return clans[
Math.floor(
Math.random()
*
clans.length
)

];

}
