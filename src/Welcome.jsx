import React from "react";
import { ScrollContainer ,ScrollPage,Animator,batch,Fade,Sticky,MoveOut, FadeOut,Zoom, StickyIn, FadeIn, ZoomIn,Move,MoveIn} from "react-scroll-motion";

const ZoomInScrollOut=batch(Sticky(),FadeIn(),ZoomIn(),MoveOut(0,-100))
const FadeUp= batch(Fade(),Sticky(),Move())
function Welcome(){
  return <div className="welcome"><ScrollContainer id="welcome" snap="mandatory">
  <ScrollPage page={0}>
    <Animator animation={batch(Sticky(),Fade(),MoveOut(0,-20))}>
      <h2 className="welcome-heading"></h2>
    </Animator>
  </ScrollPage>
  <ScrollPage page={1}>
    <Animator animation={ZoomInScrollOut}>
      <h2 className="welcome-heading">Welcome to</h2>
      <h2 className="welcome-heading">The Space Exploration Society</h2>
    </Animator> 
  </ScrollPage>
  <ScrollPage page={2}>
    <Animator animation={FadeUp}>
    <h1>We ❤️ space!</h1>
    </Animator>
  </ScrollPage>
  <ScrollPage page={3}>
    <div><Animator animation={FadeUp}>
    <h1>And aeronautics too ❤️!</h1>
    </Animator></div>
    
  </ScrollPage>
</ScrollContainer>
<p>Copyright :The Space Exploration Society</p>
</div>;
}

export default Welcome;




