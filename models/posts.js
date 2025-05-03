/// --- initializations --- \\\
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/// --- schema --- \\\
const postsSchema = new Schema({
    title: {
        type: String,
        required: false,
    },
    content: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
});

/// --- exporting --- \\\
const posts = mongoose.model("Posts", postsSchema, "posts");
module.exports = posts;