const businesses = [
  {
    name: "Bolton's Spicy Fish & Chicken",
    address: '624 Main St',
    zip: 37204,
    veg: false,
    url: 'https://www.yelp.com/biz/boltons-spicy-chicken-and-fish-nashville?osq=Bolton%27s+Spicy+Fish+%26+Chicken'
  },
  {
    name: 'Bones, Fish & More',
    address: '2597 Murfreesboro Pike',
    zip: 37217,
    veg: false,
    url: 'https://www.yelp.com/biz/bones-fish-and-more-nashville'
  },
  {
    name: "Brother Z's Wangs",
    address: '1407 Dickerson Pike',
    zip: 37207,
    veg: false,
    url: 'https://www.yelp.com/biz/brother-zs-wangs-nashville-3'
  },
  {
    name: 'Ghot Wingz',
    address: '2617 Gallatin Pike',
    zip: 37216,
    veg: false,
    url: 'https://www.yelp.com/biz/ghot-wingz-nashville-2'
  },
  {
    name: 'Harolds Chicken Nashville',
    address: '811 Dickerson Pike Ste B',
    zip: 37207,
    veg: false,
    url: 'https://www.yelp.com/biz/harolds-chicken-nashville-nashville'
  },
  {
    name: 'Pluckerz Wing Bar',
    address: '1602 21st Ave',
    zip: 37212,
    veg: false,
    url: 'https://www.yelp.com/biz/pluckerz-wing-bar-nashville-2'
  },
  {
    name: "Prince's Hot Chicken Shack",
    address: '423 6th Ave S',
    zip: 37203,
    veg: false,
    url: 'https://www.yelp.com/biz/princes-hot-chicken-shack-nashville-4'
  },
  {
    name: "Rocky's Wing Shack",
    address: '1601 9th Ave N',
    zip: 37208,
    veg: false,
    url: 'https://www.yelp.com/biz/rockys-wing-shack-nashville'
  },
  {
    name: 'Slow Burn Hot Chicken',
    address: '495B Myatt Dr Ste B',
    zip: ,
    veg: false,
    url: 'https://www.yelp.com/biz/slow-burn-hot-chicken-madison-2'
  },
  {
    name: 'Slow Burn Hot Chicken',
    address: '726 McFerrin Ave',
    zip: ,
    veg: false,
    url: 'https://www.yelp.com/biz/slow-burn-hot-chicken-nashville-4'
  },
  {
    name: 'Strikeout Wingz',
    address: '2521 Nolensville Pike',
    zip: 37211,
    veg: false,
    url: 'https://www.yelp.com/biz/strikeout-wingz-nashville'
  },
  {
    name: 'The Southern V',
    address: '1200 Buchanan St',
    zip: 37208,
    veg: true,
    url: 'https://www.yelp.com/biz/the-southern-v-nashville'
  },
  {
    name: 'Radical Rabbit @ 12 South Farmers Market',
    address: '3000 Granny White Pike',
    zip: 37212,
    veg: true,
    url: 'https://radrab.com/'
  },
  {
    name: 'Radical Rabbit @ Richland Park Farmers Market',
    address: '4711 Charlotte Ave',
    zip: 37209,
    veg: true,
    url: 'https://radrab.com/'
  },
  {
    name: "Amy's Ethiopian Restaurant",
    address: '2510 Murfreesboro Rd Ste 10',
    zip: 37217,
    veg: true,
    url: 'https://www.yelp.com/biz/amys-ethiopian-restaurant-nashville'
  },
  {
    name: 'Vege-licious',
    address: '513B Fisk St',
    zip: 37203,
    veg: true,
    url: 'https://www.yelp.com/biz/vege-licious-nashville'
  },
  {
    name: "Riddim N' Spice",
    address: '2116 Meharry Blvd',
    zip: 37208,
    veg: true,
    url: 'https://www.yelp.com/biz/riddim-n-spice-nashville'
  },
  {
    name: 'Veggie Village',
    address: '1314 6th Ave N',
    zip: 37208,
    veg: true,
    url: 'https://www.yelp.com/biz/veggie-village-nashville'
  },
  {
    name: 'Jamaicaway Restaurant & Catering',
    address: '900 Rosa L Parks Blvd Ste 120',
    zip: 37208,
    veg: true,
    url: 'https://www.yelp.com/biz/jamaicaway-restaurant-and-catering-nashville-2'
  },
  {
    name: 'Jamaicaway Restaurant at Midtown',
    address: '1812 Hayes St',
    zip: 37208,
    veg: true,
    url: 'https://www.yelp.com/biz/jamaicaway-restaurant-and-catering-nashville-3'
  },
  {
    name: "Slim & Husky's Pizza Beeria",
    address: '911 Buchanan St',
    zip: 37208,
    veg: true,
    url: 'https://www.yelp.com/biz/slim-and-huskys-pizza-beeria-nashville'
  },
  {
    name: 'Gojo Ethiopian',
    address: '415 W Thompson Ln',
    zip: 37211,
    veg: false,
    url: 'https://www.yelp.com/biz/gojo-ethiopian-nashville-2'
  },
  {
    name: 'The Cupcake Collection',
    address: '1213 6th Ave N',
    zip: 37208,
    veg: true,
    url: 'https://www.yelp.com/biz/the-cupcake-collection-nashville'
  },
  {
    name: 'HiFi Cookies',
    address: '733 Porter Rd',
    zip: 37206,
    veg: true,
    url: 'https://www.hificookies.com/'
  },
  {
    name: 'The Peach Cobbler Factory',
    address: '5814 Nolensville Pike',
    zip: 37211,
    veg: true,
    url: 'https://www.yelp.com/biz/the-peach-cobbler-factory-nashville'
  },
    {
    name: 'Shugga Hi Bakery and Cafe',
    address: '1000 Dickerson Pike',
    zip: 37207,
    veg: true,
    url: 'https://www.yelp.com/biz/shugga-hi-bakery-and-cafe-nashville?osq=Shugga+Hi+Bakery+and+Cafe'
  },
    {
    name: 'Kernels Gourmet Popcorn',
    address: '2501B Gallatin Ave',
    zip: 37206,
    veg: true,
    url: 'https://www.yelp.com/biz/kernels-gourmet-popcorn-nashville-2'
  },
    {
    name: 'The Cake Project',
    address: '1006 Fatherland St Ste 207',
    zip: 37206,
    veg: true,
    url: 'https://www.yelp.com/biz/the-cake-project-nashville-3'
  },
    {
    name: 'Sugarlips Bakery',
    address: '',
    zip: ,
    veg: true,
    url: 'https://www.yelp.com/biz/sugarlips-bakery-nashville-2'
  },
    {
    name: 'Fat Boys Bbq',
    address: '2733 Murfreesboro Pike',
    zip: 37013,
    veg: false,
    url: 'https://www.yelp.com/biz/fat-boys-bbq-antioch?osq=Fat+Boys+BBQ'
  },
    {
    name: 'Ooh Wee Bar-B-Q',
    address: '2008 Jefferson St',
    zip: 37208,
    vefalse,
    url: 'https://www.yelp.com/biz/ooh-wee-bar-b-q-nashville'
  },
    {
    name: 'SmoQe Signals BBQ',
    address: '3208B Gallatin Pike',
    zip: 37216,
    veg: false,
    url: 'https://www.yelp.com/biz/smoqe-signals-bbq-nashville-3'
  },
    {
    name: "Tj's Bbq & Fish",
    address: '1104 Ed Temple Blvd',
    zip: 37209,
    veg: false,
    url: 'https://www.yelp.com/biz/tjs-bbq-and-fish-nashville'
  },
    {
    name: "Whites Fish Hot Chicken & Bar-B-Que",
    address: '3801 Dickerson Pike',
    zip: 37207,
    veg: false,
    url: 'https://www.yelp.com/biz/whites-fish-hot-chicken-and-bar-b-que-nashville'
  },
    {
    name: "Cal's Country Kitchen",
    address: '222 Woodruff St',
    zip: 37115,
    veg: false,
    url: 'https://www.yelp.com/biz/cals-country-kitchen-madison'
  },
    {
    name: "Barr's Music City Soul Food",
    address: '618 Brentwood E Dr',
    zip: 37211,
    veg: false,
    url: 'https://www.yelp.com/biz/barrs-music-city-soul-food-nashville'
  },
    {
    name: "Dandgure's Classic Southern Cooking",
    address: '538 Lafayette St',
    zip: 37203,
    veg: false,
    url: 'https://www.yelp.com/biz/dandgures-classic-southern-cooking-nashville'
  },
    {
    name: "Doll's Family Cafe",
    address: '2501 Gallatin Ave Ste C',
    zip: 37206,
    veg: false,
    url: 'https://www.yelp.com/biz/dolls-family-cafe-nashville-3'
  },  
  {
    name: "H & T's Homecooking",
    address: '2264 Murfreesboro Pike',
    zip: 37217,
    veg: false,
    url: 'https://www.yelp.com/biz/h-and-ts-homecooking-nashville'
  },  
  {
    name: 'The LoCal Distro',
    address: '614 Garfield St',
    zip: 37208,
    veg: true,
    url: 'https://www.yelp.com/biz/the-local-distro-nashville'
  },  
  {
    name: 'Kingdom Café & Grill',
    address: '2610 Jefferson St',
    zip: 37208,
    veg: false,
    url: 'https://www.yelp.com/biz/kingdom-caf%C3%A9-and-grill-nashville'
  }, 
]
