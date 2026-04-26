# Define the README content
readme_content = """# THE PHANTOM EYE - Official Website

A high-performance, single-page application (SPA) built for the Brooklyn-based trio **THE PHANTOM EYE**. This site replaces the previous WordPress installation with a modern, "Headless" React architecture to achieve faster load times, improved security, and a "Tech-Noir" aesthetic.

## 🛠 Tech Stack

* **Framework:** [React 18](https://reactjs.org/)
* **Build Tool:** [Vite](https://vitejs.dev/) (Lightning-fast HMR)
* **Routing:** [React Router 6](https://reactrouter.com/)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Fonts:** [Special Elite](https://fonts.google.com/specimen/Special+Elite) (Industrial Typewriter Aesthetic)

## 📂 Project Structure

The project follows a **Data-Driven Architecture**, separating site logic from content to allow for easy updates without touching JSX.

```text
src/
├── components/      # Global UI components (Header, Footer)
├── data/            # Content "Source of Truth" (homeData.js, navigation.js)
├── pages/           # Route-specific views (Home.jsx, Shows.jsx, etc.)
├── App.jsx          # Main template shell & routing logic
├── index.css        # Tailwind directives & global theme overrides
└── main.jsx         # React entry point