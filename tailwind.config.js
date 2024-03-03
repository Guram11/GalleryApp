/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        from: "#fbdb89",
        to: "#f48982",
        bg: "#f2efee",
        bgHeader: "#f9f5f3",
        btn: "#786b67",
        input: "#615551",
        placeholder: "#d3c7c3",
        paragraph: "#918581",
        back: "#e0dedd",
      },
      boxShadow: {
        input: "0 0.7rem 3rem rgba(97,85,81, 0.1)",
        bookmarks: "0 0.8rem 5rem 2rem rgba(97,85,81, 0.1)",
        modal: "0 4rem 6rem rgba(0, 0, 0, 0.25)",
        container: "0 2rem 6rem 0.5rem rgba(#615551, 0.2)",
      },
      backgroundColor: {
        backdrop: "rgba(0, 0, 0, 0.75)",
      },
      fontFamily: {
        body: ["Nunito Sans", "sans-serif"],
      },
      gridTemplateColumns: {
        photo: "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [],
};
