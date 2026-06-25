```javascript
window.CharacterEngine = {

classes:[],

async init(){

try{

const r =
await fetch(
"./json/classes/starting_classes.json"
);

const data =
await r.json();

this.classes =
data.classes;

}
catch(e){

console.log(e);

this.classes=[];

}

},

async create(){

let selected = {

id:"commoner",

name:"Commoner",

gold:5,

honor:0,

spawn:"village",

items:[]

};

if(this.classes.length){

let msg =
"Choose Class\n\n";

for(
let i=0;
i<this.classes.length;
i++
){

msg +=
(
i+1
)
+
". "
+
this.classes[i].name
+
"\n";

}

const chosen =
parseInt(
prompt(msg)
);

if(
chosen
&&
this.classes[
chosen-1
]
){

selected =
this.classes[
chosen-1
];

}

}

const name =
prompt(
"Name"
)
||
"Traveler";

const age =
parseInt(
prompt(
"Age"
)
||
18
);

const gender =
prompt(
"Gender"
)
||
"Unknown";

PlayerEngine.player={

name:name,

age:age,

gender:gender,

socialClass:selected.name,

class:selected.id,

gold:selected.gold,

honor:selected.honor,

inventory:selected.items,

spawn:selected.spawn,

spouse:null,

children:[],

clan:getClan(
selected.id
)

};

await PlayerEngine.save();

}

};

function getClan(cls){

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

return "Ronin";

}

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
