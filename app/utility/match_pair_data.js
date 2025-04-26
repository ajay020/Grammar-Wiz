
export function getMatchquizData(index = 0) {
    if (index < 0 || index >= matchPairData.length) {
        return null // Return null if index is out of bounds
    }

    return matchPairData[index]
}

const matchPairData = [
    {
        id: 1,
        questions: [
            { id: 1, text: "Big", matched: false },
            { id: 2, text: "Small", matched: false },
            { id: 3, text: "Strong", matched: false },
            { id: 4, text: "Weak", matched: false },
        ],
        answers: [
            { id: 1, text: "Large", matched: false },
            { id: 2, text: "Tiny", matched: false },
            { id: 3, text: "Powerful", matched: false },
            { id: 4, text: "Fragile", matched: false },
        ],
    },

    {
        id: 2,
        questions: [
            { id: 1, text: "Fast", matched: false },
            { id: 2, text: "Cold", matched: false },
            { id: 3, text: "Bright", matched: false },
            { id: 4, text: "Soft", matched: false },
        ],
        answers: [
            { id: 1, text: "Quick", matched: false },
            { id: 2, text: "Chilly", matched: false },
            { id: 3, text: "Shiny", matched: false },
            { id: 4, text: "Gentle", matched: false },
        ],
    },

    {
        id: 3,
        questions: [
            { id: 1, text: "Happy", matched: false },
            { id: 2, text: "Angry", matched: false },
            { id: 3, text: "Clean", matched: false },
            { id: 4, text: "Hard", matched: false },
        ],
        answers: [
            { id: 1, text: "Joyful", matched: false },
            { id: 2, text: "Furious", matched: false },
            { id: 3, text: "Tidy", matched: false },
            { id: 4, text: "Solid", matched: false },
        ],
    },
    {
        id: 4,
        questions: [
            { id: 1, text: "Hot", matched: false },
            { id: 2, text: "Dark", matched: false },
            { id: 3, text: "Tall", matched: false },
            { id: 4, text: "Wide", matched: false },
        ],
        answers: [
            { id: 1, text: "Warm", matched: false },
            { id: 2, text: "Dim", matched: false },
            { id: 3, text: "High", matched: false },
            { id: 4, text: "Broad", matched: false },
        ],
    }

]
