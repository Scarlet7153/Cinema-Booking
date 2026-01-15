import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { MenuIcon, XIcon, SearchIcon, Ticket, LogOut, User } from 'lucide-react';
import { assets } from '../assets/assets';
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase'
import SignInModal from './SignInModal'; // Đảm bảo bạn đã import đúng component này

const Navbar = () => {
  const navigate = useNavigate();
  
  // --- States ---
  const [isOpen, setIsOpen] = useState(false); // Menu mobile
  const [user, setUser] = useState(null); // Trạng thái user
  const [authLoading, setAuthLoading] = useState(true); // Trạng thái load auth
  const [showSignInModal, setShowSignInModal] = useState(false); // Hiển thị modal đăng nhập
  
  // State cho Menu dropdown của User
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref để phát hiện click ra ngoài

  // --- Kiểm tra trạng thái đăng nhập Firebase ---
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthLoading(false);
    });
    return () => unsub();
  }, []);

  // --- Đóng dropdown khi click ra ngoài ---
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // --- Hàm xử lý Đăng xuất ---
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setIsUserMenuOpen(false);
      navigate('/'); // Quay về trang chủ sau khi đăng xuất
    } catch (error) {
      console.error("Lỗi đăng xuất: ", error);
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5">
        
        {/* --- Logo --- */}
        <Link to='/' className='max-md:flex-1'> 
          <img src={assets.logo} alt="Logo" className='w-32 sm:w-40 h-auto object-contain'/>
        </Link>

        {/* --- Navigation Links (Desktop & Mobile) --- */}
        <div className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 md:px-8 py-3 max-md:h-screen md:rounded-full backdrop-blur bg-black/90 md:bg-white/10 md:border border-gray-300/20 overflow-hidden transition-[width] duration-300 ${isOpen ? "max-md:w-full" : "max-md:w-0"}`}>
          
          <XIcon className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer text-white" onClick={() => setIsOpen(!isOpen)}/>

          <Link onClick={() => {window.scrollTo(0,0); setIsOpen(false);}} to='/' className="text-white hover:text-primary transition">Trang chủ</Link>
          <Link onClick={() => {window.scrollTo(0,0); setIsOpen(false);}} to='/movies' className="text-white hover:text-primary transition">Phim</Link>
          <Link onClick={() => {window.scrollTo(0,0); setIsOpen(false);}} to='/' className="text-white hover:text-primary transition">Rạp</Link>
          <Link onClick={() => {window.scrollTo(0,0); setIsOpen(false);}} to='/' className="text-white hover:text-primary transition">Lịch chiếu</Link>
        </div>

        {/* --- Khu vực bên phải (Search & User) --- */}
        <div className='flex items-center gap-6'>       
          <SearchIcon className='max-md:hidden w-6 h-6 cursor-pointer hover:text-primary transition'/>
          
          {authLoading ? (
            // Hiển thị Skeleton khi đang load
            <div className='w-24 h-10 bg-gray-200 animate-pulse rounded-full'></div>
          ) : !user ? (
            // Chưa đăng nhập -> Nút Đăng nhập
            <button 
              onClick={() => setShowSignInModal(true)}
              className='px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull text-white transition rounded-full font-medium cursor-pointer whitespace-nowrap'
            >
              Đăng nhập
            </button>
          ) : (
            // Đã đăng nhập -> Avatar & Dropdown
            <div className="relative" ref={dropdownRef}>
              <div 
                className="flex items-center gap-2 cursor-pointer p-1 rounded-full hover:bg-gray-100/10 transition"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              >
                {/* Avatar User hoặc Chữ cái đầu */}
                <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg overflow-hidden border-2 border-white/20">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="User" className="w-full h-full object-cover" />
                  ) : (
                    user.email?.charAt(0).toUpperCase() || <User size={18} />
                  )}
                </div>
              </div>

              {/* Menu Thả Xuống (Dropdown) */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-in fade-in zoom-in-95 duration-200 text-black overflow-hidden z-[60]">
                  <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
                    <p className="text-sm font-bold truncate text-gray-800">{user.displayName || "Khách hàng"}</p>
                    <p className="text-xs text-gray-500 truncate">{user.email}</p>
                  </div>
                  
                  <Link 
                    to="/my-bookings" 
                    onClick={() => setIsUserMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition"
                  >
                    <Ticket size={16} />
                    Vé của tôi
                  </Link>
                  
                  <button 
                    onClick={handleSignOut}
                    className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition text-left cursor-pointer"
                  >
                    <LogOut size={16} />
                    Đăng xuất
                  </button>
                </div>
              )}
            </div>
          )}
          
          {/* Nút Menu Mobile */}
          <MenuIcon className='max-md:ml-2 md:hidden w-8 h-8 cursor-pointer text-white' onClick={() => setIsOpen(!isOpen)}/>
        </div>
      </div>

      {/* --- Modal Đăng nhập --- */}
      {showSignInModal && (
        <SignInModal onClose={() => setShowSignInModal(false)} />
      )}
    </>
  )
}

export default Navbar