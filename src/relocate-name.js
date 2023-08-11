export const relocateName = () => {
    const name = document.body.querySelector('#my-name-wrapper');

    name.addEventListener('click', () => {
        document.body.querySelector('.my-name').classList.toggle('relocated');
        // document.body.querySelector('.my-name').classList.toggle('hidden');
        document.body.querySelector('.hello').classList.toggle('hidden');
        document.body.querySelector('.fullstack').classList.toggle('hidden');
        // document.body.querySelector('.hello').classList.toggle('flatten');
        // document.body.querySelector('.fullstack').classList.toggle('flatten');
    })
}