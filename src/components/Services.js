function Services() {
    const infos = [
        ["SOFTWARE DEVELOPMENT","fa fa-code","a compherensiv and elegant devlopment of software products for you on time"],
        ["FREELANCING","fa fa-laptop","Your only one stop to do freelancing works on time with quality and assurance"],
        ["COLLABRATIONS","fa fa-users","if want to work together or recruit some serious tech guy.Might call asap."]
    ]

    return ( 
        <div className="services" id="services">
            <h2>My Services</h2>
            <div className="services_cont">
                {
                    infos.map((el,index) => {
                        return <ServiceBox
                                    name={el[0]}
                                    class={el[1]}
                                    body={el[2]}
                                    key={index}
                                    id={index}
                                />
                    })
                }
            </div>
        </div>
     );
}

export default Services;

function ServiceBox(props) {
    return ( 
        <div className="service-box">
            <h4>{props.name}</h4>
            <i className={props.class}>
            </i>
            <p>{props.body}</p>
        </div>
     );
}
