'use strict';

const result = $('#result');

$('button').click(function(event) {
  event.preventDefault();

  console.log('You submitted!');
  const uri = $('#uriInput').val();

  console.log("hiding");
  result.addClass('d-none');

  fetch(uri)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log("then")
      result.removeClass('alert-danger');      
      result.addClass('alert-success');
      result.html(`<p>The query seems to have worked: it returned data of the format:</p><p>${JSON.stringify(data)}</p>`)

      console.log(data);
    })
    .catch(function(error){
      result.removeClass('alert-success');      
      result.addClass('alert-danger');
      result.html(`<p>The query failed to return JSON data with the following warning:</p><p>${error}</p>`);

      console.error(error);
    })
    .then(function() {
      result.removeClass('d-none');
    })


  // let downloadedPromise = fetch(url) //send the request
  // let processedPromise = downloadedPromise.then(function(response){     
  //     console.log(response);
  //     //return response.url;
  //     let encodedPromise = response.json();

  //     return encodedPromise; //return a value of type promise

  //   })

  //   processedPromise.then(function(data){
  //     console.log(data);
  //   })



    // .then(function(data){
    //   console.log("you queried: ", data);
    // })

  return false;
});

