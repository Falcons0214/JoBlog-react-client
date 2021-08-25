import React from "react";
import "./About.css";

class About extends React.Component {

  constructor(props) {
    super(props);
    this.props.curPathRecord(true);
  }

  render() {
    return (
      <div className="bio-container">
        <div className="photo-section">
          <img alt="img" src="https://lh3.googleusercontent.com/fife/AAWUweXaYgYLjX4MmAZ9GsF32v6M829nRGGnwMpOCjXwpJ_IVbf4RZS4L_PvQS5u_OFus1vzVM7NxlQH6JkyCkV_exmxPF6spfzw2D1tbdexl_r_h6qCYqEZrwwHilRrYHwqQ-44T_tZ8I1eFNyHKR9cpaUTCFtzT85JNp9HUj1n9eiGG8lFr0sSYptLeXh9s2RB3j8u9m72gtkhlIfw5SqgeK9lFMOGPq4bEY0KII6DVnY9ku3nd6PkLx0z6JJ3fBVPawdYXb2p8pBT-iNunMluKLpvKQSyvU5EKxueWCpO0oStDlRdMEvNOmnxKm13j5dXLf4EmJPVBCEz1fHfq7QR5Hw5FuGgv2TOjqBVAknMCQkRxD7J4vZdftQ7HSGQ_BHt40pIZMhHmXanv4IcpXoiBGzmYA1e1c-ePkyA6shtcpKdqMy0B__mCuzMVCUc-uEoJfwCTA3noSOF8fmARy45IY69tpfL0ysdC9RI34gMPVfaJszKSNQz6s66QLERCUVBQp9yqes9qby3eYPeBePw-YmsqIXCmfZaOU5CQnfw3bI7kaclYHiahDGJZgLagzm5_EAq3o-nTSJi-gFzZK1SOL3w9MelxcxE1VOZI3ObFp4R_0CRW74sv_HvmCcahXCA7BHEtnbliTtTrixoqerjubimfMlyS99PUYYGrvJ7euitetlP7jEUmvF_qaNBaD66eRKG8cSgBAB8ailuYozjlFnObhU=w1442-h992-ft" />
        </div>
        <div className="text-section">
          <p>
            <b>Hi ! I'm Jospeh. 黃柊森</b>
            <br />
            <br />
            這裡分享我所學以及生活雜事
          </p>
        </div>
        <div className="icon-container">
          <a
            className="about-f"
            href="https://www.facebook.com/profile.php?id=100006462815125"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="about-g" href="https://github.com/">
            <i className="fab fa-github-alt"></i>
          </a>
          <a href="https://jeffery12366yahoo-com.medium.com/">
            <i className="fab fa-medium-m"></i>
          </a>
          <a
            className="about-l"
            href="https://www.linkedin.com/in/%E6%9F%8A%E6%A3%AE-%E9%BB%83-2252ab21a/"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            className="about-r"
            href="https://hackmd.io/pD7HmoU_Sge5yziG_zu97w?both"
          >
            <i className="fab fa-react"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default About;
