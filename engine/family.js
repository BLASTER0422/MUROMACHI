window.FamilyEngine={

createFamily(){

return{

parents:[],

spouse:null,

children:[],

lineage:[]

};

},

marry(name){

if(
!PlayerEngine.player
)

return;

PlayerEngine
.player
.family
.spouse=

name;

PlayerEngine
.save();

},

child(name){

PlayerEngine
.player
.family
.children
.push(

{

name,

born:
WorldEngine
.world
.year

}

);

PlayerEngine
.save();

}

};
