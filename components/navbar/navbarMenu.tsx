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
      <nav className="container lg:w-fit lg:rounded-full lg:bg-black-400 lg:py-2 px-1 h-fit flex lg:justify-center">
        <ul className="flex items-center gap-3">
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
