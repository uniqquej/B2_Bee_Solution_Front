// 로그아웃
function handleLogout(){
    localStorage.clear()
    window.location.replace("api.html")
}
const article_id = localStorage.getItem('article_id')

const main_url = "http://127.0.0.1:8000"

// 사진 미리보기
const fileInput = document.getElementById("file")
const handleFiles = (e) => {
    const fileReader = new FileReader()
    const selectedFile = fileInput.files;
    fileReader.readAsDataURL(selectedFile[0])
    fileReader.onload = function(){
        document.getElementById("previewImg").src = fileReader.result
    }
}
fileInput.addEventListener("change", handleFiles)

function printwise(){
    var wise = document.getElementById('wise').value
    console.log(typeof(wise))
    var slicing_wise = wise.split('/')
    console.log(slicing_wise)
    
    document.getElementById("result").innerText = slicing_wise[0]
    if(slicing_wise[1]){
        document.getElementById("result2").innerText = slicing_wise[1]    
    }
    if(slicing_wise[2]){
        document.getElementById("result3").innerText = slicing_wise[2]    
    }
    if(slicing_wise[3]){
        document.getElementById("result4").innerText = slicing_wise[3]    
    }
    if(slicing_wise[4]){
        document.getElementById("result5").innerText = slicing_wise[4]    
    }
}

function printnickname(){
    var nickname = document.getElementById("nickname").value
    document.getElementById("result_nickname").innerText = '- ' + nickname
}

async function handleUploadimg(){
    const img = document.querySelector('#file')
    const wise = document.getElementById('wise').value
    const nickname = document.getElementById('nickname').value

    console.log(img, wise, nickname)

    const formdata = new FormData()
    formdata.append('solution_image', img.files[0])
    formdata.append('wise', wise)
    formdata.append('nickname', nickname)

    const response = await fetch(`${main_url}/article/${article_id}/solution/`, {
        headers: { 
            'Authorization': 'Bearer '+ localStorage.getItem('access')
        },
        method: 'POST',
        body: formdata
    }).then(window.location.href = 'solution_detail.html')
}

fetch("./navbar.html").then(response=>{
    return response.text()
})
.then(data =>{
    document.querySelector("header").innerHTML = data
})