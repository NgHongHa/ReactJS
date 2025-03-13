import { Mydata } from "../data";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import TabButton from "./components/TabButton";
// MainContent.propTypes = {
//   image: propTypes.string.isRequired,
// };
function App() {
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Khái niệm chính trong React</h2>
          <ul>
            <MainContent
              image={Mydata[0].image}
              title={Mydata[0].title}
              desc={Mydata[0].desc}
            />
            <MainContent {...Mydata[1]} /> {/* thuộc tính trải spread */}
            <MainContent {...Mydata[2]} />
            <MainContent {...Mydata[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>examples</h2>
          <menu>
            <TabButton>nút cách 1</TabButton>
            {/* <TabButton batky="nút cách 2"></TabButton> */}
          </menu>
        </section>
      </main>
    </>
  );
}

export default App;
