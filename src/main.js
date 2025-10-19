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

document.querySelectorAll('.modal-toggle').forEach(toggle=>{
    const modalId = toggle.getAttribute('data-modal-id');
    toggle.addEventListener('click', ()=>{
        document.getElementById(modalId).classList.toggle('hidden');
        document.getElementById(modalId).classList.toggle('flex');
    })
})