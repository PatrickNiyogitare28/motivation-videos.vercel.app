import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Video from "../assets/videos/bg-video.mp4";
import Header from "../components/header";
import Installation from '../components/installation';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="banner-container">
    <div className="banner-wrapper">
    <video 
     autoplay 
     loop id="myVideo"
     className="video-player"
     height="100%"
     width="100%"
     loop
     muted
     autoPlay
     >
      <source src='https://res.cloudinary.com/dccwzpgnz/video/upload/v1644479263/mot-videos/bg-video_flqh4q.mp4' type="video/mp4" />
    </video>
    </div>
    <div class="nav-wrapper">
      <Header />
    </div>
    <div className="highright">
      <h1>Download your dairy motivation videos</h1>
      <p>Would you like to see a video that motivates and inspires you? Did your day get worse and you want to cheer up? Well, now it's possible with just one click.</p>
    </div>
    </div>
   
    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
    <div
     style={{
       display:'flex',
       flexDirection:'column',
       justifyContent:'space-around',
       padding:'2% 20%'
     }}
    >
   
      {/* <p>
        <Link to="/page-2/" className="text-green-500">Ubuntu</Link> <br />
        <Link to="/using-typescript/">PI os</Link> <br />
      </p> */}
      <Installation />
    </div>
  </Layout>
)

export default IndexPage
