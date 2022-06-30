import profile from "./profile-pic.jpg"

function AboutMe() {
    return ( 
        <div className="about_me" id="about_me">
            <h3>About Me</h3>
            <div className="about_me_cont">
                <img src={profile} alt="profile-pic"/>
                <div className="about_me_info">
                    <h4>Mr. Chawang Sherpa</h4>
                    <h5>Software Enginner(AI enginner)</h5>
                    <p>a software enginner located at the heart and capital of Nepal,Kathmnadu
                        always eager to learn and experiment, a freidly person with excellent 
                        personality and attitude towards the work given to him, and with 5-6 years
                        of experince in AI and web devlopement sector, he has much required
                        knowledge to do preety much every task he is handed with no time delay
                        and also he is a fun guy to work with and loved by every collegues and 
                        workmates and also bosses too.
                    </p>
                </div>
            </div>
        </div>
     );
}

export default AboutMe;