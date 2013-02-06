define(
    [
        //Models
        '/test/models/QuestionModel.spec.js',
        '/test/models/QuizModel.spec.js',
        '/test/models/LanguageModel.spec.js',
        '/test/models/ScoreModel.spec.js',

        //Collections
        '/test/collections/QuestionsCollection.spec.js',

        //Views
        '/test/views/HelpView.spec.js',
        '/test/views/QuestionView.spec.js',
        '/test/views/QuestionsView.spec.js',
        '/test/views/HomeView.spec.js',
        '/test/views/ScoreView.spec.js',
        '/test/views/QuizView.spec.js'
    ],
    function (
        //Models
        QuestionModelSpec,
        QuizModelSpec,
        LanguageModelSpec,
        ScoreModelSpec,

        //Collections
        QuestionsCollectionSpec,

        //Views
        HelpViewSpec,
        QuestionViewSpec,
        QuestionsViewSpec,
        HomeViewSpec,
        ScoreViewSpec,
        QuizViewSpec
    ) {
        'use strict';
        describe('Quiz', function () {

            //Models
            describe('Models', function () {
                QuestionModelSpec.test();
                QuizModelSpec.test();
                LanguageModelSpec.test();
                ScoreModelSpec.test();
            });

            //Collections
            describe('Collections', function () {
                QuestionsCollectionSpec.test();
            });

            //Views
            describe('Views', function () {
                HelpViewSpec.test();
                QuestionViewSpec.test();
                QuestionsViewSpec.test();
                HomeViewSpec.test();
                ScoreViewSpec.test();
                QuizViewSpec.test();
            });
        });
    }
);