function Numgen() {
    var num = Math.floor(Math.random() * 100);
    return num;
}


function getnewcard() {
    let randompost = Numgen();
    fetch('http://localhost:8000/userPostAPI?postid=' + randompost)
        .then((response) => response.json())
        .then(function (json) {
            console.log(json);

            addCard(json.data);

        });
}
function addCard(post) {
    const template = document.getElementById('card-template').content.cloneNode(true);
    template.querySelector('.card-title').innerText = post.title;
    template.querySelector('.card-img-top').src = 'https://source.unsplash.com/random/800x800/?img=4';
    template.querySelector('.card-text').innerText = post.body;
    document.querySelector('#card-list').appendChild(template);
}

















