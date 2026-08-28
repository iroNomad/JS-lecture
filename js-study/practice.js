document.body.innerHTML = '<a href="https://www.naver.com">네이버링크</a>';

const link = document.querySelector('a');
link.addEventListener('click', event => {
    const isOk = confirm('정말로 이동하시겠습니까?');
    console.log(isOk);
    if (!isOK) {
        event.preventDefault();
    }
});