/**
 * @param {character[][]} board
 * @return {boolean}
 */

// Method 1:
/**
 * @param {character[][]} board
 * @return {boolean}
 */

// 这种方法比较好
var isValidSudoku1 = function(board) {
    let seen = new Set();
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let number = board[i][j];
            // 使用i / 3 + "-" + j / 3 得到对应第几行第几列的方块
            // 不用弄成一个数字, 例如第3个方块. 采用行列的形式更直观
            if (number != '.'){
                if (seen.has(number + " in row " + i)) {
                    return false;
                }else {
                    seen.add(number + " in row " + i);
                }

                if (seen.has(number + " in column " + j)) {
                    return false;
                }else {
                    seen.add(number + " in column " + j);
                }

                if (seen.has(number + " in block " + Math.floor(i / 3) + "-" + Math.floor(j / 3))) {
                    return false;
                }else {
                    seen.add(number + " in block " + Math.floor(i / 3) + "-" + Math.floor(j / 3));
                }
            }
        }
    }
    return true;
}

// 这种方法不容易记忆
var isValidSudoku = function(board) {
    for (let i = 0; i < board.length; i++) {
        let rows = new Set();
        let columns = new Set();
        let cube = new Set();
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] != "." && rows.has(board[i][j])) {
                return false;
            } else {
                rows.add(board[i][j]);
            }
            if (board[j][i] != "." && columns.has(board[j][i])) {
                return false;
            } else {
                columns.add(board[j][i]);
            }


            let rowIndex = 3 * Math.floor(i / 3);
            let colIndex = 3 * (i % 3);
            let newRow = rowIndex + Math.floor(j / 3);
            let newCol = colIndex + j % 3;

            if (board[newRow][newCol] != '.' && cube.has(board[newRow][newCol])){
                return false;
            } else {
                cube.add(board[newRow][newCol]);
            }

        }
    }
    return true;
};

let board =
    [[".",".",".",".","5",".",".","1","."],
        [".","4",".","3",".",".",".",".","."],
        [".",".",".",".",".","3",".",".","1"],
        ["8",".",".",".",".",".",".","2","."],
        [".",".","2",".","7",".",".",".","."],
        [".","1","5",".",".",".",".",".","."],
        [".",".",".",".",".","2",".",".","."],
        [".","2",".","9",".",".",".",".","."],
        [".",".","4",".",".",".",".",".","."]]
console.log(isValidSudoku1(board));