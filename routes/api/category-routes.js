const router = require('express').Router();
const { Category, Product } = require('../../models');

// find all categories
router.get('/', (req, res) => {
  Category.findAll({
    include: [
      {
        model: Product,
      }
    ]
  })
    .then((categories) => {
      res.json(categories);
    })
    .catch((err) => {
      res.json(err);
    });
});

// find one category by its `id` value
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
      }
    ]
  })
    .then((category) => {
      res.json(category);
    }
    )
    .catch((err) => {
      res.json(err);
    }
    );
});

// create a new category
router.post('/', (req, res) => {
  Category.create(req.body)
    .then((category) => {
      res.json(category);
    })
    .catch((err) => {
      res.json(err);
    });
});

// update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((category) => {
      res.json(category);
    })
    .catch((err) => {
      res.json(err);
    });
});

// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    }
  })
    .then((category) => {
      res.json(category);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
