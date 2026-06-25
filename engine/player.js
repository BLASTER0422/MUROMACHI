```javascript
window.PlayerEngine = {
player:null,

async init(){

let save =
localStorage.getItem(
"player"
);

if(save){

this.player =
JSON.parse(save);

}

if(!this.player){

await CharacterEngine.init();

await CharacterEngine.create();

}

this.render();

},

async save(){

localStorage.setItem(
"player",
JSON.stringify(
this.player
)
);

},

render(){

if(!this.player){

return;

}

document.getElementById(
"player"
).innerHTML =

"<h2>🏯 Character</h2>"
+

"Name: "
+
this.player.name

+

"<br><br>"

+

"Age: "
+
this.player.age

+

"<br><br>"

+

"Gender: "
+
this.player.gender

+

"<br><br>"

+

"Social Class: "
+
this.player.socialClass

+

"<br><br>"

+

"Clan: "
+
this.player.clan

+

"<br><br>"

+

"Gold: "
+
this.player.gold;

}

};
```
