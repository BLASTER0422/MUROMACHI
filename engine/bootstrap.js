(async()=>{

document.getElementById(
"status"
)
.innerHTML=
"Loading Modules...";

async function load(src){

return new Promise(
(resolve,reject)=>{

const s=
document.createElement(
"script"
);

s.src=src;

s.onload=
resolve;

s.onerror=
reject;

document.body.append(
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

await StorageEngine.init();

await WorldEngine.init();

await NPCEngine.init();

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

console.log(
e
);

}

})();
