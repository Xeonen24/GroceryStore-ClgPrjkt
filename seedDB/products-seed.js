const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const Product = require("../models/product");
const Category = require("../models/category");
const mongoose = require("mongoose");
const faker = require("faker");
const connectDB = require("./../config/db");
connectDB();

async function seedDB() {
  faker.seed(0);

  //----------------------Backpacks
  const fruits_nm = [
    "Banana",
    "Apple",
    "Strawberry",
  ];
  const fruits_imgs = [
    "https://user-images.githubusercontent.com/108137169/186621537-8cf77fb6-2e35-41a6-b936-b694bff88388.png",
    "https://user-images.githubusercontent.com/108137169/186621548-3d52780e-28da-45c4-99e8-8e935035a028.png",
    "https://user-images.githubusercontent.com/108137169/186621541-7cecd975-a20f-421d-a35d-41064d150ada.png",
  ];
  const dairy_nm=[
    "Milk",
    "Cheese",
  ];
  const dairy_imgs = [
    "https://user-images.githubusercontent.com/108137169/186621550-b562b86e-9da2-4dfb-8f84-7373dc385c9a.png",
    "https://user-images.githubusercontent.com/108137169/186621554-c3bde1c1-b1db-40ae-ae5d-eff8f29b302a.png",
  ];
  const vege_nm = [
    "Onions",
  ];
  const vege_imgs = [
    "https://www.freepnglogos.com/uploads/onion-png/picture-download-onion-icons-and-png-backgrounds-0.png",
  ];
  const meat_nm = [
    "Chicken",
  ];
  const meat_imgs = [
    "https://user-images.githubusercontent.com/108137169/189109390-d34c1145-22f9-4f8c-a7c8-2895f6ecf502.png",
  ];

  async function seedProducts(titlesArr, imgsArr, categStr) {
    try {
      const categ = await Category.findOne({ title: categStr });
      for (let i = 0; i < titlesArr.length; i++) {
        let prod = new Product({
          productCode: faker.helpers.replaceSymbolWithNumber("##-####"),
          title: titlesArr[i],
          imagePath: imgsArr[i],
          description: faker.lorem.paragraph(),
          price: faker.random.number({ min: 50, max: 250 }),
          manufacturer: faker.company.companyName(0),
          available: true,
          category: categ._id,
          createdAt:Date.now(),
        });
        await prod.save();
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async function closeDB() {
    console.log("CLOSING CONNECTION");
    await mongoose.disconnect();
  }

  await seedProducts(fruits_nm, fruits_imgs, "Fruits");
  await seedProducts(dairy_nm, dairy_imgs, "Dairy");
  await seedProducts(vege_nm, vege_imgs, "Vegetables");
  await seedProducts(meat_nm, meat_imgs, "Meat");
  await closeDB();
}

seedDB();
