const imgs = document.querySelectorAll('.header-slider ul img');
const prev_button = document.querySelectorAll('.control_prev');
const next_button = document.querySelectorAll('.control_next');

let n = 0;

function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';


}
 
    changeSlide();

    prev_button.addEventListener('click',() => {

        if (n > 0) {
            n--;
        } else {
            n = imgs.length - 1;
        }
        changeSlide();
    })

    next_button.addEventListener('click',(e) => {

        if (n < imgs.length - 1 ) {
            n++;
        } else {
            n = 0;
        }
        changeSlide();
    })

    const ScrollContainer = document. querySelectorAll('.products');
    for (const item of ScrollContainer) {
        item.addEventListener('Wheel' , (evt)=>{
            evt.preventDefault();
            item.scrollLeft += evt.deltaY;
            });
            
        }
    


   
