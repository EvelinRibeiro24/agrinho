// Dados das plantas
const plantsData = [
    {
        id: "plant1",
        name: "Planta 1 - Exemplo",
        description: "Esta planta é uma das mais raras do Brasil, encontrada apenas em certas regiões da Mata Atlântica.",
        status: "Em Perigo",
        population: 50,
        img: "cafe.jpg"
    },
    {
        id: "plant2",
        name: "Planta 2 - Exemplo",
        description: "A planta é altamente ameaçada devido à destruição do habitat e coleta ilegal.",
        status: "Vulnerável",
        population: 200,
        img: "plant2.jpg"
    },
    {
        id: "plant3",
        name: "Planta 3 - Exemplo",
        description: "Com características exclusivas, esta planta é importante para a fauna local.",
        status: "Criticamente em Perigo",
        population: 20,
        img: "plant3.jpg"
    }
];

// Função para renderizar as plantas na página
function renderPlants() {
    plantsData.forEach(plant => {
        const plantCard = document.getElementById(plant.id);
        plantCard.querySelector('h2').textContent = plant.name;
        plantCard.querySelector('.description').textContent = plant.description;
        plantCard.querySelector('.status').textContent = `Status: ${plant.status}`;
        plantCard.querySelector('.statistics').textContent = `População estimada: ${plant.population} indivíduos`;
        plantCard.querySelector('img').src = plant.img;
    });
}

// Chama a função para renderizar as plantas
window.onload = renderPlants;
