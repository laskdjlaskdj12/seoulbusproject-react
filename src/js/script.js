function check_password(e) {
    //dom에서 비밀번호 텍스트파일와 비밀번호 체크 텍스트 파일이 일치하지 않으면 fail
    e.preventDefault()

    let password = document.getElementById('password_text').value
    let password_check = document.getElementById('password_check_text').value

    if (password !== password_check) {
        document.getElementById('check').innerHTML = "비밀번호가 일치하지 않습니다."
        document.getElementById('check').style.color = "red";
    } else {
        document.getElementById('check').innerHTML = "비밀번호가 일치합니다.";
        document.getElementById('check').style.color = "black";
    }
}