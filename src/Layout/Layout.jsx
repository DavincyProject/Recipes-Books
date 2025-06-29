import propTypes from "prop-types";

export default function Layout({ children }) {
  return <div className="p-4">{children}</div>;
}

Layout.propTypes = {
  children: propTypes.node,
};
