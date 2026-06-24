window.QuestEngine={

quests:[],

verbs:[
"Deliver",
"Escort",
"Hunt",
"Build",
"Investigate",
"Protect",
"Find",
"Negotiate"
],

targets:[
"merchant",
"lord",
"village",
"bandit",
"temple",
"farmer",
"samurai"
],

places:[
"forest",
"mountains",
"town",
"market",
"road"
],

generate(){

const q={

id:
crypto.randomUUID(),

title:

this.pick(
this.verbs
)

+" "+

this.pick(
this.targets
)

+

" at "+

this.pick(
this.places
),

status:
"active",

reward:{

bronze:
Math.floor(
Math.random()*500
),

exp:
Math.floor(
Math.random()*50
)

}

};

this.quests.push(
q
);

return q;

},

pick(a){

return a[
Math.floor(
Math.random()*
a.length
)
];

}

};
