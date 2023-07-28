import Navbar from "@/components/shared/nav-bar/nav-bar";
import SubNavbar from "@/components/shared/sub-nav-bar/sub-nav-bar";
import Announcement from "@/components/ui/announcment/announcement";
import Sidebar from "@/components/ui/side-bar/sidebar";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Announcement />
      <SubNavbar />
      <Navbar />
      <div className="container mx-auto flex w-full gap-4">
        <Sidebar />
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default RootLayout;
