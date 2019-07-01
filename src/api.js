// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const PlayerAPI = {
  players: [
    { number: 1, name: "Web Scraping", position: "learn the basics of web scraping" },
    { number: 2, name: "Python", position: "Learn the basics and build an application that will use beautiful soup, beautiful soup scrapes pandas then something about machine learning" },
    { number: 3, name: "React-Native", position: "differenciate yourself from the curriculum apply what you have learned" },
    { number: 4, name: "Node-Express", position: "Build a backend for a react app, prepare to incorporate this type of backend into your react project" },
    { number: 5, name: "Next-Gatsby", position: "Understand the difference between the two, build a simple app in each" },
    { number: 6, name: "Project ideas", position: "Not much yet but i will add as they come." }
  ],
  all: function() { return this.players},
  get: function(id) {
    const isPlayer = p => p.number === id
    return this.players.find(isPlayer)
  }
}

export default PlayerAPI
