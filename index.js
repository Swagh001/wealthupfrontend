let postData = async (PostingData) => {
    try{
        const response = await fetch('http://localhost:8081/api/codes/use', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data: PostingData,
            }),
        });

        const json = await response.json();
        console.log(json);
    }
    catch (error) {
        console.error('Error during POST request:', error);
    }
};

let getdata=async()=>{
    try{
        const response = await fetch('http://localhost:8081/api/codes');

        const json = await response.json();
        console.log(json);
    }
    catch (error) {
        console.log('Error during GET request:',error);
    }
}


let handlerefresh=()=>{
    let inputfiled=document.getElementById("inputfield");
    inputfiled.value="";
}

let handlSubmit=()=>{
    let inputfiled=document.getElementById("inputfield").value;
    let displaytext=document.getElementById("firstInput");
    // console.log(inputfiled);
    if(inputfiled.length>6 || inputfiled.length<=0){
        // console.log("Enter a valid code");
        // console.log(inputfiled.length);
        displaytext.textContent="Enter a valid code";
    }
    else{
        // console.log(inputfiled);
        postData(inputfiled);
        getdata();
    }

    
}

let refresh=document.getElementById("refresh");
refresh.addEventListener("click",handlerefresh);

let submitBTN=document.getElementById("submitbtn")
submitBTN.addEventListener("click",handlSubmit);




