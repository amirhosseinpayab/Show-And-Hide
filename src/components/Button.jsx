export default function Button({handler, status}) {
  return (
    <div>
      <button onClick={handler}>{status ? "Hide" : "Show"}</button>
    </div>
  );
}
