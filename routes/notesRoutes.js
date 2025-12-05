const express = require('express');
const { homePage } = require('../controllers/home');
const router = express.Router();

router.get('/', homePage);
router.get('/new', renderNewForm);
router.post('/', createData);