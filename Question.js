class Question {
    constructor() {
        this.question = createElement('h2');
        this.answer1 = createElement('h3');
        this.answer2 = createElement('h3');
        this.answer3 = createElement('h3');
        this.answer4 = createElement('h3');
        this.input = createInput('answer');
        this.button = createButton('Send');
    }
    display() {
        this.question.html('Which programmer of these created Mario Bros?');
        this.answer1.html('1) Toru Iwatani');
        this.answer2.html('2) Janco Tianno');
        this.answer3.html('3) Shigeru Miyamots');
        this.answer4.html('4) Leslie Benzie');
        this.question.position(50, 150);
        this.answer1.position(50, 180);
        this.answer2.position(50, 210);
        this.answer3.position(50, 240);
        this.answer4.position(50, 270);
        this.input.position(500, 200);
        this.button.position(675, 200);
        this.button.mousePressed(()=>{
            player.responce = this.input.value();
            player.update();
            answerCount+=1;
            answer.updateCount(answerCount);
            this.input.hide();
            this.button.hide();
            this.question.hide();
            this.answer1.hide();
            this.answer2.hide();
            this.answer3.hide();
            this.answer4.hide();
        });
    }
}