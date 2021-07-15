import Baxter from './baxter';
import Dave from './dave';
import Taylor from './taylor';
const players = 
    {
        "dave": Dave,
        "baxter": Baxter,
        "jeff": {
            "pageLink": "jeff",
            "icon": "fas fa-user-ninja",
            "firstName": "Jeff",
            "name": "Jeff Annison",
            "title": "Rampuri - Human Monk",
            "links": [
                
            ],
            "about": "Working on it",
            "stats":[
                
            ],
            "bio": "",
            "imgBefore": "img/dd.jpg",
            "imgAfter": "img/dd.jpg",
            "facts": {
                "factIntro": "",
                "list":[

                ]
            },
            "scores": {
                "intro": "",
                "abilities": {
                    "strength": 2,
                    "dexterity": 3,
                    "constitution": 5,
                    "intelligence": 7,
                    "wisdom": 20,
                    "charisma": 1
                }
            }
        },
        "mandy": {
            "pageLink": "mandy",
            "icon": "fas fa-hat-wizard",
            "firstName": "Mandy",
            "name": "Mandy Bardisbanian",
            "title": "Kondra - High Elf Wizard",
            "links": [
                
            ],
            "about": "When I was 11 years old I read about about a boy who lived under a staircase, who met a big harry guy with an umbrella, made friends with an owl, got an important stick, and who got taken to a school full of people that were scared to say a dude's name out loud. That kid was my best friend, and ever since then I do whatever it takes to live in his world. D&D is the closest thing I've found yet, so here we are. ",
            "stats":[
                {
                    "title": "Vision",
                    "value": "Rare, magical trait called MGJWS"
                },
                {
                    "title": "Height",
                    "value": "Eye level with Hobbits"
                },
                {
                    "title": "Flaw",
                    "value": "Impatience"
                },
                {
                    "title": "Strength",
                    "value": "Ambition"
                },
                {
                    "title": "Charities",
                    "value": "Anything to do with dogs & LGBTQ+ youth"
                },
                {
                    "title": "Actual Job",
                    "value": "VP, Merchandising & Licensing for Legion M"
                },
                {
                    "title": "Dance Ability",
                    "value": "My forearms tend to move wildly in the air."
                },
                {
                    "title": "Pets",
                    "value": "Eye level with Hobbits"
                }
            ],
            "bio": "Being a proud Slytherin, I am always looking for ways to win. D&D has been a perfect release for my wild, and at times dangerous, ambition.",
            "imgBefore": "img/mandy-before.jpg",
            "imgAfter": "img/mandy-after.jpg",
            "facts": {
                "factIntro": "",
                "list":[
                    {
                        "number": "47",
                        "icon": "fas fa-swatchbook",
                        "textBold": "Different Colors",
                        "text": "my hair has been"
                    },
                    {
                        "number": "83",
                        "icon": "fas fa-grin-hearts",
                        "textBold": "average per day rate",
                        "text": "that I find a reason to bring up my beautiful wife in conversation"
                    },
                    {
                        "number": "124",
                        "icon": "fas fa-film",
                        "textBold": "times",
                        "text": "I have watched Twilight"
                    },
                    {
                        "number": "1358",
                        "icon": "fas fa-smile",
                        "textBold": "Bags of Lays Potato Chips",
                        "text": "I have gone through in my life...and counting"
                    }
                ]
            },
            "scores": {
                "intro": "",
                "abilities": {
                    "strength": 5,
                    "dexterity": 6,
                    "constitution": 12,
                    "intelligence": 10,
                    "wisdom": 11,
                    "charisma": 14
                }
            }
        },
        "matan": {
            "pageLink": "matan",
            "icon": "fas fa-guitar",
            "firstName": "Matan",
            "name": "Matan Goldstein",
            "title": "Zancorin Aldoris - Halfling Bard",
            "links": [
                {
                    "href": "https://www.instagram.com/g_eidolon/",
                    "type": "instagram"
                },
                {
                    "href": "https://twitter.com/G_eidolon",
                    "type": "twitter"
        
                },
                {
                    "href": "https://www.tiktok.com/@asexualmemes?lang=en",
                    "type": "tiktok"
                }
            ],
            "about": "I love D&D because I have always been awed by fantasy and all the possible worlds that could exist in it, but most importantly be able to escape into it.",
            "stats":[
                {
                    "title": "Vision",
                    "value": "Near Sighted + Astigmatism"
                },
                {
                    "title": "Height",
                    "value": "Larger than a dwarf, smaller than a giant"
                },
                {
                    "title": "Flaw",
                    "value": "ADD"
                },
                {
                    "title": "Strength",
                    "value": "My Wife"
                },
                {
                    "title": "Charities",
                    "value": "GiveWell"
                },
                {
                    "title": "Actual Job",
                    "value": "Support Engineer, 3PL Central"
                },
                {
                    "title": "Dance Ability",
                    "value": "I can wiggle my fingers to the beat"
                },
                {
                    "title": "Pets",
                    "value": "Hermione, Ryan, & George (cats)"
                }
            ],
            "bio": "In real life, I am neutral good. I believe the most important aspect of humanity is to be good. And unlike the stupid-af philosopher Kant, being good does not always mean following the law to the letter. To be good, you must follow the spirit of the law, using your humanity to judge when the law must be diverged from. In D&D, I exclusively play Neutral or Chaotic Good. I don't believe Lawful Good is possible, as laws often directly contradict doing Good. I'm too anxious to play an evil character.",
            "imgBefore": "img/matan.jpg",
            "imgAfter": "img/matan.jpg",
            "facts": {
                "factIntro": "Me. By the numbers",
                "list":[
                    {
                        "number": "8",
                        "icon": "fas fa-infinity",
                        "textBold": "Is a Magical Number",
                        "text": "because it is infinite. Sideways. But infinite."
                    },
                    {
                        "number": "328",
                        "icon": "fas fa-book-open",
                        "textBold": "Hours of Contract reading",
                        "text": "in their entirety"
                    },
                    {
                        "number": "3",
                        "icon": "fas fa-chart-pie",
                        "textBold": "well, 3.14 Pies Eaten",
                        "text": "per day (repeating infinitly)"
                    },
                    {
                        "number": "20",
                        "icon": "fas fa-bullseye",
                        "textBold": "Shurikens",
                        "text": "thrown at target"
                    },
                ]
            },
            "scores": {
                "intro": "Challenge me to anything! Based on my stats, I'll probably lose.",
                "abilities": {
                    "strength": 6,
                    "dexterity": 8,
                    "constitution": 8,
                    "intelligence": 12,
                    "wisdom": 12,
                    "charisma": 12
                }
            }
        },
        "paul": {
            "pageLink": "paul",
            "icon": "fas fa-hand-sparkles",
            "firstName": "Paul",
            "name": "Paul Scanlan",
            "title": "Corleone - Half Drow Warlock",
            "links": [
                
            ],
            "about": "Just been really busy'",
            "stats":[
                
            ],
            "bio": "",
            "imgBefore": "img/paul-before.jpg",
            "imgAfter": "img/paul-after.jpg",
            "facts": {
                "factIntro": "",
                "list":[

                ]
            },
            "scores": {
                "intro": "",
                "abilities": {
                    "strength": 2,
                    "dexterity": 13,
                    "constitution": 11,
                    "intelligence": 12,
                    "wisdom": 10,
                    "charisma": 12
                }
            }
        },
        "taylor": Taylor,
        "terri": {
            "pageLink": "terri",
            "icon": "fas fa-dragon",
            "firstName": "Terri",
            "name": "Terri Lubaroff",
            "title": "Tatiana Lightstorm - Dragonborn Paladin",
            "links": [
                
            ],
            "about": "One Sec!",
            "stats":[
                
            ],
            "bio": "",
            "imgBefore": "dd.jpg",
            "imgAfter": "dd.jpg",
            "facts": {
                "factIntro": "",
                "list":[

                ]
            },
            "scores": {
                "intro": "",
                "abilities": {
                    "strength": 2,
                    "dexterity": 3,
                    "constitution": 3,
                    "intelligence": 3,
                    "wisdom": 3,
                    "charisma": 3
                }
            }
        }
    };

export default players;
