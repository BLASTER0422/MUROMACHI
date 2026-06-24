window.NPCEngine={

template:null,

async init(){

try{

let r=
await fetch(
"./templates/npc.json"
);

this.template=
await r.json();

console.log(
"NPC Template Loaded"
);

}
catch(e){

console.log(
e
);

}

},

random(arr){

if(
!arr||
!arr.length
)
return "Unknown";

return arr[
Math.floor(
Math.random()*
arr.length
)
];

},

generate(){

return{

id:
crypto
.randomUUID(),

name:
this.random(
this.template.namePool
),

surname:
this.random(
this.template.surnames
),

age:
this.random(
this.template.ages
),

gender:
this.random(
this.template.genders
),

trait:
this.random(
this.template.traits
),

skill:
this.random(
this.template.skills
),

profession:
this.random(
this.template.professions
),

memory:[],

relations:{},

dialogues:[]

};

}

};
