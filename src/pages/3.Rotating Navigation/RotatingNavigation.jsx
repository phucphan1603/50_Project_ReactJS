import { useEffect, useState } from "react";
import styles from "./RotatingNavigation.module.css";

export const RotatingNavigation = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.title = "Rotating Navigation" 
  })

  return (
    <>
      <div className={`${styles.container} ${show ? styles.show_nav : ""}`}>
        <div className={styles.circle_container}>
          <div className={styles.circle}>
            <button
              id={styles.close}
              onClick={() => {
                setShow(false);
              }}
            >
              <i className="fas fa-times"></i>
            </button>
            <button
              id={styles.open}
              onClick={() => {
                setShow(true);
              }}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
        <div className={styles.content}>
          <h1>Amazing Article</h1>
          <small>Florin Pop</small>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Temporibus, in modi fugit aliquid animi consectetur consequuntur,
            sed aliquam quod eveniet, itaque eligendi enim? Nobis tempora
            recusandae, magni voluptatibus est explicabo labore laudantium
            voluptatum reiciendis cumque fugiat molestiae harum excepturi ullam
            aperiam fuga cupiditate aut, veniam necessitatibus. Unde voluptate
            possimus ipsum, enim dicta labore nesciunt officiis obcaecati sequi
            odit omnis quasi sint, sit recusandae vel voluptatibus? Numquam
            corrupti eius dolorem cum excepturi repellat quod, quas ut velit
            mollitia impedit quos expedita nobis commodi molestias architecto ea
            ipsam nulla dolores. Voluptas exercitationem facere debitis aliquid
            eos harum atque blanditiis soluta quisquam! Commodi harum distinctio
            recusandae reiciendis et pariatur quis fugit nulla perspiciatis
            eius. Tenetur cum possimus error eius nulla at earum tempora autem
            magni. Nihil amet praesentium modi nam laboriosam, expedita
            voluptates delectus corrupti ipsam, non excepturi nobis repudiandae
            rerum! Aut provident mollitia, consequuntur nulla voluptatum harum
            reiciendis sunt accusantium? Quae laudantium culpa quaerat odit,
            enim excepturi! Pariatur libero nobis, quod qui sint eum blanditiis,
            corporis dolorem omnis assumenda unde. Accusantium explicabo, in
            totam aliquam quo dolores et dolor quis fugiat? In esse odio
            molestias et, earum, non odit magnam consectetur voluptate beatae
            consequuntur. Ad quam, inventore voluptas odit optio totam fugiat.
          </p>
          <h3>My Dog</h3>
          <img src="https://picsum.photos/500" alt="dog" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem soluta
            sapiente, ullam veritatis quaerat ad temporibus alias quae, quasi
            eligendi distinctio officia corrupti adipisci saepe facere eveniet
            repellendus cum magnam aperiam expedita aspernatur natus! Quod nam
            nisi perferendis sit iusto sed culpa eveniet alias nobis. Nulla iure
            voluptatum id modi accusantium dolore autem aut deserunt, incidunt
            hic nam vitae enim reprehenderit perspiciatis ratione at quidem
            commodi in iste, eligendi velit facere iusto. Delectus explicabo
            corrupti omnis. Tempora perspiciatis iste sit laboriosam! Aliquid
            tenetur numquam maiores temporibus minus repudiandae voluptatibus
            aperiam aspernatur, animi magnam repellendus vel dolores nisi
            cupiditate eius amet inventore expedita. Voluptate aperiam assumenda
            dignissimos natus minus cumque consequatur, et sapiente, tempore
            eligendi magnam repudiandae ut necessitatibus dolorem mollitia.
            Ipsum eius incidunt dolores dolor ut. Alias atque natus corporis
            eveniet cum aperiam molestias quos, deserunt cupiditate eius
            similique nemo quaerat nesciunt voluptates voluptatem dolorem
            perferendis pariatur accusantium consequuntur! Esse.
          </p>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <i className="fas fa-home"></i>
            Home
          </li>
          <li>
            <i className="fas fa-user-alt"></i>
            About
          </li>
          <li>
            <i className="fas fa-envelope"></i>
            Contact
          </li>
        </ul>
      </nav>
    </>
  );
};
