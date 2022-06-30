function Work() {

    const works = [
        ["https://cdn.freecodecamp.org/testable-projects-fcc/images/tribute.jpg","Tribute Page","https://codepen.io/freeCodeCamp/full/qRZeGZ"],
        ["https://cdn.freecodecamp.org/testable-projects-fcc/images/random-quote-machine.png","Random Quote Machine","https://codepen.io/freeCodeCamp/full/wgGVVX"],
        ["https://cdn.freecodecamp.org/testable-projects-fcc/images/calc.png","Js Calculator","https://codepen.io/freeCodeCamp/full/mVEJag"],
        ["https://cdn.freecodecamp.org/testable-projects-fcc/images/map.jpg","Map Data Visualizer","https://codepen.io/freeCodeCamp/full/wGqEga"],
        ["https://cdn.freecodecamp.org/testable-projects-fcc/images/wiki.png","Wikipedia Viewer","https://codepen.io/freeCodeCamp/full/KzXQgy"],
        ["https://cdn.freecodecamp.org/testable-projects-fcc/images/tic-tac-toe.png","Tic-Tac-Toe","https://codepen.io/FreeCodeCamp/"]
    ]


    return ( 
        <div className="works" id="my_works">
            <h2>My Works</h2>
            <div className="works_cont">
                {
                    works.map((el,index) => {
                        return <WorkBox
                                source={el[0]}
                                name={el[1]}
                                link={el[2]}
                                />
                    })
                }
            </div>
        </div>
     );
}

export default Work;

function WorkBox(props) {
    return ( 
        <div className="workBox">
            <img src={props.source} alt="work-pic"/>
            <h3><a href={props.link}>{props.name}</a></h3>
        </div>
     );
}

