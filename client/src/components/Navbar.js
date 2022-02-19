
import { BsDroplet } from 'react-icons/bs';
import { BsMoon } from 'react-icons/bs';
import { BsSun } from 'react-icons/bs';
import { BsToggleOff } from 'react-icons/bs';
import { BsToggleOn } from 'react-icons/bs';

const Navbar = () => {
    return (
        <div className="p-5 shadow-md flex justify-between">
            <div className='flex'>
                < BsDroplet 
                className='text-3xl '
                />
                <p className='font-header text-xl'>Dropnote</p>                
            </div>
            <div className='flex space-x-2'>
                <BsSun 
                    className='self-center'
                />
                <BsToggleOff 
                    className="text-3xl self-center cursor-pointer"
                />
                <BsMoon 
                    className="self-center"
                />
            </div>
        </div>    
    )
    
} 

export default Navbar;