import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <footer className='bg-slate-900 text-slate-300'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 py-12'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-10'>
                        <div>
                            <div className='flex items-center gap-2 mb-3'>
                                <Link href={"/"} className='flex items-center gap-2'>
                                    <Image
                                        src={"/favicon.png"}
                                        alt='logo'
                                        width={30}
                                        height={30}
                                    />
                                    <h3 className="text-xl font-normal text-white tracking-tight">Doc
                                        <span className="text-teal-600">Appoint</span>
                                    </h3>
                                </Link>
                            </div>

                            <p className='text-sm text-slate-400 leading-relaxed max-w-xs'>Connecting patients with trusted doctors for seamless appointment booking and healthcare management.</p>
                        </div>
                        <div>
                            <h4 className='text-base font-medium text-white uppercase tracking-wider mb-4'>
                                Quick Links
                            </h4>
                            <ul className='space-y-2 text-sm'>
                                <li>
                                    <Link
                                        href={"/"}
                                        className='hover:text-teal-400 transition-colors'>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/all-appointments'}
                                        className='hover:text-teal-400 transition-colors'>
                                        All Appointments
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/dashboard'}
                                        className='hover:text-teal-400 transition-colors'>
                                        Dashboard
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className='text-base font-medium text-white uppercase tracking-wider mb-4'>
                                Contact
                            </h4>
                            <ul className='space-y-2 text-sm text-slate-400'>
                                <li>support@docappoint.com</li>
                                <li>+880 1700-000000</li>
                                <li>Dhaka, Bangladesh</li>
                            </ul>
                        </div>
                    </div>

                    <div className='border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4'>
                        <p className='text-xs text-slate-500'>
                            © 2026 DocAppoint. All rights reserved.
                        </p>
                        <div className='flex items-center gap-4'>
                            <Link
                                href={'https://x.com/'}
                                className='text-slate-400 hover:text-teal-400 transition-colors'>
                                <FaXTwitter />
                            </Link>
                            <Link
                                href={'https://www.facebook.com/'}
                                className='text-slate-400 hover:text-teal-400 transition-colors'>
                                <FaFacebook />

                            </Link>
                            <Link
                                href={'https://www.linkedin.com/'}
                                className='text-slate-400 hover:text-teal-400 transition-colors'>
                                <FaLinkedin />
                            </Link>
                            <Link
                                href={'https://github.com/'}
                                className='text-slate-400 hover:text-teal-400 transition-colors'>
                                <FaGithub />
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;