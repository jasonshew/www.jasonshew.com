import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Me :: Jason Shew</title>
      </Helmet>

      <section id="about" className="prose dark:prose-invert max-w-none">
        <h1>About Me</h1>

        <p>
          In short, I’m an IT worker, lifelong learner, and flâneur. Technology, music, art, and food
          constitute my simple life.
        </p>

        <p>
          Not really big on astrology, but I’m an Aries ♈️ if that means anything to you. If MBTI is more your
          thing, I’m an <Link to="/personality">INTP-T 5w4</Link>. As for my blood type, well, that’s not
          really a hot topic anymore, is it? :-)
        </p>

        <p>
          My career has been quite varied — I’ve been a TESOL instructor, dabbled in songwriting and music
          production, and now I’m diving into computer science and software development. I love coding and
          designing stuff. My hobbies? I’m into music (from listening to records to catching live shows – check out the{' '}
          <Link to="/tracks">Tracks</Link> page if you wonder what I'm listening to), food, tech, reading (I'd love a
          wiki-binge anytime), astronomy, typography, and taking short trips. I'm a believer in{' '}
          <Link to="/epicureanism">Epicureanism</Link> and appreciate the best of both city and country life. Pet-wise
          I'm a dog person but have no pets at this point. I don’t have a huge social circle or a packed schedule for
          social activities, but I’m definitely family-oriented. I call Hamilton, Ontario, home, though I’m open to
          relocating and exploring new experiences in a new place.
        </p>

        <p>
          A netizen since 1999, I’m currently focusing on three things on the Internet: 1️⃣ acquiring new information
          and skills, 2️⃣ expanding career opportunities and project ideas, and 3️⃣ connecting with new friends
          worldwide (not necessarily in that order).
        </p>

        <p>
          And one more thing. This is my personal website. All content here and on{' '}
          <a href="/blog" target="_blank" rel="noopener noreferrer">my blog</a> was created by me unless otherwise
          noted. The views expressed are entirely my own and don’t reflect those of any past, present, or future
          employers — or anyone else, for that matter.
        </p>

        <p>Thank you for dropping by. Have a good one!</p>

        <p>— Jason</p>
      </section>
    </>
  );
}