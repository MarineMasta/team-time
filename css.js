const style = `
html, body {
    max-width: 100%;
    overflow-x: hidden;
    background-color: rgb(183, 235, 236);
}

body {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.banner-bar {
    background-color: rgb(92, 86, 86);
    width: 100%;
    color: rgb(183, 235, 236);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
}

h1 {
    font-family: 'Times New Roman', Times, serif;
    font-size: 10vw;
}

p {
    font-family:'Times New Roman', Times, serif;
    position: relative;
    left: 12px;
}

h2 {
    font-family: 'Times New Roman', Times, serif;
    position: relative;
    font-size: 18px;
    left: 12px;
}

.member-card {
    width: 250px;
    height: 34vh;
    margin-bottom: 5vh;
    background-color: rgb(196, 196, 196);
    box-shadow: 2px 5px 5px black;
    border-top-left-radius: 10px;
}

.card-container {
    position: absolute;
    top: 25vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 40vw;
}

.card-top {
    background-color: rgb(92, 86, 86);
    border: 2px solid;
    color: rgb(183, 235, 236);
}

.card-bottom {
    display: flex;
    flex-direction: column;
    align-content: center;
}
`

module.exports = style;