const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

  // find all categories
  // be sure to include its associated Products
router.get('/', (req, res) => {
  // sql statement --> 'SELECT * FROM categories;'
  Category.findAll({
    include: [Product],
  })
  .then(((categories) => res.json(categories)))
  .catch((err) => res.status(500).json(err));
});


  // find one category by its `id` value
  // be sure to include its associated Products
router.get('/:id', (req, res) => {
 // console.log("incoming request: ", req.params) // { id: }

  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [Product],
  })
    .then((category) => {
      if (!category) {
        res.status(404).json({ message: 'ID - No category found' });
        return;
      }
      res.json(category);
    })
    .catch((err) => res.status(500).json(err));
});


  // create a new category
router.post('/', (req, res) => {
  console.log("incoming Request Data: ", req.body)

  Category.create(req.body)
    .then((category) => res.json(category))
    .catch((err) => res.status(400).json(err));
});



  // update a category by its `id` value
router.put('/:id', (req, res) => {
  console.log("Req Params Object: ", req.params)
  console.log("Req Body Object: ", req.body)

  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((category) => {
      if (!category) {
        res.status(404).json({ message: 'ID - No category found' });
        return;
      }
      res.json(category);
    })
    .catch((err) => res.status(400).json(err));
});



  // delete a category by its `id` value
  router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((category) => {
      if (!category) {
        res.status(404).json({ message: 'ID - No category found' });
        return;
      }
      res.json({ message: 'This category has been deleted' });
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
