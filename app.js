let players = [];

function getName(node) {
    const name = node.parentNode.parentNode.children[0].innerText;
    players.push(name);
    console.log(players);
    setName();
}
function setName() {
    const ol = document.getElementById('ordered-list');
    ol.innerHTML = '';
    for (const player of players) {
        const div = document.createElement('div');
        div.innerHTML = `
    <li class="font-semibold tracking-wide text-lg text-gray-300 pt-5">
        ${player}
    </li>
    `
        ol.appendChild(div)
    }
}
