window.PlayerEngine={

player:null,

async init(){

try{

const saved=
localStorage.getItem(
"player"
);

if(saved){

this.player=
JSON.parse(
saved
);

return;

}

const r=
await fetch(
"./templates/player.json"
);

this.player=
await r.json();

}
catch(e){

console.log(e);

}

},

create(data){

this.player={

...this.player,

...data,

id:
crypto.randomUUID(),

alive:true

};

this.save();

return this.player;

},

save(){

localStorage.setItem(

"player",

JSON.stringify(
this.player
)

);

},

load(){

const p=
localStorage.getItem(
"player"
);

if(p){

this.player=
JSON.parse(
p
);

}

}

};
