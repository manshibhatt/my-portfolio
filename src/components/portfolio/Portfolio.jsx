import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "TaskFiverr",
    img: "/fiver.png",
    desc:" Developed a platform where users can post and browse gigs at various price points, making it easy to get professional help on-demand without long-term commitments. The platform facilitates secure transactions with integrated payment processing, allows users to leave feedback and reviews for trust and quality, and includes a conversation option for seamless communication between clients and freelancers.",
    link: "https://fiver-clone-frontend-1fga.vercel.app/"
  },
  {
    id: 2,
    title: "Dynamic News Hub",
    img: "/news.png",
    desc: " Deliveres a wide range of news articles spanning diverse fields, including politics, technology, business, entertainment, and more. Integrated a robust backend system to provide real-time news updates, ensuring users received the latest developments as they happened.",
    link: "https://github.com/manshibhatt/NewsApp"
  },
  {
    id: 3,
    title: "Real-estate App",
    img: "/real.png",
    desc: " Developed a real estate app Property search with advanced filters for price, location, and the number of bedrooms, along with detailed descriptions for each property. Secure user authentication and profile management including the ability to save preferred locations. Implemented real-time chat functionality using Socket.IO to enable communication between users and property agents.",
    link: "https://real-estate-kwif.vercel.app/"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={() => window.open(item.link)}>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1 >Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
