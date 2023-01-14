import React, { Component } from "react";
import YouTubeComp from "../../component/YouTubeComp/YouTubeComp";

class Home extends Component {
  render() {
    return (
      <div>
        <p>YouTube Component</p>
        <hr />
        <YouTubeComp time="09.12" title="Harga Minyak Murah" desc="26 rb x ditonton . 7 bulan yang lalu" />
        <YouTubeComp time="01.12.09" title="Korupsi Berkurang" desc="1 jt x ditonton . 2 tahun yang lalu" />
        <YouTubeComp time="40.35" title="Cara Membedakan Apel dan Melon" desc="524 x ditonton . 1 jam yang lalu" />
        <YouTubeComp time="23.59" title="Tutorial Mandi" desc="53 rb x ditonton . 2 bulan yang lalu" />
        <YouTubeComp />
      </div>
    );
  }
}

export default Home;
