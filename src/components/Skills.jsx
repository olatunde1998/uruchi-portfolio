import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";
import Mongo from '../assets/mongo.png';
import SpringBoot from "../assets/spring_boot.png";
import Java from "../assets/java_logo.png";
import Bootstrap from "../assets/bootstrap_logo.png";
import Swagger from "../assets/swagger.png";
import MySql from "../assets/mysql_logo.png";
import Docker from "../assets/docker_logo.png";
import Multitrading from "../assets/multitrading.png";
import Spring from "../assets/spring.png";
import RestApi from "../assets/rest-api.png";
import Servlet from "../assets/servlet.png";
import Hibernate from "../assets/hibernate.png";











const Skills = () => {
  return (
    <div
      name="skills"
      id="skills-id"
      className="w-full h-screen bg-[#0a192f] text-gray-300 pt-[650px] pb-[700px]"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4"> These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="Javascript icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="reactjs icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Swagger} alt="swagger icon" />
            <p className="my-4">Swagger</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="Github icon" />
            <p className="my-4">GITHUB</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Bootstrap} alt="HTML icon" />
            <p className="my-4">BOOTSTRAP</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={MySql} alt="HTML icon" />
            <p className="my-4">My SQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="HTML icon" />
            <p className="my-4">MONGO DB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Java} alt="java icon" />
            <p className="my-4">JAVA</p>
          </div>
          
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={SpringBoot}
              alt="springboot icon"
            />
            <p className="my-4">SPRING BOOT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Docker} alt="docker icon" />
            <p className="my-4">DOCKER</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Multitrading} alt="Multitrading icon" />
            <p className="my-4">MULTITRADING</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Spring} alt="spring icon" />
            <p className="my-4">SPRING</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={RestApi} alt="rest API icon" />
            <p className="my-4">REST API</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Servlet} alt="Servlet icon" />
            <p className="my-4">SERVLET</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Hibernate} alt="Hibernate icon" />
            <p className="my-4">HIBERNATE</p>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Skills;
