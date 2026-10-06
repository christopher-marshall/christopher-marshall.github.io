// GoatCounter's count.js only records the initial page load. Docusaurus
// navigates client-side after that, so count each later route change here.

export function onRouteDidUpdate({location, previousLocation}) {
  // The first load is counted by count.js itself; anchor jumps aren't page views.
  if (!previousLocation || location.pathname === previousLocation.pathname) {
    return;
  }
  // Wait a tick so the new page's title is in place before it is sent.
  setTimeout(() => {
    window.goatcounter?.count?.({
      path: location.pathname + location.search,
    });
  });
}
