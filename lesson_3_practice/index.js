// const array = ["Gantz", "Hiroya Oku", "manga"]
// const description = "Gantz is about a young man who lives in tokyo who got run over by a train together with his childhood friend, but then he and his friend suddenly where alive in an ordinary room with a mysterius ball, together with other people who also met their ends that evening"

// generateSentence(description, array)

// function generateSentence (desc, arr) {
//     let forloop = ""
//     const sentence = `title: ${arr[0]} author: ${arr[1]} type: ${arr[2]} decription: ${desc}`
//     const lastIndex = arr.length - 1
//     for (let i = 0; i < arr.length; i++) {
//         if (i === lastIndex) {
//             forloop += arr[i]
//         } else {
//             forloop += arr[i] + ", "
//         }
//     }
//     console.log(sentence)
//     console.log(forloop)
// }

const containerEL = document.getElementById("container")

const imgs = [
    "images/cha1.jpg",
    "images/cha2.jpg",
    "images/cha3.jpg",
]

render()

function render () {
    let items = ""
    for ( let i = 0; i < imgs.length; i++) {
        items += `<img alt="character in the manga" class="team-img" src="${imgs[i]}">`
    }
    containerEL.innerHTML = items
}