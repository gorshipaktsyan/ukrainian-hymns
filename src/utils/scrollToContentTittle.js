export default function scrollToContentTittle(id) {
  const element = document.getElementById(id);
  setTimeout(
    () =>
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      }),
    100
  );
}
