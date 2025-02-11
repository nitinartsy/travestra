import styles from './blog.module.css';

const Blog = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerPart1}>
                <div>
                    <p>TAVASTRA Insights</p>
                </div>
                <div>
                    <img src='/Rectangle51.svg' alt='Rectangle51' />
                </div>
            </div>
            <div className={styles.containerPart2}>
                <div>
                    <h1>BLOG</h1>
                </div>
                <div>
                    <div className={styles.containerPart2Img} >
                        <img src='/Rectangle50.svg' alt='Rectangle50' />
                        <img src='/Vector.svg' alt='Vector' />
                    </div>

                    <div className={styles.containerPart2P} >
                        <p>News, Stories, and Inspiration from the Startup World
                        </p>
                    </div>
                </div>
            </div>



            <div className={styles.blog}>

                <div className={styles.blogHead}>


                    <div className={styles.blogimageContainer}>
                        <img
                            src="/BlogHead.svg"
                            alt="Blog Image"

                        />
                    </div>

                    <div className={styles.textContainer}>
                        <h2 className={styles.title}>
                            Lorem Ipsum is simply dummy text of the printing
                        </h2>
                        <p className={styles.description}>
                            It is a long established fact that a reader will be distracted by the readable
                            content of a page when looking at its layout. The point of using Lorem Ipsum is
                            that it has a more-or-less normal distribution of letters, as opposed to using
                            "Content here, content here"...
                        </p>

                        <a href="#" className={styles.readMore1}>
                            Read more...
                        </a>
                    </div>
                </div>


            </div>

            <div className={styles.blogCart}>

                <div className={styles.blogItem}>
                    <div className={styles.imageContainer}>
                        <img src="/Rectangle40.svg" alt="Blog Image" width={150} height={100} />
                    </div>
                    <div className={styles.Cartcontent}>
                        <h2 className={styles.Carttitle}>Lorem Ipsum is simply dummy text of the printing</h2>
                        <p className={styles.Cartdescription}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                    </div>
                </div>

                <div>
                    <span className={styles.Cartdate}>04/07/2024</span>
                    <a href="#" className={styles.CartreadMore}>Read more...</a>
                </div>


                <div className={styles.blogItem}>
                    <div className={styles.imageContainer}>
                        <img src="/Rectangle40.svg" alt="Blog Image" width={150} height={100} />
                    </div>
                    <div className={styles.Cartcontent}>
                        <h2 className={styles.Carttitle}>Lorem Ipsum is simply dummy text of the printing</h2>
                        <p className={styles.Cartdescription}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>

                    </div>
                </div>

                <div>
                    <span className={styles.Cartdate}>04/07/2024</span>
                    <a href="#" className={styles.CartreadMore}>Read more...</a>
                </div>


                <div className={styles.blogItem}>
                    <div className={styles.imageContainer}>
                        <img src="/Rectangle40.svg" alt="Blog Image" width={150} height={100} />
                    </div>
                    <div className={styles.Cartcontent}>
                        <h2 className={styles.Carttitle}>Lorem Ipsum is simply dummy text of the printing</h2>
                        <p className={styles.Cartdescription}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                    </div>
                </div>

                <div>
                    <span className={styles.Cartdate}>04/07/2024</span>
                    <a href="#" className={styles.CartreadMore}>Read more...</a>
                </div>


                <div className={styles.blogItem}>
                    <div className={styles.imageContainer}>
                        <img src="/Rectangle40.svg" alt="Blog Image" width={150} height={100} />
                    </div>
                    <div className={styles.Cartcontent}>
                        <h2 className={styles.Carttitle}>Lorem Ipsum is simply dummy text of the printing</h2>
                        <p className={styles.Cartdescription}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                    </div>
                </div>

                <div>
                    <span className={styles.Cartdate}>04/07/2024</span>
                    <a href="#" className={styles.CartreadMore}>Read more...</a>
                </div>
            </div>


        </div>
    );
};

export default Blog;