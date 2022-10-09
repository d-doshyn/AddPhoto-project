let modalTrigger = document.querySelector('.consultation.modal-opener');
let modalContainer = document.querySelector('.modal-review-container');
let modalCloser = document.querySelector('.close-modal-mind');

modalTrigger.onclick = () => {
    modalContainer.style.display = "flex";
}

modalCloser.onclick = () => {
    modalContainer.style.display = "none";
}