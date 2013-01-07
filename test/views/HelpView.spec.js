define(
    [
        'jquery',
        'underscore',
        'views/HelpView'
    ],
    function ($, _, HelpView) {
        'use strict';
        var HelpViewSpec = {
            test : function () {
                describe('HelpView', function () {

                    beforeEach(function () {
                        expect(HelpView).toBeDefined();
                    });

                    describe("create", function () {

                        beforeEach(function () {

                            this.view = new HelpView({
                                numberOfQuestions : 10,
                                duration : 60
                            });
                            this.view.render();
                        });

                        it("should create a div element", function () {

                            expect(this.view.el.nodeName).toEqual('DIV');
                        });

                        it("should create a div element with 'section' class", function () {

                            expect($(this.view.el)).toHaveClass('section');
                        });

                        it("should create a div element with 'help_view' id", function () {

                            expect($(this.view.el)).toHaveId('help_view');
                        });

                    });

                    describe("View Events", function () {

                        beforeEach(function () {

                            this.backButtonClickedSpy = spyOn(HelpView.prototype, "backButtonClicked");

                            //Create view
                            this.view = new HelpView({
                                numberOfQuestions : 10,
                                duration : 60
                            });

                            this.view.render();
                        });

                        it("should listen for click event on back button", function () {

                            $(this.view.el).find('.back').trigger('click');
                            expect(this.backButtonClickedSpy).toHaveBeenCalled();
                            expect(this.backButtonClickedSpy.calls.length).toEqual(1);
                        });

                    });

                });
            }
        };

        return HelpViewSpec;
    }
);