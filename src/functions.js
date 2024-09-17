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
const createMinedBoard = (rows, columns, minesAmount) => {
    const board = creatBoard(rows, columns)
    spreadMines(board, minesAmount)
    return board
}

//Clonar um tabuleiro
const cloneBoard = board => {
    return board.map(rows => {
        return rows.map(field => {
            return { ...field }
        })
    })
}

//Verificar os vizinhos
const getNeighbors = (board, row, column) => {
    const neighbors = []
    const rows = [row - 1, row, row + 1]
    const columns = [column - 1, column, column + 1]
    rows.forEach(r => {
        columns.forEach(c => {
            const diferent = r !== row || c !== column
            const validRow = r >= 0 && r < board.length
            const validColumn = c >= 0 && c < board[0].length
            if (diferent && validRow && validColumn) {
                neighbors.push(board[r][c])
            }

        })
    })
    return neighbors
}

//verificar se os vizinhos são seguros
const safeNeighborhood = (board, row, column) => {
    const safes = (result, neighbor) => result && !neighbor.mined
    return getNeighbors(board, row, column).reduce(safes, true)
}

//função para abrir um campo
const openField = (board, row, column) => {
    const field = board[row][column]
    if (!field.opened) {
        field.opened = true
        if (field.mined) {
            field.exploded = true
        } else if (safeNeighborhood(board, row, column)) {
            getNeighbors(board, row, column)
                .forEach(n => openField(board, n.row, n.column))
        } else {
            const neighbors = getNeighbors(board, row, column)
            field.nearMines = neighbors.filter(n => n.mined).length
        }
    }
}

//concatenando uma matriz em um novo array
const fields = board => [].concat(...board)

//verificar se há campo explodido
const hadExplosion = board => fields(board)
    .filter(field => field.exploded).length > 0

//verificar campos pendentes para retornar fim do jogo
const pendding = field => (field.mined && !field.flagged)
    || (!field.mined && !field.opened)
const wonGame = board => fields(board).filter(pendding).length === 0

//mostrar as minas no tabuleiro
const showMines = board => fields(board).filter(field => field.mined)
    .forEach(field => field.opened = true)

export {
    createMinedBoard,
    cloneBoard,
    openField,
    hadExplosion,
    wonGame,
    showMines
}