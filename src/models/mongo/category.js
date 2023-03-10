import Mongoose from "mongoose";

const { Schema } = Mongoose;

const categorySchema = new Schema({
  categoryName: String,
  userid: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Category = Mongoose.model("Category", categorySchema);
