window.StorageEngine={

db:null,

async init(){

return new Promise(
(resolve,reject)=>{

const request=
indexedDB.open(
"MuromachiDB",
1
);

request.onupgradeneeded=
e=>{

const db=
e.target.result;

if(
!db.objectStoreNames
.contains(
"game"
)
){

db.createObjectStore(
"game"
);

}

};

request.onsuccess=
e=>{

this.db=
e.target.result;

console.log(
"IndexedDB Ready"
);

resolve();

};

request.onerror=
()=>{

reject(
"Storage failed"
);

};

});

},

save(
key,
value
){

return new Promise(
(resolve)=>{

const tx=
this.db
.transaction(
["game"],
"readwrite"
);

tx
.objectStore(
"game"
)
.put(
value,
key
);

tx.oncomplete=
resolve;

});

},

load(
key
){

return new Promise(
(resolve)=>{

const tx=
this.db
.transaction(
["game"]
);

const req=
tx
.objectStore(
"game"
)
.get(
key
);

req.onsuccess=
()=>resolve(
req.result
);

});

}

};
