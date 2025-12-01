const NAV_ITEMS = [
  { label: 'Dashboard', href: '/' },
  { label: 'Income', href: '/income' },
  { label: 'Productivity', href: '/productivity' },
  { label: 'Capacity', href: '/capacity' },
  { label: 'Environment', href: '/environment' },
  { label: 'Habits', href: '/habits' },
  { label: 'Mindspace', href: '/mindspace' },
  { label: 'Notes', href: '/notes' },
  { label: 'Wallet', href: '/wallet' },
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">Revion OS</div>
      <nav className="sidebar-nav">
        {NAV_ITEMS.map((item) => (
          <a key={item.href} href={item.href} className="sidebar-link">
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
