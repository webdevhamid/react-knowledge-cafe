import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-5 border-b-2">
      <h1 className="text-4xl text-center">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
