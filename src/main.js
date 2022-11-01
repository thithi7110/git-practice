
const init = () =>{

    const div = `
    <div>
        <button class="addElmButton">動的追加</button>
    </div>`;
    
    console.log(div);
    
    document.body.insertAdjacentHTML('beforeend',div);
    
}

init();

let count = 0;

const addElm =()=>{

    count++;
    const div = `
    <div class="container">
        <p>動的element${count}</p>
    </div>`;
    document.body.insertAdjacentHTML('beforeend',div);
}

document.querySelector(".addElmButton").addEventListener("click",addElm);