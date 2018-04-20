import React, { Component } from "react";
import Slider from "react-slick";
import "./Suggestion.css";

class Suggestion extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500
    };
    return (
      <div className="Suggestion">
        <h2 className="suggestion-title">Meal suggestion for this week</h2>
        <p>- Click the image to check out the recipes!</p>
        <Slider
          className="Slider"
          ref={slider => (this.slider = slider)}
          {...settings}
        >
          <div>
            <a
              className="meal-ten"
              target="_blank"
              href="https://sweetpeasandsaffron.com/4-fruit-filled-meal-prep-snacks/"
            >
              <img src="images/meal10.jpg" alt="meal-ten" />
            </a>
          </div>
          <div>
            <a
              className="meal-eleven"
              target="_blank"
              href="https://www.beachbodyondemand.com/blog/mexican-food-meal-prep-1800-2100-calories"
            >
              <img src="images/meal11.jpg" alt="meal-eleven" />
            </a>
          </div>
          <div>
            <a
              className="meal-twelve"
              target="_blank"
              href="https://www.foodnetwork.com/recipes/food-network-kitchen/garlic-chicken-and-potatoes-recipe-2120118"
            >
              <img src="images/meal12.jpg" alt="meal-twelve" />
            </a>
          </div>

          <div>
            <a
              className="meal-nine"
              target="_blank"
              href="https://kristineskitchenblog.com/meal-prep-greek-couscous-salad/"
            >
              <img src="images/meal9.jpg" alt="meal-nine" />
            </a>
          </div>

          <div>
            <a
              className="meal-eight"
              target="_blank"
              href="https://www.eatwell101.com/meal-prep-roasted-chicken-and-sweet-potato"
            >
              <img src="images/meal8.jpg" alt="meal-eight" />
            </a>
          </div>

          <div>
            <a
              className="meal-fifteen"
              target="_blank"
              href="https://dailyburn.com/life/health/meal-prep-ideas-healthy-eating/"
            >
              <img src="images/meal15.jpg" alt="meal-fifteen" />
            </a>
          </div>
        </Slider>
        <div style={{ textAlign: "center" }}>
          <button className="button-one" onClick={this.play}>
            Play
          </button>
          <button className="button-two" onClick={this.pause}>
            Pause
          </button>
        </div>
      </div>
    );
  }
}

export default Suggestion;
