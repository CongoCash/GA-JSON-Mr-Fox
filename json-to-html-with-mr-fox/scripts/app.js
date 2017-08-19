console.log("Sanity Check: JS is working!");

$(document).on('ready', function(){

  $('h1').text("Meet Mr. Fox"); // KEEP
    $('.first_name').text(data.first_name);
    $('.occupation').text(data.occupation);
    $('.location').text(data.location);
    $(function(){
        let qualities1 = "";
        for (let i = 0; i<data.qualities.length; i++) {
            qualities1 += data.qualities[i] + " "
        }
        $('.qualities').text(qualities1);
    });



    $('.sibling_count').text(data.siblings.length);

    $(function() {
      let sibling_string = "";
      let sibling_array = [];
      let sibling_final = "";
      for (let i = 0; i<data.siblings.length; i++) {
        sibling_string = data.siblings[i].first_name + " - " + data.siblings[i].age
        sibling_array.push(sibling_string);
        sibling_string = "";
      }
      // for (let i = 0; i < sibling_array.length; i++) {
      //   sibling_final += sibling_array[i]
      // }
      for (let i = 0; i<data.siblings.length; i++) {
          if ($('.sibling_list').children().length > 0) {
              $('.sibling_list').children()[0].replaceWith("")

          }
      }
      for (let i = 0; i<data.siblings.length; i++) {
          $('.sibling_list').append(`<li>${sibling_array[i]}</li>`);
      }

    });

    $(function() {
      let urlArray = [];
      let hobbyArray = [];

      for (let i = 0; i<data.hobbies.length; i++) {
        console.log(data.hobbies[i].name)
        urlArray.push(data.hobbies[i].wikipedia_url);
        hobbyArray.push(data.hobbies[i].name);
      }
      console.log(hobbyArray)
      $('.hobby_links').text("");
      for (let i = 0; i<urlArray.length; i++) {
        console.log(i);
        $('.hobby_links').append(`<a href="${urlArray[i]}">${hobbyArray[i]}</a>`)
      }
    });

    // $(function() {
      let fox = $("img")[0]
      console.log(fox)
      fox.src = "https://media.giphy.com/media/aiL0BGeWHbtRu/giphy.gif";
    // });
});
