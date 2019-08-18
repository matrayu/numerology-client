const motivation = {
    1: 'You are ambitious, dislike detail, want to lead, direct, dominate and be praised. You are concerned with your image and prefer to be a loner.',
    2: 'You crave love and understanding. You would rather follow than lead. You want partnerships, marriage, companionship, peace, harmony, and comfort.',
    3: 'You love an audience. You want to be popular, have many friends, and be surrounded by beauty.',
    4: 'You want structure and rules both at home and at work. You want to work hard in a thorough and methodical way for the benefit of others. You do not like innovations.',
    5: 'You want personal freedom, variety, exposure to the unusual, new opportunities, and frequent changes.',
    6: 'You want to create social and personal harmoney, to instill you own ideals and principles in everyone, to right all the wrongs. You want to center your life around the home and loved ones. You want to establish roots.',
    7: 'You dislike menial work, physical discomfort, noise, and confusion. You want to observe and analyze the "why" of everything. You dislike being tied down. You want peace and quiet, to live within yourself, to meditate, and to dream.',
    8: 'You enjoy big business and love to struggle against opposition. You want power, success in material matters, to become wealthy and accumulate material things.',
    9: 'You seek knowledge. You want to teach, counsel, and serve humanity.',
    11: 'You are a visonary who wants to be surrounded by like people. You want others to act according to your ideals and prefer ideals to your fellow man.',
    22: 'You are interest in the good and security of all mankind. You want to build for humanity.',
}

const innerSelf = {
    1: 'You dream of being courageous, daring, fair, loyal, original, a leader and a promoter of new ideas.',
    2: 'You dream of being surrounded by loved ones in an atmosphere of peace and harmony.',
    3: 'You dream of being popular, attractive, artistic, creative, and applauded and appreciated by an audience.',
    4: 'You dream of being strong, reliable, practical, hard-working, a pillar of society upon whom all depend.',
    5: 'You dream of being a world travler, leading a life of adventure unhampered by ties or resonsibilities.',
    6: 'You dream of being the center of an adoring family, of running a beautiful home that is open to all your friends.',
    7: 'You dream of being surrounded by books in an atmosphere of peace, quiet, and beauty. You dream of being wise, whom other people com to consult.',
    8: 'You dream of conducting business on an enormous scalre, of being a powerful executive surrounded by opulence and having a large staff of employees.',
    9: 'You dream of being artistic, humanintarian, eager to serve, understanding of sufferings of other people, a giver of comfort and advice.',
    11: 'You dream of being an inspired visionary who would gladly die for your ideals.',
    22: 'You dream of being a master planner and builder, of uniting all nations and countries in constructive activity to benefit all humanity.',
}

const expression = {
    1: 'You are a nonconformist, daring, forceful, aggressive, unconventional, ambitious, creative, original, a leader. You are happiest being the boss, or doingwork that leaves you unhampered to carry out your own ideas.',
    2: 'You bring harmony and love to family and groups, oftening working behind the scenes. You are cooperative, passive, shy, vulnerable, a sensitve sponge soaking in everydetail of your environment. You are most at home in occupations in which you can work in association with other people, in which detail and minuteness are important, or in which you can put your innate tact and desire for harmony to use.',
    3: 'You are outgoing, social, animated, popular, artistic, creative, expressive, and imaginative. You are most comfortable in cheerful, expressive, or decorative occupations.',
    4: 'You have tremendous self-discipline, are a tireless woker, obedient, enduring, perservering, sincere, honest, stubborn, and conservative. You are most comfortable with routine and time-tested methods and are happiest building and working with material media.',
    5: 'You are a free spirit, world traveler, entertaining, pleasure-seeking, adventurous, energetic, and seeker of change. You are all things to all people and welcomed in an crowd. You succeed best at occupations that bring you into contact with other people and allow you freedom of speech and action.',
    6: 'You are practival, stable, sentimental, home-oriented, loyal, opinionated, and understanding. You are happiest in positions of responsibility and trust, where you can regulate, adjust, and harmonize--occupations connected with homes, institutions, improving educational or material conditions, caring for the old, or training the young.',
    7: 'You are a perfectionist, poised, aloof, quiet, secrative, slow to warm to a relationship, interested in philosophy and the meaning of life. You are happiest being an authority whom others come to consult, or doing some kind of executive work where you need not get your hands dirty.',
    8: 'You are business-oriented, organized, good at handling material things, a seeker of wealth, dominant, aggressive, practical, direct, self-assured, and generous. You are most successful as a top executive in big business.',
    9: 'You are a universalist, lover of mankind, have compassion for all and want to improve conditions for all humanity. You search for the truth and give freely of yourself. You work best in occupations where the the outlook is global rather than confined to small places or small situations, where inspirations, kindliness, and human understanding are essential.',
    11: 'You are an idealist, an inspired thinker, intuitive, psychic, dramatic, vibrant, mystical, high-strung, intense, and imaginative. You are not adapted to the business world and are happiest in a position where you can express your ideals.',
    22: 'You are practical, resourceful, honest, warm, idealistic, inspired, and a good organizer with great potential for achievement. You are a master builder who beautifies as you build, who opens up new fields and makes them accessible.',
}

const karmicLessons = {
    1: '1 is the lesson of "Individulaity". You must learn to stand alone, to think openly and freely. Until this lesson is learned, you will constantly be forced into situations where you must make your own decisions.',
    2: '2 is the lesson of "Tact, Patience, and Cooperation". You must learn not to overlook small details. Until this lesson is learned, life will constanly force you into situations where you cannot achieve anything unless you are patient, cooperative, and observant.',
    3: '3 is the lesson of "Self-Expression". You must learnto have confidence in yourself. Until this lesson is learned, life will constantly force you into situations where you will lose all that you want unless you come out of your shell and express yourself openly.',
    4: '4 is the lesson of "Hard Work". Until you learn this lesson, life will not let you accomplish anything unless you work carefully for it. Any attempt to take short cuts or speed things along will result in loss.',
    5: '5 is the lesson of "Understanding and Adaptability". You must learn to be tolerant, to adapt to different situations, and above all not to be jealous or possessive of those close to you. Until this lesson is learned, life will force many changes on you and you will be faced with many crises.',
    6: '6 is the lesson of "Domestic Responsibility". You must learn to take on responsibility willingly without seeking perfection in others. Until this lesson is learned, life will force you to manke many adjustments. You will be put into situations where friends and familiy will do little for you yet burden you with many requirements.',
    7: '7 is the lesson of "Emotional and Spiritual Mastery". You must learn to have faith. Until this lesson is learned you will be exposed to bereavement, loneliness, poverty, and isolation.',
    8: '8 is the lesson of "Material and Financial Mastery". You must learn how to handle your own affairs. Until this lesson is learned, life will force you into situations where you must distribute your funds wisely or else feel the lack of them.',
    9: '9 is the lesson of "Compassion". You must learn to have sympathy and understanding for the feelings of others. Until this lesson is learned life will bring you much emotional pain.',
}

const hiddenTendencies = {
    1: '1 is the desire for "Self". There is a tendency to be opinionated, domineering, egotistical.',
    2: '2 is the desire for "Associations". There is a tendency to rely too heavily on others, to drain family and friends both emotionally and physically.',
    3: '3 is the desire for "Self-Expression". There is a tendency to be boastful, impatient, aimless, and party-seeking, and to scatter the energies.',
    4: '4 is the desire to "Work". There is a tendency to smoother the self with too many details and mundane tasks, to be stubborn and narrow-minded.',
    5: '5 is the desire to "Change and Personal Freedom". There is a tendency to misuse freedom at the expense of others, to overindulge in sex or drugs, to seek change with reason, to be hasty and impulsive.',
    6: '6 is the desire to "Achievement and Responsibility". There is a tendency to be overly concerned with family and duties, to be stubborn, self-righteous, and ingrained with unyielding ideals.',
    7: '7 is the desire for "Wisdom and Knowledge". There is a tentendcy toward secretiveness, scheming, and alcoholism.',
    8: '8 is the desire for "Material Things". There is a tendency to be overly concerned with the attainment of wealth and power.',
    9: '9 is the desire for "Universal Knowledge and All-Encompassing Love". There is a tendency to be overly concerned with the problems of the world to the detriment of yourself.'
}

const subconciousResponse = {
    3: 'You are a scattered, decentralized individual of ungoverned actions who reacts destructively and explosively.',
    4: 'You are lost in a maze of details. Your reactions are very weak and your tendacy is to vacillate.',
    5: 'You are tense and nervous. In crisis tend to be confused and impulsive.',
    6: 'You are sentimental. You first concern is always for your loved ones and prized possessions.',
    7: 'You are aloof and do not get personally involved. You regard situations analytically, then retreat into yourself. You might also turn to alcohol.',
    8: 'You are efficient and oranized in a crisis. You are dependable and solid and can be relied upon in any situation.',
    9: 'You are bored with life. Most things are of little importance to you. In a crisis you are impersonal, philosophical, and resigned.'
}

const HelpersService = {
    getMotivation(num) {
        return(motivation[num])
    },

    getInnerSelf(num) {
        return(innerSelf[num])
    },

    getExpression(num) {
        return(expression[num])
    },

    getKarmicLessons(num) {
        return(karmicLessons[num])
    },

    getHiddenTendencies(num) {
        return(hiddenTendencies[num])
    },

    getSubconciousResponse(num) {
        return(subconciousResponse[num])
    },

}


export default HelpersService