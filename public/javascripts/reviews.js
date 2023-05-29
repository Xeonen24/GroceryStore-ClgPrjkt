const reviews = [
  {
    id: 1,
    name: "susan smith",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "My favorite grocery store in town. Their produce top notch and fresh whenever I order them!"
  },
  {
    id: 2,
    name: "anna johnson",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "This has made my life so easy, i can make purchase to my home even when i m not around. I dont have to go to a grocery shop anymore with a big list and a big bag on my bike."
  },
  {
    id: 3,
    name: "peter jones",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "My parents have grown old and given all of our busy schedule it becomes really difficult to go out for grocery shopping. The discount is offers is really good, the delivery fee is minimal"
  },
  {
    id: 4,
    name: "bill anderson",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "They refund if you report quality issues or missing items. They schedule another day delivery of missing items too. Delivery executives are very humble too. "
  }
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", () => {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// show prev person
prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
