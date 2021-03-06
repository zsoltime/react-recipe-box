export function setRecipes(recipes) {
  if (Array.isArray(recipes)) {
    localStorage.setItem('zsReactRecipes', JSON.stringify(recipes));
    return recipes;
  }
  return undefined;
}

export function getRecipes() {
  const strRecipes = localStorage.getItem('zsReactRecipes');
  let recipes = [];

  try {
    recipes = JSON.parse(strRecipes);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e.message);
  }
  return Array.isArray(recipes) ? recipes : [{
    id: 1,
    name: 'Apple Pie',
    image: 'http://media.istockphoto.com/photos/homemade-organic-apple-pie-dessert-picture-id450752471?k=6&m=450752471&s=612x612&w=0&h=ye2J_VZk0e5K3gx4SbzQDMkBZOPOnRJVEX9U1aGI72M=',
    time: 50,
    calories: 420,
    ingredients: [
      'apple',
      'cinnamon',
      'flour',
      'milk',
      'egg',
      'sugar',
    ],
  }, {
    id: 2,
    name: 'Chocolate Muffin',
    image: 'http://media.istockphoto.com/photos/delicious-homemade-chocolate-muffins-picture-id497522904?k=6&m=497522904&s=612x612&w=0&h=c0lTSWxefqaDVZFlfs9XFSzQNxy7-ie5PVCF8Nbf4sI=',
    time: 45,
    calories: 330,
    ingredients: [
      'cocoa powder',
      'dark chocolate',
      'sugar',
      'flour',
      'baking soda',
      'milk',
      'egg',
      'vegetable oil',
    ],
  }, {
    id: 3,
    name: 'Panna Cotta',
    image: 'http://media.istockphoto.com/photos/pannacotta-with-pomegranate-jelly-picture-id465504682?k=6&m=465504682&s=612x612&w=0&h=iyK5EOI-Xmw5TPbaFEE3FHm0suc4D5usNxVg-91jE2I=',
    time: 12,
    calories: 210,
    ingredients: [
      'heavy cream',
      'sugar',
      'gelatine',
      'milk',
      'vanilla extract',
    ],
  }, {
    id: 4,
    name: 'Carrot Cake',
    image: 'http://media.istockphoto.com/photos/healthy-homemade-carrot-cake-picture-id466724142?k=6&m=466724142&s=612x612&w=0&h=KhYXqOoNNURwKyyCFk8NM0yf1HamK8IsPxsNtTXGlsE=',
    time: 75,
    calories: 420,
    ingredients: [
      'flour',
      'baking soda',
      'carrots',
      'cinnamon',
      'sugar',
      'milk',
      'vanilla extract',
    ],
  }];
}
