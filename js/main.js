let btns = document.querySelectorAll("*[data-modal-btn]");

btns.forEach((el)=>{
    el.addEventListener('click', ()=>{

        let name = el.getAttribute('data-modal-btn');
        let modal = document.querySelector("[data-modal-window='"+name+"']");
        modal.style.display = "block";
        let close = modal.querySelector(".close_modal_window");
        close.addEventListener('click', ()=>{
            modal.style.display = "none";
        })
    })
})

window.onclick = function(e){
    if (e.target.hasAttribute('data-modal-window')) {
        e.target.style.display = "none";
      }
}