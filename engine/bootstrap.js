(async()=>{

const status=
document.getElementById(
"status"
);

const game=
document.getElementById(
"game"
);

status.innerHTML=
"Loading Engine...";

async function load(src){

return new Promise(

(resolve,reject)=>{

const s=
document.createElement(
"script"
);

s.src=src;

s.onload=resolve;

s.onerror=
()=>reject(src);

document.body.appendChild(
s

);

});

}

try{

await load("./engine/loader.js");

await load("./engine/registry.js");

await load("./engine/storage.js");

await load("./engine/simulation.js");

await load("./engine/world.js");

await load("./engine/player.js");

await load("./engine/family.js");

await load("./engine/faction.js");

await load("./engine/character.js");

await load("./engine/ui.js");

/*
START ENGINE
*/

if(window.StorageEngine)
await StorageEngine.init();

if(window.WorldEngine)
await WorldEngine.init();

if(window.PlayerEngine){

await PlayerEngine.init();

PlayerEngine.load();

}

if(window.FactionEngine)
await FactionEngine.init();

if(window.CharacterEngine){

await CharacterEngine.init();

CharacterEngine.create();

}

/*
RENDER WORLD
*/

let html=`

<div>

<h3>
Year:
${
WorldEngine.world.year
}
</h3>

<h3>
Name:
${
WorldEngine.world.name
}
</h3>

<h3>
Villages:
${
WorldEngine.world
.villages
.join(", ")
}
</h3>

</div>

`;

if(
PlayerEngine.player
){

html+=`

<hr>

<h2>

🏯 Character

</h2>

<p>

Name:
${PlayerEngine.player.name}

</p>

<p>

Age:
${PlayerEngine.player.age}

</p>

<p>

Gender:
${PlayerEngine.player.gender}

</p>

<p>

Clan:
${PlayerEngine.player.clan}

</p>

<p>

Gold:
${PlayerEngine.player.gold}

</p>

<p>

Spouse:
${
PlayerEngine.player.family?.spouse
||
"None"
}

</p>

<p>

Children:
${
(
PlayerEngine.player.family?.children
||
[]
).length
}

</p>

`;

}

game.innerHTML=
html;

status.innerHTML=

"✅ Godlike Engine Online";

}
catch(e){

status.innerHTML=
"❌ Failed";

console.log(e);

}

})();
