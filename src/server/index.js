"use strict";

const express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http);

//configure server
app.use(express.static('public'));
app.set('port', 8000);

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });

    socket.on('ENTER_CHAT', function(message){
        try{
            const {username} = JSON.parse(message);
            console.log('User entered chat: ' + username);
        }
        catch (error){
            console.error(error);
        }
    });

    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
    });
});

http.listen(app.get('port'), function () {
    console.log('Listening to port ' + app.get('port'));
});
