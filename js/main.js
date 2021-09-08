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
            item.style.display = "none";

            if ((item.className.match(dataId) || (dataId === "all"))) {
                item.style.display = "flex";
            }
        });
    });
});