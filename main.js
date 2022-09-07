function notifi({ title, message, type, icon }) {
    const main = document.querySelector('.wrapper-ntf');
    if(main) {
        var toast = document.createElement('div');
        toast.classList.add('ntf-item', `${type}`);

        var autoRemoveToast = setTimeout(() => {
            main.removeChild(toast);
        }, 5000);

        toast.onclick = (e) => {
            if (e.target.closest('.ntf-closed')){
                main.removeChild(toast);
                clearTimeout(autoRemoveToast);
            }
        }

        toast.innerHTML = `
            <div class="ntf-header">
            <i class="${icon}"></i>
            </div>
            <div class="ntf-body">
                <div class="ntf-background">
                    <div class="ellipse-1"></div>
                    <div class="ellipse-1--children"></div>
                    <div class="ellipse-2"></div>
                    <div class="ellipse-2--children"></div>
                    <div class="ellipse-3"></div>
                    <div class="ellipse-4"></div>
                </div>
                <div class="ntf-info">
                    <h1 class="ntf-title">${title}</h1>
                    <p class="ntf-content">${message}</p>
                </div>
                <div class="ntf-closed">
                    <i class="fas fa-times"></i>
                </div>
            </div>
            <div class="ntf-time"></div>
        `;
    }
    main.appendChild(toast);
}


function btnSuccess() {
    notifi({
        title: 'Well done!',
        message: 'You successfully read this important message.',
        type: 'success',
        icon: 'fas fa-check',
    })
}


function btnWarning() {
    notifi({
        title: 'Warning!',
        message: 'Sorry! There was a problem with your request.',
        type: 'warning',
        icon: 'fas fa-exclamation',
    })
}

function btnError() {
    notifi({
        title: 'Oh snap!',
        message: 'Change a few things up and try submitting again.',
        type: 'error',
        icon: 'fas fa-bug',
    })
}


function btnHelp() {
    notifi({
        title: 'Hi there!',
        message: 'Do you have a problem? Just use this contact form',
        type: 'help',
        icon: 'fas fa-question',
    })
}