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

console.log(
"Classes Loaded"
);

}
catch(e){

console.log(
"Class Load Failed",
e
);

this.classes=[];

}

},

create(){

if(
window.PlayerEngine.player
)
return;

const name=
prompt(
"Character Name"
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

let text=
"Choose Class\n\n";

this.classes
.forEach(

(c,i)=>{

text+=
`${i+1}. ${c.name}\n`;

}

);

let choice=

parseInt(
prompt(text)
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

const cls=

this.classes[
choice-1
];

PlayerEngine.player={

name,

age,

gender,

class:

cls.id,

socialClass:

cls.name,

gold:

cls.gold,

honor:

cls.honor,

inventory:

[
...cls.items
],

spawn:

cls.spawn,

family:{

spouse:null,

children:[]

}

};

PlayerEngine.save();

alert(

`Welcome ${name}

Class:
${cls.name}

Spawn:
${cls.spawn}`

);

}

};
