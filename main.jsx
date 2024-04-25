
const Title = () => {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Topics covered</h1>
            <p className="topline">The following is a list of all the topics we cover in the MDN learning area.</p>
        </>
    )
}

const MyPara = () => {
    return (
        <div className="container">
            <h2><a href="https://github.com/Raj01Patel/ReactSmallTask-2">Getting started with the web</a></h2>
            <p className="para">Provides a practical introduction to web development for complete beginners.
            </p>

            <h2><a href="https://github.com/Raj01Patel/ReactSmallTask-2">HTML - Structuring the web</a></h2>
            <p className="para">HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.</p>

            <h2><a href="https://github.com/Raj01Patel/ReactSmallTask-2">CSS-Styling the web</a></h2>
            <p className="para">CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.</p>
        </div>
    )
}

const MainContainer = () => {
    return (
        <div id="main-container">
            <Title />
            <MyPara />
        </div>
    )
}

ReactDOM.render(<MainContainer />, document.querySelector("#root"));