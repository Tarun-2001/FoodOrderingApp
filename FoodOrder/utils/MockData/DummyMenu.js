import { restaurantMenu } from "./mockData";

const DummyMenu = () => {
  return (
    <div>
      <h1>Dummy - Menu items!!!</h1>
      <ul style={{"listStyle":"bullet", display:"block"}} >
        {
        restaurantMenu.map((menu, ind) => (
          <li  key={ind}>{menu}</li>
        ))}
      </ul>
    </div>
  );
};

export default DummyMenu;
