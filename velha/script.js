let flag = 1; 
const boxes = Array.from({ length: 9 }, (_, i) => document.getElementById(`b${i + 1}`));
const print = document.getElementById('print');

function checkWin(player) {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        if (pattern.every(index => boxes[index].value.toLowerCase() === player)) {
            return pattern;
        }
    }
    return null;
}

function handleBoxClick(index) {
    if (boxes[index].value) return;

    boxes[index].value = flag === 1 ? 'X' : '0';
    boxes[index].disabled = true;

    const winner = checkWin(flag === 1 ? 'x' : '0');
    if (winner) {
        print.innerHTML = `Jogador ${flag === 1 ? 'X' : '0'} chore`;
        winner.forEach(i => boxes[i].style.color = 'red');
        boxes.forEach(box => box.disabled = true);
    } else if (boxes.every(box => box.value)) {
        print.innerHTML = "Empate";
    } else {
        flag = 1 - flag;
        print.innerHTML = `Vez do Jogador ${flag === 1 ? 'X' : '0'}`;
    }
}

boxes.forEach((box, index) => {
    box.addEventListener('click', () => handleBoxClick(index));
});

function resetGame() {
    boxes.forEach(box => {
        box.value = '';
        box.disabled = false;
        box.style.color = '';
    });
    print.innerHTML = "Vez do Jogador X";
    flag = 1;
}

document.getElementById('reset').addEventListener('click', resetGame);
