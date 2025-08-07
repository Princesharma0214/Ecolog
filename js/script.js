
window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const itemKey = params.get("item");
    const contentDiv = document.getElementById("journey-content");

    if (!itemKey || !wasteItems[itemKey]) {
        contentDiv.innerHTML = "<p>Item not found. Go back to homepage.</p>";
        return;
    }

    const item = wasteItems[itemKey];
    const html = `
        <h2>${item.name}</h2>
        <h3>🧭 Lifecycle</h3>
        <ol>${item.lifecycle.map(stage => `<li>${stage}</li>`).join('')}</ol>
        <h3>📌 Did You Know?</h3>
        <p>${item.fact}</p>
        <h3>🌱 Eco Tips</h3>
        <ul>${item.tips.map(tip => `<li>${tip}</li>`).join('')}</ul>
    `;
    contentDiv.innerHTML = html;
};
