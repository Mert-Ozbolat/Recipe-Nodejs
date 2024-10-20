import logo from '../../public/r_logo.jpg';
import { NavLink } from 'react-router-dom';
import { links } from '../constants';

const Sidebar = () => {
    return (
        <aside className="flex flex-col h-screen justify-between items-center py-3 md:px-3 max-md:py-2 max-md:gap-20 max-md:justify-normal">
            <img src={logo} className="max-w-[150px] md:max-w-[80px]" />


            <nav className='flex flex-col gap-20'>
                {links.map((i, key) => (
                    <NavLink
                        key={key}
                        className={"flex gap-4 items-center text-lg text-gray-400"} to={i.path}>
                        <span className='max-md:text-2xl'>{i.icon}</span>
                        <span className='max-md:hidden'>{i.title}</span>
                    </NavLink>
                ))}
            </nav>

            <div className='flex flex-col gap-2'>
                <p className='font-semibold'>Günlük Haberleri Al</p>
                <button className='bg-red-500 p-2 rounded-lg text-white hover:bg-red-400'>Abone Ol</button>
            </div>
        </aside>
    );
};
export default Sidebar;
