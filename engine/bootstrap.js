(async()=>{

const scripts=[

"./engine/loader.js",
"./engine/registry.js",
"./engine/storage.js",
"./engine/simulation.js"

];

for(
const s
of scripts
){

await new Promise(

(done)=>{

const e=
document.createElement(
"script"
);

e.src=s;

e.onload=done;

document.body.append(
e);

}

);

}

await StorageEngine.init();

document.getElementById(
"status"
)
.innerHTML=

"✅ Godlike Engine Online";

})();
