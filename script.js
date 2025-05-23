
async function loadPeople() {
    const response = await fetch('./data/people.json');
    const people = await response.json();
    const container = document.getElementById('tree-container');

    people.forEach(p => {
        const card = document.createElement('div');
        card.className = 'person-card';
        card.innerHTML = `<img src="./${p.photo}" alt="${p.name}"><h3>${p.name}</h3>`;
        card.onclick = () => showModal(p);
        container.appendChild(card);
    });
}

function showModal(p) {
    document.getElementById('modal-photo').src = `./${p.photo}`;
    document.getElementById('modal-name').textContent = p.name;
    document.getElementById('modal-birth').textContent = `Год рождения: ${p.birth}`;
    document.getElementById('modal-info').textContent = p.info;
    document.getElementById('person-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('person-modal').classList.add('hidden');
}

loadPeople();
