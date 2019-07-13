// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const PlayerAPI = {
  players: [
    { number: 1, name: "Web Scraping", info: "Web Scraping (also termed Screen Scraping, Web Data Extraction, Web Harvesting etc.) is a technique employed to extract large amounts of data from websites whereby the data is extracted and saved to a local file in your computer or to a database in table (spreadsheet) format. Data displayed by most websites can only be viewed using a web browser. They do not offer the functionality to save a copy of this data for personal use. The only option then is to manually copy and paste the data - a very tedious job which can take many hours or sometimes days to complete. Web Scraping is the technique of automating this process, so that instead of manually copying the data from websites, the Web Scraping software will perform the same task within a fraction of the time." },
    { number: 2, name: "Python", info: "Python (programming language) Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace. ... Python is dynamically typed and garbage-collected." },
    { number: 3, name: "React-Native", info: "React Native is a framework for building native iOS and Android applications using JavaScript. It's based on the same concepts as React, but uses native components instead of web components to render a user interface (UI)." },
    { number: 4, name: "Node-Express", info: "Node (or more formally Node.js) is an open-source, cross-platform, runtime environment that allows developers to create all kinds of server-side tools and applications in JavaScript. The runtime is intended for use outside of a browser context (i.e. running directly on a computer or server OS). As such, the environment omits browser-specific JavaScript APIs and adds support for more traditional OS APIs including HTTP and file system libraries." },
    { number: 5, name: "Next-Gatsby", info: "Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps. Why would we need a framework on top of a framework (or a library)? Isn’t React a tool that “helps developers build websites and apps”? This is a reasonable question. It is often posed about tools such as Next.js. React is a library that is meant to provide a certain set of core functionality for developers to leverage. It intended to be lightweight and broadly applicable.Gatsby, on the other hand, is, “a static PWA (Progressive Web App) generator. You get code and data splitting out-of-the-box. Gatsby loads only the critical HTML, CSS, data, and JavaScript so your site loads as fast as possible. Once loaded, Gatsby prefetches resources for other pages so clicking around the site feels incredibly fast.Gatsby is a static site generator that leverages React." }
  ],
  all: function() { return this.players},
  get: function(id) {
    const isPlayer = p => p.number === id
    return this.players.find(isPlayer)
  }
}

export default PlayerAPI
