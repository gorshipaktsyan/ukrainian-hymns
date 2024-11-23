function createNavItems(lg) {
  const navItems = [
    { title: lg.navItems.hymns_1_800, route: '' },
    { title: lg.navItems.alphabeticalIndex, route: 'alphabetical' },
    { title: lg.navItems.content, route: 'content' },
    { title: lg.navItems.history, route: 'history' },
    { title: lg.navItems.bookmark, route: 'bookmark' },
    { title: lg.navItems.preface, route: 'preface' },
    { title: lg.navItems.reference, route: 'reference' },
    { title: lg.navItems.AboutTheApp, route: 'about' },
    { title: lg.navItems.settings, route: 'settings' }
  ];
  return navItems;
}

export default createNavItems;
