import express from "express";
import userRouter from './routes/user.route.js'
import commentsRouter from './routes/comment.route.js'
import postsRouter from './routes/post.route.js'
import connectDb from './lib/connectDb.js'
import webHookRouter from './routes/webhook.route.js'
const app =express();
app.use('/webhooks', webHookRouter);
app.use(express.json())

app.use('/users', userRouter);
app.use('/posts', postsRouter);
app.use('/comments', commentsRouter);

app.use((error, req,res,next)=>{

    res.status(error.status || 500)

    res.json({
        message:error.message || "Something went wrong!",
        status:error.status,
        stack:error.stack
    })
})

app.listen(3000, () =>{
    connectDb();
    console.log("Server is running!");
})