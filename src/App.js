import React, { Component } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

import Video from "./components/video";
import logo from "./assets/logo.jpg";
import keyboard from "./assets/keyboard.mp4";
import sunset from "./assets/sunset.mp4";
import office from "./assets/office.jpg";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { scrollPosition: 0 };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  getScrollPosition() {
    const { documentElement, body } = document;
    const scrollPosition =
      (documentElement.scrollTop || body.scrollTop) /
      ((documentElement.scrollHeight || body.scrollHeight) -
        documentElement.clientHeight);
    this.setState({ scrollPosition });
  }

  handleScroll() {
    const { documentElement, body } = document;
    const scrollPosition =
      (documentElement.scrollTop || body.scrollTop) /
      ((documentElement.scrollHeight || body.scrollHeight) -
        documentElement.clientHeight);
    this.setState({ scrollPosition });
  }
  render() {
    const { scrollPosition } = this.state;
    return (
      <div className="App">
        <progress value={scrollPosition} />
        <header className="App-header">
          <span>Company Name</span>
          <img src={logo} className="App-logo" alt="company logo" />
          <span>Projects</span>
          <span>Ethos</span>
          <span>Contact</span>
        </header>
        <content>
          <div className="introduction">
            Hey everybody, it's Tuuuuuuuesday! I'd have to train to fight a
            dolphin; I wouldn't just jump out there and start fighting a
            dolphin.
          </div>
          <div className="about">
            <div className="skills">
              <ul>
                <li>DevOps</li>
                <li>UI</li>
                <li>UX</li>
                <li>Service Mesh</li>
                <li>Self-healing systems</li>
              </ul>
            </div>
            <div className="blurb">
              <p>
                Moral of the story here is do not make any sort of accords with
                laser-shooting wolves. Because the Dutch are cheap. The cops are
                here for the crimes against video games you've committed, Sonic.
                I hate watching you drink warm soda. It's bad for you and it's
                bad for the soda. I have a problematic toilet. Oh yeah, Game
                Room! What shit is happening this week? Jeff, can I ask you a
                serious question? Why do we keep doing this? Are you talking
                about a different kind of chocolate fountain, here? The Kool-Aid
                Man never had a flamethrower. Explain Baby Mario.
              </p>
              <a>...more</a>
            </div>
          </div>
          <section className="scrollable">
            <p>
              Video games are bad; discuss. Wait, something kinda funky in Game
              Room? Balderdash! You don't have to go home, but you can't stay
              here. I don't believe in wheels. Let me put my hot blade inside
              you. I did not say, "uh, uh, uh, uh, uh." Harry Potter and the
              9/11 Conspiracy. Fuckin' helicopters are the worst! They're trying
              to kill you as you get in them. CHINA DON'T CARE. I feel like I'm
              gonna throw up, but in a good way.
            </p>
            <p>
              Alright, now I'm not gonna wash my hands, and I'm gonna take these
              cookies. You could put a GoPro on a bear pretty easy. So this is a
              parable for communism. Let's play some meat! You diseased piece of
              shit. You don't have to go home, but you can't stay here. Just
              gonna masturbate under my invisible cloak, don't mind me. You need
              to spit on it first. It makes me angry how fucking much I enjoy
              this game. I didn't come here to get harassed by asshole
              teenagers, I get enough of that as it is. You are Bathroom Guy.
              Well, you're trying to get her pregnant, right? I am the hat
              judge. Show me a hat and I will tell you if it's a good hat or bad
              hat. I want a game that is nothing but kicking dumpsters at
              enemies. This is skin-peelingly bad. Being in the tub with someone
              else's poop, there are few things that are just as sheer terrible.
              Hey E3, maybe stop farting for five seconds. I hate Game Room so
              much. It's sad that I lost my leg, but let's not let it go to
              waste. Fight-or-flight kicks in immediately when you see a man
              shitting in his own hand. John McTiernan, master of modern fucking
              action movies. The man made Predator, god dammit!
            </p>
            <p>
              If you're gonna sit there and tell me Renny Harlin made a better
              movie than him, you are all assholes and I don't want to work with
              you anymore! On death, all hummingbirds explode. Oh, Dennis Leary
              is in this for no good reason. Moral of the story here is do not
              make any sort of accords with laser-shooting wolves. I don't
              believe in wheels. He's making meth. You know what, Jeff? If you
              were a man, you'd be wearing a hat right now. He's like the J.R.R.
              Tolkien of being shitty. I hate watching you drink warm soda. It's
              bad for you and it's bad for the soda. This is what sadomasochism
              will look like in the future. You are looking for far too much
              logical consistency. You're carrying around a Lego baby, Gary.
              Where's the real baby? No one should ever put clothes on a shark.
              Give me access to your members-only site of hot mommy Marios. I
              feel like I'm gonna throw up, but in a good way. Everyone's so
              obsessed with the Link thing, no one ever asks, like, is that the
              same Mario every time? It's easy to piss off Batman. Doesn't take
              much. I have a problematic toilet.
            </p>
            <p>
              My dick doesn't have tits. The day spa is the ultimate high-stakes
              "is this a public space it's OK to be naked in?" scenario. Vinny,
              you and I both, crazy Potterheads. It's like potheads, but for
              Harry Potter. We were talking about furries and yiffing and
              GenCon. Did you know? Babies can't eat Legos. Fact. CHINA DON'T
              CARE. Harry Potter and the 9/11 Conspiracy. I played Ms. Pac-Man.
              It's pretty good. I decided this weekend that it's about
              communism. It's 18 years old, Daytona USA. You could fuck it if
              you wanted to. Timmy, you're not a converted Primal Rage arcade
              cabinet, Timmy! You're a stupid dog! I want you to go to hell. I
              hate socks. BLOCKED. I am the street! Gimme that horsey sauce.
              There's a lot of face and neck stabbing, if you like to stab dudes
              in the face and neck. What PopCap game do you think the Master
              Chief would like the most? You would not have the time to
              retaliate while you're watching this man shit in his own hand,
              preparing to fling it at you. There's too much stuff inside this
              Hot Pocket. Seattle is actually Spanish for "taco." Those penguins
              are shitting Pong balls. Or, snow balls. Or I guess shit balls, is
              what they are. Get your thumb out of your ass and try playing
              games for once, why don't ya. The Kool-Aid Man never had a
              flamethrower. I try not to affiliate myself with Canadians.
            </p>
            <p>
              Too much in your wet diaper? Let's put our frowns on upside down,
              and eat my buddy's leg. You're saying pipes don't have rights?
              Fuckin' helicopters are the worst! They're trying to kill you as
              you get in them. I've got a salty mustache. I am not smart enough
              to know what any of that shit means. Who knows what direction that
              poop is gonna take. Explain Baby Mario. Being there, and then all
              of the sudden, poop floats up, hits the surface. Infinite beards.
              The cops are here for the crimes against video games you've
              committed, Sonic.
            </p>
          </section>
        </content>
        <ParallaxProvider className="fixed-items">
          <Parallax
            className="scrollableOne"
            offsetYMax={0}
            offsetYMin={-40}
            slowerScrollRate
            tag="figure">
            <Video src={keyboard} />
          </Parallax>
          <Parallax
            className="scrollableThree"
            offsetYMax={-40}
            offsetYMin={0}
            slowerScrollRate
            tag="figure">
            <Video src={sunset} />
          </Parallax>
        </ParallaxProvider>
      </div>
    );
  }
}

export default App;
