
export function Colorbox({ color }) {
  const boxstyles = {
    backgroundColor: color,
    height: "25px",
    width: "250px",
    marginTop: "10px",
  };
  return (
    <div style={boxstyles}></div>
  );
}
