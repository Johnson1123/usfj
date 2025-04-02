import React, { useEffect, useState, useRef } from "react";
import { IoMdMenu } from "react-icons/io";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { FaBell } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import useSocket from "../../hooks/useSocket"; // Import the existing useSocket hook
import { useRouter } from "next/navigation";
import { logout } from "@/redux/slices/authSlice";


const DashNav = ({ toggleSidebar }) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const socket = useSocket();
  const [openDropdown, setOpenDropdown] = useState(null);
  const profileDropdownRef = useRef(null);
  const notificationRef = useRef(null);
  const [notifications, setNotifications] = useState([]);
  const [hasNewNotification, setHasNewNotification] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!socket) return;

    socket.on("new_notification", (notification) => {
      console.log("Received notification:", notification);

      // Notification type
      if (notification.type === "message" && notification.related_id === general_group_id) {
        setNotifications((prev) => [notification, ...prev]);
        setHasNewNotification(true); 
      }
    });

    return () => {
      socket.off("new_notification");
    };
  }, [socket]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    }
    if (openDropdown === "profile") {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  // Toggle notification dropdown
  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    if (dropdown === "notifications") {
      setHasNewNotification(false);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push("/auth/login");
  };

  const handleProfile = () => {
    setOpenDropdown(null); // Close dropdown before navigating
    router.push("/dashboard/profile");
  };

  return (
    <nav className="w-full h-[72px] border-b border-[#E8E8E8] relative">
      <div className="w-full h-full flex justify-between items-center">
        {/* Logo & Hamburger Menu */}
        <div className="w-[279px] max-w-[250px] pl-6 flex items-center gap-2 h-full border-r border-[#E8E8E8]">
          <button onClick={toggleSidebar} className="mr-2">
            <IoMdMenu size={24} color="#84818A" />
          </button>
          <Image
            src="/images/USFJ-DARK-Logo.png"
            width={120}
            height={50}
            alt="usfj-logo"
          />
        </div>

        {/* User Details */}
        <div className="flex items-center gap-3 pr-6">
          {/* Notifications */}
          <div className="relative">
            <FaBell
              size={20}
              className="text-[#84818A] cursor-pointer"
              onClick={() => toggleDropdown("notifications")}
            />
            {hasNewNotification && (
              <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
            )}

            {openDropdown === "notifications" && (
              <div
                ref={notificationRef}
                className="absolute top-8 right-10 w-[350px] p-[16px] bg-white shadow-lg border border-[#f1f1f1] rounded-lg z-50"
              >
                {notifications.length === 0 ? (
                  <p className="text-sm text-gray-500">No new notifications</p>
                ) : (
                  <ul className="space-y-2 max-h-60 overflow-auto">
                    {notifications.map((notif, index) => (
                      <li key={index} className="p-2 bg-gray-100 rounded-md">
                        {notif.message}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>

          {/* Email Icon */}
          <MdEmail size={20} color="#84818A" />

          {/* Profile */}
          <div className="relative" ref={profileDropdownRef}>
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => toggleDropdown("profile")}
            >
              <Image src="/Profile.png" width={35} height={35} alt="profile" />
              <div>
                <h1 className="text-[#202020] font-bold">
                  {user?.name || "Agba John Doe"}
                </h1>
                <p className="text-right text-xs text-[#84818A]">Volunteer</p>
              </div>
            </div>

            {/* Full-screen backdrop with dropdown */}
            {openDropdown === "profile" && (
              <>
                {/* Backdrop */}
                <div
                  className="fixed backdrop-blur-sm inset-0 bg-black/45 z-40"
                  onClick={() => setOpenDropdown(false)}
                ></div>

                {/* Profile Dropdown */}
                <div className="absolute top-2 right-0 w-[251px] p-[16px] bg-white shadow-lg border border-[#f1f1f1] rounded-lg z-50">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <FaBell
                        size={20}
                        className="text-[#84818A] cursor-pointer"
                        onClick={() => toggleDropdown("notifications")}
                      />
                      {hasNewNotification && (
                        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
                      )}

                      {openDropdown === "notifications" && (
                        <div
                          ref={notificationRef}
                          className="absolute top-8 right-10 w-[350px] p-[16px] bg-white shadow-lg border border-[#f1f1f1] rounded-lg z-50"
                        >
                          {notifications.length === 0 ? (
                            <p className="text-sm text-gray-500">
                              No new notifications
                            </p>
                          ) : (
                            <ul className="space-y-2 max-h-60 overflow-auto">
                              {notifications.map((notif, index) => (
                                <li
                                  key={index}
                                  className="p-2 bg-gray-100 rounded-md"
                                >
                                  {notif.message}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </div>
                    <Image
                      src="/Profile.png"
                      width={35}
                      height={35}
                      alt="profile"
                    />
                    <div>
                      <h1 className="text-[#202020] font-bold">
                        {user?.name || "Agba John Doe"}
                      </h1>
                      <p className="text-right text-xs text-[#84818A]">
                        Volunteer
                      </p>
                    </div>
                  </div>

                  {/* Dropdown Options */}
                  <ul className="mt-2">
                    <li
                      className="px-4 py-2 text-base font-bold hover:bg-gray-100 flex items-center gap-2 cursor-pointer"
                      onClick={handleProfile}
                    >
                      Profile Information
                    </li>
                    <hr className="border my-3" />
                    <li
                      className="px-4 py-2 text-[#FF0000] text-base font-bold hover:bg-gray-100 flex items-center gap-2 cursor-pointer"
                      onClick={handleLogout}
                    >
                      Log Out
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashNav;
