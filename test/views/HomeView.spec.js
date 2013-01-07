define(
    [
        'jquery',
        'underscore',
        'views/HomeView'
    ],
    function ($, _, HomeView) {
        'use strict';
        var HomeViewSpec = {
            test : function () {
                describe('HomeView', function () {

                    beforeEach(function () {
                        expect(HomeView).toBeDefined();
                    });

                    describe("create", function () {

                        beforeEach(function () {

                            this.view = new HomeView();
                            this.view.render();
                        });

                        it("should create a div element", function () {

                            expect(this.view.el.nodeName).toEqual('DIV');
                        });

                        it("should create a div element with 'section' class", function () {

                            expect($(this.view.el)).toHaveClass('section');
                        });

                        it("should create a div element with 'home_view' id", function () {

                            expect($(this.view.el)).toHaveId('home_view');
                        });

                    });

                    describe("View Events", function () {

                        it("should listen for click event on start game button", function () {

                            var startGameClickedSpy = spyOn(HomeView.prototype, "startGameClicked");
                            this.view = new HomeView();
                            this.view.render();

                            $(this.view.el).find('.start_game').trigger('click');
                            expect(startGameClickedSpy).toHaveBeenCalled();
                            expect(startGameClickedSpy.calls.length).toEqual(1);
                        });

                        it("should listen for key up event on user name textbox", function () {

                            var validateUserNameSpy = spyOn(HomeView.prototype, "validateUserName");
                            this.view = new HomeView();
                            this.view.render();

                            $(this.view.el).find('.user_name').trigger('keyup');
                            expect(validateUserNameSpy).toHaveBeenCalled();
                            expect(validateUserNameSpy.calls.length).toEqual(1);
                        });

                        it("should listen for click event on template division", function () {

                            var templateDivClickedSpy = spyOn(HomeView.prototype, "templateDivClicked");
                            this.view = new HomeView();
                            this.view.render();

                            $(this.view.el).find('.templateDiv:first').trigger('click');
                            expect(templateDivClickedSpy).toHaveBeenCalled();
                            expect(templateDivClickedSpy.calls.length).toEqual(1);
                        });

                        it("should listen for change event on languages select field", function () {

                            var languageChangedSpy = spyOn(HomeView.prototype, "languageChange");
                            this.view = new HomeView();
                            this.view.render();

                            $(this.view.el).find('.languagesSelect').trigger('change');
                            expect(languageChangedSpy).toHaveBeenCalled();
                            expect(languageChangedSpy.calls.length).toEqual(1);
                        });

                        it("should listen for click event on help button", function () {

                            var helpClickedSpy = spyOn(HomeView.prototype, "helpClicked");
                            this.view = new HomeView();
                            this.view.render();

                            $(this.view.el).find('.help').trigger('click');
                            expect(helpClickedSpy).toHaveBeenCalled();
                            expect(helpClickedSpy.calls.length).toEqual(1);
                        });

                    });

                });
            }
        };

        return HomeViewSpec;
    }
);