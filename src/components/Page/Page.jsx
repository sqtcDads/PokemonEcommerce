import Header from "../Header";
import "./styles.css"

export default function Page({ children }) {
  return (
    <div className="page">
      <Header />
      <main>{children}</main>
    </div>
  );
}
