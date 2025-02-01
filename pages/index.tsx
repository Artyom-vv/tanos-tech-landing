import {Hero} from "@/screens/Hero";
import {Advantages} from "@/screens/Advantages";
import {Services} from "@/screens/Services";
import {Banner} from "@/screens/Banner";
import {Project} from "@/screens/Projects";
import {TimeAndMaterials} from "@/screens/TimeAndMaterials";
import {Team} from "@/screens/Team";
import {GeneralDirector} from "@/screens/GeneralDirector";
import {Footer} from "@/screens/Footer";
import React, {useContext, useState} from "react";
import {RequestModal} from "@/components/RequestModal";

export const ModalContext = React.createContext({
    openModal: () => {},
    closeModal: () => {},
})

export default function Home() {

    const [isModal, setModal] = useState(false)

    return (
        <ModalContext.Provider value={{
            openModal: () => setModal(true),
            closeModal: () => setModal(false),
        }}>
            <div className="wrapper overflow-x-hidden h-full">
                <Hero/>
                <Advantages/>
                <Services/>
                <Banner/>
                <Project/>
                <TimeAndMaterials/>
                <Team/>
                <GeneralDirector/>
                <Footer/>
            </div>
            <RequestModal isModal={isModal}/>
        </ModalContext.Provider>
    )
}