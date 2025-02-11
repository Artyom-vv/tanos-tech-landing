import {Hero} from "@/screens/Hero";
import {Advantages} from "@/screens/Advantages";
import {Services} from "@/screens/Services";
import {Banner} from "@/screens/Banner";
import {Projects} from "@/screens/Projects";
import {TimeAndMaterials} from "@/screens/TimeAndMaterials";
import {Team} from "@/screens/Team";
import {GeneralDirector} from "@/screens/GeneralDirector";
import {Footer} from "@/screens/Footer";
import React, {useEffect, useState} from "react";
import {RequestModal} from "@/components/RequestModal";
import Modal from "react-modal";


export const ModalContext = React.createContext({
    openModal: () => {},
    closeModal: () => {},
})
export const SectionContext = React.createContext({
    onSection: (id: string) => {}
})

export default function Home() {

    const [isModal, setModal] = useState(false)

    useEffect(() => {
        Modal.setAppElement('body')
    }, [])

    function goToAnchor(id: string) {
        const el = document.getElementById(id)
        el?.scrollIntoView({behavior: "smooth"})
    }

    return (
        <SectionContext.Provider value={{
            onSection: (id: string) => {
                goToAnchor(id)
            }
        }}>
            <ModalContext.Provider value={{
                openModal: () => setModal(true),
                closeModal: () => setModal(false),
            }}>
                <div className="wrapper overflow-x-hidden h-full">
                    <Hero/>
                    <Advantages/>
                    <div id="services">
                        <Services/>
                    </div>
                    <div id="ai">
                        <Banner/>
                    </div>
                    <div id="projects">
                        <Projects/>
                    </div>
                    <TimeAndMaterials/>
                    {/*<Team/>*/}
                    <GeneralDirector/>
                    <div id="contacts">
                        <Footer/>
                    </div>
                </div>
                <RequestModal isModal={isModal}/>
            </ModalContext.Provider>
        </SectionContext.Provider>
    )
}