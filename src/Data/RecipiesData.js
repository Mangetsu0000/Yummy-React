import { v4 as uuidv4 } from "uuid";
const RecipiesData = [
  {
    id: parseInt(uuidv4()),
    name: "Pizza Pepperoni",
    cookTime: "10-20",
    ingredients: ["tomatoes", "cheese", "toppings"],
    origins: ["italy"],
    imageUrl: "../Assets/images/dishes/food-3.jpg",
    rating: 4.2,
    steps: ["just cook it lol!"],
  },
  {
    id: parseInt(uuidv4()),
    name: "Meatball",
    ingredients: ["meat"],
    cookTime: "20-30",
    origins: ["persia", "middle east", "china"],
    imageUrl: "../Assets/images/dishes/food-2.jpg",
    rating: 5,
    steps: ["just cook it lol!"],
  },
  {
    id: parseInt(uuidv4()),
    name: "Hamburger",
    ingredients: ["meat", "cheese", "letuce", "sauces"],
    cookTime: "10-15",
    origins: ["germany", "us"],
    imageUrl: "../Assets/images/dishes/food-3.jpg",
    rating: 5,
    steps: ["just cook it lol!"],
  },
  {
    id: parseInt(uuidv4()),
    name: "Fried Potatoes",
    ingredients: ["potatoes"],
    cookTime: "15-20",
    origins: ["belgium", "france"],
    imageUrl: "../Assets/images/dishes/food-4.jpg",
    rating: 4.5,
    steps: ["just cook it lol!"],
  },
];

export default RecipiesData;
