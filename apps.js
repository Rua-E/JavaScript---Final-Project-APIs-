function submit(event) {
    event.preventDefault();
    const loading = document.querySelector(".spinner__overlay--loading");
    loading.classList += " spinner__overlay--visible"
    setTimeout(() => {
    }, 500);
 }