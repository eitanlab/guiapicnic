const apiKey = 'https://api.trello.com/1/boards/560bf4298b3dda300c18d09c?fields=name,url&key=0b4e96bcf06446fd74d1646248762b43&token=c6a21a1ada53b90b184fff280dcd23a031084fb0f69bf310997e6adaaa7a996e';

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