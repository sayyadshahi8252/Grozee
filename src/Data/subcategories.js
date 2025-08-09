import apple from '../assets/apple.png';
import mango from '../assets/mango.png';
import grapes from '../assets/grapes.png';
import onion from '../assets/onion.png';
import banana from '../assets/banana.png'
import blueberry from '../assets/R.png'
import pineapple from '../assets/pineapple.png'
import guvava from '../assets/guvava.png'
import dragonfruit from '../assets/dragonfruit.png'
import strawberry from '../assets/strawberry.png'
import pear from '../assets/pear.png'
import kiwi from '../assets/kiwi.png'
import watermelon from '../assets/watermelon.png'
import papaya from '../assets/papaya.png'
import potato from '../assets/potato.png'
import tomato from '../assets/tomato.png'
import cucumber from '../assets/cucumber.png'
import lettuce from '../assets/lettuce.png'
import bellpepper from '../assets/bell pepper.png'
import spinach from '../assets/spinach.png'
import broccoli from '../assets/broccoli.png'
import cauliflower from '../assets/cauliflower.png'
import ladyfinger from '../assets/ladyfinger.png'
import chili from '../assets/chili.png'
import carrot from '../assets/carrot.png'

import milk from '../assets/milk.png'
import chese from '../assets//chesee.png'
import yogurt from '../assets/yogurt.png'
import butter from '../assets/butter.png'
import creamchesse from '../assets/creamcheese.png'
import sourcream from '../assets/sourcream.png'
import icecream from '../assets/icecream.png'
import bread from '../assets/bread.png'
import croisant from '../assets/croissant.png'
import muffin from '../assets/muffin.png'
import bagel from '../assets/bagel.png'
import donut from '../assets/donut.png'
import ciabatta from '../assets/ciabatta.png'
import baguette from '../assets/baguette.png'
import focaccia from '../assets/focaccia.png'
import juice from '../assets/juice.png'
import tea from '../assets/tea.png'
import coffee from '../assets/coffee.png'
import lemonade from '../assets/lemonade.png'
import espresso from '../assets/espresso.png'


const subcategories = [
  { id: 1, categoryId: 1, title: "apple", image: apple, price: "200", discount: "50" },
  { id: 2, categoryId: 1, title: "mango", image: mango, price: "180", discount: "40" },
  { id: 3, categoryId: 1, title: "grapes", image: grapes, price: "220", discount: "60" },
  { id: 4, categoryId: 1, title: "banana", image: banana, price: "150", discount: "30" },
  { id: 5, categoryId: 2, title: "onion", image: onion, price: "120", discount: "25" },
  { id: 6, categoryId: 2, title: "carrot", image: carrot, price: "130", discount: "20" },
  { id: 7, categoryId: 2, title: "potato", image: potato, price: "110", discount: "15" },
  { id: 8, categoryId: 3, title: "milk", image: milk, price: "90", discount: "10" },
  { id: 9, categoryId: 3, title: "cheese", image: chese, price: "250", discount: "70" },
  { id: 10, categoryId: 4, title: "bread", image: bread, price: "60", discount: "10" },
  { id: 11, categoryId: 4, title: "croissant", image: croisant, price: "75", discount: "15" },
  { id: 12, categoryId: 4, title: "muffin", image: muffin, price: "80", discount: "20" },
  { id: 13, categoryId: 5, title: "juice", image: juice, price: "110", discount: "30" },
  { id: 14, categoryId: 5, title: "tea", image: tea, price: "100", discount: "25" },
  { id: 15, categoryId: 5, title: "coffee", image: coffee, price: "150", discount: "50" },
  { id: 16, categoryId: 1, title: "Guvava", image: guvava, price: "210", discount: "55" },
  { id: 17, categoryId: 1, title: "Dragonfruit", image: dragonfruit, price: "185", discount: "45" },
  { id: 18, categoryId: 2, title: "Chili", image: chili, price: "135", discount: "25" },
  { id: 19, categoryId: 3, title: "Ice Cream", image: icecream, price: "95", discount: "15" },
  { id: 20, categoryId: 4, title: "bread", image: bread, price: "65", discount: "12" },

  // 30 more items:
  { id: 21, categoryId: 1, title: "pineapple", image: pineapple, price: "180", discount: "40" },
  { id: 22, categoryId: 1, title: "strawberry", image: strawberry, price: "220", discount: "50" },
  { id: 23, categoryId: 2, title: "tomato", image: tomato, price: "130", discount: "20" },
  { id: 24, categoryId: 2, title: "cucumber", image: cucumber, price: "115", discount: "15" },
  { id: 25, categoryId: 2, title: "lettuce", image: lettuce, price: "140", discount: "30" },
  { id: 26, categoryId: 3, title: "yogurt", image: yogurt, price: "85", discount: "10" },
  { id: 27, categoryId: 3, title: "butter", image: butter, price: "260", discount: "70" },
  { id: 28, categoryId: 4, title: "bagel", image: bagel, price: "70", discount: "18" },
  { id: 29, categoryId: 4, title: "donut", image: donut, price: "90", discount: "20" },
  { id: 30, categoryId: 5, title: "lemonade", image: lemonade, price: "105", discount: "25" },
  { id: 31, categoryId: 5, title: "espresso", image: espresso, price: "140", discount: "45" },
  { id: 32, categoryId: 1, title: "blueberry", image: blueberry, price: "230", discount: "55" },
  { id: 33, categoryId: 1, title: "pear", image: pear, price: "190", discount: "40" },
  { id: 34, categoryId: 2, title: "bell pepper", image: bellpepper, price: "120", discount: "25" },
  { id: 35, categoryId: 2, title: "spinach", image: spinach, price: "135", discount: "20" },
  { id: 36, categoryId: 3, title: "cream cheese", image: creamchesse, price: "240", discount: "60" },
  { id: 37, categoryId: 4, title: "croissant", image: grapes, price: "85", discount: "18" },
  { id: 38, categoryId: 4, title: "ciabatta", image: ciabatta, price: "80", discount: "15" },
  // { id: 39, categoryId: 5, title: "chai", image: mango, price: "130", discount: "35" },
  // { id: 40, categoryId: 5, title: "hot chocolate", image: onion, price: "150", discount: "50" },
  { id: 41, categoryId: 1, title: "kiwi", image: kiwi, price: "210", discount: "55" },
  { id: 42, categoryId: 1, title: "watermelon", image: watermelon, price: "190", discount: "45" },
  { id: 43, categoryId: 2, title: "broccoli", image: broccoli, price: "140", discount: "30" },
  { id: 44, categoryId: 2, title: "cauliflower", image: cauliflower, price: "130", discount: "25" },
  { id: 45, categoryId: 3, title: "sour cream", image: sourcream, price: "220", discount: "50" },
  { id: 46, categoryId: 4, title: "baguette", image: baguette, price: "75", discount: "20" },
  { id: 47, categoryId: 4, title: "focaccia", image: focaccia, price: "80", discount: "18" },
  // { id: 48, categoryId: 5, title: "iced tea", image: onion, price: "115", discount: "25" },
  // { id: 49, categoryId: 5, title: "matcha", image: apple, price: "140", discount: "40" },
  { id: 50, categoryId: 1, title: "papaya", image: papaya, price: "200", discount: "55" },
];

export default subcategories;
