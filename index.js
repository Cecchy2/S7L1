class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location;
  }

  isOlder(userAge) {
    return this.age > userAge.age;
  }
}

const Dario = new User("Dario", "Cecchinato", 42, "Palermo");
const Gaia = new User("Gaia", "Cecchinato", 2, "Palermo");

console.log(Dario.isOlder(Gaia));

if (Dario.isOlder(Gaia)) {
  console.log("Dario e' piu' vecchio di Gaia");
} else {
  console.log("Gaia e' piu' vecchia di Dario");
}

//-------------------------Esercizio 2---------------
class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  isSameOwner(petToCompare) {
    return this.ownerName === petToCompare.ownerName;
  }
}

const pets = [];

const form = document.querySelector("form");

const petList = document.getElementById("petList");

form.onsubmit = function (event) {
  event.preventDefault();

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);

  for (let i = 0; i < pets.length; i++) {
    if (newPet.isSameOwner(pets[i])) {
      console.log("true");
    }
  }
  pets.push(newPet);

  console.log(pets);
  form.reset();

  const li = document.createElement("li");
  li.textContent = `Nome: ${newPet.petName}, Specie: ${newPet.species}, Razza: ${newPet.breed}, Proprietario: ${newPet.ownerName}`;
  petList.appendChild(li);
};
