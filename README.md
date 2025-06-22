******💬 Real-Time Chat Web App******

A real-time chat web application built using Node.js, Express, and Socket.IO. This project demonstrates how to create a basic yet powerful chat platform where multiple users can exchange messages live in a shared room.

******🚀 Features******

- ⚡ Real-time message exchange using WebSockets

- 👥 Tracks connected users

- 📢 Broadcasts messages to all participants

- 🎨 Simple and responsive frontend UI

- 📁 Static file handling via Express

******📸 Screenshots******

******- user 1 - ******

![image](https://github.com/user-attachments/assets/961f425f-9563-41eb-a10d-cf204db48339) 

****- user 2-****

![image](https://github.com/user-attachments/assets/9036a182-68dc-407d-89d9-85edd9847526)

******🛠️ Tech Stack******

| Component  | Technology            |
| ---------- | --------------------- |
| Frontend   | HTML, CSS, JavaScript |
| Backend    | Node.js, Express.js   |
| WebSockets | Socket.IO             |

******🧪 How It Works******

- The server listens for socket connections using io.on("connection").

- Each connected client can send messages using socket.emit("send-message").

- The server receives and rebroadcasts messages to all clients using io.emit("receive-message").

- The frontend listens for new messages and appends them in real-time.


