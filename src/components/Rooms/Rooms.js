import Signals from "./Signals";
import Balcony from "./Balcony";

const Rooms = () => {
  return (
    <div
      style={{
        backgroundColor: "#F8F3EE",
        paddingTop: "40rem",
        marginTop: "-40rem",
      }}
    >
      <Signals />
      <Balcony />
    </div>
  );
};

export default Rooms;
