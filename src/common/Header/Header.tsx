import { Title, Wrapper } from "./Header.style";

const Header = ({ title }: { title: string }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default Header;
