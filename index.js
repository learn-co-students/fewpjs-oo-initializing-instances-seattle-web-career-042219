class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
}

let bigFluffyDog1 = new Dog("Buzz", "greatPyrenees");
let bigFluffyDog2 = new Dog("Woody", "labrador");

class Breakfast {
  constructor(food, drink){
    this.food = food;
    this.drink = drink;
  }
}

class Lunch {
  constructor(salad, soup, drink){
    this.soup = soup;
    this.salad = salad;
    this.drink = drink;
  }
}

class Dinner {
  constructor(salad, soup, entree, dessert){
    this.soup = soup;
    this.salad = salad;
    this.entree = entree;
    this._dessert = dessert;
  }
}
