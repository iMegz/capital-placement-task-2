import { useRef, useState, useEffect } from "react";

function useCollapse() {
    const ref = useRef<any>(null);
    const [expand, setExpand] = useState(false);

    useEffect(() => {
        document.addEventListener("mousedown", handleOnClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleOnClickOutside);
        };
    }, []);

    function handleOnClickOutside(e: any) {
        if (ref.current && !ref.current.contains(e.target)) {
            setExpand(false);
        }
    }

    return { expand, setExpand, ref };
}

export default useCollapse;
