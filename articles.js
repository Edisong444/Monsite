document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("searchForm");
    const input = document.getElementById("searchInput");
    const btn = document.getElementById("searchBtn");
    const cards = document.querySelectorAll(".article-card");

    // BLOQUE TOUT RELOAD
    form.addEventListener("submit", e => e.preventDefault());

    function filterCards() {
        const value = input.value.toLowerCase().trim();

        cards.forEach(card => {
            const category = card.dataset.category.toLowerCase();
            const label = card.querySelector(".article-text").innerText.toLowerCase();

            if (
                value === "" ||
                category.includes(value) ||
                label.includes(value)
            ) {
                card.parentElement.style.display = "flex";
            } else {
                card.parentElement.style.display = "none";
            }
        });
    }

    btn.addEventListener("click", filterCards);

    input.addEventListener("keyup", e => {
        if (e.key === "Enter") {
            filterCards();
        }
    });

});
