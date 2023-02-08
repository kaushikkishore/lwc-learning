import { LightningElement } from "lwc";

export default class P2cParentComponent extends LightningElement {
  carousals = [
    {
      src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
      header: "First Card",
      description: "First card description.",
      altText: "First card accessible description."
    },
    {
      src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
      header: "Second Card",
      description: "Second card description.",
      altText: "Second card accessible description."
    },
    {
      src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
      header: "Third Card",
      description: "Third card description.",
      altText: "Third card accessible description."
    }
  ];
  progressPercentage = 20;

  handleChange(event) {
    this.progressPercentage = event.target.value;
  }

  handleButtonCLickToResetSlider() {
    // resetSlider
    this.template.querySelector("c-p2c-slider-component").resetSlider(70);
  }
}