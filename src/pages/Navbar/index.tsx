import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from "@/assets/Logo.png";
import CustomLink from '../link/Link'; // Corrected typo in import
import { SelectedPage } from '@/shared/Type';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButtons from '@/shared/ActionButtons';
import { useState } from 'react';

type Props = {
    isTopOfThePage:boolean,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({ selectedPage, setSelectedPage,isTopOfThePage }: Props) => {
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false); // Corrected variable name
    const flexBetween = 'flex items-center justify-between';
    const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');
    const navbarBackground = isTopOfThePage ? "" : "bg-primary-100 drop-shadow";

    return (
        <div  className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    <img alt="Logo" src={Logo} />
                    {isAboveMediumScreens ? (
                        <div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                <CustomLink page={'Home'} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <CustomLink page={'Benefits'} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <CustomLink page={'Our Classes'} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <CustomLink page={'Contact us'} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            </div>
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                <p>Sign In</p>
                                <div>
                                    <ActionButtons setSelectedPage={setSelectedPage}>Become a Member</ActionButtons>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <button className='rounded-full bg-secondary-500 p-2'
                            onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            {isMenuToggled ? (
                                <XMarkIcon className='h-6 w-6 text-white' /> // Changed button icon when menu is toggled
                            ) : (
                                <Bars3Icon className='h-6 w-6 text-white' />
                            )}
                        </button>
                    )}
                </div>
            </div>
            {!isAboveMediumScreens && isMenuToggled && (
                <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl'>
                    <div className='flex justify-end p-12'>
                        <button  onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className='h-6 w-6 text-gray-400'/>
                        </button>
                    </div>
                    <div className='ml-[33%] flex flex-col gap-10 text-2xl'>
                                <CustomLink page={'Home'} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <CustomLink page={'Benefits'} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <CustomLink page={'Our Classes'} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <CustomLink page={'Contact us'} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
