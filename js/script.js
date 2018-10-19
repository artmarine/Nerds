ymaps.ready(init);

        function init(){
            var myMap = new ymaps.Map("Map", {
                center: [55.76, 37.64],
                zoom: 7
            });

            var myPlacemark = new ymaps.Placemark([55.76, 37.64], {
                hintContent: 'Содержимое всплывающей подсказки',
                balloonContent: 'Содержимое балуна'
            });

            myMap.geoObjects.add(myPlacemark);
        }

var link = document.querySelector(".contacts-write-btn");
var popup = document.querySelector(".feedback");
var form = popup.querySelector("form");
var close = document.querySelector(".close-btn");
var login = popup.querySelector("[name=user-name]");
var email = popup.querySelector("[name=e-mail]");
var content = popup.querySelector("[name=comment]");

var storage = "";
var isStorageSupport="true";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("feedback-show");

    if (storage) {
        login.value = storage;
        email.focus();
    } else {
        ligin.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("feedback-show");
    popup.classList.remove("feedback-error")
});

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (!login.value || !email.value || !content.value) {
        popup.classList.add("feedback-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
        }

    }
})

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("feedback-show")) {
            evt.preventDefault();
            popup.classList.remove("feedback-show");
        }
    }
})
