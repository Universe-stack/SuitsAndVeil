import React, { FormEvent, useState } from 'react';
import { useAuth } from '@/StateContext/AuthContext';
import axios from 'axios';

const Signup: React.FC = () => {

  const { dispatch } = useAuth();
  const [formData, setFormData] = useState<{ email: string; password: string; role:string,name:string, username:string }>({
    email: '',
    password: '',
    role: '',
    name:'',
    username:''
  });

  const handleSignup = async (e:FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8800/register', formData); // Adjust the URL as needed

      if (response.status === 200) {
        // If the response status is 200 (OK), dispatch 'SIGNUP'
        console.log("successful:", response)
        dispatch({ type: 'SIGNUP', payload: { username: formData.username, email: formData.email, role: formData.role, password: formData.password } });
      } else {
        // Handle other response status codes as needed and dispatch 'ERROR'
        dispatch({ type: 'ERROR', payload: 'An error occurred during signup.' });
      }

      setFormData({email: '',
      password: '',
      role: '',
      name:'',
      username:''})

    } catch (error) {
      dispatch({ type: 'ERROR', payload: error.message });
    }
    
  };
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showGoogleForm, setShowGoogleForm] = useState(false);

  const handleEmailClick = () => {
    setShowEmailForm(true);
    setShowGoogleForm(false);
  };

  const handleGoogleClick = () => {
    setShowGoogleForm(true);
    setShowEmailForm(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 w-[416px] ">
        <h2 className="text-2xl font-semibold mb-[40px] text-[#0d0c22]">Sign up to suitsAndVeil</h2>
        <div className="mb-4 flex flex-col gap-4">
          <button
            className="cursor-pointer font-[600] text-[14px] p-[24px] bg-[#FFFFFF] text-[#0d0c22] rounded-full hover:bg-[#FF477E] hover:text-[#FFFFFF] w-[100%] text-center border-[2px] border-[#0d0c22]"
            onClick={handleEmailClick}
          >
            Signup with Email
          </button>
          <button
            className="cursor-pointer font-[600] text-[14px] p-[24px] bg-[#0d0c22] text-white rounded-full hover:bg-[#FF477E] w-[100%] text-center"
            onClick={handleGoogleClick}
          >
            Signup with Google
          </button>

          <p className="text-[0.72rem] font-light leading-[18px] text-[#3d3d4e] mt-[20px]">
          By creating an account you agree with our Terms of Service, Privacy Policy, and our default Notification Settings.
              </p>
          
              <p className="text-[0.72rem] font-light leading-[18px] text-[#3d3d4e] mt-[5px] text-center">
              Have an account? <a href="#" className='underline underline-offset-2'>Sign in</a> 
              </p>
        </div>

        {showEmailForm && (
          <form className="mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email:
              </label>
              <input
                className="border rounded w-full py-2 px-3"
                type="email"
                placeholder='Email'
                value={formData.email}
                onChange={(e) => setFormData({...formData, email:e.target.value})}
              />
            </div>
            <div className="mb-4 flex justify-between items-center">
              <div className="w-1/2 mr-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name:
                </label>
                <input
                  className="border rounded w-full py-2 px-3"
                  type="text"
                  placeholder='Name'
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name:e.target.value})}
                />
              </div>
              <div className="w-1/2 ml-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Username:
                </label>
                <input
                  className="border rounded w-full py-2 px-3"
                  type="text"
                  placeholder='Username'
                  value={formData.username}
                  onChange={(e) => setFormData({...formData, username:e.target.value})}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Role:
              </label>
              <select 
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="border rounded w-full py-2 px-3">
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password:
                </label>
                <input
                  className="border rounded w-full py-2 px-3"
                  type="text"
                  placeholder='Password'
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password:e.target.value})}
                />
              </div>
            <div className="mb-4">
              <input
                className="mr-2"
                type="checkbox"
              />
              <label className="text-sm text-gray-700">
                I agree with Dribbble's Terms of Service, Privacy Policy, and default Notification Settings.
              </label>
            </div>
            <button
              className="cursor-pointer font-[600] text-[14px] p-[24px] text-[#FFFFFF] bg-[#0d0c22] rounded-full hover:bg-[#FF477E] hover:text-[#FFFFFF] w-[100%] text-center border-[2px] border-[#0d0c22]"
              type="submit"
              onClick={handleSignup}
            >
              Submit
            </button>
          </form>)}

        {showGoogleForm && (
          <div>
            <p>Google Signup Form</p>
            {/* Add Google signup form fields here */}
          </div>
        )
        }
      </div>
    </div>
  );
};

export default Signup;
