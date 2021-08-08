import { IconContext } from 'react-icons';
import { FaLinkedin, FaAngellist, FaGithub } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-inner'>
                <div className='links-container'>
                <IconContext.Provider value={{ className: 'react-icons', size: '45px', color: 'grey' }}>
                    <a rel="noreferrer" href='https://github.com/melendezmatt' target='_blank'>
                        <FaGithub />
                    </a>
                    <a rel="noreferrer" href='https://angel.co/u/matthew-melendez-1' target='_blank'>
                        <FaAngellist />
                    </a>
                    <a rel="noreferrer" href='https://github.com/melendezmatt' target='_blank'>
                        <MdWeb />
                    </a>
                    <a
                    rel="noreferrer"
                    href='https://www.linkedin.com/in/matthew-melendez/'
                    target='_blank'
                    >
                        <FaLinkedin />
                    </a>
                </IconContext.Provider>
                </div>
            </div>
        </div>
    )
}

export default Footer;
