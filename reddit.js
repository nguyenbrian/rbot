var request = require('request')
request('https://www.reddit.com/r/showerthoughts/hot.json?limit=6', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(JSON.parse(body).data.children[Math.floor(Math.random() * 10 + 1)].data.title) // Show the HTML for the Google homepage. 
  }
})
