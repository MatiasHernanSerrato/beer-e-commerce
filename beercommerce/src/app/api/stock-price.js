import stockPriceData from '../../data/stock-price';

const handler = (req, res) => {
  const { code } = req.query;
  const productData = stockPriceData[code];

  if (productData) {
    const { stock, price } = productData;

    res.status(200).json({ stock, price });
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

export default handler;
