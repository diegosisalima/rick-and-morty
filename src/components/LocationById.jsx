import "../styles/LocationById.css";
const LocationById = ({ apiData }) => {
  return (
    <div className="Location-by-id">
      <h1>{apiData?.name}</h1>
      <ul>
        <li>
          <b>Residents:</b> {apiData?.residents.length}
        </li>
        <li>
          <b>Type:</b> {apiData?.type}
        </li>
        <li>
          <b>Dimension:</b> {apiData?.dimension}
        </li>
      </ul>
    </div>
  );
};
export default LocationById;
