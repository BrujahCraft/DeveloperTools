function startBlock(container) {
    const start = document.createElement('div');
    start.classList.add('cardTableStart');
    const startTitle = document.createElement('h1');
    startTitle.classList.add('cardTableStartTitle');
    startTitle.textContent = 'Выбери сложность'
    const difficultyLevel = document.createElement('div');
    difficultyLevel.classList.add('cardTableStartDifficulty');
    const difficultyLevelLow = document.createElement('div');
    difficultyLevelLow.classList.add('cardTableStartDifficultyLevel');
    difficultyLevelLow.textContent = '1'
    difficultyLevelLow.setAttribute("data-level", "low");
    const difficultyLevelMedium = document.createElement('div');
    difficultyLevelMedium.classList.add('cardTableStartDifficultyLevel');
    difficultyLevelMedium.textContent = '2'
    difficultyLevelMedium.setAttribute("data-level", "medium");
    const difficultyLevelHard = document.createElement('div');
    difficultyLevelHard.classList.add('cardTableStartDifficultyLevel');
    difficultyLevelHard.textContent = '3'
    difficultyLevelHard.setAttribute("data-level", "hard");
    const difficultyButton = document.createElement('button');
    difficultyButton.classList.add('cardTableStartDifficultyButton');
    difficultyButton.textContent = 'Старт'
    container.append(
        start,
    );
    start.append(
        startTitle,
        difficultyLevel,
        difficultyButton,
    );
    difficultyLevel.append(
        difficultyLevelLow,
        difficultyLevelMedium,
        difficultyLevelHard,
    );
    difficultyButton.addEventListener('click', (event) => {
        event.preventDefault();
        window.application.screens['cardTable'] = beginningOfTheGameScreen;
        window.application.renderScreen('cardTable');
    });
};
function beginningOfTheGameBlock(container) {
    const cardTableBegin = document.createElement('div');
    cardTableBegin.classList.add('cardTableBegin');
    const cardTableBeginTop = document.createElement('div');
    cardTableBeginTop.classList.add('cardTableBeginTop');
    const cardTableBeginCards = document.createElement('div');
    cardTableBeginCards.classList.add('cardTableBeginCards');

    const cardTableBeginTopLabel = document.createElement('div');
    cardTableBeginTopLabel.classList.add('cardTableBeginTopLabel');
    const cardTableBeginTopTimer = document.createElement('div');
    cardTableBeginTopTimer.classList.add('cardTableBeginTopTimer');
    const cardTableBeginTopTimerSec = document.createElement('div');
    cardTableBeginTopTimerSec.classList.add('cardTableBeginTopTimerSec');
    cardTableBeginTopTimerSec.textContent = 'sec';
    const cardTableBeginTopTimerMin = document.createElement('div');
    cardTableBeginTopTimerMin.classList.add('cardTableBeginTopTimerMin');
    cardTableBeginTopTimerMin.textContent = 'min';
    const cardTableBeginTopTimerCounter = document.createElement('div');
    cardTableBeginTopTimerCounter.classList.add('cardTableBeginTopTimerCounter');
    cardTableBeginTopTimerCounter.textContent = '00.00';

    const cardTableBeginTopButton = document.createElement('button');
    cardTableBeginTopButton.classList.add('cardTableBeginTopButton');
    cardTableBeginTopButton.textContent = 'Начать заново'
    container.append(
        cardTableBegin,
    );
    cardTableBegin.append(
        cardTableBeginTopLabel,
        cardTableBeginTop,
        cardTableBeginCards,
    );
    cardTableBeginTop.append(
        cardTableBeginTopTimer,
        cardTableBeginTopButton,
    );
    cardTableBeginTopLabel.append(
        cardTableBeginTopTimerMin,
        cardTableBeginTopTimerSec,
    );
    cardTableBeginTopTimer.append(
        cardTableBeginTopTimerCounter,
    );
    for (let i = 1; i <= 36; i++) {
        let nameCard = `card${i}`;
        let nameShirt = `shirt${i}`;
        nameCard = document.createElement('div');
        nameCard.classList.add('cardTableBeginCardsItem', 'eagle', 'quality', 'suit');
        nameCard.setAttribute("data-cardNumber", `${i}`);
        nameShirt = document.createElement('div');
        nameShirt.classList.add('cardTableBeginCardsShirt');    
        cardTableBeginCards.append(
            nameCard,
        );
        nameCard.append(
            nameShirt,
        );    
    }
    cardTableBeginCards.addEventListener('click', (event) => {
        const target = event.target;
        if (!(target.classList.contains('cardTableBeginCardsItem'))) {
            return;
        }
    });
}