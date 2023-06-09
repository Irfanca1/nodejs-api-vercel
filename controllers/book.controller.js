const { Book } = require('../models');

const bookController = {
  getAll: async (req, res) => {
    try {
      const books = await Book.findAll();
      res.json({ msg: 'OK', data: books });
    } catch (error) {
      res.json({ msg: error.message });
    }
  },
  getById: async (req, res) => {
    try {
      const book = await Book.findByPk(req.params.id);

      if (book) {
        return res.json({ msg: 'OK', data: book });
      }

      res.status(404).json({ msg: 'not found' });
    } catch (error) {
      res.json({ msg: error.message });
    }
  },
  create: async (req, res) => {
    try {
      const { name, price } = req.body;

      const book = await Book.create({ name, price });

      res.json({ msg: 'OK', data: book });
    } catch (error) {
      res.json({ msg: error.message });
    }
  },
  updateById: async (req, res) => {
    try {
      const { name, price } = req.body;

      const book = await Book.findByPk(req.params.id);

      if (book) {
        book.name = name;
        book.price = price;
        await book.save();

        return res.json({ msg: 'OK', data: book });
      }

      res.status(404).json({ msg: 'not found' });
    } catch (error) {
      res.json({ msg: error.message });
    }
  },
  deleteById: async (req, res) => {
    try {
      const book = await Book.findByPk(req.params.id);

      if (book) {
        await book.destroy();
        return res.json({ msg: 'OK', data: book });
      }

      return res.status(404).json({ msg: 'not found' });
    } catch (error) {
      res.json({ msg: error.message });
    }
  },
};

module.exports = bookController;
