import React from "react";
import './jee.css';
import './JEE.jpg';

const JEE = () =>{
    return(
        <div>
            

    <div className="container1">
        <h2>Post</h2>
        <div className="blog-post">
            <div className="blog-img">
                <img src={JEE} alt="JEE.jpg"/>
            </div>
            <div className="blog-info">
                <div class="blog-date">
                    <span>Batch Started From August, 1st 2024</span>
                </div>
                <h1 className="blog-title">Join Entrance Examination </h1>
                <p className="blog-text">The Joint Entrance Examination (JEE) is an engineering entrance assessment conducted for admission to various engineering colleges in India. It is constituted by two different examinations:
                     the JEE-Main and the JEE-Advanced.
                        The Joint Seat Allocation Authority (JoSAA) conducts the joint admission process for a total of 23 Indian Institutes of Technology (IITs), 31 National Institutes of Technology (NITs), 25 Indian Institutes of Information Technology (IIITs) campuses and other Government Funded Technical Institutes (GFTIs) based on the rank obtained by a
                     student in JEE-Main or JEE-Advanced, depending on the engineering college.[1].
                </p>
                <a href="#" className="blog-btn">Enroll Now</a>
            </div>
        </div>
        </div>

        </div>
    );
}
export default JEE;