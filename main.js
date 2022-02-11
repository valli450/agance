function select(n){
    console.log(n.id);
    const list = ['about', 'service', 'project', 'contact'];
    list.forEach(element => {
        if(element === n.id){
            console.log("selected")
            n.classList.toggle("selected");
        }else{
            document.querySelector(`.${element}`).classList.remove("selected");
        }
    })
    
}

function more(){
    document.querySelector('.header_list').classList.toggle('show');
}