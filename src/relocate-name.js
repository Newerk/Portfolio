import _ from "lodash"

const name = document.body.querySelector('.my-name');
const hello = document.body.querySelector('.hello');
const fullstack = document.body.querySelector('.fullstack');
const header = document.body.querySelector('header');
const headerName = document.querySelector('.header-name');

const relocateName = () => {
    if (window.scrollY > 200) {
        console.log('name is in <header>')
        headerName.classList.remove('hidden');
        hello.classList.add('hidden');
        name.classList.add('hidden');
        fullstack.classList.add('hidden');
    }

    if (window.scrollY < 100) {
        console.log('name is in <main>')
        headerName.classList.add('hidden')
        hello.classList.remove('hidden');
        name.classList.remove('hidden');
        fullstack.classList.remove('hidden');

    }

}

export const checkScrollValue = () => {
    window.addEventListener('scroll', _.throttle(relocateName, 150))
};
