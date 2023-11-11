import { useEffect, useState } from "react";


export const useScrollTop = (threshold = 10) => {
    const [scrolled, setScrolled] = useState(false);

    //even listener
    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > threshold) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        //mount event listener
        window.addEventListener('scroll', handleScroll);
        //unmount event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, [threshold]);

    return scrolled;
}