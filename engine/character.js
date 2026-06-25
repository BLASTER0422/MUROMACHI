window.CharacterEngine={

ready:false,

async init(){

this.ready=true;

},

create(){

if(
!window.PlayerEngine
)
return;

/*
Only skip if character already exists
*/

if(

PlayerEngine.player
&&
PlayerEngine.player.name
&&
PlayerEngine.player.name!==""

){

return;

}

let name=

prompt(
"Enter Character Name"
);

if(
!name
)
name="Traveler";

let age=

Number(

prompt(
"Enter Age")
||
16

);

let gender=

prompt(
"Enter Gender"
)
||
"male";

let clan=

FactionEngine
.pick();

PlayerEngine.create({

name,

age,

gender,

clan,

reputation:0,

gold:100,

family:{
parents:[],
spouse:null,
children:[]
},

army:[],

settlements:[]

});

alert(

"Welcome "+

name+

"\nClan: "+

clan

);

PlayerEngine.save();

}

};
