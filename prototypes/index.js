const { kitties } = require('./datasets/kitties');
const { puppers } = require('./datasets/puppers');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { weather } = require('./datasets/weather');
const { boardGames } = require('./datasets/boardGames');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');



// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangePetNames(babyPets) {
    // Return an array of just the names of kitties who are orange e.g.
        // ['Tiger', 'Snickers']

        /* CODE GOES HERE */
    let orangePets = [];
    babyPets.forEach((babyPet) => {
      if(babyPet.color === "orange") {
        orangePets.push(babyPet.name);
      }
    })
    return orangePets;
    // Annotation:
    // Write your annotation here as a comment
  },

  sortByAge(babyPets) {
    // Sort the kitties by their age

    /* CODE GOES HERE */
    let ageSortedPets = babyPets.sort((a, b) => b.age - a.age);
    return ageSortedPets;

    // Annotation:
    // Write your annotation here as a comment
  },

  growUp(babyPets) {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    /* CODE GOES HERE */
    let grownUpPets = babyPets.map((babyPet) => {
      babyPet.age += 2;
      return babyPet;
    })
    return grownUpPets;
  }
};

// PLEASE READ-----------------------
// Currently, your functions are probably using the `kitties` global import variable.
// refactor the above functions using arguments and parameters so that
// they can perform the same utility
// for the kitties or puppers datasets, depending on what arguments you send through.


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Your function should access the clubs data through a parameter (it is being passed as an argument in the test file)
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    /* CODE GOES HERE */
    let memberClubs = {};
    clubs.forEach((club) => {
      club.members.forEach((member) => {
        if(!memberClubs[member]) {
          memberClubs[member] = [];
          memberClubs[member].push(club.club);
        } else {
          memberClubs[member].push(club.club);
        }
      })
    })
    return memberClubs;
    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    /* CODE GOES HERE */
    let studentsPerInstructors = mods.reduce((acc, mod) => {
      acc.push({
        mod: mod.mod,
        studentsPerInstructor: mod.students/mod.instructors
      })
      return acc;
    }, [])
    return studentsPerInstructors;
    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    /* CODE GOES HERE */
    let flavorStocks = cakes.reduce((acc, cake) => {
      acc.push({
        flavor: cake.cakeFlavor,
        inStock: cake.inStock
      })
      return acc
    }, [])
    return flavorStocks;
    // Annotation:
    // Write your annotation here as a comment
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    /* CODE GOES HERE */
    let inStockCakes = cakes.filter((cake) => {
      return cake.inStock > 0;
    })
    return inStockCakes;
    // Annotation:
    // Write your annotation here as a comment
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    /* CODE GOES HERE */
    let netStock = cakes.reduce((sum, cake) => {
      sum += cake.inStock;
      return sum;
    }, 0)
    return netStock;
    // Annotation:
    // Write your annotation here as a comment
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    /* CODE GOES HERE */
    let toppings = cakes.reduce((list, cake) => {
      cake.toppings.forEach((topping) => {
        if(!list.includes(topping)) {
          list.push(topping);
        }
      })
      return list;
    }, [])
    return toppings;
    // Annotation:
    // Write your annotation here as a comment
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    /* CODE GOES HERE */
    let groceries = cakes.reduce((acc, cake) => {
      cake.toppings.forEach((topping) => {
        if(!acc[topping]) {
          acc[topping] = 1;
        } else {
          acc[topping] += 1;
        }
      })
      return acc;
    }, {})
    return groceries;
    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    /* CODE GOES HERE */
    let feRooms = classrooms.reduce((list, room) => {
      if(room.program === "FE") {
        list.push(room);
      }
      return list;
    }, [])
    return feRooms;
    // Annotation:
    // Write your annotation here as a comment
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    /* CODE GOES HERE */
    let programNetCapacity = classrooms.reduce((acc, room) => {
      if(room.program === "FE") {
        acc.feCapacity += room.capacity;
      } else {
        acc.beCapacity += room.capacity;
      }
      return acc;
    }, {feCapacity: 0, beCapacity: 0})
    return programNetCapacity;
    // Annotation:
    // Write your annotation here as a comment
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    /* CODE GOES HERE */
    let capacitySortedRooms = classrooms.sort((a, b) => a.capacity - b.capacity);
    return capacitySortedRooms;
    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence(arr) {
    // Your function should access the books data through a parameter (it is being passed as an argument in the test file)
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']


    /* CODE GOES HERE */
    let nonViolentBooks = arr.filter((book) => {
      return book.genre !== "Horror" && book.genre !== "True Crime";
    })
    return nonViolentBooks.map((nonViolentBook) => {
      return nonViolentBook.title;
    });
    // Annotation:
    // Write your annotation here as a comment
  },

  getNewBooks(arr) {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    /* CODE GOES HERE */
    let ninetiesThousandsBooks = arr.filter((book) => {
      return book.published >= 1990 && book.published < 2010;
    })
    return ninetiesThousandsBooks.map((ninetiesThousandsBook) => {
      return {
        title: ninetiesThousandsBook.title, 
        year: ninetiesThousandsBook.published
      }
    })
    // Annotation:
    // Write your annotation here as a comment
  },

  getBooksByYear(books, year) {
    // return an array of objects containing all books that were
    // published after the specified year without the author or genre data. 
    // The published property should be changed to year for the returned books.
    // e.g. given 1990, return

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    /* CODE GOES HERE */
    let afterYearBooks = books.filter((book) => {
      return book.published > year
    })
    let titleAndYears = afterYearBooks.map((afterYearBook) => {
      return {
        title: afterYearBook.title,
        year: afterYearBook.published
      };
    });
    return titleAndYears;
    // Annotation:
    // Write your annotation here as a comment
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    /* CODE GOES HERE */
    let averageTemps = weather.map((area) => {
      return ((area.temperature.low + area.temperature.high) / 2);
    })
    return averageTemps;
    // Annotation:
    // Write your annotation here as a comment
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    /* CODE GOES HERE */
    let sunnySpots = weather.filter((area) => {
      return area.type === "sunny" || area.type === "mostly sunny";
    })
    let sunnyDescriptors = sunnySpots.map((sunnySpot) => {
      return `${sunnySpot.location} is ${sunnySpot.type}.`;
    })
    return sunnyDescriptors;
    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    /* CODE GOES HERE */
    let maxHumidity = Math.max(...weather.map((place) => {
      return place.humidity;
    }))
    return weather.find((place) => {
      return place.humidity === maxHumidity;
    })
    // Annotation:
    // Write your annotation here as a comment

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    /* CODE GOES HERE */
    // Input is nationalParks array of objects
    // Output is an object containing parks to visit and parks visited
    // filter()
    // Annotation:
    // Write your annotation here as a comment
    let visitedParks = nationalParks.filter((park) => {
      return park.visited === true;
    })

    let nonVisitedParks = nationalParks.filter((park) => {
      return park.visited === false;
    })

    let visitedParksDetails = {
      parksToVisit: nonVisitedParks.map((nonVisitedPark) => {
        return nonVisitedPark.name;
      }),
      parksVisited: visitedParks.map((visitedPark) => {
        return visitedPark.name;
      })
    }
    return visitedParksDetails;
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]
    // INPUT: array of objects
    // OUTPUT: modified array of objects
    

    /* CODE GOES HERE */
    return nationalParks.reduce((acc, park) => {
      acc.push({
        [park.location]: park.name
      })
      return acc;
    }, [])
    // Annotation:
    // Write your annotation here as a comment
  },
  
  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    /* CODE GOES HERE */
    return allActivities = nationalParks.reduce((acc, park) => {
      park.activities.forEach((activity) => {
        if(!acc.includes(activity)) {
          acc.push(activity);
        }
      })
      return acc;
    }, [])
    // Annotation:
    // Write your annotation here as a comment
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    /* CODE GOES HERE */
    return breweries.reduce((acc, brewery) => {
      acc += brewery.beers.length;
      return acc;
    }, 0)
    // Annotation:
    // Write your annotation here as a comment
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    /* CODE GOES HERE */
    return breweries.reduce((acc, brewery) => {
      acc.push({
        name: brewery.name,
        beerCount: brewery.beers.length
      })
      return acc;
    }, [])
    // Annotation:
    // Write your annotation here as a comment
  },

  getSingleBreweryBeerCount(breweryName) {
    // Return a number that is the count of beers that the specified
    // brewery has e.g.
    // given 'Ratio Beerworks', return 5


    /* CODE GOES HERE */
    let targetBrewery = breweries.find((brewery) => {
      return brewery.name === breweryName;
    })
    return targetBrewery.beers.length;
    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    /* CODE GOES HERE */
    let maxAbv = Math.max(...breweries.reduce((acc, brewery) => {
      brewery.beers.forEach((beer) => {
        acc.push(beer.abv);
      })
      return acc;
    }, []))
    let allBeers = breweries.reduce((acc, brewery) => {
      brewery.beers.forEach((beer) => {
        acc.push(beer);
      })
      return acc;
    }, [])
    return allBeers.find((beer) => {
      return beer.abv === maxAbv;
    })
  
    // Annotation:
    // Write your annotation here as a comment
  }
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/boardGames

const boardGamePrompts = {
  listGames(type) {
    // Return an array of just the names of the games within a specified type. 
    // e.g. given an argument of "strategy", return
    // ["Chess", "Catan", "Checkers", "Pandemic", "Battle Ship", "Azul", "Ticket to Ride"]

    /* CODE GOES HERE */
    return boardGames[type].map((game) => {
      return game.name;
    })
    // Annotation:
    // Write your annotation here as a comment
  },

  listGamesAlphabetically(type) {
    // Return an array of just the names of the games within a specified 
    // type, sorted alphabetically. 
    // e.g. given an argument of "childrens", return
    // ["Candy Land", "Connect Four", "Operation", "Trouble"]

    /* CODE GOES HERE */
    return boardGames[type].map((game) => {
      return game.name;
    }).sort();
    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestRatedGamesByType(type) {
    // Return an object which is the highest rated game within the specified type.
    // e.g. given the argument of 'party', return
    // { name: 'Codenames', rating: 7.4, maxPlayers: 8 },

    /* CODE GOES HERE */
    let maxRating = Math.max(...boardGames[type].map((game) => {
      return game.rating;
    }))
    return boardGames[type].find((game) => {
      return game.rating === maxRating;
    })
    
    // Annotation:
    // Write your annotation here as a comment
  },

  averageScoreByType(type) {
    // Return the average score for the specified type.
    // e.g. given the argument of "strategy", return 7
    // note: do not worry about rounding your result.

    /* CODE GOES HERE */
    let ratings = boardGames[type].map((game) => {
      return game.rating;
    })
    return averageRating = ratings.reduce((sum, rating) => {
      sum += rating;
      return sum;
    }, 0)/ratings.length;
    // Annotation:
    // Write your annotation here as a comment
  },

  averageScoreByTypeAndPlayers(type, maximumPlayers) {
    // Return the average score of any games that match the specified type
    // and maximum number of players.
    // e.g. given the arguments of "strategy" and 2, return 6.16666666667
    // note: do not worry about rounding your result.

    /* CODE GOES HERE */
    let targetGames = boardGames[type].filter((game) => {
      return game.maxPlayers === maximumPlayers;
    })
    return targetGames.reduce((sum, game) => {
      sum += game.rating;
      return sum;
    }, 0)/targetGames.length;
    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    /* CODE GOES HERE */
    return instructors.map((instructor) => {
      return {
        name: instructor.name,
        studentCount: (cohorts.find((cohort) => {
          return cohort.module === instructor.module;
        })).studentCount
      }
    })
    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    /* CODE GOES HERE */
    return cohorts.reduce((acc, cohort) => {
      if(!acc[`cohort${cohort.cohort}`]) {
        acc[`cohort${cohort.cohort}`] = cohort.studentCount/instructors.filter((instructor) => {
          return instructor.module === cohort.module;
        }).length;
      }
      return acc;
    }, {})
    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    /* CODE GOES HERE */
    return instructors.reduce((acc, instructor) => {
      if(!acc[instructor.name]) {
        acc[instructor.name] = instructor.teaches.reduce((acc, topic) => {
          cohorts.forEach((cohort) => {
            if(cohort.curriculum.includes(topic)) {
              if(!acc.includes(cohort.module)) {
                acc.push(cohort.module);
                acc.sort();
              }
            }
          })
          return acc;
        }, [])
      }
      return acc;
    }, {})

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    /* CODE GOES HERE */
    return cohorts.reduce((acc, cohort) => {
      cohort.curriculum.forEach((topic) => {
        if(!acc[topic]) {
          acc[topic] = [];
        }
        instructors.forEach((instructor) => {
          if(instructor.teaches.includes(topic)) {
            if(!acc[topic].includes(instructor.name)) {
              acc[topic].push(instructor.name);
            }
          }
        })
      })
      return acc;
    }, {})
    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    /* CODE GOES HERE */
    return sidekicks.reduce((acc, sidekick) => {
      if(acc.some((element) => element.bossName === sidekick.boss)) {
        let existingBoss = acc.find((element) => {
          return element.bossName === sidekick.boss;
        })
        existingBoss.sidekickLoyalty += sidekick.loyaltyToBoss;
      } else {
        acc.push({
          bossName: sidekick.boss,
          sidekickLoyalty: sidekick.loyaltyToBoss
        })
      }
      return acc;
    }, [])
    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------



// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the star objects that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   {
    //     name: 'Achernar',
    //     visualMagnitude: 0.46,
    //     constellation: 'The Plow',
    //     lightYearsFromEarth: 140,
    //     color: 'blue'
    //   },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' },
    //   {
    //     name: 'Hadar',
    //     visualMagnitude: 0.61,
    //     constellation: 'The Little Dipper',
    //     lightYearsFromEarth: 350,
    //     color: 'blue'
    //   }
    // ]

    /* CODE GOES HERE */
    let constellationsData = Object.values(constellations);
    let arr = constellationsData.reduce((acc, constellation) => {
      stars.forEach((star) => {
        if(constellation.alternateNames.includes(star.constellation)) {
          acc.push(star);
        }
      })
      return acc;
    }, [])
    console.log(arr);
    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    /* CODE GOES HERE */
    return stars.reduce((acc, star) => {
      if(!acc[star.color]) {
        acc[star.color] = [star];
      } else {
        acc[star.color].push(star);
      }
      return acc;
    }, {})
    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Sort the stars by brightness and return an array of the star's constellation names
    // Brightest Stars are indicated by visualMagnitude - the lower the number, the brighter the star
    // e.g.
    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    /* CODE GOES HERE */
    let sortedStars = stars.sort((a, b) => {
      return a.visualMagnitude - b.visualMagnitude;
    })
    let withConstellations = sortedStars.filter((star) => {
      return star.constellation.length > 0;
    })
    return withConstellations.map((star) => {
      return star.constellation;
    })
    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    /* CODE GOES HERE */
    return characters.reduce((sum, character) => {
      character.weapons.forEach((weapon) => {
        sum += weapons[weapon].damage;
      })
      return sum;
    }, 0)
    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    /* CODE GOES HERE */
    return characters.reduce((acc, character) => {
      acc.push({
        [character.name]: {
          damage: character.weapons.reduce((sum, weapon) => {
            sum += weapons[weapon].damage;
            return sum;
          }, 0),
          range: character.weapons.reduce((sum, weapon) => {
            sum += weapons[weapon].range;
            return sum;
          }, 0)
        }
      })
      return acc;
    }, [])
    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    /* CODE GOES HERE */
    return movies.reduce((acc, movie) => {
      if(!acc[movie.title]) {
        acc[movie.title] = 0;
      }
      movie.dinos.forEach((dino) => {
        if(dinosaurs[dino].isAwesome) {
          acc[movie.title]++;
        }
      })
      return acc;
    }, {})
    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts,
  boardGamePrompts,
};
