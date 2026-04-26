/* src/index.css */
@import "tailwindcss";

@theme {
  --font-industrial: "Special Elite", serif;
}

@layer base {
  body {
    @apply font-industrial bg-black text-white antialiased;
  }
}