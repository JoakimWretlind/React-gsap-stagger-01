import { useEffect } from "react";
import { gsap } from "gsap";
import {
    Container,
    BgIntro,
    IntroContainer,
    HomeH2,
    HomeH3
} from "./styling"



const Home = () => {

    useEffect(() => {
        gsap.to('.first', { duration: 1.5, delay: .1, top: '-100%', ease: 'Expo.easeInOut' })
        gsap.to('.second', { duration: 1.5, delay: .3, top: '-100%', ease: 'Expo.easeInOut' })
        gsap.to('.third', { duration: 1.5, delay: .5, top: '-100%', ease: 'Expo.easeInOut' })
    })



    return (
        <>
            <Container>
                <BgIntro className="first" />
                <BgIntro className="second" />
                <BgIntro className="third" />
                <IntroContainer>
                    <HomeH2>This is a header</HomeH2>
                    <HomeH3>This is a sub-header</HomeH3>
                </IntroContainer>
            </Container>
        </>
    )
}

export default Home
