import NavbarItem from './navbarItem';

const item = [
  {
    text: 'خانه',
    slug: 'home',
  },
  {
    text: 'پروژه های من',
    slug: 'projects',
  },
  {
    text: 'در باره من',
    slug: 'about',
  },
  {
    text: 'تماس با من',
    slug: 'contact',
  },
];

const NavbarMenu = () => {
  return (
    <header className="w-full fixed top-5">
      <nav className="container w-fit rounded-full bg-black-400 py-2 px-1 h-fit flex justify-center">
        <ul className="flex items-center gap-1 lg:gap-3">
          {item.map(({ slug, text }) => (
            <li key={slug}>
              <NavbarItem href={slug} text={text} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavbarMenu;
