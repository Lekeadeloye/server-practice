import { tv } from "tailwind-variants";

const style = tv({
  slots: {
    header: 'flex justify-center items-center p-4',
    navbar: 'flex gap-4 justify-between',
    listItem: 'list-none',
    navLink: 'text-2xl underline',
  }
});

export default style