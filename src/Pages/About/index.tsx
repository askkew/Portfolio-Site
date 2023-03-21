import React, { useEffect } from "react";
import { AboutDiv, AboutCard, SkillsDiv, SkillsTypograph, AboutTitleTypograph, SkillsTypograph2, ToolsetIcons, ToolSetCard, SkillsBox, SecondSkillsBox, MapCard } from "./AboutStyles";
import { StyledScrollButton, ToolIconLabel, ToolIcons } from './icons'
import { RiBracesFill } from 'react-icons/ri'
import { ColumnDiv } from "../../utils/content";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import { DirectionalLight } from "three";
import { PerspectiveCamera, RenderTexture } from "@react-three/drei/core";
import { Text } from "@react-three/drei";

const About = () => {
  const [isDesktop, setIsDesktop] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    if (window.innerWidth > 1390) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <AboutDiv>
        <SkillsBox>

        </SkillsBox>
        {/* <Canvas>
          <OrbitControls enableZoom={false} autoRotate/>
          <ambientLight intensity={1}/>
          <directionalLight position={[3,2,1]}/>
          <mesh>
            <sphereGeometry args={[1, 12]} />
            <meshStandardMaterial color="green">
              <RenderTexture attach="map">
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <color attach="background" args={['darkblue']} />
              </RenderTexture>
            </meshStandardMaterial>
          </mesh>
        </Canvas> */}
      </AboutDiv>
    </section>
  );
};

export default About



          {/* <ToolSetCard>
            <AboutTitleTypograph>Toolset</AboutTitleTypograph>
            <ToolsetIcons>
              {
                ToolIcons.map((icon, index) => {
                  return (
                    <StyledScrollButton disableRipple key={index}>
                      {icon}
                      {
                        ToolIconLabel[index] && <span>{ToolIconLabel[index]}</span>
                      }
                    </StyledScrollButton>
                  )
                })
              }
            </ToolsetIcons>
          </ToolSetCard> */}