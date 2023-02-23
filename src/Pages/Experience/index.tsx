import { RowDiv } from "../../utils/content";
import { ExperienceDiv, ExperienceTitleTypograph, ExperienceTypograph, ExperienceCard, SecondExperienceDiv, ExperienceCardContent, MedPLUS, TDSC, Description } from "./ExperienceStyles";

const Experience = () => {
  return (
    <section id="experience" style={{ background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)'}}>
      <div id='expcardback'>
        <ExperienceDiv id='expcard'>
          <RowDiv>
            <ExperienceTitleTypograph variant="h1">MedPLUS</ExperienceTitleTypograph>
            <ExperienceTypograph variant="body1">freelance work</ExperienceTypograph>
          </RowDiv>
          <MedPLUS>
            <img src="/medplusprimary.png" alt="tempimage" height="300px" id="medpicture"/>
          </MedPLUS>
        </ExperienceDiv>
      </div>
      <div id="expcard2back">
        <ExperienceDiv id='expcard2'>
          <RowDiv>
            <ExperienceTitleTypograph variant="h1">TDSC</ExperienceTitleTypograph>
            <ExperienceTypograph variant="body1">freelance work</ExperienceTypograph>
          </RowDiv>
          <TDSC>
            <img src="/TDSCprimary.png" alt="tempimage" height="300px" id="TDSCpicture"/>
          </TDSC>
        </ExperienceDiv>
      </div>
    </section> 
  );
};

export default Experience;


{/* <SecondExperienceDiv>
            <ExperienceCard id='site'>
              <ExperienceCardContent>
                <img src="/tempimage.png" alt="tempimage" width="357" height="300"/>
                <ExperienceTitleTypograph>MedPLUS</ExperienceTitleTypograph>
                <ExperienceTypograph variant="body1">MedPLUS specializes in providing innovative and comprehensive medical professional liability insurance products through financially secure, A.M. Best Rated insurance carriers.</ExperienceTypograph>
              </ExperienceCardContent>
            </ExperienceCard>
            <ExperienceCard id='site'>
              <ExperienceCardContent>
                <img src="/tempimage.png" alt="tempimage" width="357" height="300"/>
                <ExperienceTitleTypograph>TDSC</ExperienceTitleTypograph>
                <ExperienceTypograph variant="body1">Texas Defensive Shooting Club offers training for self defense as well as range days for enthusiasts</ExperienceTypograph>
              </ExperienceCardContent>
            </ExperienceCard>
          </SecondExperienceDiv> */}