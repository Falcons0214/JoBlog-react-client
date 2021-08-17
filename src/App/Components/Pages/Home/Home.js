import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// Home & Movie & life using the same page, but distinguish by URL parameters. { /:id }

// function filter the post class

function Postbox(props) {
  const posts = props.postItems;
  const list = posts.map((item) => (
    <div className="post" key={item.path}>
      <div className="post-header">
        <h2 className="post-title">{item.title}</h2>
        <Link to={item.path}>
          <i className="fas fa-link"></i>
        </Link>
      </div>
      <div className="post-meta">
        <span>Joseph by </span>
        <span>{item.meta}</span>
        <br />
        <span>Tag: </span>
        <span>{item.tag}</span>
      </div>
      <div className="post-img">
        <img alt="post-img" src={item.photo} />
      </div>
    </div>
  ));
  return <div className="post-container">{list}</div>;
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.props.pathRecorder(false);
    this.state = {
      postList: [
        {
          title: "First Post",
          meta: "7/12/2020 06:22:00 下午",
          tag: "Life",
          photo:
            "https://lh3.googleusercontent.com/fife/AAWUweXr7A9ye8OLAW6S1ok98RPalSVlqkLq-aVRwYTlU5Flt-RMCkkPTVRGZ3tdSllibI7cP5dl3Vpicrd-FeaodioyUEWSY8oa8blPXCSqf6qCUVbd_rT4WiYCFy7uOKE0L5lfvokDkN0Ycb70aK4iwvDB4XNOZYKne6jPc8hBiFNiIPcULAxok9Tnv7j5D2E-wuB-k8o1yLTgA1t_comd7HgVjahqRYJsn9ugo3IXDcC-PkuG6idX0eqiC0OIpRhlZNunAZ9sVdR0P5ZgSB8nQDb9fqcTfbp-QiaOgZEoUXHjjnxR6-WDYw3WDxnFbKj_TQVdpaS3XZmDLFszYZUM01luB2NhAxOVJTBxuIPmfv4AZzGZnytyzB-5kSGKtYEkTLfv8fSaF4NR_RxiTQGg4-3qMSG7GMrPa0X0c49OXi-d4hq0jEEJsz0QIHYt3O--cCd_rpX5r1VL7-CeX6lITeJTe_KUreKtrBOB4Be6K3_7XzPALXk3RKX6gFVdDbzpJdZj1Xy1hLrwUcRsnM1Q9P2deyrVHMQ2fbOWfP8MNLlncYskowwaFgYk4KY3zr2GgxsprnHhoRzquI-8b8PJ33hrwV-v4zh5JLtoSwIaPqz6IEPLMStQnGTzGIn1GwQc6DAXHVo65SPcd0-NV6yQ9vkgdbwgXTSXZF0bbsJoUcckG_OPzIjvPDH5wzHawEiyBNTpyoXFqfhH8_CDp6fGHx40F4k=w1920-h992-ft",
          path: "post/1",
        },
        {
          title: "YoYoYo",
          meta: "7/13/2020 06:22:00 下午",
          tag: "Life",
          photo:
            "https://lh3.googleusercontent.com/fife/AAWUweVedxW7HAono_L57dlhTHhHa8O_X7a9O1QMOq3KHkiFxobf9ajwdNz3y5bg9ZDSUyjmeRzmWq-RKeQr3SjvlzE1nkOSC9LKK4DNDEKsGI1g4GxMVV84tmjTuCUTI8nC2aQ0JNrqdKk8yEf7lYCRqzWGp-8Knf0Atcjl52bqWRJzrm6yzUbJKNqfU4xDb2vlQ97Xpn3m8joBcSai5XAGFSots-HtrsbvEqHsHHZPu-aLX9QF8L4SAXVCxIezftQRpgUAbHvPkMKpjQDJp6R1DnkLcjg3uAFumhTw8ZqboiW6qUIl7hi5pNqEM5GSgN2sBMFnQjbQPKBZ3oZcs4pSch7Ne8QQv6HGb937T0dtoH1LtcJ9A1TkfbTIbEK4gZJwSebq3Yc4xdu9FWtnVwbD20sE9ig4Y0x3p_AOZ_weZg165U5SoEHLxH9CnpMv8KuQ82irqjR70wsTzlLumeXtZSCU_j8dn7OQt5kQd400Ad76oW1Do3iblavP36vWeqLZKGOOJ4Iq0C7zN2wGxzMLUCH_FWDvbl7cwVZvEo7K8qX-ikDJsV1MLFEMA8afaO8s7m87USlZ00PSOQlw8NVA5hFedP59AHFx1iqCWhxvhJ6cdBPCyf6322RwIPymb9bkTM6nLZkognBZwEBdHJWiwYLXfxpPdfGHmMlHixOv5DIFgZzLTkkNmdpia9Khl4n-aL4sCHdbabnW--sdhOnS-h_zjJM=w1442-h992-ft",
          path: "post/2",
        },
        {
          title: "長頸鹿",
          meta: "7/14/2020 06:22:00 下午",
          tag: "Movie",
          photo:
            "https://lh3.googleusercontent.com/fife/AAWUweVHearSxHhMCdyMlQ3_tS_f8AgJ3u6U0OYEeIFG6nYxj3MnqBBWIcFCbRd2zg_S8ohKOrIwN3WwFP-hJGm5vk8pU7j_yDWj-wOt2MB4V8auZP3zxxhZBDPpls1xtQKwWY6BDuaqbbEX3zetNaT27WaCITsuwSyU-Z82y3oXXZNXsrxC9kJ_UaMrfNrL_1pwq6MvzfsNeztH9jOyBHUTbOkXb1VqaaXSVFO6EJpTgnVQwZrWNkzvL1cXEoOxOsDFqa99P0LU-lOx5nJg_cW7TPLerroAFcaJYKMmmESK12nLIIT792qEYVg0G4JGyXt634-CGQWM6mrJBbubRWIrS6W3PAIu9N-cU4pwq_wqjY7RsjyuKqRCaO-4hXLvUu4mb9Fl_0K-9lY0UP8_ojDM4Ha8jR-Udh_56pkIGtEYzZUk3eckDUb1fsxZ6U5Q_r88iR2sxQ5yzLBdsn-Ak2AV4QINuOVx9UwZNl5erH88LGGpkvJhOERSIif7_73-s9xK0RonmjP9f1ZRv0oMnWQ2ad7K9mtfZQlK1zxmqZ2ReNx40hxWvo3j1Xzb74LzSPJk0p3InKrcYYQvagznyHLRFcY82V-pvyk3bFeY0rI4s8zNcdpp1bhAu2Lxt-AiVpwe1s01zhtDXKMyANiqctCoHSpyPf0o-AJ8iCJK3eI8rSm8ulJMS8FTc2qYrYiCZFu6LslnK0hhTle0z0Ud3q9nMKXg8qc=w1442-h992-ft",
          path: "post/3",
        },
      ],
    };
  }

  render() {
    return <Postbox postItems={this.state.postList} />;
  }
}

export default Home;
