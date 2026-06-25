window.CharacterEngine = {

classes:[],

async init(){

try{

let r =
await fetch(
"./json/classes/starting_classes.json"
);

let data =
await r.json();

this.classes =
data.classes;

}
catch(e){

this.classes=[];

}

},

async create(){

let c = {

id:"commoner",

name:"Commoner",

gold:5

};

if(
this.classes.length
){

let text =
"Choose Class\n";

for(
let i=0;
i<this.classes.length;
i++
){

text +=
"\n"
+
(
i+1
)
+
" "
+
this.classes[i].name;

}

let pick =
parseInt(
prompt(text)
);

if(
pick
&&
this.classes[
pick-1
]
){

c =
this.classes[
pick-1
];

}

}

PlayerEngine.player={

name:
prompt("Name")
||
"Traveler",

age:
parseInt(
prompt("Age")
||
18
),

gender:
prompt(
"Gender"
)
||
"Unknown",

socialClass:
c.name,

gold:
c.gold,

clan:
(
c.id==="samurai"
?
"Ashikaga"
:
"None"
)

};

await PlayerEngine.save();

}

};
```
