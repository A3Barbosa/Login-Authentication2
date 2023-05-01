


 
      document.querySelector('#submit').addEventListener("click", function(){
       let comment = document.querySelector('#comment').value
       let mood= document.querySelector("#mood").innerText
       console.log(mood)
        fetch("messages", {
          method: "put",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            "comment": comment,
            "mood": mood
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
   

