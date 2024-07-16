import { statics } from "../../config/images";
import AboutBGComponent from "../components/about/AboutBGComponent";
import MenuBarComponent from "../shared/MenuBarComponent";

const AboutMeScreen = () => {

    return (
            <div className="grid grid-cols-12">
                <AboutBGComponent />
                <div className="col-span-1 h-screen"></div>
                <div className="col-span-10 flex flex-col justify-between items-start h-screen">
                    <div className="mt-20 flex items-center gap-x-4 text-darkblue font-bold">
                        <img src={statics.fotoPerfil} width={120} alt="" className="rounded-2xl shadow-md shadow-darkblue"/>
                        <h2 className="text-2xl">EDUARD NICOLÁS <br /> SARMIENTO HERRERA</h2>
                    </div>
                    <ul className="text-darkblue text-2xl mt-6">
                        <li>I’m from and I live in Bogotá , Colombia</li>
                        <br />
                        <li>I’m student of Software Engineer in Politécnico Grancolombiano. </li>
                        <br />
                        <li>I’m experienced developer using React, Flutter and FastAPI between other technologies</li>
                        <br />
                        <li>I’m experienced developer with B2 english and softskills like good communication, <br /> team working and solving problem.</li>
                    </ul>
                    <div className="ml-16 flex gap-x-20 items-center">
                        <h2 className="text-darkblue font-extrabold text-2xl">SOME HOBBIES</h2>
                        <div className="flex gap-8">
                            <div className="bg-midblue p-4 rounded-lg">Read books</div>
                            <div className="bg-midblue p-4 rounded-lg">Trekking</div>
                            <div className="bg-midblue p-4 rounded-lg">Learn new things</div>
                            <div className="bg-midblue p-4 rounded-lg">Travel</div>
                            <div className="bg-midblue p-4 rounded-lg">Watch movies and series</div>
                        </div>
                    </div>
                    <MenuBarComponent />
                </div>
                <div className="col-span-1 h-screen"></div>
            </div>
        );
    }

export default AboutMeScreen;
