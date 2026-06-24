window.StorageEngine={

db:null,

async init(){

return new Promise(

(resolve)=>{

const r=
indexedDB.open(
"MUROMACHI",
1
);

r.onupgradeneeded=
()=>{

r.result.createObjectStore(
"save"
);

};

r.onsuccess=
()=>{

this.db=
r.result;

resolve();

};

}

);

},

save(k,v){

const tx=
this.db.transaction(
["save"],
"readwrite"
);

tx.objectStore(
"save"
).put(v,k);

},

load(k){

return new Promise(

(resolve)=>{

const tx=
this.db.transaction(
["save"]
);

const r=
tx.objectStore(
"save"
)
.get(k);

r.onsuccess=
()=>resolve(
r.result
);

}

);

}

};
