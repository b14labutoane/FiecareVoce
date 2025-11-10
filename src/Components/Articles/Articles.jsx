import React from 'react';
import './Articles.css';
import InstagramPost from "../InstagramPost/InstagramPost";
import logo from "../../assets/logo.png";


// Burse
import burse1 from '../../assets/burse/resized_burse00.png';
import burse2 from '../../assets/burse/resized_burse01.png';
import burse3 from '../../assets/burse/resized_burse02.png';
import burse4 from '../../assets/burse/resized_burse03.png';
import burse5 from '../../assets/burse/resized_burse04.png';
import burse6 from '../../assets/burse/resized_burse05.png';
import burse7 from '../../assets/burse/resized_burse06.png';
import burse8 from '../../assets/burse/resized_burse07.png';
import burse9 from '../../assets/burse/resized_burse08.png';
import burse10 from '../../assets/burse/resized_burse09.png';
import burse11 from '../../assets/burse/resized_burse10.png';

// Edu
import edu1 from '../../assets/edu/resized_edu0.png';
import edu2 from '../../assets/edu/resized_edu1.png';
import edu3 from '../../assets/edu/resized_edu2.png';
import edu4 from '../../assets/edu/resized_edu3.png';
import edu5 from '../../assets/edu/resized_edu4.png';
import edu6 from '../../assets/edu/resized_edu5.png';
import edu7 from '../../assets/edu/resized_edu6.png';

// Poli
import poli1 from '../../assets/poli/resized_poli0.png';
import poli2 from '../../assets/poli/resized_poli1.png';
import poli3 from '../../assets/poli/resized_poli2.png';
import poli4 from '../../assets/poli/resized_poli3.png';
import poli5 from '../../assets/poli/resized_poli4.png';
import poli6 from '../../assets/poli/resized_poli5.png';
import poli7 from '../../assets/poli/resized_poli6.png';
import poli8 from '../../assets/poli/resized_poli7.png';

// Isto
import isto1 from '../../assets/isto/resized_isto0.png';
import isto2 from '../../assets/isto/resized_isto1.png';
import isto3 from '../../assets/isto/resized_isto2.png';
import isto4 from '../../assets/isto/resized_isto3.png';
import isto5 from '../../assets/isto/resized_isto4.png';
import isto6 from '../../assets/isto/resized_isto5.png';
import isto7 from '../../assets/isto/resized_isto6.png';
import isto8 from '../../assets/isto/resized_isto7.png';
import isto9 from '../../assets/isto/resized_isto8.png';
import isto10 from '../../assets/isto/resized_isto9.png';
import isto11 from '../../assets/isto/resized_isto10.png';
import isto12 from '../../assets/isto/resized_isto11.png';
import isto13 from '../../assets/isto/resized_isto12.png';
import isto14 from '../../assets/isto/resized_isto13.png';


const Articles = () => {

  const bursePosts = [
    { username: "fiecarevoce", avatar: logo, image: burse1, description: "https://tinyurl.com/bdecs94s" },
    { username: "fiecarevoce", avatar: logo, image: burse2, description: "https://tinyurl.com/yhamnn9j" },
    { username: "fiecarevoce", avatar: logo, image: burse3, description: "https://tinyurl.com/mrvcsbs3" },
    { username: "fiecarevoce", avatar: logo, image: burse4, description: "https://tinyurl.com/vn26tshs" },
    { username: "fiecarevoce", avatar: logo, image: burse5, description: "https://tinyurl.com/mrykra5s" },
    { username: "fiecarevoce", avatar: logo, image: burse6, description: "https://tinyurl.com/2u5dubbu" },
    { username: "fiecarevoce", avatar: logo, image: burse7, description: "https://tinyurl.com/bdf8upmu" },
    { username: "fiecarevoce", avatar: logo, image: burse8, description: "https://tinyurl.com/bdffmau6" },
    { username: "fiecarevoce", avatar: logo, image: burse9, description: "https://tinyurl.com/4emru28u" },
    { username: "fiecarevoce", avatar: logo, image: burse10, description: "https://tinyurl.com/sytxajsf" },
    { username: "fiecarevoce", avatar: logo, image: burse11, description: "https://tinyurl.com/7am8658h" },    
  ];

  const eduPosts = [
    { username: "fiecarevoce", avatar: logo, image: edu1, description: "https://tinyurl.com/2s3ah962" },
    { username: "fiecarevoce", avatar: logo, image: edu2, description: "https://tinyurl.com/2fja2hdt" },
    { username: "fiecarevoce", avatar: logo, image: edu3, description: "https://tinyurl.com/384x98cu"},
    { username: "fiecarevoce", avatar: logo, image: edu4, description: "https://tinyurl.com/37ac9w8x" },
    { username: "fiecarevoce", avatar: logo, image: edu5, description: "https://tinyurl.com/ys2mcw74" },
    { username: "fiecarevoce", avatar: logo, image: edu6, description: "https://tinyurl.com/y7hezuzx" },
    { username: "fiecarevoce", avatar: logo, image: edu7, description: "https://tinyurl.com/42pxh758" }
  ];

  const poliPosts = [
    { username: "fiecarevoce", avatar: logo, image: poli1, description: "https://tinyurl.com/24pbps3n" },
    { username: "fiecarevoce", avatar: logo, image: poli2, description: "https://tinyurl.com/d3py92cf" },
    { username: "fiecarevoce", avatar: logo, image: poli3, description: "https://tinyurl.com/45rvthjn"},
    { username: "fiecarevoce", avatar: logo, image: poli4, description: "https://tinyurl.com/mted7wcp" },
    { username: "fiecarevoce", avatar: logo, image: poli5, description: "https://tinyurl.com/msju9vvs" },
    { username: "fiecarevoce", avatar: logo, image: poli6, description: "https://tinyurl.com/2cc5hr5r" },
    { username: "fiecarevoce", avatar: logo, image: poli7, description: "https://tinyurl.com/2s3k3a2j" },
    { username: "fiecarevoce", avatar: logo, image: poli8, description: "https://tinyurl.com/yr37ynpw" } 
  ];

  const istoPosts = [
    { username: "fiecarevoce", avatar: logo, image: isto1, description: "https://tinyurl.com/mr3jm5ue" },
    { username: "fiecarevoce", avatar: logo, image: isto2, description: "https://tinyurl.com/ypjtcrc2" },
    { username: "fiecarevoce", avatar: logo, image: isto3, description: "https://tinyurl.com/y7nmfyc2"},
    { username: "fiecarevoce", avatar: logo, image: isto4, description: "https://tinyurl.com/5xs2v52w"},
    { username: "fiecarevoce", avatar: logo, image: isto5, description: "https://tinyurl.com/52zhtwrh"},
    { username: "fiecarevoce", avatar: logo, image: isto6, description: "https://tinyurl.com/4w6z5ncf"},
    { username: "fiecarevoce", avatar: logo, image: isto7, description: "https://tinyurl.com/25ad6b9n"},
    { username: "fiecarevoce", avatar: logo, image: isto8, description: "https://tinyurl.com/4hx2s5uf"},
    { username: "fiecarevoce", avatar: logo, image: isto9, description: "https://tinyurl.com/2p9pe6ab"},
    { username: "fiecarevoce", avatar: logo, image: isto10, description: "https://tinyurl.com/3z2mxmkh"},
    { username: "fiecarevoce", avatar: logo, image: isto11, description: "https://tinyurl.com/4fnwhh69"},
    { username: "fiecarevoce", avatar: logo, image: isto12, description: "https://tinyurl.com/bdcr4s3m"},
    { username: "fiecarevoce", avatar: logo, image: isto13, description: "https://tinyurl.com/4upfuesr"},
    { username: "fiecarevoce", avatar: logo, image: isto14, description: "https://tinyurl.com/bdz4vdcb"},
  ];

  return (
    <div className="articles-page">
      {/* Secțiunea Burse */}
      <section className="articles-section">
        <h2>Burse</h2>
        <div className="posts-grid">
          {bursePosts.map((post, index) => (
            <InstagramPost
              key={index}
              username={post.username}
              avatar={post.avatar}
              image={post.image}
              description={post.description}
            />
          ))}
        </div>
      </section>

      {/* Secțiunea Educatie */}
      <section className="articles-section">
        <h2>Educatie</h2>
        <div className="posts-grid">
          {eduPosts.map((post, index) => (
            <InstagramPost
              key={index}
              username={post.username}
              avatar={post.avatar}
              image={post.image}
              description={post.description}
            />
          ))}
        </div>
      </section>

      {/* Secțiunea Politica */}
      <section className="articles-section">
        <h2>Politica</h2>
        <div className="posts-grid">
          {poliPosts.map((post, index) => (
            <InstagramPost
              key={index}
              username={post.username}
              avatar={post.avatar}
              image={post.image}
              description={post.description}
            />
          ))}
        </div>
      </section>

      {/* Secțiunea Istorie */}
      <section className="articles-section">
        <h2>Istorie</h2>
        <div className="posts-grid">
          {istoPosts.map((post, index) => (
            <InstagramPost
              key={index}
              username={post.username}
              avatar={post.avatar}
              image={post.image}
              description={post.description}
            />
          ))}
        </div>
      </section>

    </div>
  );
};

export default Articles;
