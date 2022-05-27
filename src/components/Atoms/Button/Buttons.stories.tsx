import Buttons from "./Button";

const ButtonsComponent = {
  title: "Atoms/Buttons",
  component: Buttons,
};

export default ButtonsComponent;

export const Explore = () => (
  <Buttons
    content="Explore"
    width="100px"
    endIcon={true}
    height="30px"
    color="white"
    backgroundColor="#8C52C6"
    type="text"
  />
);
export const MyLibrary = () => (
    <Buttons
      content="My Library"
      width="130px"
      endIcon={true}
      height="30px"
      color="white"
      backgroundColor="#8C52C6"
      type="text"
    />
  );
  export const Home = () => (
    <Buttons
      content="Home"
      width="54px"
      endIcon={false}
      height="30px"
      color="white"
      backgroundColor="#8C52C6"
      type="text"
    />
  );

  export const SeeMore = () => (
    <Buttons
      content="See More  >"
      width="120px"
      endIcon={false}
      height="24px"
      color="#FF725E"
      backgroundColor="white"
      type="text"
    />
  );

  export const Category = () => (
    <Buttons
      content="Category"
      width="128px"
      endIcon={true}
      height="42px"
      color="#606060"
      backgroundColor="#FFFFFF"
      type="outlined"
    />
  );

  export const SortBy = () => (
    <Buttons
      content="Sort By"
      width="128px"
      endIcon={true}
      height="42px"
      color="#606060"
      backgroundColor="#FFFFFF"
      type="outlined"
    />
  );