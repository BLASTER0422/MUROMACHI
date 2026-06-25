window.UIEngine={

render(){

if(
!window.PlayerEngine
)
return;

if(
!PlayerEngine.player
)
return;

const game=

document
.getElementById(
"game"
);

game.innerHTML=

`

<h2>

🏯 Character

</h2>

<p>

Name:
${PlayerEngine.player.name}

</p>

<p>

Age:
${PlayerEngine.player.age}

</p>

<p>

Gender:
${PlayerEngine.player.gender}

</p>

<p>

Clan:
${PlayerEngine.player.clan}

</p>

<p>

Gold:
${PlayerEngine.player.gold}

</p>

<p>

Reputation:
${PlayerEngine.player.reputation}

</p>

<p>

Spouse:
${

PlayerEngine
.player
.family
?.spouse

||

"None"

}

</p>

<p>

Children:
${

(
PlayerEngine
.player
.family
?.children
||
[]
)
.length

}

</p>

`;

}

};
