const person = {
  name: "Samuel",
  age: 42,
  hobbies: ["Playing CODM", "Talking to People", "Studying"],
  menu: {
    breakfast: "tea",
    brunch: "pancakes",
    lunch: "rice and turkey",
    dinner: "bread & egg",
  },
  food: function () {
    return `We're having ${this.menu.dinner} for dinner`;
  },
};

console.log(person.food());
console.log(Object.keys(person));
console.log(Object.values(person));
