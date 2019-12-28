exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('products').insert([
        { name: 'Apple', sourceId: 1 },
        { name: 'Corn bread', sourceId: 2 },
        { name: 'Bread', sourceId: 2 },
        { name: 'Cookie', sourceId: 2 },
        { name: 'Raspberry Muffin', sourceId: 2 },
        { name: 'Blackberry Muffin', sourceId: 2 },
        { name: 'Pizza', sourceId: 2 },
        { name: 'Spicy pizza', sourceId: 2 },
        { name: 'Potato bread', sourceId: 2 },
        { name: 'Frutti di Mare pizza', sourceId: 2 },
        { name: 'Banana bread', sourceId: 2 },
        { name: 'Banana', sourceId: 3 },
        { name: 'Pancake', sourceId: 4 },
        { name: 'Bacon and eggs', sourceId: 4 },
        { name: 'Baked potato', sourceId: 4 },
        { name: 'Roasted Tomatoes', sourceId: 4 },
        { name: 'Fish and Chips', sourceId: 4 },
        { name: 'Lobster skewer', sourceId: 4 },
        { name: 'Hamburger', sourceId: 4 },
        { name: 'Fish burger', sourceId: 4 },
        { name: 'Grilled onion', sourceId: 4 },
        { name: 'Grilled eggplant', sourceId: 4 },
        { name: 'Banana Pancakes', sourceId: 4 },
        { name: 'Fish skewer', sourceId: 4 },
        { name: 'Honeycomb', sourceId: 5 },
        { name: 'Blackberry', sourceId: 6 },
        { name: 'Cacao', sourceId: 7 },
        { name: 'Strawberry cake', sourceId: 8 },
        { name: 'Honey apple crisp', sourceId: 8 },
        { name: 'Chocolate cake', sourceId: 8 },
        { name: 'Potato feta cake', sourceId: 8 },
        { name: 'Cheesecake', sourceId: 8 },
        { name: 'Red berry cake', sourceId: 8 },
        { name: 'Cream cake', sourceId: 8 },
        { name: 'Carrot cake', sourceId: 8 },
        { name: 'Lemon cake', sourceId: 8 },
        { name: 'Pineapple cake', sourceId: 8 },
        { name: 'Fruit cake', sourceId: 8 },
        { name: 'Strawberry candle', sourceId: 9 },
        { name: 'Lemon candle', sourceId: 9 },
        { name: 'Raspberry candle', sourceId: 9 },
        { name: 'Floral candle', sourceId: 9 },
        { name: 'Toffee', sourceId: 10 },
        { name: 'Chocolate', sourceId: 10 },
        { name: 'Lollipop', sourceId: 10 },
        { name: 'Jelly beans', sourceId: 10 },
        { name: 'Caramel apple', sourceId: 10 },
        { name: 'Sesame Brittle', sourceId: 10 },
        { name: 'Cherry', sourceId: 11 },
        { name: 'Egg', sourceId: 12 },
        { name: 'Coffee bean', sourceId: 13 },
        { name: 'Caffè mocha', sourceId: 14 },
        { name: 'Raspberry mocha', sourceId: 14 },
        { name: 'Hot chocolate', sourceId: 14 },
        { name: 'Espresso', sourceId: 14 },
        { name: 'Caffè latte', sourceId: 14 },
        { name: 'Caramel latte', sourceId: 14 },
        { name: 'Iced banana latte', sourceId: 14 },
        { name: 'Milk', sourceId: 15 },
        { name: 'Goat cheese', sourceId: 16 },
        { name: 'Cheese', sourceId: 16 },
        { name: 'Cream', sourceId: 16 },
        { name: 'Butter', sourceId: 16 },
        { name: 'Duck feather', sourceId: 17 },
        { name: 'Goat feed', sourceId: 18 },
        { name: 'Wheat bundle', sourceId: 18 },
        { name: 'Sheep feed', sourceId: 18 },
        { name: 'Pig feed', sourceId: 18 },
        { name: 'Cow feed', sourceId: 18 },
        { name: 'Chicken feed', sourceId: 18 },
        { name: 'Tomato', sourceId: 19 },
        { name: 'Potato', sourceId: 19 },
        { name: 'Strawberry', sourceId: 19 },
        { name: 'Cotton', sourceId: 19 },
        { name: 'Pumpkin', sourceId: 19 },
        { name: 'Indigo', sourceId: 19 },
        { name: 'Soybean', sourceId: 19 },
        { name: 'Wheat', sourceId: 19 },
        { name: 'Corn', sourceId: 19 },
        { name: 'Sugarcane', sourceId: 19 },
        { name: 'Carrot', sourceId: 19 },
        { name: 'Chili pepper', sourceId: 19 },
        { name: 'Bell pepper', sourceId: 19 },
        { name: 'Onion', sourceId: 19 },
        { name: 'Cucumber', sourceId: 19 },
        { name: 'Lettuce', sourceId: 19 },
        { name: 'Rice', sourceId: 19 },
        { name: 'Sesame', sourceId: 19 },
        { name: 'Sunflower', sourceId: 19 },
        { name: 'Pineapple', sourceId: 19 },
        { name: 'Mint', sourceId: 19 },
        { name: 'Grapes', sourceId: 19 },
        { name: 'Broccoli', sourceId: 19 },
        { name: 'Peony', sourceId: 19 },
        { name: 'Tea leaf', sourceId: 19 },
        { name: 'Ginger', sourceId: 19 },
        { name: 'Watermelon', sourceId: 19 },
        { name: 'Eggplant', sourceId: 19 },
        { name: 'Mushroom', sourceId: 19 },
        { name: 'Fish fillet', sourceId: 20 },
        { name: 'Rustic bouquet', sourceId: 21 },
        { name: 'Bright bouquet', sourceId: 21 },
        { name: 'Candy bouquet', sourceId: 21 },
        { name: 'Soft bouquet', sourceId: 21 },
        { name: 'Goat milk', sourceId: 22 },
        { name: 'Sun hat', sourceId: 23 },
        { name: 'Top hat', sourceId: 23 },
        { name: 'Cloche hat', sourceId: 23 },
        { name: 'Flower crown', sourceId: 23 },
        { name: 'Beeswax', sourceId: 24 },
        { name: 'Honey', sourceId: 24 },
        { name: 'Tofu dog', sourceId: 25 },
        { name: 'Hot dog', sourceId: 25 },
        { name: 'Corn dog', sourceId: 25 },
        { name: 'Onion dog', sourceId: 25 },
        { name: 'Chocolate ice cream', sourceId: 26 },
        { name: 'Cherry popsicle', sourceId: 26 },
        { name: 'Vanilla ice cream', sourceId: 26 },
        { name: 'Strawberry ice cream', sourceId: 26 },
        { name: 'Sesame ice cream', sourceId: 26 },
        { name: 'Mint ice cream', sourceId: 26 },
        { name: 'Peach ice cream', sourceId: 26 },
        { name: 'Orange sorbet', sourceId: 26 },
        { name: 'Banana split', sourceId: 26 },
        { name: 'Strawberry jam', sourceId: 27 },
        { name: 'Cherry jam', sourceId: 27 },
        { name: 'Apple jam', sourceId: 27 },
        { name: 'Raspberry jam', sourceId: 27 },
        { name: 'Blackberry jam', sourceId: 27 },
        { name: 'Marmalade', sourceId: 27 },
        { name: 'Grape jam', sourceId: 27 },
        { name: 'Peach jam', sourceId: 27 },
        { name: 'Plum jam', sourceId: 27 },
        { name: 'Necklace', sourceId: 28 },
        { name: 'Bracelet', sourceId: 28 },
        { name: 'Iron bracelet', sourceId: 28 },
        { name: 'Diamond ring', sourceId: 28 },
        { name: 'Flower pendant', sourceId: 28 },
        { name: 'Berry juice', sourceId: 29 },
        { name: 'Tomato juice', sourceId: 29 },
        { name: 'Apple juice', sourceId: 29 },
        { name: 'Cherry juice', sourceId: 29 },
        { name: 'Carrot juice', sourceId: 29 },
        { name: 'Orange juice', sourceId: 29 },
        { name: 'Pineapple juice', sourceId: 29 },
        { name: 'Grape juice', sourceId: 29 },
        { name: 'Watermelon juice', sourceId: 29 },
        { name: 'Lemon', sourceId: 30 },
        { name: 'Lobster tail', sourceId: 31 },
        { name: 'Red scarf', sourceId: 32 },
        { name: 'Sweater', sourceId: 32 },
        { name: 'Cotton fabric', sourceId: 32 },
        { name: 'Blue woolly hat', sourceId: 32 },
        { name: 'Blue sweater', sourceId: 32 },
        { name: 'Flower shawl', sourceId: 32 },
        { name: 'Red lure', sourceId: 33 },
        { name: 'Green lure', sourceId: 33 },
        { name: 'Blue lure', sourceId: 33 },
        { name: 'Purple lure', sourceId: 33 },
        { name: 'Gold lure', sourceId: 33 },
        { name: 'Coal', sourceId: 34 },
        { name: 'Iron ore', sourceId: 34 },
        { name: 'Platinum ore', sourceId: 34 },
        { name: 'Gold ore', sourceId: 34 },
        { name: 'Silver ore', sourceId: 34 },
        { name: 'Duck trap', sourceId: 35 },
        { name: 'Lobster trap', sourceId: 35 },
        { name: 'Fishing net', sourceId: 35 },
        { name: 'Mystery net', sourceId: 35 },
        { name: 'Olive', sourceId: 36 },
        { name: 'Orange', sourceId: 37 },
        { name: 'Veggie lasagna', sourceId: 38 },
        { name: 'Gnocchi', sourceId: 38 },
        { name: 'Pasta carbonara', sourceId: 38 },
        { name: 'Broccoli pasta', sourceId: 38 },
        { name: 'Lobster pasta', sourceId: 38 },
        { name: 'Spicy pasta', sourceId: 38 },
        { name: 'Mushroom pasta', sourceId: 38 },
        { name: 'Rice noodles', sourceId: 39 },
        { name: 'Fresh pasta', sourceId: 39 },
        { name: 'Peach', sourceId: 40 },
        { name: "Shepherd's pie", sourceId: 41 },
        { name: 'Fish pie', sourceId: 41 },
        { name: 'Feta pie', sourceId: 41 },
        { name: 'Casserole', sourceId: 41 },
        { name: 'Bacon pie', sourceId: 41 },
        { name: 'Pumpkin pie', sourceId: 41 },
        { name: 'Carrot pie', sourceId: 41 },
        { name: 'Apple pie', sourceId: 41 },
        { name: 'Peach tart', sourceId: 41 },
        { name: 'Lemon pie', sourceId: 41 },
        { name: 'Eggplant parmesan', sourceId: 41 },
        { name: 'Bacon', sourceId: 42 },
        { name: 'Plum', sourceId: 43 },
        { name: 'Honey popcorn', sourceId: 44 },
        { name: 'Chocolate popcorn', sourceId: 44 },
        { name: 'Buttered popcorn', sourceId: 44 },
        { name: 'Popcorn', sourceId: 44 },
        { name: 'Chili popcorn', sourceId: 44 },
        { name: 'Raspberry', sourceId: 45 },
        { name: 'Veggie platter', sourceId: 46 },
        { name: 'Pasta salad', sourceId: 46 },
        { name: 'Feta salad', sourceId: 46 },
        { name: 'BLT salad', sourceId: 46 },
        { name: 'Seafood salad', sourceId: 46 },
        { name: 'Summer salad', sourceId: 46 },
        { name: 'Fruit salad', sourceId: 46 },
        { name: 'Summer rolls', sourceId: 46 },
        { name: 'Mushroom salad', sourceId: 46 },
        { name: 'Egg sandwich', sourceId: 47 },
        { name: 'Honey toast', sourceId: 47 },
        { name: 'Veggie bagel', sourceId: 47 },
        { name: 'Bacon toast', sourceId: 47 },
        { name: 'Onion melt', sourceId: 47 },
        { name: 'Cucumber sandwich', sourceId: 47 },
        { name: 'Goat cheese toast', sourceId: 47 },
        { name: 'Lemon curd', sourceId: 48 },
        { name: 'Tomato sauce', sourceId: 48 },
        { name: 'Soy sauce', sourceId: 48 },
        { name: 'Mayonnaise', sourceId: 48 },
        { name: 'Olive oil', sourceId: 48 },
        { name: 'Olive dip', sourceId: 48 },
        { name: 'Salsa', sourceId: 48 },
        { name: 'Wooly chaps', sourceId: 49 },
        { name: 'Cotton shirt', sourceId: 49 },
        { name: 'Violet dress', sourceId: 49 },
        { name: 'Pillow', sourceId: 49 },
        { name: 'Blanket', sourceId: 49 },
        { name: 'Wool', sourceId: 50 },
        { name: 'Refined coal', sourceId: 51 },
        { name: 'Iron bar', sourceId: 51 },
        { name: 'Platinum bar', sourceId: 51 },
        { name: 'Silver bar', sourceId: 51 },
        { name: 'Gold bar', sourceId: 51 },
        { name: 'Green smoothie', sourceId: 52 },
        { name: 'Yogurt smoothie', sourceId: 52 },
        { name: 'Cucumber smoothie', sourceId: 52 },
        { name: 'Berry smoothie', sourceId: 52 },
        { name: 'Mixed smoothie', sourceId: 52 },
        { name: 'Black sesame smoothie', sourceId: 52 },
        { name: 'Cocoa smoothie', sourceId: 52 },
        { name: 'Plum smoothie', sourceId: 52 },
        { name: 'Pumpkin soup', sourceId: 53 },
        { name: 'Lobster soup', sourceId: 53 },
        { name: 'Tomato soup', sourceId: 53 },
        { name: 'Onion soup', sourceId: 53 },
        { name: 'Noodle soup', sourceId: 53 },
        { name: 'Fish soup', sourceId: 53 },
        { name: 'Potato soup', sourceId: 53 },
        { name: 'Bell pepper soup', sourceId: 53 },
        { name: 'Broccoli soup', sourceId: 53 },
        { name: 'Mushroom soup', sourceId: 53 },
        { name: 'White sugar', sourceId: 54 },
        { name: 'Brown sugar', sourceId: 54 },
        { name: 'Syrup', sourceId: 54 },
        { name: 'Big sushi roll', sourceId: 55 },
        { name: 'Sushi roll', sourceId: 55 },
        { name: 'Lobster sushi', sourceId: 55 },
        { name: 'Egg sushi', sourceId: 55 },
        { name: 'Quesadilla', sourceId: 56 },
        { name: 'Taco', sourceId: 56 },
        { name: 'Fish Taco', sourceId: 56 },
        { name: 'Nachos', sourceId: 56 },
        { name: 'Lemon tea', sourceId: 57 },
        { name: 'Honey tea', sourceId: 57 },
        { name: 'Green tea', sourceId: 57 },
        { name: 'Milk tea', sourceId: 57 },
        { name: 'Iced tea', sourceId: 57 },
        { name: 'Apple Ginger Tea', sourceId: 57 },
        { name: 'Orange tea', sourceId: 57 },
        { name: 'Mint tea', sourceId: 57 },
      ]);
    });
};