let contrastTaggle = false;

function toggleContrast () {
    contrastTaggle = !contrastTaggle;
    if (contrastTaggle) {
        document.body.classList += " dark-theme";
    } 
    else {
        document.body.classList.remove("dark-theme");
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
            'service_3tcviyq',
            'template_66c7v07',
            event.target,
            'Koa2o85o7U8uItE5K'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email server is temporaly unavailable. Please contact me directly to i.imeguumi@gmail.com"
        );
    })
}

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal__open");
    }
    isModalOpen = true;
    document.body.classList += " modal__open";
}



