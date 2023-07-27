import SubNavbar from "@/components/shared/sub-nav-bar/sub-nav-bar";
import Announcement from "@/components/ui/announcment/announcement";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Announcement />
      <SubNavbar />
      {children}
    </div>
  );
};

export default RootLayout;
