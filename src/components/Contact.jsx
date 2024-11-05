import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { send, sendHover } from '../assets';
import { FaLinkedin, FaGithub, FaBehance } from 'react-icons/fa'; // Import icons

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS logic removed, replace with your custom functionality if needed
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 font-poppins"
        >
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium resize-none"
            />
          </label>

          {/* Button container to position buttons side by side */}
          <div className="flex justify-between mt-4">
            {/* Existing Send button */}
            <button
              type="submit"
              className="live-demo flex justify-center sm:gap-4 gap-3 sm:text-[20px] text-[16px] text-timberWolf font-bold font-beckman items-center py-5 whitespace-nowrap sm:w-[130px] sm:h-[50px] w-[100px] h-[45px] rounded-[10px] bg-night hover:bg-battleGray hover:text-eerieBlack transition duration-[0.2s] ease-in-out"
              onMouseOver={() => {
                document
                  .querySelector('.contact-btn')
                  .setAttribute('src', sendHover);
              }}
              onMouseOut={() => {
                document.querySelector('.contact-btn').setAttribute('src', send);
              }}
            >
              {loading ? 'Sending' : 'Send'}
              <img
                src={send}
                alt="send"
                className="contact-btn sm:w-[26px] sm:h-[26px] w-[23px] h-[23px] object-contain"
              />
            </button>

            {/* New Mail button */}
            <a href="mailto:avin3215@gmail.com">
              <button
                type="button"
                className="live-demo flex justify-center sm:gap-4 gap-3 sm:text-[20px] text-[16px] text-timberWolf font-bold font-beckman items-center py-5 whitespace-nowrap sm:w-[130px] sm:h-[50px] w-[100px] h-[45px] rounded-[10px] bg-night hover:bg-battleGray hover:text-eerieBlack transition duration-[0.2s] ease-in-out"
              >
                Mail
              </button>
            </a>
          </div>
        </form>
      </motion.div>

      {/* Footer */}
      <footer className="bg-jet p-9 w-100% rounded-2xl">
        <div className="flex flex-col items-center">
          <p className="text-timberWolf text-sm mb-2">
            &copy; {new Date().getFullYear()} Avinash. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/avinash-u-26b147255/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-timberWolf hover:text-battleGray" size={20} />
            </a>
            <a href="https://github.com/AVINASH-U-WEB" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-timberWolf hover:text-battleGray" size={20} />
            </a>
            <a href="https://www.behance.net/avinash33" target="_blank" rel="noopener noreferrer">
              <FaBehance className="text-timberWolf hover:text-battleGray" size={20} />
            </a>
            
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
