import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Loader, Navbar } from '../components';

const CreatePost = () => {
  const navigate = useNavigate();
  const {isAuthenticated, user} = useAuth0();
  const [prompt, setPrompt] = useState("")
  const [photo, setPhoto] = useState("") 
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {value} = e.target
    setPrompt(value)
  }
  

  const generateImage = async () => {
    if (prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch('https://artistico.onrender.com/api/v1/dalle', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: `${prompt}`,
          }),
        });
        const data = await response.json();
        console.log(data)
        setPhoto(`${data.photo}`);
      } catch (err) {
        alert(err);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert('Please provide proper prompt');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (prompt && photo) {
      setLoading(true);
      try {
        const response = await fetch('https://artistico.onrender.com/api/v1/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: 
            JSON.stringify({
              name: user.nickname,
              prompt: `${prompt}`,
              photo: `${photo}`
            })
        });

        await response.json();
        alert('Success');
        navigate('/');
      } catch (err) {
        alert(err);
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please generate an image with proper details');
    }
  };

  return (
    <section className="max-w-7xl mx-auto">
      <Navbar/>
      <div className='text-center'>
        <h1 className="font-extrabold text-[#ffffff] text-[32px]">Create Art</h1>
        <p className="mt-2 text-[#ffffff] text-[14px]">Generate an imaginative image through DALL-E AI and share it with the community</p>
      </div>
      <div class="max-w-4xl mx-auto mt-8">
        <div class="relative flex items-center w-full h-12 rounded-lg border-blue-700 border-2 focus-within:shadow-lg bg-white overflow-hidden">
          
          <input className="peer h-full w-full outline-none text-sm text-gray-700 pr-2" 
          type="text" 
          id="prompt"  
          onChange={handleChange} 
          value={prompt} 
          placeholder="Enter a prompt.." />
          
          <button className='button font-inter font-medium bg-[#6469ff] text-white px-4 py-4 rounded-md cursor-pointer' onClick={generateImage}>Generate</button>
        </div>
      </div>
        { photo ? (
          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-9/12 p-3 mt-3 h-9/12 mx-auto">
            <img
              src={photo}
              alt={prompt}
              className="w-full h-full object-contain"
            />
          </div>
          ) : <></>
      }
      {generatingImg && (
        <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
          <Loader />
        </div>
      )}
      {photo ?(
        <div className="mt-3 text-center">
          <button
            type="submit"
            className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-lg w-full sm:w-auto px-5 py-2.5 text-center"
            onClick={handleSubmit}
          >
            {loading ? 'Sharing...' : 'Share with the Community!'}
          </button>
        </div>
      ): <></>}
    </section>
  );
};

export default CreatePost;
