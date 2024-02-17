import asyncHandler from "express-async-handler";
import Task from "../models/tasksModel.js";
import User from "../models/userModel.js";

export const createTask = asyncHandler(async (req , res) => {
    const eid = req.body.user

    const userr = await User.find({email:eid});
    if(!userr) {
        res.status(400).json({
            success: false,
            user,eid
        })
    }
    if(userr) console.log(userr)
    const mainTask = new Task({
        user: userr[0]._id,
        location: req.body.location,
        desc: req.body.desc
    })
    const task = await mainTask.save();

    res.status(201).json({
        success: true,
        task
    })
})

export const getAllUserTasks = asyncHandler(async (req , res) => {
    const eid = req.body.eid

    const userr = await User.find({email:eid});
    const uid = userr[0]._id
    const tasks = await Task.find({user:uid});

    res.status(201).json({
        tasks
    });

})

export const updateTask = asyncHandler(async (req , res) => {
    const tid = req.body.tid;
    const task = await Task.findById(tid);
    task = await Task.findByIdAndUpdate(tid , {isCompleted:true} , (err) => {
        if(err) console.log(err);
        else console.log(task)
    })
    console.log(task)
    res.status(200)
})

export const getAllTasks = asyncHandler(async (req , res) => {
    const tasks = await Task.find({})
    res.status(201).json({})
})