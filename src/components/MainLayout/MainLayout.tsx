import { Outlet } from "react-router";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
