const socket = io();



(document.getElementById("btnSend")).addEventListener("click",function(event){
event.preventDefault();
    const data = {
    username:sessionStorage.getItem("username"),
    message:document.getElementById("msg").value,
    }

    socket.emit('message',data);
    addMessageFn(data);
    document.getElementById("msg").value = "";
});
(document.getElementById("msg")).addEventListener("keyup",function(e){
    if(e.key === 'Enter'){
        const data = {
            username:sessionStorage.getItem("username"),
            message:document.getElementById("msg").value,
            }
        
            socket.emit('message',data);
            addMessageFn(data);
            e.target.value = "";
    }
});
socket.on('message',(data)=>{
    if(data.username !== sessionStorage.getItem("username")){
        addMessageFnRes(data);
    }
})

function addMessageFn(data){
    let msgDiv = document.createElement('div');
    msgDiv.innerHTML = `${data.username} : ${data.message}`;
    msgDiv.setAttribute('class','m1 m');
    (document.getElementById('section2')).appendChild(msgDiv);
    document.getElementById("msg").innerHTML = "";
}

function addMessageFnRes(data){
    let msgDiv = document.createElement('div');
    msgDiv.innerHTML = `${data.username} : ${data.message}`;
    msgDiv.setAttribute('class','m2 m');
    (document.getElementById('section2')).appendChild(msgDiv);
    document.getElementById("msg").innerHTML = "";
}