window.PlayerEngine={

player:null,

async init(){

try{

let r=
await fetch(
"./templates/player.json"
);

this.player=
await r.json();

console.log(
"Player Ready"
);

}
catch(e){

console.log(
e
);

}

},

create(data){

this.player={

...this.player,

...data,

id:
crypto.randomUUID(),

birthYear:
WorldEngine.world.year,

alive:true

};

localStorage.setItem(

"player",

JSON.stringify(
this.player

);

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

let p=

localStorage
.getItem(
"player"
);

if(p)

this.player=

JSON.parse(
p
);

}

};
