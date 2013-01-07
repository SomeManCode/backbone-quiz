define(
    [
        'jquery',
        'underscore',
        'views/QuizView'
    ],
    function ($, _, QuizView) {
        'use strict';
        var QuizViewSpec = {
            test : function () {
                describe('QuizView', function () {

                    beforeEach(function () {
                        expect(QuizView).toBeDefined();
                    });

                    describe("create", function () {

                        beforeEach(function () {

                            this.view = new QuizView();
                            this.view.render();
                        });

                        it("should create a div element", function () {

                            expect(this.view.el.nodeName).toEqual('DIV');
                        });

                        it("should create a div element with 'section' class", function () {

                            expect($(this.view.el)).toHaveClass('section');
                        });

                        it("should create a div element with 'quiz_view' id", function () {

                            expect($(this.view.el)).toHaveId('quiz_view');
                        });

                    });

                    describe("View Events", function () {

                        it("should listen for click event on quit link", function () {

                            var eventSpy = spyOn(QuizView.prototype, "quit");
                            this.view = new QuizView();
                            this.view.render();

                            $(this.view.el).find('a.footerQuitAnc').trigger('click');
                            expect(eventSpy).toHaveBeenCalled();
                            expect(eventSpy.calls.length).toEqual(1);
                        });

                        it("should listen for click event on next button", function () {

                            var eventSpy = spyOn(QuizView.prototype, "next");
                            this.view = new QuizView();
                            this.view.render();

                            $(this.view.el).find('a.footerNextAnc').trigger('click');
                            expect(eventSpy).toHaveBeenCalled();
                            expect(eventSpy.calls.length).toEqual(1);
                        });

                    });

                });
            }
        };

        return QuizViewSpec;
    }
);