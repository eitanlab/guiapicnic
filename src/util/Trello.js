const Trello = fetch(`https://api.trello.com/1/boards/59fcfb42903956a0ce07e4cf`)
  .then( response => {
            return response.json();
  })
  .then( jsonResponse => {
            jsonResponse.cards.map( card => {
              console.log(card.name);
            });   

               

               /*return jsonResponse.businesses.map( business => {
                   console.log(business);
                   return {
                       id: business.id,
                       imageSrc: business.image_url,
                       name: business.name,
                       address: business.location.address1,
                       city: business.location.city,
                       state: business.location.state,
                       zipCode: business.location.zipCode,
                       category: business.categories[0].title,
                       rating: business.rating,
                       reviewCount: business.review_count,
                       url: business.url
                   }
               });*/
});

export default Trello;