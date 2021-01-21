const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  valor: {
    type: Number,
    required: true
  },
  vencimento: {
    type: Date,
    required: true
  },
  foto: {
    type: String,
    required: true
  },
  timestamps: true
});

mongoose.model("Product", productSchema);
