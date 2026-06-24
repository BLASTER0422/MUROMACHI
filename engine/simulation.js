window.Simulation={

worldTime:0,

start(){

setInterval(()=>{

this.worldTime++;

console.log(
"Tick",
this.worldTime
);

},1000);

}

};

Simulation.start();
