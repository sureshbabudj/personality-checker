// questionnaire sourced from https://openpsychometrics.org/tests/MIES/development/

const questionnaire = [
    "I talk to a lot of different people at parties.",
    "I love large parties.",
    "I am quiet around strangers.",
    "I am the life of the party.",
    "I don't talk a lot.",
    "I start conversations.",
    "I keep in the background.",
    "I feel comfortable around people.",
    "I don't mind being the center of attention.",
    "I want a huge social circle.",
    "I can keep a conversation going with anyone about anything.",
    "I don't like to draw attention to myself.",
    "I talk to people when waiting in lines.",
    "I sometimes speak so quietly people sometimes have trouble hearing me.",
    "I have to psych myself up before I am brave enough to make a phone call.",
    "I have trouble finding people I want to be friends with.",
    "I would enjoy being a sports team coach.",
    "I prefer to socialize 1 on 1, than with a group.",
    "I am a flamboyant person.",
    "I prefer to eat alone.",
    "I have little to say.",
    "I would be pleased if asked to speak at a funeral.",
    "I would have difficulty describing myself to someone.",
    "I am good at making impromptu speeches.",
    "I naturally emerge as a leader.",
    "I am a bundle of joy.",
    "I would never go to a dance club.",
    "I would never audition to be on a game show.",
    "I reveal little about myself.",
    "I am not much of a flirt.",
    "I'd like to be in a parade.",
    "I really like dancing.",
    "My life would not make a good story.",
    "I spend hours alone with my hobbies.",
    "I have a strong personality.",
    "I do not like to get my picture taken.",
    "I act wild and crazy.",
    "I find it very hard to tell people I find them attractive.",
    "I feel healthy and vibrant most of the time.",
    "I am interested in people.",
    "I often feel blue.",
    "I am hesitant to give suggestions.",
    "I do not care about sports.",
    "I tire out quickly.",
    "I love excitement.",
    "I am spontaneous.",
    "I like formal occasions.",
    "I have leadership abilities.",
    "I never tell people the important things about myself.",
    "I am good an entertaining children.",
    "I am involved with my community.",
    "I don't make eye contact when I talk with people.",
    "I am not really interested in others.",
    "When I was a child, I put on fake concerts and plays with my friends.",
    "I am never at a loss for words.",
    "I hate people.",
    "I prefer individual sports to team sports.",
    "I am always in the moment.",
    "I avoid going to unknown places.",
    "I am excited by many different activities.",
    "Going to the doctor is always awkward for me.",
    "I have not kept up with my old friends over the years.",
    "I have not been joyful for quite some time.",
    "I am happy with my life.",
    "I hate to ask for help.",
    "I like pranks.",
    "I was an outcast in school.",
    "I would enjoy being a librarian.",
    "I laugh a lot.",
    "I mostly listen to people in conversations.",
    "I am brave.",
    "I make people feel at ease.",
    "If I were to die, I would not want there to be a memorial for me.",
    "I would hate living with room mates.",
    "I make big physical movements whenever I get excited.",
    "I work out regularly.",
    "I am a high status person.",
    "I would have to be lost for a very long time before asking help.",
    "I take lots of pictures of my activities.",
    "I have wanted to be a stand-up comedian.",
    "I would go surfing regularly if I lived on a beach.",
    "My parents know nothing about my love life.",
    "I love to do impressions.",
    "I am able to stand up for myself.",
    "I spend most of my time in fantasy worlds.",
    "I often feel lucky.",
    "I tend to be admired by others.",
    "I have a monotone voice.",
    "I hate shopping.",
    "I would like to try bungee jumping.",
    "I mostly listen to people in conversations.",
    "I am a touchy feely person.",
    "I love to brainstorm with others.",
    "I am usually not single.",
    "I never leave the door to my room open.",
    "I would like it if my friends played a prank on me.",
    "I would be interested in going on a blind date.",
    "I can talk others into doing things.",
    "I make a lot of hand motions when I talk.",
    "I ask people for movie recommendations.",
    "I enjoy physical exercise.",
    "I am bad at remembering names.",
    "I am not interested in other people's problems.",
    "I'd rather live in the arctic than the tropics.",
    "I would be interested in sky diving.",
    "Fear of being taken advantage of keeps me from being more trusting.",
    "I am uncomfortable in elevators.",
    "I would never go riding down a stretch of rapids in a canoe.",
    "I take a long time to answer emails or text messages.",
    "I seldom feel blue.",
    "I find most people boring.",
    "I would be very embarrassed if someone learned all my secrets.",
    "I try to control and hide my anger.",
    "I get stressed out easily.",
    "I like swimming.",
    "I think it is rude to read a book at a party.",
    "I wanted to be an author when I was a child.",
    "I can‘t stand aggressive people.",
    "I listen to rap music.",
    "I take time out for others.",
    "After I finish a conversation, I spend much more time thinking about things I should have said.",
    "I believe in a universal power or God.",
    "I put a lot of work in to it when I dress up in costume.",
    "I think ‘that is what she said‘ jokes are funny.",
    "I like to go camping and hiking.",
    "I get an empty feeling after I finish a good book, movie, or game.",
    "I listen to country music.",
    "I am interested in the Dungeons & Dragons role playing game.",
    "I worry about things.",
    "I prefer to eat at expensive restaurants.",
    "I love to travel.",
    "I like to drink alcohol.",
    "I would enjoy a hot air balloon ride very much.",
    "I trust in luck.",
    "I have excellent ideas.",
    "I prefer to vacation on the beach rather than the mountains.",
    "I am relaxed most of the time.",
    "I like to gossip.",
    "I am nostalgic about high school.",
    "I feel an incredible desire to travel the world.",
    "I like to wrestle with people.",
    "I get upset easily.",
    "I have wished that I could become self sufficient; living off the land, making everything I use myself.",
    "I want to own expensive things.",
    "I could never trust someone who embarrassed me in public once.",
    "I like really, really fast music.",
    "I think it is rude to call people on the phone late at night.",
    "I feel like crying when I get in trouble.",
    "I am full of ideas.",
    "I feel others' emotions.",
    "I have frequent mood swings.",
    "I get irritated easily.",
    "I shower every day.",
    "I sympathize with others' feelings.",
    "I have dreamed of being a politician.",
    "I get embarrassed when someone does something stupid.",
    "I have a bad memory for faces.",
    "I do not listen to pop-music at all.",
    "I spend time reflecting on things.",
    "I often feel bored.",
    "I am easily disturbed.",
    "I would prefer watching a comedy show to visiting a museum.",
    "I make self-deprecating jokes all the time.",
    "I think people should not talk on their cellphones on the bus.",
    "When I get sick, I want to stay in bed.",
    "I am comfortable with farting in front of people.",
    "I liked to climb trees as a child.",
    "I get chores done right away.",
    "I want to get my teeth whitened.",
    "I played a lot of hide-and-go-seek as a child.",
    "I get excited when I argue.",
    "I do not use slang when I speak.",
    "I change my mood a lot.",
    "I follow a schedule.",
    "I leave my belongings around.",
    "I listen to classical music.",
    "I would be interested in working as a police officer.",
    "I shirk my duties.",
    "I do not have a good imagination.",
    "I like to work with computers.",
    "I like to write.",
    "I make a mess of things.",
    "I use difficult words.",
    "I feel little concern for others.",
    "I am quick to understand things.",
    "I never watch movies alone.",
    "I like order.",
    "Loud music helps me study.",
    "I am consciously aware of the facial expressions I make when I talk with people.",
    "I wanted to be an astronaut when I was a child.",
    "I have a vivid imagination.",
    "I listen to electronic dance music.",
    "I am always prepared.",
    "I have a soft heart.",
    "I would remove my capacity to feel angry if I could.",
    "I would be interested in working as a therapist.",
    "I am exacting in my work.",
    "I enjoy watching terrible movies to laugh at them.",
    "I am interested in reptiles.",
    "I pay attention to details.",
    "I have difficulty understanding abstract ideas.",
    "I have a rich vocabulary.",
    "I listen to folk music.",
    "I often forget to put things back in their proper place.",
    "I am not interested in abstract ideas.",
    "I insult people."
];

let prevQuestion = {};
function getRandomQuestion() {
    const random = Math.floor(Math.random() * questionnaire.length)
    if (random in prevQuestion) {
        return getRandomQuestion()
    }
    prevQuestion[random] = true
    return questionnaire[random]
}

function getRandomQuestions(count) {
    const questions = []
    for (let i = 0; i < count; i++) {
        questions.push(getRandomQuestion())
    }
    prevQuestion = {}
    return questions
}

function getResult(res) {
    // 14 * -2 = -28 - introvert
    // 14 * -1 = -14 - slightly introvert
    // 14 * 0 = 0 - Neutral
    // 14 * 1 = 14 - Slightly extrovert
    // 14 * 2 = 28 - extravert
    let response
    try {
        res = JSON.parse(res)
        let value = 0;
        let answered = 0;
        res.forEach(i => {
            if (i !== null) {
                answered++
                value = value + parseInt(i)
            }
        })
        let result = 'You seems to be '
        if (value < answered * -1) {
            result += 'an Introvert'
        } else if (value >= answered * -1 && value < 0) {
            result += 'a Social Introvert'
        } else if (value === 0) {
            result += 'a Ambivert'
        } else if (value > 0 && value < answered) {
            result += 'an Omnivert'
        } else {
            result += 'an Extrovert'
        }
        console.log(value, "   ", answered);
        response = { result }
    } catch (error) {
        response = { error: "Internal server error" }
    }
    return response
}


export default [{
    url: '/api/questions',
    method: 'get',
    response: ({ query }) => {
        return getRandomQuestions(query.count)
    }
}, {
    url: '/api/answers',
    method: 'get',
    response: ({ query }) => {
        return ['Disagree', 'Slightly Disagree', 'Neutral', 'Slightly Agree', 'Agree']
    }
}, {
    url: '/api/myanswers',
    method: 'post',
    rawResponse: async (req, res) => {
        let reqbody = ''
        await new Promise((resolve) => {
            req.on('data', (chunk) => {
                reqbody += chunk
            })
            req.on('end', () => resolve(undefined))
        })

        let response = getResult(reqbody)
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 'error' in response ? 500 : 200
        res.end(JSON.stringify(response))
    }
}]
