window.Sim={

tick:0,

world:{

price:100,

season:"spring"

},

advance(){

this.tick++;

this.world.price+=
Math.floor(
Math.random()*10
)-5;

if(
this.world.price<1
)
this.world.price=1;

console.log(
this.world
);

}

};
