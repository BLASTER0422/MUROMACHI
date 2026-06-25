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

}
catch(e){

console.log(e);

this.classes=[];

}

},

async create(){

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
"Enter Age"
)
||
18
);

const gender=
prompt(
"Enter Gender"
)
||
"Unknown";

let selected=null;

let msg=
"Choose Class\n\n";

this.classes.forEach(
(c,i)=>{

msg+=
`${i+1}. ${c.name}\n`;

}

);

let choice=
parseInt(
prompt(msg)
);

if(
isNaN(choice)
||
choice<1
||
choice>
this.classes.length
)

choice=1;

selected=
this.classes[
choice-1
];

PlayerEngine.player={

name,

age,

gender,

class:

selected.id,

socialClass:

selected.name,

gold:

selected.gold,

honor:

selected.honor,

inventory:

selected.items,

spawn:

selected.spawn,

spouse:null,

children:[],

childrenCount:0,

clan:

assignClan(
selected.id
)

};

await PlayerEngine.save();

}

};

function assignClan(cls){

if(
cls==="commoner"
||
cls==="merchant"
||
cls==="monk"
){

return "None";

}

if(
cls==="ronin"
){

return "Former Retainer";

}

const clans=[

"Ashikaga",

"Takeda",

"Hojo",

"Date",

"Tokugawa"

];

return clans[
Math.floor(
Math.random()
*
clans.length
)

];

}
