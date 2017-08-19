// DO NOT MODIFY

$(document).on('ready', function(){

  window.answer_key = [
    {expected: data.first_name, selector: ".first_name"},
    {expected: data.occupation, selector: ".occupation"},
    {expected: data.location,   selector: ".location"},
    {expected: data.qualities.join("(.|\s)*"), selector: ".qualities"},
    {expected: data.siblings.length, selector: ".sibling_count"},
    {expected: data.siblings.map(function(v){ return v.first_name + "(.|\s)*" + v.age; }).join("(.|\s)*"), selector: ".sibling_list"},
    {expected: data.hobbies.map(function(v){ return v.name; }).join("(.|\s)*"), selector: '.hobby_links a[href^="https://en.wikipedia.org/wiki/"]'} // hardcoded wiki url
  ];


  var $checkmark = $("<span>", {html: "&checkmark;", class:"bg-success"});
  var great_success = true;

  // evaluate answers
  answer_key.forEach(function(q){
    if (!q.expected){ return; } // array is empty, so move on

    var pattern = new RegExp(q.expected, 'i'),
        $el = $(q.selector);
    q.actual = $el.text().trim();

    if ( q.actual.match( pattern ) ) {
      $el.append( $checkmark.clone() );
    } else {
      great_success = false;
    }
  })

  // check problem set is complete
  if (great_success) {
    $("body").prepend($("<img>", {
      src: "https://media.giphy.com/media/kNrNdfk2qokHC/giphy.gif",
      class: "img-responsive center-block"
    }));
  }

});

// DO NOT MODIFY
