let handlerefresh=()=>{
    let inputfiled=document.getElementById("inputfield");
    inputfiled.value="";
}

let handlSubmit=()=>{
    let inputfiled=document.getElementById("inputfield").value;
    let displaytext=document.getElementById("firstInput");
    console.log(inputfiled);
    if(inputfiled.length>6){
        console.log("Wrong");
    }
    else{
        displaytext.textContent="";
        let res=fetch("http://localhost:8081/api/codes")
        .then(res=>res.json())
        .then(json=>{
            json.Alldata.map((elem,index)=>{
                let p1=document.createElement("p");
                p1.textContent=elem.data;
                displaytext.append(p1);
            })
        })
    }

    
}

let refresh=document.getElementById("refresh");
refresh.addEventListener("click",handlerefresh);

let submitBTN=document.getElementById("submitbtn")
submitBTN.addEventListener("click",handlSubmit);




