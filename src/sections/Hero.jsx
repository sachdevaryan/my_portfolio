import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Canvas } from "@react-three/fiber";
import {Astronaut} from "../components/Astronaut";

import { useMediaQuery } from "react-responsive";
import { useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
import { Float } from "@react-three/drei";
import { easing } from "maath";

const Hero = () => {
    const isMobile = useMediaQuery({maxWidth:853})
    return (
        <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
            <HeroText />
            <ParallaxBackground />
            <figure className="absolute inset-0" style={{width:"100vw",height:"100vh"}}>
                <Canvas camera={{position:[0,1,3]}}>
                    <Suspense fallback={<Loader />}>
                    <Float>
                        <Astronaut scale={isMobile && 0.23} position={isMobile && [0, -1.5, 0]} />
                    </Float>
                    <Rig />
                    </Suspense>
                </Canvas>
            </figure>
        </section>
    );
};

function Rig(){
    useFrame((state, delta)=>{
        state.camera.position.lerp(
            {
                x: state.pointer.x / 5,
                y: 1 + state.pointer.y / 5,
                z: 3
            },
            delta * 2
        );
    });
    return null;
}

export default Hero;