

const url="https://masai-vouchers-api.herokuapp.com/api/vouchers";

let submit = async () =>{
//async function getData(){

    try{
        let res= await fetch(url);

        let users= await res.json();
        append(users)


    } catch(err){
        console.log(err);
    }
}

submit();


function append(data){
    let container=document.getElementById("form");
    data.forEach(function(el){
        let h3=document.createElement("name");
        h3.src=el.name;
        let h2=document.createElement("email");
        h2.src=el.email;
        let p=document.createElement("address");
        p.src=el.address;
        let h1=document.createElement("amount");
        h1.src=el.amount;

        div=document.createElement("div");
        div.append(h3,h2,p,h1);

        container.append(div);

        localStorage.setItem("user",JSON.stringify(video));

    })
}