interface HeaderProps {
  appName: string;
  userName: string;
  navLinks?: { label: string; href: string }[];
  onLogout: () => void;
}

export function Header({
  appName,
  userName,
  navLinks = [],
  onLogout,
}: HeaderProps) {
  return (
    <header className="w-full border-b border-gray-200 bg-white px-6 py-3 flex items-center justify-between gap-4">

      <span className="font-semibold text-blue-600 text-lg">{appName}</span>

      {navLinks.length > 0 && (
        <nav className="flex items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}

      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600">{userName}</span>
        <button
          onClick={onLogout}
          className="text-sm border border-gray-300 px-3 py-1 rounded hover:bg-gray-50 transition-colors"
        >
          Cerrar sesión
        </button>
      </div>

    </header>
  );
}

export default Header;