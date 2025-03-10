import "./App.css";
import demoPic from "../src/assets/img/image1.png";
let today = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();
const wellcome = [
  "Chào mừng bạn đến với React !",
  "Nguyễn Hồng Hà đang học React",
  "Rất vui vì được gặp bạn",
];

function randomTitle() {
  return Math.floor(Math.random() * wellcome.length);
}
function Header() {
  return (
    <>
      <h1>{wellcome[randomTitle()]}</h1>
      <p>
        Hôm nay là : <strong>{today}</strong>. thời gian hiện tại {time}
      </p>
    </>
  );
}
let name = prompt("Nhập tên của bạn");
let isLogetIn = true;
function DinamicVale() {
  return (
    <>
      <h2>Chào {name}</h2>
      <p>{isLogetIn ? "Bạn đã đăng nhập" : "hãy đăng nhập"}</p>//
      <img src={demoPic} alt="" />
    </>
  );
}
function App() {
  return (
    <>
      <Header />
      <DinamicVale />
    </>
  );
}

export default App;
