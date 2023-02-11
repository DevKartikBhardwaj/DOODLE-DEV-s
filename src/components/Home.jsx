import vg from "../assets/4.png"
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"
export default function Home() {
    return (
        <>
            <div className="Home" id="home">
                <main>
                    <h1>Doodle-Dev's</h1>
                    <p>Solution To All Your Problems!</p>
                </main>
            </div>
            <div className="Home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>  We are your one and only solution to the tech problems you face
                        every day. We are leading tech company whose aim is to increase the
                        problem solving ability in children.
                    </p>
                </div>
            </div>
            <div className="Home3" id="about">
                <div>
                    <h1>Who we are?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                        officiis hic illo quos sit commodi, aut magnam odio eligendi? Totam
                        quis officiis fugit sunt dolores nostrum tenetur iusto est odio
                        mollitia. Dolor placeat repellendus officia aspernatur dolorum
                        harum. Dolorem cumque quaerat eius qui deserunt ullam laudantium
                        quia tempore. Dignissimos esse sequi numquam est ipsam nemo,
                        voluptas vel recusandae iste aspernatur qui quasi, commodi, atque
                        ipsa dolores tempore asperiores? Dolores soluta placeat molestiae
                        aperiam, ullam officia fugiat corrupti odio, suscipit ipsum cum vel
                        nemo. Ratione quo tempore fugit quaerat! Facilis beatae impedit
                        similique maxime praesentium sunt unde necessitatibus voluptates
                        ipsa, et, numquam reiciendis eveniet? Aliquid nemo nesciunt placeat,
                        qui fuga quae repellat sunt, non natus, iure ab officia rem ipsa cum
                        sed cumque corporis voluptate quibusdam nostrum quod saepe
                    </p>
                </div>
            </div>
            <div className="Home4" id="brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{ animationDelay: "0.3s" }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{ animationDelay: "0.5s" }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={{ animationDelay: "0.7s" }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                        <div style={{ animationDelay: "1s" }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
}