import React, {useState, useEffect} from 'react'

const ScrollToTop = () => {
    const [ showButton, setShowButton ] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 400) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        })
    }, []);

    const goTop = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth",
        })
    }

  return (
    <div className="cursor-pointer flex justify-center " onClick={goTop}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" className="h-14 w-14 text-darkPink hover:text-slate-500 hover:-translate-y-1 hover:scale-110 duration-300">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd" />
        </svg>
    </div>
  )
}

export default ScrollToTop