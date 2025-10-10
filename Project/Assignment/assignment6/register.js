window.onload = pageLoad;

function pageLoad(){
    document.getElementById("myRegister").onsubmit = validateForm;
}

function validateForm() {
    var form = document.forms["myRegister"];
    
    var firstName = form["firstname"].value;
    var lastName = form["lastname"].value;
    var gender = form["gender"].value;
    var bDay = form["bday"].value;
    var email = form["email"].value;
    var userName = form["username"].value;
    var password = form["password"][0].value;
    var rePassword = form["password"][1].value;

    if (password !== rePassword) {
        document.getElementById("errormsg").innerHTML = "รหัสผ่านไม่ตรงกันค้าบ";
        return false;
    }

    if (!firstName) {
        document.getElementById("errormsg").innerHTML = "ใส่ชื่อหน่อยค้าบ";
        return false;
    } 
    else if (!lastName) {
        document.getElementById("errormsg").innerHTML = "ใส่นามสกุลหน่อยค้าบ";
        return false;
    }
    else if (!gender) {
        document.getElementById("errormsg").innerHTML = "กรอกเพศหน่อยค้าบ";
        return false;
    }
    else if (!bDay) {
        document.getElementById("errormsg").innerHTML = "กรอกวันเกิดหน่อยค้าบ";
        return false;
    }
    else if (!email) {
        document.getElementById("errormsg").innerHTML = "กรอกเมลหน่อยค้าบ";
        return false;
    }
    else if (!userName) {
        document.getElementById("errormsg").innerHTML = "กรอกชื่อUserหน่อยค้าบ";
        return false;
    }
    else if (!password) {
        document.getElementById("errormsg").innerHTML = "กรอกรหัสหน่อยค้าบ";
        return false;
    }

    return true;
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}