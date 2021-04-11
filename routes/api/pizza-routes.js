const router = require('express').Router();
const {
    getAllPizza,
    getPizzabyId,
    createPizza,
    updatePizza,
    deletePizza
} = require('../../controllers/pizza-controller');

// Set up GET all and POST at /api/pizzas
router
    .route('/')
    .get(getAllPizza)
    .post(createPizza);

// Set up GET one, PUT, and DELETE at /api/pizzas/:id
router
    .route('/:id')
    .get(getPizzabyId)
    .put(updatePizza)
    .delete(deletePizza);

module.exports = router;