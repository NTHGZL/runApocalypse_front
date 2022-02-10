const scoreboard = document.getElementById('scoreboard')
const URL = "http://localhost:3000/api/score"

let scores = '';
    
const table = document.createElement('table')
const thead = document.createElement('thead')
const thPseudo = document.createElement('th')
const thScore = document.createElement('th')

thPseudo.append('Pseudo')
thScore.append('Score')
thead.append(thPseudo)
thead.append(thScore)
table.append(thead)
const tbody = document.createElement('tbody')

function setScores(res) {
    scores = res
}
    window.fetch(URL)
    .then(res => res.json())
    .then(result => {
        let i =0;
        result.forEach(element => {
            const tr = document.createElement('tr')
            const pseudo = document.createElement('td')
            const score = document.createElement('td')
            pseudo.append(element.pseudo)
            score.append(element.score)
            tr.append(pseudo)
            tr.append(score)
            
            tbody.append(tr)
        });
        table.append(tbody)
        scoreboard.append(table)
    })
    .catch(e => console.error(error))





class Score {
    /**
     * @type string
     */
    pseudo

    /**
     * @type number
     */
    score

    constructor(score, pseudo){
        this.pseudo = pseudo
        this.score = score
    }
}
