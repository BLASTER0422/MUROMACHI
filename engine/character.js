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

if(
PlayerEngine.player
&&
PlayerEngine.player.name
)

return;

let name=

prompt(
"Character Name"
)

||

"Traveler";

let age=

Number(

prompt(
"Age"
)

||

16

);

let gender=

prompt(
"Gender"
)

||

"male";

let clan=

FactionEngine
.pick();

PlayerEngine
.create({

name,

age,

gender,

clan,

reputation:0,

gold:100

});

alert(

"Welcome "+
name+

"\nClan: "+

clan

);

}

};
