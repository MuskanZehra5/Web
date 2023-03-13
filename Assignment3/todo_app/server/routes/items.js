const router = require('express').Router();

//import todo model 

const todolistmodel = require("../models/todo_items");

router.post('/api/item',async (req,res)=>{
    try{
        const newtask = new todolistmodel({
            task: req.body.task
        })

        const savetask = await newtask.save();
        res.status(200).json("item added");

    }catch(err){
        res.json(err);
    }


})

module.exports = router;
// export default router;