let currentCategoryId = null;

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
    currentCategoryId = categoryId;
    const data = categoriesData[categoryId];
    document.getElementById('category-title-bar').innerText = data.title;
    
    const container = document.getElementById('exercises-container');
    container.innerHTML = '';

    data.exercises.forEach((ex) => {
        const item = document.createElement('div');
        item.className = 'exercise-item';
        item.innerHTML = `
            <div class="exercise-content">
                <h3>${ex.nameAr}</h3>
                <p>${ex.nameFr}</p>
            </div>
            <button class="progress-btn" onclick="openProgressRouter('${ex.id}', '${ex.nameAr}', '${ex.metricType}')">
                📈 التقدم
            </button>
        `;
        container.appendChild(item);
    });

    showScreen('detail-screen');
}

// نقطة التوجيه المركزية نحو مجلد التقدم الجديد
function openProgressRouter(exId, exName, metricType) {
    // حفظ بيانات التمرين ونوع القياس في الذاكرة المؤقتة
    localStorage.setItem('current_ex_id', exId);
    localStorage.setItem('current_ex_name', exName);
    localStorage.setItem('current_metric_type', metricType);

    // الانتقال إلى ملف التوجيه المركزي في مجلد 2-progress
    window.location.href = '../2-progress/progress.html';
}
