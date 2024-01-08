const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills')

// router.get('/', skillsCtrl.index)
// router.get('/new', skillsCtrl.new)
// router.get('/:id', skillsCtrl.show)
// router.post('/', skillsCtrl.create);
// router.delete('/:id', skillsCtrl.delete);

router.get('/', skillsCtrl.index);
// GET /skills/new <- Define BEFORE show route
router.get('/new', skillsCtrl.new);
// GET /skills/:id
router.get('/:id', skillsCtrl.show);
// POST /skills
router.post('/', skillsCtrl.create)
// DELETE /skills/:id
router.delete('/:id', skillsCtrl.delete)

module.exports = router