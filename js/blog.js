const filterButtons = document.querySelectorAll(".filter-btn");
const card = document.querySelectorAll(".blog-card");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        card.forEach(card => {
            const categories = card.dataset.category.split(" ");

            if (filter === "all" || categories.includes(filter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

    });
});

/*PAGINATION*/

const cards = [...document.querySelectorAll(".blog-card")];
const paginationContainer = document.querySelector(".pagination");
const pageButtons = document.querySelectorAll(".page-btn[data-page]");

const articlesPerPage = 9;
let currentPage = 1;

function showPage(page) {
    currentPage = page;

    const start = (page - 1) * articlesPerPage;
    const end = start + articlesPerPage;

    cards.forEach((card, index) => {
        card.style.display = index >= start && index < end ? "block" : "none";
    });

    // Active button
    pageButtons.forEach(btn => {
        btn.classList.toggle("active", Number(btn.dataset.page) === page);
    });
}

// Click on page number
pageButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        showPage(Number(btn.dataset.page));
    });
});

// Prev / Next
document.querySelector(".prev").addEventListener("click", () => {
    if (currentPage > 1) showPage(currentPage - 1);
});

document.querySelector(".next").addEventListener("click", () => {
    if (currentPage < pageButtons.length) showPage(currentPage + 1);
});

// Init
showPage(1);



document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {

        
        if (document.querySelector('.active').dataset.filter === "all") {
            document.querySelector('.pagination').classList.remove('display-none')
            document.querySelector('.pagination').classList.add('display-block')
           showPage(1);
        }
        else {
            document.querySelector('.pagination').classList.add('display-none')
            document.querySelector('.pagination').classList.remove('display-block')
           
        }
    });
});


