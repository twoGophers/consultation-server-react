import mongoose from "mongoose";

const QuestionHomeSchema = new mongoose.Schema(
  {
    panel: {
      type: String,
    },
    title: {
      type: String,
    },
    question: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("QuestionHome", QuestionHomeSchema);
