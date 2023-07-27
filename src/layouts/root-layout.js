import Navbar from "@/components/shared/nav-bar/nav-bar";
import SubNavbar from "@/components/shared/sub-nav-bar/sub-nav-bar";
import Announcement from "@/components/ui/announcment/announcement";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Announcement />
      <SubNavbar />
      <Navbar />
      {children}
    </div>
  );
};

export default RootLayout;
