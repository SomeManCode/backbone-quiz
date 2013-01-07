define(
    [
        'jquery',
        'underscore',
        'views/ScoreView'
    ],
    function ($, _, ScoreView) {
        'use strict';
        var ScoreViewSpec = {
            test : function () {
                describe('ScoreView', function () {

                    beforeEach(function () {
                        expect(ScoreView).toBeDefined();
                    });

                    describe("create", function () {

                        beforeEach(function () {

                            this.view = new ScoreView({responses : [], questionModels : []});
                            this.view.render();
                        });

                        it("should create a div element", function () {

                            expect(this.view.el.nodeName).toEqual('DIV');
                        });

                        it("should create a div element with 'section' class", function () {

                            expect($(this.view.el)).toHaveClass('section');
                        });

                        it("should create a div element with 'score_view' id", function () {

                            expect($(this.view.el)).toHaveId('score_view');
                        });

                    });

                    describe("View Events", function () {

                        it("should listen for click event on play again button", function () {

                            var playAgainClickedSpy = spyOn(ScoreView.prototype, "playAgainClicked");
                            this.view = new ScoreView({responses : [], questionModels : []});
                            this.view.render();

                            $(this.view.el).find('.play_again').trigger('click');
                            expect(playAgainClickedSpy).toHaveBeenCalled();
                            expect(playAgainClickedSpy.calls.length).toEqual(1);
                        });

                        it("should listen for click event on new game button", function () {

                            var newGameClickedSpy = spyOn(ScoreView.prototype, "newGameClicked");
                            this.view = new ScoreView({responses : [], questionModels : []});
                            this.view.render();

                            $(this.view.el).find('.new_game').trigger('click');
                            expect(newGameClickedSpy).toHaveBeenCalled();
                            expect(newGameClickedSpy.calls.length).toEqual(1);
                        });

                    });

                });
            }
        };

        return ScoreViewSpec;
    }
);