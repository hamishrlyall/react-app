// PascalCasing - First letter of every word is capitalised. Function components should always follow PascalCasing
function Message() {
  // JSX: JavaScript XML
  const name = "Hamish";
  if (name) return <h1>Hello {name}</h1>;
  return <h1>Hello World</h1>;
}

export default Message;
