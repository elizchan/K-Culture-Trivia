//defined 2 players
let playerOne = []
let playerTwo = []

//defined starting position of the trivia
let position = 0
//function to generate room code
const getCode = () => {
    const h2Code = document.querySelector('.code')
    h2Code.innerHTML = 'Room Code: ' + Math.random().toString(36).substr(2, 5)
}
getCode()

//function to start game


//create an array of 100 objects(questions)
const questions = [
    {
        question: "What year was BTS found?",
        a: "2018",
        b: "2013",
        c: "2016",
        d: "2017",
        answer: "b"
    },
    {
        question: "What year did BTS first get top Social Artist Award at the Billboard Music Awards?",
        a: "2019",
        b: "2020",
        c: "2018",
        d: "2016",
        answer: "c"
    },
    {
        question: "Which group is not a group that was founded in 2018-2020?",
        a: "Ateez",
        b: "Everglow",
        c: "SF9",
        d: "Itzy",
        answer: "c"
    },
    {
        question: "What entertainment company is BlackPink under?",
        a: "SM Entertainment",
        b: "BigHit Labels",
        c: "JYP Entertainment",
        d: "YG Entertainment",
        answer: "d"
    },
    {
        question: "What group is not currently active under SM Entertainment?",
        a: "Red Velvet",
        b: "NCT",
        c: "SHINee",
        d: "f(x)",
        answer: "d"
    },
    {
        question: "Which group won Road to Kingdom?", 
        a: "Pentagon",
        b: "The Boyz",
        c: "Oneus",
        d: "Golden Child",
        answer: "b"
    },
    {
        question: "What is the newly formed group from BigHit Labels and Mnet called?",
        a: "Enhypen", 
        b: "I-Landers",
        c: "Enhyphen",
        d: "I-Land",
        answer: "a"
    },
    {
        question: "What group is not under FNC Entertainment?",
        a: "CNBlue", 
        b: "SF9", 
        c: "N.Flying",
        d: "A-Pink",
        answer: "d"
    },
    {
        question: "Who is the K-Pop star involved with K/DA and True Damage from League of Legends?", 
        a: "Miyeon",
        b: "Soyeon",
        c: "Bobby", 
        d: "BI",
        answer: "b"
    },
    {
        question: "Who did BlackPink not collaborate with already?", 
        a: "Selena Gomez",
        b: "Dua Lipa",
        c: "Ariana Grande",
        d: "Lady Gaga",
        answer: "c"
    },
    {
        question: "Which group was the first K-Pop act at Coachella and what year did they perform?",
        a: "BlackPink 2019", 
        b: "Epik High 2017", 
        c: "BigBang 2018",
        d: "Eric Nam 2019",
        answer: "b"
    },
    {
        question: "Which K-Pop group used sign language in their choreography?", 
        a: "VAV", 
        b: "Oneus", 
        c: "BtoB", 
        d: "Teen Top",
        answer: "c"
    },
    {
        question: "Who learned English by watching FRIENDS?", 
        a: "RM", 
        b: "BangChan", 
        c: "Jennie", 
        d: "Eric",
        answer: "a"
    },
    {
        question: "When did KCON first start occurring?", 
        a: "2015", 
        b: "2013", 
        c: "2012", 
        d: "2019",
        answer: "c"
    },
    {
        question: "When did KCON-NY first start occurring?", 
        a: "2014", 
        b: "2018", 
        c: "2016", 
        d: "2015",
        answer: "d"
    },
    {
        question: "Who founded BigHit Entertainment/BigHit Labels?", 
        a: "Yang Si Hyuk", 
        b: "JY Park", 
        c: "Lee Soo Man", 
        d: "Bang Si Hyuk",
        answer: "d"
    },
    {
        question: "How many song festivals are there at the end of the calendar year in South Korea?", 
        a: "2", 
        b: "3", 
        c: "5",
        d: "4",
        answer: "b"
    },
    {
        question: "Who did BTS perform with at the 2020 Grammys?", 
        a: "Lil Nas X", 
        b: "Jonas Brothers", 
        c: "The Weeknd", 
        d: "Justin Bieber",
        answer: "a" 
    },
    {
        question: "What year did Super Junior debut?", 
        a: "2001", 
        b: "2006", 
        c: "2005", 
        d: "2009",
        answer: "c"
    },
    {
        question: "What song is Super Junior known for?", 
        a: "Twins(Knockout)", 
        b: "Bonanama", 
        c: "Black Suit", 
        d: "Sorry Sorry",
        answer: "d"
    },
    {
        question: "How many members are in BlackPink?", 
        a: "3", 
        b: "5", 
        c: "4", 
        d: "6",
        answer: "c"
    },
    {
        question: "How many members are in Seventeen?", 
        a: "17", 
        b: "13", 
        c: "14", 
        d: "12",
        answer: "b"
    },
    {
        question: "Which female K-pop singer has the title of Nation’s Little Sister?", 
        a: "IU", 
        b: "Yoona", 
        c: "Suzy", 
        d: "Yoo In Na",
        answer: "a"
    },
    {
        question: "Which male K-Pop singer has the title of Nation’s Little Brother?", 
        a: "V from BTS", 
        b: "Lee Seung-gi", 
        c: "Rain",
        d: "Cha Eun-woo from ASTRO",
        answer: "b"
    },
    {
        question: "What song let BTS get their first win on a music show?", 
        a: "I Need You", 
        b: "Butterfly", 
        c: "You Never Walk Alone", 
        d: "DNA",
        answer: "a"
    },
    {
        question: "How did SF9 get to debut?",
        a: "Members acting in a drama",
        b: "Survival show",
        c: "Reality TV",
        d: "Busking",
        answer: "b"
    },
    {
        question: "How did BTS announce their Jason Derulo Savage Love Remix?", 
        a: "Youtube", 
        b: "Facebook", 
        c: "Twitter", 
        d: "TikTok",
        answer: "d"
    },
    {
        question: "Where do most English-speaking K-Pop artists hail from?", 
        a: "Australia", 
        b: "Los Angeles", 
        c: "Toronto", 
        d: "Vancouver",
        answer: "b"
    },
    {
        question: "How many members are in Red Velvet?", 
        a: "2", 
        b: "5", 
        c: "4", 
        d: "6",
        answer: "b"
    },
    {
        question: "What year did SHINee debut?", 
        a: "2009", 
        b: "2007", 
        c: "2008", 
        d: "2010",
        answer: "c"
    },
    {
        question: "What is Onew from SHINee’s favorite food?", 
        a: "Kimchi stew", 
        b: "Chicken", 
        c: "Pork Belly", 
        d: "Japchae",
        answer: "b"
    },
    {
        question: "Which 2PM song gained popularity 5 years after it was released?", 
        a: "Heartbeat", 
        b: "Our House", 
        c: "Hands Up", 
        d: "ADTOY",
        answer: "b"
    },
    {
        question: "What song did ATEEZ debut with?", 
        a: "Pirate King", 
        b: "HALA HALA", 
        c: "Say My Name", 
        d: "Answer",
        answer: "a"
    },
    {
        question: "What song did Everglow debut with?", 
        a: "Dun Dun", 
        b: "Bon Bon Chocolat", 
        c: "La Di Da", 
        d: "Adios",
        answer: "b"
    },
    {
        question: "What song did BTS debut with?", 
        a: "NO", 
        b: "We are Bulletproof pt 2", 
        c: "Boy in Luv", 
        d: "No More Dream",
        answer: "d"
    },
    {
        question: "What company is NU’EST under?", 
        a: "Pledis Entertainment", 
        b: "Big Hit Labels", 
        c: "SM Entertainment", 
        d: "Jellyfish Entertainment",
        answer: "a"
    },
    {
        question: "Who is the leader of G-IDLE?", 
        a: "Soyeon",
        b: "Miyeon", 
        c: "Yuqi", 
        d: "Minnie",
        answer: "a"
    },
    {
        question: "Which group developed renewed popularity after 4 members went onto Produce 101 Season 2?", 
        a: "NU’EST", 
        b: "AB6IX", 
        c: "CIX", 
        d: "JBJ",
        answer: "a"
    },
    {
        question: "Who was the youngest female solo singer to debut?", 
        a: "IU", 
        b: "BoA", 
        c: "Minzy", 
        d: "Suzy",
        answer: "b"
    },
    {
        question: "Who is not part of the Big Tittie Commitee?", 
        a: "BM from KARD", 
        b: "Baekho from NU’EST", 
        c: "Mingyu from Seventeen", 
        d: "Taecyeon from 2PM",
        answer: "d"
    },
    {
        question: "What movie won the Oscars in 2020?", 
        a: "Time to Hunt",
        b: "Parasite", 
        c: "Train to Busan", 
        d: "Svaha the 6th finger",
        answer: "b"
    },
    {
        question: "Who is the movie director for Parasite?", 
        a: "Bong Joon-ho", 
        b: "Park Chan-wook", 
        c: "Lee Chang-dong", 
        d: "Hong Sangsoo",
        answer: "a"
    },
    {
        question: "Who is not in the Wooga Squad?", 
        a: "Park Hyungsik", 
        b: "Park Seojoon", 
        c: "Choi Woosik", 
        d: "Choi Minho",
        answer: "d"
    },
    {
        question: "What drama did really well in 2016?",
        a: "Crash Landing on You", 
        b: "Itaewon Class",
        c: "Goblin", 
        d: "Hwarang",
        answer: "c"
    },
    {
        question: "How long is a typical episode in a Korean drama?", 
        a: "30min", 
        b: "45min", 
        c: "63min", 
        d: "75min",
        answer: "c"
    },
    {
        question: "What was the top K-drama at the start of 2020?", 
        a: "Itaewon Class", 
        b: "Crash Landing on You", 
        c: "Hospital Playlist", 
        d: "Hyena",
        answer: "b"
    },
    {
        question: "What is the first well-known Korean zombie movie?", 
        a: "Peninsula", 
        b: "Train to Busan", 
        c: "#Alive", 
        d: "Kingdom",
        answer: "b"
    },
    {
        question: "What drama did Park So-Dam not star in?", 
        a: "Record of Youth", 
        b: "Cinderella and the Four Knights", 
        c: "Romantic Dr. Kim", 
        d: "A Beautiful Mind",
        answer: "c"
    },
    {
        question: "What drama did Park Bo-gum star in that led to his popularity?", 
        a: "Love in the Moonlight", 
        b: "Reply 1988", 
        c: "Naeil’s Cantabile", 
        d: "Record of Youth",
        answer: "b"
    },
    {
        question: "What drama is not considered a classic?", 
        a: "Secret Garden", 
        b: "Dream High", 
        c: "Boys Over Flowers", 
        d: "Gu Family Book",
        answer: "d"
    },
    {
        question: "What TV network/Studio has a partnership with Netflix?", 
        a: "MBC", 
        b: "TvN", 
        c: "KBS", 
        d: "SBS",
        answer: "b"
    },
    {
        question: "Who is not a well known child actor/actress?", 
        a: "Kim Yoo-Jung", 
        b: "Kim Sae-Ron", 
        c: "Yeo Jin-Goo", 
        d: "Kim Soo-Hyun",
        answer: "d"
    },
    {
        question: "What used to be the episode length of a Korean weekend drama?", 
        a: "16", 	
        b: "50", 
        c: "100", 
        d: "60",
        answer: "b"
    },
    {
        question: "How many episodes are in a weekday Korean drama?", 
        a: "8", 
        b: "12", 
        c: "16", 
        d: "18",
        answer: "c"
    },
    {
        question: "Which is not a drama that Cha Eun-Woo from ASTRO starred in?", 
        a: "Rookie Historian Goo Hae-ryung", 
        b: "Gangnam Beauty", 
        c: "Hit the Top", 
        d: "Romance is a Bonus Book",
        answer: "d"
    },
    {
        question: "Which drama was Lee Jong-Suk’s breakout drama?", 
        a: "W", 
        b: "I Can Hear Your Voice", 
        c: "School 2013", 
        d: "Pinocchio",
        answer: "c"
    },
    {
        question: "Which Korean actor played a role in the GI Joe films?", 
        a: "Lee Byung-Hun", 
        b: "Ma Dong-Seok", 
        c: "Lee Joon-Gi", 
        d: "Bae Doo-Na",
        answer: "a"
    },
    {
        question: "What foreign country did Descendants of the Sun filming take place in?", 
        a: "South Africa", 
        b: "Greece", 
        c: "Australia", 
        d: "New Zealand",
        answer: "b"
    },
    {
        question: "What drama was Kim Soo-Hyun’s breakout drama?", 
        a: "My Love from the Stars",
        b: "It’s Okay to Not be Okay", 
        c: "Dream High", 
        d: "Moon Embracing the Sun",
        answer: "c"
    },
    {
        question: "Which drama is a thriller?", 
        a: "Save Me", 
        b: "Let’s Fight Ghost", 
        c: "Doctors", 
        d: "Hyena",
        answer: "a"
    },
    {
        question: "What is not a typical street food in South Korea?",
        a: "Spicy rice cakes(tteokbokki)", 
        b:"kimbap", 
        c: "Korean sweet pancakes(hotteok)", 
        d: "japchae",
        answer: "d"
    },
    {
        question: "What food became more popular because of Parasite?",
        a: "Instant ramen",
        b: "Chapaguri",
        c: "Instant Jjajjangmyeon",
        d: "Chapaghetti",
        answer: "b"
    },
    {
        question: "What does a Korean movie theater have that is not offered in the US?", 
        a: "Pretzels",
        b: "Hot Dog",
        c: "Caramel Popcorn",
        d: "Nachos",
        answer: "c"
    },
    {
        question: "What is not an ingredient for Korean corndog?",
        a: "Kimchi",
        b: "string cheese",
        c:  "sausage",
        d: "sugar",
        answer: "a"
    },
    {
        question: "What do Koreans use with their sashimi?",
        a: "Wasabi",
        b: "chili paste",
        c: "chili paste with vinegar",
        d: "soybean paste",
        answer: "c"
    },
    {
        question: "What do Koreans typically eat on the hottest days of the year?",
        a: "Tteokbokki",
        b: "Ramen",
        c: "Mul Naengmyun",
        d: "Samgyetang",
        answer: "d"
    },
    {
        question: "What do Koreans typically use when eating rice?",
        a: "Chopsticks",
        b: "Spoon",
        c: "Fork",
        d: "Hand",
        answer: "b"
    },
    {
        question: "What do Koreans love to eat with their beer?",
        a: "Dried Pollack",
        b: "Fried Chicken",
        c: "Pizza",
        d: "Hamburger",
        answer: "b"
    },
    {
        question: "What is a type of Korean chilled noodles dish?", 
        a: "Japchae",
        b: "Naengmyun", 
        c: "Kalguksu",
        d: "Jjambbong",
        answer: "b"
    },
    {
        question: "What is dried seaweed called in Korean?",
        a: "Bap",
        b: "Kim", 
        c: "Bbang",
        d: "Miyeok",
        answer: "b"
    },
    {
        question: "What food is traditionally eaten during the new year that signifies getting older?",
        a: "Seaweed Soup",
        b: "Rice Cake Soup", 
        c: "Soondubu Jjigae",
        d: "Kimchi Jjigae",
        answer: "b"
    },
    {
        question: "What food is traditionally eaten on one’s birthday for the upcoming year?",
        a: "Seaweed Soup", 
        b: "Rice Cake Soup",
        c: "Soondubu Jjigae",
        d: "Kimchi Jjigae",
        answer: "a"
    },
    {
        question: "Which of the following drinks is not made with rice?",
        a: "Soju",
        b: "Sikhye",
        c: "Bokbunja", 
        d: "Maekju",
        answer: "c"
    },
    {
        question: "How is steamed egg served?", 
        a: "in a normal bowl with rice",
        b: "in a pyrex dish",
        c: "in a pot",
        d: "in an earthenware bowl",
        answer: "d"
    },
    {
        question: "When is barley tea served in Korea?",
        a: "summer",
        b: "winter",
        c: "all year long",
        d: "none at all",
        answer: "c"
    },
    {
        question: "What is the most consumed type of meat in Korea?",
        a: "beef",
        b: "pork",
        c: "chicken",
        d: "lamb",
        answer: "b"
    },
    {
        question: "What do Koreans not eat on exam day?",
        a: "glutinous rice cake",
        b: "hard taffy",
        c: "seaweed soup",
        d: "chocolate",
        answer: "c"
    },
    {
        question: "What food is not commonly prepared for Chuseok?",
        a: "songpyeon",
        b: "pajeon",
        c: "japchae",
        d: "mooncake",
        answer: "d"
    },
    {
        question: "What utensil is the choice of Koreans?",
        a: "metal chopsticks",
        b: "bamboo chopsticks",
        c: "wooden chopsticks",
        d: "plastic chopsticks",
        answer: "a"
    },
    {
        question: "What do people usually eat on 11/11?",
        a: "Honey Butter Potato Chips",
        b: "Shrimp flavored chips",
        c: "Pocky/Pepero",
        d: "honey pastry",
        answer: "c"
    }       
]
//console.log(questions[39].answer)

//function to restart game

const restartGame = () => {
    let position = 0
    let playerOne = []
    let playerTwo = []
}
//button to restart game when it is over
//document.querySelector('.game-reset').addEventListener('click', restartGame)