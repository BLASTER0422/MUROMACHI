window.Registry={

data:{},

add(id,obj){

this.data[id]=obj;

},

get(id){

return this.data[id];

},

all(){

return this.data;

}

};
