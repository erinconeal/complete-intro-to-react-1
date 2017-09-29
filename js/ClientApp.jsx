const ce = React.createElement;
const MyTitle = function(props) {
  return ce(
    "div",
    null,
    ce("h1", { style: { color: props.color } }, props.title)
  );
};

const MyFirstComponent = function() {
  return ce(
    "div",
    { id: "my-first-component" },
    ce(MyTitle, { title: "Haven", color: "YellowGreen" }),
    ce(MyTitle, { title: "Doc Martin", color: "GreenYellow" }),
    ce(MyTitle, { title: "The Followng", color: "LimeGreen" }),
    ce(MyTitle, { title: "Stranger Things", color: "Peru" })
  );
};

ReactDOM.render(
  React.createElement(MyFirstComponent),
  document.getElementById("app")
);
