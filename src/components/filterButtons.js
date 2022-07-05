export default function FilterButtons({ setGrid }) {
  function setCurrentCreatures() {
    setGrid("/villager");
  }
  return (
    <div id="filter-buttons-container">
      <button onClick={setCurrentCreatures} id="rn-Button">
        Right Now
      </button>
    </div>
  );
}
