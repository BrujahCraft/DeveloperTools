function startScreen() {
    cardTable.textContent = '';

    window.application.blocks['cardTable'] = startBlock;
    window.application.renderBlock('cardTable', cardTable);
}
window.application.screens['cardTable'] = startScreen;
window.application.renderScreen('cardTable');

function beginningOfTheGameScreen() {
    cardTable.textContent = '';

    window.application.blocks['cardTable'] = beginningOfTheGameBlock;
    window.application.renderBlock('cardTable', cardTable);
}