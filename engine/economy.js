window.Economy={

prices:{},

items:[

"rice",
"wood",
"sword",
"horse",
"fish"

],

init(){

for(
let i
of
this.items
){

this.prices[
i
]=

10+

Math.floor(
Math.random()*
90
);

}

},

tick(){

for(
let i
in
this.prices
){

this.prices[
i
]+=

Math.floor(
Math.random()*7
)-3;

if(

this.prices[
i
]<1

)

this.prices[
i
]=1;

}

}

};
