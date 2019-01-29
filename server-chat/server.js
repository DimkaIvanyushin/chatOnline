const User = require('./models/user.js');
const File = require('./models/file.js');
const config = require('./config/configServer.js');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = config.PORT;
const FILENAME_MESSAGES = config.FILENAME_MESSAGES;
const FILENAME_USERS = config.FILENAME_USERS;

let messages = [];
let users = [];
let fileMessages = new File(FILENAME_MESSAGES);
let fileUsers = new File(FILENAME_USERS);

http.listen(PORT);

messages = fileMessages.readFileMessages();
users = fileUsers.readFileUsers();

io.on('connection', function (socket) {

  let user = new User();

  socket.on('message', data => {
    try {
      messages.push(data);
      fileMessages.writeFile(JSON.stringify(messages));
      io.emit('message', data);
    } catch (error) {
      console.log(error.message);
    }
  });

  socket.on('connect user', _user => {
    if (checkUser(_user) < 0) {
      user.setUserName(_user.name);
      user.setTimeConnect(_user.timeConnect);
      users.push(user);
      fileUsers.writeFile(JSON.stringify(users));
    } else {
      user = getUser(_user);
      socket.emit('user', user)
    }

    setStatusOnline(user);
    getAllMessagesChat();
    BQupdateUserList(users);
  });

  socket.on('search message', message => {
    socket.emit('messages', searchMessage(message));
  });

  socket.on('update message', data => {
    messages = updateMessage(data.currentMessage, data.message);

    fileMessages.writeFile(JSON.stringify(messages));
    io.emit('messages', messages);
  });

  socket.on('delete message', message => {
    messages = deleteMessage(message);
    fileMessages.writeFile(JSON.stringify(messages));
    io.emit('messages', messages);
  });

  socket.on('add friend', friendUser => {
    user.addFriend(friendUser);
    users.splice(users.map((e) => {
      return e.name;
    }).indexOf(user.name), 1, user);

    fileUsers.writeFile(JSON.stringify(users));

    socket.emit('update user list', users);
  });

  socket.on('delete user', friendUser => {
    user.deleteFriend(friendUser);
    users.splice(users.map((e) => {
      return e.name;
    }).indexOf(user.name), 1, user);

    fileUsers.writeFile(JSON.stringify(users));
    socket.emit('user', user)
  });

  socket.on('disconnect', () => {
    setStatusOffline(user);
    BQupdateUserList(users);
  });


  getAllMessagesChat = () => {
    io.emit('messages', messages);
  }

  BQupdateUserList = users => {
    io.emit('update user list', users);
  };

  checkUser = user => {
    return users.map((e) => {
      return e.name;
    }).indexOf(user.name)
  };

  getUser = user => {
    let userId = users.map((e) => {
      return e.name;
    }).indexOf(user.name)

    return users[userId];
  };

  deleteMessage = message => {
    let res = messages;
    res.splice(messages.map((e) => {
      return e.message;
    }).indexOf(message.message), 1);

    return res;
  }

  updateMessage = (currentMessaeg, message) => {
    message.update = true;

    let res = messages;
    res.splice(messages.map((e) => {
      return e.message;
    }).indexOf(currentMessaeg), 1, message);

    return res;
  }

  searchMessage = text => {
    let seartchMessages = messages;
    return seartchMessages.filter(message =>
      message.message.toLowerCase().indexOf(text.toLowerCase()) !== -1);
  }

  setStatusOnline = user => {
    let userId = users.map((e) => {
      return e.name;
    }).indexOf(user.name)

    if (userId >= 0) {
      users[userId].setStatusOnline();
    }
  }

  setStatusOffline = user => {
    let userId = users.map((e) => {
      return e.name;
    }).indexOf(user.name)

    if (userId >= 0) {
      users[userId].setStatusOffline();
    }
  }
});