import "./styles/styles.css";

// Object Types Challenge
// Based on what we discussed we need to make up our Property Objects and array,
// can you create that array, making sure to assign the correct Types?

import { showReviewTotal, populateUser } from "./utils";
import { Permissions, LoyaltyUser } from "./enums";
const propertyContainer = document.querySelector(".properties");
const footer = document.querySelector(".footer")!;

// Reviews
const reviews: {
  name: string;
  stars: number;
  loyaltyUser: LoyaltyUser;
  date: string;
}[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: LoyaltyUser.BRONZE_USER,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: LoyaltyUser.SILVER_USER,
    date: "27-03-2021",
  },
];

// User
const you = {
  firstName: "Bobby",
  lastName: "Brown",
  permissions: Permissions.ADMIN,
  isReturning: true,
  age: 35,
  stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};
// const you: {
//   firstName: string;
//   lastName: string;
//   isReturning: boolean;
//   age: number;
//   stayedAt: string[];
// } = {
//   firstName: "Bobby",
//   lastName: "Brown",
//   isReturning: true,
//   age: 35,
//   stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
// };

//Properties

const properties: {
  alt: string;
  image: string;
  title: string;
  price: number;
  location: {
    firstLine: string;
    city: string;
    code: number;
    country: string;
  };
  contact: string;
  isAvailable: boolean;
}[] = [
  {
    alt: "https://unsplash.com/photos/a-tall-building-with-a-clock-on-the-top-of-it-7fPm68VRwKQ?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
    image: "poland-property.jpg",
    title: "Cozy Apartment in Lillafüred",
    price: 50,
    location: {
      firstLine: "123 Main Street",
      city: "Lillafüred",
      code: 1011,
      country: "Hungary",
    },
    contact: "john.doe@example.com",
    isAvailable: true,
  },
  {
    alt: "https://unsplash.com/photos/multicolored-concrete-houses-h95mT1m9Zzs?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
    image: "london-property.jpg",
    title: "Lovely flat in London",
    price: 100,
    location: {
      firstLine: "16 Main Street",
      city: "London",
      code: 12345,
      country: "Great Britain",
    },
    contact: "jane.smith@example.com",
    isAvailable: true,
  },
  {
    alt: "https://unsplash.com/photos/multicolored-concrete-houses-h95mT1m9Zzs?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
    image: "../colombia-property.jpg",
    title: "Mountain Retreat in Switzerland",
    price: 120,
    location: {
      firstLine: "789 Alpine Way",
      city: "Zurich",
      code: 54321,
      country: "Switzerland",
    },
    contact: "michael.jones@example.com",
    isAvailable: true,
  },
];
const propertyCards = properties.map((property) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `<h3>${property.title}</h3>`;
  const image = document.createElement("img");
  image.setAttribute("src", property.image);
  card.appendChild(image);
  return card;
});
let currentLocation: [string, string, number] = ["London", "11:35", 17];
footer.innerHTML =
  currentLocation[0] +
  " " +
  currentLocation[1] +
  " " +
  currentLocation[2] +
  "°";
propertyContainer?.append(...propertyCards);
// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

populateUser(you.isReturning, you.firstName);
