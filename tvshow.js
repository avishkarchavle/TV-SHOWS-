const form = document.querySelector('#searchform')
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const searchterm = form.elements.query.value;
    const config = { params: { q: searchterm } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows?`, config);
    console.log(res.data);
    makeimages(res.data);
})
const makeimages = (shows) => {
    for (result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}