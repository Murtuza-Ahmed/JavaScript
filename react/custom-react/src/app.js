const Name = (props) => {
    return React.createElement(
        "span",
        {},
        React.createElement("h1", {}, props.name),
        React.createElement("h1", {}, props.age),
        React.createElement("h3", {}, props.gender)
    );
};
const App = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Name, {
            name: "Murtuza",
            age: 25,
            gender: "male"
        })
    );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));