let url = 'https://sf-pyw.mosyag.in'

const voteCat = document.getElementById('cat')
const voteParrot = document.getElementById('parrot')
const voteDog = document.getElementById('dog')
const resultShow = document.getElementById('results')

function showElement () {
    resultShow.style.display = '';
}


voteCat.onclick = function voteForCat() {
    fetch(url + "/sse/vote/cats", {method: 'post'});
    showElement ();
        }
       
voteParrot.onclick = function voteForParrot() {
    fetch(url + "/sse/vote/parrots", {method: 'post'});
    showElement ();
        }
       
voteDog.onclick = function voteForDog() {
    fetch(url + "/sse/vote/dogs", {method: 'post'});
    showElement ();
        }
       


