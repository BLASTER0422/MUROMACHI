```javascript
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

const name=
prompt(
"Name"
)
||
"Traveler";

const age=
parseInt(
prompt(
"Age"
)
||
18
);

const gender=
prompt(
"Gender"
)
||
"Unknown";

let selected=
this.classes[0];

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

});

let pick=
parseInt(
prompt(msg)
);

if(
!isNaN(pick)
&&
this.classes[pick-1]
)

selected=
this.classes[pick-1];

}

PlayerEngine.player={

name,

age,

gender,

socialClass:
selected.name,

class:
selected.id,

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

clan:
getClan(
selected.id
)

};

await PlayerEngine
.save();

}

};

function getClan(cls){

if(
cls==="commoner"
||
cls==="merchant"
||
cls==="monk"
)
return "None";

if(
cls==="ronin"
)
return "Ronin";

const clans=[

"Ashikaga",

"Hojo",

"Date",

"Takeda"

];

return clans[
Math.floor(
Math.random()
*
clans.length
)
];

}
```
