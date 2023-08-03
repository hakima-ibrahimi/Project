
 function getQuestionCategories() {
    return fetch(`https://the-trivia-api.com/v2/categories`)
        .then((res) => res.json())
        .then((res) => res) 
        .catch((err) => err); 
}

  function getQuestion() {
    return fetch(`https://the-trivia-api.com/v2/questions/search`, {
      method: "POST", 
      headers: {"Content-type": "application/json", "X-API-Key": "ApiKeyAuth"}, 
      body: {"categories": "music"},
    })
        .then((res) => {
          console.log(res)})
      
        .catch((err) => err);
}

module.exports={getQuestionCategories, getQuestion}
