import Intro from "../components/Intro/Intro";
import Content from "../components/Content/Content";

function Home() {
  return (
    <div className="App dark">
        <div className="container">
            <Intro />
            <Content />
        </div>
    </div>
  )
}

export default Home;