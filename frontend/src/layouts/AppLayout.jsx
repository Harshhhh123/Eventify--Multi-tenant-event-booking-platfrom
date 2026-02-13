// import Navbar from "../components/Navbar";

// export default function AppLayout({ children }) {
//   return (
//     <>
//       <Navbar />
//       {children}
//     </>
//   );
// // }
// import Navbar from "../components/Navbar";

// export default function AppLayout({ children }) {
//   return (
//     <div className="app-layout">
//       <Navbar />
//       <main className="app-main">
//         {children}
//       </main>

//       <style jsx>{`
//         .app-layout {
//           min-height: 100vh;
//           background: #0a0a0f;
//         }

//         .app-main {
//           padding-top: 72px; /* Height of navbar + spacing */
//         }
//       `}</style>
//     </div>
//   );
// }

import Navbar from "../components/Navbar";

export default function AppLayout({ children }) {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="app-main">
        {children}
      </main>

      <style jsx>{`
        .app-layout {
          min-height: 100vh;
          background: #0a0a0f;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        .app-main {
          padding-top: 5.5rem;
          min-height: 100vh;
        }

        /* Global reset for white borders */
        :global(body) {
          margin: 0;
          padding: 0;
          background: #0a0a0f;
          overflow-x: hidden;
        }

        :global(html) {
          margin: 0;
          padding: 0;
          background: #0a0a0f;
          overflow-x: hidden;
        }

        :global(*) {
          box-sizing: border-box;
        }

        :global(#root) {
          margin: 0;
          padding: 0;
          background: #0a0a0f;
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
}