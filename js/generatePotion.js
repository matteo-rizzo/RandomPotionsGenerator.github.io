function loadJSON(callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', './data.json', true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(JSON.parse(xobj.responseText));
      }
    };
    xobj.send(null);  
  }

function generatePotion() {
    loadJSON(function(json) {
        // console.log(JSON.stringify(json, null, 2)); 
        
        var potions = json.potions;
        var selectedPotion = Math.floor((Math.random() * (potions.length - 1)) + 1)

        $('#potion-name').text(potions[selectedPotion].name);
        $('#potion-description').text(potions[selectedPotion].description);
      });
}