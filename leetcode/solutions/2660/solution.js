import { inputReaderHelper } from '#lib/input-reader'

/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function (player1, player2) {
    let getScore = (score) => {
        let sum = 0
        for (let i = 0; i < score.length; i++) {
            sum += score[i] * ((score[i - 1] === 10 || score[i - 2] === 10) ? 2 : 1)
        }
        return sum
    }

    const s1 = getScore(player1),
        s2 = getScore(player2)

    if (s1 === s2) {
        return 0
    }

    return s1 > s2 ? 1 : 2
}

inputReaderHelper((ary1, ary2) => isWinner(ary1, ary2))
