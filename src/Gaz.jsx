import { useState } from "react";
import Particles from "./components/Particles";
import Stepper, { Step } from "./components/Stepper";
import FallingText from "./components/FallingText";

export default function Gaz() {
  const [name, setName] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

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
        { isCompleted && <div className="absolute top-1/4 w-full h-1/2">
        <FallingText
              text={`Halo ini cuman bercanda, karena secret sushi terlalu mahal`}
              highlightWords={[
                "bercanda",
                "terlalu",
                "mahal",
              ]}
              highlightClass="highlighted"
              trigger="hover"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="2rem"
              mouseConstraintStiffness={0.9}
            />
        </div>}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col">
          {!isCompleted && (
            <>
              <h1 className="mb-14">Di isi dulu gak si form nya</h1>
              <Stepper
                initialStep={1}
                onFinalStepCompleted={() => setIsCompleted(true)}
                backButtonText="Previous"
                nextButtonText="Next"
              >
                <Step>
                  <h2>Booking Now !</h2>
                </Step>
                <Step>
                  <h2>Step 2</h2>
                  <img
                    style={{
                      height: "100px",
                      width: "100%",
                      objectFit: "cover",
                      objectPosition: "center -70px",
                      borderRadius: "15px",
                      marginTop: "1em",
                    }}
                    src="bjir.jpeg"
                  />
                  <p>bjir ada yang ngintip</p>
                </Step>
                <Step>
                  <h2>Insert Name</h2>
                  <input
                    className="outline-none"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name?"
                  />
                </Step>
                <Step>
                  <h2>Final Step</h2>
                  <p>You made it!</p>
                </Step>
              </Stepper>
            </>
          ) }
        </div>
      </div>
    </div>
  );
}
