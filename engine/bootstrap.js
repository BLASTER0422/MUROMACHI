(async()=>{

document
.getElementById(
"status"
)
.innerHTML=
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
()=>
reject(
"Failed to load "+
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
"./engine/npc.js"
);

if(
window.StorageEngine
){

await StorageEngine
.init();

}

if(
window.WorldEngine
){

await WorldEngine
.init();

}

if(
window.NPCEngine
){

await NPCEngine
.init();

}

document
.getElementById(
"status"
)
.innerHTML=

"✅ Godlike Engine Online";

}
catch(e){

document
.getElementById(
"status"
)
.innerHTML=

"❌ "+
e;

console
.error(
e
);

}

})();
