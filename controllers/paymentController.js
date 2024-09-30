const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.processPayment = async (req, res) => {
  const { amount, token } = req.body;
  try {
    const charge = await stripe.charges.create({
      amount: amount * 100, // Stripe works with cents
      currency: 'usd',
      source: token,
      description: 'Ecommerce payment'
    });
    res.json({ success: true, charge });
  } catch (err) {
    res.status(500).send('Payment failed');
  }
};
