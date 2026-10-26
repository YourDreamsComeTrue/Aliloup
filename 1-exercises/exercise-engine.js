function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    window.scrollTo(0, 0);
}

function goToHome() {
    showScreen('home-screen');
}

function goToMenu() {
    showScreen('menu-screen');
}

function openCategory(categoryId) {
    const data = categoriesData[categoryId];
    document.getElementById('category-title-bar').innerText = data.title;
    
    const container = document.getElementById('exercises-container');
    container.innerHTML = '';

    data.exercises.forEach((ex, index) => {
        const item = document.createElement('div');
        item.className = 'exercise-item';
        item.innerHTML = `
            <div class="exercise-content">
                <h3>${ex.nameAr}</h3>
                <p>${ex.nameFr}</p>
            </div>
            <button class="progress-btn" onclick="openProgress(${categoryId}, ${index})">
                📈 التقدم
            </button>
        `;
        container.appendChild(item);
    });

    showScreen('detail-screen');
}

function openProgress(catId, exIndex) {
    alert("خاصية التقدم لهذا التمرين سيتم تفعيلها لاحقاً.");
}

