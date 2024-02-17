import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    isCompleted: {
        type: Boolean,
        default: false
    } ,
    location: {
        type: String,
        required: true
    }, 
    desc: {
        type: String,
        default: "no special description"
    }, 
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
