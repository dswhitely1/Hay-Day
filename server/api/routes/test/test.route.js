const testRouter = require('express').Router();
const Sources = require('../../../data/models/sources.model');
const Products = require('../../../data/models/products.model');
const Ingredients = require('../../../data/models/ingredients.model');

function testRoute(req, res) {
  res.json({ api: 'Working' });
}

async function allSources(req, res) {
  const sources = await Sources.find();
  const products = await Products.find();
  const ingredients = await Ingredients.find();
  const productResponse = products.map(product => ({
    id: product.id,
        name: product.name,
    source: sources.filter(({id}) => product.sourceId === id)[0].name,
    ingredients: ingredients
        .filter(ing => ing.productId === product.id)
        .map(list => ({
          item: products.filter(product => product.id === list.ingredientId)[0].name,
          quantity: list.quantity,
        }))

  }));
  res.json(productResponse);
}

async function allProducts(req, res) {
  const products = await Products.find();
  res.json(products);
}

testRouter
  .get('/', testRoute)
  .get('/sources', allSources)
  .get('/products', allProducts);

module.exports = testRouter;
