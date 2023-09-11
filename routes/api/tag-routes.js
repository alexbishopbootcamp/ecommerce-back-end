const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// find all tags
router.get('/', (req, res) => {
  Tag.findAll({
    include: [
      {
        model: Product,
        through: ProductTag,
      }
    ]
  })
  .then((tags) => {
    res.json(tags);
  })
  .catch((err) => {
    res.json(err);
  });
});


// find a single tag by its `id`
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
        through: ProductTag,
      }
    ]
  })
  .then((tag) => {
    res.json(tag);
  })
  .catch((err) => {
    res.json(err);
  });
});

// create a new tag
router.post('/', (req, res) => {
  Tag.create(req.body)
  .then((tag) => {
    res.json(tag);
  })
  .catch((err) => {
    res.json(err);
  });
});

// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then((tag) => {
    res.json(tag);
  })
  .catch((err) => {
    res.json(err);
  });
});

// delete on tag by its `id` value
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((tag) => {
    res.json(tag);
  })
  .catch((err) => {
    res.json(err);
  });
});

module.exports = router;
