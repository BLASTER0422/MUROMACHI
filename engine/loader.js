window.Loader={

async json(path){

try{

const r=
await fetch(path);

if(!r.ok)
return null;

return await r.json();

}

catch{

return null;

}

},

async many(list){

const out={};

for(const p of list){

out[p]=
await this.json(p);

}

return out;

}

};
