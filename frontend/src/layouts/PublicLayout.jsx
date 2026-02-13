// export default function PublicLayout({ children }) {
//   return (
//     <div>
//       {children}
//     </div>
//   );
// }
export default function PublicLayout({ children }) {
  return (
    <div className="public-layout">
      {children}

      <style jsx>{`
        .public-layout {
          min-height: 100vh;
          background: #0a0a0f;
        }
      `}</style>
    </div>
  );
}