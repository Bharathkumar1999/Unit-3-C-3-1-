function append(){
    let data = JSON.parse(localStorage.getItem("form")) || [];
    let container= document.getElementById("wallet_balance");
    container.innerHTML=null;


    data.forEach(function(el,index){
        let div = document.createElement('div');
        let h2= document.createElement('name');
        h2.src=el.name;
        let p=document.createElement('amount');
        p.innerText=el.amount;
        let btn = document.createElement('button');
        btn.innerText="Remove";
        btn.addEventListener("click",function(){
            remove(index);
        })
        // btn.setAttribute("click",function(index){
        //     remove(index);
        // });
        //console.log(el);
        div.append(h2,p,btn);
        container.append(div);
    });

    //let div = document.createElement('div');
}

append();

function remove(index){
    let data= JSON.parse(localStorage.getItem("wallet_balance")) || [];
    //console.log(index);

    let newData= data.filter(function(el,i){
        if(i===index){
            let trash= JSON.parse(localStorage.getItem("trash")) || [];
            trash.push(el);
            localStorage.setItem("trash",JSON.stringify(trash));

        }else{
            return i !== index; 
        }
    //   let trash= JSON.parse(localStorage.getItem("trash")) || [];
    //   trash.push()
        //return i !== index;
    });

    localStorage.setItem("wallet_balance",JSON.stringify(newData));
    append();

    //console.log(newData);
}
