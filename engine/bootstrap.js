(async()=>{

const status=
document
.getElementById(
"status"
);

status.innerHTML=
"Loading Engine...";

async function load(src){

return new Promise(

(resolve,reject)=>{

const s=
document
.createElement(
"script"
);

s.src=
src;

s.onload=
resolve;

s.onerror=
()=>reject(
src
);

document
.body
.appendChild(
s
);

});

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

if(
window.StorageEngine
)

await StorageEngine
.init();

if(
window.WorldEngine
)

await WorldEngine
.init();

if(
window.PlayerEngine
)

await PlayerEngine
.init();

if(
window.FactionEngine
)

await FactionEngine
.init();

status.innerHTML=

"✅ Godlike Engine Online";

}
catch(e){

status.innerHTML=

"❌ Failed";

console.log(
e
);

}

})();
