const navItemList = Array.from(document.querySelectorAll('.nav-item'));
const pageList = Array.from(document.querySelectorAll('.card'));

const eventAdd = function(){
    navItemList.forEach((item) => {
        item.addEventListener('click', function(e){
            navItemList.forEach((navItem)=>{
                navItem.classList.remove('.active');
            })
            e.target.classList.add('.active');
            pageList.forEach((page)=> page.classList.remove('current-page'));
            let pageName = e.target.innerHTML.toLowerCase;
            let page = document.getElementById(`card-${pageName}`);
            page.classList.add('current-page');
        });
    })
}


