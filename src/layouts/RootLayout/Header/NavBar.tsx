import styled from "@emotion/styled"
import Link from "next/link"

const NavBar: React.FC = () => {
  const links = [
    { id: 1, name: "About", to: "/about", type: "internal" },
    {
      id: 2,
      name: "Tistory Blog",
      to: "https://peter-coding.tistory.com",
      type: "external",
    },
  ]
  return (
    <StyledWrapper className="">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link
              href={link.to}
              target={link.type === "external" ? "_blank" : "_self"}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </StyledWrapper>
  )
}

export default NavBar

const StyledWrapper = styled.div`
  flex-shrink: 0;
  ul {
    display: flex;
    flex-direction: row;
    li {
      display: block;
      margin-left: 1rem;
      color: ${({ theme }) => theme.colors.gray11};
    }
  }
`
