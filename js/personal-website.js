window.onload = function(){
    const navItemList = Array.from(document.querySelectorAll('.nav-item'));
    const pageList = Array.from(document.querySelectorAll('.card'));
    const contactInfoList = Array.from(document.querySelectorAll('.contact-info'));
    
    function navAdd () {
        navItemList.forEach((item) => {
            item.addEventListener('click', function(e){
                navItemList.forEach((navItem)=>{
                    navItem.classList.remove('active');
                })
                e.target.classList.add('active');
                pageList.forEach((page)=> page.classList.remove('current-page'));
                let pageName = e.target.textContent.toLowerCase().trim();
                let page = document.querySelector(`.${pageName}`);
                page.classList.add('current-page');
            });
        });
    }

    function contactSubmit () {
        const contactSubmit = document.querySelector('.contact-submit')
        contactSubmit.addEventListener('click', function() {
            alert('Hello World!');
        });
    }

    function contactInfo () {
        contactInfoList.forEach((item) => {
            item.addEventListener('input', function(e){
                let input = e.target;
                let alert = document.querySelector(`.${input.id}-alert`);
                let label = document.querySelector(`[for=${input.id}]`);
                console.log(label);
                if(input.value.length === 0){
                    alert.classList.remove('empty');
                    label.classList.remove('hoist');
                }else{
                    alert.classList.add('empty');
                    label.classList.add('hoist');
                    console.log(label);
                }
            });
        });
    }


    navAdd();
    contactSubmit();
    contactInfo ();
}




