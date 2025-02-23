import { useEffect, useState } from "react";

export default function useObserver(ids: string[]) {
    const [visible, setVisible] = useState<string | null>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (let entry of entries) {
                    if (entry.isIntersecting) {
                        setVisible(entry.target.id)
                    }
                }
            }, {
            threshold: 0.5,
        })

        // Observe each section
        ids.forEach((id) => {
            const element = document.getElementById(id)
            if (element) {
                observer.observe(element)
            }
        })

        console.log("i fire once");
        // Cleanup function to disconnect observer when component unmounts
        return () => {
            observer.disconnect()
        }
    }, [ids])

    return visible
}


//   const visible = useObserver([
//     "header-section",
//     "about-section",
//     "contact-section",
//   ]);

//   console.log(visible);