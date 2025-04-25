import React from "react";
export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tse3.mm.bing.net/th/id/OIP.Y_dYzHBUeOQ_8o171z4TnQHaFd?rs=1&pid=ImgDetMain"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                        React has grown into one of the most powerful JavaScript libraries thanks to the vibrant and dedicated community behind it. From open-source contributors to curious learners, developers are constantly exploring new patterns, building libraries, and pushing the limits of what's possible on the web. This shared passion for clean code, modular components, and fast user experiences is what keeps React evolving — not just as a tool, but as a culture of innovation.
                        </p>
                        <p className="mt-4 text-gray-600">
                       
                             React empowers developers to create dynamic, high-performance applications with ease. Its component-based architecture and strong community support make building modern web apps both efficient and enjoyable.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}