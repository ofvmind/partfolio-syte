import { SlideElement } from "@/components/SlideElement";
import cl from "./page.module.css";

export default function Home() {
  return (
    <div className={`center-column ${cl.wrapper}`}>
      <SlideElement slideFrom="lett">
        <div
          style={{ backgroundImage: "url(/partfolio-syte/images/town1.jpg)" }}
          className={`center ${cl.town1}`}
        >
          <p>NEW-YORK</p>
        </div>
      </SlideElement>
      <div className={cl.line} />
      <p className={`center ${cl.town1Description}`}>
        New York City is the largest city in the United States. It is known for
        its skyscrapers, cultural diversity, and famous landmarks like the
        Statue of Liberty, Times Square, and Central Park. As a global center
        for finance, media, and art, New York is often called &quot;The City That
        Never Sleeps.&quot;
      </p>
      <div className={cl.line} />
      <SlideElement slideFrom="right">
        <div className={`center ${cl.towns}`}>
          <div className={`center ${cl.townDiv}`}>
            <p>
              Boston is one of the oldest and most historic cities in the United
              States. Located in Massachusetts, it is known for its rich
              history, prestigious universities like Harvard and MIT, and
              cultural attractions. Boston played a key role in the American
              Revolution and is famous for the Boston Tea Party. Today, it is a
              vibrant city with a mix of historic charm and modern innovation.
            </p>
            <div
              style={{ backgroundImage: "url(/partfolio-syte/images/boston.jfif)" }}
              className={`center ${cl.town2}`}
            >
              BOSTON
            </div>
          </div>
          <div className={`center ${cl.townDiv}`}>
            <div
              style={{ backgroundImage: "url(/partfolio-syte/images/town4.jpg)" }}
              className={`center ${cl.town2}`}
            >
              WASHINGTON
            </div>
            <p>
              Washington, D.C. is the capital of the United States. It is home
              to the U.S. government, including the White House, Capitol
              Building, and Supreme Court. The city is known for its national
              monuments, museums, and political significance. Washington, D.C.
              is not part of any state and has a unique status as a federal
              district.
            </p>
          </div>
        </div>
      </SlideElement>
      <div className={cl.line} />
      <SlideElement slideFrom="left">
        <div
          style={{ backgroundImage: "url(/partfolio-syte/images/town5.jpg)" }}
          className={`center-column ${cl.town1}`}
        >
          <div className={`center ${cl.town1}`}>
            <p>LAS-VEGAS</p>
          </div>
        </div>
      </SlideElement>
      <div className={cl.line} />
      <p className={`center ${cl.town1Description}`}>
        Las Vegas is a famous city in Nevada, known for its casinos,
        entertainment, and nightlife. It is often called &quot;The Entertainment
        Capital of the World.&quot; Tourists visit Las Vegas for shows, luxury
        hotels, and the vibrant atmosphere of the Las Vegas Strip.
      </p>

      <div className={cl.line} />
      <SlideElement slideFrom="right">
        <div className={`center ${cl.towns}`}>
          <div className={`center ${cl.townDiv}`}>
            <p>
              Los Angeles is a large city in southern California, known for its
              entertainment industry, especially Hollywood, the center of the
              American film and television world. It has beautiful beaches, a
              warm climate, and diverse cultures. LA is also famous for
              attractions like the Hollywood Sign, Universal Studios, and
              Beverly Hills.
            </p>
            <div
              style={{ backgroundImage: "url(/partfolio-syte/images/town6.jpg)" }}
              className={`center ${cl.town2}`}
            >
              LOS-ANGELES
            </div>
          </div>
          <div className={`center ${cl.townDiv}`}>
            <div
              style={{ backgroundImage: "url(/partfolio-syte/images/town7.jpg)" }}
              className={`center ${cl.town2}`}
            >
              CHICAGO
            </div>
            <p>
              Chicago is the third-largest city in the United States, located in
              the state of Illinois on the southwestern shore of Lake Michigan.
              Known for its impressive skyline, deep-dish pizza, and rich
              cultural scene, Chicago is a major hub for finance, industry, and
              transportation. The city is famous for its architecture, museums,
              jazz and blues music, and sports teams like the Chicago Bulls and
              Chicago Cubs.
            </p>
          </div>
        </div>
      </SlideElement>
      {/* <div className={cl.line} /> */}
    </div>
  );
}
