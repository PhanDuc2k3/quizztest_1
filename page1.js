function changeText(){
    document.getElementById("demo").innerHTML = "Hello duc"
}

function showConfirmation() {
    // Hiển thị popup
    document.getElementById("confirmationPopup").style.display = "block";
    
    // Tự động đóng popup sau 3 giây
    setTimeout(function() {
        // Ẩn popup
        document.getElementById("confirmationPopup").style.display = "none";
    }, 3000); // 3000 miligiây = 3 giây
}

function moveButton() {
    // Lấy phần tử nút
    var button = document.getElementById("moveButton");
    
    // Tạo một vị trí mới ngẫu nhiên
    var newX = Math.floor(Math.random() * (window.innerWidth - button.offsetWidth));
    var newY = Math.floor(Math.random() * 300);
    
    // Kiểm tra vị trí mới có vượt quá giới hạn không
    if (newY < 0) {
        newY = 0;
    } else if (newY + button.offsetHeight > window.innerHeight) {
        newY = window.innerHeight - button.offsetHeight;
    }

    if (newX < 0) {
        newX = 0;
    } else if (newX + button.offsetWidth > window.innerWidth) {
        newX = window.innerWidth - button.offsetWidth;
    }
    // Thiết lập vị trí mới cho nút
    button.style.transform = "translate(" + newX + "px, " + newY + "px)";
}
