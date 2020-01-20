import CherryImg from './images/Cherry.jpg';
import OrangeImg from './images/Orange.jpg';
import NutsImg from './images/Nuts.jpg';
import StrawberryImg from './images/Strawberry.jpg';

const ProductList = [{
    "id": "1",
    "name": "Cherry",
    "image": CherryImg,
    "price": "$1.99",
    "colors": ["red", "green", "blue"],
    "condition": "Fresh",
    "description": "Two Cherries",
    "vendors": ["Fresh Fruits Market", "Fruit Ninja"],
    "compare":false
  },
  {
    "id": "2",
    "name": "Orange",
    "image": OrangeImg,
    "price": "$2.99",
    "colors": ["green", "blue"],
    "condition": "Frozen",
    "description": "Giant Orange",
    "vendors": ["Families Market"],
    "compare":false
  },
  {
    "id": "3",
    "name": "Nuts",
    "image": NutsImg,
    "price": "$1.00",
    "colors": ["red"],
    "condition": "Frozen",
    "description": "Mixed Nuts",
    "vendors": ["Amazon Distributor"],
    "compare":false
  },
  {
    "id": "4",
    "name": "Strawberry",
    "image": StrawberryImg,
    "price": "$1.49",
    "colors": ["blue"],
    "condition": "Fresh",
    "description": "Just Strawberry",
    "vendors": ["Big Basket"],
    "compare":false
 }];

 export default ProductList;
