window.Loader={

async json(path){

let r=
await fetch(
path
);

if(
!r.ok
)
throw Error(
path
);

return r.json();

}

};
