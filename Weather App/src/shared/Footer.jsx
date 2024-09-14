/** @format */

const Footer = () => {
    return (
        <div>
            <footer className='footer bg-neutral p-2'>
                <nav>
                    <h6 className='footer-title'>Contact</h6>
                    <a
                        href='https://github.com/Th0se'
                        className='link link-hover text-center md:text-end'
                    >
                        Github
                    </a>
                    <a
                        href='mailto:thomasap1464@gmail.com'
                        className='link link-hover text-center md:text-start'
                    >
                        Thomasap1464@gmail.com
                    </a>
                </nav>
            </footer>
            <footer className='footer footer-center bg-neutral p-2'>
                <aside>
                    <p className='text-center'>&#169; 2024 Thomas Praselino</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;
