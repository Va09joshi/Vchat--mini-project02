

<h1>💬 Real-Time Chat Web App</h1>
<p>A lightweight yet powerful chat platform built with <strong>Node.js, Express, and Socket.IO</strong>.<br>
Multiple users can join the same room and see messages appear instantly—no page refreshes required.</p>

<p class="center">
  <img src="https://github.com/user-attachments/assets/961f425f-9563-41eb-a10d-cf204db48339" alt="Chat demo">
</p>

<p class="badges center">
  <img src="https://img.shields.io/badge/Node.js-≥18.x-brightgreen?logo=node.js" alt="Node.js">
  <img src="https://img.shields.io/badge/Socket.IO-v4.x-black?logo=socketdotio" alt="Socket.IO">
  <img src="https://img.shields.io/badge/License-MIT-blue" alt="MIT">
</p>

<hr>

<h2>✨ Features</h2>
<ul>
  <li>⚡ <strong>Real-time messaging</strong> via WebSockets</li>
  <li>👥 <strong>Live user tracking</strong> (see who’s online)</li>
  <li>📢 <strong>Broadcast</strong> every message to all participants</li>
  <li>🎨 <strong>Responsive UI</strong> that works on mobile &amp; desktop</li>
  <li>📁 <strong>Static asset serving</strong> handled by Express</li>
</ul>

<h2>📸 Screenshots</h2>
<div class="screens center">
  <img src="https://github.com/user-attachments/assets/961f425f-9563-41eb-a10d-cf204db48339" alt="User 1">
  <img src="https://github.com/user-attachments/assets/9036a182-68dc-407d-89d9-85edd9847526" alt="User 2">
</div>

<h2>🛠️ Tech Stack</h2>
<table>
  <tr><th>Layer</th><th>Tech</th></tr>
  <tr><td>Front-end</td><td>HTML, CSS, Vanilla JS</td></tr>
  <tr><td>Back-end</td><td>Node.js, Express.js</td></tr>
  <tr><td>WebSocket</td><td>Socket.IO (server &amp; client)</td></tr>
</table>

<h2>🧑‍🔧 How It Works</h2>
<ol>
  <li><strong>Server</strong> listens for incoming sockets:
    <pre><code>io.on("connection", socket =&gt; { ... });</code></pre>
  </li>
  <li>A client sends a message with:
    <pre><code>socket.emit("send-message", msg);</code></pre>
  </li>
  <li>The server rebroadcasts to everyone:
    <pre><code>io.emit("receive-message", msg);</code></pre>
  </li>
  <li>Each client listens and appends new chat bubbles instantly.</li>
</ol>

<h2>🚀 Getting Started</h2>
<pre><code># 1. Clone
git clone https://github.com/your-username/your-repo.git
cd your-repo

# 2. Install
npm install

# 3. Run (development)
npm run dev     # nodemon

</code></pre>
<p>Open <strong>http://localhost:3000</strong> in two tabs or devices to watch real-time magic happen.</p>

<h2>📂 Project Structure</h2>
<pre><code>.
├── public/            # front-end HTML/CSS/JS
│   ├── index.html
│   └── css / js / img
├── server.js          # Express + Socket.IO back-end
└── package.json
</code></pre>

<h2>📝 License</h2>
<p>This project is licensed under the <strong>MIT License</strong> – do with it as you wish.</p>

<hr>

</body>
</html>
