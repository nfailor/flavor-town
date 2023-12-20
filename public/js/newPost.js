const newPostFormHandler = async function(event) {
    event.preventDefault();

    const title = document.querySelector('#recipeName').value;
    const body = document.querySelector('#recipeContent').value;

    if (title && body) {
        await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({
                title,
                body,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        window.location.href = '/dashboard';
    }
};

document
    .querySelector('#newPostForm')
    .addEventListener('submit', newPostFormHandler);