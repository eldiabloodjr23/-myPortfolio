import React from 'react';
import { BsTwitter, BsInstagram, BsGithub, BsGoogle } from 'react-icons/bs';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://github.com/eldiabloodjr23' target="_blank" rel="noreferrer">
      <BsGithub />
      </a>
    </div>
    <div>
      <FaLinkedin />
    </div>
    <div>
      <BsGoogle />
    </div>
  </div>
);

export default SocialMedia;