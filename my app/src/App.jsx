import { Mydata } from "../data";
import logo from "./assets/logo-tuhoc.png";
function Header() {
  return (
    <>
      <header>
        <img src={logo} alt="Tự Học" />
        <h1>React Tuhoc.cc</h1>
        <p>
          Học React - Khám phá cách xây dựng ứng dụng linh hoạt, hiện đại, và
          đầy sáng tạo!
        </p>
      </header>
    </>
  );
}
function MainContent(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </li>
  );
}
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
      </main>
    </>
  );
}

export default App;
