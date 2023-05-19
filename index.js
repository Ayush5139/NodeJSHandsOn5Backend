const io = require("socket.io")({
    cors: {
        origin: '*',
    },
});

io.on("connection",(socket)=>{  // io.on for connection 
    console.log("User Connected To Server")
    socket.on("chat",(data)=>{ // socket.on to recieve message
        console.log(`message-recieved : ${data.message}`)
        io.emit('message',{
            username: data.username,
            message: data.message
        })
    })

    socket.on("disconnect",()=>{
        console.log("user Disconnected")
    })
})

io.listen(9000,()=>{
    console.log("Server Is rRunning On 9000")
})