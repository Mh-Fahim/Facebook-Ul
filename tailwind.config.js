module.exports = {
  node: "jit",
  purge: ["./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "story-1": "url('assets/story-1.jpg')",
        "story-2": "url('assets/story-2.jpg')",
        "story-3": "url('assets/story-3.jpg')",
        "story-4": "url('assets/story-4.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
