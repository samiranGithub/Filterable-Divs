const btns = document.querySelectorAll('.btn');
const items = document.querySelectorAll('.items');

btns.forEach(btn => {
    btn.addEventListener('click', function (e) {
        btns.forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');
        let dataId = e.currentTarget.dataset.id;
        items.forEach(item => {
            // item.classList.remove('active');
            item.style.display = "none";

            if ((item.className.match(dataId) || (dataId === "all"))) {
                // item.classList.add('active');
                item.style.display = "flex";
            }
        });
    });
});