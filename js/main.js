// anchor
var anchors = document.querySelectorAll('.anchor');

anchors.forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);

        if (targetElement) {
            var offsetTop = targetElement.offsetTop;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});



// accordion 
let questionWrappers = document.getElementsByClassName("question_wrapper");
let answerWrapper = document.getElementsByClassName("answer");

for (let i = 0; i < questionWrappers.length; i++) {
    questionWrappers[i].addEventListener("click", function () {
        let dataAccordionValue = this.getAttribute("data-accordion");
        let dataAnswer = answerWrapper[i];

        // Проверка и закрытие всех ответов перед открытием текущего
        for (let j = 0; j < answerWrapper.length; j++) {
            answerWrapper[j].style.display = "none";
            questionWrappers[j].setAttribute("data-accordion", "true");
        }

        // Переключение значения атрибута data-accordion
        if (dataAccordionValue === "false") {
            this.setAttribute("data-accordion", "true");
        } else if (dataAccordionValue === "true") {
            this.setAttribute("data-accordion", "false");
        }

        // Показ/скрытие элемента answer в зависимости от значения атрибута data-accordion
        if (dataAccordionValue === "false") {
            dataAnswer.style.display = "block";
        } else if (dataAccordionValue === "true") {
            dataAnswer.style.display = "none";
        }
    });
}