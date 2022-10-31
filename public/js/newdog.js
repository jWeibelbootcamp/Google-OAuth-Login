const newDogHandler = async function(event) {
    event.preventDefault();

    const name = document.querySelector('input[name="dog-name"]').value;
    const breed = document.querySelector('input[name="dog-breed"]').value;
    const sex = document.querySelector('select[name="dog-sex"]').value;
    const age = document.querySelector('input[name="dog-age"]').value;
    const weight = document.querySelector('input[name="dog-weight"]').value;
    const vet = document.querySelector('input[name="dog-vet"]').value;
    const conditions = document.querySelector('textarea[name="dog-conditions"]').value;

    await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({
            name,
            breed,
            sex,
            age,
            weight,
            vet,
            conditions,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    document.location.replace('/dashboard');
};

document
    .querySelector('#new-dog-form')
    .addEventListener('submit', newDogHandler);