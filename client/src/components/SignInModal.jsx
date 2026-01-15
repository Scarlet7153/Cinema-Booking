import React, { useState } from 'react'
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'
import { auth } from '../firebase'

const SignInModal = ({ onClose, onSuccess }) => {
  const [mode, setMode] = useState('signin') // 'signin' | 'signup'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleEmailSignIn(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      onSuccess && onSuccess(userCredential.user)
      onClose && onClose()
    } catch (err) {
      setError(err.message || 'Lỗi đăng nhập')
    } finally {
      setLoading(false)
    }
  }

  async function handleEmailSignUp(e) {
    e.preventDefault()
    setError('')
    
    // Validate password match
    if (password !== confirmPassword) {
      setError('Mật khẩu xác nhận không khớp')
      return
    }
    
    // Validate phone number
    if (!phoneNumber || phoneNumber.trim() === '') {
      setError('Vui lòng nhập số điện thoại')
      return
    }
    
    setLoading(true)
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      // TODO: Save phone number to user profile/database if needed
      onSuccess && onSuccess(userCredential.user)
      onClose && onClose()
    } catch (err) {
      setError(err.message || 'Lỗi tạo tài khoản')
    } finally {
      setLoading(false)
    }
  }

  async function handleGoogleSignIn() {
    setError('')
    setLoading(true)
    try {
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      onSuccess && onSuccess(result.user)
      onClose && onClose()
    } catch (err) {
      setError(err.message || 'Lỗi đăng nhập Google')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
      <div className="bg-white rounded-lg p-8 w-full max-w-md relative" onClick={e => e.stopPropagation()}>
        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl" onClick={onClose}>×</button>
        
        <div>
          <h2 className="text-2xl text-black font-bold mb-2 text-center">
            {mode === 'signin' ? 'Đăng nhập' : 'Tạo tài khoản'}
          </h2>
        
            {error && <div className="text-red-600 text-sm mb-4">{error}</div>}
            
            <form onSubmit={mode === 'signin' ? handleEmailSignIn : handleEmailSignUp}>
              <div className="mb-4">
                <label className="block text-sm text-black font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  placeholder="Nhập email của bạn"
                  className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition"
                  required
                  color='black'
                />
              </div>
              
              {mode === 'signup' && (
                <div className="mb-4">
                  <label className="block text-sm text-black font-medium mb-2">Số điện thoại</label>
                  <input 
                    type="tel" 
                    value={phoneNumber} 
                    onChange={e => setPhoneNumber(e.target.value)} 
                    placeholder="Nhập số điện thoại"
                    className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition"
                    required
                  />
                </div>
              )}
              
              <div className="mb-4">
                <label className="block text-sm text-black font-medium mb-2">Mật khẩu</label>
                <input 
                  type="password" 
                  value={password} 
                  onChange={e => setPassword(e.target.value)} 
                  placeholder="Nhập mật khẩu"
                  className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition"
                  required
                />
              </div>
              
              {mode === 'signup' && (
                <div className="mb-4">
                  <label className="block text-sm text-black font-medium mb-2">Xác nhận mật khẩu</label>
                  <input 
                    type="password" 
                    value={confirmPassword} 
                    onChange={e => setConfirmPassword(e.target.value)} 
                    placeholder="Nhập lại mật khẩu"
                    className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition"
                    required
                  />
                </div>
              )}
              
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium mb-4 disabled:opacity-50"
              >
                {loading ? 'Đang xử lý...' : (mode === 'signin' ? 'Đăng nhập' : 'Tạo tài khoản')}
              </button>
            </form>
            
            <div className="text-center text-sm text-gray-500 mb-4">hoặc</div>
            
            <button 
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="w-full flex text-black items-center justify-center gap-3 bg-white border border-gray-300 hover:bg-gray-50 py-3 rounded-lg font-medium mb-3 disabled:opacity-50"
            >
              <svg width="18" height="18" viewBox="0 0 18 18">
                <path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z"/>
                <path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17z"/>
                <path fill="#FBBC05" d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07z"/>
                <path fill="#EA4335" d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3z"/>
              </svg>
              Đăng nhập với Google
            </button>
            
            <div className="text-center text-black mt-6 text-sm">
              {mode === 'signin' ? (
                <p>
                  Chưa có tài khoản?{' '}
                  <button onClick={() => { setMode('signup'); setError(''); }} className="text-blue-600 hover:underline font-medium">
                    Đăng ký ngay
                  </button>
                </p>
              ) : (
                <p>
                  Đã có tài khoản?{' '}
                  <button onClick={() => { setMode('signin'); setError(''); }} className="text-blue-600 hover:underline font-medium">
                    Đăng nhập
                  </button>
                </p>
              )}
            </div>
          </div>
      </div>
    </div>
  )
}

export default SignInModal
