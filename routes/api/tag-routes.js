const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  router.get('/', (req, res) => {
    Tag.findAll({
      include: [
        {
          model: Product,
          through: ProductTag,
        },
      ],
    })
      .then((tags) => res.json(tags))
      .catch((err) => res.status(500).json(err));
  });
  
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  router.get('/:id', (req, res) => {
    Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          through: ProductTag,
        },
      ],
    })
      .then((tag) => {
        if (!tag) {
          res.status(404).json({ message: 'No ID with this tag' });
          return;
        }
        res.json(tag);
      })
      .catch((err) => res.status(500).json(err));
  });
});

router.post('/', (req, res) => {
  Tag.create(req.body)
    .then((tag) => res.json(tag))
    .catch((err) => res.status(500).json(err));
});

// Update a tag's name by its `id`
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedRows) => {
      if (!updatedRows[0]) {
        res.status(404).json({ message: 'No ID found' });
        return;
      }
      res.json({ message: 'Tag updated successfully!' });
    })
    .catch((err) => res.status(500).json(err));
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` valueTag.update(req.body, {
    Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedRows) => {
      if (!updatedRows[0]) {
        res.status(404).json({ message: 'No tag found with this id!' });
        return;
      }
      res.json({ message: 'Tag updated successfully!' });
    })
    .catch((err) => res.status(500).json(err));
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  router.delete('/:id', (req, res) => {
    Tag.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((deletedRows) => {
        if (!deletedRows) {
          res.status(404).json({ message: 'No tag found with this id!' });
          return;
        }
        res.json({ message: 'Tag deleted successfully!' });
      })
      .catch((err) => res.status(500).json(err));
  });
});

module.exports = router;
