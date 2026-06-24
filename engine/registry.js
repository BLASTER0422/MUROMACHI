window.Registry={

templates:{},
world:{},
events:{},

register(
type,
data
){

this[
type
]=
data;

console.log(
"Registered",
type
);

}

};
