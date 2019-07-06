// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const PlayerAPI = {
  players: [
    { number: 1, name: "Web Scraping", position: "Web Scraping (also termed Screen Scraping, Web Data Extraction, Web Harvesting etc.) is a technique employed to extract large amounts of data from websites whereby the data is extracted and saved to a local file in your computer or to a database in table (spreadsheet) format. Data displayed by most websites can only be viewed using a web browser. They do not offer the functionality to save a copy of this data for personal use. The only option then is to manually copy and paste the data - a very tedious job which can take many hours or sometimes days to complete. Web Scraping is the technique of automating this process, so that instead of manually copying the data from websites, the Web Scraping software will perform the same task within a fraction of the time." },
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
