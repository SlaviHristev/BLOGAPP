import express from "express";
import userRouter from './routes/user.route.js'
import commentsRouter from './routes/comment.route.js'
import postsRouter from './routes/post.route.js'
import connectDb from './lib/connectDb.js'
const app =express();

app.use('/users', userRouter);
app.use('/posts', postsRouter);
app.use('/comments', commentsRouter);

app.listen(3000, () =>{
    connectDb();
    console.log("Server is running!");
})