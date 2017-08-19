// DO NOT MODIFY

window.data = {
  first_name: random_sample(["George", "Walter", "William"],1)[0],
  last_name: "Fox",
  age: 13,
  occupation: random_sample(["Artist", "Entrepreneur"],1)[0],
  location: "Sheepsville, New Zealand",
  qualities: random_sample([
    "honest", "hard-working", "loyal", "creative", "clever", "opportunistic"
  ]),
  siblings: random_sample([
    { first_name: "Chet", age: 5 },
    { first_name: "Wit", age: 7 },
    { first_name: "Dawn", age: 9 },
    { first_name: "Juniper", age: 2 },
    { first_name: "Floyd", age: 12 },
    { first_name: "Nancy", age: 5 },
    { first_name: "Drew", age: 7 }
  ]),
  hobbies: random_sample([
    {
      name: "Improv",
      category: "Theater",
      wikipedia_url: "https://en.wikipedia.org/wiki/Improvisational_theatre",
      proficiency: "intermediate"
    },
    {
      name: "Demolition",
      category: "Construction",
      wikipedia_url: "https://en.wikipedia.org/wiki/Demolition",
      proficiency: "beginner"
    },
    {
      name: "Howling",
      category: "Music",
      wikipedia_url: "https://en.wikipedia.org/wiki/Howl",
      proficiency: "advanced"
    },
    {
      name: "Motorcycles",
      category: "Sport",
      wikipedia_url: "https://en.wikipedia.org/wiki/Motorcycle",
      proficiency: "intermediate"
    },
    {
      name: "Hunting",
      category: "Sport",
      wikipedia_url: "https://en.wikipedia.org/wiki/Hunting",
      proficiency: "advanced"
    }
  ]),
  profile_image: "https://media.giphy.com/media/aiL0BGeWHbtRu/giphy.gif"
}

function random_sample(a, length) {
    var n,
        swap,
        i = a.length,
        qty = length || Math.floor(Math.random() * i);

    // shuffle the array
    if (qty){
      while (i--) {
        n = Math.floor(Math.random() * i);
        swap = a[i];
        a[i] = a[n];
        a[n] = swap;
      }
    }

    // randomly remove elements
    a.length = qty;

    return a;
}

$(document).on('ready', function(){
  $('pre').text(JSON.stringify(data,true,2))
});

// DO NOT MODIFY
