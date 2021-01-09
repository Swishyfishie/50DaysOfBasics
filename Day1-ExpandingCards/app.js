const cards = document.querySelectorAll(".panel")
const getItBtns = document.querySelectorAll("BUTTON")
cards.forEach(e=>{
    e.className = "panel"
    e.addEventListener("click", expand)
})

function expand(e){
    if(e.target.className === "getBtn"){
        activateModal(e);
    } else {
        checkIfExpanded()
        if(e.target.className === "panel active"){
            e.target.className = "panel"
        } else if (e.target.className === "panel"){
            e.target.className = "panel active"
        }
    }

}

function checkIfExpanded(){
    cards.forEach(e=>{
        if(e.className === "panel active"){
            e.className = "panel"
            e.childNodes[5].style.opacity = "0";
        }
    })
}

function activateModal(e){

    e.target.parentElement.innerHTML += `
        <div style="opacity:1;">
            <form>
                <label for="email">Enter your Email
                <input type="email name="email" id="email">
                <button type="submit" onSubmit=modalSubmit(e) id="submitForm">Submit</button>
            </form>
            <p>Relax and just wait for our automated spaceships to teleport you to this location.</p>
        </div>
    `;
}

function modalSubmit(e){
    alert("Your booking is completed.")
    e.preventDefault();
}