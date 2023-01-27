import styled from "styled-components/macro";
import {WEIGHTS} from "../../constants";

const NavLink = ({children, ...delegated}) => (
    <Wrapper {...delegated}>
        <MainText>
            {children}
        </MainText>
        <HoverText aria-hidden={true}>
            {children}
        </HoverText>
    </Wrapper>
);

const Wrapper = styled.a`
  position: relative;
  overflow: hidden;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
  display: inline-block;
  transition: transform 0.3s;
  will-change: transform;
  transform: translateY(var(--translate-from));
  
  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover & {
      transform: translateY(var(--translate-to));
    }
  }
`;

const MainText = styled(Text)`
  --translate-from: 0%;
  --translate-to: -100%;
`;

const HoverText = styled(Text)`
  --translate-from: 100%;
  --translate-to: 0%;
  position: absolute;
  top: 0;
  left: 0;
  font-weight: 700;
`;

export default NavLink;