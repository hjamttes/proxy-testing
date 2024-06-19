// script.js
document.addEventListener("DOMContentLoaded", function() {
    const completeLessonBtns = document.querySelectorAll(".complete-lesson-btn");
    completeLessonBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            // Add code to mark lesson as complete
            console.log("Lesson completed!");
        });
    });
});
