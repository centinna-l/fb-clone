import Image from "next/image";

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      {/** Left*/}
      <div>
        <Image
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2F1000logos.net%2Ffacebook-logo%2F&psig=AOvVaw2-syZlvopt-vane7kmXl16&ust=1668167424180000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPjQqIfGo_sCFQAAAAAdAAAAABAE"
          width={40}
          height={40}
          layout="fixed"
        />
      </div>
      {/** Center*/}
      {/** Right*/}
    </div>
  );
};

export default Header;
