import express from 'express';
import { db } from './db.js';

const router = express.Router();

// Create new order
router.post('/', (req, res) => {
  const { user_id, product_id, quantity, total_price } = req.body;

  if (!user_id || !product_id || !quantity || !total_price) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const query = `
    INSERT INTO orders (user_id, product_id, quantity, total_price, order_date)
    VALUES (?, ?, ?, ?, NOW())
  `;
  db.query(query, [user_id, product_id, quantity, total_price], (err, result) => {
    if (err) {
      console.error("❌ Error placing order:", err);
      return res.status(500).json({ error: 'Failed to place order' });
    }

    res.status(201).json({ message: '✅ Order placed successfully', orderId: result.insertId });
  });
});

// Get all orders (optional)
router.get('/', (req, res) => {
  const query = `
    SELECT o.id, u.name AS user_name, p.name AS product_name, o.quantity, o.total_price, o.order_date
    FROM orders o
    JOIN users u ON o.user_id = u.id
    JOIN products p ON o.product_id = p.id
    ORDER BY o.order_date DESC
  `;
  db.query(query, (err, results) => {
    if (err) {
      console.error("❌ Error fetching orders:", err);
      return res.status(500).json({ error: 'Failed to fetch orders' });
    }
    res.status(200).json(results);
  });
});

export default router;
