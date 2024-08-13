const dsaConcepts = [
    {
        id: 1,
        topic: 'Searching',
        color: 'linear-gradient(180deg, #4CAF97 0%, #51C6AB 100%)'
    },
    {
        id: 2,
        topic: 'Sorting',
        color: 'linear-gradient(180deg, #5A5EB7 0%, #7075EA 100%)'
    },
    {
        id: 3,
        topic: 'Stack',
        color: 'linear-gradient(180deg, #AF6160 0%, #CA8A89 100%)'
    },
    {
        id: 4,
        topic: 'Queue',
        color: 'linear-gradient(180deg, #674A98 0%, #A594C3 100%)'
    },
    {
        id: 5,
        topic: 'LinkedList',
        color: 'linear-gradient(180deg, rgb(37, 135, 156) 0%, rgb(84, 195, 219) 100%)'
    },
    {
        id: 6,
        topic: 'Tree',
        color: 'linear-gradient(180deg, rgb(69, 114, 182) 0%, rgb(120, 158, 218) 100%)'
    },
    {
        id: 7,
        topic: 'Graph',
        color: 'linear-gradient(180deg, rgb(204, 115, 62) 0%, rgb(234, 163, 120) 100%)'
    }
];

const dsaContainer = document.querySelector('.dsa-concepts-container');

dsaConcepts.forEach((concept) => {
    const itemCard = document.createElement('div');
    const itemLabel = document.createElement('label');
    const viewBtn = document.createElement('button');

    itemLabel.textContent = concept.topic;
    viewBtn.textContent = "View More"
    viewBtn.onclick = function() {
        window.location.href = concept.topic;
    };
    viewBtn.classList.add('view-more-btn');

    itemCard.style.background = concept.color;
    itemCard.style.color = 'white';

    itemCard.appendChild(itemLabel);
    itemCard.appendChild(viewBtn);
    dsaContainer.appendChild(itemCard);
});
