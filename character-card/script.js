const character = {
      name: "Herbert",
      class: "Fungi",
      level: 5,
      health: 100,
      image: 'mushroom-character.png',
      attacked() {
        if (this.health >= 20) {
          this.health -= 20;
        } else {
            alert('Character Died');
        }
      },
      levelUp() {
        this.level += 1;
        this.health += 20;
      }
    };

function assignCharacter(character) {
  const charName = document.querySelector(".name");
  const charClass = document.querySelector("#class");
  const charLevel = document.querySelector("#level");
  const charHealth = document.querySelector("#health");
  const charImage = document.querySelector(".image");
  charName.textContent = character.name;
  charClass.textContent = character.class;
  charLevel.textContent = character.level;
  charHealth.textContent = character.health;
  charImage.src = character.image;
}

assignCharacter(character);

document.querySelector("#attacked").addEventListener("click", () => {
  character.attacked();
  assignCharacter(character);
});

document.querySelector("#levelup").addEventListener("click", () => {
  character.levelUp();
  assignCharacter(character);
});