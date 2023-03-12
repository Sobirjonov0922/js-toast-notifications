let notifications = document.querySelector('.notifications'),
  btns = document.querySelectorAll('.btn')

const toastDetails = {
  timer: 3500,
  success: {
    icon: "fa-circle-check",
    text: "Success: This is a success toast."
  },
  error: {
    icon: "fa-circle-xmark",
    text: "Error: This is an error toast."
  },
  warning: {
    icon: "fa-triangle-exclamation",
    text: "Warning: This is a warning toast."
  },
  info: {
    icon: "fa-circle-info",
    text: "Info: This is an information toast."
  }
}

let createToast = (id) => {
  const {
    icon,
    text
  } = toastDetails[id]
  let toast = document.createElement('li')

  toast.className = `toast ${id}`
  toast.innerHTML = `
    <div class="column">
      <i class="fa-solid ${icon} icon"></i>
      <span class="span">${text}</span>
    </div>
    <i class="fa-solid fa-xmark times" onclick="removeToast(this.parentElement)"></i>
  `
  notifications.append(toast)
  toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
}
let removeToast = (toast) => {
  toast.classList.add("hide")
  setTimeout(() => toast.remove(), 500);

  if (toast.timeoutId) {
    clearTimeout(toast.timeoutId)
  }
}

btns.forEach(btn => {
  btn.addEventListener('click', () => createToast(btn.id))
})