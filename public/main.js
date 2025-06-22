const socket = io();


const clientsTotal = document.getElementById("clients-total");

const messageContainer = document.getElementById('message-container');
const nameInput = document.getElementById('name-input');
const messageform = document.getElementById('message-form');
const messageInput = document.getElementById("message-input");

messageform.addEventListener("submit",(e)=>{
     e.preventDefault();
    sendMessage();
})


socket.on("clients-total",(data)=>{
  clientsTotal.innerText = `Totlal clients : ${data}`
})

function sendMessage(){
    if(messageInput.value === '') return 
 // console.log(messageInput.value);
  const data = {
    name : nameInput.value,
    message : messageInput.value,
    dateTime : new Date()
  }
  socket.emit('message',data)
  addMessageToUI(true,data)
  messageInput.value = ''
}


socket.on("chat-message",(data)=>{
 //   console.log(data);
    addMessageToUI(false,data)
})


function addMessageToUI(isOwnMessage, data){
    clearfeadback();
  const element = `<li class="${isOwnMessage ? "message-right": "message-left"}">
                <p class="message">
                    ${data.message}
                    <span>${data.name} ${moment(data.dateTime).fromNow()}</span>
                </p>
            </li>`   

            messageContainer.innerHTML += element;
            scrollbuttom();
}

function scrollbuttom(){
    messageContainer.scrollTo(0,messageContainer.scrollHeight)
}

messageInput.addEventListener("focus", (e)=>{
    console.log("typing...");
  socket.emit("feedback",{
    feedback : `${nameInput.value} is typing a message....`
  });
});
messageInput.addEventListener("keypress", (e)=>{
  socket.emit("feedback",{
    feedback : `${nameInput.value} is typing a message....`
  });
});

messageInput.addEventListener("blur", (e)=>{
     socket.emit("feedback",{
    feedback : "",
  });
});

socket.on("feedback",(data)=>{
     
    clearfeadback()
    const element = `<li class="message-feedback">
                <p class="feedback" id="feedback">
                    ${data.feedback}
                </p>
            </li>`

            messageContainer.innerHTML += element

})

function clearfeadback(){
  document.querySelectorAll("li.message-feedback").forEach(element =>{
     element.parentNode.removeChild(element)
  })   
}
