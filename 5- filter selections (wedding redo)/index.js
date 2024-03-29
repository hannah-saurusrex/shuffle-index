const places = [
    {
        tags: ["RiNo", "Restaurant", "Drinks"],
        title: "Cart-Driver Pizza",
        address: "2500 Larimer St. #100 Denver, CO 80205",
        link: "https://cart-driver.com/",
        description: "One of the best pizza spots in town in the trendy RiNo neighborhood. They have fresh oysters and prosecco on tap – what could be better!"
    },
    {
        tags: ["Congress Park", "Restaurant", "Drinks"],
        title: "Shells & Sauce",
        address: "2600 E 12th Ave Denver, CO 80206",
        link: "http://shellsandsauce.net/",
        description: "Shells & Sauce is a jazzy little trattoria serving classic & creative fare, plus brunch & happy hour on the roof deck."
    },
    {
        tags: ["RiNo", "Drinks"],
        title: "Ratio Beerworks",
        address: "2920 Larimer St. Denver, CO  80205",
        link: "http://ratiobeerworks.com/",
        description: "Ratio is one of our favorite breweries in town, serving up an array of great beers. Take a seat on their patio and catch some rays."
    },
    {
        tags: ["Downtown", "Museum"],
        title: "Museum of Contemporary Art",
        address: "1485 Delganey St. Denver, CO 80202",
        link: "https://mcadenver.org/",
        description: "The Museum of Contemporary Art was founded in 1996 as the first dedicated home for contemporary art in the city of Denver."
    },
    {
        tags: ["RiNo", "Restaurant", "Coffee"],
        title: "Stowaway Kitchen",
        address: "2528 Walnut St. Denver, CO 80205",
        link: "http://stowawaydenver.com/",
        description: "Stowaway is a cozy café offering a full espresso bar, plus globally influenced breakfast & lunch fare. A great place to grab a bite in RiNo."
    },
    {
        tags: ["Golden Triangle", "Museum"],
        title: "Clyfford Still Museum",
        address: "1250 Bannock St. Denver, CO 80204",
        link: "https://clyffordstillmuseum.org/",
        description: "The Clyfford Still Museum is a minimalist showcase for the large-scale paintings & archives of the namesake Abstract Expressionist."
    },
    {
        tags: ["Golden Triangle", "Museum"],
        title: "Denver Art Museum",
        address: "100 W 14th Ave Pkwy, Denver, CO 80204",
        link: "https://denverartmuseum.org/",
        description: "The Denver Art Museum – DAM is an art museum located in the Civic Center of Denver, Colorado. The museum is one of the largest art museums between the West Coast and Chicago."
    },
    {
        tags: ["LoHi", "Restaurant"],
        title: "Little Man Ice Cream",
        address: "2620 16th St. Denver, CO 80211",
        link: "http://www.littlemanicecream.com/",
        description: "Little Man Ice Cream is a milk-jug shaped shop scooping unique flavors of homemade ice cream & open until midnight."
    },
    {
        tags: ["RiNo", "Restaurant", "Coffee"],
        title: "Port Side",
        address: "2500 Larimer St. #103 Denver, CO 80205",
        link: "http://www.portsidedenver.com/",
        description: "Port Side is a casual, stylish coffeehouse offering house-roasted beans, espresso drinks & creative light bites."
    },
    {
        tags: ["RiNo", "Retail"],
        title: "Topo Designs",
        address: "2500 Larimer St. #102 Denver, CO 80205",
        link: "https://topodesigns.com/",
        description: "This is the flagship store for Topo's high-design, colorful, USA-made outdoor gear, apparel & bags."
    },
    {
        tags: ["RiNo", "Restaurant", "Drinks", "Food Hall"],
        title: "Denver Central Market",
        address: "2669 Larimer St. Denver, CO 80205",
        link: "http://denvercentralmarket.com/",
        description: "Meat & fish counters plus a bakery, pizzeria, bar & much more in an airy marketplace."
    },
    {
        tags: ["RiNo", "Restaurant", "Drinks", "Food Hall"],
        title: "The Source",
        address: "3500 Brighton Blvd. Denver, CO 80216",
        link: "https://thesourcehotel.com/",
        description: "Denver's first food hall, this bustling artisan food market located in a landmark 1880s building, features 13 vendors & a hotel. The Source is also home to one of our favorite breweries — Crooked Stave."
    },
    {
        tags: ["RiNo", "Drinks"],
        title: "Our Mutual Friend Brewing Company",
        address: "2810 Larimer St. Denver, CO 80205",
        link: "http://www.omfbeer.com/",
        description: "Award-winning Denver brewery with great offerings and a wonderful patio."
    },
    {
        tags: ["Congress Park", "Drinks"],
        title: "Cerebral Brewing",
        address: "1477 Monroe St. Denver, CO 80206",
        link: "http://cerebralbrewing.com/",
        description: "Cerebral Brewing is focused on crafting beer of the highest quality and consistency. All offered with a scientific approach."
    },
    {
        tags: ["RiNo", "Restaurant", "Drinks", "Food Hall"],
        title: "Zeppelin Station",
        address: "3501 Wazee St. Suite #100 Denver, CO 80216",
        link: "https://zeppelinstation.com/",
        description: "Food hall with eight vendors serving banh mi, fried chicken, gelato & more, plus two cocktail bars."
    },
    {
        tags: ["RiNo", "Restaurant"],
        title: "Curtis Park Deli",
        address: "2532 Champa St. Denver, CO 80205",
        link: "https://curtisparkdeli.com/",
        description: "We are a neighborhood delicatessen that prides ourselves on serving Denver’s freshest sandwiches. We stack and wrap them daily, made with just-baked ciabatta, clean meats, and crisp, seasonal veggies."
    },
    {
        tags: ["Baker", "Coffee"],
        title: "Spur Coffee",
        address: "95 Lincoln St. Denver, CO 80203",
        link: "https://spurcoffee.com/denver-cafe/",
        description: "Spur Coffee offers some of the best cups of joe in town. Their pastries and food items are all made from scratch daily with fresh and wholesome ingredients."
    },
    {
        tags: ["Golden Triangle", "Retail"],
        title: "Meek Vintage",
        address: "39 W 11th Ave. Denver, CO 80204",
        link: "http://shopmeek.co/",
        description: "Meek is one of our favorite places to shop in town. Meek offers modern and vintage home goods, clothing, and of course plants."
    },
    {
        tags: ["Golden Triangle", "Museum"],
        title: "Kirkland Museum of Fine & Decorative Art",
        address: "1201 Bannock St. Denver, CO 80204",
        link: "http://www.kirklandmuseum.org/",
        description: "3,500+ art nouveau, art deco, Pop Art & postmodern works & Western landscapes by Vance Kirkland."
    },
    {
        tags: ["Golden Triangle", "Restaurant", "Drinks"],
        title: "Leven Deli Co.",
        address: "123 W 12th Ave. Denver, CO 80204",
        link: "https://eatleven.com/",
        description: "With sentimental attachment to the classic American Deli, Leven is a modern take on the traditional deli model. From food, to drinks and design, Leven is built to be a new type of deli better fit for today."
    } 
  ]

  let tag = "";
  const container = document.querySelector('.to-do-layout');
  const buttons = document.querySelectorAll("button");
  const buttonsArray = Array.from(buttons);

  const filterPlaces = () => {
      places.filter((destination) => {
          const node = destination.tags.map(lowercase => lowercase.toLowerCase())
          if (tag !== "") {
              if(node.includes(tag)) {
                return true;
              }
              } else {
                return true;
            }
        }).map( (place) => {
            const newDiv = document.createElement("div");
            newDiv.className = "event-headline";
            newDiv.dataset.tags = place.tags;
            newDiv.innerHTML = `<h2 class="event-name"> <a href="${place.link}"target="blank">${place.title}</a></h2>
            <address>${place.address}</address>
            <p class="event-note">${place.description}</p>`
            container.appendChild(newDiv);
        })
  };
  filterPlaces();

  buttonsArray.map(everyButton => {
    everyButton.addEventListener('click', (e) => {
        const buttonId = e.target.id;
        tag = buttonId;
        container.innerHTML = "";
        filterPlaces();
    });
  });