// Generated by CoffeeScript 1.8.0
(function() {
  var NameRandomizerDynamicValue;

  NameRandomizerDynamicValue = function() {
    this.maleNames = [
"Joseph",
"Malcolm",
"Uriel",
"Uriel",
"Len",
"Carlos",
"Eric",
"Sebastian",
"Upton",
"Emerson",
"Len",
"Alvin",
"Kasimir",
"Bruce",
"Zeus",
"Rigel",
"Ferris",
"Declan",
"Reese",
"Nero",
"Barry",
"Buckminster",
"Ezra",
"Tanner",
"Colt",
"Cruz",
"Neil",
"Lev",
"Thomas",
"Theodore",
"Brennan",
"Ira",
"Abel",
"Asher",
"Solomon",
"Christian",
"Mufutau",
"Brendan",
"Graham",
"Evan",
"Alden",
"Reece",
"Nathan",
"Nicholas",
"Callum",
"Sawyer",
"Zeph",
"Justin",
"Logan",
"Evan",
"Brendan",
"Dolan",
"Charles",
"Hoyt",
"Carter",
"Benedict",
"Marsden",
"Palmer",
"Walter",
"Lamar",
"Damon",
"Brandon",
"Julian",
"Hiram",
"Jack",
"Jordan",
"Christopher",
"Tobias",
"Finn",
"Nehru",
"Raymond",
"Hashim",
"Bert",
"Craig",
"Mannix",
"Alden",
"Ray",
"Devin",
"Hu",
"Hop",
"Owen",
"Jakeem",
"Stuart",
"Samuel",
"Edan",
"Bevis",
"Baker",
"Gage",
"Darius",
"Gage",
"Elliott",
"Gannon",
"Kadeem",
"Aristotle",
"Baker",
"Vance",
"Giacomo",
"Xander",
"Keith",
"Perry",
"Brody",
"Harrison",
"Wallace",
"Giacomo",
"Duncan",
"Kaseem",
"Wade",
"Mohammad",
"Valentine",
"Wylie",
"Noble",
"Kenyon",
"Rafael",
"Clayton",
"Colin",
"Zachery",
"Brady",
"Griffin",
"Carson",
"Lawrence",
"Adam",
"Herman",
"Nathan",
"Linus",
"Charles",
"Samuel",
"Ulysses",
"Kasper",
"Vincent",
"Roth",
"Oleg",
"Fletcher",
"Uriel",
"Oliver",
"Myles",
"Tad",
"Zephania",
"Raja",
"Charles",
"Hasad",
"Abel",
"Avram",
"Louis",
"Chaney",
"Hakeem",
"Hakeem",
"Callum",
"Neil",
"Wayne",
"Ezekiel",
"Eagan",
"Sylvester",
"Ahmed",
"Lewis",
"Benjamin",
"Brennan",
"Arden",
"Malik",
"Dale",
"Emery",
"Odysseus",
"Cadman",
"Dolan",
"Kennan",
"Calvin",
"Lewis",
"Samuel",
"Thomas",
"Stuart",
"Ignatius",
"Colby",
"Laith",
"Lawrence",
"Ulric",
"Harrison",
"Wade",
"Lucas",
"Baxter",
"Gary",
"Edan",
"Andrew",
"Brenden",
"Graham",
"Jack",
"Malachi",
"Damon",
"Henry",
"Justin",
"Channing",
"Leonard",
"Melvin",
"Elton",
"Theodore",
"Dustin",
"Lawrence",
"Jamal",
"Emmanuel",
"Jonas",
"Jakeem",
"Dominic"
];

this.femaleNames = [
"Macy",
"Marny",
"Maryam",
"Amy",
"Cameron",
"Kay",
"Jane",
"Kylynn",
"Shannon",
"Jolene",
"Hope",
"Maxine",
"Bianca",
"Roary",
"Irma",
"Shay",
"Imani",
"Autumn",
"Alea",
"Kirestin",
"Neve",
"Maile",
"Donna",
"Unity",
"Alea",
"Cora",
"Ella",
"Myra",
"Vanna",
"Mercedes",
"Inga",
"Karyn",
"Shaine",
"Scarlett",
"Ivana",
"Aimee",
"Eugenia",
"Alika",
"Shana",
"Clio",
"Marcia",
"Ramona",
"Cora",
"Guinevere",
"Lani",
"Alana",
"Heather",
"Hedwig",
"Quin",
"Azalia",
"Jemima",
"Patricia",
"Aline",
"Jayme",
"Melyssa",
"Rana",
"Mona",
"Mercedes",
"Jessamine",
"Martha",
"Margaret",
"Michelle",
"Myra",
"Cynthia",
"Leigh",
"Kelly",
"Willow",
"Julie",
"Grace",
"Eugenia",
"Macey",
"Tara",
"Holly",
"Melinda",
"Lacota",
"Jennifer",
"Freya",
"Gretchen",
"Xyla",
"Shaeleigh",
"Julie",
"Winifred",
"Nita",
"Nevada",
"Brynn",
"Virginia",
"Bryar",
"Shay",
"Dacey",
"Janna",
"Scarlett",
"Cathleen",
"Dai",
"Claire",
"Halla",
"Kylan",
"Katelyn",
"Lois",
"Calista",
"Leah",
"Karleigh",
"Quemby",
"Maggy",
"Orli",
"Tasha",
"Whoopi",
"Zena",
"Bo",
"Lacy",
"Nomlanga",
"Ella",
"Madeline",
"Desirae",
"Hannah",
"Christen",
"Martina",
"Jocelyn",
"Meghan",
"Wyoming",
"Madeline",
"Jeanette",
"Joan",
"Leilani",
"Sopoline",
"Sade",
"Teagan",
"Hedda",
"Wanda",
"Sybil",
"Donna",
"Martena",
"Bryar",
"Leigh",
"Kay",
"Gemma",
"Pascale",
"Aurora",
"Althea",
"Willow",
"Rhea",
"Emerald",
"Alma",
"Isabelle",
"Abigail",
"Quinn",
"Dahlia",
"Pearl",
"Denise",
"Xandra",
"Karyn",
"Sylvia",
"Michelle",
"Petra",
"Colleen",
"Genevieve",
"Keelie",
"Cleo",
"Doris",
"Heidi",
"Samantha",
"Quin",
"Jane",
"Pamela",
"Pascale",
"Maryam",
"Glenna",
"Lara",
"Alika",
"Alana",
"Athena",
"Chloe",
"Kim",
"Martha",
"Ava",
"Stephanie",
"Jael",
"Jessica",
"Bo",
"Shelley",
"Gloria",
"Kyla",
"Chloe",
"Echo",
"Whitney",
"Alfreda",
"Heidi",
"Shay",
"Kessie",
"Tamekah",
"Rana",
"Dora",
"Maisie",
"Aurora",
"Joelle",
"Sonia",
"Nola",
"Risa",
"Nell",
"Maya",
"Kiayada"
];

this.lastNames = [
"Browning",
"Foreman",
"Wiggins",
"Mullins",
"Hurst",
"Harper",
"Manning",
"Leblanc",
"Cotton",
"Combs",
"Mcclain",
"Hood",
"Love",
"Vincent",
"Johnson",
"Rivers",
"Summers",
"Skinner",
"Frank",
"Barnes",
"Harrington",
"Galloway",
"Steele",
"Shelton",
"Huffman",
"Zamora",
"Mcgowan",
"Reed",
"Berger",
"York",
"Dyer",
"Koch",
"Eaton",
"Logan",
"Tyson",
"Meadows",
"Burns",
"Dotson",
"Williamson",
"Martinez",
"Orr",
"Fletcher",
"Washington",
"Gibson",
"Allison",
"Johnston",
"Norris",
"Strong",
"Frederick",
"Booth",
"Goff",
"Moon",
"Aguilar",
"Walls",
"Paul",
"Bowman",
"Colon",
"Gibbs",
"Contreras",
"Shields",
"Wilder",
"Whitney",
"Howard",
"Leblanc",
"Colon",
"Summers",
"Morrison",
"Gibbs",
"Sykes",
"Quinn",
"Blake",
"Booker",
"Richards",
"Mendez",
"Rasmussen",
"Massey",
"Hutchinson",
"Castaneda",
"Hickman",
"Pace",
"Cleveland",
"Butler",
"Norton",
"Banks",
"Carney",
"Kelley",
"Frye",
"England",
"Whitfield",
"Nunez",
"Woodard",
"Curry",
"Velasquez",
"Ramsey",
"Knight",
"Savage",
"Frost",
"Lee",
"Emerson",
"Puckett",
"Jarvis",
"Roach",
"Daniel",
"Rios",
"Chapman",
"Odonnell",
"Payne",
"Calhoun",
"Lindsey",
"Terrell",
"Wilson",
"Shaw",
"Weber",
"Harrington",
"Bishop",
"Dillon",
"Bowers",
"Grimes",
"Barnes",
"Moon",
"Swanson",
"Hall",
"Kennedy",
"Potter",
"Griffith",
"Sellers",
"Hammond",
"Arnold",
"Mcknight",
"England",
"Shaffer",
"Marquez",
"Flynn",
"Matthews",
"Long",
"Dixon",
"Montoya",
"Crane",
"Contreras",
"Keller",
"Curry",
"Wolf",
"Mccarthy",
"Conway",
"Bennett",
"Sweeney",
"Tran",
"Vance",
"Mccoy",
"Mcneil",
"Randolph",
"Johns",
"Hays",
"Pruitt",
"Holloway",
"Garrison",
"Oneal",
"Stafford",
"Dunn",
"Mckay",
"Wheeler",
"Emerson",
"Mccoy",
"Wilson",
"Rogers",
"Yang",
"Goodman",
"Mcintosh",
"Collins",
"Stephens",
"Buck",
"Allen",
"Ballard",
"Mcconnell",
"Ramos",
"Mckenzie",
"Gilbert",
"Farmer",
"Baker",
"Vincent",
"Bryant",
"Lynn",
"Beck",
"Ramirez",
"Wilcox",
"Mcleod",
"Black",
"Stanton",
"Kemp",
"Cardenas",
"Oneil",
"Suarez",
"Mclaughlin",
"Rojas",
"Farrell",
"Harding",
"Anthony",
"Abbott",
"Rios",
"Estes"
];

    this.evaluate = function() {
      var array = [];
      if (this.arrayType == "maleNames") {
        array = this.maleNames;
      }
      else if (this.arrayType == "femaleNames") {
        array = this.femaleNames;
      }
      else if (this.arrayType == "lastNames") {
        array = this.lastNames;
      }
      else {
        array = ["Choose either `maleNames`, `femaleNames` or `lastNames`"];
      }

      var name_idx = Math.floor(Math.random() * array.length);
      return "" + array[name_idx];
    };
    this.title = function() {
      return "Name Randomizer";
    };
  };

  NameRandomizerDynamicValue.identifier = "com.commanigy.PawExtensions.NameRandomizerDynamicValue";

  NameRandomizerDynamicValue.title = "Name Randomizer Dynamic Value";

  NameRandomizerDynamicValue.inputs = [
    DynamicValueInput("arrayType", "Type", "String")
  ];

  registerDynamicValueClass(NameRandomizerDynamicValue);

}).call(this);
