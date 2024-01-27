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
        displaydata(json.Alldata);
    }
    catch (error) {
        console.log('Error during GET request:',error);
    }
}
let displaydata=(data)=>{
    document.getElementById("firstInput").textContent="";
    data.map((elem,index)=>{
        let div1=document.createElement("p");
        div1.textContent=elem.data;
        // console.log(elem);
        document.getElementById("firstInput").append(div1);
    })
}

let checkdata=(data)=>{
    data=data.toString();
    let n=data.length;
    // console.log(typeof(a));
    let flag=true;
    for(let i=0;i<n;i++){
        if(!((data.charCodeAt(i) >= 48 && data.charCodeAt(i) <= 57) || 
             (data.charCodeAt(i) >= 65 && data.charCodeAt(i) <= 90) ||  
             (data.charCodeAt(i) >= 97 && data.charCodeAt(i) <= 122))) {
            flag=false;
            break;
        }
    }
    if(flag){
        return true;
    }
    else{
        return false;
    }
}

let handlerefresh=()=>{
    let inputfiled=document.getElementById("inputfield");
    inputfiled.value="";
    getdata();
}

let handlSubmit=()=>{
    let inputfiled=document.getElementById("inputfield").value;
    let displaytext=document.getElementById("firstInput");
    // console.log(inputfiled);
    if(inputfiled.length>6 || inputfiled.length<4){
        // console.log("Enter a valid code");
        // console.log(inputfiled.length);
        displaytext.textContent="Enter a valid code";
    }
    else{
        let flag=checkdata(inputfiled);
        // console.log(inputfiled);
        if(flag){
            postData(inputfiled);
            getdata();
        }
        else{
            displaytext.textContent="Enter a valid code";
        }
    }
}

let refresh=document.getElementById("refresh");
refresh.addEventListener("click",handlerefresh);

let submitBTN=document.getElementById("submitbtn")
submitBTN.addEventListener("click",handlSubmit);




