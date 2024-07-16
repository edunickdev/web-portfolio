import { Link } from "@nextui-org/react"; 

const MenuBarComponent = () => {
    const currentRoute: string = window.location.pathname;

    // 
    return (
        <div className={`h-24 bg-darkblue w-full rounded-3xl flex items-center justify-around my-10 shadow-md shadow-midblue transition-all duration-10 ${currentRoute !== "/" ? "place-self-end self-end" : ""}`}>
            {
                currentRoute === "/" ? (
                    <>
                        <Link href="/about" className="text-white px-8 py-6 text-2xl">About me</Link>
                        <Link href="/experience" className="text-white px-8 py-6 text-2xl">Experience</Link>
                        <Link href="/projects" className="text-white px-8 py-6 text-2xl">Projects</Link>
                    </>
                ) : currentRoute === "/about" ? (
                    <>
                        <Link href="/" className="text-white px-8 py-6 text-2xl">Home</Link>
                        <Link href="/about" className="text-white px-8 py-6 text-2xl">Experience</Link>
                        <Link href="/projects" className="text-white px-8 py-6 text-2xl">Projects</Link>
                    </>
                ) : currentRoute === "/projects" ? (
                    <>
                        <Link href="/" className="text-white px-8 py-6 text-2xl">Home</Link>
                        <Link href="/about" className="text-white px-8 py-6 text-2xl">About me</Link>
                        <Link href="/experience" className="text-white px-8 py-6 text-2xl">Experience</Link>
                    </>
                ) : (
                    <>
                        <Link href="/" className="text-white px-8 py-6 text-2xl">Home</Link>
                        <Link href="/about" className="text-white px-8 py-6 text-2xl">About me</Link>
                        <Link href="/projects" className="text-white px-8 py-6 text-2xl">Projects</Link>
                    </>
                )
            }
        </div>
    )
}


export default MenuBarComponent;