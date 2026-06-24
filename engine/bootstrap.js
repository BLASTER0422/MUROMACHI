(async()=>{

status.innerHTML=
"Loading Engine";

function load(src){

return new Promise(

(r,j)=>{

let s=

document
.createElement(
"script"
);

s.src=
src;

s.onload=
r;

s.onerror=
j;

document
.body
.appendChild(
s

);

}

);

}

try{

await load(
"./engine/loader.js"
);

await load(
"./engine/registry.js"
);

await load(
"./engine/storage.js"
);

await load(
"./engine/simulation.js"
);

await load(
"./engine/world.js"
);

await load(
"./engine/player.js"
);

await load(
"./engine/family.js"
);

await load(
"./engine/faction.js"
);

await StorageEngine
.init();

await WorldEngine
.init();

await PlayerEngine
.init();

await FactionEngine
.init();

status.innerHTML=

"✅ Godlike Engine Online";

}
catch(e){

status.innerHTML=

"❌ "+e;

console.log(
e
);

}

})();
