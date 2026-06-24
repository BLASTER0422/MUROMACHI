(async()=>{

document
.getElementById(
"status"
)
.innerHTML=
"Loading Engine";

async function load(path){

let r=
await fetch(path);

if(
!r.ok
)
throw Error();

return r.json();

}

window.Engine={};

Engine.config=
await load(
"./json/config/engine.json"
);

document
.getElementById(
"status"
)
.innerHTML=

"Engine Ready";

console.log(
Engine
);

})();
