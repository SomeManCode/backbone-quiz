/*Questions View*/

define(
    [
        'jquery',
        'underscore',
        'backbone',
        'raphael',
        'views/QuestionView',
        'text!templates/QuestionsViewTemplate.html'
    ],
    function ($, _, Backbone, Raphael, QuestionView, QuestionsViewTemplate) {

        'use strict';

        var QuestionsView = Backbone.View.extend({
            id : "questions_view",
            className : "section",
            totalQuestions : null,
            template : _.template(QuestionsViewTemplate),
            paper : null,
            timeInterval : null,
            cx : 50,
            cy : 62,
            angle : -90,
            r : 37,
            rad : Math.PI / 180,
            total : 360,
            timeIteration : 0,
            timeLimit : null,
            initialize: function (options) {
                _.bindAll(this, 'render');
                this.timeLimit = options.model.get("time");
                this.collection.on('reset', this.render);
            },

            render: function () {
                this.totalQuestions = this.collection.length;
                $(this.el).html(this.template({
                    "current" : 0,
                    "total" : this.totalQuestions,
                    "next" : 0,
                    "prev" : 0,
                    "weight" : 0
                }));
                return this;
            },
            showQuestion : function (qno) {
                var self = this, qModel = null, questionView = null;
                self.qno = parseInt(qno, 10);
                if (self.qno <= this.totalQuestions) {
                        //Get question model
                    qModel = this.collection.at(self.qno - 1);
                    //Create new QuestionView with the question model
                    questionView = new QuestionView({model : qModel});
                    $(this.el).html(this.template({
                        "current" : self.qno,
                        "total" : this.totalQuestions,
                        "weight" : qModel.get('weight')
                    }));
                    $(this.el).find('.content').html(questionView.render().el);
                    this.initializeAnalogTimer();
                    this.initializeDigitalTimer();
                }
            },
            initializeDigitalTimer : function () {
                var self = this, timerElmt = $(this.el).find("div.digitalTimer"), currentTime = self.model.get("time") - self.timeIteration, mins = Math.floor(currentTime / 60), secs = currentTime % 60;
                timerElmt.empty().html(mins + " : " + secs);
            },
            initializeAnalogTimer : function () {
                var self = this, clock = null, clockRef = null;
                if (this.paper) {
                    self.resetClock();
                }
                this.paper = Raphael($(this.el).find("div.analogTimer")[0], 100, 100);
                clock = this.paper.circle(self.cx, self.cy, self.r);
                clock.attr({"fill": "#000000", "stroke": "#DADADA", "stroke-width": "2"});
                clockRef = function () {
                    self.update_clock();
                    self.initializeDigitalTimer();
                };
                self.timeInterval = setInterval(clockRef, 1000);
            },
            update_clock : function () {
                var self = this, timeCount = Math.ceil(360 / self.model.get("time")), angleplus = 360 * timeCount / self.total;
                self.drawSector(self.cx, self.cy, (self.r - 1), self.angle, self.angle + angleplus, {fill: "#00DEFF", stroke: "#00DEFF", "stroke-width": 3});
                self.angle += angleplus;
                self.timeIteration += 1;
                if (self.timeIteration === self.timeLimit) {
                    //$(this.el).find("span.next a").trigger("click");
                    self.resetClock();
                    self.goTo("quiz/q" + (self.qno + 1));
                }
            },
            drawSector : function (cx, cy, r, startAngle, endAngle, params) {
                var self = this,
                    x1 = cx + r * Math.cos(startAngle * self.rad),
                    x2 = cx + r * Math.cos(endAngle * self.rad),
                    y1 = cy + r * Math.sin(startAngle * self.rad),
                    y2 = cy + r * Math.sin(endAngle * self.rad),
                    aa = +(endAngle - startAngle > 180);
                self.paper.path(["M", cx, cy, "L", x1, y1, "A", r, r, 0, aa, 1, x2, y2, "z"]).attr(params);
            },
            resetClock : function () {
                var self = this;
                this.paper.remove();
                self.timeIteration = 0;
                self.angle = -90;
                clearInterval(self.timeInterval);
            }
        });
        return QuestionsView;
    }
);