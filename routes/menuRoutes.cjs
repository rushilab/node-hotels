const express = require('express');
const router = express.Router();
const MenuItem = require('../models/menu.cjs');


router.post('/', async (req, res) => {

    try {
        const newMenuItem = new MenuItem(req.body);

        const response = await newMenuItem.save();
        console.log("response:", response);
        res.status(200).json({ message: 'Menu item created successfully', menuItem: response });
    } catch (err) {
        console.error("Error creating menu item:", err);
        res.status(500).json({ error: err.message });
    }
});


router.get('/', (req, res) => {
    MenuItem.find()
        .then(menuItems => res.json(menuItems))
        .catch(err => res.status(500).json({ error: err.message }));
});

router.get('/:taste', async(req, res) => {

    try{
    const taste = req.params.taste;
    console.log(taste);
    if(taste == 'spicy' || taste == 'sweet' || taste == 'medium'){
            const response = await MenuItem.find({taste: taste});
            console.log("Response fetched");
            res.status(200).json(response);
        }
        else {
res.status(500).json({error: "invalid taste"})
    }
    
}catch(err){
res.status(500).json({error: err})
    }
})


module.exports = router;