// نقطة التوجيه المركزية نحو مجلد التقدم الجديد
function openProgressRouter(exId, exName, metricType) {
    // حفظ بيانات التمرين ونوع القياس في الذاكرة المؤقتة
    localStorage.setItem('current_ex_id', exId);
    localStorage.setItem('current_ex_name', exName);
    localStorage.setItem('current_metric_type', metricType);

    // الانتقال إلى ملف التوجيه المركزي في مجلد 2-progress
    window.location.href = '../2-progress/progress.html';
}
