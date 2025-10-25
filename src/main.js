const mobileHeader = document.getElementById("mobile-header");
const filtersOverlay = document.getElementById("filters-overlay");

const toggleHeader = ()=>{
    mobileHeader.classList.toggle('hide-header')
    mobileHeader.classList.toggle('show-header')

    if(mobileHeader.classList.contains('show-header')){
        document.body.style.overflowY = 'clip';
    }else{
        document.body.style.overflowY = 'auto';
    }
}

const toggleFiltersPanel = ()=>{
    filtersOverlay.classList.toggle('hide-filters')
    filtersOverlay.classList.toggle('show-filters')

    if(filtersOverlay.classList.contains('show-filters')){
        document.body.style.overflowY = 'clip';
    }else{
        document.body.style.overflowY = 'auto';
    }
}

document.querySelectorAll('.collapsable').forEach(el => {
    el.querySelector('button.collapsable-toggler').addEventListener('click', ()=>{
        el.querySelector('.collapsable-content').classList.toggle('collapsable-hide');
        el.querySelector('.collapsable-content').classList.toggle('collapsable-show');
    })
})

document.querySelectorAll('.modal-overlay').forEach(overlay=>{
    overlay.addEventListener('click', ()=>{
        toggleModal(overlay.parentElement);
    })
})
document.querySelectorAll('.modal-toggle').forEach(toggle=>{
    const modalId = toggle.getAttribute('data-modal-id');
    toggle.addEventListener('click', ()=>{
        toggleModal(document.getElementById(modalId));
    })
})
const toggleModal = (modalEl) => {
    const modal = modalEl;
    modal.classList.toggle('modal-hide');
    if(!modal.classList.contains('modal-hide')){
        document.body.style.overflowY = 'clip';
    }else{
        document.body.style.overflowY = 'auto';
    }
}

document.querySelectorAll('.accordion').forEach(el => {
    el.querySelector('button.accordion-toggler').addEventListener('click', ()=>{
        el.querySelector('.accordion-content').classList.toggle('hide');
        el.querySelector('.accordion-content').classList.toggle('show');
    })
})

document.querySelectorAll('.readmore').forEach(el => {
    el.querySelector('button.readmore-toggler').addEventListener('click', ()=>{
        el.classList.toggle('show');
    })
})