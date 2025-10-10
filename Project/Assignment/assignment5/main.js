let postCount = 0;

window.onload = function () {
  document.getElementById("top").innerHTML = "Welcome to the Forum";
};

function postFunction() {
    let message = document.getElementById("message");
    
    if (!message.value) {
        alert("พิมพ์อะไรก่อนคับพรี่");
        return;
    }
    postCount += 1

    if (postCount == 1) {
        document.getElementById("topic").innerHTML = "TOPIC : " + message.value;
    } 
    else if (postCount == 2) {
        document.getElementById("reply1").innerHTML = "reply : " + message.value;
    } 
    else if (postCount == 3) {
        document.getElementById("reply2").innerHTML = "reply : " + message.value;
    } 
    else {
        alert("ไม่มีที่ให้โพสต์แล้วคับพรี่");
    }

    message.value = "";
}

function clearFunction() {
    document.getElementById("topic").innerHTML = "";
    document.getElementById("reply1").innerHTML = "";
    document.getElementById("reply2").innerHTML = "";
    document.getElementById("message").value = "";
    postCount = 0;
}