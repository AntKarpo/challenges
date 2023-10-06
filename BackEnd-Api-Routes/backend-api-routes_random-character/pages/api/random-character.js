import Chance from "chance";

const chance = newChance();

const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    age: chance.age(),
    street: chance.street()
  };

export default function handler(request, response) {
    response.status(200).json(character);
  }