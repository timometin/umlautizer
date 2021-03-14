const Footer = ({ children }) => {
  children = Array.isArray(children) === true ? children : [children];
  return (
    <footer className="footer">
      {children.map((child, index) => {
        return (
        <div key={index} className="footer-item">{child}</div>
        );
        })}
    </footer>
  );
}
 
export default Footer;
