// Cria uma matriz para o tabuleiro
const creatBoard = (rows, columns) => {
    return Array(rows).fill(0).map((_, row) => {
        return Array(rows).fill(0).map((_, column) => {
            return {
                row,
                column,
                opened: false,
                flagged: false,
                mined: false,
                exploded: false,
                mearMines: 0
            }
        })
    })
}

//Espalhar as minas no tabuleiro
const spreadMines = (board, minesAmount) => {
    const rows = board.length
    const columns = board[0].length
    let minesPlanted = 0

    while (minesPlanted < minesAmount) {
        const rowSel = parseInt(Math.random() * rows, 10)
        const columnSel = parseInt(Math.random() * columns, 10)

        if (!board[rowSel][columnSel].mined) {
            board[rowSel][columnSel].mined = true
            minesPlanted++
        }
    }
}

//Criar tabuleiro minado
const creatMinedBoard = (rows, columns, minesAmount) => {
    const board = creatBoard(rows, columns)
    spreadMines(board, minesAmount)
    return board
}

export { creatMinedBoard }