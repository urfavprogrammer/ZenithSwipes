const express = require('express');
const router = express.Router();

// List of EJS files to route
const pages = [
  'index', 'about', 'automate', 'contact', 'contacts', 'copy', 'cryptocurrencies', 'etfs', 'faq', 'for-traders', 'forex', 'indices', 'privacy',  'regulation', 'rules', 'shares', 'terms', 'trade', 'why-us'
];

pages.forEach(page => {
  router.get(`/${page === 'index' ? '' : page}`, (req, res) => {
    res.render(page);
  });
});

module.exports = router;
