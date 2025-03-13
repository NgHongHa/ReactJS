export default function TabButton({ children }) {
  function handleClick() {
    alert("nút được bấm");
  }
  return (
    <li>
      <button onDoubleClick={handleClick}>{children}</button>
    </li>
  );
}

// export default function TabButton({ batky }) {
//   return (
//     <li>
//       <button>{batky}</button>
//       {/* cách 2 */}
//     </li>
//   );
// }
