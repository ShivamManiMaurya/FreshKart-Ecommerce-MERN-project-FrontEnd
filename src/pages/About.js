import React from "react";
import logo from "../assets/images/logo/logo.png";
import delivery from "../assets/images/logo/delivery-service.webp";
import innovation from "../assets/images/logo/innovation.webp";
import newsroom from "../assets/images/logo/newsroom.jpg";

function About() {
    return (
        <div>
            <div className=" bg-black h-screen text-red-700 flex flex-col items-center justify-center pb-10 px-4">
                <img src={logo} alt="freshkart logo" />
                <h1 className=" text-5xl font-bold w-[600px] text-center py-4 ml-4">
                    <span className="text-6xl ">Fast</span> and{" "}
                    <span className=" text-6xl ">Fresh</span> Delivery at your
                    <span className=" text-6xl "> Doorstep...</span>
                </h1>
                <p className=" text-lg w-[700px] text-center py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio, consequatur? Ipsum blanditiis beatae sapiente veniam?
                    In similique iure tempore quod. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Officia deserunt, quod
                    necessitatibus ad assumenda fuga? Velit totam ducimus
                    blanditiis! Inventore!
                </p>
            </div>
            <div className="flex pt-10 px-10 gap-3 items-center justify-center">
                <div className=" w-[57%] h-[400px] border-2">
                    <img
                        src={delivery}
                        alt="Delivery"
                        className=" w-full h-full object-cover"
                    />
                </div>
                <div className=" w-[40%] px-10 py-8">
                    <h4 className=" text-2xl text-zinc-600">
                        Delivery service at FreshKart
                    </h4>
                    <h2 className=" text-3xl font-bold py-2">
                        Express Delivery by all means.
                    </h2>
                    <p className=" w-[500px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magni facere illo suscipit exercitationem modi quo,
                        necessitatibus reprehenderit fuga, quisquam officia,
                        fugiat alias odio amet aperiam ipsum consectetur sequi
                        aut? Praesentium? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Natus maiores quisquam fugiat nesciunt
                        voluptatum veniam ipsum nemo repudiandae. Magnam soluta
                        architecto, eum ad vel quisquam quod molestias nemo sunt
                        fugiat nobis officiis voluptatum suscipit voluptate. Sit
                        voluptate fuga repellendus, architecto atque ipsum
                        quaerat iusto dolore voluptas voluptates quo odit facere
                        cumque quidem sequi, quam itaque placeat error facilis?
                        Inventore, esse.
                    </p>
                </div>
            </div>
            <div className="flex pt-10 px-10 gap-3 items-center justify-center">
                <div className=" w-[40%] px-10 py-8">
                    <h4 className=" text-2xl text-zinc-600">
                        Technology at FreshKart
                    </h4>
                    <h2 className=" text-3xl font-bold py-2">Innovation</h2>
                    <p className=" w-[500px]">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Sit quod sunt ex vel hic, tempora numquam
                        assumenda libero mollitia voluptas voluptate dignissimos
                        ab culpa ipsum ducimus, aperiam alias. Ipsam ea
                        delectus, enim reiciendis sunt nam animi. Repellendus
                        cum libero, mollitia odit impedit sit iure commodi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit vitae perferendis dolor unde explicabo quasi
                        ratione facilis obcaecati est mollitia quisquam tempora
                        voluptas eum iure autem aspernatur, omnis soluta alias!
                    </p>
                </div>
                <div className=" w-[57%] h-[400px] border-2">
                    <img
                        src={innovation}
                        alt="innovation"
                        className=" w-full h-full object-cover"
                    />
                </div>
            </div>
            <div className="flex pt-10 px-10 gap-3 items-center justify-center">
                <div className=" w-[80%] h-[600px] border-2">
                    <img
                        src={newsroom}
                        alt="newsroom"
                        className=" w-full h-full object-fit"
                    />
                </div>
                <div>
                    <div className=" px-10">
                        <h4 className=" text-2xl text-zinc-800 py-2">
                            Lorem, ipsum dolor.
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Consequuntur pariatur cupiditate labore.
                        </p>
                        <p className=" text-zinc-400 font-bold text-sm py-2">
                            April 23, 2023
                        </p>
                        <div className=" pt-8 w-2/3 border-b-2"></div>
                    </div>
                    <div className=" px-10 ">
                        <h4 className=" text-2xl text-zinc-800 py-2">
                            Lorem, ipsum dolor.
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Consequuntur pariatur cupiditate labore.
                        </p>
                        <p className=" text-zinc-400 font-bold text-sm py-2">
                            April 23, 2023
                        </p>
                        <div className=" pt-8 w-2/3 border-b-2"></div>
                    </div>
                    <div className=" px-10 py-8">
                        <h4 className=" text-2xl text-zinc-800 py-2">
                            Lorem, ipsum dolor.
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Consequuntur pariatur cupiditate labore.
                        </p>
                        <p className=" text-zinc-400 font-bold text-sm py-2">
                            April 23, 2023
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
