let content1 = document.querySelector(".modal");
let content2 = document.querySelector(".overlay");

function openModal(){
    console.log("Open modal");
    content1.classList.add("active");
    content2.classList.add("overlayactive");
};
openModal()

function closeModal() {
    console.log("Close Model")
    content1.classList.remove("active")
    content2.classList.remove("overlayactive")
}
closeModal()
