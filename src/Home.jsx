import { useNavigate } from "react-router-dom";
import AnimatedContent from "./components/AnimatedContent";
import Magnet from "./components/Magnet";
import Particles from "./components/Particles";
import SplitText from "./components/SplitText";
import StarButton from "./components/StarButton";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen">
      <div className="relative h-full text-center">
        <Particles
          particleColors={["#ff40ff", "#ff40ff"]}
          particleCount={1000}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
          className={"absolute top-0 w-full"}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col">
          <SplitText
            text="Halo, Secret sushi gak coyy?"
            className="text-2xl font-semibold"
            delay={150}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
          <div className="flex flex-row-reverse align-center justify-center mt-2 ">
            <AnimatedContent
              distance={150}
              direction="vertical"
              delay={3000}
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
              <div className="flex gap-2 flex-row-reverse">
                <Magnet padding={50} disabled={false} magnetStrength={50}>
                  <button onClick={() => alert("Gak boleh kocak")}>
                    <StarButton
                      as="button"
                      className="custom-class"
                      color="pink"
                      speed="3s"
                    >
                      GAKKK
                    </StarButton>
                  </button>
                </Magnet>
                <Magnet padding={50} disabled={false} magnetStrength={1}>
                  <button onClick={() => navigate("/Gaz")}>
                    <StarButton
                      as="button"
                      className="custom-class"
                      color="pink"
                      speed="3s"
                    >
                      Gass
                    </StarButton>
                  </button>
                </Magnet>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
