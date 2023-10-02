import Signals from "./Signals";
import Balcony from "./Balcony";

const Rooms = () => {
  return (
    <div
      style={{
        backgroundColor: "#F8F3EE",
        paddingTop: "30rem",
        marginTop: "-30rem",
      }}
    >
      <Signals />
      <Balcony />
    </div>
  );
};

export default Rooms;
