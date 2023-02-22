import { ExperienceDiv, ExperienceTitleTypograph, ExperienceTypograph, ExperienceCard, SecondExperienceDiv, ExperienceCardContent } from "./ExperienceStyles";

const Experience = () => {
  return (
    <section id="experience" style={{ background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)'}}>
      <div id='expcardback'>
        <ExperienceDiv id='expcard'>
          <ExperienceTitleTypograph variant="h1">MedPLUS</ExperienceTitleTypograph>
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
        </ExperienceDiv>
      </div>
      <div id="expcard2back">
        <ExperienceDiv id='expcard2'>
          <ExperienceTitleTypograph variant="h1">TDSC</ExperienceTitleTypograph>
        </ExperienceDiv>
      </div>
    </section> 
  );
};

export default Experience;