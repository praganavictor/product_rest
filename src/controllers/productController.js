const Product = require("../model/Product");

module.exports = {
  async index(req, res) {
    try {
      const products = await Product.find({});

      return res.json(products);
    } catch (error) {
      return res
        .status(400)
        .send({ msg: `Erro ao carregar os produtos`, error });
    }
  },

  async show(req, res) {
    try {
      const product = await Product.findById(req.params.id);

      return res.json(product);
    } catch (error) {
      return res.status(400).send({ msg: `Erro ao carregar a produto`, error });
    }
  },

  async store(req, res) {
    try {
      const product = await Product.create(req.body);

      return res.json(product);
    } catch (error) {
      return res.status(400).send({ msg: `Erro ao criar a produto`, error });
    }
  },

  async update(req, res) {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      });

      return res.json(product);
    } catch (error) {
      return res
        .status(400)
        .send({ msg: `Erro ao atualizar a produto`, error });
    }
  },

  async destroy(req, res) {
    try {
      await Product.findByIdAndDelete(req.params.id);

      return res.send({ msg: "Apagado com sucesso" });
    } catch (error) {
      return res.status(400).send({ msg: `Erro ao destruir a produto`, error });
    }
  }
};
