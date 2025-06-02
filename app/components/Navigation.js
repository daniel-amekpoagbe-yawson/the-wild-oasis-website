const { default: Link } = require("next/link");

function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>

      <li>
        <Link href="/cabins">cabins</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/account">Your account</Link>
      </li>
    </ul>
  );
}
export default Navigation;
