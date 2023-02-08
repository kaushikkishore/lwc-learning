import { LightningElement } from "lwc";

export default class QuizzApp extends LightningElement {
  selected = {};
  correctAnswers = 0;
  isSubmitted = false;
  questions = [
    {
      id: "Question1",
      question: "Which one of the following is not a template loop?",
      answers: {
        a: "for:each",
        b: "iterator",
        c: "map"
      },
      correctAnswer: "c"
    },
    {
      id: "Question2",
      question: "Which one of the following is not a LWC component folder?",
      answers: {
        a: ".svg",
        b: ".apex",
        c: ".js"
      },
      correctAnswer: "b"
    },
    {
      id: "Question3",
      question: "Which one of the following is not a directive?",
      answers: {
        a: "for:each",
        b: "if:true",
        c: "@track"
      },
      correctAnswer: "c"
    }
  ];

  changeHandler(event) {
    const { name, value } = event.target;
    this.selected = { ...this.selected, [name]: value };
    console.log("Name: ", event.target.name);
    console.log("Value: ", event.target.value);
  }

  submitHandler(e) {
    e.preventDefault();
    const filterResult = this.questions.filter(
      (item) => this.selected[item.id] === item.correctAnswer
    );
    this.correctAnswers = filterResult.length;
    this.isSubmitted = true;
    console.log(this.correctAnswers);
  }

  resetHandler() {
    this.selected = {};
    this.correctAnswers = 0;
    this.isSubmitted = false;
  }

  get allNotSelected() {
    return !(Object.keys(this.selected).length === this.questions.length);
  }

  get isScoredFull() {
    return `slds-text-heading_large ${
      this.questions.length === this.correctAnswers
        ? "slds-text-color_success"
        : "slds-text-color_error"
    }`;
  }
}