import { useEffect, useRef, useState } from "react";
import styles from './demo.module.css'

const StickyComponent = () => {
    const sectionRef = useRef(null);
    const [isFixed, setIsFixed] = useState(false);
    const [initialTop, setInitialTop] = useState(0);

    useEffect(() => {
        if (sectionRef.current) {
            setInitialTop(sectionRef.current.offsetTop); // Store initial position
        }

        const handleScroll = () => {
            if (window.scrollY >= initialTop) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [initialTop]);

    return (
        <div className={styles.container}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur minus debitis eos cumque animi officiis! Obcaecati, laboriosam quibusdam laudantium animi unde deserunt quasi dolorum illo ex. Doloremque sunt sed reiciendis architecto quidem, voluptatum perferendis laboriosam debitis amet cupiditate quaerat animi, a quae quisquam fugit magni nam asperiores, perspiciatis error molestiae! Quibusdam iste commodi repellendus, nisi accusantium similique cupiditate fugiat ut, quam temporibus maxime, amet quo ad? Sed nam maiores tempore sunt sapiente odio numquam fugiat, rem odit perferendis quisquam minima amet provident, facilis velit unde explicabo sit rerum necessitatibus molestias. Fuga incidunt nulla officiis pariatur ea quia veniam quaerat ipsam sapiente natus rem minus itaque, facilis nisi laboriosam nihil dolorem nesciunt quis fugit accusantium velit. Aperiam voluptatem tempore, quibusdam a odio porro repudiandae delectus non alias error, cumque aliquam fuga quas iste quis iure consectetur nostrum hic. Id quae dolorum a fuga explicabo labore, magni nulla deserunt asperiores inventore est laboriosam dignissimos perferendis eius! Placeat accusamus cum consequuntur nostrum voluptatibus. Laborum sint itaque reprehenderit ullam soluta asperiores debitis, quos ipsam ex, quibusdam maxime eligendi neque hic omnis, natus voluptatum totam accusamus ad facilis dolor nisi molestiae sunt quaerat quisquam. Officia blanditiis ratione aliquam esse ad excepturi dignissimos distinctio, ea culpa voluptates. Nihil, omnis ab error quod fugiat iusto possimus inventore nam laudantium quos eligendi ipsum eaque dolorem nemo, repellat, accusamus dolor officiis debitis expedita corporis. Voluptatibus esse reprehenderit neque rerum. Voluptate iste eius ea consectetur. Dolorem, asperiores ullam! Veritatis laudantium officia unde dolorum commodi ipsam, deleniti quidem placeat autem optio animi tempore alias enim fuga dolor consectetur ab mollitia ad nesciunt, nostrum qui vitae. Consectetur libero fugit quas officia molestiae quod, voluptatibus quo. Alias dolores nam tempora. Voluptates sit laudantium perferendis ipsa velit culpa facere sunt vel illo iste, vero ipsam sed autem explicabo delectus quos? Itaque quasi incidunt dicta.</p>
            <div ref={sectionRef} className={`${styles.BackendbyHead} ${isFixed ? styles.fixed : ""}`}>
                <h1>Backed by</h1>
            </div>
            <div className={styles.content}>
                {/* Dummy content to allow scrolling */}
                <p>Scroll down to see the effect...</p>
                <div style={{ height: "200vh" }}></div>
            </div>
        </div>
    );
};

export default StickyComponent;
