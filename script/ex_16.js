domIsReady(() => {
    $("input").onchange = function(e) {
        let read = new FileReader();
        read.readAsBinaryString(e.target.files[0]);
        read.onloadend = function() {
            const fileType = e.target.files[0].type;
            alert("Type of file: " + fileType);
            if(fileType === "text/plain") {
                $(".content_display").innerText = read.result;
            } else if(fileType === "image/jpeg" || fileType === "image/png") {
                $(".content_display").innerHTML = "<img alt='user_image' width='640px' src='data:" + fileType + ";base64," + btoa(read.result) + "' />";
            }
        }
    }
})