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
data.classes;

}
catch(e){

console.log(e);

this.classes=[];

}

},

async create(){

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

let selected=
this.classes[0];

if(this.classes.length){

let text=
"Choose Class\n\n";

this.classes.forEach(

(c,i)=>{

text+=
(i+1)
+
". "
+
c.name
+
"\n";

}

);

const choice=
parseInt(
prompt(text)
);

if(
choice
&&
this.classes[
choice-1
]
){

selected=
this.classes[
choice-1
];

}

}

PlayerEngine.player={

name:name,

age:age,

gender:gender,

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
chooseClan(
selected.id
)

};

await PlayerEngine.save();

}

};

function chooseClan(type){

if(

type==="commoner"

||

type==="merchant"

||

type==="monk"

)

return "None";

if(
type==="ronin"
)

return "Ronin";

const clans=[

"Ashikaga",

"Hojo",

"Takeda",

"Date"

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
