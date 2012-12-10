define(
    [],
    function () {
        'use strict';

        var quiz =  {
            title: "IQ Tester",
            questions: [
                {
                    question: "Two ducks and two dogs have a total of fourteen legs.",
                    answers: [
                        "true",
                        "false"
                    ],
                    weight: 2,
                    type: "radio"
                },
                {
                    question: "Which number should come next in the series? 1 - 1 - 2 - 3 - 5 - 8 - 13",
                    answers: [
                        8, 13, 21, 26, 31
                    ],
                    weight: 2,
                    type: "radio"
                },
                {
                    question: "Which one of the five is least like the other four?",
                    answers: [
                        "dog", "mouse", "lion", "snake", "elephant"
                    ],
                    weight: 4,
                    type: "radio"
                },
                {
                    question: "Mary, who is sixteen years old, is four times as old as her brother. How old will Mary be when she is twice as old as her brother?",
                    answers: [
                        20, 24, 25, 26, 28
                    ],
                    weight: 4,
                    type: "radio"
                },
                {
                    question: "Which one of the numbers does not belong in the following series? 2 - 3 - 6 - 7 - 8 - 14 - 15 - 30",
                    answers: [
                        3, 7, 8, 15, 30
                    ],
                    weight: 4,
                    type: "radio"
                },
                {
                    question: "Which one of the five choices makes the best comparison? Finger is to Hand as Leaf is to:",
                    answers: [
                        "twig", "tree", "branch", "blossom", "branch"
                    ],
                    weight: 5,
                    type: "radio"
                },
                {
                    question: "If you rearrange the letters &lsquo;CIFAIPC&rsquo; you would have the name of a(n):",
                    answers: [
                        "city", "animal", "ocean", "river", "country"
                    ],
                    weight: 2,
                    type: "radio"
                },
                {
                    question: "Choose the number that is 1/4 of 1/2 of 1/5 of 200:",
                    answers: [
                        2, 5, 10, 25, 50
                    ],
                    weight: 4,
                    type: "radio"
                },
                {
                    question: "John needs 13 bottles of water from the store. John can only carry 3 at a time. What's the minimum number of trips John needs to make to the store?",
                    answers: [
                        2, 4, 4.5, 5, 6
                    ],
                    weight: 6,
                    type: "radio"
                },
                {
                    question: "Who is the famous personality?",
                    imageURL: "http://ia.media-imdb.com/images/M/MV5BMTIwMzAwMzg1MV5BMl5BanBnXkFtZTYwMjc4ODQ2._V1._SX214_CR0,0,214,314_.jpg",
                    weight: 8,
                    type: "fillin"
                }
            ],
            time: 120, //If null, its not a timer base quiz. Value will be in seconds
            randomized: true //If true, the questions will be displayed in random.
        };

        return quiz;
    }
);